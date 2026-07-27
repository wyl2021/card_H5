<template>
  <div>
    <!-- <error :show="show"></error> -->
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
    id: '',
    // components:{
    //   'wx584bf9e6868bba55':yxPage,

    // }
  }),
  created() {
    // this.handleShow()
  },
  computed: {
    currentComponent() {
      return page[localStorage.getItem("id")][0]
    }
  },
  methods: {
    // async handleShow() {
    //   try {
    //     const res = await this.$http.categoryCategoryTypeList({ parent_name: "开关" })
    //     console.log('res', res)
    //     const switchShow = res.code === 200 ? res.data.list[0].solution_list[0].describe || true : true
    //     this.show = switchShow !== '开启'
    //     console.log('show', this.show, switchShow, switchShow !== '开启')

    //   } catch (err) {
    //     this.show = true
    //     console.log(err)
    //   }

    // },

  },
};
</script>

<style></style>
