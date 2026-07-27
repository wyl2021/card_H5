<template>
  <div class="p-page">
    <van-image width="100%" height="180px" :src="IMG+'czzy/image/jxBg2.png'"></van-image>
  <headerContent
      :isHeader="false"
      >
    <template #content>
      <div class="jxBox">
          <div
            v-for="(item, index) in data"

            class="jxItem"
            :style="{ backgroundImage: 'url(' + IMG + 'czzy/image/jxBg.png)' }"
          >
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
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
        .then((res) => {

          const list=res.data.list.find((item) => item.name == '教学部门')
          this.data = list?list.solution_list:[];
        });
    },



  },
};
</script>

<style lang="scss" scoped>
.jxBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .jxItem {
    width: 155px;
    height: 40px;
    background-size: 100% 100%;
    padding: 11px 0;
    .name {
      color: #0f4931;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
