<template>
    <div class="p-page" style="background-color:#fff;margin-top: 20px;">
        <!-- 名片样式 -->
        <div class="headerBg">
            <div class="cardBg" :style="{
                backgroundImage: `url(${IMG}/jftx/headerBg/headerBg1.png?time=${timestamp})`
            }">
                <div style="display: flex;flex-direction: column;width: 80%;">
                    <div style="margin-left: 76px;">
                        <h1 class="cardName">{{ userInfo.name }}</h1>
                        <h2 class="cardEname">{{ userInfo.Ename }}</h2>
                        <h3 class="cardPost">{{ userInfo.post }}</h3>
                    </div>
                    <div class="pm">
                        <div class="text1">
                            <van-image :src="IMG + 'jftx/icon/phone.png'" width="10" height="10" class="m-r-3" />
                            {{ userInfo.phone }}
                        </div>
                        <div class="text2">
                            <van-image :src="IMG + 'jftx/icon/email.png'" width="10" height="10" class="m-r-3" />{{
                                userInfo.email }}
                        </div>
                        <div class="text3">
                            <van-image :src="IMG + 'jftx/icon/web.png'" width="10" height="10" class="m-r-3" />
                            {{ userInfo.web }}
                        </div>
                        <div style="align-items: start;display: flex;">
                            <van-image :src="IMG + 'jftx/icon/address.png'" width="10" height="10" class="m-r-3" />
                            <div class="text4">{{ userInfo.address }}</div>
                        </div>
                    </div>

                </div>

                <van-image v-if="userInfo && userInfo.wx_code && userInfo.wx_code.url" :src="userInfo.wx_code.url"
                    width="60" height="60" />

            </div>
            <div class="cardInfo">
                <!-- <div class="cardInfoItem">
                    <van-image :src="IMG + '/jftx/image/share.png'" width="20" height="20"></van-image>
                    <div class="cardInfoItemContent">
                        分享名片
                    </div>
                </div>
                <div class="cardLine"></div> -->
                <div class="cardInfoItem" @click="callPhone(userInfo.phone)">
                    <van-image :src="IMG + '/jftx/image/phone.png'" width="20" height="20"></van-image>
                    <div class="cardInfoItemContent">
                        拨打电话
                    </div>
                </div>
                <div class="cardLine"></div>
                <div class="cardInfoItem" @click="navigateToMap(userInfo.address, '九方通逊')">
                    <van-image :src="IMG + '/jftx/image/address.png'" width="20" height="20"></van-image>
                    <div class="cardInfoItemContent">
                        地图导航
                    </div>
                </div>
            </div>

        </div>
        <!-- 公司简介 -->
        <div>
            <van-tabs v-model="active" animated swipeable color="#FF7D00" active-color="#FF7D00">
                <van-tab v-for="(item, index) in tabList" :key="index" :title="item.name">
                    <div v-if="active === index">
                        <Introduction v-if="item.component === 'Introduction'" :list="introductionList" />
                        <Service v-if="item.component === 'Service'" :list="serviceList" :planList="planList" />
                        <Contact v-if="item.component === 'Contact'" :list="contactList" ref="contact"
                            @open-dialog="getKfShow" @open-dialog-wd="getWdShow" />
                    </div>
                </van-tab>
            </van-tabs>

        </div>
        <van-popup v-model="kfShow" round :style="{ height: '200px', width: '250px' }" :closeable="true">
            <div style="text-align: center;margin:45px  auto 0 auto; display: flex;flex-direction: column;">
                <van-image :src="IMG + '/jftx/image/kf.png' + '?time=' + new Date().getTime()" width="100px"
                    height="100px" style="display: block;margin: 0 auto;">
                </van-image>
                <span style="font-size: 14px;color: #333333;margin-top: 10px;">扫码添加客服，在线咨询</span>
            </div>
        </van-popup>
        <van-popup v-model="wdShow" round :style="{ width: '90%', 'max-height': '604px' }" :closeable="true">
            <div style="padding: 30px 10px 30px 10px ;">
                <!-- <van-search v-model="addressInput" shape="round" placeholder="请输入地址或点击下方地址~" class="search" /> -->
                <div style="margin: 0 10px;">
                    <div class="addressLine">
                        <div class="line"></div>
                        <span class="addressText">九方总部 · 中国深圳</span>

                    </div>
                    <div style="margin-top: 10px;display: flex;flex-direction: column;">
                        <span class="addressName">热线电话：</span>
                        <span class="addressDescribe">400-7755-990</span>
                    </div>
                    <div v-if="index < 3" class="" v-for="(item, index) in addressList" :key="index"
                        style="margin-top: 10px;display: flex;flex-direction: column;"
                        @click="navigateToMap(item.describe, item.name)">
                        <span class="addressName">{{ item.name }}</span>
                        <span class="addressDescribe">{{ item.describe }}</span>
                    </div>
                    <div class="addressLine">
                        <div class="line"></div>
                        <span class="addressText">九方分公司地址</span>
                    </div>
                    <div v-if="index > 3" class="" v-for="(item, index) in addressList" :key="index"
                        style="margin-top: 10px;display: flex;flex-direction: column;"
                        @click="navigateToMap(item.describe, item.name)">
                        <span class="addressName">{{ item.name }}</span>
                        <span class="addressDescribe">{{ item.describe }}</span>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import { Toast } from "vant";
