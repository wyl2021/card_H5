<!-- 第二个页面 -->
<template>
  <div>
    <aj-third-index v-if="id=='aj'"></aj-third-index>
    <nh-third-index v-if="id=='nh'"></nh-third-index>
  </div>
</template>

<script>
import ajThirdIndex from "@/components/temp/index/aj/ajThirdIndex";
import NhThirdIndex from '@/components/temp/index/nh/nhThirdIndex.vue';
export default {
  components: {
    ajThirdIndex,
    NhThirdIndex,

  },
  data() {
    return {
     id:''
    };
  },
  created(){
    console.log(localStorage.getItem("id"))
    this.id=localStorage.getItem("id")
  }
};
</script>

<style lang="scss" scoped>
.ta-c {
}
</style>
