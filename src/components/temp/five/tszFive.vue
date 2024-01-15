<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <iconContent width="100%"     height="100%"  :src="require('@/assets/tempfile/tsz/headerImage/image3.png')"> </iconContent>
    <div v-for="(item, index) in dataList" :key="index">
      <list-box-2
        :dataListId="item.id"
        :imageUrl="item.imageUrl"
        :content="item.content"
        :content2="item.content2"
        :title="item.title"
      ></list-box-2>
    </div>
    <router-link
          :to="{
            path: '/secondIndex',
            name: 'secondIndex',
            params: { id: '携带参数' },
          }"
        >
          <div class="c-666 ta-r fs-12 text-align-left">查看更多<van-icon name="arrow"></van-icon></div>
        </router-link>

  </div>
</template>

<script>
import iconContent from "@/components/temp/iconContent.vue";
import ListBox2 from "@/components/temp/listBox/listBox2.vue";
export default {
  components: {
    iconContent,
    ListBox2,
  },
  data() {
    return {
      dataList: [
        {
          id: require("@/assets/tempfile/tsz/product/onepicture.png"),
          content: "企业团建",
          content2: "Enterprise League Building",
          imageUrl: require("@/assets/tempfile/tsz/product/qytj.png"),
        },
        {
          id: require("@/assets/tempfile/tsz/product/onepicture.png"),
          content: "物流人才",
          content2: "Logistics Talent",
          imageUrl: require("@/assets/tempfile/tsz/product/wlrc.png"),
        },
        {
          id: require("@/assets/tempfile/tsz/product/onepicture.png"),
          content: "货运保险",
          content2: "cargo insurance",
          imageUrl: require("@/assets/tempfile/tsz/product/hybx.png"),
        },
        {
          id: require("@/assets/tempfile/tsz/product/onepicture.png"),
          content: "企业礼品",
          content2: "Corporate Gift",
          imageUrl: require("@/assets/tempfile/tsz/product/qylp.png"),
        },
        {
          id: require("@/assets/tempfile/tsz/product/onepicture.png"),
          content: "更多服务",
          content2: "More Services",
          imageUrl: require("@/assets/tempfile/tsz/product/gdfw.png"),
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
