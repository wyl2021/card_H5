<template>
  <div class="p-page">
    <waContent   name="宁波工程学院"
      title="宁波工程学院"
      :list="list"></waContent>
    <waContent   name="简介概况"
      title="网络空间安全学院简介"
      :list="list"></waContent>
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
