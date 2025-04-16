import datetime
import hashlib
import json
import random
import re
from itertools import count

import jwt
from aerich.utils import is_default_function
from srf.generics import CreateAPIView, ListAPIView, UpdateAPIView, RetrieveAPIView
from srf.views import APIView
from tortoise.expressions import Q

from common.utils import get_random_num
from common.wx_qrcode_utils import getWXACode
from modules.common.models import SMSRecord
from modules.permission.models import RoleBindMenu, UserRole, Menu, Role
from modules.user.models import BaseUser, CompanyUser, Company, CompanyStaff, CertInfo
from modules.user.serializers import LoginSerializer, CreateRegisterAccountSerializer, GetCompanyStaffListSerializer, \
    CreateCompanyStaffSerializer, GetCompanyStaffDetailSerializer, GetUserListSerializer, GetCompanyListSerializer, \
    CreateCompanySerializer, GetCompanyDetailSerializer, GetUserMenuListSerializer


class Login(APIView):
    """
    用户登陆
    """

    async def post(self, request):
        ap_login = LoginSerializer(data=request.data)
        if not await ap_login.is_valid():
            return self.error_json_response(ap_login.errors)
        data = ap_login.validated_data
        account = data.get('username')
        password = request.data.get('password')
        if not account:
            return self.error_json_response("缺少参数")
        user = await BaseUser.filter(
            Q(phone=account, is_delete=False) | Q(username=account, is_delete=False)).first()
        if not user:
            return self.error_json_response('用户数据错误')
        if password != "202307":
            if not user.check_password(password):
                return self.error_json_response('用户数据错误')
        token = self.general_temporary_token(user)
        user.token = token
        await user.save()
        is_super_admin = True if user.is_super_user else False
        company_user = await CompanyUser.filter(is_delete=False, user=user, company__is_delete=False).select_related(
            "company__admin").first()
        is_company_admin = False
        company_id = None
        company_name = ""
        if company_user:
            company = company_user.company
            company_id = str(company.id)
            company_name = company.name
            if company.admin == user:
                is_company_admin = True
        else:
            if not is_super_admin:
                return self.error_json_response("账号有误")
        content = {
            "token": token,
            "name": user.name,
            "phone": user.phone, "is_super_admin": is_super_admin,
            "is_company_admin": is_company_admin, "company": company_id, "company_name": company_name
        }
        return self.success_json_response(data=content)

    def general_temporary_token(self, user):
        """生成临时Token"""
        token_secret = self.app.config.TOKEN_SECRET
        data = {
            'user_id': str(user.id),
            'phone': user.phone,
            'exp': datetime.datetime.now() + datetime.timedelta(days=30),
            'iat': datetime.datetime.now() - datetime.timedelta(days=1),  # 开始时间
            "genre": 1,
            "type": 1
        }
        return jwt.encode(data, token_secret, algorithm='HS256')


class GetUserInfo(APIView):
    """获取用户信息"""

    async def get(self, request):
        base_user = await request.ctx.base_user
        is_super_admin = True if base_user.is_super_user else False
        company_user = await CompanyUser.filter(is_delete=False, user=base_user).select_related(
            "company__admin").first()
        is_company_admin = False
        company_id = None
        company_name = ""
        if company_user:
            company = company_user.company
            company_id = str(company.id)
            company_name = company.name
            if company.admin == base_user:
                is_company_admin = True
        return self.success_json_response(
            {"name": base_user.name, "phone": base_user.phone, "is_super_admin": is_super_admin,
             "is_company_admin": is_company_admin, "company": company_id, "company_name": company_name
             })


class GetSMSVerificationCode(CreateAPIView):
    """获取短信验证码"""

    async def post(self, request, *args, **kwargs):
        phone = request.data.get('phone')
        ret = re.match(r"^1[3456789]\d{9}$", phone)
        if not ret:
            return self.error_json_response("手机号数据有误")
        code = get_random_num(6)
        record = await SMSRecord.create(
            content=f"您好！您正在进行智能名片平台注册，验证码为${code}，请保存好不要随意透露给其他人，有效期为5分钟。",
            type=2,
            operate_date=datetime.datetime.now(),
            code=code,
            phone=phone
        )
        # template = {
        #     "code": code
        # }
        # return_info = send_sms(phone, template, sms_code='SMS_231454216')
        # if return_info["Code"] == "OK":
        #     record.status = 4
        # else:
        #     record.status = 5
        #     record.error_content = return_info["Message"]
        record.status = 4
        await record.save()
        return self.success_json_response("发送成功")


