<template>
  <div class="contentBox">
    <div
          class="d-flex cjBox"
          v-for="(item, index) in list"
          @click="getTo(item.id)"
          :key="index"
        >
          <van-image
            v-if="item.image"
            :src="item.image.url"
            width="148px"
            height="116px"
          ></van-image>
          <div class="w-55">
            <div class="name">
              <div class="round"></div>
              {{ item.name }}
            </div>
            <div class="describe">{{ item.describe }}</div>
            <div class="cjButton">查看更多</div>
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
          const data=res.data.list.find((item)=>item.name=='应用场景')
          this.list = data?data.solution_list:[];
         });
  }
}
}
</script>

<style lang="scss" scoped>

.cjBox {
  justify-content: space-between;
  margin-top:8px;
  .round {
    background-color: #da9c17;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 4px;
  }
  .w-55 {
    width: 53%;
  }
  .name {
    color: #333;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .describe {
    font-size: 12px;
    color: #999;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .cjButton {
    width: 64px;
    height: 28px;
    padding: 6px 8px;
    border: 1px solid #333;
    font-size: 12px;
    background-color: #fff;
    margin-left:100px;
    border-radius: 8px;
    white-space: nowrap;
  }
}
</style>
