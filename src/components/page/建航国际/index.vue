<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="jhgj"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="1"
      color="#1CB7D8"
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
              <van-image :src="IMG + 'jhgj/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'jhgj/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'jhgj/icon/address.png'" />
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
              <van-image :src="IMG + 'jhgj/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'jhgj/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'jhgj/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="jhgj/icon/phoneButton.png"
      addressButton="jhgj/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="建航国际"
      :type="1"
      width="24px"
      height="24px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="jhgj/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="jhgj/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#1CB7D8"
    ></tab>
    <!-- 公司介绍 -->
    <headerContent
      headerImg="jhgj/headerImage/qyjj.png"
      width="100px"
      height="50px"
      id="gywm"
    >
      <template #content>
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </p>
        <van-image :src="IMG + 'jhgj/image/jsBg.png'" class="m-t-14" />
      </template>
    </headerContent>
    <!-- 品牌文化 -->
    <headerContent
      headerImg="jhgj/headerImage/ppwh.png"
      width="101px"
      height="50px"
    >
      <template #content>
        <div
          class="whBox"
          v-for="(item, index) in getContent('品牌文化')"
          :key="index"
        >
          <van-image
            v-if="item.image"
            :src="item.image.url"
            width="40px"
            height="40px"
          ></van-image>
          <div class="whItem">
            <p class="name">{{ item.name }}</p>
            <div class="title">{{ item.describe }}</div>
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 核心价值观 -->
    <headerContent
      headerImg="jhgj/headerImage/hxjzg.png"
      width="100px"
      height="50px"
      id="cpfw"
    >
      <template #content>
        <div
          class="jzgBox"
          v-for="(item, index) in getContent('核心价值观')"
          :key="index"
        >
          <div class="d-flex name">
            <div class="dian"></div>
            {{ item.name }}
          </div>
          <div class="describe">{{ item.describe }}</div>
        </div>
      </template>
    </headerContent>
    <!-- 国际物流 -->
    <headerContent
      headerImg="jhgj/headerImage/gjwl.png"
      width="119px"
      height="50px"
      id="gjwl"
    >
      <template #content>
        <div v-for="(item, index) in getContent('国际物流')" :key="index">
          <div class="wlName">{{ item.name }}</div>
          <van-image v-if="item.image" :src="item.image.url"></van-image>
        </div>
        <div class="m-t-10"></div>
        <more
          title="查看更多"
          :icon="IMG+'jhgj/icon/right.png'"
          path="/thirdIndex"
          color="#666666"
        ></more>
      </template>
    </headerContent>
    <!-- 联系我们 -->
    <headerContent
      headerImg="jhgj/headerImage/lxwm.png"
      width="122px"
      height="50px"
      id="lxwm"
    >
      <template #content>
        <div v-for="(item,index) in getContent('联系我们')" v-if="index<=2">
          <div class="d-flex">
            <div class="dian"></div>
            <companyTitle
          :title="item.name"
          fontSize="14px"
        ></companyTitle>
          </div>

        <iText :title="item.name_en" titles="地址：" color="#666666"></iText>
        <iText :title="item.pdf" titles="Tel：" color="#666666"></iText>
        <iText :title="item.describe" titles="Fax：" color="#666666"></iText>
        <van-image v-if="item.image" :src="item.image.url"></van-image>
      </div>
      <div class="m-t-10"></div>
        <more
          title="查看更多"
          :icon="IMG+'jhgj/icon/right.png'"
          path="/secondIndex"
          color="#666666"
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
          name: "国际物流",
          id: "gjwl",
        },
        {
          name: "联系我们",
          id: "lxwm",
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
      text: "宁波建航国际货运代理有限公司，是经国家商务部批准的一级国际货运代理企业，并获得交通部批准的无船承运人（MOC-NV01059）资格。建航（EUMEX)于1990年在香港成立，先后在深圳、上海、宁波、厦门、青岛、天津、南京、义乌、嘉兴、大连成立公司及分支机构。 近年来，建航(EUMEX)以宁波总部为核心，凭借先进的商业模式、高素质的专业人才及高水准的规范服务，依托北美、拉非、非美三大航线运营体系及专业的进出口整箱及拼箱海运、空运和铁路运输服务，逐步成为国际物流行业的具有代表性企业之一。 如今，建航（EUMEX)顺应国家产业互联网发展趋势，整合全球带来的资源，利用总部统一管理的优势，融合网络平台系统，为客户提供专业、高效的“互联网+物流”供应链解决方案，致力于打造先进的一站式国际物流平台。",
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
.m-t-10 {
  margin-top: 10px;
}
.header1 {
  // width: 100%;
  height: 100%;
  padding: 48px 0 0 30px;
  .post {
    display: flex;
    align-items: baseline;
  }
  .name {
    .text1 {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 5px;
      margin-right: 5px;
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
      width: 243px;
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
  border: 1px solid #1cb7d8 !important;
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
  background-color: #1cb7d8 !important;
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
.jzgBox {
  margin-top: 10px;
  .name {
    color: #333333;
    font-size: 12px;
    font-weight: 500;
  }
  .describe {
    color: #666666;
    font-size: 12px;
    margin: 5px 0 0 15px;
  }
}
.wlName {
  color: #333333;
  font-size: 14px;
  margin: 10px 0 6px 0;
  font-weight: 500;
}

.dian {
    width: 8px;
    height: 8px;
    background-color: #1cb7d8;
    margin-right: 4px;
    border-radius: 4px;
  }
</style>
