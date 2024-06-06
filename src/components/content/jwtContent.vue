<template>
  <div>
    <!-- 企业介绍 -->
    <headerContent
      v-if="name == '企业介绍'"
      headerImg="jwt/headerImage/qyjs.png"
      width="164px"
      height="40px"
    >
      <template #content>
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </p>
        <van-image :src="IMG + 'jwt/image/jjBg.png'"></van-image>
        <p
          class="textStyle"
          v-for="(item, index3) in text1.split(' ')"
          :key="item"
        >
          {{ item }}
        </p>
      </template>
    </headerContent>
    <!-- 企业文化 -->
    <headerContent
      v-if="name == '企业文化'"
      headerImg="jwt/headerImage/qywh.png"
      width="164px"
      height="40px"
    >
      <template #content>
        <div class="whBox" v-for="(item, index) in whList" :key="index">
          <div class="d-flex name">
            <van-image
              :src="IMG + 'jwt/icon/' + (index + 1) + '.png'"
              width="42px"
              height="42px"
              class="m-r-8"
            ></van-image>
            {{ item.name }}
          </div>
          <p
            class="describe"
            v-for="(item2, index2) in item.describe.split('！')"
            :key="index2"
          >
            {{ item2 }}
          </p>
        </div>
      </template>
    </headerContent>
    <!-- 产品中心 -->
    <headerContent
      v-if=" name == '产品中心' ||  name == '首页产品中心'"
      headerImg="jwt/headerImage/cpzx.png"
      width="164px"
      height="40px"
    >
      <template #content>
        <div
          class="productBox"
          v-for="(item, index) in list"
          :key="index"
          @click="getTo(item.id)"
        >
          <div class="name d-flex">
            <div class="line"></div>
            {{ item.name }}
          </div>
          <div class="productItem">
            <div @click="getTo2(item2.id)" class="describe" v-if="name=='首页产品中心' || index2<=1" v-for="(item2, index2) in item.solution_list" :key="index2">
              <van-image :src="item2.image.url" v-if="item2.image"></van-image>
              {{ item2.name }}
            </div>
          </div>
        </div>
        <more title="查看更多" color="#333333" path="/thirdIndex"></more>
      </template>
    </headerContent>
    <!-- 应用中心 -->
    <headerContent
      v-if="name == '应用中心'"
      headerImg="jwt/headerImage/yyzx.png"
      width="164px"
      height="40px"
    >
      <template #content>
          <div class="cpBox">
            <div class="d-flex name">
              <div class="line"></div>
              样品加工
            </div>
            <van-image @click="getTo" :src="IMG+'jwt/image/ypjg.png'"></van-image>
          </div>
          <div class="cpBox">
            <div class="d-flex name">
              <div class="line"></div>
              视频展示
            </div>
           <video controls width="100%" height="180">
            <source :src="IMG+'jwt/video.mp4'" type="video/mp4">
           </video>
          </div>

      </template>
    </headerContent>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    list: Array,
  },
  data() {
    return {
      text: "“精蔚特”是一家专注于中国高端制造业并为其提供智能综合服务创造全新价值的专业化企业。公司一直以为客户引进世界精良机械设备，先进技术及提供优质的售前及售后服务为己任，为成为中国内地专业优质的代理商之一！精蔚特是山崎马扎克株式会社在中国市场的重要合作伙伴! 为配合市场需要及提供多元化的产品服务，精蔚特成立工程技术中心，不仅为客户提供更多先进机械设备，还可以为顾客提供应用技术支持、教学培训、生产方案交匙工程、自动化工程集成、智能机械设备制造、智能数字化等综合性智能生产方案技术供货商。",
      text1:
        "为保证售前售后的服务质素，公司严格挑选新入职员工，并向工程师和技术服务人员提供各种在职培训及出国深造的机会。工程部由10多名中国员工划分成各专科组别组成，以 “快捷有效、以客为先”的服务宗旨向客户提供专业意见及技术支援，能迅速处理客户所需，加强企业之竞争能力与全新价值。 精蔚特之远见是“立志为中国乃至全球机床领域最优秀的供应商”为达此目标。公司将持续提升服务质量及竞争优势，助力企业智能制造。我们愿与各界精诚合作并追求科学发展，合作共赢！ 期望我们在不断进步的同时，得到您的长期关注和鼎力支持！ 您的支持将是精蔚特未来的明天！",
      whList: [
        {
          name: "发展战略",
          describe:
            "企业使命 以为客户创造价值为中心，成为客户值得信赖的合作伙伴！ 企业愿景 为优秀精英企业发展提供助力，成为全球机床领域最优秀的供应商！ 1-3年短期规划 实现销售额每年递增30%；3-5年中期规划 成为华东地区高端机床优秀代理商及知名企业；5-10年长期规划 成为行业隐形冠军而受人尊敬！",
        },
        {
          name: "经营理念",
          describe: "专业提升服务，服务创造价值",
        },
        {
          name: "团队价值观",
          describe: "作为人何为正确 本分 勤奋 谦卑 反省 利他",
        },
      ],
    };
  },
  methods:{
    getTo2(id){
      this.$router.push({
        path:'/solutionInfo',
        query: { id: id },
      })
    },
    getTo(){
    this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: '02c90eea-1819-11ef-a395-00163e237fe6' },
      })
  },
  }
};
</script>

<style lang="scss" scoped>
.whBox {
  margin-top: 6px;
  .name {
    color: #333333;
    font-size: 14px;
    align-items: center;
    margin-bottom: 5px;
  }
  .describe {
    color: #666666;
    font-size: 12px;
  line-height: 20px;
  }
}
.productBox {
  margin-top: 5px;
  .name {
    align-items: center;
    font-size: 14px;
    color: #333333;
    font-weight: 400;
    .line {
      width: 3px;
      height: 20px;
      margin-right: 5px;
      background-color: #ff0000;
    }
  }
  .productItem {
    display: grid;
    grid-template-columns: 49% 49%;
    column-gap: 10px;
    row-gap: 10px;
    margin-top: 10px;
    .describe {
      text-align: center;
      color: #666666;
      font-size: 12px;
    }
  }
}
.m-r-8{
  margin-right: 8px;
}
.cpBox{
  .name {
    align-items: center;
    font-size: 14px;
    color: #333333;
    font-weight: 400;
    margin-bottom: 10px;
    .line {
      width: 3px;
      height: 20px;
      margin-right: 5px;
      background-color: #ff0000;
    }
  }
}
</style>
