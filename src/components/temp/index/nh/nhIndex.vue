<!-- 第一个页面 -->

<template>
  <div class="home" ref="scrollContainer">
    <div class="home-main">
      <!-- 名片加名片背景 -->
      <tempTop9 :cardId="1" :info="topInfo"></tempTop9>
      <!-- 联系我们模块 -->
      <two2 :info="twoInfo"></two2>
      <!-- 锚点导航栏 -->
      <tab :tabList="tabList" :tabId="tabId" :isTob="tabIsTop" id="tap" @butTab="butTab"></tab>
      <!-- 名片内容模块  纯静态则用图片van-image -->
      <three2 id="qyjs"
        :info="{
          type: 1,
          photo: require('@/assets/tempfile/nh/image/qiyejieshao.png'),
        }"
      ></three2>
      <!-- 一般用于名片公司简介 -->
      <four4 >
        <!-- <template #cardContent></template> -->
      </four4>
      <!-- 纯静态页面则直接以图片显示 -->
      <van-image
      class="mb-12"
          fit="contain"
          width="100%"
          :src="require('@/assets/tempfile/nh/image/qiyewenhua.png')"
        ></van-image>
        <five4 id="cpzs"></five4>
      <van-image id="lxwm"
      class="mb-12"
          fit="contain"
          width="100%"
          :src="require('@/assets/tempfile/nh/image/lianxiwomen.png')"
        ></van-image>
    </div>
    <div class="h-50"></div>
    <tabbar :active="0"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
import tempTop9 from "@/components/temp/top/top9.vue";
import two2 from "@/components/temp/two/two2.vue";
import three2 from "@/components/temp/three/three2.vue";
import four4 from "@/components/temp/four/four4.vue";
import five4 from "@/components/temp/five/five4.vue";
import tab from "@/components/temp/tab/tab.vue"

export default {
  components: {
    tabbar,
    tempTop9,
    two2,
    three2,
    four4,
    five4,
    tab,
  },
  data() {
    return {
      topInfo: {
        //第一张名片
        name: "",
        post: "",
        phone: "",
        address: "",
        email: "",
      }, ///名片
      cardId: 1, //名片下标
      twoInfo: {
        phone: "", ///手机号
        image1: require("@/assets/tempfile/aj/icon/phone.png"), //按钮1icon
        image2: require("@/assets/tempfile/aj/icon/address.png"), //按钮2icon
      }, ///第二个模块参数
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
        // {
        //   name: "测试测试",
        //   id: "cs3",
        // },
      ], ///tab栏列表
      tabId: "qyjs", //默认tab
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
      console.log(scrollTop)
      console.log("获取tap栏高度",tabScroll)
      if (scrollTop >= tabScroll) {
        this.tabIsTop = true;
      } else {
        this.tabIsTop = false;
      }
    },
    butTab(id) {
      // console.log(id);
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
  background: linear-gradient(90deg, #0e58a3 10%, #0e58a3 100%) !important;
}
/deep/ .addressButton {
  background: linear-gradient(90deg, #0e58a3 10%, #0e58a3 100%) !important;
}
</style>




