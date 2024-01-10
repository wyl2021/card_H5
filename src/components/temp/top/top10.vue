<template>
  <div>
    <van-image
      v-if="cardId == 1"
      @click="isShow = true"
      class="header1"
      :src="require('@/assets/tempfile/jh/sy_slices/image1.png')"
    ></van-image>
    <van-image
      v-if="cardId == 1"
      class="image"
      :src="require('@/assets/tempfile/jh/sy_slices/image2.png')"
    ></van-image>
    <pop1 popColor="#DA2321" :show="isShow" @commitUser="commitUser">
      <template #cardList>
        <van-image
          @click="cardIds = 1"
          :class="{ selectClass: cardIds == 1 }"
          class="header2"
          :src="require('@/assets/tempfile/jh/sy_slices/image1.png')"
        ></van-image>
      </template>
    </pop1>
  </div>
</template>

<script>
import pop1 from "@/components/temp/pop/pop1.vue";
import cardBg from "@/components/temp/cardBg.vue";

export default {
  components: {
    pop1,
    cardBg,
  },
  props: {
    cardId: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      isShow: false,
      cardIds: 1,
    };
  },
  methods: {
    commitUser(item) {
      this.cardId = this.cardIds;
      this.isShow = false;
      console.log("用户点击确定", item, this.cardId);
    },
  },
};
</script>
<style lang='scss' scoped>
.header1 {
  // width: 343px;
  height: 220px;
  margin-top: 12px;
  margin-left: 0px;
  border-radius: 10px;
  align-content: center;
}
.header2 {
  width: 343px;
  height: 200px;
  border: 1px dashed #ccc;
  margin-left: 0px;
  margin-top: 10px;
  margin-bottom: 12px;
  border-radius: 10px;
}
.selectClass {
  border: 2px solid #DA2321 !important;
}
</style>
