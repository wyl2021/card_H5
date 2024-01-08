<template>
  <div>
    <div v-if="cardId == 1" class="header1" @click="isShow = true">
      <div class="headerText">
        <div class="text1">
          {{ info.name }}
        </div>
        <div class="text2">{{ info.post }}</div>
      </div>
      <div class="info-body">
        <div class="info-body-item">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/aj/icon/phone1.png')"
          ></van-image>
          {{ info.phone }}
        </div>
        <div class="info-body-item">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/aj/icon/email1.png')"
          ></van-image>
          {{ info.email }}
        </div>
        <div class="info-body-item" style="align-items: baseline">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/aj/icon/address1.png')"
          ></van-image>
          <div style="width: 177px">{{ info.address }}</div>
        </div>
      </div>
    </div>
    <div v-else-if="cardId == 2" @click="isShow = true" class="header2">
      <div class="headerText">
        <div class="text1">
          {{ info.name }}
        </div>
        <div class="text2">{{ info.post }}</div>
      </div>
      <div class="info-body">
        <div class="info-body-item">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/aj/icon/phone1.png')"
          ></van-image>
          {{ info.phone }}
        </div>
        <div class="info-body-item">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/aj/icon/email1.png')"
          ></van-image>
          {{ info.email }}
        </div>
        <div class="info-body-item" style="align-items: baseline">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/aj/icon/address1.png')"
          ></van-image>
          <div style="width: 177px">{{ info.address }}</div>
        </div>
      </div>
    </div>
    <div v-else-if="cardId == 3" @click="isShow = true" class="header3">
      <div class="headerText">
        <div class="text1">
          {{ info.name }}
        </div>
        <div class="text2">{{ info.post }}</div>
      </div>
      <div class="info-body">
        <div class="info-body-item">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/aj/icon/phone1.png')"
          ></van-image>
          {{ info.phone }}
        </div>
        <div class="info-body-item">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/aj/icon/email1.png')"
          ></van-image>
          {{ info.email }}
        </div>
        <div class="info-body-item" style="align-items: baseline">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/aj/icon/address1.png')"
          ></van-image>
          <div style="width: 249px">{{ info.address }}</div>
        </div>
      </div>
    </div>
    <div v-else @click="isShow = true" class="header4">
      <div class="headerText">
        <div class="text1">
          {{ info.name }}
        </div>
        <div class="text2">{{ info.post }}</div>
      </div>
      <div class="info-body">
        <div class="info-body-item">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/aj/icon/phone1.png')"
          ></van-image>
          {{ info.phone }}
        </div>
        <div class="info-body-item">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/aj/icon/email1.png')"
          ></van-image>
          {{ info.email }}
        </div>
        <div class="info-body-item" style="align-items: baseline">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/aj/icon/address1.png')"
          ></van-image>
          <div style="width: 195px">{{ info.address }}</div>
        </div>
      </div>
    </div>

    <cardBg :src="cardId" srcName="aj"></cardBg>
    <pop1 popColor="#0E58A3"  :show="isShow" @commitUser="commitUser">
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
          <div class="info-body">
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/aj/icon/phone1.png')"
              ></van-image>
              {{ info.phone }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/aj/icon/email1.png')"
              ></van-image>
              {{ info.email }}
            </div>
            <div class="info-body-item" style="align-items: baseline">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/aj/icon/address1.png')"
              ></van-image>
              <div style="width: 177px">{{ info.address }}</div>
            </div>
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
          <div class="info-body">
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/aj/icon/phone1.png')"
              ></van-image>
              {{ info.phone }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/aj/icon/email1.png')"
              ></van-image>
              {{ info.email }}
            </div>
            <div class="info-body-item" style="align-items: baseline">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/aj/icon/address1.png')"
              ></van-image>
              <div style="width: 177px">{{ info.address }}</div>
            </div>
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
          <div class="info-body">
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/aj/icon/phone1.png')"
              ></van-image>
              {{ info.phone }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/aj/icon/email1.png')"
              ></van-image>
              {{ info.email }}
            </div>
            <div class="info-body-item" style="align-items: baseline">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/aj/icon/address1.png')"
              ></van-image>
              <div style="width: 249px">{{ info.address }}</div>
            </div>
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
          <div class="info-body">
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/aj/icon/phone1.png')"
              ></van-image>
              {{ info.phone }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/aj/icon/email1.png')"
              ></van-image>
              {{ info.email }}
            </div>
            <div class="info-body-item" style="align-items: baseline">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/aj/icon/address1.png')"
              ></van-image>
              <div style="width: 195px">{{ info.address }}</div>
            </div>
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
          name: "丁立谦",
          post: "总经理",
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
  padding: 30px 0 0 128px;
  background-image: url("../../../assets/tempfile/aj/headerBg/header1.png");
  background-size: 100% 100%;
  margin: 10px 0;
  border-radius: 10px;
  .headerText {
    .text1 {
      font-size: 18px;
      color: #333;
      font-weight: 700;
      line-height: 27px;
      letter-spacing: 2px;
    }
    .text2 {
      font-size: 10px;
      color: #333;
      line-height: 14px;
    }
  }
  .info-body {
    margin-top: 20px;
    .info-body-item {
      display: flex;
      align-items: center;
      font-size: 10px;
      color: #666;
      width: 100%;
      margin-bottom: 4px;
      .image {
        width: 12px;
        height: 12px;
        margin: 0 5px 0px 0;
      }
    }
  }
}
.header2 {
  width: 100%;
  height: 221px;
  padding: 51px 0 30px 30px;
  background-image: url("../../../assets/tempfile/aj/headerBg/header2.png");
  background-size: 100% 100%;
  margin: 10px 0;
  border-radius: 10px;
  .headerText {
    // display: flex;
    // align-items: baseline;
    .text1 {
      font-size: 16px;
      line-height: 19px;
      font-weight: 600;
      color: #333;
    }
    .text2 {
      margin-top: 6px;
      font-size: 12px;
      line-height: 14px;
    }
  }
  .info-body {
    margin-top: 20px;
    .info-body-item {
      display: flex;
      width: 100%;
      color: #666666;
      font-size: 10px;
      margin-bottom: 8px;
      align-items: center;
    }
    .image {
      width: 12px;
      height: 12px;
      margin: 0 5px 0px 0;
    }
  }
}
.header3 {
  width: 100%;
  height: 221px;
  padding: 50px 38px 38px 30px;
  background-image: url("../../../assets/tempfile/aj/headerBg/header3.png");
  background-size: 100% 100%;
  margin: 10px 0;
  border-radius: 10px;
  .headerText {
    display: flex;
    align-items: end;
    .text1 {
      font-size: 16px;
      line-height: 19px;
      font-weight: 600;
    }
    .text2 {
      font-size: 12px;
      line-height: 14px;
      margin-left: 12px;
      color: #333333;
    }
  }
  .info-body {
    margin-top: 30px;
    margin-left: 8px;
    .info-body-item {
      display: flex;
      color: #666666;
      font-size: 10px;
      margin-bottom: 3px;
      align-items: center;
    }
    .image {
      width: 12px;
      height: 12px;
      margin: 0 5px 0px 0;
    }
  }
}
.header4 {
  width: 100%;
  height: 221px;
  padding: 30px 30px 20px 30px;
  background-image: url("../../../assets/tempfile/aj/headerBg/header4.png");
  background-size: 100% 100%;
  margin: 10px 0;
  border-radius: 10px;
  .headerText {
    color: #333333;
    .text1 {
      font-size: 18px;
      line-height: 27px;
      font-weight: 600;
      letter-spacing: 2px;
      border-bottom: 1px solid #0e58a3;
      width: 112px;
    }
    .text2 {
      font-size: 10px;
      line-height: 14px;
      margin-top: 12px;
    }
  }
  .info-body {
    margin-top: 21px;
    .info-body-item {
      display: flex;
      color: #666666;
      font-size: 10px;
      margin-bottom: 4px;
      align-items: center;
    }
    .image {
      width: 12px;
      height: 12px;
      margin: 0 5px 0px 0;
    }
  }
}
.selectClass {
  border: 2px solid #0E58A3 !important;
}
/deep/ .line{
  background-color: #0E58A3 !important;
}
</style>
