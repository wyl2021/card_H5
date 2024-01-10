<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <van-image
      :src="require('@/assets/tempfile/jh/sy_slices/image6.png')"
    ></van-image>
    <div class="box">
      <div class="box1">
        <list-box-1 :dataListId="dataList[0].id" >
          <template #listBoxContent>
            <van-image :src="dataList[0].imageUrl" class="image1"></van-image>
            <!-- <div class="planBox1" :style="{backgroundImage:`url(${dataList.imageUrl})`}"></div> -->
          </template>
        </list-box-1>
        <list-box-1 :dataListId="dataList[2].id" :imageUrl="dataList.imageUrl">
          <template #listBoxContent>
            <van-image :src="dataList[2].imageUrl" class="image2"></van-image>
            <!-- <div class="planBox1" :style="{backgroundImage:`url(${dataList.imageUrl})`}"></div> -->
          </template>
        </list-box-1>
      </div>
      <div class="box2">
        <list-box-1 :dataListId="dataList[1].id" :imageUrl="dataList.imageUrl">
          <template #listBoxContent>
            <van-image :src="dataList[1].imageUrl" class="image3"></van-image>
            <!-- <div class="planBox1" :style="{backgroundImage:`url(${dataList.imageUrl})`}"></div> -->
          </template>
        </list-box-1>
        <list-box-1 :dataListId="dataList[3].id" :imageUrl="dataList.imageUrl">
          <template #listBoxContent>
            <van-image :src="dataList[3].imageUrl" class="image4"></van-image>
            <!-- <div class="planBox1" :style="{backgroundImage:`url(${dataList.imageUrl})`}"></div> -->
          </template>
        </list-box-1>
      </div>
    </div>
  </div>
</template>

  <script>
// @ is an alias to /src
import ListBox1 from "@/components/temp/listBox/listBox1.vue";

export default {
  components: {
    ListBox1,
  },
  data() {
    return {
      dataList: [
      {
            id: require("@/assets/tempfile/jh/sy_slices/image12.png"),
            imageUrl: require("@/assets/tempfile/jh/sy_slices/image8.png"),
          },
          {
            id: require("@/assets/tempfile/jh/sy_slices/image13.png"),
            imageUrl: require("@/assets/tempfile/jh/sy_slices/image9.png"),
          },
          {
            id: require("@/assets/tempfile/jh/sy_slices/image14.png"),
            imageUrl: require("@/assets/tempfile/jh/sy_slices/image10.png"),
          },
          {
            id: require("@/assets/tempfile/jh/sy_slices/image15.png"),
            imageUrl: require("@/assets/tempfile/jh/sy_slices/image11.png"),
          }
      ],
    };
  },
};
</script>

  <style lang="scss" scoped>
/deep/ .headerImage {
  display: flex;
  margin: 0 auto;
}
/deep/ .listBox {
  margin: 0 !important;
}
.tupian {
  width: 100%;
  height: 100%;
}
.box{
  display: flex;
}
.box1{
  margin-right: 9px;
}
.image1{
  width: 155px;
  height: 134px;
}
.image2{
  width: 155px;
  height: 121px;
}
.image3{
  width: 155px;
  height: 153px;
}
.image4{
  width: 155px;
  height: 102px;
}
</style>
