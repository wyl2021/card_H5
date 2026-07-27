<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="olgj"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="4"
      color="#077975"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>
            </div>
            <div class="text3">
              {{ userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'olgj/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'olgj/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'olgj/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
      <template #default="slotProps">
        <div
          :class="[
            'header' + (slotProps.item + 1),
            { selectCard: cardIds == slotProps.item },
            'b-dotted',
          ]"
          @click="cardIds = slotProps.item"
        >
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>
            </div>
            <div class="text3">
              {{ userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'olgj/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'olgj/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'olgj/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="olgj/icon/phoneButton.png"
      addressButton="olgj/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="欧利国际"
      :type="1"
      width="16px"
      height="16px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="olgj/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="olgj/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#077975"
    ></tab>
    <!-- 公司介绍 -->
    <headerContent
      headerImg="olgj/headerImage/qyjs.png"
      width="100%"
      height="41px"
      id="gywm"
    >
      <template #content>
        <van-image :src="IMG + 'olgj/image/jsBg.png'" class="m-t-14" />
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </p>
      </template>
    </headerContent>
    <!-- 企业文化 -->
    <headerContent
      headerImg="olgj/headerImage/qywh.png"
      width="100%"
      height="41px"
    >
      <template #content>
        <div
          class="whBox"
          v-for="(item, index) in getContent('企业文化')"
          :key="index"
        >
          <van-image
            v-if="item.image"
            :src="item.image.url"
            width="45px"
            height="45px"
          ></van-image>
          <div class="whItem">
            <p class="name">{{ item.name }}</p>
            <div
              class="title"
              v-for="(item, index) in item.describe.split('。')"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 我们的优势 -->
    <headerContent
      headerImg="olgj/headerImage/wmdys.png"
      width="100%"
      height="41px"
    >
      <template #content>
        <div class="ysBox">
          <div class="ysItem" v-for="(item, index) in getContent('我们的优势')">
            <div class="image">
              <van-image
                width="24px"
                height="24px"
                :src="item.image.url"
                v-if="item.image"
              ></van-image>
            </div>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 业务范畴 -->
    <headerContent
      headerImg="olgj/headerImage/ywfc.png"
      width="100%"
      height="41px"
      id='ywfc'
    >
      <template #content>
        <listBox
          v-for="(item, index) in getContent('业务范畴')"
          v-if="index<4"
          :key="index"
          :type="1"
          :imageUrl="{
            url: item.image.url,
            width: '134px',
            height: '87px',
            columWidth: '176px',
          }"
          :name="item.name"
          :describe="item.describe"
          :pageType="3"
          :id="item.id"
          class="m-t-10"
        ></listBox>
      </template>
    </headerContent>
    <!-- 主营国家 -->
    <headerContent
      headerImg="olgj/headerImage/zygj.png"
      width="100%"
      height="41px"
      id="zygj"
    >
      <template #content>
        <div class="zyTitle">
          服务国家：美国/加拿大/欧洲/英国/日本
          公司目前主要的合作客户群体来源于亚马逊，全球速卖通，eaby和传统线下贸易公司。
        </div>
        <div
          v-for="(item, index) in getContent('主营国家')"
          v-if="index<=1"
          class="zyBox"
          :style="{ backgroundImage: 'url(' + getUrl(item.image.url) + ')' }"
        >
          <div class="zyItem">
            <div class="name">{{ item.name }}</div>
            <div class="describe">{{ item.describe }}</div>
          </div>
        </div>

        <div class="m-t-10"></div>
        <more
          title="更多"
          :icon="IMG + 'olgj/icon/right.png'"
          path="/secondIndex"
          color="#000000"
        ></more>
      </template>
    </headerContent>

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
          name: "关于我们",
          id: "gywm",
        },
        {
          name: "业务范畴",
          id: "ywfc",
        },
        {
          name: "主营国家",
          id: "zygj",
        },
      ], ///tab栏列表
      tabId: "gywm", //默认tab
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
      list: [],
      text: "欧利国际是一家国际领先的物流企业，总部设立在深圳。 欧利国际物流是一家专注欧洲、北美的专线头程物流服务商，由多位丰富的国际物流经验者组成的团队所成立的一家创新型公司。现代化管理理念，良好的专业素质和丰富的货运从业经验的管理团队。 随着电子商务行业蓬勃发展，跨境电商成为中国企业和品牌出海的新通道。 公司有着优质国际快递、空运、卡航、铁路、海派、海卡多渠道的物流运营体系，全程数字化、智能化，自动匹配海关报关需求，提前规避清关风险。多市场、多模式、多地域、多产品等多维度紧密布局，编织全球网络，实现物流、商流、信息流的无缝连接！创建全球跨境电商优质生态环境，强化加盟、资源互补、资源共享等合作模式！致力打造一站式门到门服务，定制企业专属出口运输方案，让跨境电商货物出口简单化！实现客户、平台、伙伴、与欧利的互利共生，共生共赢。 公司目前在深圳、广州、厦门、中山、义乌、上海等地设有收货仓库。 服务国家：美国/加拿大/欧洲/英国/日本。",
    };
  },
  created() {
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
    getUrl(str) {
      return "'" + str + "'";
    },
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
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {

          this.list = res.data.list;
        });
    },
    getContent(name) {

      let data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
    //判断
    getWebAddress(list, str) {
      if (list != []) {
        let webAddress = "";
        list.forEach((item) => {
          if (item.key == str) {
            webAddress = !(item.value == "" || item.value == null)
              ? item.value
              : "-";
          } else {
            webAddress = "-";
          }
        });
        return webAddress;
      } else {
        return "-";
      }
    },
    getUserInfo() {
      wx.miniProgram.postMessage(this.userInfo);
      this.$http.cardUserInfo().then((res) => {
        this.userInfo = res.data;
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
  padding: 46px 0 0 30px;
  .post {
    display: flex;
    align-items: center;
  }
  .name {
    .text1 {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 5px;
      color: #333333;
    }
    .text2 {
      font-size: 9px;
      color: #422188;
    }
  }
  .text3 {
    font-size: 10px;
    letter-spacing: 5px;
    margin-left: 4px;
  }
  .pm {
    margin-top: 28px;
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

    }
    display: flex;
    margin-top: 3px;
    color: #666666;
    font-size: 12px;
    align-items: center;
  }
}

.header2 {
  // width: 100%;
  height: 100%;
  padding: 42px 0 0 50px;

  .post {
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 5px;
        color: #333333;
      }
      .text2 {
        font-size: 12px;
        color: #422188;
      }
    }
  }
  .text3 {
    font-size: 10px;
    color: #333333;
    margin-top:4px;
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
    margin-top: 3px;
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
    margin-left:184px;
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
    .textccc {

    }
    display: flex;
    margin-top: 4px;
    color: #666666;
    font-size: 12px;
    align-items: center;
  }
}
.selectCard {
  border: 1px solid #077975 !important;
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
  background-color: #077975 !important;
}
.whBox {
  margin-top: 8px;
  display: flex;
  align-items: flex-start;
  .whItem {
    margin-left: 8px;

    .name {
      color: #333333;
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: 500;
    }
    .title {
      font-weight: 400;
      color: #666;
      font-size: 12px;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      width: 268px;
    }
  }
}

.ysBox {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  .ysItem {
    .image {
      background-color: rgba($color: #077975, $alpha: 0.05);
      display: flex;
      justify-content: center;
      padding: 6px;
    }
    .name {
      width: 155px;
      text-align: center;

      color: #333333;
      font-size: 12px;
      padding: 0 12px;
    }
  }
}
.zyTitle{
  color:#666666;
  font-size: 12px;
  margin:3px 0;
}
.zyBox{
  width: 319px;
  height: 156px;
  background-size: 100% 100%;
  margin-bottom:3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .zyItem{
    background-color: rgba($color: #000000, $alpha: 0.3);
    width: 100%;
    padding:10px 8px;
    height: 85px;
    border-radius: 0 0 8px 8px;
    .name{
      color:#FFFFFF;
      font-size: 14px;
      margin-bottom: 6px;
    }
    .describe{
      color:#FFFFFF;
      font-size: 12px;
      font-weight: 300;
    }
  }
}
</style>
