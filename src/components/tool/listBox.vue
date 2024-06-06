<!-- 样式类型  左右  左图片 右标题 内容加内容 -->
<template>
  <div @click="getTo()">
    <div class="d-flex list1" v-if="type == 1">
      <van-image
        v-if="imageUrl"
        :width="imageUrl.width"
        :height="imageUrl.height"
        :src="imageUrl.url"
      ></van-image>
      <!--  -->
      <div class="f-colum" :style="{'width':imageUrl.columWidth}">
        <div class="f-item">
          <div v-if="name != ''" class="name">{{ name }}</div>
          <div v-if="describe != ''" class="describe">{{ describe }}</div>
        </div>
        <van-button v-if="button != ''" :color="buttonColor">{{ button }}</van-button>
      </div>
    </div>
    <div
      v-else-if="type == 2"
      class="w-100 imageBox"
      :style="{
        backgroundImage: 'url(' + getUrl(imageUrl.url) + ')',
      }"
    >
      <div class="name">{{ name }}</div>
      <div class="describe">{{ describe }}</div>
    </div>
    <div class="d-flex d-between3 " v-if="type == 3">
      <van-image
        v-if="imageUrl"
        :width="imageUrl.width"
        :height="imageUrl.height"
        :src="imageUrl.url"
      ></van-image>
      <div class="f-colum" :style="{'width':fWidth}">
        <div v-if="name != ''" class="name">{{ name }}</div>
        <div class="f-colum-end">
          <div v-if="describe != ''" class="describe">{{ describe }}</div>
          <van-button v-if="button != ''" class="button">{{ button }}</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: Object,
      default: {
        columWidth:"60%",
      }
    },//图片
    name: {
      type: String,
      default: "",
    },//标题
    describe: {
      type: String,
      default: "",
    },//详情
    button: {
      type: String,
      default: "",
    },//按钮文字
    type: {
      type: Number,
      default: 1,
    },//样式状态
    id: {
      type: String,
      default: "",
    },//跳转页面携带参数
    pageType: {
      type: Number,
      default: 0, //0 产品 1方案 2三级
    },//跳转页面状态
    fWidth:{
      type:String,
      default:'60%'
    },//右侧宽度
    buttonColor:{
      type:String,
      default:'#422188'
    },//按钮颜色

  },
  data() {
    return {};
  },
  methods: {
    getUrl(str) {
      return "'" + str + "'";
    },
    getTo() {
      this.$router.push({
        path:
          this.pageType == 0
            ? "/productInfo"
            : this.pageType == 1
            ? "/solutionInfo"
            : "/categorySolutionInfo",
        query: { id: this.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.name {
  font-size: 13px;
  color: #666;
}
.d-between {
  justify-content: space-between;

}
.d-between3{
  column-gap: 10px;
}
.describe {
  font-size: 12px;
  color: #999;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  display: -webkit-box;
    -webkit-box-orient: vertical;
}
.f-colum {
  width: 60%;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  margin-left: 10px;
  /deep/ .van-button {
    border-radius: 5px;
    background-color: #422188;
    width: 68px;
    height: 23px;
    color: #fff;
    font-size: 12px;
    padding: 2px 4px;
    margin-left: 115px;

  }
}
.imageBox {
  background-size: 100% 100%;
  height: 160px;
  padding: 15px 12px;
  .name {
    color: #ffffff;
    font-size: 14px;
    border-bottom: 2px solid rgba($color: #fff, $alpha: 0.5);
    padding: 0 24px 4px 0;
    font-weight: 800;
    width: fit-content;
  }
  .describe {
    color: rgba($color: #fff, $alpha: 0.8);
    font-size: 12px;
    margin-top: 8px;
  }
}
.w-100 {
  width: 100%;
}
.list1{

}
</style>
