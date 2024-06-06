<template>
  <div class="p-t-5">

      <div class="productBox">
        <div
          class="productItem"
          v-for="(item, index) in getContent('工厂')"
          :key="index"
          @click="getTo(item.id)"
        >
          <van-image :src="item.image.url" v-if="item.image"></van-image>
          <div class="name">{{ item.name }}</div>
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
        .categorySolutionTypeList({ parent_name: "列表详情" })
        .then((item) => {
          console.log(item);
          this.list = item.data.list;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.p-t-5{
  padding-top: 1px;
}
.productBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin: 10px;

  .productItem {
   background-color: #FFFFFF;
    text-align: center;
    border-radius: 4px;
    padding-bottom: 5px;
  }
  .name{
    font-size: 13px;
    color: #333;
  }
  .m-y {
    margin: 5px 0;
  }
}
</style>
