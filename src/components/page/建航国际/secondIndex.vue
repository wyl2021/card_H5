<template>
  <div class="contentBox">
    <div v-for="(item,index) in list">
      <div class="d-flex">
        <div class="dian"></div>
        <companyTitle
          :title="item.name"
          fontSize="14px"
        ></companyTitle>
      </div>
        <iText :title="item.name_en" titles="地址：" color="#666666"></iText>
        <iText :title="item.pdf" titles="Tel：" color="#666666"></iText>
        <iText :title="item.describe" titles="Fax：" color="#666666"></iText>
        <van-image v-if="item.image" :src="item.image.url"></van-image>

      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          //  console.log("列表信息",res)
          //  this.list=res.data.list
          const data = res.data.list.find((item) => item.name == "联系我们");
          this.list = data ? data.solution_list : [];
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.wlName {
  color: #333333;
  font-size: 14px;
  margin: 10px 0 6px 0;
}
.dian {
    width: 8px;
    height: 8px;
    background-color: #1cb7d8;
    margin-right: 4px;
    border-radius: 4px;
  }
</style>
