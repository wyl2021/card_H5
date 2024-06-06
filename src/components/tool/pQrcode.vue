<template>
  <div>
    <div v-if="isXx" class="contentBox m-y-10">
      <div class="infoHeader">
        <van-image
          :src="IMG + phonoIcon"
          mode=""
          width="18px"
          height="18px"
          class="m-r-5"
        ></van-image>
        {{ phonoContent.phonoTitle }}
      </div>
      <div style="display: flex; justify-content: center; margin-top: 12px">
        <div
          style="
            width: 175px;
            height: 200px;
            background-size: 100%;
            background-repeat: no-repeat;
          "
          :style="{ backgroundImage: `url(${getUrl(isXx.url)})` }"
        ></div>
      </div>
    </div>
    <div v-if="isWx" class="contentBox m-y-10">
      <div class="infoHeader">
        <van-image
          :src="IMG + qrCodeIcon"
          mode=""
          width="18px"
          height="18px"
          class="m-r-5"
        ></van-image>
        {{ qrContent.qrTitle }}
      </div>
      <div class="wxCode">
        <img
          :src="isWx.url"
          mode=""
          width="115px"
          height="115px"
          class="m-r-5"
        />

        <div class="text" :style="{'font-size':qrContent.textFont,'color':qrContent.color}" >{{ qrContent.qrName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isXx: {
      type: Object,
      default: null,
    },
    isWx: {
      type: Object,
      default: null,
    },
    phonoIcon: String,
    qrCodeIcon: String,
    qrContent: {
      type: Object,
      default: function () {
        return {
          qrTitle: "扫码加微信",
          qrName: "扫描二维码，添加我为好友",
          textColor:'#999999',
          textFont:'10px'
        };
      },
    },
    //
    phonoContent: {
      type: Object,
      default: function () {
        return {
          phonoTitle: "个人形象照",

          textColor:'#999999',
          textFont:'10px'
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    //防止图片路径不规范化
    getUrl(url) {
      return "'" + url + "'";
    },
  },
};
</script>

<style lang="scss" scoped>
.m-y-10 {
  margin: 10px 0;
}
.m-r-5 {
  margin-right: 5px;
}
.infoHeader {
  display: flex;
  align-items: center;

  font-size: 15px;
  font-weight: 600;
  color: #333333;
}
.wxCode {
  text-align: center;
  /deep/.van-image {
    display: flex;
    margin: 0 auto;
  }

}
</style>
