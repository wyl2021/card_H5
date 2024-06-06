<template>
  <div class="">
    <van-tabs
      @change="change1"
      v-model="active"
      title-active-color="#355DA8"
      color="#355DA8"
      :swipe-threshold="2"
    >
      <van-tab v-for="(item, index) in tabList" :title="item.name" :key="index">
        <van-dropdown-menu
          active-color="#355DA8"
          :overlay="false"
          v-if="dayOption.length!=0"
        >
          <!-- @change="change" -->
          <van-dropdown-item v-model="dayIndex" :options="dayOption" />
        </van-dropdown-menu>
        <div class="contentBox" v-if="dayOption.length!=0">
          <van-image
            v-if="dayOption[dayIndex]"
            :src="dayOption[dayIndex].url"
          ></van-image>
          <p class="describe">{{ dayOption[dayIndex].describe }}</p>
          <div class="center">
            <van-image
              class="image"
              width="98px"
              height="98px"
              :src="IMG + 'kn/image/qrCode.png'"
            />
            <div class="qrText">更多详情请扫码关注 医院公众号</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [],
      dayIndex: 0,
      tabIndex: 0,
      dayOption: [],
    };
  },
  created() {
    this.getTabList();
  },
  methods: {
    change1(val) {
      console.log(val);
      this.dayIndex=0;
      this.tabIndex = val;
      this.getOption();
      console.log(this.dayOption.length==0)
    },
    getTo(id) {
      this.$router.push({
        path: "/categorySolutionInfo",
        query: { id: id },
      });
    },
    getTabList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "门诊" })
        .then((res) => {
          //  console.log("列表信息",res)
          // res.data.list.forEach((item)=>{
          //   this.tabList.push(item.name)
          // })
          this.tabList = res.data.list;
          this.getOption();
        });
    },
    getOption(list) {
      console.log(this.tabList);
      this.dayOption = [];
      if (this.tabList[this.tabIndex].solution_list.length > 0) {
        this.tabList[this.tabIndex].solution_list.forEach((item, index) => {
          this.dayOption.push({
            text: item.name,
            value: index,
            describe: item.describe
              ? item.describe
              : "注：黑色字体为专科门诊，蓝色字体为专家门诊，紫色字体为精品门诊。",
            url: item.image ? item.image.url : null,
          });
        });
      }

      console.log(this.dayOption);
    },
  },
};
</script>

<style lang="scss" scoped>
.describe {
  color: #666666;
  font-size: 11px;
  margin: 5px 0;
}

.qrText {
  color: #333333;
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
}
.image {
  display: flex;
  margin: auto;
}
/deep/ .van-dropdown-menu__bar {
  margin: 12px 16px;
  border-radius: 8px;
  box-shadow: none !important;
}
/deep/ .van-dropdown-item--down {
  margin: 0 16px;
}
</style>
