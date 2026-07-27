<template>
  <div class="p-page">
    <van-image :src="IMG + 'nglxy/image/zyjx.png'"></van-image>
    <div class="m-t-10"></div>
    <div class="content">
      <div
        :key="index"
        class="jxBox"
        v-for="(item, index) in getContent('专业教学')"
        @click="getTo(item.id)"
      >
        <div class="jsIcon">
          {{ index < 9 ? "0" + (index + 1) : index + 1 }}
        </div>
        <div class="jsTitle">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[]
    }

  },
  created(){
    this.getList()
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
.jxBox {
  margin: 5px 0;
  border: 1px solid rgba($color: #004098, $alpha: 0.3);
padding: 8px;
  display: flex;
  align-content: center;
  border-radius: 4px;
  .jsIcon {
    background-image: url("https://card-img1.oss-cn-beijing.aliyuncs.com/nglxy/icon/jxImage.png");
    width: 20px;
    height: 18px;
    background-size: 100% 100%;
    padding: 4px 0;
    text-align: center;
    color: #fff;
    font-size: 10px;
    margin-right: 10px;
  }
  .jsTitle {
    color: #333;
    font-size: 14px;
  }
}

.m-t-10{
  margin-top: 10px;
}
.content{
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
}
</style>
