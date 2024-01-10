<!-- 第四个页面 -->
<template>
  <div >
    <aj-fourth-index v-if="id=='aj'"></aj-fourth-index>
   <jh-fourth-index></jh-fourth-index>
  </div>
</template>

<script>
import ajFourthIndex from '@/components/temp/index/aj/ajFourthIndex.vue';
import JhFourthIndex from '@/components/temp/index/jh/jhFourthIndex.vue';
export default {
  components: {
    ajFourthIndex,
    JhFourthIndex
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
