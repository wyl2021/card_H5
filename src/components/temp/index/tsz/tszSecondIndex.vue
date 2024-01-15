<!-- 第三个页面 -->
<template>
    <div>
      <!-- <van-tabs v-model="active" color="#0E58A3" title-active-color="#0E58A3">
        <van-tab v-for="(item, index) in tabList" :title="item.name" :key="index">
          <list-box-1
          :dataListId="item2.id"
            :key="index2"
            v-for="(item2, index2) in item.dataList"
            :title="item2.title"
            :content="item2.content"
            :imageUrl="item2.imageUrl"
          ></list-box-1>
        </van-tab>
      </van-tabs> -->
      <div v-for="(item, index) in dataList" :key="index">
        <list-box-2
          :dataListId="item.id"
          :imageUrl="item.imageUrl"
          :content="item.content"
          :content2="item.content2"
          :title="item.title"
        ></list-box-2>
      </div>
      <div class="h-50"></div>
      <tabbar :active="2"></tabbar>
    </div>
  </template>
  
  <script>
  import tabbar from "@/components/tabbar/index.vue";
  import ListBox2 from "@/components/temp/listBox/listBox2.vue";
  export default {
    components: {
      tabbar,
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
            content: "企业法律顾问",
            content2: "House Counsel",
            imageUrl: require("@/assets/tempfile/tsz/product/qyflgw.png"),
          },
          {
            id: require("@/assets/tempfile/tsz/product/onepicture.png"),
            content: "金融服务",
            content2: "Financial Service",
            imageUrl: require("@/assets/tempfile/tsz/product/jrfw.png"),
          },
          {
            id: require("@/assets/tempfile/tsz/product/onepicture.png"),
            content: "网络科技",
            content2: "Neteork Technology",
            imageUrl: require("@/assets/tempfile/tsz/product/wlkj.png"),
          },
          {
            id: require("@/assets/tempfile/tsz/product/onepicture.png"),
            content: "医疗健康",
            content2: "Healthcare",
            imageUrl: require("@/assets/tempfile/tsz/product/yljk.png"),
          },
          {
            id: require("@/assets/tempfile/tsz/product/onepicture.png"),
            content: "海关数据",
            content2: "Customs Date",
            imageUrl: require("@/assets/tempfile/tsz/product/hgsj.png"),
          },
          {
            id: require("@/assets/tempfile/tsz/product/onepicture.png"),
            content: "单身相亲",
            content2: "Blind Date",
            imageUrl: require("@/assets/tempfile/tsz/product/dsxq.png"),
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" >
  
  
  
  </style>
  