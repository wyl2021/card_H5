<template>
  <div>
    <!-- 头部切换 -->
    <headerBg></headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="hl/icon/phoneButton.png"
      addressButton="hl/icon/addressButton.png"
      phone="1333333333333"
      address="浙江省"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode isXx="" isWx=""  phonoIcon="" qrCodeIcon="hl/icon/sys.png" ></pQrcode>
    <!-- tab栏 -->
    <tab
        :tabList="tabList"
        :tabId="tabId"
        :isTob="tabIsTop"
        id="tap"
        @butTab="butTab"
      ></tab>
  <!-- 阿库标识 -->
  <aKuLogo></aKuLogo>
  </div>
</template>

<script>
export default {
    data(){
      return{
        tabList: [
        {
          name: "协会介绍",
          id: "xhjs",
        },
        {
          name: "协会动态",
          id: "xhdt",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },
        {
          name: "合作伙伴",
          id: "hzhb",
        },
      ], ///tab栏列表
      tabId: "xhjs", //默认tab
      tabIsTop: false, //用作下拉到一定程度现实tab栏
      }
    },
    mounted() {
    window.addEventListener("scroll", this.scrolling);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrolling);
  },
  methods:{


  scrolling() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      var tabScroll = document.getElementById("tap").offsetTop;
      console.log(scrollTop);
      console.log("获取tap栏高度", tabScroll);
      if (scrollTop >= tabScroll) {
        this.tabIsTop = true;
      } else {
        this.tabIsTop = false;
      }
    },

    butTab(id) {
      console.log(id);
      this.tabId = id;
      // window.location.hash=this.tabId
      var id = this.tabId.replace("#", "");
      console.log(id);
      document.getElementById(id).scrollIntoView();
    },
}
};
</script>

<style>
</style>
