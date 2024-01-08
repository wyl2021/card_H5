<template>
  <div>
    <div class="tab">
      <div :class="{ topClass: isTob }" class="topClass1">
        <div
          @click="butTab(item.id)"
          v-for="(item, index) in tabList"
          :key="index"
          class="tabText"
          :class="{ selectTabText: tabId == item.id }"
        >
          {{ item.name }}
          <div v-if="tabId == item.id" class="bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabList: Array,
    tabId: String,
    isTob: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    butTab(id) {
      this.$emit("butTab", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  // overflow-x: auto;
  // width: 100%;
}
.tabText {
  color: #999999;
  font-size: 14px;
  line-height: 20px;
  margin-right: 10px;
  white-space: nowrap;
  flex: 1;
  text-align: center;
}
.bottom {
  width: 19px;
  height: 3px;
  border-radius: 22px;
  opacity: 1;
  margin: 0 auto;
  margin-top: 5px;
  position: relative;
  // bottom: 5rpx;
  background: #00599d;
  opacity: 1;
}
.topClass {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9;
  border-radius: 0 !important;
  width: 100%;
  overflow-x: auto;
}
.topClass1 {
  display:flex;
  flex-direction: row;
  // justify-content: flex-start;
  // justify-content: space-around;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px 10px;
  border-radius: 10px;
  width: 100%;
  overflow-x: auto;
  // overflow-x: auto;
}
.selectTabText {
  color: #00599d;
}
</style>
