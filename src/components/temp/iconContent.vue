<!-- 自定义头部模块 -->
<template>
  <div class="svgIcon">
    <slot name="header">
      <van-image
        :width="width"
        :height="height"
        class="headerImage"

        :src="src || require('@/assets/tempfile/aj/headerImage/qywh.png')"
      ></van-image>
    </slot>
    <slot name="content"></slot>
  </div>
</template>


<script>
export default {
  props: {
    src: String,
    width: {
      type: String,
      default: "159",
    },
    height: {
      type: String,
      default: "39",
    },
  },
};
</script>

<style less="scss" scoped>
.svgIcon {
  display: flex;
  align-items: center;
}
.mr-5 {
  margin-right: 5px;
}
</style>
