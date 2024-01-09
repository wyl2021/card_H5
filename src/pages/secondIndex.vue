<!-- 第三个页面 -->
<template>
  <div>
    <aj-second-index ></aj-second-index>
  </div>
</template>

<script>
import ajSecondIndex from  "@/components/temp/index/aj/ajSecondIndex.vue"
export default {
  components: {
    ajSecondIndex
  },
  data() {
    return {
      id:""
    };
  },
  created(){
    this.id=localStorage.getItem("id")
  }
};
</script>

<style lang="scss" >



</style>
