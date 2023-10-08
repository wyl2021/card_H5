<template>
  <div class="top2 pt-20 pb-20 bg-fff br-8 mb-12 pos-r">
    <van-image class="logo" width="110" height="15" :src="require('@/assets/tempfile/img/ftLogo.png')"></van-image>
    <div class="dp-f jc-fe pr-50 mt-30 mb-17">
      <div class="mr-10 ta-c">
        <p class="fs-18 fw-b">茅忠群</p>
        <p class="fs-10">董事长</p>
      </div>
    </div>
    <van-image width="100%" height="10" :src="require('@/assets/tempfile/img/line.png')"></van-image>
    <div class="ml-30 mt-20 mb-10 c-ccc fs-10" style="line-height:1.6">
      <div class="dp-f">
        <van-icon class-prefix="my-icon" class="mr-5" name='icon-a-Frame2'></van-icon>
        <span class="c-666">18291900927</span>
      </div>
      <div class="dp-f">
        <van-icon class-prefix="my-icon" class="mr-5" name='icon-a-Frame1'></van-icon>
        <span class="c-666">zeng@meixxx.com</span>
      </div>
      <div class="dp-f">
        <van-icon class-prefix="my-icon" class="mr-5" name='icon-Frame'></van-icon>
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
.logo {
  position: absolute;
  top: 20px;
  left: 30px;
}
</style>