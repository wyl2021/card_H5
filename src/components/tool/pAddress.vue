<template>
  <div class="itInfo">
    <div v-if="type == 0" class="justify-around d-flex ">
      <van-image :src="IMG + phoneButton" @click="getPhone(phone)" width="170px" height="36px" class="w-15"></van-image>
      <van-image
        :src="IMG + addressButton"
        @click="getAddress(address, name)"
        width="170px"
        height="36px"
      ></van-image>
    </div>
    <div v-else-if="type == 1" class="d-flex justify-between">
      <div class="d-flex button m-r-10" :style="{'background-color':backgroundColor}"  @click="getPhone(phone)">
        <van-image
          :src="IMG + phoneButton"
          :width=width
          :height=height
          class="m-r-10"
        ></van-image>
        拨打电话
      </div>
      <div class="d-flex button" :style="{'background-color':backgroundColor}"  @click="getAddress(address, name)">
        <van-image
          :src="IMG + addressButton"
          :width=width
          :height=height
          class="m-r-10"
        ></van-image>
        地址导航
      </div>
    </div>

  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  props: {
    phoneButton: String,
    addressButton: String,
    phone: String,
    address: String,
    name: {
      type: String,
      default: "正在加载",
    },
    type: {
      type: Number,
      default: 0, ///0默认按钮图片  1两个icon
    },
    width:{
      type:String,
      default:'16px'
    },
    height:{
      type:String,
      default:'16px'
    },
    backgroundColor:{
      type:String,
      default:'#d0333a'
    }
  },
  data() {
    return {
      IMG: this.IMG,


    };
  },
  methods: {
    // 电话
    getPhone(phone) {
      console.log("拨打电话");
      window.location.href = "tel:" + phone;
    },
    // 地址
    getAddress(address, name) {
      console.log(address, name);
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$router.push({
        path: "/map",
        query: { address: address, name: name,isTap:true },
      });
      Toast.clear;
    },
  },
};
</script>

<style lang="scss" scoped>
.itInfo {
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 66px;
  background: #ffffff;
  border-radius: 8px;
  opacity: 1;
  margin: 0 auto;
  margin: 6px 0;
  padding: 15px 12px;
  box-sizing: border-box;

  image {
    height: 100%;
  }
}
.w-15{
  margin-right:15px
}
.button {
  background-color: #d0333a;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  padding: 8px 0;
  border-radius: 8px;
  white-space: nowrap;
  width: 155px;
  justify-content: center;
}
.justify-around {
  justify-content: space-around;
  width: 100%;
}
.justify-between {
  justify-content: space-between;
  width: 100%;
}
.m-r-10{
  margin-right: 10px;
}
</style>
