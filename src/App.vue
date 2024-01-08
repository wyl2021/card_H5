<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  padding: 0px;
  margin: 0px;
  background-color: #F6F6F6;
  min-height: 100vh
}
html {
  min-height: 100vh;
}
body{
  min-height: 100vh;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
