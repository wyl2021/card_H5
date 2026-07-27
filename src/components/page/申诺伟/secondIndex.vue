<template>
  <div style="margin: 12px 18px">
    <div style="height:2px"></div>
    <div
          v-for="item in list"
          class="ptBox"
          :style="{ backgroundImage: `url(${getUrl(item.image.url)})` }"
          @click="
            $router.push({
              path: '/categorySolutionInfo',
              query: { id: item.id },
            })
          "
        >
          <div class="ptBg">
            <span class="pt-name">{{ item.name }}</span>
            <div class="pt-line"></div>
            <span class="pt-describe">{{ item.describe }}</span>

          </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      IMG: this.IMG,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getUrl(str){
      return "'"+str+"'";
    },
    getList() {
      this.$http
        .categorySolutionTypeList({
          parent_name: "列表信息",
        })
        .then((res) => {
          // this.productList = res.data.list[0].solution_list;
          const rData = res.data.list.find((item) => item.name === "平台系统");
          this.list = rData ? rData.solution_list : [];
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.ptBox {
  margin: 10px 0;
  background-size: cover; /* 让背景图片等比例铺满 */
  background-position: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden; /* 防止子元素溢出 */
  height: 160px;
}

.ptBg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  height:100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 8px 8px;
}

.pt-name {
  color: #ffffff;
  font-size: 15px;
}
.pt-line{
  width: 108px;
height: 2px;
background: rgba(255,255,255,0.5);
border-radius: 2px;
margin:4px 0 6px 0;
}
.pt-describe {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
}
</style>
