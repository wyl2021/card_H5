<template>
  <div>
    <div class="tab">
      <div class="name red" @click="getList()">综合</div>
      <div class="name" @click="modelShow = true">筛选</div>
    </div>
    <van-dialog
      v-model="modelShow"
      title="全部筛选"
      show-cancel-button
      @confirm="getContent"
    >
      <div class="nameList">
        <div
          class="tabName"
          :class="{ select: nameIndex == index }"
          v-for="(item, index) in nameList"
          :key="index"
          @click="nameIndex = index"
        >
          {{ item }}
        </div>
      </div>
    </van-dialog>
    <div
      class="contentBox productBox"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="name d-flex">
        <div class="line"></div>
        {{ item.name }}
      </div>
      <div class="productItem">
        <div
          class="describe"
          v-if="select == index && isShow ? true : index2 <= 1"
          v-for="(item2, index2) in item.solution_list"
          :key="index2"
        >
          <van-image :src="item2.image.url" v-if="item2.image"></van-image>
          {{ item2.name }}
        </div>
      </div>
      <div
        class="showText"
        @click="getShow(index)"
        v-if="item.solution_list.length > 2"
      >
        {{ select == index && isShow ? "收起" : "展开" }}
      </div>
    </div>
    <div class="h-50"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: 0,
      isShow: true,
      list: [],
      modelShow: false,
      nameList: [],
      nameIndex: 0,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // getNameList(){
    //   ,
    // }

    getContent() {
      console.log(this.nameList[this.nameIndex]);
      this.$http.solutionTypeList().then((res) => {
        console.log("列表信息", res);
        res.data.list.forEach((item) => {
          if (item.name == this.nameList[this.nameIndex]) {
            this.list = [item];
          }
        });
      });
      console.log(this.list);
      this.modelShow = false;
    },
    getList() {
      this.list = [];
      this.nameList = [];
      this.$http.solutionTypeList().then((res) => {
        console.log("列表信息", res);
        this.list = res.data.list;
        res.data.list.forEach((res2) => {
          this.nameList.push(res2.name);
        });
      });
    },
    getShow(index) {
      this.select = index;
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;

  .red {
    color: #ff0000 !important;
    border-right: 1px solid #eaeaea;
  }

  .name {
    font-size: 14px;
    padding: 8px 12px;
    color: #666666;
  }
}
.productBox {
  margin-top: 5px;
  .name {
    align-items: center;
    font-size: 14px;
    color: #333333;
    font-weight: 400;
    .line {
      width: 3px;
      height: 20px;
      margin-right: 5px;
      background-color: #ff0000;
    }
  }
  .productItem {
    display: grid;
    grid-template-columns: 49% 49%;
    column-gap: 10px;
    row-gap: 10px;
    margin-top: 12px;
    .describe {
      text-align: center;
      color: #666666;
      font-size: 12px;
    }
  }
}
.showText {
  color: #333333;
  font-size: 12px;
  text-align: center;
}
.nameList {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin: 8px 10px;
  .select {
    border: 1px solid #ff0000;
    color: #ff0000 !important;
    background-color: rgba($color: #ff0000, $alpha: 0.05) !important;
  }
  .tabName {
    text-align: center;
    background-color: #f6f6f6;
    padding: 7px 16px;
    border-radius: 12px;
    font-size: 14px;
    color: #666666;
  }
}
.h-50{
  height: 50px;
}
</style>
