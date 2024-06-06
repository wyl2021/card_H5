<template>
  <div @click="getTo()">
    <div

      style="
        color: #c1c1c1;
        font-size: 10px;
        margin-top: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <van-image
        src="https://card-img1.oss-cn-beijing.aliyuncs.com/cyrh/icon/logoIcon.png"
        width="12px"
        height="12px"
        class="m-r-4"

      />
      由阿库技术提供技术支持
      <div class="h-20"> </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getTo() {
      console.log("success");
      uni.navigateTo({
        // 跳回小程序的路径
        url:
          "/pages/index/wx" ,
        // 以下回调方法可以不要，如果需要调试的时候可以加上
        success: function (res) {
          console.log("success", res);
        },
        fail: function (res) {
          console.log("fail", res);
        },
        complete: function (res) {
          console.log("complete", res);
        },
      });
    //   wx.miniProgram.navigateTo({
    //     url: 'pages/car/index' // 小程序内页面路径
    // });
  //   console.log('wx.miniProgram.navigateTo')
  //   wx.navigateToMiniProgram({
  //       appid:'wx49744bff560f0d70',
  //       path:'pages/index/index',
  //        extraData: {
  //   // 可以传递一些额外的数据给小程序
  // },
  // success(res) {

  //   // 跳转成功的回调函数
  // },
  // fail(res) {
  //   // 跳转失败的回调函数
  // }
      // const appScheme =
      //   "weixin://dl/business/?appid=wx49744bff560f0d70&path=pages/index/index";
      // console.log(appScheme);
      // window.location.href = appScheme;
    },
  },
};
</script>

<style>
    .m-r-4{
      margin-right: 4px
    }
    .h-20{
      height: 40px;
    }
</style>
