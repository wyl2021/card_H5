<template>
  <div>
    <van-image :src="IMG+cardName+'/cardBg/cardBg'+cardId+'.png?time='+time"></van-image>
  </div>
</template>

<script>
export default {
      props:{
          cardName:String,
          cardId:Number
      },
      data(){
        return{
          IMG:this.IMG,
          time:null
        }
      },
      created(){
    this.time = Date.now()
  },
}
</script>

<style>

</style>
