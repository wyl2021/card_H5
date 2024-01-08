<template>
  <div class="top2 pl-30 pb-20 bg-fff br-8 mb-12 pos-r">
    <van-image class="icon" width="14" height="52" :src="require('@/assets/tempfile/img/rectangle.png')"></van-image>
    <van-image class="logo" width="56" height="56" :src="require('@/assets/tempfile/img/NCILogo.png')"></van-image>
    <div class="info dp-f">
      <div class="fs-16 fw-b">沈意妹</div>
      <div class="fs-12 right">
        <p>客服部经理</p>
        <div class="line"></div>
      </div>
    </div>
    <div class="mt-20 fs-10 c-ccc">
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
.icon {
  position: absolute;
  top: 0;
  left: 45px;
}
.logo{
  position: absolute;
  top: 15px;
  right: 30px;
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