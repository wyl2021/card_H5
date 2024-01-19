<template>
  <div>
    <div class="p-all-12 bg-fff br-8 mb-12 ml-16 mr-16">
      <van-image class="khal"
      :src="require('@/assets/tempfile/jh/khal.png')"
    ></van-image>
      
    </div>
    <tabbar :active="2"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
export default {
  components:{
    tabbar
  },
  
}
</script>

<style>
.khal
{
  width: 100%;
  height: 100%;
}

</style>
