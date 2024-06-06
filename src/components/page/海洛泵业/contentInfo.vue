<template>
  <div>
    <img :src="IMG + 'hl/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->

      <img class="logo" :src="IMG + 'hl/image/logo.png'" />
      <div class="companyName">宁波海洛泵业科技有限公司</div>
      <van-image :src="IMG + 'hl/image/gsjsBg.png'" width="100%" height="160px"  />
      <div v-for="item in text.split(' ')" class="textStyle">{{ item }}</div>
        <div
          :style="{
            backgroundImage: 'url(' + getUrl(item2.image.url) + ')',
          }"
          v-for="(item2, index2) in getContent('公司简介')"
          :key="index2"
          class="introduction"
        >
          {{ item2.name }}
        </div>
      <div class="h-10"></div>
    </div>
    <div class="m-x-12">
    <hlContent :list="list" name="优势"></hlContent>
    <hlContent :list="list" name="内容荣誉资质"></hlContent>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      IMG: this.IMG,
      list: [],
      text: "宁波海洛泵业科技有限公司是一家专业从事各种专业泵及机械设备的研发、生产、销售、技术咨询的工贸公司。 公司主营各种精密液体计量泵和适用于不同需求的灌装设备。公司拥有计量泵的制造与应用的核心技术，在业内处于领先地位，生产的计量泵广泛用于食品、化妆品、医药、包装等行业，因其高精度、高耐用度、高性能，从而有效地为用户节省物料，保证用户生产出质量稳定可靠的产品。公司同时自主研发机械设备，并提供相关技术服务及技术咨询。公司还可根据不同的客户需求，为客户量身定制灌装设备、电池生产设备及其他各种泵，比如隔膜泵等。",

    };
  },
  created() {
    this.getList();
  },

  methods: {
    getUrl(str) {
      return "'" + str + "'";
    },
    getContent(name) {
      const data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
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

<style lang="scss" scoped>
.m-x-12{
  margin:  0 12px;
}
.h-10 {
  height: 10px;
}
.m-x{
  margin: 12px 16px ;
}
.logoBg {
  // position: fixed;
  top: 0;
  width: 100%;
  height: 206px;
}
.content {
  z-index: 1;
  margin: -40px 0 0 0 !important;
  padding: 0 28px;
  position: relative;
  border-start-start-radius: 20px;
}
.logo {
  width: 50px;
  height: 50px;
  margin: -50px 0 0 10px;
}
.box {
  width: 100%;
  height: 200px;
  background-color: beige;
  margin-top: 12px;
}
.name{
  font-size: 12px;
  color: #355DA8;
  margin: 8px 0 ;
}
.companyName {
  font-size: 13px;
  margin: 6px 0 8px 10px;
  color: #355da8;
  font-weight: 500;
}
.introduction {
  width: 100%;
  height: 33px;
  padding: 8px 44px;
  background-size: 100% 100%;
  color: #333;
  font-size: 12px;
  margin-top: 7px;
}
</style>
