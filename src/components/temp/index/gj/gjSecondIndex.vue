<template>
  <div>
    第三个页面
    <tabbar :active="2"></tabbar>
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
