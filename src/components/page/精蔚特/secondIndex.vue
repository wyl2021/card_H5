<template>
  <div >
    <div class="cpBox contentBox">
            <div class="d-flex name">
              <div class="line"></div>
              样品加工
            </div>
            <van-image  @click="getTo()" :src="IMG+'jwt/image/ypjg.png'"></van-image>
          </div>
          <div class="cpBox contentBox">
            <div class="d-flex name">
              <div class="line"></div>
              视频展示
            </div>
           <video controls width="100%" height="180">
            <source :src="IMG+'jwt/video.mp4'" type="video/mp4">
           </video>
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

  },
  methods:{
  getTo(){
    this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: '02c90eea-1819-11ef-a395-00163e237fe6' },
      })
  },

  }
}
</script>

<style lang="scss" scoped>
.cpBox{
  .name {
    align-items: center;
    font-size: 14px;
    color: #333333;
    font-weight: 400;
    margin-bottom: 10px;
    .line {
      width: 3px;
      height: 20px;
      margin-right: 5px;
      background-color: #ff0000;
    }
  }
}
</style>
