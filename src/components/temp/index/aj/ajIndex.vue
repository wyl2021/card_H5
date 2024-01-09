<!-- 第一个页面 -->

<template>
  <div class="home" ref="scrollContainer">
    <div class="home-main">
      <!-- 名片加名片背景 -->
      <tempTop8 :cardId="1" :info="topInfo"></tempTop8>
      <!-- 联系我们模块 -->
      <two2 :info="twoInfo"></two2>
      <!-- 锚点导航栏 -->
      <tab
        :tabList="tabList"
        :tabId="tabId"
        :isTob="tabIsTop"
        id="tap"
        @butTab="butTab"
      ></tab>
      <!-- 一般用于名片公司简介 -->
      <four3>
        <!-- <template #cardContent></template> -->
      </four3>
      <van-image
        class="mb-12"
        fit="contain"
        width="100%"
        :src="require('@/assets/tempfile/aj/thirdIndex/qywh.png')"
      />
      <!-- 荣誉资质 -->
      <div class="p-all-12 bg-fff br-8 mb-12">
        <icon-content
          style="justify-content: center"
          :src="require('@/assets/tempfile/aj/headerImage/ryzz.png')"
        >
        </icon-content>
        <!-- 此模块用于一半静态样式一半存在有功能的情况 -->

          <div class="ryzzStyle">
            <div v-for="(item, index) in ryList" :key="index">
              <van-image width="120" height="90" :src="item.src"></van-image>
              <div style="font-size: 10px">{{ item.name }}</div>
            </div>
          </div>
          <!-- 文字跳转 -->
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

      <!-- 运输物流 -->
      <div class="p-all-12 bg-fff br-8 mb-12">
        <icon-content
          style="justify-content: center"
          :src="require('@/assets/tempfile/aj/headerImage/yswl.png')"
        >
        </icon-content>
        <!-- 此模块用于一半静态样式一半存在有功能的情况 -->

          <div class="ysStyle">
            <div v-for="(item, index) in ysList" :key="index">
              <div style="margin-bottom: 10px;">
                <div>
                  {{
                    index > 9
                      ? index + item.title
                      : "0" + (index + 1) + item.title
                  }}
                </div>
                <div style="display: flex; justify-content: space-between">
                  <van-image
                    v-for="(item2, index2) in item.dataList"
                    width="154"
                    height="94"
                    :src="item2.src"
                    :key="index2"
                  ></van-image>
                </div>
              </div>
            </div>
          </div>
          <!-- 文字跳转 -->
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
      <div class="p-all-12 bg-fff br-8 mb-12">
        <icon-content
          style="justify-content: center"
          :src="require('@/assets/tempfile/aj/headerImage/jjfa.png')"
        >
        </icon-content>
        <!-- 此模块用于一半静态样式一半存在有功能的情况 -->

          <div class="jjStyle">
            <div v-for="(item, index) in jjList" :key="index">
              <div class="jjTitle">
                <div class="sape"></div>
                {{ item.name }}
              </div>
              <van-image width="154" height="110" :src="item.src"></van-image>
            </div>
          </div>
          <!-- 文字跳转 -->
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
    </div>
    <div class="h-50"></div>
    <tabbar :active="0"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
import tempTop8 from "@/components/temp/top/top8.vue";
import two2 from "@/components/temp/two/two2.vue";
import three1 from "@/components/temp/three/three1.vue";
import four3 from "@/components/temp/four/four3.vue";
import tab from "@/components/temp/tab/tab.vue";
import iconContent from "@/components/temp/iconContent.vue";
export default {
  components: {
    tabbar,
    tempTop8,
    two2,
    three1,
    four3,
    tab,
    iconContent,
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
          name: "企业介绍",
          id: "qyjs",
        },
        {
          name: "走进安信捷",
          id: "zjaxj",
        },
        {
          name: "运输物流",
          id: "yswl",
        },
        {
          name: "解决方案",
          id: "jjfa",
        },
      ], ///tab栏列表
      tabId: "qyjs", //默认tab
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
  background: linear-gradient(90deg, #0e58a3 10%, #0e58a3 100%) !important;
}
/deep/ .addressButton {
  background: linear-gradient(90deg, #0e58a3 10%, #0e58a3 100%) !important;
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




