<template>
  <div class="">
    <van-tabs v-model="active" title-active-color="#355DA8" color="#355DA8">
      <van-tab v-for="(item, index) in tabList" :title="item.name" :key="index">
        <div class="departmentBox">
          <div
            class="departmentItem"

            v-for="(item2, index2) in item.solution_list"
            :key="index2"
            @click="getTo(item2.id,item2.name)"
          >
            <van-image :src="item2.image.url" v-if="item2.image"></van-image>
            {{ item2.name }}
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
    };
  },
  created() {
    this.getTabList();
  },
  methods: {
    getTo(id,name) {
      this.$router.push({
        path: "/categorySolutionInfo",
        query: { id: id,title:name },
      });
    },
    getTabList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "科室" })
        .then((res) => {
          //  console.log("列表信息",res)
          // res.data.list.forEach((item)=>{
          //   this.tabList.push(item.name)
          // })
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
padding:12px 16px;
  .departmentItem {
    .van-image {
      margin-bottom: 5px;
    }
    border-radius: 8px;
    padding-bottom: 5px;
    text-align: center;
    background-color: #fff;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
    font-size: 13px;
    color: #333333;
  }
}
</style>
