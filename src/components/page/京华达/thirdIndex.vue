<template>
  <div class="">
    <van-tabs v-model="active" title-active-color="#FE6104" color="#FE6104" @click="onClick">
      <van-tab v-for="(item, index) in tabList" :title="item.name" :key="index">
        <div class="departmentBox">
          <div class="departmentItem" v-for="(item2, index2) in item.solution_list" :key="index2"
            @click="getTo(item2.id)">
            <div class="name">{{ item2.name }}</div>
            <van-image v-if="item2.image" :src="item2.image.url"></van-image>
            <div class="d-flex jc-sb" style="font-size:10px;color:#666">
              {{ item2.describe }}
              <more title="查看更多" icon="arrow" path="/solutionInfo" color="#666666" float="flex-start"
                :query="{ id: item2.id }"></more>
            </div>
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
.departmentBox {
  padding: 12px 16px;

  .departmentItem {
    border-radius: 4px;
    // padding-bottom: 5px;
    text-align: center;
    background-color: #fff;
    padding: 12px;
    margin-bottom: 12px;

    .name {
      font-size: 14px;
      font-weight: 500;
      color: #333333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
    }
  }
}
</style>
