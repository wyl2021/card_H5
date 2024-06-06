<template>
  <div class="p-page">
      <div class="contentBox">
          <div @click="getTo(item.id)" class="storeImage" v-for="(item,index) in list" :style="{
            backgroundImage: 'url(' + getUrl(item.image.url) + ')',
          }">
              <div class="name">
                <van-image
              :src="IMG + 'dpkx/icon/address2.png'"
              width="16px"
              height="16px"
              class="m-r-10"
            />
                {{ item.name }}</div>
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
    mounted(){

      this.getList()
    },
    methods:{
      getUrl(str) {
      return "'" + str + "'";
    },
      getList(){
        this.$http.categorySolutionTypeList({ parent_name: "列表信息",name:'所有门店'}).then((res)=>{
          this.list=res.data.list[0].solution_list
          console.log(this.list)
        })
      },
      getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    }
    },

}
</script>

<style lang="scss" scoped>
.contentBox{
  margin: 10px 0px !important;
}
  .storeImage {
  width: 100%;
  height: 160px;
  background-size: 100% 100%;
  padding: 12px 0 0 12px;

  margin-bottom: 10px;

  .name {
    display: flex;
    font-size: 14px;
    color: #fff;
    align-items: center;
    height: fit-content;
  }
}
.m-r-10{
  margin-right:10px;
}
</style>
