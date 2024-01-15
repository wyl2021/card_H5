<template>
  <div>
    第二个页面
    <tabbar :active="1"></tabbar>
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
