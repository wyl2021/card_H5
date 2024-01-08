<!-- 第四个页面 -->
<template>
  <div >
    <div style="padding-top: 12px;"></div>
    <five3 style="margin:0 16px"></five3>
    <div class="h-50"></div>
    <tabbar :active="3"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
import five3 from "@/components/temp/five/five3.vue"
export default {
  components: {
    tabbar,
    five3
  },
  data() {
    return {
        planList: [
          {
             id: require('@/assets/tempfile/aj/cantent/kcc.png'),
            title: "快销品类运输方案",
            imageUrl: require("@/assets/tempfile/aj/image/kxpys.png"),
          },
          {
             id: require('@/assets/tempfile/aj/cantent/kcc.png'),
            title: "建材类运输方案",
            imageUrl: require("@/assets/tempfile/aj/image/jclys.png"),
          },
          {
             id: require('@/assets/tempfile/aj/cantent/kcc.png'),
            title: "矿产类运输方案",
            imageUrl: require("@/assets/tempfile/aj/image/kclys.png"),
          },
          {
             id: require('@/assets/tempfile/aj/cantent/kcc.png'),
            title: "家居类运输方案",
            imageUrl: require("@/assets/tempfile/aj/image/jjlys.png"),
          },
          {
             id: require('@/assets/tempfile/aj/cantent/kcc.png'),
            title: "冷冻类运输方案",
            imageUrl: require("@/assets/tempfile/aj/image/ldlys.png"),
          },
          {
             id: require('@/assets/tempfile/aj/cantent/kcc.png'),
            title: "液体类运输方案",
            imageUrl: require("@/assets/tempfile/aj/image/ytlys.png"),
          },
          {
             id: require('@/assets/tempfile/aj/cantent/kcc.png'),
            title: "新能源类运输方案",
            imageUrl: require("@/assets/tempfile/aj/image/ytlys.png"),
          },
          {
             id: require('@/assets/tempfile/aj/cantent/kcc.png'),
            title: "橡塑类运输方案",
            imageUrl: require("@/assets/tempfile/aj/image/ytlys.png"),
          },
          {
             id: require('@/assets/tempfile/aj/cantent/kcc.png'),
            title: "金属制品类运输方案",
            imageUrl: require("@/assets/tempfile/aj/image/ytlys.png"),
          },
          {
             id: require('@/assets/tempfile/aj/cantent/kcc.png'),
            title: "农资类运输方案",
            imageUrl: require("@/assets/tempfile/aj/image/ytlys.png"),
          },
        ],

    };
  },
};
</script>

<style lang="scss" scoped>

</style>
