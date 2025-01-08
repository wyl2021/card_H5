import Vue from 'vue'
import Router from 'vue-router'
import tabbar from "../components/tabbar/tabbar"
Vue.use(Router)
console.log("router",localStorage.getItem("id"))
// const tabTitle =tabbar.data[`${localStorage.getItem("id")}`]
// console.log(tabTitle)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/pages/index.vue'),
      meta: { showTabbar: true, index: 0, title: '名片' },
      // tabTitle.list[0]?tabTitle.list[0].text :
      children: [

      ]
    },
    //
    {
      path: '/thirdIndex',
      name: 'thirdIndex',
      component: () => import('@/pages/thirdIndex.vue'),
      meta: { showTabbar: true, index: 1, title:  '名片'},
      // tabTitle.list[1]?tabTitle.list[1].text :
    },
    {
      path: '/secondIndex',
      name: 'secondIndex',
      component: () => import('@/pages/secondIndex.vue'),
      meta: { showTabbar: true, index: 2, title:  '名片' },
      // tabTitle.list[2]?tabTitle.list[2].text :
    },
    {
      path: '/fourthIndex',
      name: 'fourthIndex',
      component: () => import('@/pages/fourthIndex.vue'),
      meta: { showTabbar: true, index: 3, title:'名片' },
      // tabTitle.list[3]?tabTitle.list[3].text :

    },
    {
      path: '/solutionInfo',
      name: 'solutionInfo',
      component: () => import('@/pages/solutionInfo.vue'),
      meta: { showTabbar: false, title: '详情' },
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/pages/map.vue'),
      meta: { showTabbar: false, title: '地图' },
    },
    {
      path: '/fiveIndex',
      name: 'fiveIndex',
      component: () => import('@/pages/fiveIndex.vue'),
      meta: { showTabbar: true, index: 4, title:  '名片' },
      // tabTitle.list[4]?tabTitle.list[4].text :
    },
    {
      path: '/categorySolutionInfo',
      name: 'categorySolutionInfo',
      component: () => import('@/pages/categorySolutionInfo.vue'),
      meta: { showTabbar: false, title: '详情'},
    },
    {
      path: '/contentInfo',
      name: 'contentInfo',
      component: () => import('@/pages/contentInfo.vue'),
      meta: { showTabbar: false, title: '详情' },
    }
  ]
})

router.afterEach((to, from) => {
  // if(to.meta.title){
    // console.log(to)
  document.title = to.query.title || to.meta.title  || '名片'
  // }
  // next()
  // 动态设置标题

})
export default router
