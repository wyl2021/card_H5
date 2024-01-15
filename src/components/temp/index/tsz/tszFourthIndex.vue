<!-- 第四个页面 -->
<template>
  <div>
    <img class="image1" src="@/assets/tempfile/tsz/product/office.png">
    <div style="text-align:center;font-size: 20px;">此页面为3d页面</div>
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

    };
  },
};
</script>

<style lang="scss" scoped>
.image1 {
  width: 100%;
}
</style>
