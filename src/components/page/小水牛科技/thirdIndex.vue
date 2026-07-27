<template>
  <div class="contentBox">
    <div
          v-for="(item, index) in list"

          class="zyBox"
          :style="{ backgroundImage: 'url(' + getUrl(item.image.url) + ')' }"
        >
          <div class="zyItem">
            <div class="name">{{ item.name }}</div>
            <div class="describe">{{ item.describe }}</div>
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
          const data=res.data.list.find((item)=>item.name=='产品方案')
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
.zyBox{
  width: 319px;
  height: 156px;
  background-size: 100% 100%;
  margin-bottom:5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .zyItem{
    background-color: rgba($color: #000000, $alpha: 0.3);
    width: 100%;
    padding:10px 8px;
    height: 85px;
     border-radius: 0 0 8px 8px;
    .name{
      color:#FFFFFF;
      font-size: 14px;
      margin-bottom: 6px;
    }
    .describe{
      color:#FFFFFF;
      font-size: 12px;
      font-weight: 300;
    }
  }
}
</style>
