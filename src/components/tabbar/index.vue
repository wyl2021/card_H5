<template>
  <div>
    <van-tabbar v-model="active" @change="changeTab" :active-color="configTabs.activeColor" :inactive-color="configTabs.inactiveColor">
      <van-tabbar-item v-for="(i,n) in configTabs.list" :key="n">
        {{ i.text }}
        <template #icon="props">
          <img :src="props.active ? i.activeIcon : i.inactiveIcon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  data() {
    return {
      active: 0,
      configTabs: {
        activeColor:'#D72426',
        inactiveColor:'#333',
        list: [
          {
            text: '名片',
            activeIcon: require('@/assets/tempfile/img/tabbar/home1.png'),
            inactiveIcon: require('@/assets/tempfile/img/tabbar/home.png'),
          },
          {
            text: '产品',
            activeIcon: require('@/assets/tempfile/img/tabbar/product1.png'),
            inactiveIcon: require('@/assets/tempfile/img/tabbar/product.png'),
          },
          {
            text: '市场',
            activeIcon: require('@/assets/tempfile/img/tabbar/make1.png'),
            inactiveIcon: require('@/assets/tempfile/img/tabbar/make.png'),
          },
          {
            text: '风采',
            activeIcon: require('@/assets/tempfile/img/tabbar/elegance1.png'),
            inactiveIcon: require('@/assets/tempfile/img/tabbar/elegance.png'),
          },
        ]
      }
    }
  },
  computed:{
    ...mapGetters(['tarbbarActive'])
  },
  methods:{
    ...mapMutations('routeAddr',['setActive']),
    changeTab(e){
      this.setActive(e)
    }
  }
}
</script>

<style>
</style>