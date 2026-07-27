<template>
  <div class="p-page">
     <!-- 园区投资 -->
     <headerContent
     :isHeader="false"
      width="100%"
      height="40px"
      id="yqtz"
    >
      <template #content>
        <listBox
          v-for="(item, index) in list"
          :key="index"
          v-if="item "
          :type="1"
          :imageUrl="{
            url: item.image.url,
            width: '130px',
            columWidth: '60%',
            height: '96px',
          }"
          :name="item.name"
          buttonColor="#E6EFF6"
          :describe="item.describe"
          :pageType="3"
          :id="item.id"
          button="详情"
          :class="{ 'm-t-10': index != 0 }"
        >
        </listBox>
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
          const data=res.data.list.find((item)=>item.name=='招商载体')
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
</style>
