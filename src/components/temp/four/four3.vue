
<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <icon-content :src="require('@/assets/tempfile/aj/headerImage/qyjs.png')">
    </icon-content>
    <!-- 此模块用于一半静态样式一半存在有功能的情况 -->
    <slot name="cardContent">
      <div>
        <!-- 图片 -->
        <van-image
          :src="require('@/assets/tempfile/aj/image/qyjs.png')"
        ></van-image>
      </div>
      <!-- 文本 -->
      <div
        style="
          margin-top: 12px;
          white-space: pre-line;
          font-size: 12px;
          color: #666;
        "
      >
        <div
          v-html="
            submitText(
              '<h4>集装箱海运&公路运输服务商</h4>&nbsp&nbsp&nbsp&nbsp&nbsp安信捷物流是一家大型综合专业的第三方科技型物流实业企业，主营业务是:专注国内实体企业批量货跨省运输服务。</br> &nbsp&nbsp&nbsp&nbsp&nbsp公司围绕实体企业项目物流需求，充分结合国内集装箱海运、公路运输以及铁路运输三大渠道优势，定制一站式物流设计和运营方案。</br> &nbsp&nbsp&nbsp&nbsp&nbsp目前公司200+业务及运营团队，12家上市公司及8600+中小企业物流合作运营经验公司注册资金1000万，实际投资过3千万，年营业额过6亿。</br>&nbsp&nbsp&nbsp&nbsp&nbsp业务范围覆盖国内沿海及部分内陆城市，目前在广东、广西、海南、福建、浙江、上海、湖北、重庆、四川、江苏、安徽、河南、山东、天津、北京、河北、山西、内蒙古、辽宁、吉林、黑龙江等地均有网点和办事处。&nbsp&nbsp&nbsp&nbsp&nbsp承运种类:快消品，建材类，像塑类，矿产类，家居类，农资类，金属类，新能源等；承运货量: 20万吨+8万箱，与多家大型铁路和船东公司，建立了良好的合作关系；承运能力:自有加挂靠车辆5000+，拥有稳定的交付能力以及价格优势；&nbsp&nbsp&nbsp&nbsp&nbsp近年来，公司不惜花费重金开发了全链管理系统，不断探索新的物流运营模式，使所有主营业务实现线上线下一体化。'
            )
          "
        ></div>
      </div>
    </slot>
  </div>
</template>

<script>
import iconContent from "../iconContent.vue";
import VueDplayer from "vue-dplayer";
export default {
  components: { iconContent, VueDplayer },
  data() {
    return {
      options: {
        video: {
          url: "https://card-img1.oss-cn-beijing.aliyuncs.com/tttx/tttx.mp4",
          pic: "https://card-img1.oss-cn-beijing.aliyuncs.com/tttx/video.png",
        },
      }, ///视频配置   https://dplayer.diygod.dev/zh/guide.html#参数
    };
  },
  methods: {
    submitText(text) {
      if (text) {
        let t = [];
        text
          .split("\n")
          .forEach((item) => t.push(`<p style=margin:0px;>${item.trim()}</p>`));
        return t.join("\n");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .svgIcon {
  justify-content: center;
}
</style>
