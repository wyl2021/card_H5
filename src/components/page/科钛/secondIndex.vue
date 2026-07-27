<template>
  <div class="contentBox">
    <div  v-for="(item,index) in list" class="alBox">
        <div class="name">{{ item.name }}</div>
        <video :poster="item.image.url" :src="item.describe" width="100% " height="180px"></video>
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
