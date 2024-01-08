
<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <icon-content>
      <template #content> 测试头部 </template>
    </icon-content>
    <!-- 此模块用于一半静态样式一半存在有功能的情况 -->
    <slot name="cardContent">
      <div>
        <!-- 图片 -->
        <van-image
          :src="require('@/assets/tempfile/aj/image/glys1.png')"
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
              '测试</br>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</br>测试测试测试测试测试测试测试测试测试</br>'
            )
          "
          style="text-indent: 2em"
        ></div>
      </div>
      <!-- 视频 -->
      <div class="video">
        <vue-dplayer :options="options"></vue-dplayer>
      </div>
      <!-- 文字跳转 -->
      <router-link
        :to="{
          path: '/solutionInfo',
          name: 'solutionInfo',
          params: { id: '携带参数' },
        }"
      >
        <div class="c-666 ta-r">更多<van-icon name="arrow"></van-icon></div>
      </router-link>
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
