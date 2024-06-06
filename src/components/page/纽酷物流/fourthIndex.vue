<template>
  <div>
    <img :src="IMG + 'nt/image/jjBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->

      <img class="logo" :src="IMG + 'nt/image/logo.png'" />
      <div class="" v-for="(item, index) in list" :key="index">
        <div v-if="item.name != ' '" class="name">
          <van-image
            width="6px"
            height="13px"
            class="m-r-10"
            :src="IMG + 'nt/icon/right2.png'"
          ></van-image
          >{{ item.name }}
        </div>
        <div class="gnwd" v-if="item.name == '国内网点'">
          <div
            class="item"
            :class="{ selectItem: selectIndex == index2 }"
            v-for="(item2, index2) in list2"
            :key="index2"
            @click="getAddress(item2, index)"
          >
            <van-image
              :src="
                selectIndex == index2
                  ? IMG + 'nt/icon/address.png'
                  : IMG + 'nt/icon/address2.png'
              "
              width="12px"
              height="12px"
            />
            {{ item2.name }}
          </div>
        </div>
        <div v-if="item.name == '海外仓'">
        <van-swipe  @change="onChange1" :height="178" :loop="false">
          <van-swipe-item  v-for="(item3,index3) in list3" :key="index3">
            <img :src="item3.image.url" width="100%" height="178px" />
          </van-swipe-item>
        </van-swipe>

        <div class="swipeSpan">{{ list3[swipeIndex].name }}</div>
        </div>
        <div>
          <div
            class="textStyle"
            v-for="(item2, index2) in item.describe.split(' ')"
            :key="index2"
          >
            {{ item2 }}
          </div>
          <van-image
            v-if="item.image"
            :src="item.image.url"
            width="100%"
          ></van-image>
        </div>
      </div>
    </div>
    <div class="h-70"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IMG: this.IMG,
      list: [],
      selectIndex: 0,
      swipeIndex:0
    };
  },
  created() {
    this.getList();
  },

  methods: {
    onChange1(index){
      this.swipeIndex=index
    },
    getAddress(item, index) {
      this.selectIndex = index;

      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$router.push({
        path: "/map",
        query: { address: item.name, name: item.describe, isTap: true },
      });
      Toast.clear;
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          console.log("列表信息", res.data);
          this.list = res.data.list.find(
            (item) => item.name == "简介"
          ).solution_list;
          this.list2 = res.data.list.find(
            (item) => item.name == "国内网点"
          ).solution_list;
          this.list3 = res.data.list.find(
            (item) => item.name == "海外仓"
          ).solution_list;
          console.log(this.list3)
        });

    },
  },
};
</script>

<style lang="scss" scoped>
.m-x {
  margin: 12px 16px;
}
.m-r-10 {
  margin-right: 10px;
}
.logoBg {
  // position: fixed;
  top: 0;
  width: 100%;
  height: 206px;
}
.content {
  z-index: 1;
  margin: -40px 0 0 0 !important;
  padding: 0 28px;
  position: relative;
  border-start-start-radius: 20px;
}
.logo {
  width: 153px;
  height: 24px;
}
.box {
  width: 100%;
  height: 200px;
  background-color: beige;
  margin-top: 12px;
}
.name {
  font-size: 14px;
  color: #484848;
  margin: 8px 0;
}

.historyBox {
  border-bottom: 1px double rgba($color: #355da8, $alpha: 0.1);
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
  .name {
    font-size: 14px;
    text-align: right;
    width: 120px;
    color: #333;
    /deep/ span {
      font-size: 8px;
      color: #333;
      margin-left: 2px;
    }
  }
  .describe {
    font-size: 10px;
    text-align: center;
    color: #666666;
  }
  .historySolid {
    width: 11px;
    height: 11px;
    background-size: 100% 100%;
    padding-top: 3px;
    .historySolids {
      width: 5px;
      height: 5px;
      background-size: 100% 100%;
      display: flex;
      margin: 0 auto;
    }
  }
  .line {
    width: 97px;
    height: 1px;
    background-color: #355da8;
  }
  .item {
    width: 70%;
    margin-left: 10px;
  }
}
.gnwd {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  column-gap: 10px;
  row-gap: 10px;
  .item {
    width: 91px;
    color: #484848;
    font-size: 11px;
  }
  .selectItem {
    border-bottom: rgba($color: #E14805, $alpha: 0.1) solid 1px;
    color: #e14805 !important;
  }
}

.swipeSpan{
  font-size: 12px;
  color: #484848;
  margin: 10px 0;
  text-align: center;
}
</style>
