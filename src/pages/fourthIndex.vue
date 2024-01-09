<!-- 第四个页面 -->
<template>
  <div >
    <aj-fourth-index></aj-fourth-index>
  </div>
</template>

<script>
import ajFourthIndex from '@/components/temp/index/aj/ajFourthIndex.vue';
export default {
  components: {
    ajFourthIndex
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
