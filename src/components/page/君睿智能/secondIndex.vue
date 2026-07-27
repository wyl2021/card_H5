<template>
  <div class="">
    <van-tabs v-model="active" title-active-color="#2347B3" color="#2347B3" @click="onClick">
      <van-tab v-for="(item, index) in tabList" :title="item.name" :key="index">
        <div v-for="(i2, d2) in item.solution_list" :key="d2" class="productBox" @click="getTo(i2.id)">
          <van-image :src="i2.image.url" height="160px"></van-image>
          <div class="p-name">{{ i2.name }}</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [],
      productList: [],
      active: 0,
    };
  },
  created() {
    this.getTabList();
  },
  methods: {
    getTo(id) {
      this.$router.push({
        path: "/solutionInfo",
        query: { id: id },
      });
    },
    onClick(index, title) {
      // this.$toast(`${index} ${title}`);
      //   this.productList=[]
      //   this.$http.solutionTypeList({name:this.tabList[index]}).then((res) => {
      //     console.log('点击更新列表',res.data.list)
      //     this.productList = res.data.list[0].solution_list;

      //  });
    },
    getTabList() {
      this.$http.solutionTypeList().then((res) => {
        // this.productList = res.data.list[0].solution_list;
        this.tabList = res.data.list;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.productBox {
  margin: 10px 12px;
  background-color: #FFF;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-content: center;

  .p-name {
    color: #FFF;
    background-color: #2347B3;
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
  }
}
</style>
