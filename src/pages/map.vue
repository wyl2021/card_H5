<template>
  <div>
    <TXMap mapWidth="100vh" mapHeight="100vh" :address="$route.query.address" :name="$route.query.name" :isTap="Boolean($route.query.isTap)"></TXMap>
  </div>
</template>

<script>
import TXMap from '../components/temp/TXMap.vue';
export default {
  components:{
    TXMap
  },
    methods:{

    }
}
</script>

<style>

</style>
