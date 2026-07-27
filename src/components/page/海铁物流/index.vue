<template>
  <!-- @scroll="scrolling" style="overflow-y:auto;height: 1000px;" -->
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="htwl"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="false"
      :popupLength="1"
      color="#3598DC"
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
          <div class="number">{{ userInfo.number }}</div>
          <div class="identity">{{ userInfo.identity }}</div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'htwl/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'htwl/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'htwl/icon/address.png'" />
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
              <van-image :src="IMG + 'htwl/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'htwl/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'htwl/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="htwl/icon/phoneButton.png"
      addressButton="htwl/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="海铁物流"
      :type="1"
      width="16px"
      height="16px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="htwl/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="htwl/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#3598DC"
    ></tab>
    <!-- 企业介绍 -->
    <headerContent
      headerImg="htwl/headerImage/qyjs.png"
      width="139px"
      height="39px"
      margin="unset"
      id="qyjs"
    >
      <template #content>
        <div class="line"></div>

        <!-- <video></video> -->

        <div class="textStyle">{{ text }}</div>
        <div
          v-for="(item, index) in [
            'WCA国际货代组织成员',
            'NVOCC--无船承运人',
            '深圳国际货运代理组织成员',
          ]"
          class="jsBox"
        >
          <div class="round"></div>
          {{ item }}
        </div>
        <van-image :src="IMG + 'htwl/image/jsBg.png'"></van-image>
      </template>
    </headerContent>
    <!-- 核心业务 -->
    <headerContent
      headerImg="htwl/headerImage/hxyw.png"
      width="139px"
      height="39px"
      margin="unset"
      id="hxyw"
    >
      <template #content>
        <div class="line"></div>
        <listBox
          v-for="(item, index) in list"
          v-if="index < 4"
          :key="index"
          :name="item.name"
          :describe="item.describe"
          :imageUrl="{
            url: item.image.url,
            width: '140px',
            columWidth: '171px',
            height: '90px',
          }"
          :type="1"
          :pageType="1"
          :id="item.id"
          button="更多"
          :class="{ 'm-t-10': index != 0 }"
        ></listBox>
        <div class="m-t-10"></div>
        <more
          title="更多"
          icon="arrow"
          path="/thirdIndex"
          color="#333333"
          float="flex-start"
        ></more>
      </template>
    </headerContent>
    <!-- 合作伙伴 -->
    <headerContent
      headerImg="htwl/headerImage/hzhb.png"
      width="65px"
      height="39px"
      margin="unset"
      id="hzhb"
    >
      <template #content>
        <div class="line"></div>
        <van-image :src="IMG + 'htwl/image/hzhb.png'"></van-image>
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
          name: "企业介绍",
          id: "qyjs",
        },
        {
          name: "核心业务",
          id: "hxyw",
        },
        {
          name: "合作伙伴",
          id: "hzhb",
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
      zsList: [],
      scrollPosition: 0,
      text: "'诚信，专业，负责'是海铁一路以来秉持的商业宗旨。我们致力于为广大客户提供高效，节约成本和增值服务，从而成为他们进出口商务合作的第一选择。我们的目标不止于时刻提供优质服务以满足客户的需要, 更持续不断的为客户寻找新的方案以降低客户的物流成本、增加效率及发展创新的物流方案。持续改进让我们及我们的客户在行业内保持竞争优势。",
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
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrolling);
  },

  methods: {
    // scrolling(event) {
    //   var scrollTop =
    //     document.body.scrollTop || document.documentElement.scrollTop;
    //   var tabScroll = document.getElementById("xyjs").offsetTop;
    //   console.log(scrollTop, tabScroll, scrollTop >= tabScroll);
    //   // 这里可以根据this.scrollPosition的值执行其他逻辑
    // },
    getTo(id) {
      this.$router.push({
        path: "/categorySolutionInfo",
        query: { id: id },
      });
    },
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
      this.$http.productList().then((res) => {

        this.list = res.data.list;
      });
    },

    //判断
    getWebAddress(list, str) {
      if (list.length === 0) {
        // 如果列表为空，直接返回"-"
        return "-";
      }

      let webAddress = "-"; // 初始化webAddress为"-"，假设没有找到匹配的项

      // 使用for...of循环来遍历列表
      for (const item of list) {
        if (item.key === str) {
          // 如果找到了匹配的项，更新webAddress并立即停止循环
          webAddress = item.value || "-"; // 如果item.value存在，则使用item.value，否则使用"-"
          break; // 跳出循环
        }
      }

      // 返回webAddress的值
      return webAddress;
    },
    getUserInfo() {
      wx.miniProgram.postMessage(this.userInfo);
      this.$http.cardUserInfo().then((res) => {
        this.userInfo = res.data;
        this.cardId = res.data.select;
        this.userInfo.number = this.getWebAddress(
          res.data.content_field,
          "number"
        );
        this.userInfo.identity = this.getWebAddress(
          res.data.content_field,
          "identity"
        );

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
      // var scrollTop =
      //   document.body.scrollTop || document.documentElement.scrollTop;
      // var tabScroll1 = document.getElementById("xyjs").offsetTop;
      // var tabScroll2 = document.getElementById("jxbm").offsetTop;
      // var tabScroll3 = document.getElementById("zsjy").offsetTop;
      // // console.log(scrollTop,tabScroll3,tabScroll3-150);
      //   //  console.log(scrollTop, tabScroll, scrollTop >= tabScroll);
      // if (scrollTop >= tabScroll1 && scrollTop<tabScroll2) {
      //   this.tabId = 'xyjs';
      //   this.tabIsTop = true;
      // } else if (scrollTop >= tabScroll2 && scrollTop<(tabScroll3-150)) {
      //   this.tabId = 'jxbm';
      //   this.tabIsTop = true;

      // }else if(scrollTop>=(tabScroll3-150)){
      //   this.tabId = 'zsjy';
      //   this.tabIsTop = true;
      // }else{
      //   this.tabIsTop = false;
      // }
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
// .line {
//   width: 100%;
//   height: 1px;
//   color: #eaeaea;
//   margin: 5px 0;
// }
.m-t-10 {
  margin-top: 10px;
}
.header1 {
  // width: 100%;
  height: 100%;
  padding: 30px 0 0 24px;
  .post {
    display: flex;
    align-items: center;
  }
  .identity {
    color: #666;
    font-size: 10px;
    margin-top: 5px;
  }
  .number {
    color: #666;
    font-size: 10px;
    margin-top: 13px;
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
    margin-left: 4px;
    color: #333333;
    font-weight: 400;
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
    margin-top: 4px;
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
  border: 1px solid #3598dc !important;
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
  background-color: #3598dc !important;
}
/deep/ .listButton {
  background-color: #fff !important;
  border: 1px solid #3598dc !important;
  color: #3598dc !important;
  border-radius: 17px !important;
}
.jsBox {
  display: flex;
  align-items: center;
  color: #333;
  font-size: 12px;
  margin: 5px 0 5px 20px;
  .round {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #3598dc;
    margin-right: 4px;
  }
}
.line {
  width: 100%;
  height: 1px;
  background-color: #eaeaea;
  margin: 10px 0;
}
</style>
