<!-- 第三个页面 -->
<template>
  <div>
    <component :is="currentComponent"></component>

  </div>
</template>

<script>
import page from '@/components/componentsAll/page.js'
export default {
  components: {


  },

  data() {
    return {
      id:"",
      isPage:true
    };
  },
  computed:{
    currentComponent(){
      // console.log(page[localStorage.getItem("id")])
      return page[localStorage.getItem("id")].info
    }
  },
  created(){
    console.log(localStorage.getItem("id"))
    // this.id=localStorage.getItem("id")
    // this.isPage=this.id=='aj' || this.id=='nh' || this.id=='jh' || this.id=='gj' || this.id=='tsz' || this.id=='ym'
  }
};
</script>

<style lang="scss" >



</style>
