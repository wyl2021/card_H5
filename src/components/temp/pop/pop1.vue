<template>
  <div>
    <van-popup :close-on-click-overlay="false" v-model="show" class="popupStyle" position="bottom">
      <div class="popHeader">
        <div>
          <div class="line"></div>
          <span style="font-size:18px">企业成员</span>
        </div>
        <van-button :color="popColor" @click.stop="commitUser"
          >确定切换</van-button
        >
      </div>
      <div style="height: 54px"></div>
      <slot name="cardList"></slot>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    popColor: String,
  },
  data() {
    return {};
  },
  // created(){
  //     console.log(this.isShow,this.show)
  // },
  methods: {
    commitUser() {
      this.$emit("commitUser", "aaaaaa");
    },
  },
};
</script>

<style lang="scss" scoped>
.popHeader {
  padding: 12px 18px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
  left: 0;
  top: 29%;

  .line {
    background-color: #ae2b34;
    height: 4px;
    width: 38px;
  }
}
.popupStyle {
  height: 70%;
  padding: 12px 16px;
}
</style>
