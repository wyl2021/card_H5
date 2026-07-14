<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg cardBg="jhd" :cardId="0" @commitUser="getCommitUser" :show="show" :popupLength="userInfo.company && userInfo.company.length
      ? userInfo.company.length
      : 1
      " color="#FE6104" :isHeaderBgIndex="1">
      <template #userInfo>
        <div class="header1" @click="show = true">
          <div class="post">
            <van-image :src="IMG + 'jhd/icon/name.png'" />
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>

              <div class="text3">
                {{ userInfo.post }}
              </div>
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'jhd/icon/phone.png'" />{{
                userInfo.phone ? userInfo.phone.split('  ')[0] : '-'
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'jhd/icon/email.png'" />{{
                userInfo.email? userInfo.email : '-'
              }}
            </div>
            <div class="text7">
              {{ userInfo.company ? userInfo.company[cardId] : "-" }}
            </div>

            <div class="text6">
              <van-image :src="IMG + 'jhd/icon/address.png'" />
              <div class="textccc">
                {{
                  (() => {
                    const addressParts = userInfo.address
                      ? userInfo.address.split(" ")
                      : ["-"];
                    return addressParts[cardId] || addressParts[0];
                  })()
                }}
              </div>
            </div>

            <div class="d-flex" style="margin-top: 5px">
              <div class="text8" style="margin-right: 8px">
                <van-image :src="IMG + 'jhd/icon/web.png'" />{{ userInfo.web }}
              </div>
              <div class="text8">

                <van-image :src="IMG + 'jhd/icon/landline.png'" />{{
                  (() => {
                    const landlineParts = userInfo.landline
                      ? userInfo.landline.split("  ")
                      : ["-"];
                    return landlineParts[cardId] || landlineParts[0];
                  })()

                }}

              </div>

            </div>
          </div>
        </div>
      </template>
      <template #default="slotProps">
        <div :class="[
          'header1',
          { selectCard: cardIds == slotProps.item },
          'b-dotted',
        ]" @click="cardIds = slotProps.item">
          <div class="post">
            <van-image :src="IMG + 'jhd/icon/name.png'" />
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>

              <div class="text3">
                {{ userInfo.post }}
              </div>
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'jhd/icon/phone.png'" />{{
                userInfo.phone ? userInfo.phone.split('  ')[0] : '-'
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'jhd/icon/email.png'" />{{
                userInfo.email? userInfo.email : '-'
              }}
            </div>
            <div class="text7">
              {{ userInfo.company ? userInfo.company[slotProps.item] : "-" }}
            </div>

            <div class="text6">
              <van-image :src="IMG + 'jhd/icon/address.png'" />
              <div class="textccc">
                {{
                  (() => {
                    const addressParts = userInfo.address
                      ? userInfo.address.split(" ")
                      : ["-"];
                    return addressParts[slotProps.item] || addressParts[0];
                  })()

                }}
              </div>
            </div>

            <div class="d-flex" style="margin-top: 5px">
              <div class="text8" style="margin-right: 8px">
                <van-image :src="IMG + 'jhd/icon/web.png'" />{{ userInfo.web }}
              </div>
              <div class="text8">

                <van-image :src="IMG + 'jhd/icon/landline.png'" />{{
                  (() => {
                    const landlineParts = userInfo.landline
                      ? userInfo.landline.split("  ")
                      : ["-"];
                    return landlineParts[cardId] || landlineParts[0];
                  })()
                }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 名字列表 -->
    <nameList :show="nameShow" @commitUserName="getCommitUserName" color="#DB001A"></nameList>
    <!-- 电话和地址 -->
    <pAddress phoneButton="jhd/icon/phoneButton.png" addressButton="jhd/icon/addressButton.png"
      :phone="userInfo.phone ? userInfo.phone + '  ' + userInfo.landline : userInfo.landline"
      :address="userInfo.address" name="京达华" :type="1" width="16px" height="16px" phoneName="  " addressName="  ">
    </pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode :isWx="userInfo.wx_code" qrCodeIcon="jhd/icon/sys.png" :isXx="userInfo.image"
      phonoIcon="jhd/icon/grxx.png">
      <template #xxBody>
        <div class="xxBox" :style="{
          'background-image': 'url(' + IMG + 'jhd/image/grxxBg.png)',
        }">
          <div class="xx-header">
            <van-image :src="IMG + 'jhd/icon/grxx.png'" mode="" width="18px" height="18px" class="m-r-5"></van-image>
            个人形象
          </div>
          <div style="display: flex; justify-content: center; margin-top: 18px">
            <div class="xx-bg" :style="{ backgroundImage: `url(${getUrl(userInfo.image.url)})` }">
              <div class="xx-border"></div>
            </div>
          </div>
          <div class="m-box"></div>
        </div>
      </template>
    </pQrcode>
    <!-- tab栏 -->
    <tab :tabList="tabList" :tabId="tabId" :isTob="tabIsTop" id="tap" @butTab="butTab" color="#FE6104"></tab>
    <!-- 公司介绍 -->
    <headerContent headerImg="jhd/headerImage/gsjj.png" width="94px" height="48px" id="gsjj">
      <template #content>
        <!-- <video poster="https://card-img1.oss-cn-beijing.aliyuncs.com/jhd/image/vodie.png" :controls="true" width="316" height="185" ><source src="http://www.kwt56.com/images/history/jhdxcp4.mp4" type="video/mp4"></video><source src="http://www.kwt56.com/images/history/jhdxcp4.mp4" type="video/mp4"></video> -->
        <div v-html="text"></div>
        <div v-if="item.image" :key="index" v-for="(item, index) in getContent('简介数据')" class="jsBg"
          :style="{ 'background-image': 'url(' + getUrl(item.image.url) + ')' }">
          <span v-html="item.rich_text"> </span>
        </div>

        <more title="查看更多" icon="arrow" path="/contentInfo" color="#666666" float="flex-start" class="m-t-10"
          :query="{ title: ' ' }"></more>
      </template>
    </headerContent>
    <!-- 优势渠道 -->
    <headerContent headerImg="jhd/headerImage/ysqd.png" width="103px" height="48px" id="ysqd">
    </headerContent>
    <div class="ysBox" v-for="(item, index) in getContent('优势渠道')" :key="index" @click="getTo(item.id)">
      <div class="d-flex jc-sb" style="align-items: unset">
        <div>
          <span style="font-size: 15px; font-weight: 500">{{ item.name }}</span>
          <br />
          <div class="d-flex ysItem" style="font-size: 13px" v-for="(item2, index) in item.describe.split('  ')">
            <van-image width="15px" height="15px" style="margin-right: 5px" :src="item2.includes('时效：')
              ? IMG + 'jhd/icon/time.png'
              : item2.includes('国家：')
                ? IMG + 'jhd/icon/air.png'
                : IMG + 'jhd/icon/ys.png'
              "></van-image>
            {{ item2 }}
          </div>
        </div>
        <van-image width="67px" height="60px" :src="item.pdf == 1
          ? IMG + 'jhd/image/rxlx.png'
          : IMG + 'jhd/image/tjlx.png'
          "></van-image>
      </div>
      <div :style="{ 'background-image': 'url(' + IMG + 'jhd/image/button.png?t=' + new Date().getTime() + ')' }"
        class="buttonBg">
        <span :style="{ 'font-size': index2 == 0 ? '16px' : '12px', color: '#FFF' }" :class="item.name_en.split('  ').length > 1 && index2 == 1 ? 'td-lt' : ''
          " v-for="(item2, index2) in item.name_en.split('  ')">{{ item2 }}</span>
        <span style="font-size: 13px; color: #fff">查看方案 ></span>
      </div>
    </div>
    <!-- 产品服务 -->
    <headerContent headerImg="jhd/headerImage/cpfw.png" width="91px" height="48px" id="cpfw">
      <template #content>
        <div class="cpBox" v-for="(item, index) in getContent('产品服务')" :key="index"
          :style="{ 'background-image': 'url(' + getUrl(item.image.url) + ')' }" v-if="index < 3 && item.image"
          @click="getTo2(index)">
          <div class="t-l">{{ item.name }}</div>
          <div class="t-m" v-if="index < 3" v-for="(item2, index2) in item.describe.split('  ')"
            @click.stop="getTo2(index, index2)">
            <van-image :src="IMG + 'jhd/icon/aircraft.png'"></van-image>
            {{ item2 }}
          </div>
        </div>

        <more title="查看更多" icon="arrow" path="/secondIndex" color="#666666" float="flex-start" class="m-t-10"></more>
      </template>
    </headerContent>
    <!-- 联系我们 -->
    <headerContent headerImg="jhd/headerImage/lxwm.png" width="74px" height="48px" class="lxBox" id="lxwm">
      <template #content>
        <p class="lxName">深圳市京华达智慧科技有限公司</p>

        <div class="lxItem" v-for="(item2, index2) in getContent('联系我们')" :key="index2" @click="getShow(item2)">
          <div class="d-flex name">
            <div class="lines"></div>
            {{ item2.name }}
          </div>
          <i-text iconImage="jhd/icon/phone3.png" :title="item2.name_en"></i-text>
          <i-text iconImage="jhd/icon/phone4.png" :title="parseContactInfo(item2.pdf).phone || '-'"></i-text>
          <i-text iconImage="jhd/icon/email3.png" :title="parseContactInfo(item2.pdf).email || '-'"></i-text>
          <!-- <i-text iconImage="jhd/icon/phone2.png" :title="item2.pdf"></i-text> -->
          <i-text iconImage="jhd/icon/address3.png" :baselineNumber="25" font1Width="90%"
            :title="item2.describe"></i-text>
        </div>

        <iText class="m-t-10" titles="联系电话：" title="0755-89689111 136-8686-1748"></iText>
        <iText titles="电子邮箱：" title="Jinghuada@kwt-logistics.com"></iText>
        <iText titles="总部地址：" title="广东省深圳市龙岗区坂田天安云谷2期11栋3105"></iText>
        <TXMap mapWidth="100%" mapHeight="130px" address="广东省深圳市龙岗区坂田天安云谷2期11栋3105" name="京华达"></TXMap>
        <div class="h-10"></div>
        <div class="d-flex" style="justify-content: space-evenly">
          <div>
            <van-image width="98px" height="98px" :src="IMG + 'jhd/image/gzh.png'"></van-image>
            <div class="f-m">官方公众号</div>
          </div>
          <div>
            <van-image width="98px" height="98px" :src="IMG + 'jhd/image/kf.png'"></van-image>
            <div class="f-m">咨询客服</div>
          </div>
        </div>
      </template>
    </headerContent>
    <van-popup v-model="lxShow" closeable close-icon-position="top-right" round
      :style="{ width: '50%', 'padding-top': '30px' }">
      <!-- <div class="popupText" >{{ phoneAndAddress.name || '加载中' }}</div> -->
      <div class="popupText" @click="getPhone">拨打电话</div>
      <div class="popupText" @click="getAddress">定位导航</div>
    </van-popup>
    <!-- 阿库标识 -->
    <aKuLogo></aKuLogo>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      tabList: [
        {
          name: "公司简介",
          id: "gsjs",
        },
        {
          name: "优势渠道",
          id: "ysqd",
        },
        {
          name: "产品服务",
          id: "cpfw",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },
      ], ///tab栏列表
      tabId: "gsjs", //默认tab
      tabIsTop: false, //用作下拉到一定程度现实tab栏
      cardId: 0,
      cardIds: 0,
      userInfo: {
        name: "正在加载",
        post: "正在加载",
        phone: "正在加载",
        email: "正在加载",
        address: "正在加载",
        english: "正在加载",
      },
      show: false,
      nameShow: false,
      list: [],
      text: "",
      phoneAndAddress: {
        name: "",
        pdf: "",
        name_en: "",
        describe: "",
      },
      lxShow: false,
    };
  },
  created() {
    // this.getCommitUserName("562403ec-c0ca-11ef-9813-00163e237fe6");
    this.getUserInfo();
    this.getList();
  },
  mounted() {
    window.addEventListener("scroll", this.scrolling);
    // this.getUserInfo();
    // this.getList();
  },
  beforeDestroy() {  // Vue 2
    window.removeEventListener("scroll", this.scrolling);
  },

  methods: {
    // 解析联系信息字符串为对象
    parseContactInfo(contactString) {
      if (typeof contactString === 'object') {
        return contactString; // 如果已经是对象，直接返回
      }
      const contactInfo = {};
      // 提取电话号码
      const phoneMatch = contactString.match(/手机：(\d+)/);
      if (phoneMatch && phoneMatch[1]) {
        contactInfo.phone = phoneMatch[1];
      }
      // 提取邮箱
      const emailMatch = contactString.match(/邮箱：([^\s]+)/);
      if (emailMatch && emailMatch[1]) {
        contactInfo.email = emailMatch[1]; // 注意：用户要求使用emli作为键名
      }
      // console.log(contactInfo)
      return contactInfo;
    },
    getTo(id) {
      this.$router.push({
        path: "/categorySolutionInfo",
        query: { id: id },
      });
    },
    getTo2(index, index2) {
      // console.log(index2)
      this.$router.push({
        path: "/secondIndex",
        query: { index: index, index2: index2 ? index2 : 0 },
      });
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
    getShow(res) {
      this.lxShow = true;
      this.phoneAndAddress = res;
    },
    highlightText(text) {
      // 使用正则表达式将数字（包括小数）和字母分开
      const regex = /(\d+\.\d+|\d+|[a-zA-Z]+)/g; // 匹配数字（包括小数）和字母
      return text.replace(regex, (match) => {
        if (/^\d+(\.\d+)?$/.test(match)) {
          // 如果是数字或小数，设置为红色
          return `<span style="color: red;">${match}</span>`;
        } else {
          // 如果是字母，设置为蓝色
          return `<span style="color: blue;">${match}</span>`;
        }
      });
    },
    // 角色切换
    getCommitUserName(id) {
      this.$http.cardUserEdit({ id: id }).then((res) => {
        if (res.code == 200) {
          this.getUserInfo();
          this.nameShow = false;
        } else {
          this.$toast(res.msg);
        }
      });
    },
    // 角色弹框
    getIsName() {
      this.nameShow = true;
    },
    // 图片
    getUrl(str) {
      return "'" + str + "'";
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
        .categorySolutionTypeList({ parent_name: "列表内容" })
        .then((res) => {
          // res.data.list.forEach((data)=>{
          //   if(data.name=='简介内容'){

          //   }
          // })
          this.list = res.data.list;
          // .replace(/controls="[^"]*"/g, 'controls="false"')
          this.text =
            this.getContent("简介内容") != []
              ? this.getContent("简介内容")[0]
                .rich_text.replace(
                  /<p(.*?)>/,
                  "<p$1 style='width:100%;height:100%;'>"
                )
                .replace(
                  /<video(.*?)>/,
                  "<video$1 style='width:100%;height:100%;border-radius:8px'>"
                )
                .replace(/<br\s*\/?>/gi, "")
                .replace(
                  /(style=['"][^'"]*?)line-height:[^;'"]*?([^'"]*['"])/g,
                  (match, p1, p2) => {
                    return p1 + "line-height:0.6;" + p2; // 替换为新的line-height值
                  }
                )
              : "";
        });
    },
    getContent(name) {
      let data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
    //判断
    getWebAddress(list, str, tacit = "-") {
      if (!Array.isArray(list) || list.length === 0) {
        console.log('没有' + str);
        return tacit;
      }

      // 查找匹配项
      const foundItem = list.find(item => item.key == str);

      if (foundItem) {
        return foundItem.value && foundItem.value.trim() !== '' ? foundItem.value : tacit;
      } else {
        console.log('没有' + str);
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
            "web",
            "www.kwt56.com"
          ),
          landline: this.getWebAddress(
            res.data.content_field,
            "landline",
            "0755 8968 9111",
          ),
          company:
            typeof this.getWebAddress(res.data.content_field, "company", [
              "深圳京华达物流有限公司",
            ]) === "string"
              ? this.getWebAddress(res.data.content_field, "company", [
                "深圳京华达物流有限公司",
              ]).split("  ")
              : this.getWebAddress(res.data.content_field, "company", [
                "深圳京华达物流有限公司",
              ]),
        };
        console.log(this.userInfo);
        this.cardId = res.data.select;

      });
    },

    // 名片切换
    getCommitUser(index) {
      this.$http.cardInfo({ select_num: this.cardIds }).then((item) => {
        if (item.code == 200) {
          this.cardId = this.cardIds;
          this.show = false;
        }
      });
      // this.cardId=1
    },

    scrolling() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      var tabScroll = document.getElementById("tap").offsetTop;
      // console.log(scrollTop);
      // console.log("获取tap栏高度", tabScroll);

      if (scrollTop >= tabScroll) {
        this.tabIsTop = true;
      } else {
        this.tabIsTop = false;
      }
    },

    butTab(id) {
      this.tabId = id;
      // window.location.hash=this.tabId
      var id = this.tabId.replace("#", "");

      document.getElementById(id).scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  height: 1px;
  color: #eaeaea;
  margin: 5px 0;
}

.m-t-10 {
  margin-top: 10px;
}

.header1 {
  // width: 100%;
  height: 100%;
  padding: 36px 0 0 115px;

  .post {
    display: flex;
    align-items: center;

    /deep/ .van-image {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }
  }

  .name {
    .text1 {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 1px;
      color: #000;
    }

    .text2 {}
  }

  .text3 {
    font-size: 10px;

    color: #333333;
  }

  .pm {
    margin-top: 5px;
  }

  .text4 {
    /deep/ .van-image {
      width: 14px;
      height: 14px;
      margin-right: 4px;
    }

    display: flex;
    align-items: center;
    color: #343434;
    font-size: 9px;
  }

  .text5 {
    /deep/ .van-image {
      width: 14px;
      height: 14px;
      margin-right: 3px;
    }

    display: flex;
    align-items: center;
    color: #343434;
    font-size: 9px;
    // margin-top: 4px;
  }

  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 3px;
    }

    display: flex;
    align-items: center;
    color: #343434;
    font-size: 8px;
    line-height: 12px;

    // margin-top: 4px;
    .textccc {
      // width: 170px;
    }
  }

  .text7 {
    margin: 8px 0;
    color: #333333;
    font-size: 12px;
  }

  .text8 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 3px;
    }

    display: flex;
    align-items: center;
    color: #343434;
    font-size: 9px;
    // margin-top: 4px;
  }
}

