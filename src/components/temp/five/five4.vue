<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <iconContent> </iconContent>
    <list-box-1>
    <template #listBoxContent>
      <div style="text-align: center;margin-top: 10px;" v-for="(item, index) in dataList" :key="index">
        <van-image  :src="item.imageUrl"></van-image>
        <div class="title">{{ item.content }}</div>
      </div>
    </template>
  </list-box-1>
  </div>
</template>

<script>
import iconContent from "@/components/temp/iconContent.vue";
// import connect from "@/components/temp/connect.vue";
import ListBox1 from "@/components/temp/listBox/listBox1.vue";
export default {
  components: {
    iconContent,
     ListBox1,
  },
  data() {
    return {
      dataList: [
        { content: "轻量防撞", imageUrl: require("@/assets/tempfile/nh/image/1.png") },
        { content: "高强防撞", imageUrl: require("@/assets/tempfile/nh/image/2.png") },
        { content: "前门系列", imageUrl: require("@/assets/tempfile/nh/image/3.png") },
        { content: "包胶", imageUrl: require("@/assets/tempfile/nh/image/4.png") },
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
.title{
  color: #000;
  font-size: 14px;
}
</style>
