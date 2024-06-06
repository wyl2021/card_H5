<!-- 第四个页面 -->
<template>
  <div >
    <component :is="currentComponent"></component>
    <div class="h-50"></div>
  </div>
</template>

<script>
import page from '@/components/componentsAll/page.js'
export default {
  components: {

},
  data() {
    return {
      id:'',
      isPage:true
    };
  },
  computed:{
    currentComponent(){
      console.log(page)
      return page[localStorage.getItem("id")][3]
    }
  },
  created(){
    console.log(localStorage.getItem("id"))
    this.id=localStorage.getItem("id")
    this.isPage=this.id=='aj' || this.id=='nh' || this.id=='jh' || this.id=='gj' || this.id=='tsz' || this.id=='ym'
  }
};
</script>

<style lang="scss" scoped>

</style>
