<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
      <iconContent width="100%" height="100%"  :src="require('@/assets/tempfile/tsz/headerImage/image2.png')"> </iconContent>
      <router-link
          :to="{
            path: '/xlsl',
            name: 'xlsl',
          }"
        >
          <img class="xlsl" src="@/assets/tempfile/tsz/zixun/xlsl.png">
      </router-link>
      <router-link
          :to="{
            path: '/xlsl',
            name: 'xlsl',
          }"
        >
          <img class="xlsl" src="@/assets/tempfile/tsz/zixun/zhnh.png">
      </router-link>
      <router-link
          :to="{
            path: '/xlsl',
            name: 'xlsl',
          }"
        >
          <img class="xlsl" src="@/assets/tempfile/tsz/zixun/hyfc.png">
      </router-link>
      <router-link
          :to="{
            path: '/xlsl',
            name: 'xlsl',
          }"
        >
          <img class="xlsl" src="@/assets/tempfile/tsz/zixun/bpbtsz.png">
      </router-link>
  </div>
</template>

<script>
import iconContent from '../iconContent.vue';
export default {
  components:{
      iconContent
  }
}
</script>

<style lang="scss" scoped>
  .xlsl{
      width:100%;
      height:151px;
      margin-top: 10px;
  }
</style>
