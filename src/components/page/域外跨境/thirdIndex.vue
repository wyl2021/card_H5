<template>
  <div class="">
    <div class="contentBox">
      <div class="productBox">
        <div
          class="productItem"
          v-for="(item, index) in getContent('产品介绍')"
          :key="index"
          @click="getTo(item.id)"
        >
          <van-image :src="item.image.url" v-if="item.image"></van-image>
          <div class="line"></div>
          <div class="text1">{{ item.name_en }}</div>
          <div class="text2">{{ item.name }}</div>
          <div class="text4">
            <span class="text3">全国统一零售价：</span>{{ item.describe }}元
          </div>
        </div>
      </div>
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
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    },
    getContent(name) {
      const data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((item) => {
          console.log(item);
          this.list = item.data.list;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.productBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  // margin-top: 10px;
  .line {
    border: #E0DFDD dotted 1px;
    width: 100%;
  }
  .productItem {
    border: #f6f6f6 solid 2px;
    padding: 5px;
  }
  .text1 {
    color: #666;
    font-size: 10px;
  }
  .text2 {
    color: #484848;
    font-size: 10px;
    margin-bottom: 5px;
  }
  .text3 {
    color: #999999;
    font-size: 8px;
  }
  .text4 {
    color: #b50000;
    font-size: 8px;
  }
  .m-y {
    margin: 5px 0;
  }
}
</style>
