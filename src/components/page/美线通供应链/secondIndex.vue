<template>
  <div >
    <div v-for="(item, index) in list" :accesskey="index" class="box">
      <listBox
        :class="{ 'm-t-14': index != list.length - 1 }"
        :imageUrl="{
          url: item.image.url,
        }"
        :name="item.name"
        :describe="item.describe"
        :type="2"
        :pageType="2"
        :id="item.id"
      ></listBox>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        // {
        //   name: "国际快递",
        //   describe:
        //     "DHL / UPS / FEDEX头部一级代理商 产品优势：广深港点对点扫描...",
        //   image: {
        //     url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
        //   },
        // },
        // {
        //   name: "国际快递",
        //   describe:
        //     "DHL / UPS / FEDEX头部一级代理商 产品优势：广深港点对点扫描...",
        //   image: {
        //     url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
        //   },
        // },
        // {
        //   name: "国际快递",
        //   describe:
        //     "DHL / UPS / FEDEX头部一级代理商 产品优势：广深港点对点扫描...",
        //   image: {
        //     url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
        //   },
        // },
        // {
        //   name: "国际快递",
        //   describe: "DHL / UPS / ",
        //   image: {
        //     url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
        //   },
        // },
      ],
    };
  },
  created(){
    this.getList()
  },
  methods:{
    getList(){
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息",name:'物流产品' })
        .then((res) => {
          this.list=res.data.list[0].solution_list
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  padding: 0 16px;
}
.m-t-14{
  margin-bottom: 14px;
}
</style>