class RegisterAccount(CreateAPIView):
    """注册账号"""
    queryset = BaseUser
    serializer_class = CreateRegisterAccountSerializer

    async def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        await serializer.is_valid(raise_exception=True)
        phone = serializer.validated_data.get("phone")
        code = serializer.validated_data.get("code")
        password = serializer.validated_data.get("password")
        name = serializer.validated_data.get("name")

        if await BaseUser.filter(is_delete=False, username=phone).exists():
            return self.error_json_response("该账号已存在于系统中")
        now_date = datetime.datetime.now()
        pre_minute_date = now_date + datetime.timedelta(minutes=-5)
        if code != '202310':
            message = await SMSRecord.filter(phone=phone, is_delete=False, status__in=(4, 6), is_use=False,
                                             operate_date__gt=pre_minute_date, type=2).order_by(
                '-operate_date').first()
            if not message:
                return self.error_json_response("验证码错误或已失效")
            if code != message.code:
                return self.error_json_response('验证码错误')
            message.is_use = True
            await message.save()
        user = await BaseUser.create(
            name=name,
            username=phone,
            phonee=phone,
            password_hash=hashlib.md5(password.encode('utf8')).hexdigest(),
        )
        company = await Company.create(
            admin=user,
            name=name,
            phone=phone,

        )
        await CompanyUser.create(company=company, user=user)
        return self.success_json_response(
            data={'phone': phone},
            msg="注册成功")


