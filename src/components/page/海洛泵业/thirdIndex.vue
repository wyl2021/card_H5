<template>
  <div class="">
    <van-tabs
      v-model="active"
      title-active-color="#155499"
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
          <div class="name">{{ item2.name }}</div>
            <van-image v-if="item2.image" :src="item2.image.url" class="image"></van-image>
            <div class="d-flex justify-between">
              <div class="describe">{{ item2.describe }}</div>
              <more title="查看更多"  color="#666666"></more>
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
      active:0
    };
  },
  created() {
    this.getTabList();
  },
  methods: {
    getTo(id) {
      this.$router.push({
        path:'/categorySolutionInfo',
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
      this.$http
        .categorySolutionTypeList({ parent_name: "新闻" })
        .then((item) => {
          console.log(item);
          this.tabList = item.data.list;
        });

    },
  },
};
</script>

<style lang="scss" scoped>
.departmentBox {
margin: 0 16px;
  .departmentItem {
    border-radius: 4px;
    padding: 12px;
    background-color: #fff;
    width: 100%;
    margin-top: 10px;
    .name {
      font-size:   14px;
      font-weight: 500;
      color: #333333;

    }
    .image{
      margin: 10px 0;
    }
    .justify-between{
      justify-content: space-between;
    }
    .describe{
      font-size:10px;
      color: #666;
    }
  }
}
</style>
