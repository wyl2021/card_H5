<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="dnad"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="4"
      color="#04509E"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>
              <div v-if="cardId + 1==3" class="text2">{{  userInfo.post}}</div>
            </div>
            <div class="text3">
              {{ cardId + 1==3?'深圳市德宁安达供应链管理有限公司':userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'dnad/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'dnad/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'dnad/icon/address.png'" />
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
              <div class="text2" v-if="slotProps.item+1==3" >{{ userInfo.post }}</div>
            </div>
            <div class="text3">
              {{ slotProps.item+1==3?"深圳市德宁安达供应链管理有限公司":userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'dnad/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'dnad/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'dnad/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="dnad/icon/phoneButton.png"
      addressButton="dnad/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="德宁安达"
      :type="1"
      width="24px"
      height="24px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="dnad/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="dnad/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#04509E"
    ></tab>
    <!-- 公司介绍 -->
    <headerContent
      headerImg="dnad/headerImage/gyad.png"
      width="122px"
      height="21px"
      id="gsjs"
    >
      <template #content>
        <van-image :src="IMG + 'dnad/image/jjBg.png'" class="m-t-14" />
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </p>
        <div class="m-t-10"></div>
        <more
          title="查看更多"
          icon="arrow"
          color="#666666"
          path="contentInfo"
          float="flex-start"
        ></more>
      </template>
    </headerContent>
    <!-- 安达承诺 -->
    <headerContent
      headerImg="dnad/headerImage/adcn.png"
      width="122px"
      height="21px"
    >
      <template #content>
        <div class="cnBox">
          <div
            v-for="(item, index) in getContent('安达承诺')"
            class="cnItem"
            :key="index"
          >
            <van-image
              :src="item.image.url"
              v-if="item.image"
              width="30px"
              height="30px"
              class="image"
            />

              <div class="name">{{ item.name }}</div>
              <div class="describe">{{ item.describe }}</div>

          </div>
        </div>
      </template>
    </headerContent>
    <!-- 产品服务 -->
    <headerContent
      headerImg="dnad/headerImage/cpfw.png"
      width="122px"
      height="21px"
      id="cpfw"
    >
      <template #content>
        <listBox
          v-for="(item, index) in getContent('产品服务')"
          :key="index"
          v-if="item && index<=2"
          :type="1"
          :imageUrl="{
            url: item.image.url,
            width: '130px',
            columWidth: '60%',
            height: '96px',
          }"
          :name="item.name"
          buttonColor="#04509E"
          :describe="item.describe"
          :pageType="3"
          :id="item.id"
          button="查看详情"
        >
        </listBox>
      </template>
    </headerContent>
    <!-- 业务范围 -->
    <headerContent
      headerImg="dnad/headerImage/ywfw.png"
      width="122px"
      height="21px"
      id="cpfw"
    >
      <template #content>
        <listBox
          v-for="(item, index) in getContent('业务范围')"
          :key="index"
          v-if="item && index <= 3"
          :type="2"
          :imageUrl="{
            url: item.image.url,
            width: '130px',
            columWidth: '60%',
            height: '96px',
          }"
          :name="item.name"
          buttonColor="#04509E"
          :describe="item.describe"
          :pageType="null"
          :id="item.id"
          button="查看详情"
          class="m-t-10"
        >
        </listBox>
      </template>
    </headerContent>
    <!-- 联系我们 -->
    <headerContent
      headerImg="dnad/headerImage/lxwm.png"
      width="122px"
      height="23px"
      id="lxwm"
    >
      <template #content>
        <companyTitle
          title="深圳市德宁安达供应链管理有限公司"
          fontSize="15px"
        ></companyTitle>
        <iText title="16675546559" titles="电话：" color="#666666"></iText>
        <iText
          title="1729416983@qq.com"
          titles="邮箱："
          color="#666666"
        ></iText>
        <iText
          title="广东省深圳市龙岗区平湖街道上木古社区捷威工业城三期A栋一楼"
          titles="地址："
          color="#666666"
        ></iText>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="广东省深圳市龙岗区平湖街道上木古社区捷威工业城三期A栋一楼"
          name="德宁安达"
        ></TXMap>
        <iText title="www.dnad123.com" titles="官网：" color="#666666"></iText>
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
          name: "公司介绍",
          id: "gsjs",
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
      list: [],
      text: "德宁安达（深圳）国际物流供应链管理有限公司，总部设于深圳，2019年起转型做FBA头程物流，以国际物流供应链为核心，为我国跨境企业提供，海运，空运，海外仓，国际快递为一体的一站式服务，先后在深圳，广州，义乌设有多个仓库点，带领中国制造，安全、快速、到达世界的每一个角落。",
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
  padding: 92px 0 0 30px;
  .post {
    display: flex;
    align-items: baseline;
  }
  .name {
    .text1 {
      font-size: 18px;
      font-weight: 800;
      letter-spacing: 5px;
      margin-right: 3px;
      color: #333333;
    }
    .text2 {
      font-size: 9px;
      color: #422188;
    }
  }
  .text3 {
    font-size: 11px;
    letter-spacing: 5px;
  }
  .pm {
    margin-top: 8px;
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
    margin-top: 3px;
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
    margin-top: 3px;
    color: #666666;
    font-size: 10px;
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
    margin-top:5px;

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
  border: 1px solid #04509e !important;
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
  background-color: #04509e !important;
}
.cnBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .cnItem {
    background-color: rgba($color: #04509e, $alpha: 0.05);
    border-radius: 8px;
    padding: 13px 12px;
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
/deep/ .list1 {
  margin-top: 14px;
}
.lxBox {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  align-items: baseline;
  color: #484848;
  margin-top: 8px;
  .line {
    width: 1px;
    height: 10px;
    background-color: #04509e;
    margin-right: 5px;
  }
}
</style>