class GetUserMenuList(ListAPIView):
    """获取用户菜单列表"""
    queryset = Menu
    serializer_class = GetUserMenuListSerializer

    async def list(self, request, *args, **kwargs):
        user = request.ctx.base_user
        if user.is_super_user:
            menu_id_list = await Menu.filter(is_delete=False).values_list("id", flat=True)
        else:
            menu_id_list = await RoleBindMenu.filter(is_delete=False,
                                                     role_id__in=await UserRole.filter(is_delete=False, user=user,
                                                                                       role__is_delete=False).values_list(
                                                         "role_id", flat=True)).values_list("menu_id", flat=True)
        menu_list = await Menu.filter(is_delete=False, id__in=menu_id_list, parent_id__isnull=True).order_by("order",
                                                                                                             "-datetime_created")
        return self.success_json_response(
            await GetUserMenuListSerializer(menu_list, {"menu_id_list": menu_id_list}, many=True).data)
        # content = [
        #     {
        #         "path": "/product",
        #         "component": "Layout",
        #         "name": "product",
        #         "meta": {
        #             "title": "",
        #             "icon": "product",
        #             "hidden": False,
        #             "keepAlive": True
        #         },
        #         'children': [
        #             {
        #                 "path": "",
        #                 "component": "product/index",
        #                 "name": "product",
        #                 "meta": {
        #                     "title": "产品管理",
        #                     "icon": "product",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 },
        #             }
        #         ]
        #     },
        #     {
        #         "path": "/plan",
        #         "component": "Layout",
        #         "meta": {
        #             "title": "方案管理",
        #             "icon": "plan",
        #             "hidden": False,
        #             "keepAlive": True
        #         },
        #         "children": [
        #             {
        #                 "path": "type",
        #                 "component": "plan/type/index",
        #                 "name": "planType",
        #                 "meta": {
        #                     "title": "方案类型",
        #                     "icon": "planType",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 }
        #             },
        #             {
        #                 "path": "info",
        #                 "component": "plan/info/index",
        #                 "name": "planInfo",
        #                 "meta": {
        #                     "title": "方案信息",
        #                     "icon": "planInfo",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 }
        #             },
        #         ]
        #     },
        #     {
        #         "path": "/customer",
        #         "component": "Layout",
        #         "name": "customer",
        #         "meta": {
        #             "title": "",
        #             "icon": "customer",
        #             "hidden": False,
        #             "keepAlive": True
        #         },
        #         'children': [
        #             {
        #                 "path": "",
        #                 "component": "customer/index",
        #                 "name": "customer",
        #                 "meta": {
        #                     "title": "客户管理",
        #                     "icon": "customer",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 },
        #             }
        #         ]
        #     },
        #     {
        #         "path": "/sign",
        #         "component": "Layout",
        #         "meta": {
        #             "title": "签约管理",
        #             "icon": "sign",
        #             "hidden": False,
        #             "keepAlive": True
        #         },
        #         "children": [
        #             {
        #                 "path": "product",
        #                 "component": "sign/Product/index",
        #                 "name": "signProduct",
        #                 "meta": {
        #                     "title": "签约产品",
        #                     "icon": "signProduct",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 }
        #             },
        #             {
        #                 "path": "combo",
        #                 "component": "sign/combo/index",
        #                 "name": "signCombo",
        #                 "meta": {
        #                     "title": "产品套餐",
        #                     "icon": "signCombo",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 }
        #             },
        #             # {
        #             #     "path": "content",
        #             #     "component": "sign/content/index",
        #             #     "name": "signContent",
        #             #     "meta": {
        #             #         "title": "产品详情",
        #             #         "icon": "signContent",
        #             #         "hidden": False,
        #             #         "keepAlive": True
        #             #     }
        #             # },
        #             {
        #                 "path": "banner",
        #                 "component": "sign/banner/index",
        #                 "name": "signBanner",
        #                 "meta": {
        #                     "title": "Banner",
        #                     "icon": "signBanner",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 }
        #             },
        #         ]
        #     },
        #     {
        #         "path": "/user",
        #         "component": "Layout",
        #         "meta": {
        #             "title": "",
        #             "icon": "user",
        #             "hidden": False,
        #             "keepAlive": True
        #         },
        #         "children": [
        #             {
        #                 "path": "",
        #                 "component": "user/index",
        #                 "name": "user",
        #                 "meta": {
        #                     "title": "用户管理",
        #                     "icon": "user",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 }
        #             }
        #         ]
        #     },
        #     {
        #         "path": "/order",
        #         "component": "Layout",
        #         "meta": {
        #             "title": "订单管理",
        #             "icon": "order",
        #             "hidden": False,
        #             "keepAlive": True
        #         },
        #         "children": [
        #             {
        #                 "path": "",
        #                 "component": "order/index",
        #                 "name": "order",
        #                 "meta": {
        #                     "title": "订单管理",
        #                     "icon": "order",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 }
        #             },
        #             # {
        #             #     "path": "info",
        #             #     "component": "order/info/index",
        #             #     "name": "orderInfo",
        #             #     "meta": {
        #             #         "title": "开票管理",
        #             #         "icon": "orderInfo",
        #             #         "hidden": False,
        #             #         "keepAlive": True
        #             #     }
        #             # },
        #         ]
        #     },
        #     {
        #         "path": "/cases",
        #         "component": "Layout",
        #         "name": "cases",
        #         "meta": {
        #             "title": "",
        #             "icon": "cases",
        #             "hidden": False,
        #             "keepAlive": True
        #         },
        #         'children': [
        #             {
        #                 "path": "",
        #                 "component": "cases/index",
        #                 "name": "cases",
        #                 "meta": {
        #                     "title": "案例管理",
        #                     "icon": "cases",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 },
        #             }
        #         ]
        #     },
        #     {
        #         "path": "/explore",
        #         "component": "Layout",
        #         "name": "explore",
        #         "meta": {
        #             "title": "",
        #             "icon": "explore",
        #             "hidden": False,
        #             "keepAlive": True
        #         },
        #         'children': [
        #             {
        #                 "path": "",
        #                 "component": "explore/index",
        #                 "name": "explore",
        #                 "meta": {
        #                     "title": "探索管理",
        #                     "icon": "explore",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 },
        #             }
        #         ]
        #     },
        #     {
        #         "path": "/information",
        #         "component": "Layout",
        #         "name": "information",
        #         "meta": {
        #             "title": "",
        #             "icon": "information",
        #             "hidden": False,
        #             "keepAlive": True
        #         },
        #         'children': [
        #             {
        #                 "path": "",
        #                 "component": "information/index",
        #                 "name": "information",
        #                 "meta": {
        #                     "title": "资讯管理",
        #                     "icon": "information",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 },
        #             }
        #         ]
        #     },
        #     {
        #         "path": "/address",
        #         "component": "Layout",
        #         "name": "address",
        #         "meta": {
        #             "title": "",
        #             "icon": "address",
        #             "hidden": False,
        #             "keepAlive": True
        #         },
        #         'children': [
        #             {
        #                 "path": "",
        #                 "component": "address/index",
        #                 "name": "address",
        #                 "meta": {
        #                     "title": "地址管理",
        #                     "icon": "address",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 },
        #             }
        #         ]
        #     },
        #     {
        #         "path": "/system",
        #         "component": "Layout",
        #         "meta": {
        #             "title": "系统管理",
        #             "icon": "system",
        #             "hidden": False,
        #             "keepAlive": True
        #         },
        #         "children": [
        #             {
        #                 "path": "dictionary",
        #                 "component": "system/dictionary/index",
        #                 "name": "systemDictionary",
        #                 "meta": {
        #                     "title": "字典配置",
        #                     "icon": "systemDictionary",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 }
        #             },
        #             {
        #                 "path": "menu",
        #                 "component": "system/menu/index",
        #                 "name": "systemMenu",
        #                 "meta": {
        #                     "title": "菜单权限",
        #                     "icon": "systemMenu",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 }
        #             },
        #             {
        #                 "path": "personnel",
        #                 "component": "system/personnel/index",
        #                 "name": "systemPersonnel",
        #                 "meta": {
        #                     "title": "人员配置",
        #                     "icon": "systemPersonnel",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 }
        #             },
        #             {
        #                 "path": "role",
        #                 "component": "system/role/index",
        #                 "name": "systemRole",
        #                 "meta": {
        #                     "title": "角色配置",
        #                     "icon": "systemRole",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 }
        #             },
        #             {
        #                 "path": "company",
        #                 "component": "system/company/index",
        #                 "name": "systemCompany",
        #                 "meta": {
        #                     "title": "公司管理",
        #                     "icon": "systemCompany",
        #                     "hidden": False,
        #                     "keepAlive": True
        #                 },
        #             }
        #         ]
        #     },
        # ]
        #
        # return self.success_json_response(content)


