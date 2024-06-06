<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="zxbl"
      :cardId="cardId"
      :show="false"
      :popupLength="1"
      :isCard="false"
      color="#113682"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>
            </div>
            <div
              class="text3"
              v-for="(item, index) in userInfo.post.split(' ')"
              key="index"
              v-if="index < 2"
            >
              {{ item }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'zxbl/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'zxbl/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'zxbl/icon/address.png'" />
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
            <div
              class="text3"
              v-for="(item, index) in userInfo.post.split(' ')"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'zxbl/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'zxbl/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'zxbl/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="zxbl/icon/phoneButton.png"
      addressButton="zxbl/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="中鑫博勒"
      :type="1"
      backgroundColor="#113681"
      width="24px"
      height="24px"

    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="zxbl/icon/sys.png"
      :qrContent="{
        qrName: '点击长按查看Jeep小程序',
        qrTitle: 'Jeep小程序',
        textColor:'#333333',
        textFont:'12px'
      }"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#113682"
    ></tab>
    <!-- 产品介绍 -->
    <headerContent
      id="cpjs"
      headerImg="zxbl/headerImage/cpjs.png"
      width="328px"
      height="31px"
    >
      <template #content>
        <div class="productBox">
          <div
            class="productItem"
            v-for="(item, index) in getContent('产品介绍')"
            v-if="index<4"
          :key="index"
          @click="getTo(item.id)"
          >
            <van-image :src="item.image.url" v-if="item.image"></van-image>
            <div class="lines"></div>
            <div class="text1">{{ item.name_en }}</div>
            <div class="text2">{{ item.name }}</div>
            <div class="text4">
              <span class="text3">全国统一零售价：</span>{{ item.describe }}元
            </div>
          </div>
        </div>
        <div class="m-t-14"></div>
        <more
          color="#234990"
          float="flex-start"
          title="查看更多"
          path="/thirdIndex"
        ></more>
      </template>
    </headerContent>
    <!-- 企业介绍 -->
    <headerContent
      id="qyjs"
      headerImg="zxbl/headerImage/qyjs.png"
      width="308px"
      height="29px"
    >
      <template #content>

        <van-image class="m-y-8" :src="IMG + 'zxbl/image/jsBg.png'"></van-image>

        <div
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </div>
        <div class="m-t-14"></div>
        <more
          color="#234990"
          float="flex-start"
          title="查看更多"
          path="/secondIndex"
        ></more>
      </template>
    </headerContent>
    <!-- 品牌文化 -->
    <headerContent
      headerImg="zxbl/headerImage/ppwh.png"
      width="328px"
      height="31px"
    >
      <template #content>
        <div class="whBox" v-for="(item, index) in whList" :key="index">
          <van-image
            :src="IMG + item.url"
            width="16px"
            height="16px"
          ></van-image>
          <div class="whItem">
            <p class="name">{{ item.name }}</p>
            <p v-if="item.name != '品牌精神'" class="title">{{ item.title }}</p>
            <div
              v-else
              v-for="(item2, index2) in item.list"
              class="title"
              :key="index2"
            >
              <div class="dian"></div>
              {{ item2 }}
            </div>
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 联系我们 -->
    <headerContent
      headerImg="zxbl/headerImage/lxwm.png"
      width="308px"
      height="29px"
      id="lxwm"
    >
      <template #content>

        <companyTitle title="Jeep甬台温舟总代理" fontSize="12px" color="#484848" ></companyTitle>
        <companyTitle title="地 址：宁波市江北区环城北路东段291号Jeep4S店"  color="#666666" fontSize="12px"></companyTitle>
        <companyTitle title="门店热线：0574-86688989 13586703726" color="#666666" fontSize="12px"></companyTitle>
        <companyTitle title="24小时急救电话：13857225379" color="#666666" fontSize="12px"></companyTitle>

        <div class="m-t-14"></div>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="宁波市江北区环城北路东段291号Jeep4S店"
          name="中鑫博勒"
        ></TXMap>
      </template>
    </headerContent>
    <!-- 阿库标识 -->
    <aKuLogo></aKuLogo>
  </div>
</template>

