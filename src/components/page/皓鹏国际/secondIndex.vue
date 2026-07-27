<template>
  <div class="p-page">
     <headerContent
     :isHeader="false"
      width="100%"
      height="40px"
      v-for="(item, index) in list"
      :key="index"
    >
      <template #content>
        <div  :key="index">
          <div class="faBox">
            <div class="faLine"></div>
            <div class="faItem">
            <p class="name">{{ item.name }}</p>
            <div class="title">{{ item.describe }}</div>
          </div>
          </div>

          <van-image v-if="item.image" :src="item.image.url"></van-image>
        </div>
      </template>
    </headerContent>

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
  getUrl(str) {
      return "'" + str + "'";
    },
    getContent(name) {

      let data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
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
          const data=res.data.list.find((item)=>item.name=='解决方案')
          this.list = data?data.solution_list:[];
         });
  }
}
}
</script>

<style lang="scss" scoped>
.m-t-10{
  margin-top:10px;
}
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
  /deep/ .van-button__text{
  color:#025EA7
}
.faBox {
  margin-top: 5px;
  display: flex;
  align-items: center;
  .faLine{
      background-color: #6B4092;
      width: 1px;
      height: 58px;

  }
  .faItem {
    margin-left: 8px;

    .name {
      color: #333333;
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: 500;
    }
    .title {
      font-weight: 400;
      color: #666;
      font-size: 12px;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
