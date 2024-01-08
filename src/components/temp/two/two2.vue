<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <!-- <p class="fs-15 mb-15">
      <van-icon class-prefix="my-icon" name="icon-a-Frame21"></van-icon>
      联系TA
    </p> -->
    <div class="dp-f jc-sb">
      <!-- background: linear-gradient(90deg, #223436 0%, #2f4749 100%); -->
      <!-- :style="'background: linear-gradient(90deg, '+color1+' 0%,'+color2+' 100%);'" -->
      <van-button class="phoneButton"   @click="getPhone(info.phone)">
        <van-image
          width="16"
          height="16"
          class="mr-5"
          :src="info.image1"
        ></van-image>
        拨打电话
      </van-button>
      <van-button class="addressButton" @click="getAddress()">
        <van-image
          width="16"
          height="16"
          class="mr-5"
          :src="info.image2"
        ></van-image>
        地址导航</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  data() {
    return {};
  },
  created(){

  },
  methods: {
    getPhone(phone) {
      console.log('111111111')
      window.location.href = 'tel:' + phone;
    },
    getAddress(){
      this.$router.push('/map')
    }
  },
};
</script>

<style lang='scss' scoped>
.van-button {
  width: 155px;
  // background: linear-gradient(90deg, #223436 0%, #2f4749 100%);
  border-radius: 4px;
  color: #fff;
  .van-button__text {
    display: flex;
    align-items: center;
  }
}
</style>
