<template>
  <div class="d-flex m-t-10 fonts" :class="{'a-baseline':title.length>16}">
    <van-image v-if="titles==''" class="iconImage" :src="IMG+iconImage" />
    <div class="font2" v-else>{{ titles }}</div>
    <div class="font1">{{ title }}</div>
  </div>
</template>

<script>
export default {
    props:{
      iconImage:String,
      title:String,
      titles:{
        type:String,
        default:''
      }
    },
    data(){
      return{
        IMG:this.IMG
      }
    }
}
</script>

<style lang="scss" scoped>
  // .fonts{

  // }
    .a-baseline{
      align-items: baseline;
    }
    .iconImage{
      width: 12px;
      height: 12px;
      margin-right: 5px;
    }
    .font1{
      font-size: 12px;
      color:#000;

    }
    .font2{
      font-size: 14px;
      color:#333;
      white-space: nowrap;

    }
    .m-t-10{
      margin-bottom: 10px;
    }
</style>
