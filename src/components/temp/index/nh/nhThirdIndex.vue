<!-- 第二个页面 -->
<template>
  <div class="svgIcon">

   <img class="hh2" src="@/assets/tempfile/nh/image/1.png"/>
   <div class="hh3">轻量防撞</div>

 <img class="hh2" src="@/assets/tempfile/nh/image/2.png"/>
 <div class="hh3">高强防撞</div>

 <img class="hh2" src="@/assets/tempfile/nh/image/3.png"/>
 <div class="hh3">前门系列</div>

 <img class="hh2" src="@/assets/tempfile/nh/image/4.png"/>
 <div class="hh3">包胶</div>

    <div class="h-50"></div>
    <tabbar :active="1"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
// import VueDplayer from "vue-dplayer";
export default {
  components: {
    tabbar,
    // VueDplayer,
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="scss">
.svgIcon {
    margin: 10px 16px;
    text-align: center;
    .hh1{
      display:flex;
      height:auto;
      width:auto;
      max-width: 30%;
      max-height: 30%;
      justify-content: center;
    }
    .hh2{
      display:flex;
      height:auto;
      width:auto;
      max-width: 100%;
      max-height: 100%;
      justify-content: center;

    }
    .hh3{
      height:auto;
      width:auto;
      font-size:14px;
      margin-top: 10px;
      margin-bottom: 10px;
    }


  }

</style>
