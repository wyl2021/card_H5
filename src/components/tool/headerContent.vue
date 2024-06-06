<template>
  <div class="contentBox m-x">
    <div class="d-flex justify-between">
      <van-image
        v-if="isHeader"
        :src="IMG + headerImg"
        :width="width"
        :height="height"
        class="image"
        :style="{ margin: margin }"
      ></van-image>
      <slot name="headerRight"></slot>
    </div>
    <slot name="content"> </slot>
  </div>
</template>

<script>
export default {
  props: {
    headerImg: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "328px",
    },
    height: {
      type: String,
      default: "31px",
    },
    isHeader: {
      type: Boolean,
      default: true,
    },
    margin: {
      type: String,
      default: "auto",
    },
  },
  data() {
    return {
      IMG: this.IMG,
    };
  },
};
</script>

<style lang="scss" scoped>
.justify-between{
  justify-content: space-between;
}
.m-x {
  margin: 12px 0 !important;
}
.image {
  display: flex;
  margin-bottom: 10px;
}
</style>
