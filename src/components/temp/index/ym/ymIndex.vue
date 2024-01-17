<template>
  <div>
    <ymTop :cardId="1"></ymTop>
    <two3 class="my-12" :info="twoInfo"></two3>

    <!-- <van-image
      class="my-12"
      style="margin-top:12px"
      :src="require('@/assets/tempfile/ym/image/grxx.png')"
    ></van-image> -->
    <van-image
      class="m-12 "

      :src="require('@/assets/tempfile/ym/image/smjwx.png')"
    ></van-image>
    <tab
      class="my-12"
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
    ></tab>
    <van-image
      id="gsjs"
      class="my-12"
      :src="require('@/assets/tempfile/ym/image/gsjs.png')"
    ></van-image>
    <!-- <router-link :to="{
        path: '/solutionInfo',
        name: 'solutionInfo',
        params: {
          id: content1,
        },
      }">
    <van-image
      id="gsjs"
      class="my-12"
      :src="require('@/assets/tempfile/ym/image/gsjs.png')"
    ></van-image>
    </router-link> -->
    <van-image
      class="m-12"
      :src="require('@/assets/tempfile/ym/image/fazlc.png')"
    ></van-image>
    <!-- <router-link :to="{
        path: '/solutionInfo',
        name: 'solutionInfo',
        params: {
          id: content,
        },
      }"> -->
<van-image

      id="fwxm"
      class="my-12"
      :src="require('@/assets/tempfile/ym/image/fwxm1.png')"
    ></van-image>
    <!-- </router-link> -->
    <!-- <div class="fwList">
      <van-image  class="fwHeader" width="112px" height="30px" :src="require('@/assets/tempfile/ym/image/fwxm.png')" />
      <div></div>
    </div> -->
    <van-image
      id="lxwm"
      class="m-12"
      :src="require('@/assets/tempfile/ym/image/lxwm.png')"
    ></van-image>
    <div class="h-50"></div>

    <tabbar :active="0"></tabbar>
  </div>
</template>

<script>
import two3 from "@/components/temp/two/two3.vue";
import tabbar from "@/components/tabbar/index.vue";
import tab from "@/components/temp/tab/tab.vue";
import ymTop from "@/components/temp/top/ymTop.vue";

export default {
  components: {
    two3,
    tabbar,
    tab,
    ymTop,
  },
  data() {
    return {
      content:require('@/assets/tempfile/ym/image/content1.png'),
      // content1:require('@/assets/tempfile/ym/image/content1.png'),
      twoInfo: {
        phone: "", ///手机号
        image1: require("@/assets/tempfile/ym/icon/phone.png"), //按钮1icon
        image2: require("@/assets/tempfile/ym/icon/address.png"), //按钮2icon
      }, ///第二个模块参数
      tabList: [
        {
          name: "公司介绍",
          id: "gsjs",
        },
        {
          name: "服务项目",
          id: "fwxm",
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
      console.log(scrollTop);
      console.log("获取tap栏高度", tabScroll);
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
/deep/ .phoneButton {
  background: linear-gradient(90deg, #168ed3 10%, #168ed3 100%) !important;
}
/deep/ .addressButton {
  background: linear-gradient(90deg, #168ed3 10%, #168ed3 100%) !important;
}
/deep/ .selectTabText {
  font-weight: 900;
  color: #168ed3 !important;
}
/deep/ .bottom {
  background: #168ed3 !important;
}
.my-12 {
  margin: 0 12px;
}
.m-12 {
  margin: 12px;
}
.fwList {
  margin: 6px 12px;
  background-color: #fff;
  border-radius: 12px;
  padding: 12px;
  .fwHeader {
    display: flex;
    margin: auto;
  }
}
.mx-12{
  margin: 12px 0;
}
</style>
