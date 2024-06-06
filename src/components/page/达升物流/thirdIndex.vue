<template>
  <div>
    <div class="contentBox" v-for="(item,index) in list.solution_list" :key="index" @click="getTo(item.id)">
      <p class="name">{{ item.name }}</p>
      <van-image v-if="item.image" :src="item.image.url" class="image"></van-image>
      <div class="d-flex justify-between">
        <p class="describe">{{ item.describe }}</p>
        <more
            title="查看更多"
            icon="arrow"
            path="/contentInfo"
            color="#666666"
          ></more>
      </div>
    </div>

  </div>
</template>

<script>
export default {
data(){
  return{
    list:[]
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
         .then(  (res) =>  {
          //  console.log("列表信息",res)
          //  this.list=res.data.list
          this.list=res.data.list.find((item)=>item.name=='资讯')
         });
  }
}
}
</script>

<style lang="scss" scoped>
.justify-between{
  justify-content: space-between;
}
  .name{
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }
  .describe{
    font-size: 12px;
    color: #666;

  }
  .image{
    margin: 10px 0;
  }
</style>
