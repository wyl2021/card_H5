<template>
  <div class="">
    <div class="header">
      <van-image :src="IMG + 'dpkx/image/cpBg.png'" class="cpBg"  />
      <van-search
        v-model="value"
        :show-action="showAction"
        placeholder="搜索"
        @search="onSearch"
        @cancel="onCancel"
        @focus="onFocus"
        shape="round"
      />
    </div>
    <div class="p-page d-flex align-start">
      <div class="tab">
        <div
          class="tabBox"
          v-for="(item, index) in tabList"
          :key="index"
          @click="activeKey = index"
          :class="{ selectTab: activeKey == index }"
        >
          {{ item }}
        </div>
      </div>
      <div class="contentBox">
        <div class="title">{{ getList(tabList[activeKey]).name }}</div>
        <div
          class="productImage"
          :style="{
            backgroundImage: 'url(' + getUrl(item.image.url) + ')',
          }"
          v-for="(item, index) in getList(tabList[activeKey]).solution_list"
          @click="getTo(item.id)"
        >
          <div class="productItem">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      tabList: [],
      list: [],
       value: '',
       showAction: false

    };
  },
  // mounted() {
  //   this.getTab();
  // },
  created() {
    this.getTab();
  },
  methods: {
    getTo(id){
      this.$router.push({
        path:'/solutionInfo',
        query: { id: id },
      })
    },
    onSearch() {
      console.log(this.value)
    },
    onFocus() {
      this.showAction = true;
    },
    onCancel() {
      this.showAction = false;
    },
    getUrl(str) {
      return "'" + str + "'";
    },
    getTab() {
      this.$http.solutionTypeList().then((res) => {
        this.list = res.data.list;
        res.data.list.forEach((item) => {
          this.tabList.push(item.name);
        });
      });
    },
    getList(name) {
      return this.list.find((item) => item.name == name);
    },
  },
};
</script>

<style lang="scss" scoped>
.p-page {
  padding: 0 0 0 10px;
}
.productImage {
  width: 100%;
  height: 140px;
  background-size: 100% 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .productItem {
    height: fit-content;
    padding: 8px 0;
    text-align: center;
    background-color: rgba($color: #fff, $alpha: 0.6);
    width: 100%;
    font-size: 14px;
  }
}
.align-start {
  align-items: flex-start;
}
/deep/.contentBox {
  border-radius: 0 !important;
  margin: 0 0 0 10px !important;
  width: 100%;
}
.title {
  font-size: 14px;
  color: #333;
  font-weight: 800;
}
.tab {
  overflow-y: scroll;
  width: 72px;
  .tabBox {
    font-size: 14px;
    margin: 12px 0;
    padding: 8px 0;
    text-align: center;
    color: #666;
    white-space: nowrap;
  }
}
.selectTab {
  color: #6ebb54 !important;
  font-weight: 700;
  border-radius: 4px;
  background-color: #fff;
}
.header{
  background-color: #fff;
  .cpBg{
    margin: 0 12px;
    display: block;
  }
}
</style>
