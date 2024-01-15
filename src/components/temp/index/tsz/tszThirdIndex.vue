<!-- 第二个页面 -->
<template>
    <div style="margin: 10px 16px;padding-top: 12px;">
      <div class="p-all-12 bg-fff br-8 mb-12">
        <router-link
            :to="{
              path: '/xlsl',
              name: 'xlsl',
            }"
          >
            <img class="xlsl" src="@/assets/tempfile/tsz/zixun/xlsl.png">
        </router-link>
        <router-link
            :to="{
              path: '/xlsl',
              name: 'xlsl',
            }"
          >
            <img class="xlsl" src="@/assets/tempfile/tsz/zixun/zhnh.png">
        </router-link>
        <router-link
            :to="{
              path: '/xlsl',
              name: 'xlsl',
            }"
          >
            <img class="xlsl" src="@/assets/tempfile/tsz/zixun/hyfc.png">
        </router-link>
        <router-link
            :to="{
              path: '/xlsl',
              name: 'xlsl',
            }"
          >
            <img class="xlsl" src="@/assets/tempfile/tsz/zixun/bpbtsz.png">
        </router-link>
    </div>
      <div class="h-50"></div>
      <tabbar :active="1"></tabbar>
    </div>
  </template>
  
  <script>
  import tabbar from "@/components/tabbar/index.vue";
  export default {
    components: {
      tabbar,
    },
    data() {
      return {
        
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>

  .xlsl{
        width:100%;
        height:151px;
        margin-top: 10px;
    }
  </style>
  