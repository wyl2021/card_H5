<!-- 第二个页面 -->
<template>
  <div>
    <aj-third-index ></aj-third-index>
  </div>
</template>

<script>
import ajThirdIndex from "@/components/temp/index/aj/ajThirdIndex";
export default {
  components: {
    ajThirdIndex,

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
