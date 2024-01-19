<template>
  <div>
    <van-image fit="cover" :src="require('@/assets/tempfile/nh/image/3d.png')"></van-image>
    <!-- <div style="text-align:center;font-size: 20px;">此页面为3d页面</div> -->
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

<style>

</style>
