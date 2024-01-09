<!-- 第四个页面 -->
<template>
  <div>
    <div style="padding-top: 12px"></div>
    <!-- 此模块用于一半静态样式一半存在有功能的情况 -->
    <div class="jjStyle">
      <div v-for="(item, index) in jjList" :key="index">
        <router-link
          :to="{
            path: '/solutionInfo',
            name: 'solutionInfo',
            params: { id: item.id },
          }"
        >
          <div class="jjTitle">
            <div class="sape"></div>
            {{ item.title }}
          </div>
          <van-image width="154" height="110" :src="item.imageUrl"></van-image>
        </router-link>
      </div>
    </div>
    <div class="h-50"></div>
    <tabbar :active="3"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";

export default {
  components: {
    tabbar,
  },
  data() {
    return {
      jjList: [
        {
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
          title: "快销品类运输方案",
          imageUrl: require("@/assets/tempfile/aj/image/kxpys.png"),
        },
        {
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
          title: "建材类运输方案",
          imageUrl: require("@/assets/tempfile/aj/image/jclys.png"),
        },
        {
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
          title: "矿产类运输方案",
          imageUrl: require("@/assets/tempfile/aj/image/kclys.png"),
        },
        {
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
          title: "家居类运输方案",
          imageUrl: require("@/assets/tempfile/aj/image/jjlys.png"),
        },
        {
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
          title: "冷冻类运输方案",
          imageUrl: require("@/assets/tempfile/aj/image/ldlys.png"),
        },
        {
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
          title: "液体类运输方案",
          imageUrl: require("@/assets/tempfile/aj/image/ytlys.png"),
        },
        {
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
          title: "新能源类运输方案",
          imageUrl: require("@/assets/tempfile/aj/image/ytlys.png"),
        },
        {
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
          title: "橡塑类运输方案",
          imageUrl: require("@/assets/tempfile/aj/image/ytlys.png"),
        },
        {
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
          title: "金属制品类运输方案",
          imageUrl: require("@/assets/tempfile/aj/image/ytlys.png"),
        },
        {
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
          title: "农资类运输方案",
          imageUrl: require("@/assets/tempfile/aj/image/ytlys.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.jjStyle {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 10px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  margin: 12px 16px;
  padding-top: 10px;
  .sape {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: #0e58a3;
  }
  .jjTitle {
    color: #000;
    font-size: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
}
</style>
