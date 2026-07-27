<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="hpgj"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="1"
      color="#6B4092"
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
              <van-image :src="IMG + 'hpgj/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'hpgj/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'hpgj/icon/address.png'" />
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
              <van-image :src="IMG + 'hpgj/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'hpgj/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'hpgj/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="hpgj/icon/phoneButton.png"
      addressButton="hpgj/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="皓鹏国际"
      :type="1"
      width="16px"
      height="16px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="hpgj/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="hpgj/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#6B4092"
    ></tab>
    <!-- 公司介绍 -->
    <headerContent
      headerImg="hpgj/headerImage/qyjs.png"
      width="131px"
      height="50px"
      id="qyjs"
    >
      <template #content>
        <div class="line"></div>
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </p>
        <van-image :src="IMG + 'hpgj/image/jsBg.png'" class="m-t-14" />
      </template>
    </headerContent>
    <!-- 企业文化 -->
    <headerContent
      headerImg="hpgj/headerImage/qywh.png"
      width="131px"
      height="50px"
    >
      <template #content>
        <div class="line"></div>
        <div
          class="whBox"
          v-for="(item, index) in getContent('企业文化')"
          :key="index"
        >
          <van-image
            v-if="item.image"
            :src="item.image.url"
            width="44px"
            height="44px"
          ></van-image>
          <div class="whItem">
            <p class="name">{{ item.name }}</p>
            <div class="title">{{ item.describe }}</div>
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 产品服务 -->
    <headerContent
      headerImg="hpgj/headerImage/cyfw.png"
      width="131px"
      height="50px"
      id="cpfw"
    >
      <template #content>
        <div class="line"></div>
        <div class="tzBox">
          <div
            v-if="index <= 5"
            class="tzItem"
            :style="{ backgroundImage: 'url(' + getUrl(item.image.url) + ')' }"
            v-for="(item, index) in getContent('产品服务')"
            :key="index"
          >
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
        <div class="m-t-10"></div>
        <more
          title="更多"
          :icon="IMG+'hpgj/icon/right.png'"
          color="#000000"
          path="thirdIndex"
        ></more>
      </template>
    </headerContent>
    <!-- 解决方案 -->
    <headerContent
      headerImg="hpgj/headerImage/jjfa.png"
      width="131px"
      height="50px"
      id="jjfa"
    >
      <template #content>
        <div class="line"></div>
        <div  v-if="index <= 1" v-for="(item, index) in getContent('解决方案')" :key="index">
          <div class="faBox">
            <div class="faLine"></div>
            <div class="faItem">
            <p class="name">{{ item.name }}</p>
            <div class="title">{{ item.describe }}</div>
          </div>
          </div>

          <van-image v-if="item.image" :src="item.image.url"></van-image>
        </div>
        <div class="m-t-10"></div>
        <more
          title="更多"
          :icon="IMG+'hpgj/icon/right.png'"
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
          name: "产品服务",
          id: "cpfw",
        },
        {
          name: "解决方案",
          id: "jjfa",
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
      text: "聚焦国际海陆空一体化全方位物流服务，帮您找到更便宜、更快捷、更优化的货物运输方案。服务范围包括：国际货运、中国港运输、货物代收、订舱、仓储、中转、集装箱拼箱拆箱、散货运输、杂费结算、报关、报检、保险等一条龙服务，以期与客户实现盈利！物流管理是指在社会生产过程中，根据物质实体的流动规律，运用管理的基本原理和科学方法，对物流活动进行计划、组织、指挥、协调、控制和监督。使各项物流活动达到更好的协调和配合，从而降低物流成本，提高物流效率和经济效益。现代物流管理是以系统论、信息论和控制论为基础的。",
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
  padding: 30px 0 0 30px;
  .post {
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
    font-size: 12px;
    letter-spacing: 5px;
    margin-top: 8px;
  }
  .pm {
    margin-top: 34px;
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
      width: 195px;
    }
    display: flex;
    margin-top: 4px;
    color: #666666;
    font-size: 12px;
    align-items: baseline;
  }
}

.header2 {
  // width: 100%;
  height: 100%;
  padding: 56px 0 0 30px;

  .post {
    display: flex;
    align-items: center;
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 5px;
        color: #ffffff;
        margin-right: 3px;
      }
      .text2 {
        font-size: 12px;
        color: #422188;
      }
    }
  }
  .text3 {
    font-size: 12px;
    color: #ffffff;
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
    color: #666666;
    font-size: 10px;
  }
  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 10px;
    margin-top: 5px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
      width: 269px;
    }
    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 10px;
    align-items: baseline;
  }
}

.header3 {
  // width: 100%;
  height: 100%;
  padding: 20px 44px 0 30px;

  .post {
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
    margin-top: 5px;
  }
  .pm {
    margin-top: 50px;
  }
  .text4 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 10px;
  }
  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 10px;
    margin-top: 5px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
      width: 263px;
    }
    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 10px;
    align-items: baseline;
  }
}
.header4 {
  // width: 100%;
  height: 100%;
  padding: 69px 30px 0 56px;

  .post {
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        color: #333333;
        text-align: right;
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
    margin-left: 5px;
    text-align: right;
  }
  .pm {
    margin-top: 10px;
  }
  .text4 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 10px;
  }
  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 10px;
    margin-top: 5px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
      width: 243px;
    }
    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 10px;
    align-items: baseline;
  }
}
.selectCard {
  border: 1px solid #6B4092 !important;
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
  background-color: #6B4092 !important;
}
.whBox {
  margin-top: 8px;
  display: flex;
  align-items: center;
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
    }
  }
}

.tzBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 8px;
  row-gap: 8px;
  margin-top: 10px;
  .tzItem {
    border-radius: 4px;
    width: 155px;
    height: 112px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-size: 100% 100%;
    .name {
      background-color: rgba($color: #000, $alpha: 0.3);
      text-align: center;
      color: #ffffff;
      padding: 4px 0;
      font-size: 14px;
    }
  }
}
.faBox {
  margin-top: 5px;
  display: flex;
  align-items: center;
  .faLine{
      background-color: #6B4092;
      width: 1px;
      height: 58px;

  }
  .faItem {
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
    }
  }
}
</style>
