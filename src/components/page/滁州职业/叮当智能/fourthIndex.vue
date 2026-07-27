<template>
  <div>
    <img :src="IMG + 'ddzn/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->

      <img class="logo" :src="IMG + 'ddzn/image/logo.png'" />
      <div class="companyName">宁波叮当智能科技有限公司</div>
      <div class="textStyle" v-for="(item2,index2) in text.split(' ')" :key="index2">{{ item2 }}</div>
      <div class="h-5"></div>
      <van-image :src="IMG + 'ddzn/image/jsBg.png'" class=""></van-image>
    <div class="h-5"></div>
    </div>
    <div class="m-x">
      <ddznContent ref="content" :list="list" :isFirst="false"></ddznContent>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      IMG: this.IMG,
      list: [],
      text:'宁波叮当智能科技有限公司于2017年创办于宁波，专注于为企业提供研究开发、产学研合作、技术转移、方案设计、产品认证、检测检验、创业孵化、知识产权、科技咨询、项目申报、财务咨询、财务审计、资产评估、科学技术普及等“一站式”科创服务。 我们现以“诚信、敬业、成就客户”为服务理念不断通过创新服务提升客户的满意度，以“以创新为动力、以技术为支撑、以客户为中心”的发展愿景，通过与各地高新区、开发区、科技园管委会等政府科技服务机构的密切沟通，重构完善了知识产权服务及科技服务体系。公司已与国内众多知名第三方机构、实验室、高校院所等保持良好的合作关系，已整合更有效的资源，为客户提供优质的科技创新服务。'

    };
  },
  created() {
    this.getList();
  },

  methods: {
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {

          this.list = res.data.list;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.m-x{
  margin: 12px 16px ;
}
.h-10{
  height: 5px;
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
  color: #193980;
  margin: 8px 0 ;
}
.companyName {
  font-size: 13px;
  margin: 6px 0 8px 10px;
  color: #193980;
  font-weight: 500;
}

</style>
