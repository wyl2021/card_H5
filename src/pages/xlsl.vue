<template>
    <div class="p-all-12 bg-fff br-8 mb-12 ml-16 mr-16">
    <div v-if="this.num==1">
      <img class="xlsl" src="@/assets/tempfile/tsz/xlsl/xlsl.png" alt="">
      <div v-for="(item, index) in dataList" :key="index">
          <list-box-3
            :dataListId="item.id"
            :imageUrl="item.imageUrl"
          ></list-box-3>
        </div>
    </div>
    <div v-if="this.num==2">
    <van-image
      :src="require('@/assets/tempfile/tsz/product/zhnh.png')"
    ></van-image>
    </div>
    <div v-if="this.num==3">
      <img class="xlsl" src="@/assets/tempfile/tsz/hyfc/hyfc.png" alt="">
      <div v-for="(item, index) in dataList"  :key="index">
          <list-box-3
            :dataListId="item.id"
            :imageUrl="item.imageUrl"
          ></list-box-3>
        </div>
    </div>
    </div>
    
  </template>
  
  <script>
  import ListBox3 from "@/components/temp/listBox/listBox3.vue";
  export default {
    components: {
      ListBox3
    },
    data() {
        return {
          dataList: [
            {
              id: require("@/assets/tempfile/tsz/product/xlslny.png"),
              imageUrl: require("@/assets/tempfile/tsz/xlsl/image1.png"),
            },
            {
              id: require("@/assets/tempfile/tsz/product/xlslny.png"),
              imageUrl: require("@/assets/tempfile/tsz/xlsl/image2.png"),
            },
            {
              id: require("@/assets/tempfile/tsz/product/xlslny.png"),
              imageUrl: require("@/assets/tempfile/tsz/xlsl/image3.png"),
            },
            {
              id: require("@/assets/tempfile/tsz/product/xlslny.png"),
              imageUrl: require("@/assets/tempfile/tsz/xlsl/image4.png"),
            },
            {
              id: require("@/assets/tempfile/tsz/product/xlslny.png"),
              imageUrl: require("@/assets/tempfile/tsz/xlsl/image5.png"),
            },
            {
              id: require("@/assets/tempfile/tsz/product/hyfc.png"),
              imageUrl: require("@/assets/tempfile/tsz/xlsl/image5.png"),
            },
            
          ],
        };
      },
      created(){
        console.log("页面传值",this.$route.params.id)
        this.num=this.$route.params.id
        }
  }
  </script>
  
  <style lang="scss" scoped>
  .xlsl{
      width: 100px;
      height: 27px;
      margin-top: 14px;
      margin-bottom: 12px;
  }
  </style>