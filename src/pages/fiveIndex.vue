<template>
  <div>
    <component :is="currentComponent"></component>
    <div class="h-50"></div>
  </div>
</template>

<script>
import page from '@/components/componentsAll/page.js'
export default {
  computed:{
    currentComponent(){
      console.log(page)
      return page[localStorage.getItem("id")][4]
    }
  },
}
</script>

<style>

</style>
