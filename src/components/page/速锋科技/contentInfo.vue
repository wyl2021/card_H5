<template>
  <div>
    <img :src="IMG + 'sfkj/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->

      <img class="logo" :src="IMG + 'sfkj/image/logo.png'" />
      <!-- <companyTitle title="宁波大学附属康宁医院"></companyTitle> -->
      <div class="companyName">深圳市速锋科技股份有限公司</div>
      <div class="textStyle" v-for="(item,index) in text.split(' ')" :key="index">{{ item }}</div>
      <van-image
          :src="IMG + 'sfkj/image/jjBg.png'"
          class="m-x-10"
        ></van-image>
    </div>
    <div class="m-x">
      <!-- 企业文化 -->
    <headerContent
      headerImg="sfkj/headerImage/qywh.png"
      width="103px"
      height="48px"
    >
      <template #content>
        <div class="whBox" v-for="(item, index) in whList" :key="index">
          <van-image
            :src="IMG + item.url"
            width="16px"
            height="16px"
          ></van-image>
          <div class="whItem">
            <p class="name">{{ item.name }}</p>

            <div
              v-for="(item2, index2) in item.list"
              class="title"
              :class="{ 'align-baseline': index >= 2 }"
              :key="index2"
            >
              <div v-if="item.name == '企业风格'" class="dian"></div>
              <div class="w-text">{{ item2 }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerContent>
   <!-- 荣誉证书 -->
   <headerContent
      headerImg="sfkj/headerImage/ryzs.png"
      width="117px"
      height="48px"
    >
      <template #content>
        <div class="ryBox">
          <van-image
            v-for="(item, index) in getContent('荣誉证书')"
            v-if="item.image"
            :src="item.image.url"
            :key="index"
            width="155px"
            height="210px"
          ></van-image>
        </div>
        <div class="m-t-14"></div>

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
      text:'深圳市速峰科技有限公司成立于2006年，是专业从事高端电主轴及其零配件自主研发、生产、维修和销售服务一体化的国家高新技术企业。 公司自成立以来，坚持“专注、专业、专心”的方针。以客户需求为导向，根据客户需求在不同类型的机床上，研发设计出PCB钻孔机/机电主轴、数控金属/玻璃雕铣机电主轴、磨床主轴、电主轴、电主轴等一系列车床、磨床、加工中心主轴及相关配件产品。公司通过ISO质量管理体系认证，并严格执行。同时，公司企业领导高度重视发展规划，不断吸纳高端技术研发人才，并引进德国、美国、瑞士等国家的高精生产设备和检测仪器。多年来公司以优质的产品赢得了广大客户的一致认可，在电主轴行业树立了良好的口碑。通过不断的自主创新，拥有多项发明专利和实用新型专利证书，逐步成为国内电主轴行业的龙头企业之一。 经过不懈的努力，公司逐步发展壮大。到2016年，公司先后在江苏省昆山市成立了昆山分公司，在广东省惠州市分别成立了惠州市惠阳科技有限公司。与速锋科技有限公司在韩国、泰国等亚洲国家建立了速锋科技品牌合作伙伴，并于2017年9月在新三板成功挂牌。 速锋以对时代需求的不懈追求，不断创新、探索和突破主轴行业的高精度技术，力求成为国内电主轴行业的领跑者。品质最优，客户至上，速锋科技充满了电主轴行业的高端品牌——“速锋”。'
      ,whList: [
        {
          url: "sfkj/icon/1.png",
          name: "使命",
          list: [
            "为用户：用心服务于用户，让人类的生活丰富多；",
            "为员工：创造发展空间，提升员工价值，提高生活质量；",
            "为社会：促进社会健康发展，服务社会文明进步。",
          ],
        },
        {
          url: "sfkj/icon/2.png",
          name: "经营理念",
          list: ["正直！实际的！创新！高效的！责任！"],
        },
        {
          url: "sfkj/icon/3.png",
          name: "道德原则",
          list: [
            "宁愿赔钱，也决不失信誉；清虚做人，诚实做事；",
            "做事精益求精，待人真诚、务实；企业无论大小，都应 一视同仁。",
          ],
        },
        {
          url: "sfkj/icon/4.png",
          name: "企业风格",
          list: [
            "认真：精益求精、求知欲强。",
            "负责：勇于承担最终的责任。",
            "严格：严格管理，严以律己。严于律己，严法做人，严 于律己，严于律己，奖惩分明。",
            "主动：主动接受任务、主动承担责任、主动发现问题、 主动改进和完善。",
            "高效：工作计划明确，反应迅速。今天做了一些事情， 明天留出空间。",
          ],
        },
      ],
    };
  },
  created() {
    this.getList();
  },

  methods: {
    getContent(name) {
      const data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表详情" })
        .then((item) => {
          console.log(item);
          this.list = item.data.list;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
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
  color: #0101FE;
  font-weight: 500;
}

.whBox {
  margin-top: 8px;
  display: flex;
  align-items: baseline;
  .whItem {
    margin-left: 8px;

    .name {
      color: #333333;
      font-size: 14px;
      margin-bottom: 8px;
    }
    .title {
      color: #666666;
      font-size: 12px;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
    }
    .dian {
      width: 5px;
      height: 5px;
      margin-right: 3px;
      background-color: #113681;
      border-radius: 2px;
    }
    .w-text {
      width: 291px;
    }
    .align-baseline {
      align-items: baseline;
    }
  }
}
.ryBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 8px;
}
</style>