import Introduction from "@/components/page/九方通逊/components/home/introduction.vue";
import Service from "@/components/page/九方通逊/components/home/service.vue";
import Contact from "@/components/page/九方通逊/components/home/contact.vue";

export default {
    components: {
        Introduction,
        Service,
        Contact,
    },
    data() {
        return {
            tabList: [
                {
                    name: "企业简介",
                    id: "qyjs",
                    component: 'Introduction',
                },
                {
                    name: "服务介绍",
                    id: "fwjs",
                    component: 'Service',
                },
                {
                    name: "联系我们",
                    id: "lxwm",
                    component: 'Contact',
                },
            ], ///tab栏列表
            active: "0", //默认tab
            IMG: this.IMG,
            userInfo: {},
            introductionList: [],
            serviceList: [],
            timestamp: new Date().getTime(),
            planList: [],
            kfShow: false,
            wdShow: false,
            addressList: [],
            addressInput: ''
        };

    },
    created() {
        // this.getCommitUserName("c7705fae-fd7e-11f0-a136-00163e237fe6");
        this.getUserInfo();
        this.getList();
    },

    methods: {
        getKfShow() {
            this.kfShow = !this.kfShow
        },
        getWdShow() {
            this.wdShow = !this.wdShow
        },
        // 电话
        getPhone() {
            if (!this.parseContactInfo(this.phoneAndAddress.pdf).phone) {
                Toast({
                    message: "联系电话不存在",
                    forbidClick: true,
                });
                return;
            }
            window.location.href = "tel:" + this.parseContactInfo(this.phoneAndAddress.pdf).phone;
        },
        // 地址
        getAddress() {
            Toast.loading({
                message: "加载中...",
                forbidClick: true,
            });
            this.$router.push({
                path: "/map",
                query: {
                    address: this.phoneAndAddress.describe,
                    name: this.phoneAndAddress.name,
                    isTap: true,
                },
            });
            Toast.clear;
        },
        // 打开地图
        getMap(address, name) {
            Toast.loading({
                message: "加载中...",
                forbidClick: true,
            });
            this.$router.push({
                path: "/map",
                query: { address: address, name: name, isTap: true },
            });
            Toast.clear;
        },
        // 内容信息
        getList() {
            this.$http
                .categorySolutionTypeList({ parent_name: "首页" })
                .then((res) => {
                    // res.data.list.forEach((data)=>{
                    //   if(data.name=='简介内容'){

                    //   }
                    // })
                    this.list = res.data.list;
                    this.introductionList = res.data.list.find(item => item.name === '企业简介').solution_list || [];
                    const getService = name => res.data.list.find(item => item.name === name)

                    this.serviceList = [
                        { name: '跨境专线物流', list: getService('跨境专线物流') ? getService('跨境专线物流').solution_list : [], img: getService('跨境专线物流') ? getService('跨境专线物流').image.url : '' },
                        { name: '海外仓配', list: getService('海外仓配') ? getService('海外仓配').solution_list : [], img: getService('跨境专线物流') ? getService('跨境专线物流').image.url : '' }
                    ]
                    this.planList = getService('各行业国际物流解决方案') ? getService('各行业国际物流解决方案').solution_list : [];
                    this.contactList = [
                        {
                            name: "线下网点",
                            list: getService('线下网点') ? getService('线下网点').solution_list : []
                        },
                        {
                            name: "联系我们",
                            list: getService('联系我们') ? getService('联系我们').solution_list : []
                        },
                        {
                            name: "常见问题",
                            list: getService('国际物流常见问题') ? getService('国际物流常见问题').solution_list : []
                        },
                        {
                            name: "合作伙伴",
                            list: getService('合作伙伴') ? getService('合作伙伴').solution_list : []
                        }
                    ]
                    this.addressList = getService('线下网点') ? getService('线下网点').solution_list : []
                    console.log("企业简介列表内容", this.contactList);
                });
        },
        //判断
        getWebAddress(list, str, tacit = "-") {
            if (JSON.stringify(list) !== JSON.stringify([])) {
                let webAddress = null;
                list.forEach((item) => {
                    if (item.key == str) {
                        webAddress = !(item.value == "" || item.value == null)
                            ? item.value
                            : tacit;
                    } else {
                        webAddress = tacit;
                    }
                });
                return webAddress;
            } else {
                return tacit;
            }
        },
        getUserInfo() {
            wx.miniProgram.postMessage(this.userInfo);
            this.$http.cardUserInfo().then((res) => {
                const data = res.data;
                this.userInfo = {
                    ...data,
                    web: this.getWebAddress(
                        res.data.content_field,
                        "webUrl",
                        "www.jiufanglogistics.cn"
                    ),
                    Ename: this.getWebAddress(
                        res.data.content_field,
                        "Ename",
                        "-"
                    ),
                };

            });
        },
        // 拨打电话
        callPhone(phoneNumber) {
            window.location.href = "tel:" + phoneNumber;
        },
        // 打开地图
        navigateToMap(address, name) {
            Toast.loading({
                message: "加载中...",
                forbidClick: true,
            });
            this.$router.push({
                path: "/map",
                query: { address: address, name: name, isTap: true },
            });
            Toast.clear;
        },
    },
};
</script>

