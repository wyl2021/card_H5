<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="kt"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="false"
      :popupLength="1"
      color="#BE1A21"
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
              <van-image :src="IMG + 'kt/icon/phone.png'" />{{ userInfo.phone }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'kt/icon/email.png'" />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'kt/icon/address.png'" />
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
              <van-image :src="IMG + 'kt/icon/phone.png'" />{{ userInfo.phone }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'kt/icon/email.png'" />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'kt/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="kt/icon/phoneButton.png"
      addressButton="kt/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="科钛"
      :type="1"
      width="16px"
      height="16px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="kt/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="kt/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#BE1A21"
    ></tab>
    <!-- 企业介绍 -->
    <headerContent
      headerImg="kt/headerImage/qyjs.png"
      height="33px"
      width="100%"
    >
      <template #content> <div v-html="text"></div> </template
    ></headerContent>
    <!-- 我们的荣誉 -->
    <headerContent
      headerImg="kt/headerImage/wmdry.png"
      height="33px"
      width="100%"
    >
      <template #content>
        <van-image :src="IMG + 'kt/image/wmdry.png'"></van-image>
        <more
          title="查看更多"
          :icon="IMG + 'kt/icon/right.png'"
          color="#666666"
          path="contentInfo"

          class="m-t-10"
        ></more>
      </template>
    </headerContent>
    <!-- 产品中心 -->
    <headerContent
      headerImg="kt/headerImage/cpzx.png"
      height="33px"
      width="100%"
      id="cpzx"
    >
      <template #content>
        <div class="twofold-grid">
          <div
            class="cpItem"
            v-if="index < 6"
            v-for="(item, index) in getContent('产品中心')"
          >
            <van-image v-if="item.image" :src="item.image.url"></van-image>
            <div class="describe">{{ item.describe }}</div>
          </div>
        </div>
        <more
          title="查看更多"
          :icon="IMG + 'kt/icon/right.png'"
          color="#666666"
          path="thirdIndex"

          class="m-t-10"
        ></more>
      </template>
    </headerContent>
    <!-- 应用案例 -->
    <headerContent
    headerImg="kt/headerImage/cpzx.png"
      height="33px"
      width="100%"
      id="yyal"
    >
    <template #content>
      <div v-if="index<3" v-for="(item,index) in getContent('应用案例')" class="alBox">
        <div class="name">{{ item.name }}</div>

        <video :poster="item.image.url" :src="item.describe" width="100% " height="180px"></video>
        <!-- <video   :src="item.describe" width="100% " height="180" ref="video" controls>
        </video> -->
        <!-- <video   :src="IMG+'kt/kt.mp4'" width="100% " height="180" ref="video" controls>
        </video> -->
        <!-- <video controls autoplay name="media">
          <source src="https://chinaagv.oss-cn-guangzhou.aliyuncs.com/202312/20231207002.mp4" type="video/mp4">
        </video> -->
      </div>
      <more
          title="查看更多"
          :icon="IMG + 'kt/icon/right.png'"
          color="#666666"
          path="secondIndex"

          class="m-t-10"
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
          name: "产品中心",
          id: "cpzx",
        },
        {
          name: "应用案例",
          id: "yyal",
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
      text: "",
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
          this.text =
            this.getContent("企业介绍") != []
              ? this.getContent("企业介绍")[0].describe
              : "";
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
  padding: 40px 0 0 38px;
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
    }
  }
  .text3 {
    font-size: 12px;
    letter-spacing: 5px;
    margin-left: 4px;
    color:#333333;
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
  border: 1px solid #be1a21 !important;
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
  background-color: #be1a21 !important;
}
.cpItem{
  .describe{
    color: #333333;
  font-size: 12px;
  text-align: center;
  margin-top: 4px;
  }
}
.alBox{
  .name{
    color: #333333;
  font-size: 14px;
  margin: 5px 0;
  }
}
</style>