.header2 {
  // width: 100%;
  height: 100%;
  padding: 58px 0 0 24px;

  .post {
    display: flex;
    align-items: center;

    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 5px;
        color: #333333;
      }

      .text2 {
        font-size: 10px;
        color: #333333;
      }
    }
  }

  .text3 {
    width: fit-content;
    font-size: 10px;
    color: #fff;
    margin-top: 3px;
    background: #FE6104;
    border-radius: 2px;
    padding: 1px;
  }

  .pm {
    margin-top: 24px;
  }

  .text4 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }

    display: flex;
    align-items: center;
    color: #343434;
    font-size: 9px;
  }

  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }

    display: flex;
    align-items: center;
    color: #343434;
    font-size: 9px;
    margin-top: 4px;
  }

  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }

    .textccc {
      width: 200px;
    }

    display: flex;
    margin-top: 4px;
    color: #343434;
    font-size: 9px;
    align-items: center;
  }
}

.header3 {
  // width: 100%;
  height: 100%;
  padding: 57px 30px 0 30px;

  .post {
    display: flex;
    align-items: center;
    float: right;

    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        color: #333;
        text-align: right;
      }

      .text2 {
        font-size: 10px;
        color: #333;
        margin-left: 5px;
        text-align: right;
      }
    }
  }

  .text3 {
    font-size: 12px;
    color: #333;
    margin-left: 5px;
  }

  .pm {
    margin-top: 50px;
  }

  .text4 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }

    color: #666666;
    font-size: 12px;
  }

  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }

    color: #666666;
    font-size: 12px;
    margin-top: 4px;
  }

  .text6 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }

    .textccc {
      width: 230px;
    }

    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 12px;
    align-items: baseline;
  }
}

