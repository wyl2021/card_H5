<template>
  <div class="p-page">
    <!--  -->
        <div class="xyBox">
          <div
            v-for="(item, index) in getContent('杰出校友').solution_list"
            @click="getTo(item.id)"
            :key="index"
            class="xyItem"
          >
        <van-image v-if="item.image" :src="item.image.url"></van-image>
        <div class="name">{{ item.name }}</div>
        </div>
        </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      data:[],
    }
  },
  created(){
    this.getList()
  },
  methods:{
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })　
    },
    getList(){
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          // console.log("列表信息", res);
          this.data = res.data.list;
        });
    },
    getContent(name){
      return this.data.find((item)=>item.name==name)
    }
  }

}
</script>

<style lang="scss" scoped>
.xyBox{
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .xyItem{
    background-color: #fff;
    border-radius: 4px;
    padding-bottom: 5px;
  }
  .name{
    text-align: center;
    font-size: 12px;
    color: #333;
  }
}
</style>
