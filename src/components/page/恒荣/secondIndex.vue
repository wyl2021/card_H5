<template>
  <div >
        <div class="cp-box"  v-for="(item, index) in list">
        <listBox


          :key="index"
          :type="1"
          :imageUrl="{
            url: item.image.url,
            width: '130px',
            columWidth: '200px',
          }"
          :name="item.name"
          :describe="item.describe"
          button="查看详情"
          buttonColor="#482F7D"
          :pageType="3"
          :id="item.id"
          class="m-t-10"
        >
        </listBox>
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
         .categorySolutionTypeList({ parent_name: "列表内容" })
         .then(  (res) =>  {
          //  console.log("列表信息",res)
          //  this.list=res.data.list
          const data=res.data.list.find((item)=>item.name=='产品介绍')
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
.cp-box{
  background: #fff;
  border-radius: 8px;
  padding:6px 14px 10px 14px ;
  margin: 12px 14px;
}
</style>
