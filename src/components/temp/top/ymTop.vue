<template>
  <div>
    <div class="header1" >
      <!-- @click="isShow=true" -->
      <van-image

        :src="require('@/assets/tempfile/ym/headerBg/header2.png')"
      ></van-image>
    </div>
    <cardBg :src="2" srcName="ym" class="cardBg"></cardBg>
    <pop1 popColor="#168ED3" :show="isShow" @commitUser="commitUser(index+1)">
      <template #cardList>
        <div
          @click="cardIds = index+1"
          :class="{ selectClass: cardIds == index+1 }"
          class="popHeader"

          v-for="(item,index) in 4"
          :key="index"
        >
          <van-image
          width="100%"
            :src="
              require('@/assets/tempfile/ym/headerBg/header' + (index+1) + '.png')
            "
          ></van-image>
        </div>
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
      default: 2,
    },
  },
  data() {
    return {
      isShow: false,
      cardIds: 2,
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

<style lang="scss" scoped>
.cardBg{
  margin: 0 12px;
}
.selectClass {
  border: 2px solid #168ED3 !important;
}
/deep/ .line{
  background-color: #0E58A3 !important;
}
</style>
