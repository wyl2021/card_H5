<template>
  <div class="w-100 h-100">
    <iframe  id="iframe"  src="https://akumpapi.oa00.com/files/nbkazs.html" frameborder="0"></iframe>
  
    <!-- <iframe src="https://www.nbou.cn/"></iframe> -->
    <!--  -->
        <!-- <div class="xyBox">
          <div
            v-for="(item, index) in getContent('杰出校友')"
            @click="getTo(item.id)"
            :key="index"
            class="xyItem"
          >
        <van-image v-if="item.image" :src="item.image.url"></van-image>
        <div class="name">{{ item.name }}</div>
        </div>
        </div> -->

  </div>
</template>

<script>
export default {
  data(){
    return{
      data:[],
    }
  },
  created(){

    this.getList()

  },
  methods:{

    getWeb() {
      uni.navigateTo({
        // 跳回小程序的路径
        url:
          "/pages/index/web" ,
        // 以下回调方法可以不要，如果需要调试的时候可以加上
        success: function (res) {

        },
        fail: function (res) {

        },
        complete: function (res) {

        },
      });

    },
    getTo(id){
      this.$router.push({
        path:'/contentInfo',
        // query: { id: id },
      })　
    },
    getList(){
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          // console.log("列表信息", res);
          this.data = res.data.list;

        });
    },
    getContent(name){
     const list= this.data.find((item)=>item.name==name)

      return list?list.solution_list:[]
    }
  }

}
</script>

<style lang="scss" scoped>
.xyBox{
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .xyItem{
    background-color: #fff;
    border-radius: 4px;
    padding-bottom: 5px;
  }
  .name{
    text-align: center;
    font-size: 12px;
    color: #333;
  }
}
#iframe{
  width: 100%;
  height: 100%;

}
.w-100{
  width: 100%;

}
.h-100{
  height: 95vh;
}
</style>
