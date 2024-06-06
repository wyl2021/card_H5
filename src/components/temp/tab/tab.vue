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
          :style="{'--color':color}"
        >
          {{ item.name }}
          <div v-if="tabId == item.id" class="bottom" :style="{'--color':color}"></div>
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
    color:{
      type:String,
      default:'#00599d'
    }
  },
  data() {
    return {};
  },
  methods: {
    butTab(id) {
      console.log(id)
      this.$emit("butTab", id);
    },
  },
};
</script>

<style lang="scss" scoped vars="{ bottom }">
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
  $color:var(--color);
  background:#{$color} ;
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
  $color:var(--color);
  color: #{$color};
  font-weight: 600;
}
</style>
