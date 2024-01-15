
<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <icon-content width="100%" :src="require('@/assets/tempfile/gj/headerImage/xhjs.png')">
    </icon-content>
    <!-- 此模块用于一半静态样式一半存在有功能的情况 -->
    <slot name="cardContent">
      <div class="h1">
        <!-- 图片 -->
        <van-image class="hh1"
        fit="cover"
          :src="require('@/assets/tempfile/gj/image/hz1.png')"
        ></van-image>
      </div>
      <!-- 文本 -->
      <div
        style="white-space: pre-line;
          font-size: 12px;
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 20px;
          letter-spacing: 1px;
        "
      >
        <div
          v-html="
            submitText(
              '&nbsp&nbsp&nbsp&nbsp&nbsp宁波市国际联运协会前身系创建于2008年的宁波市口岸协会国际联运分会，2016年1月经宁波市人民政府口岸与打击走私办公室同意并经宁波市民政局核准名称变更为宁波市国际联运协会。协会由环集供应链、联洋船务、达升物流股份、天时利蜻蜓供应链、一洲货运、达迅货运、新海丰物流及九龙物流等10余家国际货运企业首发组建，协会目前拥有近200家成员，员工总人数超过15000人，年出口箱量超过350万标箱，年营业额超过300亿元人民币，具有统一的宁波港所有出口订舱平台，会员拥有宁波所有船公司协议价格和舱位，会员业务涵盖了国际物流所有业务范围，协会会员均在《宁波市国际联运协会章程》和《宁波市国际联运协会诚信自律公约》的规范、约束下运作，确保了会员质量及会员高效协作，是促进国际货代群体合作交流和学习的重要平台，与多家海外组织合作在宁波举办过多次国际货代物流企业洽谈会议、论坛，与国内深圳、厦门、上海、大连、青岛及浙江省内杭州、金华及温州等地货代协会有着长期合作交流，协会将以“诚信自律、联合发展、创新共赢”为宗旨，不断开拓业务精品，完善服务渠道，提高服务质量，努力打造服务品牌，本着“诚实守信平等互利”的原则整合协会会员优势，携手国内外同行共同创建多元的市场格局。'
            )
          "
        ></div>
        <div class="h2">
          <p> 查看更多</p>
          <van-icon name="arrow"></van-icon>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import iconContent from "../iconContent.vue";
// import VueDplayer from "vue-dplayer";
export default {
  components: {
     iconContent,
      // VueDplayer
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
.h1{

  justify-content: center;
  width:100%;
  .hh1{
    justify-content: center;
    width:100%;
    margin-top: 10px;
    height: 130px;
  }
}
.h2{
  display: flex;
  align-items: center;
  margin-top: 10px;
}
</style>
