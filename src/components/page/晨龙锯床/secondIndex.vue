<template>
  <div class="">
    <div class="departmentBox">
          <div
            class="departmentItem"
            v-for="(item, index) in productList"
            :key="index"
            @click="getTo(item.id)"
          >
            <van-image v-if="item.image" :src="item.image.url"></van-image>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
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
    this.getList();
  },
  methods: {
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    },
    getList(){
    this.$http
         .categorySolutionTypeList({ parent_name: "列表信息" })
         .then(  (res) =>  {
          //  console.log("列表信息",res)
          //  this.list=res.data.list
          const data=res.data.list.find((item)=>item.name=='产品中心')
          this.productList = data?data.solution_list:[];
         });
  }
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
