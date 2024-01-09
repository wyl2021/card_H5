<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <iconContent> </iconContent>
    <div v-for="(item, index) in dataList" :key="index">
      <list-box-1
        :dataListId="item.id"
        :imageUrl="item.imageUrl"
        :content="item.content"
        :title="item.title"
      ></list-box-1>
    </div>
  </div>
</template>

<script>
import iconContent from "@/components/temp/iconContent.vue";
import ListBox1 from "@/components/temp/listBox/listBox1.vue";
export default {
  components: {
    iconContent,
    ListBox1,
  },
  data() {
    return {
      dataList: [
        {
          id: require("@/assets/tempfile/aj/cantent/ldjzxhy.png"),
          content: "东莞市物流行业协会理事单位",
          title: "理事单位",
          imageUrl: require("@/assets/tempfile/aj/image/ryzz6.png"),
        },
        {
          id: require("@/assets/tempfile/aj/cantent/ldjzxhy.png"),
          content: "东莞市物流行业协会理事单位",
          title: "理事单位",
          imageUrl: require("@/assets/tempfile/aj/image/ryzz6.png"),
        },
        {
          id: require("@/assets/tempfile/aj/cantent/ldjzxhy.png"),
          content: "东莞市物流行业协会理事单位",
          title: "理事单位",
          imageUrl: require("@/assets/tempfile/aj/image/ryzz6.png"),
        },
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
/deep/ .listBox{
  margin: 0 !important;
}
</style>
