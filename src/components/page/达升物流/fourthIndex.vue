<template>
  <div  class="p-page">
    <dsContent :list="list" :nameList="['产品','我们的服务']"></dsContent>
    <div class="h-40"></div>
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
          this.list=res.data.list
         });
  },

}
}
</script>

<style lang="scss" scoped>
    .h-40{
      height: 40px;
    }
</style>