.header4 {
  // width: 100%;
  height: 100%;
  padding: 30px 0 0 30px;

  .post {
    margin-left: 184px;

    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        color: #333333;
      }
    }

    .text2 {
      font-size: 12px;
      color: #333;
      font-weight: 500;
      margin-top: 5px;
    }
  }

  .text3 {
    font-size: 10px;
    color: #333333;
    margin-top: 5px;
  }

  .pm {
    margin-top: 24px;
  }

  .text4 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }

    color: #666666;
    font-size: 12px;
  }

  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }

    color: #666666;
    font-size: 12px;
    margin-top: 4px;
  }

  .text6 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }

    .textccc {}

    display: flex;
    margin-top: 4px;
    color: #666666;
    font-size: 12px;
    align-items: center;
  }
}

.selectCard {
  border: 1px solid #FE6104 !important;
  border-radius: 8px;
}

.cultureName {
  font-size: 14px;
  color: #333;
  margin-left: 5px;
}

.cultureDescribe {
  font-size: 12px;
  color: #666;
  margin: 6px 0 0 15px;
}

.m-t-14 {
  margin-top: 14px;
}

.a-item {
  align-items: baseline !important;
  width: 290px;
}

/deep/ .button {
  background-color: #FE6104 !important;
}

.jsBg {
  width: 320px;
  height: 33px;
  background-size: 100% 100%;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 500;
  padding: 10px 0 0 45px;
}

