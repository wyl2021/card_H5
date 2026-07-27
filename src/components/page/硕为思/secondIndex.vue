<template>
  <div class="p-page">
    <div
            v-for="(item2, index2) in list"
            :style="{
              'background-image': 'url(' + getUrl(item2.image.url) + ')',
            }"
            class="alImage"
            @click="getTo(item2.id)"
            :key="index2"
          >
            <div class="alName">{{ item2.name }}</div>
          </div>
  </div>
</template>

<script>
import swsContent from '../../content/swsContent.vue'
export default {
  components: { swsContent },
data(){
  return{
    list:[]
  }
},
created(){
  this.getList()
},
methods:{
  getTo(id){
    this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
  },
  getUrl(str) {
      return "'" + str + "'";
    },
  getList(){
    this.$http
         .categorySolutionTypeList({ parent_name: "列表信息" })
         .then(  (res) =>  {
          //  console.log("列表信息",res)
          //  this.list=res.data.list
          const data=res.data.list.find((item)=>item.name=='案例')

          this.list=data?data.solution_list:[]
         });
  }
}
}
</script>

<style lang="scss" scoped>

  .alImage {
  width: 100%;
  height: 180px;
  background-size: 100% 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.alName {
  color: #fff;
  padding: 8px;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.4);
  font-size: 12px;
  border-radius: 8px;
}
</style>
