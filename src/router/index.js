import Vue from 'vue'
import Router from 'vue-router'
import tabbar from "../components/tabbar/tabbar"
Vue.use(Router)

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
      meta: { showTabbar: true, index: 1, title: '名片' },
      // tabTitle.list[1]?tabTitle.list[1].text :
    },
    {
      path: '/secondIndex',
      name: 'secondIndex',
      component: () => import('@/pages/secondIndex.vue'),
      meta: { showTabbar: true, index: 2, title: '名片' },
      // tabTitle.list[2]?tabTitle.list[2].text :
    },
    {
      path: '/fourthIndex',
      name: 'fourthIndex',
      component: () => import('@/pages/fourthIndex.vue'),
      meta: { showTabbar: true, index: 3, title: '名片' },
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
      meta: { showTabbar: true, index: 4, title: '名片' },
      // tabTitle.list[4]?tabTitle.list[4].text :
    },
    {
      path: '/categorySolutionInfo',
      name: 'categorySolutionInfo',
      component: () => import('@/pages/categorySolutionInfo.vue'),
      meta: { showTabbar: false, title: '详情' },
    },
    {
      path: '/contentInfo',
      name: 'contentInfo',
      component: () => import('@/pages/contentInfo.vue'),
      meta: { showTabbar: false, title: '详情' },
    },
    {
      path: '/productInfo',
      name: 'productInfo',
      component: () => import('@/pages/productInfo.vue'),
      meta: { showTabbar: false, title: '详情' },
    },
    {
      path: '/trilateralInfo',
      name: 'trilateralInfo',
      component: () => import('@/pages/trilateralInfo.vue'),
      meta: { showTabbar: false, title: '详情' },
    },
  ]
})

// 动态设置页面标题
router.afterEach((to) => {
  // 优先级：query.title > meta.title > 默认标题
  const title = to.query.title || to.meta.title || '名片'

  // 只有标题变化时才更新，避免不必要的DOM操作
  if (document.title !== title) {
    document.title = title
  }
})

// Tab切换标记
// router.beforeEach((to, from, next) => {
//   // 记录是否来自Tab切换（通过比较meta.index）
//   to.meta.fromTab = from.meta?.index !== undefined
//   next()
// })
export default router