.ysBox {
  margin-top: 10px;
  border-radius: 24px;
  background: #fff;
  padding: 0 0 12px 12px;

  .buttonBg {
    width: 319px;
    height: 34px;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    // margin-top: 10px;
  }

  .ysItem {
    align-items: center;
    margin-bottom: 5px;
  }
}

.td-lt {
  text-decoration: line-through;
}

.cpBox {
  width: 100%;
  height: 160px;
  background-size: 100% 100%;
  padding: 15px 12px;
  margin-top: 10px;

  .t-l {
    font-size: 15px;
    color: #fff;
    font-weight: 500;
    width: fit-content;
    border-bottom: 2px solid rgba(255, 255, 255, 0.4);
    padding-bottom: 6px;
  }

  .t-m {
    margin-top: 10px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #fff;

    /deep/ .van-image {
      width: 17px;
      height: 17px;
      margin-right: 8px;
    }
  }
}

.lxBox {
  .lxName {
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .lxItem {
    background-color: #f6f6f6;
    margin-top: 10px;
    padding: 10px 12px;
    border-radius: 8px;
  }

  .name {
    align-items: center;
    font-size: 13px;
    color: #333333;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .lines {
    width: 2px;
    height: 12px;
    margin-right: 5px;
    background-color: #FE6104;
  }
}

.f-m {
  font-size: 12px;
  color: #333;
  margin-top: 10px;
  text-align: center;
}

.popupText {
  font-size: 14px;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #f6f6f6;
}

.xxBox {
  width: 100%;
  height: 260px;
  background-size: 100% 100%;
  padding: 12px;

  .xx-header {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: #333333;
  }

  .xx-bg {
    width: 160px;
    height: 170px;
    background-size: 100% 100%;
    box-shadow: 10px 10px #FE6104;
  }

  .xx-border {
    width: 153px;
    height: 164px;
    margin: 0 20px 20px 0;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }

  .m-box {
    width: 22px;
    height: 22px;
    background-color: #FE6104;
    margin: 10px 48px 0 0;
    float: right;
  }
}
</style>
