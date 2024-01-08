<!-- 第二个页面 -->
<template>
  <div style="margin: 12px 16px;padding-top: 12px;">
    <div class="p-all-12 bg-fff br-8 mb-12 six-2-box ">
      <div class="ta-c">
        <van-image
          class="mb-12"
          width="153"
          height="39"
          :src="require('@/assets/tempfile/aj/headerImage/spjs.png')"
        ></van-image>
        <div class="video">
          <vue-dplayer :options="options"></vue-dplayer>
        </div>
      </div>
    </div>
    <van-image
      style="margin: 10px 0"
      fit="cover"
      :src="require('@/assets/tempfile/aj/thirdIndex/xxz.png')"
    />
    <div class="p-all-12 bg-fff br-8 mb-12 six-2-box">
      <div class="ta-c">
        <van-image
          class="mb-12"
          width="153"
          height="39"
          :src="require('@/assets/tempfile/aj/headerImage/jxcp.png')"
        ></van-image>
        <div
          style="display: flex; flex-wrap: wrap; justify-content: space-between"
        >
          <router-link
            :to="{
              path: '/solutionInfo',
              name: 'solutionInfo',
              params: {
                id: item.id,
              },
            }"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <van-image style="margin-bottom:10px" width="154" height="94" :src="item.imageUrl" />
          </router-link>
        </div>
        <router-link
          :to="{
            path: '/secondIndex',
            name: 'secondIndex',
          }"
        >
          <div style="text-align: right; color: #000000; font-size: 12px">
            更多<van-icon name="arrow"></van-icon>
          </div>
        </router-link>
      </div>
    </div>
    <van-image
    style="margin: 10px 0"
      fit="cover"
      :src="require('@/assets/tempfile/aj/thirdIndex/fhlc.png')"
    />
    <van-image
      style="margin-bottom: 10px"
      fit="cover"
      :src="require('@/assets/tempfile/aj/thirdIndex/qywh.png')"
    />
    <van-image
      style="margin-bottom: 10px"
      fit="cover"
      :src="require('@/assets/tempfile/aj/thirdIndex/ryzz.png')"
    />
    <van-image
      style="margin-bottom: 10px"
      fit="cover"
      :src="require('@/assets/tempfile/aj/thirdIndex/tdfc.png')"
    />
    <van-image
      style="margin-bottom: 10px"
      fit="cover"
      :src="require('@/assets/tempfile/aj/thirdIndex/hzhb.png')"
    />
    <div class="h-50"></div>
    <tabbar :active="1"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
import VueDplayer from "vue-dplayer";
export default {
  components: {
    tabbar,
    VueDplayer,
  },
  data() {
    return {
      options: {
        video: {
          url: "https://card-img1.oss-cn-beijing.aliyuncs.com/tttx/tttx.mp4",
          pic: "https://card-img1.oss-cn-beijing.aliyuncs.com/tttx/video.png",
        },
      },
      dataList: [
        {
          imageUrl: require("@/assets/tempfile/aj/image/gnhy2.png"),
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
        },
        {
          imageUrl: require("@/assets/tempfile/aj/image/glys1.png"),
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
        },
        {
          imageUrl: require("@/assets/tempfile/aj/image/gzgc1.png"),
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
        },
        {
          imageUrl: require("@/assets/tempfile/aj/image/xnywl.png"),
          id: require("@/assets/tempfile/aj/cantent/kcc.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ta-c {
}
</style>
