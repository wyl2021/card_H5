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
          </div>
        </div>
      </slot>
      </router-link>
    </div>
  </template>

  <script>
  export default {
    props: {
      // 图片地址
      imageUrl: {
        type:String,
        default:require("@/assets/tempfile/aj/image/ryzz6.png"),
      },
      // 跳转地址
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
    padding: 10px;
    // margin: 10px 18px;
  }
  .planBox1 {
    width: 318px;
    height: 88px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 9px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
  }
  </style>
