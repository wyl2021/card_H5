<template>
  <div class="">
    <van-tabs
      v-model="active"
      title-active-color="#155499"
      color="#355DA8"
      @click="onClick"
    >
      <van-tab v-for="(item, index) in tabList" :title="item.name" :key="index">
        <div class="">
          <listBox
            v-for="(item2, index2) in item.solution_list"
            :key="index2"
            :type="1"
            :imageUrl="{
              url: item2.image.url,
              width: '200px',
              height:'100%',
              columWidth: '300px',
            }"
            :name="item2.name"
            :describe="item2.describe"
            button="查看详情"
            buttonColor="#155499"
            :pageType="3"
            :id="item2.id"
            class="departmentItem"
          >
          </listBox>
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
      this.$http
        .categorySolutionTypeList({ parent_name: "产品中心" })
        .then((item) => {
          console.log(item);
          this.tabList = item.data.list;
        });
    },
  },
};
</script>

<style lang="scss" scoped>

.departmentItem{
  background-color: #fff;
margin: 10px 12px 0 12px;
padding: 12px;

}
</style>
