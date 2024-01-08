<template>
  <div class="top2 pl-30 pr-30 pb-20 bg-fff br-8 mb-12 pos-r">
    <div v-if="cardId == 0">
      <van-image
        class="logo"
        width="80"
        height="40"
        :src="require('@/assets/tempfile/img/asLogo.png')"
      ></van-image>
      <div class="dp-f jc-fe pr-10 pt-30 mb-17">
        <div class="ta-c">
          <p class="fs-16 fw-b">陈程</p>
          <p class="fs-10">总经理</p>
        </div>
      </div>
      <p class="fs-12 b-b1 pb-8 mb-8">深圳市安速国际货运代理有限公司</p>
      <div class="fs-10" style="color: #fe714c; line-height: 1.6">
        <div class="dp-f">
          <van-icon
            class-prefix="my-icon"
            class="mr-5 mt-2"
            name="icon-a-Frame2"
          ></van-icon>
          <span class="c-666">18291900927</span>
        </div>
        <div class="dp-f">
          <van-icon
            class-prefix="my-icon"
            class="mr-5 mt-2"
            name="icon-a-Frame1"
          ></van-icon>
          <span class="c-666">zeng@meixxx.com</span>
        </div>
        <div class="dp-f">
          <van-icon
            class-prefix="my-icon"
            class="mr-5 mt-2"
            name="icon-Frame"
          ></van-icon>
          <span class="c-666">宁波市鄞州区翔云北路199号深蓝大厦19层</span>
        </div>
      </div>
    </div>

    <div v-else-if="cardId == 1" class="header2">
      <div class="header">
        <div class="text1">{{ info.name }}</div>
        <div class="text2">{{ info.post }}</div>
      </div>
      <div class="body">
        <div class=""></div>
        <div class=""></div>
      </div>
    </div>
    <div v-else-if="cardId == 2"></div>
    <div v-else-if="cardId == 3"></div>
    <div v-else=""></div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          name: "陈程",
          post: "董事长",
          email: "zeng@meixxx.com",
          phone: "18291900927",
          address: "宁波市鄞州区翔云北路199号深蓝大厦19层",
          web: "xxxxxxxx",
        };
      },
    },
    cardId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 15px;
  left: 30px;
}
.info {
  padding-top: 72px;
}
.line {
  width: 100%;
  background-color: #af6c1a;
  height: 3px;
}
.right {
  flex-grow: 1;
  margin-left: 12px;
}
.header2 {
  width: 100%;
  height: 200px;
  padding: 20px 30px;
  background-image: url("../../../assets/tempfile/as/headerBg/header2.png");
  background-size: 100% 100%;
  .header {
    .text1 {
      font-size: 16px;
      color: #333;
      font-weight: 700;
    }
    .text2 {
      font-size: 10px;
      color: #333;
    }
  }
  .body {
    display: flex;
    margin-top: 24px;
  }
}
</style>
