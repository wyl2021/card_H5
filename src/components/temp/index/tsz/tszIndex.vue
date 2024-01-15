<!-- 第一个页面 -->

<template>
  <div class="home" ref="scrollContainer">
    <div class="home-main">
      <!-- 名片加名片背景 -->
      <tszTop :cardId="1" :info="topInfo"></tszTop>
      <!-- 联系我们模块 -->
      <two2 :info="twoInfo"></two2>
      <!-- 锚点导航栏 -->
      <tszThree
      :info="{
        photoIcon: require('@/assets/tempfile/tsz/wx/image2.png'),
        type: 1,
        photo: require('@/assets/tempfile/tsz/wx/image4.png'),
      }"
    ></tszThree>
    <tszThree
      :info="{
        wxIcon: require('@/assets/tempfile/tsz/wx/image3.png'),
        type: 2,
        wx: require('@/assets/tempfile/tsz/wx/image1.png'),
        // name: '',
        post: '扫描上面二维码图案,加我为好友',
      }"
    ></tszThree>
      <tab
        :tabList="tabList"
        :tabId="tabId"
        :isTob="tabIsTop"
        id="tap"
        @butTab="butTab"
      ></tab>
      <!-- 一般用于名片公司简介 -->
      <tszFour id="gsjs">
        <!-- <template #cardContent></template> -->
      </tszFour>
      <tszSix id="xwzx"></tszSix>
      <tszFive id="cpfw">

      </tszFive>




    </div>
    <div class="h-50"></div>
    <tabbar :active="0"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
import tszTop from "@/components/temp/top/tszTop.vue";
import two2 from "@/components/temp/two/two2.vue";
import tszThree from "@/components/temp/three/tszThree.vue";
import tszFour from "@/components/temp/four/tszFour.vue";
import tszFive from "@/components/temp/five/tszFive.vue";
import tszSix from "@/components/temp/six/tszSix.vue";
import tab from "@/components/temp/tab/tab.vue";
import iconContent from "@/components/temp/iconContent.vue";
export default {
  components: {
    tabbar,
    tszTop,
    two2,
    tszThree,
    tszFour,
    tszFive,
    tszSix,
    tab,
    iconContent,
  },
  data() {
    return {
      topInfo: {
        name: "陈国斌",
        post: "执行秘书长",
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
          name: "新闻资讯",
          id: "xwzx",
        },
        {
          name: "产品服务",
          id: "cpfw",
        },

      ], ///tab栏列表
      tabId: "gsjs", //默认tab
      tabIsTop: false, //用作下拉到一定程度现实tab栏
      ryList: [
        {
          name: "营业执照",
          src: require("@/assets/tempfile/aj/image/ryzz1.png"),
        },
        {
          name: "无船承运人资格",
          src: require("@/assets/tempfile/aj/image/ryzz2.png"),
        },
        {
          name: "运输许可证",
          src: require("@/assets/tempfile/aj/image/ryzz3.png"),
        },
        {
          name: "守合同重信用企业",
          src: require("@/assets/tempfile/aj/image/ryzz4.png"),
        },
        {
          name: "道路普通货物运输证明",
          src: require("@/assets/tempfile/aj/image/ryzz5.png"),
        },
        {
          name: "东莞市物流行业协会理事单位",
          src: require("@/assets/tempfile/aj/image/ryzz6.png"),
        },
      ],
      jjList: [
        {
          name: "快销品类运输方案",
          src: require("@/assets/tempfile/aj/image/kxpys.png"),
        },
        {
          name: "建材类运输方案",
          src: require("@/assets/tempfile/aj/image/jclys.png"),
        },
        {
          name: "矿产类运输方案",
          src: require("@/assets/tempfile/aj/image/kclys.png"),
        },
        {
          name: "家居类运输方案",
          src: require("@/assets/tempfile/aj/image/jjlys.png"),
        },
        {
          name: "冷冻类运输方案",
          src: require("@/assets/tempfile/aj/image/ldlys.png"),
        },
        {
          name: "液体类运输方案",
          src: require("@/assets/tempfile/aj/image/ytlys.png"),
        },
      ],
      ysList: [
        {
          title: "国内海运",
          dataList: [
            {
              name: "快船(直达)船",
              src: require("@/assets/tempfile/aj/image/gnhy1.png"),
            },
            {
              name: "普货集装箱海运",
              src: require("@/assets/tempfile/aj/image/gnhy2.png"),
            },
          ],
        },
        {
          title: "公路运输",
          dataList: [
            {
              name: "当日达",
              src: require("@/assets/tempfile/aj/image/glys1.png"),
            },
            {
              name: "次日达",
              src: require("@/assets/tempfile/aj/image/glys2.png"),
            },
          ],
        },
        {
          title: "港装/港拆",
          dataList: [
            {
              name: "港装/港拆",
              src: require("@/assets/tempfile/aj/image/gzgc1.png"),
            },
            {
              name: "项目物流",
              src: require("@/assets/tempfile/aj/image/gzgc2.png"),
            },
          ],
        },
        {
          title: "新能源物流",
          dataList: [
            {
              name: "新能源物流",
              src: require("@/assets/tempfile/aj/image/xnywl.png"),
            },
          ],
        },
      ],
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
  background: linear-gradient(90deg, #E50015 10%, #E50015 100%) !important;
}
/deep/ .addressButton {
  background: linear-gradient(90deg, #E50015 10%, #E50015 100%) !important;
}
/deep/ .selectTabText{
  color:#DB001A !important;
}
/deep/ .bottom{
  background:#DB001A !important;
}
.ryzzStyle {
  display: grid;
  text-align: center;
  row-gap: 10px;
  margin-top: 10px;
  grid-template-columns: 50% 50%;
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




