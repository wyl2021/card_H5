<!-- 第二个页面 -->
<template>
  <div>
    <aj-third-index v-if="id=='aj'"></aj-third-index>
    <nh-third-index v-if="id=='nh'"></nh-third-index>
    <jh-third-index v-if="id=='jh'"></jh-third-index>
    <gj-third-index v-if="id=='gj'"></gj-third-index>
    <tsz-third-index v-if="id=='tsz'"></tsz-third-index>
    <ym-third-index v-if="id=='ym'"></ym-third-index>
  </div>
</template>

<script>
import ajThirdIndex from "@/components/temp/index/aj/ajThirdIndex.vue";
import NhThirdIndex from '@/components/temp/index/nh/nhThirdIndex.vue';
import jhThirdIndex from "@/components/temp/index/jh/jhThirdIndex.vue";
import gjThirdIndex from '@/components/temp/index/gj/gjThirdIndex.vue';
import tszThirdIndex from "@/components/temp/index/tsz/tszThirdIndex.vue";
import ymThirdIndex  from "@/components/temp/index/ym/ymThirdIndex.vue"
export default {
  components: {
    ajThirdIndex,
    NhThirdIndex,
    jhThirdIndex,
    gjThirdIndex,
    tszThirdIndex,
    ymThirdIndex
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
