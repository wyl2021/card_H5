<template>
  <div style="margin: 16px;">
      <van-image fit="contain"  :src="imageUrl"></van-image>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imageUrl:""
    }
  },
  created(){
    console.log("页面传值",this.$route.params.id)
    this.imageUrl=this.$route.params.id

  }
  // watch:{
  //   '$route.params.id':{
  //     handler:function(val){
  //       console.log(val)
  //     },
  //     deep:true
  //   }
  // }
}
</script>

<style lang="scss" scoped>
html {
  height: 100%;
}
body{
  height: 100%;
}

</style>