<script>
import CompanyTitle from '../../tool/companyTitle.vue';
import more from "../../tool/more.vue";
export default {
  components: { more, CompanyTitle },
  data() {
    return {
      tabList: [
        {
          name: "产品介绍",
          id: "cpjs",
        },
        {
          name: "企业介绍",
          id: "qyjs",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },
      ], ///tab栏列表
      tabId: "cpjs", //默认tab
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
      text: "Jeep宁波（江北店） Jeep品牌宁波、台州、温州、舟山总代理。 十余年专营Jeep汽车品牌老店，已为数十万车主提供服务。 以汽车销售为中心，开展汽车服务、越野文化开发，改装、汽车文旅，户外露营等业务。 拥有华东区唯一获得国家地理认证的越野路线-龙极之径。 合作运营有东钱湖上水露营区·马山营地，东钱湖沙滩营地等多个户外营地。",
      whList: [
        {
          url: "zxbl/icon/1.png",
          name: "品牌定位",
          title: "一切都是为了回归生活",
        },
        {
          url: "zxbl/icon/2.png",
          name: "品牌愿景",
          title: "中国汽车户外生活引领者",
        },
        {
          url: "zxbl/icon/3.png",
          name: "品牌精神",
          list: [
            "自由：追求生活体验 征服不同旅程 生而无悔",
            "探索：尝试新的体验与独特的生活方式",
            "激情：精神与体验的双重享受",
            "本真：做自己 探索真实的世界",
          ],
        },
        {
          url: "zxbl/icon/4.png",
          name: "品牌使命",
          title: "打造人与人之间最自然和真实的沟通",
        },
      ],
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
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    },
    getContent(name) {
      const data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((item) => {
          console.log(item);
          this.list = item.data.list;
        });
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
  padding: 110px 0 0 36px;
  display: flex;
  justify-content: space-around;
  border-radius: 8px;
  .post {
  }
  .name {
    .text1 {
      font-size: 15px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #fff;
    }
    .text2 {
      font-size: 9px;
      color: #113682;
    }
  }
  .text3 {
    margin-top: 5px;
    font-size: 13px;
    letter-spacing: 2px;
    color: #fff;
    line-height: 12px;
  }
  .pm {
  }
  .text4 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }

    color: #fff;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }

    color: #fff;
    font-size: 12px;
    margin-top: 4px;
    display: flex;
    align-items: center;
  }
  .text6 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    .textccc {
      width: 183px;
    }
    display: flex;
    margin-top: 4px;
    color: #fff;
    font-size: 12px;
    align-items: baseline;
  }
}

/deep/ .confirmButton {
  background-color: #db001a !important;
}
/deep/ .line {
  background-color: #db001a !important;
}
.selectCard {
  border: 1px solid #113682 !important;
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
  margin-bottom: 14px;
}
.a-item {
  align-items: baseline !important;
  width: 290px;
}
.productBox {
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;

  .productItem {
    border: #f6f6f6 solid 1px;
    padding: 5px;
    .lines {
    border: #E0DFDD dotted 1px;
    width: 100%;
  }
  }
  .text1 {
    color: #666;
    font-size: 10px;
  }
  .text2 {
    color: #484848;
    font-size: 10px;
    margin-bottom: 5px;
  }
  .text3 {
    color: #999999;
    font-size: 10px;
  }
  .text4 {
    color: #b50000;
    font-size: 10px;
  }
  .m-y {
    margin: 5px 0;
  }
}
.whBox {
  margin-top: 8px;
  display: flex;
  align-items: baseline;
  .whItem {
    margin-left: 8px;

    .name {
      color: #333333;
      font-size: 14px;
      margin-bottom: 8px;
      font-weight:500;
    }
    .title {
      font-weight: 400;
      color: #666;
      font-size: 12px;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
    }
    .dian {
      width: 5px;
      height: 5px;
      margin-right: 3px;
      background-color: #113681;
      border-radius: 2px;
    }
  }
}
.lxTitle{
  color: #484848;
  font-size: 12px;
  margin:8px 0;
}
.lxTitle2{
  color: #666666;
  font-size: 12px;

}
.m-y-8{
  margin:8px 0;
}
</style>
