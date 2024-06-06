<template>
  <div class="title" :style="{color:color,'font-size':fontSize,}">{{ title }}</div>
</template>

<script>
export default {
      props:{
        title:{
          type:String,
          default:''
        },
        color:{
          type:String,
          default:'#484848'
        },
        fontSize:{
          type:String,
          default:'12px'
        }
      }
}
</script>

<style lang="scss" scoped>
    .title{
      margin: 10px 0;

    }
</style>
