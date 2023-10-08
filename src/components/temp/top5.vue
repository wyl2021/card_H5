<template>
  <div class="top2 pl-30 pr-30 pb-20 bg-fff br-8 mb-12 pos-r">
    <van-image class="logo" width="80" height="40" :src="require('@/assets/tempfile/img/asLogo.png')"></van-image>
    <div class="dp-f jc-fe pr-10 pt-30 mb-17">
      <div class=" ta-c">
        <p class="fs-16 fw-b">陈程</p>
        <p class="fs-10">总经理</p>
      </div>
    </div>
    <p class="fs-12 b-b1 pb-8 mb-8">深圳市安速国际货运代理有限公司</p>
    <div class="fs-10" style="color:#FE714C;line-height:1.6">
      <div class="dp-f">
        <van-icon class-prefix="my-icon" class="mr-5 mt-2" name='icon-a-Frame2'></van-icon>
        <span class="c-666">18291900927</span>
      </div>
      <div class="dp-f">
        <van-icon class-prefix="my-icon" class="mr-5 mt-2" name='icon-a-Frame1'></van-icon>
        <span class="c-666">zeng@meixxx.com</span>
      </div>
      <div class="dp-f">
        <van-icon class-prefix="my-icon" class="mr-5 mt-2" name='icon-Frame'></van-icon>
        <span class="c-666">宁波市鄞州区翔云北路199号深蓝大厦19层</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.logo{
  position: absolute;
  top: 15px;
  left: 30px;
}
.info{
  padding-top: 72px;
}
.line{
  width: 100%;
  background-color: #AF6C1A;
  height: 3px;
}
.right{
  flex-grow: 1;
  margin-left: 12px;
}
</style>