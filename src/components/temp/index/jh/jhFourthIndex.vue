<template>
  <div>
    
    <van-image :src="require('@/assets/tempfile/jh/ts.png')"> 
    </van-image>

    
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
.ts{
  width: 100%;
  height: 100%;
}
</style>
