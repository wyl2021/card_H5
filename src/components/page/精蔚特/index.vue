<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="jwt"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="3"
      color="#E90000"
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
              <van-image :src="IMG + 'jwt/icon/phone.png'" />{{ userInfo.phone }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'jwt/icon/email.png'" />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'jwt/icon/address.png'" />
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
              <van-image :src="IMG + 'jwt/icon/phone.png'" />{{ userInfo.phone }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'jwt/icon/email.png'" />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'jwt/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="jwt/icon/phoneButton.png"
      addressButton="jwt/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="精蔚特"
      :type="1"
      backgroundColor="#E90000"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="jwt/icon/sys.png"
      :qrContent="{
 qrTitle:'扫码加微信',
        qrName:'扫描二维码，添加我为好友'
      }"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#E90000"
    ></tab>
      <jwtContent name="企业介绍" id="qyjs"></jwtContent>
      <jwtContent name="企业文化" id="qywh"></jwtContent>
      <jwtContent name="首页产品中心" :list="list" id="cpzx"></jwtContent>
      <jwtContent name="应用中心" id="yyzx"></jwtContent>
    <!-- 阿库标识 -->
    <aKuLogo></aKuLogo>
  </div>
</template>

 <script>
import { Toast } from 'vant';
export default {

  data() {
    return {
      tabList: [
        {
          name: "企业介绍",
          id: "qyjs",
        },
        {
          name: "企业文化",
          id: "qywh",
        },
        {
          name: "产品中心",
          id: "cpzx",
        },
        {
          name: "应用中心",
          id: "yyzx",
        },
      ], ///tab栏列表
      tabId: "qyjs", //默认tab
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
      text: "纽酷国际物流，亚马逊SPN服务商、Wayfair合作服务商。2016年海外仓运营起家，凝聚八年运输经验、为客户提供覆盖海运头程、FBA中转、尾端派送、一件代发、中大件卡派和空运服务等全链条跨境物流业务。打造出安全高效的「头程」+「尾程」一站式物流运输方式。美国、加拿大、英国、德国、法国、西班牙和意大利七国均可运转。 目前纽酷国际在美国建设洛杉矶自营20万+呎海外仓、新泽西自营10万+呎海外仓，以及奥克兰分仓、芝加哥分仓、休斯顿分仓、萨瓦纳分仓；在加拿大建设多伦多分仓、温哥华分仓；在英国建设南安普顿仓、费力克斯托仓；在德国建设杜伊斯堡仓，七国共计建设11大海外仓。操作团队全天7*24小时转运将海运时效提速至最快9个工作日入仓，空运时效最快5天入仓。 在国内共建设13个仓库网点包括深圳、广州、东莞、佛山、中山、潮汕、义乌、杭州、宁波、厦门、泉州，青岛覆盖华南华东产业带，并通过自研数字化TMS和WMS系统配称，搭建出安全省心的「物流网」。至今已服务超20000名跨境卖家，并有超90%合作客户重复选择。",
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
  destroyed() {
    window.removeEventListener("scroll", this.scrolling);
  },

  methods: {
    getMap(address,name){
      console.log(address, name);
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$router.push({
        path: "/map",
        query: { address: address, name: name,isTap:true },
      });
      Toast.clear;
    },
    // 内容信息
    getList() {
      this.$http.solutionTypeList()
        .then((res) => {
          console.log("列表信息", res);
          this.list = res.data.list;
        });
        this.$http.staffList()
    },
    getContent(name) {
      console.log(
        name,
        this.list.find((item) => item.name == name)
      );
      return this.list ? this.list.find((item) => item.name == name) : [];
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

        console.log("1231231");
      });
    },

    // 名片切换
    getCommitUser(index) {
      console.log("名片切换", index);
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
      console.log(id);
      this.tabId = id;
      // window.location.hash=this.tabId
      var id = this.tabId.replace("#", "");
      console.log(id);
      document.getElementById(id).scrollIntoView();
    },
  },
};
</script>

 <style lang="scss" scoped>
.header1 {
  // width: 100%;
  height: 100%;
  padding:48px 0 0 30px;
  .post {

  }
  .name {


    .text1 {
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 5px;
      margin-right:8px;
      color: #333333;
    }
    .text2 {
      font-size: 9px;
      color: #422188;
    }
  }
  .text3 {
    font-size: 12px;
    letter-spacing: 5px;
    color: #666666;
  }
  .pm {
    margin-top: 16px;
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

.header2 {
  // width: 100%;
  height: 100%;
  padding: 41px 0 0 44px;

  .post {

    .name {

      .text1 {
        color: #333333;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 5px;
      }
      .text2 {
        font-size: 12px;
        color: #422188;
      }
    }
  }
  .text3 {
    font-size: 10px;
    color: #666666;
    margin-top: 5px;
  }
  .pm {
    margin-top: 15px;
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

.header3 {
  // width: 100%;
  height: 100%;
  padding: 46px 0 0 46px;

  .post {


    .name {

      .text1 {
        font-size: 16px;
        font-weight: 500;
        color: #333;

      }
      .text2 {
        font-size: 12px;
        color: #fff;
        margin-right: 2px;
      }
    }
  }
  .text3 {
    font-size: 10px;
    color: #333;
  }
  .pm {
    margin-top: 30px;
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
      width:12px;
      height:12px;
      margin-right: 4px;
    }
    .textccc {

    }
    display: flex;
    margin-top:4px;
    color: #666666;
    font-size: 12px;
    align-items:center;
  }
}
.header4 {
  // width: 100%;
  height: 100%;
  padding: 54px 0  0 34px;

  .post {
    display: flex;
    align-items: center;
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
    font-size: 12px;
    color: #333333;
    margin-left:5px
  }
  .pm {
    margin-top: 14px;
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
      width: 154.81px;
    }
    display: flex;
    margin-top: 3px;
    color: #666666;
    font-size: 12px;
    align-items: baseline;
  }
}
.selectCard {
  border: 1px solid #E14805 !important;
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
// /deep/ .button {
//   background-color: #e14805 !important;
// }
.ysBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .ysItem {
    background-color: #fff8f6;
    border-radius: 8px;
    padding: 13px 0;
    .image {
      display: flex;
      margin: auto;
    }
    .name {
      font-size: 14px;
      color: #333;
      margin: 5px 0;
      text-align: center;
    }
    .describe {
      font-size: 9px;
      color: #666666;
      text-align: center;
    }
  }
}
/deep/ .list1{
  margin-top: 14px;
}
.lxBox{
  background-color: #F5F5F5;
  padding:10px ;
  border-radius: 4px;
  font-size:12px;
  display: flex;
  align-items: baseline;
  color:#484848;
  margin-top: 8px;
  .line{
    width: 1px;
    height: 10px;
    background-color: #e14805;
    margin-right: 5px;
  }
}

</style>
