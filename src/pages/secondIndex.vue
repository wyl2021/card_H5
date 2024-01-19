<!-- 第三个页面 -->
<template>
  <div>
    <aj-second-index v-if="id=='aj'"></aj-second-index>
    <jh-second-index v-if="id=='jh'"></jh-second-index>
    <gj-second-index v-if="id=='gj'"></gj-second-index>
    <tsz-second-index v-if="id=='tsz'"></tsz-second-index>
    <ym-second-index v-if="id=='ym'"></ym-second-index>
    <nh-second-index v-if="id=='nh'"></nh-second-index>
    <second-index v-if="!isPage"></second-index>

  </div>
</template>

<script>
import ajSecondIndex from  "@/components/temp/index/aj/ajSecondIndex.vue"
import JhSecondIndex from '@/components/temp/index/jh/jhSecondIndex.vue';
import GjSecondIndex from '@/components/temp/index/gj/gjSecondIndex.vue';
import TszSecondIndex from '@/components/temp/index/tsz/tszSecondIndex.vue';
import YmSecondIndex from '@/components/temp/index/ym/ymSecondIndex.vue';
import secondIndex from "@/components/temp/index/aModel/secondIndex.vue";
import nhSecondIndex from "@/components/temp/index/nh/nhSecondIndex.vue";
export default {
  components: {
    ajSecondIndex,
    JhSecondIndex,
    GjSecondIndex,
    TszSecondIndex,
    YmSecondIndex,
    secondIndex,
    nhSecondIndex

  },
  data() {
    return {
      id:"",
      isPage:true
    };
  },
  created(){
    console.log(localStorage.getItem("id"))
    this.id=localStorage.getItem("id")
    this.isPage=this.id=='aj' || this.id=='nh' || this.id=='jh' || this.id=='gj' || this.id=='tsz' || this.id=='ym'
  }
};
</script>

<style lang="scss" >



</style>
