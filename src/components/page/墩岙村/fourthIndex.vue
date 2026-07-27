<template>
    <div style="margin: 12px 18px">
      <div style="height: 2px"></div>
      <headerContent
        headerImg="dac/headerImage/xwzx.png"
        width="126px"
        height="48px"
      ></headerContent>
      <div class="departmentBox">
        <div
          class="departmentItem"
          v-for="(item, index) in list"
          :key="index"
          @click="$router.push({ path: '/solutionInfo', query: { id: item.id } })"
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

    </div>
  </template>

  <script>
  import { Toast } from "vant";
  export default {
    data() {
      return {
        list: [],
      };
    },
    created() {
      this.getTabList();
    },

    methods: {

      getTabList() {
        this.$http
          .solutionTypeList()
          .then((res) => {
            // this.productList = res.data.list[0].solution_list;
            const rData = res.data.list.find((item) => item.name ==="新闻资讯");
            console.log(res,rData)
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
