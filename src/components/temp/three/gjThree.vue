<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <!-- info.type 1:个人形象照 2:扫码微信 -->
    <div v-if="info.type == 1">
      <iconContent
        width="16"
        height="16"
        :src="info.photoIcon"
      >
        <template #content >
          <div class="gr">个人形象照</div></template>
      </iconContent>

      <div class="dp-f ai-c fd-c">
        <van-image
          class="mt-16 mb-12"
          width="176"
          height="198"
          :src="info.photo"
        ></van-image>
      </div>
    </div>

    <div v-if="info.type == 2">
      <iconContent
      width="16"
      height="16"
      :src="info.wxIcon">
    <template #content >
      <div class="gr1">扫码加微信</div>
      </template>
   </iconContent>

    <div class="dp-f ai-c fd-c">
      <van-image
      class="mb-12"
       width="118"
       height="115"
       :src="info.wx"
       ></van-image>
       <template>
        <div class="h">
          扫描上面二维码图案，加我为好友
        </div>
       </template>
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
.h{
  font-size: 12px;
  color:#999999;
}
.gr{
  font-size:15px;
}
.gr1{
  font-size:15px;
}

</style>