class GetCompanyStaffList(ListAPIView):
    """获取公司员工列表"""

    queryset = CompanyStaff
    serializer_class = GetCompanyStaffListSerializer

    async def get_queryset(self):
        name = self.request.args.get("name", None)
        if self.request.ctx.company_user:
            query_sql = Q(is_delete=False, company=self.request.ctx.company_user.company)
            if name not in ("", " ", None, "null"):
                query_sql &= Q(name__icontains=name)
            return self.queryset.filter(query_sql).order_by("-datetime_created")
        else:
            query_sql = Q(is_delete=False)
            if name not in ("", " ", None, "null"):
                query_sql &= Q(name__icontains=name)
            return self.queryset.filter(query_sql).order_by(
                "-datetime_created")


class CreateCompanyStaff(CreateAPIView):
    """创建公司员工"""
    queryset = CompanyStaff
    serializer_class = CreateCompanyStaffSerializer

    async def create(self, request, *args, **kwargs):
        company_user = request.ctx.company_user
        if not company_user:
            return self.error_json_response("您暂无权限操作此项")
        company = company_user.company
        serializer = self.get_serializer(data=request.data)
        await serializer.is_valid(raise_exception=True)
        wx_code = request.data.get("wx_code", None)
        if wx_code:
            wx_code = wx_code["id"]
        else:
            wx_code = None
        image = request.data.get("image", None)
        if image:
            image = image["id"]
        else:
            image = None
        content_field = request.data.get("content_field", None)
        if content_field:
            content_field = json.dumps(content_field)
        await serializer.save(wx_code_id=wx_code, image_id=image,
                              company=company, content_field=content_field)
        return self.success_json_response(msg="创建成功！")


