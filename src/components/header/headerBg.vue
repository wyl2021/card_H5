<template>
  <div>
    <div
      class="headerBg"
      :style="{
        backgroundImage:
          'url(' + IMG + cardBg + '/headerBg/headerBg' + (cardId + 1) + '.png?time='+time+')',
      }"
    >
      <slot name="userInfo"></slot>
    </div>
    <!-- @click="getName" -->
    <div  >
    <cardBg v-if="isCard"  :cardId="cardId + 1" :cardName="cardBg" class="cardBg"></cardBg>
  </div>
    <nameList :show="nameShow"></nameList>
    <van-popup v-model="show" position="bottom" round :close-on-click-overlay="false" >
      <div class="topCard">
        <div class="t1">
          <div class="line" :style="{'background-color':color}"></div>
          企业成员</div>
        <van-button @click="commitUser" :color="color" class="confirmButton">确定切换</van-button>
      </div>
      <div class="h-60"></div>
      <div
        v-for="(item, index) in popupLength"
        class="headerBg popupBg"
        :style="{
          backgroundImage:
            'url(' +
            IMG +
            cardBg +
            '/headerBg/headerBg' +
            (index + 1) +
            '.png)',
        }"
      >
        <slot :item="index"></slot>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    cardBg: {
      type: String,
      default: "yx",
    },
    cardId: {
      type: Number,
      default: 0,
    },
    show: {
      type: Boolean,
      default: false,
    },
    popupLength:{
      type:Number,
      default:3
    },
    color:{
      type: String,
      default: "#422187",
    },
    isCard:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      IMG: this.IMG,
      popupList: [],
      time:null,
      nameShow:false,
      // cardIds:0,
      // cardId: 0, //名片下标
      // show: false, //名片弹出框
    };
  },
  created(){
    this.time = Date.now()
  },
  methods: {
    getName(){
      this.nameShow=true
      console.log(this.nameShow)
    },
    commitUser() {
      console.log("确定切换");
      this.$emit("commitUser");
      // this.show=false
    },
  },
};
</script>

<style lang="scss" scoped>
// 名片
.headerBg {
  background-size: 100%;
  // width: 100%;
  height: 200px;
  border-radius: 8px;

}
.topCard {
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 10px 18px 0 5px;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 9;
  .t1 {
    padding:10px 14px 12px 14px;
    // border: 1px solid #000;
    font-size: 15px;

  }
}
/deep/ .van-button{

  color: #fff;
}
.cardBg {
  padding-top: 12px;
}
.popupBg{
  margin: 12px 18px;
}
.line{
  background-color: #422187;
  height: 4px;
  width: 37px;
  margin-bottom: 15px;
}
/deep/.van-popup{
  height: 60%;
}
.h-60{
  height: 60px;
}
</style>
