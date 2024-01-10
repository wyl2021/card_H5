<template>
    <div class="p-all-12 bg-fff br-8 mb-12">
        <van-image
            :src="require('@/assets/tempfile/jh/sy_slices/image5.png')"
          ></van-image>
          <!-- 公司地址：深圳市宝安区福永街道福围社区107国道旁怀德银山大厦601
          电 话：186-7679-5154
          邮 箱：419447223@qq.com
          手 机：18676795154
          官 网：https://www.jhzhizao.com -->
        <div class="box1">
          <p class="text1">深圳市几何智造有限公司</p>
          <p class="text2">公司地址：深圳市宝安区福永街道福围社区107国道旁怀德银山大厦601</p>
          <p class="text2">电 话：186-7679-5154</p>
          <p class="text2">邮 箱：419447223@qq.com</p>
          <p class="text2">手 机：18676795154</p>
          <p class="text2">官 网：https://www.jhzhizao.com</p>
        </div>
        <TXMap mapWidth="100%" mapHeight="144px"></TXMap>
        <!-- <van-image
        :src="require('@/assets/tempfile/jh/sy_slices/image7.png')"
        ></van-image> -->

    </div>
  </template>

  <script>
import TXMap from '@/components/temp/TXMap.vue';
  export default {

    components: {
      TXMap
    },
    data() {
      return {

      };
    },
  };
  </script>

  <style lang="scss" scoped>
  .box1{
    width: 319px;
    height: 155px;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
  }
  .text1{
    width: 168px;
    height: 25px;
    font-size: 12px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    color: #484848;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 10px;
    margin-bottom: 10px;
    opacity: 1;
  }
  .text2{
    font-size: 12px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 20px;
    letter-spacing: 1px;
  }
  </style>