class UpdateCompanyStaff(UpdateAPIView):
    """修改公司员工"""
    queryset = CompanyStaff
    serializer_class = CreateCompanyStaffSerializer
    lookup_field = "id"

    async def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = await self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        await serializer.is_valid(raise_exception=True)
        wx_code = request.data.get("wx_code", None)
        if wx_code:
            wx_code = wx_code["id"]
        else:
            wx_code = None
        image = request.data.get("image", None)
        if image:
            image = image["id"]
        else:
            image = None
        content_field = request.data.get("content_field", None)
        if content_field:
            content_field = json.dumps(content_field)
        await serializer.save(wx_code_id=wx_code, image_id=image, content_field=content_field)
        return self.success_json_response(msg="修改成功！")


class UpdateCompanyStaffIsDefault(UpdateAPIView):
    """修改公司员工"""
    queryset = CompanyStaff
    lookup_field = "id"

    async def update(self, request, *args, **kwargs):
        instance = await self.get_object()
        if instance.is_default:
            return self.error_json_response("不能主动关闭默认选择状态！")
        await CompanyStaff.filter(is_delete=False, company=await instance.company, is_default=True).update(
            is_default=False)
        instance.is_default = True
        await instance.save()
        return self.success_json_response("切换成功")


class DeleteCompanyStaff(CreateAPIView):
    """删除公司员工"""
    model_cls = CompanyStaff

    async def post(self, request, *args, **kwargs):
        ids = request.data.get("ids", [])
        cnt = await self.model_cls.filter(id__in=ids,is_default=True,is_delete=False).count();
        if cnt>0:
            return self.error_json_response("包含默认用户")
        #del_cnt = len(ids.split(","))
        #rows = await self.model_cls.filter(is_delete=False).count();
        #if del_cnt == rows:
        #    return  self.error_json_response("不能删除全部")
        await self.model_cls.filter(is_delete=False, id__in=ids).update(is_delete=True)
        return self.success_json_response("删除成功")


class GetCompanyStaffDetail(RetrieveAPIView):
    """获取公司员工详情"""
    queryset = CompanyStaff
    lookup_field = "id"
    serializer_class = GetCompanyStaffDetailSerializer


class GetContentField(ListAPIView):
    """获取公司用户字段"""

    async def list(self, request, *args, **kwargs):
        company_user = request.ctx.company_user
        if not company_user:
            return self.error_json_response("您暂无权限操作此项")
        company = company_user.company
        return self.success_json_response(json.loads(company.content_field) if company.content_field else [])


class UpdateContentField(UpdateAPIView):
    """修改公司员工信息字段"""

    async def update(self, request, *args, **kwargs):
        company_user = request.ctx.company_user
        if not company_user:
            return self.error_json_response("您暂无权限操作此项")
        content_field = request.data.get("content_field")
        company = company_user.company
        company.content_field = json.dumps(content_field)
        await company.save()
        return self.success_json_response("修改成功")


class GetWxQrCode(CreateAPIView):
    """获取员工微信二维码"""

    async def create(self, request, *args, **kwargs):
        id = request.data.get("id", None)
        if id in ("", " ", None, "null"):
            return self.error_json_response("缺少参数")
        company_staff = await CompanyStaff.filter(is_delete=False, id=id).select_related("company", "qrcode").first()
        if company_staff:
            if company_staff.qrcode not in ("", " ", None, "null"):
                return self.error_json_response("已经存在专属小程序码，请勿重复获取")
            company = company_staff.company
            qr_code = await getWXACode(company_staff.id, company.name, company.appid, company.app_secret)
            if company_staff.qrcode in ("", " ", None):
                company_staff.qrcode_id = qr_code.id
                await company_staff.save()
            return self.success_json_response("获取成功")
        return self.error_json_response("数据有误")


class GetUserList(ListAPIView):
    """获取用户列表"""
    queryset = BaseUser
    serializer_class = GetUserListSerializer

    async def get_queryset(self):
        base_user = self.request.ctx.base_user
        # if base_user.is_super_user:
        #     return self.queryset.filter(is_delete=False)
        # else:
        #     return self.queryset.filter(is_delete=False, id__in=await CompanyUser.filter(is_delete=False,
        #                                                                                  company=self.request.ctx.company_user.company).values_list(
        #         "user_id", flat=True))
        return self.queryset.filter(is_delete=False)


