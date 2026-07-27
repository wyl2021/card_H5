<template>
  <div>
    <div
          class="fwBox"
          v-if="item.image"
          :style="{ 'background-image': 'url(' + getUrl(item.image.url) + ')' }"
          v-for="(item, index) in list"
          :key="index"
          @click="getTo(item.id)"
        >
          <div class="fwItem">
            <div class="name">{{ item.name }}</div>
            <div class="nameEn">{{ item.describe }}</div>
            <van-image width="29px" height="5px" :src="IMG + 'ddzn/icon/right.png'"></van-image>
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
  getUrl(str){
        return "'" +str +"'"
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
          const data=res.data.list.find((item)=>item.name=='服务项目')
          this.list = data?data.solution_list:[];
         });
  }
}
}
</script>

<style lang="scss" scoped>

.fwBox {
  width: 343px;
  height: 174px;
  background-size: 100% 100%;
  display: flex;
  border-radius: 8px;
  justify-content: flex-end;
  flex-direction: column;
  margin: 12px 16px;
  .fwItem {
    height: 63px;
    padding: 12px;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    border-end-end-radius: 9px;
    border-end-start-radius: 9px;

    .name {
      color: #ffffff;
      font-size: 15px;
      font-weight: 500;
    }

    .nameEn {
      width: 290px;
      color: #ffffff;
      font-size: 10px;
      font-weight: 400;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      margin-bottom: 5px;
    }
  }
}
</style>
