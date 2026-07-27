<template>
  <div class="contentBox">
    <div  v-for="(item,index) in list">
        <van-image :src="item.image.url" v-if="item.image" height="180px" :key="index" width="100%"></van-image>
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
  getList(){
    this.$http
         .categorySolutionTypeList({ parent_name: "列表信息" })
         .then(  (res) =>  {
          //  console.log("列表信息",res)
          //  this.list=res.data.list
          const data=res.data.list.find((item)=>item.name=='应用案例')
          this.list = data?data.solution_list:[];
         });
  }
}
}
</script>

<style lang="scss" scoped>
.alBox{
  .name{
    color: #333333;
  font-size: 14px;
  margin: 5px 0;
  }
}
</style>
