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
            :src="require('@/assets/tempfile/ds/icon/phone.png')"
          ></van-image>
          {{ info.phone }}
        </div>
        <div class="info-body-item">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/ds/icon/email.png')"
          ></van-image>
          {{ info.email }}
        </div>
        <div class="info-body-item">
          <van-image
            class="image"
            width="10"
            height="10"
            :src="require('@/assets/tempfile/ds/icon/address.png')"
          ></van-image>
          {{ info.address }}
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
                :src="require('@/assets/tempfile/ds/icon/phone.png')"
              ></van-image>
              {{ info.phone }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/email.png')"
              ></van-image>
              {{ info.email }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/address.png')"
              ></van-image>
              {{ info.address }}
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
                :src="require('@/assets/tempfile/ds/icon/phone.png')"
              ></van-image>
              {{ info.phone }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/email.png')"
              ></van-image>
              {{ info.email }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/address.png')"
              ></van-image>
              {{ info.address }}
            </div>
          </div>
    </div>
    <div v-else="cardId == 4" @click="isShow = true" class="header4">
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
                :src="require('@/assets/tempfile/ds/icon/phone.png')"
              ></van-image>
              {{ info.phone }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/email.png')"
              ></van-image>
              {{ info.email }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/address.png')"
              ></van-image>
              {{ info.address }}
            </div>
          </div>
    </div>
    <pop1 :show="isShow" @commitUser="commitUser">
      <template #cardList>
        <div @click="cardIds=1" :class="{selectClass:cardIds==1}" class="header1" style="border: 1px dashed #000">
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
                :src="require('@/assets/tempfile/ds/icon/phone.png')"
              ></van-image>
              {{ info.phone }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/email.png')"
              ></van-image>
              {{ info.email }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/address.png')"
              ></van-image>
              {{ info.address }}
            </div>
          </div>
        </div>
        <div @click="cardIds=2" :class="{selectClass:cardIds==2}" class="header2" style="border: 1px dashed #000">
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
                :src="require('@/assets/tempfile/ds/icon/phone.png')"
              ></van-image>
              {{ info.phone }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/email.png')"
              ></van-image>
              {{ info.email }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/address.png')"
              ></van-image>
              {{ info.address }}
            </div>
          </div>
        </div>
        <div @click="cardIds=3" :class="{selectClass:cardIds==3}" class="header3" style="border: 1px dashed #000">
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
                :src="require('@/assets/tempfile/ds/icon/phone.png')"
              ></van-image>
              {{ info.phone }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/email.png')"
              ></van-image>
              {{ info.email }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/address.png')"
              ></van-image>
              {{ info.address }}
            </div>
          </div>
        </div>
        <div @click="cardIds=4" :class="{selectClass:cardIds==4}" class="header4" style="border: 1px dashed #000">
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
                :src="require('@/assets/tempfile/ds/icon/phone.png')"
              ></van-image>
              {{ info.phone }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/email.png')"
              ></van-image>
              {{ info.email }}
            </div>
            <div class="info-body-item">
              <van-image
                class="image"
                width="10"
                height="10"
                :src="require('@/assets/tempfile/ds/icon/address.png')"
              ></van-image>
              {{ info.address }}
            </div>
          </div>
        </div>
      </template>
    </pop1>
  </div>
</template>

<script>
import pop1 from "../pop/pop1.vue";
export default {
  components: {
    pop1,
  },
  props: {
    cardId: {
      type: Number,
      default: 1,
    },
    info: {
      type: Object,
      default() {
       return { name: "刘彬",
        post: "董事长",
        phone: "1332424234124",
        address: "地址地址地址地址地址地址地址地址地址地址",
        email: "asas@qq.com",}
      },
    },
  },
  data() {
    return {
      isShow: false,
      cardIds:1
    };
  },
  methods: {
    commitUser(item) {
      this.cardId=this.cardIds
      this.isShow = false;
      console.log("用户点击确定", item,this.cardId);
    },
  },
};
</script>

<style lang="scss" scoped>
.header1 {
  width: 100%;
  // height: 200px;
  padding: 64px 44px;
  background-image: url("../../../assets/tempfile/ds/headerBg/header1.png");
  background-size: 100% 100%;
  margin: 10px 0;
  border-radius: 10px;
  .headerText {
    display: flex;
    align-items: baseline;
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
      margin-left: 8px;
      line-height: 14px;
    }
  }
  .info-body {
    margin-top: 13px;
    .info-body-item {
      display: flex;
      align-items: center;
      font-size: 10px;
      color: #666;
      .image {
        width: 10px;
        height: 10px;
        margin: 0 5px 4px 0;
      }
    }
  }
}
.header2 {
  width: 100%;
  // height: 200px;
  padding: 58px 0 30px 30px;
  background-image: url("../../../assets/tempfile/ds/headerBg/header2.png");
  background-size: 100% 100%;
  margin: 10px 0;
  border-radius: 10px;
  .headerText {
    display: flex;
    color: #ffffff;
    align-items: baseline;
    .text1 {
      font-size: 16px;
      line-height: 19px;
      font-weight: 600;
    }
    .text2 {
      font-size: 12px;
      line-height: 14px;
      margin-left: 5px;
    }
  }
  .info-body {
    margin-top: 34px;
    .info-body-item {
      color: #666666;
      font-size: 10px;
      margin-bottom: 8px;
      align-items: center;
    }
  }
}
.header3{
  width: 100%;
  // height: 200px;
  padding: 69px 30px 29px 56px;
  background-image: url("../../../assets/tempfile/ds/headerBg/header3.png");
  background-size: 100% 100%;
  margin: 10px 0;
  border-radius: 10px;
  text-align: right;
  .headerText {

    .text1 {
      font-size: 16px;
      line-height: 19px;
      font-weight: 600;

    }
    .text2 {
      font-size: 12px;
      line-height: 14px;
      margin-left: 5px;
      margin-top: 4px;
      color: #333333;
    }
  }
  .info-body {
    margin-top: 12px;
    text-align: left;
    .info-body-item {
      color: #666666;
      font-size: 10px;
      margin-bottom: 3px;
      align-items: center;
    }
  }
}
.header4 {
  width: 100%;
  // height: 200px;
  padding: 94px 0 20px 30px;
  background-image: url("../../../assets/tempfile/ds/headerBg/header4.png");
  background-size: 100% 100%;
  margin: 10px 0;
  border-radius: 10px;
  .headerText {
    display: flex;
    color: #333333;
    align-items: baseline;
    .text1 {
      font-size: 18px;
      line-height: 27px;
      font-weight: 600;
      letter-spacing: 2px;
    }
    .text2 {
      font-size: 10px;
      line-height: 14px;
      margin-left: 8px;
    }
  }
  .info-body {
    margin-top: 34px;
    .info-body-item {
      color: #666666;
      font-size: 10px;
      margin-bottom: 4px;
      align-items: center;
    }
  }
}
.selectClass{
  border: 2px solid #AE2B34 !important;
}
</style>