<style lang="scss" scoped>
.headerBg {
    width: 100%;
    // min-height: 420px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 4px 8px 0px rgba(249, 135, 45, 0.1);
    padding-bottom: 15px;
    margin-bottom: 10px;
}

.cardBg {
    width: 100%;
    height: 211px;
    padding: 22px 17px 15px 22px;
    background-size: 100% 100%;
    display: flex;
    align-items: flex-end;
}

.cardName {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
}

.cardEname {
    font-size: 12px;
    color: #fff;
}

.cardPost {
    font-size: 14px;
    color: #fff;
}

.pm {
    margin-top: 23px;

    .text1 {
        font-size: 12px;
        color: #fff;
        align-items: center;
        margin-bottom: 5px;
    }

    .text2 {
        font-size: 12px;
        color: #fff;
        align-items: center;
        margin-bottom: 5px;
    }

    .text3 {
        font-size: 12px;
        color: #fff;
        align-items: center;
        margin-bottom: 5px;
    }

    .text4 {
        font-size: 12px;
        color: #fff;
        align-items: center;
        width: 260px;
    }
}

.cardInfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-end;
}

.cardLine {
    width: 1px;
    height: 15px;
    background-color: #FFEBD9;
}

.cardInfoItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    .cardInfoItemContent {
        font-size: 12px;
        color: #000;
        margin-top: 5px;
        // border-right: 1px solid #000;
        // padding-right: 20px;

    }
}

.m-r-3 {
    margin-right: 3px;
}

.addressLine {
    display: flex;
    align-items: center;
    margin-top: 10px;

    .addressText {
        color: #333333;
        font-size: 16px;
        font-weight: bold;
    }

    .line {
        width: 3px;
        height: 14px;
        background-color: #FF8000;
        margin-right: 10px;
    }
}

.addressName {
    color: #FF8000;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 5px;

}

.addressDescribe {
    color: #666;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.search {
    padding: unset !important;
    margin-top: 15px;
}
</style>
