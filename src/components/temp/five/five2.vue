<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <div v-if="info.type == 1">
      <div class="ta-c">
        <van-image
          class="mb-12"
          width="153"
          height="39"
          :src="require('@/assets/tempfile/aj/headerImage/qywh.png')"
        ></van-image>
      </div>
      <div v-for="(item, index) in info.productList" :key="index">
        <div style="display: flex; align-items: baseline; margin-bottom: 10px">
          <div class="shape"></div>
          <div style="width: 305px">
            <div style="font-size: 14px">{{ item.title }}</div>
            <div style="font-size: 12px; color: #666666; margin-top: 6px">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
      <van-image
        fit="contain"
        :src="require('@/assets/tempfile/aj/image/qywh.png')"
      />
    </div>
    <div v-if="info.type == 2">
      <div class="ta-c">
        <van-image
          class="mb-12"
          width="153"
          height="39"
          :src="require('@/assets/tempfile/aj/headerImage/ryzz.png')"
        ></van-image>
      </div>
      <div style="display: flex; flex-wrap: wrap;">
        <div style="width:50%;text-align:center;margin-bottom: 10px;" v-for="(item, index) in info.productList" :key="index">
          <van-image
            width="130"
            height="90"
            :src="item.imageUrl"
          />
       <div style="text-align:center;font-size:10px;color:#333">{{ item.title }}</div>
        </div>
      </div>
      <div style="text-align:right;font-size: 12px;color: #000;" >
        更多
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>

import svgIcon from "@/components/SvgIcon/index.vue"
export default {
  components:{
    svgIcon
  },
  props: {
    info: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.pBox1 {
  width: 155px;
  height: 195px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px 8px 8px 8px;
  text-align: center;
  overflow: hidden;
  margin-bottom: 9px;
}
.pBox2 {
  width: 155px;
  height: 167px;
  border-radius: 4px 4px 4px 4px;
  background-size: cover;
  margin-bottom: 9px;
  text-align: center;
  position: relative;
  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .minSize {
    font-size: 0.1rem;
    transform: scale(0.7);
  }
}
.b-0 {
  bottom: 0;
}
.r-0 {
  right: 0;
}
.shape {
  border-radius: 50%;
  background-color: #0e58a3;
  width: 8px;
  height: 8px;
  margin-right: 6px;
}
</style>
