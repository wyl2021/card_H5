<!-- 第四个页面 -->
<template>
  <div >
    <aj-fourth-index v-if="id=='aj'"></aj-fourth-index>
   <jh-fourth-index v-if="id=='jh'"></jh-fourth-index>
   <gj-fourth-index v-if="id=='gj'"></gj-fourth-index>
   <tsz-fourth-index v-if="id=='tsz'"></tsz-fourth-index>
   <ym-fourth-index v-if="id=='ym'"></ym-fourth-index>
  </div>
</template>

<script>
import ajFourthIndex from '@/components/temp/index/aj/ajFourthIndex.vue';
import JhFourthIndex from '@/components/temp/index/jh/jhFourthIndex.vue';
import gjFourthIndex from '@/components/temp/index/gj/gjFourthIndex.vue';
import TszFourthIndex from '@/components/temp/index/tsz/tszFourthIndex.vue';
import YmFourthIndex from '../components/temp/index/ym/ymFourthIndex.vue';
export default {
  components: {
    ajFourthIndex,
    JhFourthIndex,
    gjFourthIndex,
    TszFourthIndex,
    YmFourthIndex,
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

</style>
