<!-- 产品列表数据单个模块样式 -->
<template>
  <div>
    <router-link
      :to="{
        path: '/solutionInfo',
        name: 'solutionInfo',
        params: {
          id: dataListId,
        },
      }"
    >
    <slot name="listBoxContent">
      <div class="listBox">
        <div class="planBox1" :style="{backgroundImage:`url(${imageUrl})`}">
          <!-- <van-image width="154" height="94" :src="imageUrl"></van-image> -->
          <div class="mask">{{ title }}</div>
        </div>
        <div class="listBoxText">{{ content }}</div>
      </div>
    </slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type:String,
      default:'东莞市物流行业协会理事单位'
    },
    content: {
      type:String,
      default:'东莞市物流行业协会理事单位'
    },
    imageUrl: {
      type:String,
      default:require("@/assets/tempfile/aj/image/ryzz6.png"),
    },
    dataListId:{
      type:String,
      default:require("@/assets/tempfile/aj/cantent/ldjzxhy.png")
    }
  },
};
</script>

<style lang="scss" scoped>
.listBox {
  border-radius: 8px;
  display: flex;
  background-color: #fff;
  padding: 12px;
  margin: 10px 18px;
  .listBoxText {
    margin-left: 8px;
    width: 60%;
    text-indent: 2em;
    font-size: 12px;
    color: #666666;
  }
}
.planBox1 {
  width: 154px;
  height: 94px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 9px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  .mask {
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.4);
    height: 33px;
    padding: 8px;
    font-size: 12px;
    color: #fff;
    width: 100%;
  }
}
</style>
