<!-- 第二个页面 -->
<template>
  <div class="svgIcon">
    <div class="image">
      <van-image
        v-for="(item, index) in imageList"
        :key="index"
        :src="item"
      >
      </van-image>
    </div>

    <div class="h-50"></div>
    <tabbar :active="2"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
// import VueDplayer from "vue-dplayer";
export default {
  components: {
    tabbar,
    // VueDplayer,
  },
  data() {
    return {
      imageList: [
        require("@/assets/tempfile/nh/image/nh1.png"),
        require("@/assets/tempfile/nh/image/nh2.png"),
        require("@/assets/tempfile/nh/image/nh3.png"),
        require("@/assets/tempfile/nh/image/nh4.png"),
        require("@/assets/tempfile/nh/image/nh5.png"),
        require("@/assets/tempfile/nh/image/nh6.png"),
        require('@/assets/tempfile/nh/image/nh7.png')
      ],
    };
  },
};
</script>
<style lang="scss">
.svgIcon {
  margin: 10px 16px;
  text-align: center;
  .hh1 {
    display: flex;
    height: auto;
    width: auto;
    max-width: 30%;
    max-height: 30%;
    justify-content: center;
  }
  .hh2 {
    display: flex;
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    justify-content: center;
  }
  .hh3 {
    height: auto;
    width: auto;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.image {
  display: grid;
  grid-template-columns: 50% 50%;
  row-gap: 10px;
  column-gap: 10px;
}
</style>
