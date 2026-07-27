<template>
  <div>
    <img :src="IMG + 'xykfd/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->

      <img class="logo" :src="IMG + 'xykfd/image/logo.png'" />

      <div class="companyName">浙江雄鹰科菲帝科技股份有限公司</div>
      <div class="textStyle">
        {{ text }}
      </div>
      <van-image
        :src="IMG + 'xykfd/image/jjBg2.png'"
        class="m-x-10"
      ></van-image>
      <div
        class="textStyle"
        v-for="(item, index) in text1.split('。')"
        :key="index"
        style="text-indent: 0"
      >
        {{ item + "。" }}
      </div>
      <van-image
        :src="IMG + 'xykfd/image/jjBg3.png'"
        class="m-x-10"
      ></van-image>
    </div>
    <div class="m-x">
      <!-- 厂荣厂貌 -->
      <headerContent
        headerImg="xykfd/headerImage/crcg.png"
        width="133px"
        height="48px"
      >
        <template #content>
          <div
            v-for="(item, index) in getContent('厂荣厂貌')"
            class="cmBox"
            :key="index"
            :style="'background-image:url(' + getUrl(item.image.url) + ')'"
          >
            <div class="name">{{ item.name }}</div>
          </div>
        </template>
      </headerContent>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IMG: this.IMG,
      list: [],
      text: "浙江雄鹰科菲帝科技股份有限公司（以下简称：雄鹰股份）成立于 2015 年，前身宁波雄鹰检测设备有限公司成立于 2010 年，雄鹰股份拥有 30 项自主技术专利（含发明专利 4项、软件著作权 5套、实用新型 16项、外观专利 4 项，科学技术成果 1 项），注册商标多个( 其中 XY、阿托卡、ATOKA 商标知名度极高 )。",
      text1:
        "2015 年 08 月在中国宁波市成立雄鹰股份。2016 年 05 月在意大利布雷西亚设立研发中心。2018 年 03 月通过中国人民政府一带一路牵线，成功与意大利布雷西亚大学科研公司 Gexcel 签订项目及技术合作协议。2019 年通过国家认定的宁波市智团项目。2020 年被认定为国家高新技术企业、区级工程技术中心。主营产品：雄鹰股份研发生产销售的三坐标小尺寸系列、三坐标中大型尺寸系列、高速尺寸闪测仪、全自动龙门影像闪测仪、自动移动平台影像闪测仪、轮廓仪等尺寸检测设备被行业巨头高度认可",
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

          this.list = item.data.list;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.m-x {
  margin: 12px 16px;
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
// .name {
//   font-size: 12px;
//   color: #355da8;
//   margin: 8px 0;
// }
.companyName {
  font-size: 13px;
  margin: 6px 0 8px 10px;
  color: #f44d00;
  font-weight: 500;
}

.cnBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .cnItem {
    background-color: rgba($color: #f44d00, $alpha: 0.05);
    border-radius: 8px;
    padding: 13px 12px;
    .image {
      display: flex;
      margin: auto;
    }
    .name {
      font-size: 14px;
      color: #333;
      margin: 5px 0;
      text-align: center;
    }
    .describe {
      font-size: 9px;
      color: #666666;
      text-align: center;
    }
  }
}
.cmBox {
  width: 319px;
  height: 160px;
  background-size: 100% 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  .name {
    background-color: rgba($color: #000000, $alpha: 0.6);
    border-radius: 0 0 8px 8px;
    text-align: center;
    padding: 10px 0;
    font-size: 14px;
    color: #ffffff;
  }
}
</style>
