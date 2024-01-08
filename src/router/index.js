import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/pages/index.vue'),
      children:[

      ]
    },
    {
      path: '/thirdIndex',
      name: 'thirdIndex',
      component: () => import('@/pages/thirdIndex.vue')
    },
    {
      path: '/secondIndex',
      name: 'secondIndex',
      component: () => import('@/pages/secondIndex.vue')
    },
    {
      path: '/fourthIndex',
      name: 'fourthIndex',
      component: () => import('@/pages/fourthIndex.vue')

    },
    {
      path: '/solutionInfo',
      name: 'solutionInfo',
      component: () => import('@/pages/solutionInfo.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/pages/map.vue')
    }
  ]
})
