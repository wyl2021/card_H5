<template>
  <div>
    <van-popup v-model="show" position="bottom" round :close-on-click-overlay="false">
      <div class="topCard">
        <div class="t1">
          <div class="line"></div>
          企业成员
        </div>
        <van-button @click="commitUser" :color="color" class="confirmButton">确定切换</van-button>
      </div>
      <div class="h-60"></div>
      <div v-if="showFilter" class="filterBox">
        <van-search v-model="filterText" placeholder="请输入名称搜索" :show-action="false" />
      </div>
      <!--   -->
      <div @scroll="getAddList" class="scrollS">
        <div class="nameBox" :class="{ selectName: nameIndex == index }" :style="{ '--color': color }"
          v-for="(item, index) in nameList" :key="index" @click="getSelect(index)">
          <div class="nameEn">{{ item.name || "正在加载" }}</div>
          <div class="namePost">{{ item.post || "正在加载" }}</div>
        </div>

        <p class="status">{{ status }}</p>
      </div>
      <div class="h-10"></div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    // nameList: {
    //   type: Array,
    //   default: [],
    // },
    // status: {
    //   type: String,
    //   default: "下拉加载",
    // },
    color: {
      type: String,
      default: "#422187",
    },
    selectStyle: {
      type: Object,
      default: function () {
        return {
          // border: ,
          // qrName: "扫描二维码，添加我为好友",
        };
      },
    },
    showFilter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      nameList: [],
      nameIndex: 0,
      page: 1,
      size: 10,
      status: '下拉加载',
      filterText: ''
    };
  },
  computed: {
    selectedColor() {
      // 根据 nameIndex 和 index 动态计算边框颜色
      return this.nameIndex === this.index ? `var(--color)` : "transparent";
    },
    // selectedBackgroundColor() {
    //   // 根据 nameIndex 和 index 动态计算背景颜色
    //   return this.nameIndex === this.index ? `rgba(var(--color-rgb), 0.1)` : 'rgba(0, 0, 0, 0.1)';
    // },
  },
  watch: {
    filterText: {
      handler(newVal) {
        this.debounceSearch()
      }
    },
    show(newVal) {
      if (newVal) {
        this.page = 1;
        this.nameList = [];
        this.getList();
      } else {
        this.filterText = ''
      }
    },
    showFilter(newVal) {
      if (!newVal) {
        this.filterText = ''
        this.page = 1;
        this.nameList = [];
        this.getList()
      }
    }
  },
  created() {
    this.getList();
  },
  methods: {

    // 防抖搜索
    debounceSearch() {
      if (this.searchTimer) {
        clearTimeout(this.searchTimer);
      }
      this.searchTimer = setTimeout(() => {
        // 重置页码，清空列表，重新获取数据
        this.page = 1;
        this.nameList = [];
        this.getList();
      }, 300);
    },

    getAddList(event) {
      const { scrollTop, clientHeight, scrollHeight } = event.target;
      if (scrollTop + clientHeight >= scrollHeight) {
        // 滚动条到达底部，触发懒加载

        this.page++;
        this.getList();
      }
    },
    getSelect(index) {
      this.nameIndex = index;

    },
    commitUser(id) {

      this.$emit("commitUserName", this.nameList[this.nameIndex].id);
      // this.show=false
    },
    async getList() {
      await this.$http
        .cardUserList({ page: this.page, size: this.size, name: this.filterText.trim() })
        .then((item) => {
          if (item.data.list.length == 0 || item.data.list.length < 10) {
            this.status = "没有更多了"
          }
          // console.log("用户列表", item);
          // item.data.list.forEach((item2, index) => {
          //   this.nameList.push(item2)
          // })
          // 如果是第一页，则替换列表；否则追加列表
          if (this.page === 1) {
            this.nameList = item.data.list;
          } else {
            item.data.list.forEach((item2) => {
              this.nameList.push(item2)
            })
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped vars="{ selectName }">
.topCard {
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 10px 18px 0 5px;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 9;

  .t1 {
    padding: 10px 14px 12px 14px;
    // border: 1px solid #000;
    font-size: 15px;
  }


}

.nameBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px;
  padding: 10px;

  .nameEn {
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }

  .namePost {
    font-size: 12px;

    color: #666;
  }
}

.listA {
  background: rgba(174, 43, 52, 0.05);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  border: 1px solid #ae2b34;
}

.status {
  text-align: center;
  font-size: 12px;
}

.h-10 {
  height: 10px;
}

.selectName {
  border: 1px solid var(--color);
  background-color: rgba(var(--color), 0.1);
}

.scrollS {
  height: 430px;
  /* 设置一个固定的高度 */
  overflow-y: auto;
  /* 开启滚动 */
}

.filterBox {
  width: 100%;
  background-color: white;
  padding: 5px;
  border-bottom: 1px solid #f0f0f0;

  .van-search {
    width: 100%;
  }
}
</style>
