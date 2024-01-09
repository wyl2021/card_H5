
<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <icon-content>
      <template #content></template>
    </icon-content>
    <!-- 此模块用于一半静态样式一半存在有功能的情况 -->
    <slot name="cardContent">
      <div>
        <!-- 图片 -->
        <van-image
          :src="require('@/assets/tempfile/nh/image/rongyuzizhi.png')"
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
        <!-- <div
          v-html="
            submitText(
              '测试</br>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</br>测试测试测试测试测试测试测试测试测试</br>'
            )
          "
          style="text-indent: 2em"
        ></div> -->
      </div>
      <!-- 视频 -->
      <!-- <div class="video">
        <vue-dplayer :options="options"></vue-dplayer>
      </div> -->
      <!-- 文字跳转 -->
      <router-link
        :to="{
          path: '/solutionInfo',
          name: 'solutionInfo',
          params: { id: '携带参数' },
        }"
      >
        <!-- <div class="c-666 ta-r">更多<van-icon name="arrow"></van-icon></div> -->
      </router-link>
    </slot>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
/deep/ .svgIcon {
  justify-content: center;
}
</style>
