<template>
  <div>
    <van-image
                class="image"
                :src="require('@/assets/tempfile/'+srcName+'/cardBg/cardBg'+src+'.png')"
              ></van-image>
  </div>
</template>

<script>
export default {
    props:{
      src:Number,
      srcName:String
    }
}
</script>

<style lang="scss" scoped>
    .van-image{
      margin-bottom: 10px !important;
    }
</style>
