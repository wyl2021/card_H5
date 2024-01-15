
<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <icon-content width="100%" height="100%"    :src="require('@/assets/tempfile/tsz/headerImage/image1.png')">
    </icon-content>
    <!-- 此模块用于一半静态样式一半存在有功能的情况 -->
    <slot name="cardContent">
      <div>
        <!-- 图片 -->
        <van-image class="mt-10"
          :src="require('@/assets/tempfile/tsz/product/qiye.png')"
        ></van-image>
      </div>
      <!-- 文本 -->
      <div
        style="
          margin-top: 12px;
          white-space: pre-line;
          font-size: 12px;
          color: #666666;
          font-family: PingFang SC, PingFang SC;
        "
      >
        <div
          v-html="
            submitText(
              '&nbsp&nbsp&nbsp&nbsp&nbsp2020年，在全球疫情的影响下，物流业产生巨大变革，各物流企业更需要精诚合作，共度非常时刻。探索者物流企业精英俱乐部逆流而上，撮合各种资源为企业服务。俱乐部以宁波为基础，现有会员超230家，遍及8大口岸，长江线及海外。会员以货代公司为主，再配套其上下游企业，如车队，仓库，报关行，堆场，码头，金融，法律，保险，物流平台公司，离岸服务公司，进出口代理服务公司等。首先，俱乐部是一个纯第三方的资源共享平台，我们不做货，所以能保证他的中立性和客观性。俱乐部想整合和挖掘那些中小型的货代公司，处于上升期的公司，年轻一代的公司，尤其是手上有货的直客公司。其次，整合各口岸的物流资源，包括航线，订舱口，车队，仓库，报关行等。有选择性的挑选有优势有服务有诚信的做同行的上游货代。每个口岸每种优势明显又不内卷，这样会增强这些企业的存在感。对那些“供应商”会员，俱乐部一直在做删选...'
            )
          "
        ></div>
      </div>
      <div class="chakan">
          查看更多
          <van-icon name="arrow" />
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
.chakan{
  width: 66px;
  height: 17px;
  font-size: 12px;
  font-family: PingFang SC;
  color: #666666;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
