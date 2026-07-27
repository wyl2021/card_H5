<template>
  <div class="contentBox">
    <div
      class="jyBox"
      v-for="(item, index) in list"
      :key="index"
      :style="{ backgroundImage: 'url(' + getUrl(item.image.url) + ')' }"
      :class="{'m-t-10':index!=0}"
    >
      <div class="jyItem">
        <div class="name">{{ item.name }}</div>
        <div class="describe">{{ item.describe }}</div>
      </div>
    </div>
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
    getTo(id) {
      this.$router.push({
        path: "/categorySolutionInfo",
        query: { id: id },
      });
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          //  console.log("列表信息",res)
          const data = res.data.list.find((item) => item.name == "招生就业");
          this.list = data ? data.solution_list : [];
        });
    },
    getUrl(str) {
      return "'" + str + "'";
    },
  },
};
</script>

<style lang="scss" scoped>
.jyBox {
  width: 100%;
  height: 160px;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .jyItem {
    background-color: rgba($color: #000000, $alpha: 0.3);
    width: 100%;
    height: 75px;
    padding: 8px 10px 10px 10px;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .name {
      color: #fff;
      font-size: 14px;
    }
    .describe {
      color: #fff;
      font-size: 12px;
      font-weight: 200;
      text-align: right;
    }
  }
}
.m-t-10 {
  margin-top: 10px;
}
</style>
