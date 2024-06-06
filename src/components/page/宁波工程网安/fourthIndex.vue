<template>
  <div class="p-page">
    <waContent name="网安学院招生" title="网安学院招生" :list="list"></waContent>
    <waContent name="网安学院就业实习" title="网安学院就业实习" :list="list"></waContent>
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
