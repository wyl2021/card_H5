<template>
  <div>
    <img :src="IMG + 'kn/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->

      <img class="logo" :src="IMG + 'kn/image/logo.png'" />
      <div class="companyName">宁波大学附属康宁医院</div>
      <div class="" v-for="(item, index) in list" :key="index">
      <div v-if="item.name!=' '" class="name">{{ item.name }}</div>
      <div class="textStyle" v-for="(item2,index2) in item.describe.split(' ')" :key="index">{{ item2 }}</div>
      <van-image  v-if="item.image" :src="item.image.url" width="100%"></van-image>
      </div>
    </div>
    <div class="m-x">
      <headerContent
      headerImg="kn/headerImage/lsyg.png"
      height="48px"
      width="110px"

    >
      <template #content>
        <div
          v-for="(item, index) in list2"
          :key="index"
          class="historyBox"
        >
          <van-image
            :src="item.image.url"
            width="100px"
            height="60px"
          ></van-image>
          <div class="item">
            <div class="name">{{ item.name }}<span>年</span></div>
            <div class="d-flex">
              <div
                :style="{
                  backgroundImage: 'url(' + IMG + 'kn/icon/solid.png)',
                }"
                class="historySolid"
              >
                <div
                  :style="{
                    backgroundImage: 'url(' + IMG + 'kn/image/solid.png)',
                  }"
                  class="historySolids"
                ></div>
              </div>
              <div class="line"></div>
              <van-image
                :src="IMG + 'kn/image/hollow.png'"
                width="5px"
                height="5px"
              ></van-image>
            </div>
            <div class="describe">{{ item.describe }}</div>
          </div>
        </div>
      </template>
    </headerContent>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      IMG: this.IMG,
      list: [],
      list2: [],
    };
  },
  created() {
    this.getList();
  },

  methods: {
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          console.log(res.data);
          res.data.list.forEach((element) => {
            if (element.name == "医院介绍") {
              this.list = element.solution_list;
            } else if (element.name == "历史沿革") {
              this.list2 = element.solution_list;
              console.log("公司介绍", this.list2);
            }
          });
          // this.list=res.data.list.find((item)=>item=="使命愿景").solution_list
          // this.list2=res.data.list.find((item)=>item=="公司介绍").solution_list
          // console.log(this.list,this.list2,"1231231")
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.m-x{
  margin: 12px 16px ;
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
  width: 50px;
  height: 50px;
  margin: -50px 0 0 10px;
}
.box {
  width: 100%;
  height: 200px;
  background-color: beige;
  margin-top: 12px;
}
.name{
  font-size: 12px;
  color: #355DA8;
  margin: 8px 0 ;
}
.companyName {
  font-size: 13px;
  margin: 6px 0 8px 10px;
  color: #355da8;
  font-weight: 500;
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
</style>
