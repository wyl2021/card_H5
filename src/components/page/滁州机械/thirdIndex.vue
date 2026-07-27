<template>
  <div class="p-page">
  <headerContent
      :isHeader="false"
      >
    <template #content>
      <listBox
          v-for="(item, index) in data"
          :key="index"
          :name="item.name"
          :describe="item.describe"
          :imageUrl="{
            url: item.image.url,
            width: '140px',
            columWidth: '169px',
            height: '120px',
          }"
          :type="1"
          :pageType="3"
          :id="item.id"
          button="了解更多"
          :class="{ 'm-t-10': index != 0 }"
        ></listBox>
      </template>

    </headerContent>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:[]
    };
  },
  created() {
this.getList()

  },
  methods: {
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    },
    // 内容信息
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {s
          const list=res.data.list.find((item) => item.name == '专业设置')
          this.data = list?list.solution_list:[];
        });
    },



  },
};
</script>

<style lang="scss" scoped>
/deep/ .listButton{
  background-color: rgba($color: #316895, $alpha: 0.1) !important;
  border: 1px solid #316895 !important;
  color: #316895 !important;
}
.m-t-10{
  margin-top: 10px;
}
</style>
