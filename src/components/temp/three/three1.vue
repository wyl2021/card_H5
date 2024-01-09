<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <!-- info.type 1:个人形象照 2:扫码微信 -->
    <div v-if="info.type == 1">
      <iconContent

        width="18"
        height="18"
        :src="info.photoIcon"
      >
        <template #content>个人形象照</template>
      </iconContent>
      <div class="dp-f ai-c fd-c">
        <van-image
          class="mb-12"
          width="176"
          height="198"
          :src="info.photo"
        ></van-image>
      </div>
    </div>
    <div v-if="info.type == 2">
      <iconContent width="18" height="18"  :src="info.wxIcon">
    <template #content>扫码加微信</template>
   </iconContent>

    <div class="dp-f ai-c fd-c">
      <van-image class="mb-12" width="156" height="156" :src="info.wx"></van-image>
      <div>
        <span class="fs-14 mr-10">{{ info.name }}</span>
        <span class="fs-10 c-666">{{ info.post }}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import iconContent from "@/components/temp/iconContent.vue";
export default {
  components: {
    iconContent,
  },
  props: {
    info: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>
