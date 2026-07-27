<template>
  <div class="contentBox">
    <div v-for="(item, index) in list" :key="index" @click="getTo(item.id)">
      <div class="wlName">{{ item.name }}</div>
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
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          //  console.log("列表信息",res)
          //  this.list=res.data.list
          const data = res.data.list.find((item) => item.name == "国际物流");
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
</style>
