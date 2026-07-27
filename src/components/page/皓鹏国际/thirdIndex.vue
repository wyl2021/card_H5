<template>
  <div class="p-page">

     <headerContent
     :isHeader="false"
      width="100%"
      height="40px"
      id="yqtz"
    >
      <template #content>
        <div class="tzBox">
          <!--  :style="{ backgroundImage: 'url(' + getUrl(item.image.url) + ')' }" -->
          <!-- :style="{ backgroundImage: `url(${(item.image.url).replace(/ /g, '%20').replace(/\(/g, '%28')}).replace(/\(/g, '%29')` }" -->
          <div

            class="tzItem"
            :style="{ backgroundImage: 'url(' + getUrl(item.image.url) + ')' }"
            v-for="(item, index) in list"
            :key="index"
          >
            <div class="name">{{ item.name}}</div>
          </div>
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
          const data=res.data.list.find((item)=>item.name=='产品服务')
          this.list = data?data.solution_list:[];
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
  .tzBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 8px;
  row-gap: 8px;
  margin-top: 10px;
  .tzItem {
    border-radius: 4px;
    width: 155px;
    height: 112px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-size: 100% 100%;
    .name {
      background-color: rgba($color: #000, $alpha: 0.3);
      text-align: center;
      color: #ffffff;
      padding: 4px 0;
      font-size: 14px;
    }
  }
}
</style>
