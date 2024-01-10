<!-- 第一个页面 -->

<template>
  <div class="home" ref="scrollContainer">
    <div class="home-main">
      <!-- 名片加名片背景 -->
      <tempTop10></tempTop10>
      <!-- 联系我们模块 -->
      <two2 :info="twoInfo"></two2>
      <!-- 名片内容模块  纯静态则用图片van-image -->
      <three1
        :info="{
          photoIcon: require('@/assets/tempfile/jh/sy_slices/photoicon.png'),
          type: 1,
          photo: require('@/assets/tempfile/jh/sy_slices/photo.png'),
        }"
      ></three1>
      <three1
        :info="{
          wxIcon: require('@/assets/tempfile/jh/sy_slices/wxicon.png'),
          type: 2,
          wx: require('@/assets/tempfile/jh/sy_slices/wx.png'),
          name: '',
          post: '扫描上面二维码图案,加我为好友',
        }"
      ></three1>
      <!-- 锚点导航栏 -->
      <tab :tabList="tabList" :tabId="tabId" :isTob="tabIsTop" id="tap" @butTab="butTab"></tab>
      <!-- 一般用于名片公司简介 -->
      <four5 id="gsjs">
        <!-- <template #cardContent></template> -->
      </four5>

      <!-- 一般用于产品或者方案模块 -->
      <five5 id="cpjs"></five5>
      <six1 id="lxwm"></six1>
    </div>
    <div class="h-50"></div>
    <tabbar :active="0"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
import tempTop10 from "@/components/temp/top/top10.vue";
import two2 from "@/components/temp/two/two2.vue";
import three1 from "@/components/temp/three/three1.vue";
import four5 from "@/components/temp/four/four5.vue";
import five5 from "@/components/temp/five/five5.vue";
import tab from "@/components/temp/tab/tab.vue"
import six1 from "@/components/temp/six/six1.vue"
export default {
  components: {
    tabbar,
    tempTop10,
    two2,
    three1,
    four5,
    five5,
    six1,
    tab
    // VueDplayer,
  },
  data() {
    return {
      topInfo: {
        name: "丁立谦",
        post: "总经理",
        phone: "18923413467",
        address: "深圳市南山区招商街道桃花园社区兴工路美年国际广场4栋505",
        email: "18923413467@163.com",
      }, ///名片
      cardId: 1, //名片下标
      twoInfo: {
        phone: "", ///手机号
        image1: require("@/assets/tempfile/aj/icon/phone.png"), //按钮1icon
        image2: require("@/assets/tempfile/aj/icon/address.png"), //按钮2icon
      }, ///第二个模块参数
      tabList: [
        {
          name: "公司介绍",
          id: "gsjs",
        },
        {
          name: "产品介绍",
          id: "cpjs",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },

      ], ///tab栏列表
      tabId: "gsjs", //默认tab
      tabIsTop: false, //用作下拉到一定程度现实tab栏

    };
  },
  created() {},
  watch: {},
  mounted() {
    window.addEventListener("scroll", this.scrolling);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrolling);
  },
  methods: {
    submitText(text) {
      if (text) {
        let t = [];
        text
          .split("\n")
          .forEach((item) => t.push(`<p style=margin:0px;>${item.trim()}</p>`));
        return t.join("\n");
      }
    },
    scrolling() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      var tabScroll = document.getElementById("tap").offsetTop;
      // console.log(scrollTop)
      // console.log("获取tap栏高度",tabScroll)
      if (scrollTop >= tabScroll) {
        this.tabIsTop = true;
      } else {
        this.tabIsTop = false;
      }
    },
    butTab(id) {
      this.tabId = id;
      window.location.hash=this.tabId
      var id = this.tabId.replace("#", "")
      var e =document.getElementById(id)
      e.scrollIntoView()

    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  &-main {
    min-height: 100vh;
    overflow-y: scroll;
    // width:100%;
    margin: 0 16px;
    // padding: 20px 0;
  }
}
/deep/ .phoneButton {
  background: linear-gradient(90deg, #DA2321 10%, #DA2321 100%) !important;
}
/deep/ .addressButton {
  background: linear-gradient(90deg, #DA2321 10%, #DA2321 100%) !important;
}
/deep/ .selectTabText{
  color: #DA2321 !important;
}
/deep/ .bottom{
  background:#DA2321 !important;
}
</style>




