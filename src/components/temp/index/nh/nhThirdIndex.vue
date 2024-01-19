<!-- 第二个页面 -->
<template>
  <div class="svgIcon">
    <van-image  v-for="(item,index) in list" :key="index" :src="item.image"></van-image>

    <div class="h-50"></div>
    <tabbar :active="1"></tabbar>
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
      list: [
        {
          image: require("@/assets/tempfile/nh/image/dt1.png"),
        },
        {
          image: require("@/assets/tempfile/nh/image/dt2.png"),
        },
        {
          image: require("@/assets/tempfile/nh/image/dt3.png"),
        },
        {
          image: require("@/assets/tempfile/nh/image/dt2.png"),
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.svgIcon {
  margin: 10px 14px;
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
</style>
