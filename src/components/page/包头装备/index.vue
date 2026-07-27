<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="btzb"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="1"
      color="#025EA7"
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
              <van-image :src="IMG + 'btzb/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'btzb/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'btzb/icon/address.png'" />
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
              <van-image :src="IMG + 'btzb/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'btzb/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'btzb/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="btzb/icon/phoneButton.png"
      addressButton="btzb/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="包头装备"
      :type="1"
      width="16px"
      height="16px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="btzb/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="btzb/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#025EA7"
    ></tab>
    <!-- 公司介绍 -->
    <headerContent
      headerImg="btzb/headerImage/qyjs.png"
      width="100%"
      height="40px"
      id="qyjs"
    >
      <template #content>
        <div class="m-t-10"></div>
        <van-image :src="IMG + 'btzb/image/jsBg1.png'" />
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </p>
        <div class="m-t-10"></div>
        <van-image :src="IMG + 'btzb/image/jsBg2.png'" />
      </template>
    </headerContent>

    <!-- 高效服务 -->
    <headerContent
      headerImg="btzb/headerImage/gxfw.png"
      width="100%"
      height="40px"
    >
      <template #content>
        <div class="fwBox" v-for="(item, index) in getContent('高效服务')">
          <div class="round">{{ index < 9 ? "0" + (index + 1) : index }}</div>
          <div class="title">{{ item.name }}</div>
        </div>
      </template>
    </headerContent>
    <!-- 产业配套 -->
    <headerContent
      headerImg="btzb/headerImage/cypt.png"
      width="100%"
      height="40px"
    >
      <template #content>
        <div class="cyBox">
          <div class="cyItem" v-for="(item, index) in getContent('产业配套')">
            <van-image
              width="36px"
              height="36px"
              :src="item.image.url"
              :key="index"
              v-if="item.image"
             class="m-t-5"
            ></van-image>
            {{ item.name }}
          </div>
        </div>
      </template>
    </headerContent>
        <!-- 载体余量 -->
    <headerContent
      headerImg="btzb/headerImage/gxfw.png"
      width="100%"
      height="40px"
    >
      <template #content>
      <div class="ztBox" v-for="(item,index) in getContent('载体余量')" :style="{backgroundImage:'url('+getUrl(item.image.url)+')'}">


          <div class="ztButton" :style="{'background':item.describe=='充足'?'linear-gradient(  180deg, #268BDC 0%, #0069BD 100%)':'linear-gradient( 180deg, #E32828 0%, #AB0000 100%)'}">{{ item.describe }}</div>
          <div class="line"></div>
          <div class="describe" v-for="(item2,index2) in item.name.split(' ')">{{ item2 }}</div>
        </div>
      </template>
    </headerContent>
        <!-- 园区投资 -->
        <headerContent
      headerImg="btzb/headerImage/yqtz.png"
      width="100%"
      height="40px"
      id="yqtz"
    >
      <template #content>
      <div class="tzBox">
        <div v-if="index<=3" class="tzItem" :style="{backgroundImage:'url('+getUrl(item.image.url)+')'}" v-for="(item,index) in getContent('园区投资')"  :key="index">
          <div class="name">{{  item.name}}</div>
        </div>
      </div>
      <div class="m-t-10"></div>
      <more
      title="更多"
          icon="arrow"
          color="#666666"
          path="thirdIndex"

      ></more>
      </template>
    </headerContent>
     <!-- 招商载体 -->
     <headerContent
      headerImg="btzb/headerImage/zszt.png"
      width="100%"
      height="40px"
      id="zszt"
    >
      <template #content>
        <listBox
          v-for="(item, index) in getContent('招商载体')"
          :key="index"
          v-if="item && index<=3"
          :type="1"
          :imageUrl="{
            url: item.image.url,
            width: '130px',
            columWidth: '60%',
            height: '96px',
          }"
          :name="item.name"
          buttonColor="#E6EFF6"
          :describe="item.describe"
          :pageType="3"
          :id="item.id"
          button="详情"
          :class="{ 'm-t-10': index != 0 }"
        >
        </listBox>
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
          name: "园区投资",
          id: "yqtz",
        },
        {
          name: "招商载体",
          id: "zszt",
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
      text: "包头装备制造产业园区以大数据、云计算、物联网为代表的新一代信息技术产业；以航空航天、高端装备为代表的特色产业以及以新能源、生物医药等为代表的新兴产业已经形成产业集群，重点发展电子信息、生物医药、智能装备、汽车零部件、新材料等主导产业。成为推动高质量发展的创新能极。园区加快特色转型，融入了新一代信息技术发展的时代浪潮。面对高质量发展中遇到的困难挑战， 包头装备制造产业园区 敢想敢闯敢试，园区自成立之日起便被赋予了开放包容的精神禀赋，始终保持开放的胸怀，在招商引资、经济运行、基础开发、园区合作、基层管理等方面开发区始终秉承着全心全意为企业服务的理念，全力推进外资、外贸、外包齐头并进，对先进产业、先进技术、先进管理，园区始终突出开放的平台，为企业更好更快发展提供了有力支撑。",
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
      margin-right: 3px;
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
    margin-top: 5px;
  }
  .pm {
    margin-top: 32px;
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
      // width: 243px;
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
  border: 1px solid #025ea7 !important;
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
  background-color: #025ea7 !important;
}
.cnBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .cnItem {
    background-color: rgba($color: #025ea7, $alpha: 0.05);
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
.fwBox {
  background-color: #f0f5fa;
  display: flex;
  border-radius: 16px;
  margin-top: 10px;
  .round {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: #025ea7;
    text-align: center;
    font-size: 12px;
    z-index: 2;
    color: #ffffff;
    padding-top: 8px;
  }
  .title {
    text-align: center;
    font-size: 12px;
    color: #333;
    padding: 8px 0 0 8px;
  }
}
.cyBox {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-content: center;
  column-gap: 15px;
  row-gap: 8px;
  margin-top: 10px;
  .cyItem {
    font-size: 12px;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    .m-t-5{
      margin-bottom: 5px;
    }
  }
}

.ztBox{
  width:319px;
  height: 135px;
  border-radius: 8px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: 100% 100%;
  padding-top:24px;
  .ztButton{
    border-radius: 4px;
    width:56px;
    text-align: center;
    color: #ffffff;
    font-size: 14px;
    padding: 4px;

  }
  .line{
    width: 213px;
    height: 1px;
    margin: 12px 0;
    background-color: #ffffff;
  }
  .describe{
    // width: 90px;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
  }
}
.tzBox{
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 8px;
  row-gap: 8px;
  margin-top:10px;
  .tzItem{
    border-radius: 4px;
    width:155px;
    height:112px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-size:100% 100%;
    .name{
        background-color: rgba($color: #000, $alpha: 0.3);
        text-align: center;
        color: #ffffff;
        padding: 4px 0;
        font-size:14px;
    }
  }
}
/deep/ .van-button__text{
  color:#025EA7
}
</style>
