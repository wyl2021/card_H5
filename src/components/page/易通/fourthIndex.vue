<template>
 <div style="padding:10px 14px">
  <div style="height:12px"></div>
  <div
        v-for="item in list"
        class="alBox"
        :style="{ backgroundImage: `url(${getUrl(item.image.url)})` }"
        @click="$router.push({ path: '/categorySolutionInfo', query: { id: item.id } })"
      >
        <div class="alBg">
          <span class="al-name">{{ item.name }}</span>
          <span class="al-describe">{{ item.describe }}</span>
          <img :src="IMG + 'yt/icon/right2.png'" />
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
    getUrl(str) {
      return "'" + str + "'";
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {

          const data = res.data.list.find((item) => item.name == "案例展示");
          this.list = data ? data.solution_list : [];
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.alBox {
  margin: 10px 0;
  background-size: cover; /* 让背景图片等比例铺满 */
  background-position: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden; /* 防止子元素溢出 */
  height: 160px;
}

.alBg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  height: 50%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 8px 8px;
}

.al-name {
  color: #ffffff;
  font-size: 15px;
}

.al-describe {
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
}

.alBg img {
  width: 29px;
  margin-right: auto; /* 让图片靠右对齐 */
  align-self: center;
}

</style>
