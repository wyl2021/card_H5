<!-- 第三个页面 -->
<template>
  <div>
    <aj-second-index v-if="id=='aj'"></aj-second-index>
    <jh-second-index></jh-second-index>
  </div>
</template>

<script>
import ajSecondIndex from  "@/components/temp/index/aj/ajSecondIndex.vue"
import JhSecondIndex from '@/components/temp/index/jh/jhSecondIndex.vue';
export default {
  components: {
    ajSecondIndex,
    JhSecondIndex
  },
  data() {
    return {
      id:""
    };
  },
  created(){
    console.log(localStorage.getItem("id"))
    this.id=localStorage.getItem("id")
  }
};
</script>

<style lang="scss" >



</style>
