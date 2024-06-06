<template>
  <div class="p-page">
    <waContent name="院士工作站" title="院士工作站" :list="list"></waContent>
     <waContent name="名师风采" title="名师风采" :list="list"></waContent>
    <waContent name="专业建设" title="专业建设" :list="list"></waContent>
    <div class="h-50"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((item) => {
          console.log(item);
          this.list = item.data.list;
        });
    },
  },
};
</script>

<style>
</style>
