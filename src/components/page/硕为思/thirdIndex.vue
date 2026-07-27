<template>
  <div>
    <img :src="IMG + 'sws/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->

      <img class="logo" :src="IMG + 'sws/image/logo.png'" />
      <div class="companyName">北京硕为思公关顾问有限公司</div>
      <div>
        <div class="h-10"></div>
        <van-image :src="IMG + 'sws/image/jsBg.png'"></van-image>
        <company-title
          title="硕而有为，集优而思——创立于2006年"
          color="#EB6027"
          fontSize="14px"
        ></company-title>
        <div class="d-flex jsTitle">
          <div class="circular"></div>
          我们是一家技术型的公关公司
        </div>
        <div class="jsText">
          国家高新技术企业与中关村高新技术企业，中国商务广告协会数字营销委员理事会成员单位，并与北航数据智能研究中心达成深度战略合作，自有多项软著和独有行业数据
        </div>
        <div class="d-flex jsTitle">
          <div class="circular"></div>
          我们专注于汽车领域
        </div>
        <div class="jsText">
          十余年来深耕汽车领域，专注于用户互动生态建设、新媒体内容营销、舆情监测及口碑管理、搜索环境优化及大数据等服务，一直致力于为国内外优秀的品牌和企业提供精细化的数字营销服务
        </div>

        <div class="d-flex jsTitle">
          <div class="circular"></div>
          我们全产业链服务
        </div>
        <div class="jsText">
          目前拥有超300人的专业服务团队，在北京、上海、广州、深圳及杭州设有分公司，在山东及山西建有两个产业基地，实现前-中-后端全产业链化协同作业，可快速反应高效运转
        </div>
      </div>
    </div>
    <div class="m-x">
      <sws-content name="业务范畴" :list="list"></sws-content>
      <sws-content name="我们的荣誉" :list="list"></sws-content>
      <sws-content name="我们的客户" :list="list"></sws-content>
      <sws-content name="我们的优势" :list="list"></sws-content>
    </div>
  </div>
</template>

<script>
import swsContent from "../../content/swsContent.vue";
export default {
  components: { swsContent },
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
  color: #eb6027;
  margin: 8px 0;
}
.companyName {
  font-size: 13px;
  margin: 6px 0 8px 0;
  color: #eb6027;
  font-weight: 500;
}
.circular {
  background-color: #eb6027;
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
