<template>
  <div class="p-page">
    <van-image class="d-black" :src="item.image.url" v-for="(item,index) in list.solution_list" :key="index"></van-image>
    <div class="h-60"></div>
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
          this.list=res.data.list.find((item)=>item.name=='PLOUTO')
         });
  }
}
}
</script>

<style lang="scss" scoped>
.h-60{
  height: 60px;
}
  .d-black{
    display: block;
  }
</style>
