<template>
  <div
    class="box"
    :style="{
      backgroundImage:
        'url(' + IMG + cardBg + '/headerBg/headerBg' + (cardId + 1) + '.png)',
    }"
  >
    <slot name="popup"></slot>
  </div>
</template>

<script>
export default {
  props:{
    cardBg:{
      type:String,
      default:'yx'
    },
    cardId:{
      type:Number,
      default:0
    }
  },
  data(){
    return{
      IMG:this.IMG,

    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  background-size: 100%;
  width: 100%;
  height: 200px;
}
</style>
