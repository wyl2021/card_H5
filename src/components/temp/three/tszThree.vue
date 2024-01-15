<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <!-- info.type 1:个人形象照 2:扫码微信 -->
    <div v-if="info.type == 1">
      <iconContent

        width="18"
        height="18"
        :src="info.photoIcon"
      >
        <template #content><div class="fs-16">个人形象照</div></template>
      </iconContent>
      <div class="dp-f ai-c fd-c">
        <van-image
          class="mb-12 mt-14"
          width="176"
          height="198"
          :src="info.photo"
        ></van-image>
      </div>
    </div>
    <div v-if="info.type == 2">
      <iconContent width="18" height="18"  :src="info.wxIcon">
    <template #content><div class="fs-16">扫码加微信</div></template>
   </iconContent>

    <div class="dp-f ai-c fd-c">
      <van-image class="mb-12 mt-10" width="114" height="115" :src="info.wx"></van-image>
      <div>
        <span class="fs-14 mr-10">{{ info.name }}</span>
        <span class="fs-12 c-666">{{ info.post }}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import iconContent from "@/components/temp/iconContent.vue";
import svgIcon from '@/components/SvgIcon/index.vue';
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

<style lang="scss" >

/deep/ .svgIcon{
  font-size:16px;
}
</style>
