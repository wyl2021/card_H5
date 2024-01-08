<template>
  <div class="top2 pl-30 pt-20 pr-30 pb-20 bg-fff br-8 mb-12 pos-r">
    <div class="dp-f jc-sb">
      <div class="info">
        <span class="fs-16 fw-b name mr-10">王佳</span>
        <span class="fs-12" style="color:#D72426">总经理</span>
      </div>
      <div class="ta-c">
        <van-image width="64" height="62" :src="require('@/assets/tempfile/img/recookLogo.png')"></van-image>
        <p class="fs-12 dw-b" style="color:#D72426">沙马集团</p>
      </div>
    </div>
    <div class="fs-12" style="color:#D72426;line-height:1.6">
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
  padding-top: 10px;
  .name{
    padding-bottom: 17px;
    border-bottom: 1px solid #D72426;
  }
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