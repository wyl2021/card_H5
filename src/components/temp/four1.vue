<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <div class="ta-c">
      <van-image class="mb-12" width="122" height='21' :src="require('@/assets/tempfile/img/CompanyInfo.png')"></van-image>
    </div>
    <template v-if="info.imageList.length">
      <div class="dp-f w100 mt-12 jc-sb" v-if="info.row ==1&&info.imageList.length<4">
        <van-image style="flex-grow:1;width: 30%;margin-left:5px ;" fit="contain" v-for="(i,v) in info.imageList" :key="v" :src="i" />
      </div>
      <div v-else-if="info.row ==2&&info.imageList.length>2">
        <div class="dp-f fw-w jc-sb">
          <van-image width="100%" :src="info.imageList[0]"></van-image>
          <van-image class="mt-9" width="155" fit="contain" :src="info.imageList[1]"></van-image>
          <van-image class="mt-9" width="155" fit="contain" :src="info.imageList[2]"></van-image>
        </div>
      </div>
    </template>
    <div style="margin-top: 12px;white-space:pre-line;font-size:12px;color:#666">
      <div v-html="submitText(info.text)" style="text-indent:2em;"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {}
  },
  methods: {
    submitText(text) {
      if (text) {
        let t = [];
        text.split('\n').forEach(item => t.push(`<p style=margin:0px;>${item.trim()}</p>`));
        return t.join('\n');
      }
    },
  }
}
</script>

<style>
</style>