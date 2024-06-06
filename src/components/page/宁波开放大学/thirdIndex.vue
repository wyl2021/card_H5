<template>
  <div class="p-page">
    <!-- <img :src="IMG +'kn/image/qj1.png'" width="100%" />
    <img :src="IMG +'kn/image/qj2.png'" width="100%"/> -->
    <!-- <van-dialog
      confirm-button-color="#a51c30"
      v-model="show"
      title="提示"
      show-cancel-button
      message="是否跳转到招生小程序查看更多"
      @confirm="getConfirm"
    ></van-dialog> -->
  <headerContent
  headerImg="nbkd/headerImage/zszy.png"
      width="174px"
      height="26px"
      margin="unset">
    <template #content>
        <div
          v-for="(item, index) in getContent('招生专业').solution_list"
          class="zsBox"
          :key="index"

        >
          <div class="d-flex name">
            <div class="circular"></div>
            {{ item.name }}
          </div>
          <van-image :src="item.image.url" v-if="item.image"></van-image>
        </div>
      </template>
      <!-- <template #headerRight>
        <more
          title="查看更多"
          :icon="IMG + 'nbkd/icon/right.png'"
          color="#666666"
          path="thirdIndex"
        ></more>
      </template> -->
    </headerContent>
  </div>
</template>

<script>
import { Dialog } from "vant-green";
export default {
  data() {
    return {
      show: true,
      data:[]
    };
  },
  created() {
    // this.get();
    this.getConfirm()
  },
  methods: {
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    },
    getContent(name) {
    let list=this.data.find((item) => item.name == name)
      return list?list:[];
    },
    // 内容信息
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          console.log("列表信息", res);
          this.data = res.data.list;
        });
    },
    get() {
      Dialog.confirm({
        title: "提示",
        message: "是否跳转到招生小程序查看更多",
        confirmButtonText: "取消",
        cancelButtonText: "确定",
      })
        .then(() => {
          // on confirm
          console.log("点击确定");
        })
        .catch(() => {
          // on cancel
        });
    },
    getConfirm(){
      console.log("点击确定");
      this.getList()
      uni.navigateTo({
        // 跳回小程序的路径
        url:
          "/pages/index/wx?appId=wx076c954778daf6ca&name=是否跳转到招生小程序查看更多",
        // 以下回调方法可以不要，如果需要调试的时候可以加上
        success: function (res) {
          console.log("success", res);
        },
        fail: function (res) {
          console.log("fail", res);
        },
        complete: function (res) {
          console.log("complete", res);
        },
      });
    },
    getCancel(){
      this.show=false
    }
  },
};
</script>

<style lang="scss" scoped>
.zsBox {
  .circular {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 5px;
    background-color: #a51c30;
  }
  .name {
    font-size: 14px;
    color: #333;
    margin: 10px 0;
  }
  .image {
  }
}
</style>
