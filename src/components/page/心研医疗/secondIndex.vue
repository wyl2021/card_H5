<template>
  <div class="p-page">
    <div class="cpBox">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="cpItem"
        @click="getTo(item.id)"

      >
        <van-image
          class="img"
          :src="item.image.url"
          width="100%"
          height="103px"
          v-if="item.image"
        />
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
    getUrl(str) {
      return "'" + str + "'";
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          //  console.log("列表信息",res)
          //  this.list=res.data.list
          const data = res.data.list.find((item) => item.name == "产品展示");
          this.list = data ? data.solution_list : [];
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.cpBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .cpItem {
    border-radius: 4px;
    background-color: #fff;
    // padding-bottom: 8px;
    box-shadow: 0px 2px 8px 0px rgba(1, 106, 66, 0.08);
    text-align: center;
  }
  .name {
    font-size: 13px;
    color: #333;
    margin: 8px 0;
  }
  .img {
  }
}
</style>
