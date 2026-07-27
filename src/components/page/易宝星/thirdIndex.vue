<template>
  <div style="margin: 12px 18px">
    <div style="height: 2px"></div>
    <headerContent
      headerImg="yt/headerImage/xglj.png"
      width="77px"
      height="48px"
    >
      <template #content>
        <!-- <div class="qrcode-container">
          <img
            width="200px"
            height="200px"
            :src="IMG + 'yt/image/gzh.jpg?time=' + time"
          />
          <img
            width="200px"
            height="200px"
            :src="IMG + 'yt/image/2941741597145_.pic.jpg?time=' + time"
          />
        </div> -->
        <!-- <div class="qrCord">
          <div
            class="qrBox"
            v-for="(item, index) in [
              { url: 'yt/image/gzh.jpg', name: '易通公众号' },
              { url: 'yt/image/sph.jpg', name: '易通视频号' },
            ]"
            :key="index"
          >
            <img
            v-if="index==1"
              :src="IMG+item.url"
              width="200px"
              height="200px"
              class="image"
              @click="getImg(IMG+item.url)"
            />

            <div class="qrName">{{ item.name }}</div>
          </div>
        </div> -->

        <div class="link-box">
          <p>
            <img :src="IMG + 'yt/image/gzh.png?time=' + time" />
            <span>易通公众号</span>
          </p>
          <p>
            <img :src="IMG + 'yt/image/sph.png?time=' + time" />
            <span>易通视频号</span>
          </p>
        </div>
      </template>
    </headerContent>
    <headerContent
      headerImg="yt/headerImage/xwzx.png"
      width="126px"
      height="48px"
    ></headerContent>
    <div class="departmentBox">
      <div
        class="departmentItem"
        v-for="(item, index) in list"
        :key="index"
        @click="getTo(item.pdf, item.name_en === '视频')"
      >
        <div class="name">{{ item.name }}</div>
        <van-image
          v-if="item.image"
          :src="item.image.url"
          style="margin-top: 5px"
        ></van-image>
        <div class="d-flex jc-sb f-12" style="color: #666">
          {{ item.describe }}
          <div
            class="d-flex"
            style="justify-content: flex-start; color: #787878; font-size: 12px"
          >
            查看更多
            <van-icon name="arrow" size="12px"></van-icon>
          </div>
          <!-- <more title="查看更多" path="" float="flex-start" color="#787878"></more> -->
        </div>
      </div>
    </div>
    <!-- 图片预览对话框 -->
    <div v-if="currentImage" class="image-preview">
      <img :src="currentImage" />
      <button @click="currentImage = null">关闭</button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      list: [],
      IMG: this.IMG,
      time: null,
      currentImage: null,
    };
  },
  created() {
    this.time = Date.now();
    this.getTabList();
  },

  methods: {
    getImg(imgSrc) {
      this.currentImage = imgSrc;
    },
    getTo(str, type) {

      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      const url = type
        ? "/pages/index/article2?url=" + str
        : "/pages/index/article?url=" + str;
      uni.navigateTo({
        // 跳回小程序的路径
        url: url,
        // 以下回调方法可以不要，如果需要调试的时候可以加上
        success: function (res) {

        },
        fail: function (res) {

        },
        complete: function (res) {

        },
      });
      Toast.clear;
    },
    getTabList() {
      this.$http
        .categorySolutionTypeList({
          parent_name: "新闻列表",
        })
        .then((res) => {
          // this.productList = res.data.list[0].solution_list;
          const rData = res.data.list.find((item) => item.name === "新闻");
          this.list = rData ? rData.solution_list : [];
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.f-12 {
  font-size: 12px;
}
.link-box {
  display: flex;
  justify-content: space-evenly;
}
.link-box p {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.link-box span {
  color: #333333;
  font-size: 12px;
}
.link-box img {
  width: 100px;
  height: 100px;
  margin: 10px 0;
}
.qrcode-container {
  display: flex;
  flex-direction: column; /* 纵向排列 */
  align-items: center;
}
.departmentBox {
  .departmentItem {
    border-radius: 4px;
    // padding-bottom: 5px;
    text-align: center;
    background-color: #fff;
    padding: 12px;
    margin-bottom: 12px;
    .name {
      font-size: 14px;
      font-weight: 500;
      color: #333333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      text-align: left;
    }
  }
}
.qrCord {
  // display: grid;
  // grid-template-columns: 49% 49%;
  // column-gap: 10px;
  // row-gap: 10px;
  .qrBox {
    background-color: #fff;
    // padding: 12px;
    .image {
      // display: flex;
      // margin: 0 auto;
    }
    .qrName {
      margin-top: 10px;
      text-align: center;
      font-size: 12px;
    }
  }
}
.image-preview {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000; /* 确保预览框在其他内容之上 */
}
.image-preview img {
  max-width: 100%;
  max-height: 100%;
}
</style>
