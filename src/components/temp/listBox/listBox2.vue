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
            <!-- <div class="mask">{{ title }}</div> -->
          </div>
          <div class="planBox2" :style="{backgroundImage:`url(${imageUrl1})`}">
          </div>
          <div class="listBoxText1">
            <div class="listBoxText">{{ content }}</div>
            <div class="listBoxText2">{{ content2 }}</div>
          </div>
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
      imageUrl1: {
        type:String,
        default:require("@/assets/tempfile/tsz/product/chakan.png"),
      },
      dataListId:{
        type:String,
        default:require("@/assets/tempfile/aj/cantent/ldjzxhy.png")
      },
      content2:{
        type:String,
        default:'Enterprise League Building'
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
    .listBoxText1 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }
        .listBoxText {
        margin-left: 10px;
        width: 60%;
        font-size: 14px;
        color: #666666;
        }
        .listBoxText2 {
        margin-left: 10px;
        margin-top: 28px;
        width: 100%;
        position: absolute;
        font-size: 12px;
        color: #666666;
        }
  }
  .planBox1 {
    width: 285px;
    height: 94px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 9px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
  }
  .planBox2 {
    width: 77px;
    height: 28px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 61px;
    margin-left: 230px;
    position: absolute;
    overflow: hidden;
    border-radius: 4px;
  }
  </style>
