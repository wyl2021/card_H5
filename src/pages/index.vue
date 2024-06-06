<template>
  <div >
    <component :is="currentComponent"></component>
    <div class="h-50"></div>
  </div>
</template>

<script>
import page from '../components/componentsAll/page';
// import yxPage from "@/components/page/yxPage.vue"
export default {
  // 按需加载组件进行性能优化
  // components: {
  //   yxPage: () => import("@/components/page/yxPage.vue"),
  // },
  data: () => ({
    show: false,
    id:'',
    // components:{
    //   'wx584bf9e6868bba55':yxPage,

    // }
  }),
  onload(){

  },
  created() {
    // console.log()
  },
  computed:{
    currentComponent(){
      console.log("扫码",localStorage.getItem("id"))

      return page[localStorage.getItem("id")][0]
    }
  },
  methods: {
      getInfo(){
          this.$http.cardUserInfo().then((res)=>{
             console.log("用户登录信息",res)
             this.userInfo=res.data
          })
      },
    getTest() {

    },
  },
};
</script>

<style>
</style>
