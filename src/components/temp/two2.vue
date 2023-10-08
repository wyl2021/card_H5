<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <p class="fs-15 mb-15">
      <van-icon class-prefix="my-icon" name='icon-a-Frame21'></van-icon>
      联系TA
    </p>
    <div class="dp-f jc-sb">
      <van-button >
        <van-image width="24" height='24' class="mr-5" :src="require('@/assets/tempfile/img/phone-linear.png')"></van-image>
        拨打电话
      </van-button>
      <van-button>
        <van-image width="24" height='24' class="mr-5" :src="require('@/assets/tempfile/img/emil-linear.png')"></van-image>
        复制邮箱</van-button>
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

<style lang='scss' scoped>
.van-button{
  width: 155px;
  background: linear-gradient(90deg, #223436 0%, #2F4749 100%);
  border-radius: 4px;
  color: #fff;
  .van-button__text{
    display: flex;
    align-items: center;
  }
}
</style>