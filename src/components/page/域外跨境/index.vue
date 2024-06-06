<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="ywkj"
      :cardId="cardId"
      :show="false"
      :popupLength="1"
      :isCard="false"
      color="#25607E"
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
              <van-image :src="IMG + 'ywkj/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'ywkj/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'ywkj/icon/address.png'" />
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
              <van-image :src="IMG + 'ywkj/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'ywkj/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'ywkj/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="ywkj/icon/phoneButton.png"
      addressButton="ywkj/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="中鑫博勒"
      :type="0"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="ywkj/icon/sys.png"
      :qrContent="{
        qrName: '点击长按查看Jeep小程序',
        qrTitle: 'Jeep小程序',
      }"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#25607E"
    ></tab>
   <ywkj-content name="企业介绍"></ywkj-content>
   <ywkj-content name="团队价值观"></ywkj-content>
   <ywkj-content name="服务项目" :list="list"></ywkj-content>
   <ywkj-content name="联系我们" :list="list"></ywkj-content>

    <!-- 阿库标识 -->
    <aKuLogo></aKuLogo>
  </div>
</template>

<script>
import more from "../../tool/more.vue";
export default {
  components: { more },
  data() {
    return {
      tabList: [
        {
          name: "企业介绍",
          id: "qyjs",
        },
        {
          name: "产品展示",
          id: "cpzs",
        },
        {
          name: "联系我们",
          id: "lxwm",
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
      whList: [
        {
          url: "ywkj/icon/1.png",
          name: "品牌定位",
          title: "一切都是为了回归生活",
        },
        {
          url: "ywkj/icon/2.png",
          name: "品牌愿景",
          title: "中国汽车户外生活引领者",
        },
        {
          url: "ywkj/icon/3.png",
          name: "品牌精神",
          list: [
            "自由：追求生活体验 征服不同旅程 生而无悔",
            "探索：尝试新的体验与独特的生活方式",
            "激情：精神与体验的双重享受",
            "本真：做自己 探索真实的世界",
          ],
        },
        {
          url: "ywkj/icon/4.png",
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
  padding: 79px 0 0 30px;

  .post {
    display: flex;
    align-items: center;
  }
  .name {
    .text1 {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #333333;
    }
    .text2 {
      font-size: 9px;
      color: #25607E;
    }
  }
  .text3 {
    margin-left: 5px;
    font-size: 10px;
    letter-spacing: 2px;
    color: #666666;
    line-height: 12px;
  }
  .pm {
    margin-top:17px;
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
    margin-top: 6px;
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
    margin-top:6px;
    color:#666666;
    font-size: 12px;
    align-items: center;
  }
}

/deep/ .confirmButton {
  background-color: #db001a !important;
}
/deep/ .line {
  background-color: #db001a !important;
}
.selectCard {
  border: 1px solid #25607E !important;
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
    font-size: 8px;
  }
  .text4 {
    color: #b50000;
    font-size: 8px;
  }
  .m-y {
    margin: 5px 0;
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
