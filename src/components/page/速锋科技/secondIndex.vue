<template>
  <div class="">
    <van-tabs
      v-model="active"
      title-active-color="#0101FE"
      color="#355DA8"
      @click="onClick"
    >
      <van-tab v-for="(item, index) in tabList" :title="item.name" :key="index">
        <div class="departmentBox">
          <div
            class="departmentItem"
            v-for="(item2, index2) in item.solution_list"
            :key="index2"
            @click="getTo(item2.id)"
          >
            <van-image v-if="item2.image" :src="item2.image.url"></van-image>
            <div class="name">{{ item2.name }}</div>
          </div>
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
.departmentBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  padding: 12px 16px;
  .departmentItem {
    border-radius: 4px;
    padding-bottom: 5px;
    text-align: center;
    background-color: #fff;
    .name {
      font-size:  13px;
      font-weight: 500;
      color: #333333;
    }
  }
}
</style>
