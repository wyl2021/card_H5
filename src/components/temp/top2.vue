<template>
  <div class="top2 pt-20 pl-20 pr-20 pb-20 bg-fff br-8 mb-12">
    <div class="dp-f ai-c ml-10">
      <van-image width="50" height='50' :src="require('@/assets/tempfile/img/logo.png')"></van-image>
      <p class="fs-14">阿库技术</p>
    </div>
    <div class="CompanyLine mt-16" />
    <div class="dp-f ml-10 mt-19">
      <div class="w-100">
        <p class="fs-16 fw-b">曾大克</p>
        <p class="fs-12 mt-4">总经理</p>
      </div>
      <div class="ml-14 fs-10 c-ccc" style="line-height:1.6">
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
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    info: Object
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.CompanyLine {
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #db001a 30%, #f2f2f2 30%);
}
</style>