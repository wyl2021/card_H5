<template>
  <div>
    <img :src="IMG + 'xy/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->

      <img class="logo" :src="IMG + 'xy/image/logo.png'" />
      <div class="companyName">北京硕为思公关顾问有限公司</div>
      <div>
        <div class="h-10"></div>
        <div class="textStyle">心研医疗创立于2019年，总部位于中国深圳，公司汇聚了国内专业的心电、血氧团队，是中国领先的医疗解决方案供应商。心研医疗结合自身技术优势，在低功耗硬件心电模块、心电算法、血氧算法领域持续创新。目前，心研医疗产品解决方案已服务于医院、消费市场，为客户提供定制化服务。</div>
        <div class="h-10"></div>
        <van-image :src="IMG + 'xy/image/jjBg.png'"></van-image>
        <i-text iconImage="xy/image/yygh.png" title="愿景规划" color="#D62223" ></i-text>
        <div class="d-flex jsTitle">
          <div class="circular"></div>
          普及心脏健康，让心脏监测服务走进千家万户！
        </div>

        <div class="d-flex jsTitle">
          <div class="circular"></div>
          励志成为呵护人类健康的科技公司！
        </div>
        <div class="h-10"></div>
      </div>
    </div>
    <div class="m-x">
      <xyyl-content name="心研优势" :list="list"></xyyl-content>
      <xyyl-content name="资质证书" :list="list"></xyyl-content>
      <xyyl-content name="全部合作伙伴" :list="list"></xyyl-content>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      IMG: this.IMG,
      list: [],
      list2: [],
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
          // this.list=res.data.list.find((item)=>item=="使命愿景").solution_list
          // this.list2=res.data.list.find((item)=>item=="公司介绍").solution_list
          // console.log(this.list,this.list2,"1231231")
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.h-10{
  height: 10px;
}
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
  margin: -50px 0 0 0;
}
.box {
  width: 100%;
  height: 200px;
  background-color: beige;
  margin-top: 12px;
}
.name {
  font-size: 12px;
  color: #D62223;
  margin: 8px 0;
}
.companyName {
  font-size: 13px;
  margin: 6px 0 8px 0;
  color: #D62223;
  font-weight: 500;
}
.circular {
  background-color: #D62223;
  border-radius: 3px;
  margin-right: 5px;
  width: 6px;
  height: 6px;
}
.jsTitle {
  color: #333333;
  font-size: 12px;
  font-weight: 800;
}
.jsText {
  font-size: 12px;
  color: #666;
  font-weight: 400;
  line-height: 20px;
  margin: 5px;
}
.h-10 {
  height: 10px;
}
</style>