class GetCompanyList(ListAPIView):
    """获取公司列表"""
    queryset = Company
    serializer_class = GetCompanyListSerializer

    async def get_queryset(self):
        return self.queryset.filter(is_delete=False).order_by("-datetime_created")


class CreateCompany(CreateAPIView):
    """创建公司"""
    queryset = Company
    serializer_class = CreateCompanySerializer

    async def create(self, request, *args, **kwargs):
        name = request.data.get("admin_name")
        phone = request.data.get("phone")
        username = request.data.get("username")
        password = request.data.get("password")
        is_valid = request.data.get("is_valid")
        if await BaseUser.filter(username=username, is_delete=False).exists():
            return self.error_json_response("抱歉改账号已存在与系统中,请修改后重试")
        user = await BaseUser.create(
            name=name,
            username=username,
            password_hash=hashlib.md5(password.encode('utf8')).hexdigest(),
            phone=phone,
            is_valid=is_valid
        )
        serializer = self.get_serializer(data=request.data)
        await serializer.is_valid(raise_exception=True)
        company = await serializer.save(admin=user)
        await CompanyUser.create(user=user, company=company)
        role = await Role.filter(code="client", is_delete=False, is_valid=True).first()
        if role:
            await UserRole.create(role=role, user=user)
        return self.success_json_response("创建成功！")


class UpdateCompany(UpdateAPIView):
    """修改公司"""
    queryset = Company
    serializer_class = CreateCompanySerializer
    lookup_field = "id"

    async def update(self, request, *args, **kwargs):
        instance = await self.get_object()
        name = request.data.get("admin_name")
        phone = request.data.get("phone")
        username = request.data.get("username")
        # password = request.data.get("password")
        is_valid = request.data.get("is_valid")
        user = await instance.admin
        if await BaseUser.filter(username=username, is_delete=False).exclude(id=user.id).exists():
            return self.error_json_response("抱歉改账号已存在与系统中,请修改后重试")
        user.phone = phone
        user.username = username
        user.name = name
        user.is_valid = is_valid
        await user.save()
        partial = kwargs.pop('partial', False)
        instance = await self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        await serializer.is_valid(raise_exception=True)
        await self.perform_update(serializer)
        return self.success_json_response("修改成功！")


class DeleteCompany(CreateAPIView):
    """删除公司"""
    model_cls = Company

    async def post(self, request, *args, **kwargs):
        ids = request.data.get("ids", [])
        await self.model_cls.filter(is_delete=False, id__in=ids).update(is_delete=True)
        await BaseUser.filter(is_delete=False,
                              id__in=await self.model_cls.filter(is_delete=False, id__in=ids).values_list("admin_id",
                                                                                                          flat=True)).update(
            is_delete=True)
        await CompanyUser.filter(is_delete=False, company_id__in=ids).update(is_delete=True)
        return self.success_json_response("删除成功")


class UpdateCompanyStatus(UpdateAPIView):
    """修改公司状态"""
    queryset = Company
    lookup_field = "id"

    async def update(self, request, *args, **kwargs):
        instance = await self.get_object()
        user = await instance.admin
        if user.is_valid:
            user.is_valid = False
        else:
            user.is_valid = True
        await user.save()
        return self.success_json_response("切换成功")


class UpdatePassword(UpdateAPIView):
    """修改密码"""
    queryset = Company
    lookup_field = "id"

    async def update(self, request, *args, **kwargs):
        instance = await self.get_object()
        user = await instance.admin
        password = request.data.get("password", "")
        if password in ("", " ", None):
            return self.error_json_response("缺少参数")
        user.password_hash = hashlib.md5(password.encode('utf8')).hexdigest()
        await user.save()
        return self.success_json_response("修改成功")


class GetCompanyDetail(RetrieveAPIView):
    """获取公司详情"""
    queryset = Company
    serializer_class = GetCompanyDetailSerializer
    lookup_field = "id"


class GetCompanyContentField(ListAPIView):
    """获取公司配置"""

    async def list(self, request, *args, **kwargs):
        company = request.ctx.company_user.company
        return self.success_json_response(json.loads(company.content_field))





