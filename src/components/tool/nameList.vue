<template>
  <div>
    <van-popup
      v-model="show"
      position="bottom"
      round
      :close-on-click-overlay="false"
    >
      <div class="topCard">
        <div class="t1">
          <div class="line"></div>
          企业成员
        </div>
        <van-button @click="commitUser" :color="color" class="confirmButton"
          >确定切换</van-button
        >
      </div>
      <div class="h-60"></div>
      <!--   -->
      <div class="nameBox" :class="{'selectName':nameIndex==index}"  :style="{'--color': color,}" v-for="(item, index) in nameList" :key="index" @click="getSelect(index)">
        <div class="nameEn">{{ item.name }}</div>
        <div class="namePost">{{ item.post }}</div>
      </div>
      <p class="status">{{ status }}</p>
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
    status: {
      type: String,
      default: "下拉加载",
    },
    color: {
      type: String,
      default: "#422187",
    },
    selectStyle:{
      type:Object,
      default: function () {
        return {
          // border: ,
          // qrName: "扫描二维码，添加我为好友",
        };
      },
    }
  },
  data() {
    return {
      nameList: [],
      nameIndex:0
    };
  },
  computed: {
    selectedColor() {
      // 根据 nameIndex 和 index 动态计算边框颜色
      return this.nameIndex === this.index ? `var(--color)` : 'transparent';
    },
    // selectedBackgroundColor() {
    //   // 根据 nameIndex 和 index 动态计算背景颜色
    //   return this.nameIndex === this.index ? `rgba(var(--color-rgb), 0.1)` : 'rgba(0, 0, 0, 0.1)';
    // },
  },
  created() {
    this.getList();
  },
  methods: {
    getSelect(index){
        this.nameIndex=index
        console.log(this.nameIndex)
    },
    commitUser(id) {
      console.log("确定切换");
      this.$emit("commitUser", id);
      // this.show=false
    },
    async getList() {
      // await this.$http.cardUserList().then((item)=>{
      //   console.log('用户列表',item)
      //   this.nameList=item.data.list
      // })
      this.nameList = [
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
        {
          name: "全波",
          post: "/销售主管",
        },
      ];
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
.selectName{
  border:1px solid var(--color);
  background-color: rgba(var(--color),  0.1);

}

</style>
