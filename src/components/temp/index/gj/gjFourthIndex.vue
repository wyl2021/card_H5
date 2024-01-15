<template>
  <div>
   第四个页面
    <tabbar :active="3"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
export default {
  components:{
    tabbar
  }
}
</script>

<style>

</style>
