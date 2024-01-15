<!-- 第一个页面 -->

<template>
  <div class="home" ref="scrollContainer">
    <div class="home-main">
      <!-- 名片加名片背景 -->
      <gjTop :cardId="1" :info="topInfo"></gjTop>

      <!-- 联系我们模块 -->
      <two2 :info="twoInfo"></two2>
      <!-- 锚点导航栏 -->
      <gjThree
        :info="{
          photoIcon: require('@/assets/tempfile/gj/headerImage/logo1.png'),
          type: 1,
          photo: require('@/assets/tempfile/gj//headerImage/grxxz.png'),
        }"
      ></gjThree>
      <gjThree
        :info="{
          wxIcon: require('@/assets/tempfile/gj/headerImage/logo2.png'),
          type: 2,
          wx: require('@/assets/tempfile/gj//headerImage/ewm.png'),
        }"
      ></gjThree>
      <tab
        :tabList="tabList"
        :tabId="tabId"
        :isTob="tabIsTop"
        id="tap"
        @butTab="butTab"
      ></tab>

      <!-- 一般用于名片公司简介 -->
      <gjFour id="xhjs">
        <!-- <template #cardContent></template> -->
      </gjFour>
      <!-- <van-image
        class="mb-12"
        fit="contain"
        width="100%"
        :src="require('@/assets/tempfile/aj/thirdIndex/qywh.png')"
      /> -->
      <!-- 协会动态 -->


      <!-- 运输物流 -->
      <div id="xhdt" class="p-all-12 bg-fff br-8 mb-12">
        <!-- <icon-content
          style="justify-content: center"
          :src="require('@/assets/tempfile/aj/headerImage/yswl.png')">
        </icon-content> -->
        <!-- 此模块用于一半静态样式一半存在有功能的情况 -->
        <gjFive id="cs6"></gjFive>






          <router-link
            :to="{
              path: '/solutionInfo',
              name: 'solutionInfo',
              params: { id: '携带参数' },
            }"
          >
            <div class="c-666 ta-r fs-12">更多<van-icon name="arrow"></van-icon></div>
          </router-link>

      </div>
      <!-- 解决方案 -->
      <gjSix id="lxwm"></gjSix>



    </div>
    <div class="h-50"></div>
    <tabbar :active="0"></tabbar>
  </div>

</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
import gjTop from "@/components/temp/top/gjTop.vue";
import two2 from "@/components/temp/two/two2.vue";
import gjThree from "@/components/temp/three/gjThree.vue";
import gjFour from "@/components/temp/four/gjFour.vue";
import tab from "@/components/temp/tab/tab.vue";
import iconContent from "@/components/temp/iconContent.vue";
import gjFive from "@/components/temp/five/gjFive.vue";
import gjSix from "@/components/temp/six/gjSix.vue";
export default {
  components: {
    tabbar,
    gjTop,
    two2,
    gjThree,
    gjFour,
    tab,
    iconContent,
    gjFive,
    gjSix,
  },
  data() {
    return {
      topInfo: {
        // name: "丁立谦",
        // post: "总经理",
        // phone: "18923413467",
        // address: "深圳市南山区招商街道桃花园社区兴工路美年国际广场4栋505",
        // email: "18923413467@163.com",
      }, ///名片
      cardId: 1, //名片下标
      twoInfo: {
        phone: "", ///手机号
        image1: require("@/assets/tempfile/gj/icon/phone.png"), //按钮1icon
        image2: require("@/assets/tempfile/gj/icon/address.png"), //按钮2icon
      }, ///第二个模块参数
      tabList: [
        {
          name: "协会介绍",
          id: "xhjs",
        },
        {
          name: "协会动态",
          id: "xhdt",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },
        // {
        //   name: "解决方案",
        //   id: "jjfa",
        // },
      ], ///tab栏列表
      tabId: "xhjs", //默认tab
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
/deep/ .selectTabText{
  color:#392DDD !important;
}
/deep/ .bottom{
  background:#392DDD !important;
}
.ryzzStyle {
  // display: grid;
  // text-align: center;
  column-gap: 10px;
  margin-top: 10px;
  // grid-template-columns: 50% 50%;
  margin-bottom: 10px;
}
.planBox1 {
  width: 154px;
  height: 94px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 9px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  .mask {
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.4);
    height: 33px;
    padding: 8px;
    font-size: 12px;
    color: #fff;
    width: 100%;
  }
}
.ysStyle {
  margin-top: 10px;
  font-size: 14px;
  color: #0E58A3;
}
.jjStyle {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 10px;
  margin-top: 10px;
  .sape {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: #0e58a3;
  }
  .jjTitle {
    font-size: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
}
</style>




