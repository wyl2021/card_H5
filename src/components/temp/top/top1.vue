<template>
  <div class="top" :style="{height:firstHeight+'px'}">
    <el-image class="bg" fit="scale-down" :src="info.bgImage" />
    <div class="content h100">
      <div class="content-top c-333">
        <div class="fw-b fs-16">{{ info.customerName }}</div>
        <div class="fs-12">{{ info.post }}</div>
      </div>
      <div class="content-bottom c-666 fs-12">
        <div class="dp-f">
          <van-icon class-prefix="my-icon" class="mt-2 c-f00" name='icon-a-Frame2'></van-icon>
          {{ info.customerPhone }}
        </div>
        <div class="dp-f">
          <van-icon class-prefix="my-icon" class="mt-2 c-f00" name='icon-a-Frame1'></van-icon>
          {{ info.customerEmail }}
        </div>
        <div class="dp-f">
          <van-icon class-prefix="my-icon" class="mt-2 c-f00" name='icon-Frame'></van-icon>
          {{ info.customerAddress }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getImageSize} from '@/utils/file.js'
export default {
  props: {
    info: Object
  },
  data() {
    return {
      bgImage:'',
      firstWidth:0,
      firstHeight:0,
    }
  },
  mounted() {
    this.firstWidth = document.querySelector('.top').clientWidth
    this.getFirstHeight(this.info.bgImage)
  },
  methods: {
    //计算头部背景图片高度
    getFirstHeight(url) {
      if (this.firstWidth) {
        getImageSize(url, (width, height) => {
          this.firstHeight = (height / width * this.firstWidth)
        })
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.top {
  position: relative;
  box-sizing: border-box;
  padding-right: 10px;
  margin-bottom: 12px;
  .bg {
    position: absolute;
    top: 0px;
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .content {
    position: relative;
    margin-left: 40%;
    padding: 20px 0;
    display: flex;
    line-height: 1.6;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>