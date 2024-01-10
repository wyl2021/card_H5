
<template>
    <div class="p-all-12 bg-fff br-8 mb-12">
        <van-image
            :src="require('@/assets/tempfile/jh/sy_slices/image4.png')"
          ></van-image>
      
      <!-- 此模块用于一半静态样式一半存在有功能的情况 -->
      <slot name="cardContent">
        <div>
          <!-- 图片 -->
          <van-image
            :src="require('@/assets/tempfile/jh/sy_slices/image3.png')"
          ></van-image>
        </div>
        <!-- 文本 -->
        <!-- 深圳市几何智造技术有限公司（简称智能测量分拣设备）是一家高新科技创新型企业，专注于国际物流行业货物高精度测量、自动化分拣、高性能输送线、智能仓储服务以及控制系统研发，专为国际货代行业提供全自动化高效率的物流解决方案。旗下主要产品有：智能测量分拣设备。
     公司宗旨:降本增效智能物流方案提供商，通过智能测量分拣系统综合解决方案，专为物流企业解决货物周转易出错、人工难管理、数据追溯等问题，让企业货物快进快出，精细化管理提高货物周转，增加仓库利用效率。 -->
        <div
          style="
            margin-top: 12px;
            white-space: pre-line;
            font-size: 12px;
            color: #666;
            letter-spacing: 1px;
            font-family: PingFang SC, PingFang SC;
          "
        >
          <div
            v-html="
              submitText(
                '深圳市几何智造技术有限公司（简称智能测量分拣设备）是一家高新科技创新型企业，专注于国际物流行业货物高精度测量、自动化分拣、高性能输送线、智能仓储服务以及控制系统研发，专为国际货代行业提供全自动化高效率的物流解决方案。旗下主要产品有：智能测量分拣设备。</br>'
              )
            "
            style="text-indent: 2em"
          ></div>
          <div
            v-html="
              submitText(
                '公司宗旨:降本增效智能物流方案提供商，通过智能测量分拣系统综合解决方案，专为物流企业解决货物周转易出错、人工难管理、数据追溯等问题，让企业货物快进快出，精细化管理提高货物周转，增加仓库利用效率。'
              )
            "
            style="text-indent: 2em"
          ></div>
        </div>
      </slot>
    </div>
  </template>
  
  <script>
  export default {
    components: { },
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
    methods:{
      submitText(text) {
        if (text) {
          let t = [];
          text
            .split("\n")
            .forEach((item) => t.push(`<p style=margin:0px;>${item.trim()}</p>`));
          return t.join("\n");
        }
      },
    }
  };
  </script>
  
  <style lang="scss" scoped>
  /deep/ .svgIcon {
    justify-content: center;
  }
  </style>
  