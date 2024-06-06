
<template>
  <div class="d-flex title " :style="{'justify-content':float,'color':color}"  @click="getTo">
      {{ title }}
      <van-icon :name="icon" :size="sizeIcon"></van-icon>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:'更多'
    },
    float:{
      type:String,
      default:'flex-end'
    },
    icon:{
      type:String,
      default:'arrow'
    },
    path:{
      type:String,
      default:''
    },
    sizeIcon:{
      type:String,
      default:'12px'
    },
    color:{
      type:String,
      default:'#000000'
    }
  },
  data(){
    return{

    }
  },
  methods:{
    getTo(){
      this.$router.push({
        path:this.path?this.path:"/thirdIndex",
        // query: { id: id },
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-size:12px;
  color:#000000;

}
</style>
