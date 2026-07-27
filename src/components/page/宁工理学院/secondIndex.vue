<template>
  <div class="contentBox m-t-10">
    <listBox
      v-for="(item, index) in getContent('学工动态')"

      :key="index"
      :type="1"
      :imageUrl="{
        url: item.image.url,
        width: '140px',
        height: '96px',
      }"
      :name="item.name"
      button="查看详情"
      buttonColor="#004098"
      :pageType="3"
      :id="item.id"
      class="m-t-10"
    ></listBox>
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
          this.list = item.data.list;
        });
    },
    getContent(name) {
      const data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .f-colum{
  justify-content: space-between;
}
.m-t-10{
  margin-top:10px;
}
</style>
