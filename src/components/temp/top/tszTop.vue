<template>
  <div>
    <div v-if="cardId == 1" class="header1" @click="isShow = true">
      <div class="headerText">
        <div class="text1">
          {{ info.name }}
        </div>
        <div class="text2">{{ info.post }}</div>
      </div>
    </div>
    <div v-else-if="cardId == 2" @click="isShow = true" class="header2">
      <div class="headerText">
        <div class="text1">
          {{ info.name }}
        </div>
        <div class="text2">{{ info.post }}</div>
      </div>
    </div>
    <div v-else-if="cardId == 3" @click="isShow = true" class="header3">
      <div class="headerText">
        <div class="text1">
          {{ info.name }}
        </div>
        <div class="text2">{{ info.post }}</div>
      </div>
    </div>
    <div v-else @click="isShow = true" class="header4">
      <div class="headerText">
        <div class="text1">
          {{ info.name }}
        </div>
        <div class="text2">{{ info.post }}</div>
      </div>
    </div>

    <cardBg :src="cardId" srcName="tsz"></cardBg>
    <pop1 popColor="#E50015"  :show="isShow" @commitUser="commitUser">
      <template #cardList>
        <div
          @click="cardIds = 1"
          :class="{ selectClass: cardIds == 1 }"
          class="header1"
          style="border: 1px dashed #000"
        >
          <div class="headerText">
            <div class="text1">
              {{ info.name }}
            </div>
            <div class="text2">{{ info.post }}</div>
          </div>
        </div>
        <div
          @click="cardIds = 2"
          :class="{ selectClass: cardIds == 2 }"
          class="header2"
          style="border: 1px dashed #000"
        >
          <div class="headerText">
            <div class="text1">
              {{ info.name }}
            </div>
            <div class="text2">{{ info.post }}</div>
          </div>
        </div>
        <div
          @click="cardIds = 3"
          :class="{ selectClass: cardIds == 3 }"
          class="header3"
          style="border: 1px dashed #000"
        >
          <div class="headerText">
            <div class="text1">
              {{ info.name }}
            </div>
            <div class="text2">{{ info.post }}</div>
          </div>
        </div>
        <div
          @click="cardIds = 4"
          :class="{ selectClass: cardIds == 4 }"
          class="header4"
          style="border: 1px dashed #000"
        >
          <div class="headerText">
            <div class="text1">
              {{ info.name }}
            </div>
            <div class="text2">{{ info.post }}</div>
          </div>

        </div>
      </template>
    </pop1>
  </div>
</template>

<script>
import pop1 from "../pop/pop1.vue";
import cardBg from '@/components/temp/cardBg.vue';

export default {
  components: {
    pop1,
    cardBg
  },
  props: {
    cardId: {
      type: Number,
      default: 2,
    },
    info: {
      type: Object,
      default() {
        return {
          name: "陈国斌",
          post: "执行秘书长",
          phone: "18923413467",
          address: "深圳市南山区招商街道桃花园社区兴工路美年国际广场4栋505",
          email: "18923413467@163.com",
        };
      },
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
  width: 100%;
  height: 221px;
  padding: 80px 0 0 128px;
  background-image: url("../../../assets/tempfile/tsz/headerBg/header1.png");
  background-size: 100% 100%;
  margin: 10px 0;
  border-radius: 10px;
  .headerText {
    display: flex;
    align-items: end;
  .text1 {
    font-size: 16px;
    margin-left: 5px;
    letter-spacing: 3px;
    line-height: 19px;
    font-weight: 600;
  }
  .text2 {
    font-size: 14px;
    line-height: 14px;
    margin-left: 12px;
    margin-bottom: 2px;
    color: #333333;
  }
  }
}
.header2 {
  width: 100%;
  height: 221px;
  padding: 125px 0 30px 30px;
  background-image: url("../../../assets/tempfile/tsz/headerBg/header2.png");
  background-size: 100% 100%;
  margin: 10px 0;
  border-radius: 10px;
  .headerText {
    // display: flex;
    // align-items: baseline;
    .text1 {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 3px;
      font-weight: 600;
      color: #333;
    }
    .text2 {
      margin-top: 10px;
      font-size: 14px;
      line-height: 14px;
    }
  }
}
.header3 {
  width: 100%;
  height: 221px;
  padding: 25px 30px 20px 30px;
  background-image: url("../../../assets/tempfile/tsz/headerBg/header3.png");
  background-size: 100% 100%;
  margin: 10px 0;
  border-radius: 10px;
  .headerText {
    .text1 {
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 3px;
      font-weight: 600;
      letter-spacing: 2px;
      // border-bottom: 1px solid #0e58a3;
      width: 112px;
    }
    .text2 {
      font-size: 14px;
      line-height: 14px;
      margin-top: 10px;
    }
  }
}
.header4 {
  width: 100%;
  height: 221px;
  padding: 120px 30px 20px 30px;
  background-image: url("../../../assets/tempfile/tsz/headerBg/header4.png");
  background-size: 100% 100%;
  margin: 10px 0;
  border-radius: 10px;
  .headerText {
    color: #333333;
    .text1 {
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 3px;
      font-weight: 600;
      letter-spacing: 2px;
      // border-bottom: 1px solid #0e58a3;
      width: 112px;
    }
    .text2 {
      font-size: 14px;
      line-height: 14px;
      margin-top: 10px;
    }
  }
}
.selectClass {
  border: 2px solid #E50015 !important;
}
/deep/ .line{
  background-color: #E50015 !important;
}
</style>
