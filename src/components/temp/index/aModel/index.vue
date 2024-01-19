<!-- 第一个页面 -->

<template>
  <!-- class="home" -->
  <div  ref="scrollContainer">
    <van-image fit="cover" class="image" v-if="imageList.length>0" :key="index" v-for="(item,index) in imageList" :src="item"></van-image>
    <div class="h-50"></div>
    <tabbar  :active="0"></tabbar>

  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
import axios from "axios";
export default {
  components: {
    tabbar,
  },
  data() {
    return {
      topInfo: {
        name: "丁立谦",
        post: "总经理",
        phone: "18923413467",
        address: "深圳市南山区招商街道桃花园社区兴工路美年国际广场4栋505",
        email: "18923413467@163.com",
      }, ///名片
      cardId: 1, //名片下标
      twoInfo: {
        phone: "", ///手机号
        image1: require("@/assets/tempfile/aj/icon/phone.png"), //按钮1icon
        image2: require("@/assets/tempfile/aj/icon/address.png"), //按钮2icon
      }, ///第二个模块参数
      tabList: [
        {
          name: "测试测试测试",
          id: "cs1",
        },
        {
          name: "测试测试测试",
          id: "cs2",
        },
        {
          name: "测试测试测试",
          id: "cs3",
        },
        {
          name: "测试测试",
          id: "cs3",
        },
      ], ///tab栏列表
      tabId: "cs1", //默认tab
      tabIsTop: false, //用作下拉到一定程度现实tab栏
      imageList:[],
      pageId:""
    };
  },

  watch: {},
  // mounted(){
  //   this.getPage()
  // },
  // updated(){
  //   this.getPage()
  // },
  mounted() {
    window.addEventListener("scroll", this.scrolling);
    this.fetchDataFromApi()
    // this.getPage()


  },
  destroyed() {
    window.removeEventListener("scroll", this.scrolling);
  },
  methods: {
    async fetchDataFromApi() {
      // "bebbd1a0-b522-11ee-a473-00163e237fe6"
      const params = { company: localStorage.getItem("id") };
     await axios
        .get("https://staticapi.oa00.com/v1/app/company/button/list", {
          params,
        }) // 这里替换为你要连接的接口地址
        .then((response) => {
          console.log(response);
          if (response.data.code == 200) {
            if (response.data.data.total != 0) {
              console.log("pageId",response.data.data.list[0].id)
              // localStorage.setItem("page0", response.data.data.list[0].id);
            this.pageId=response.data.data.list[0].id
              console.log(this.pageId)
              this.getPage()
              // this.buttonId=this.configTabs.list[0].buttonId
              // this.getPage(0)
            }
          }
          // console.log("11111",this.configTabs)
          // this.responseData = response.data; // 将返回的数据赋值给responseData变量
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPage(){
      // setInterval( console.log("也mai",localStorage.getItem("page0")),10000)

      const params = { button: this.pageId };
      // console.log("也mai",localStorage.getItem("page0"))
      axios
        .get("https://staticapi.oa00.com/v1/app/company/buttonImage/list", {
          params,
        }) // 这里替换为你要连接的接口地址
        .then((response) => {
          console.log(response);
          if (response.data.code == 200) {
            if (response.data.data.length != 0) {
              // let imageUrl={}
              response.data.data.forEach((element, index) => {
                this.imageList.push(element.url)
              });
              // this.$store.commit('page'+(index+1), imageUrl)
              // console.log("页面数据",JSON.stringify(imageUrl))
              // localStorage.setItem("page"+index, imageUrl.toString());
              // console.log("本地储存数据",localStorage.getItem("page"+index))
            }
          }
          console.log("11111",this.imageList)
          // this.responseData = response.data; // 将返回的数据赋值给responseData变量
        })
        .catch((error) => {
          console.log(error);
        });
      },
    submitText(text) {
      if (text) {
        let t = [];
        text
          .split("\n")
          .forEach((item) => t.push(`<p style=margin:0px;>${item.trim()}</p>`));
        return t.join("\n");
      }
    },
    scrolling() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      var tabScroll = document.getElementById("tap").offsetTop;
      console.log(scrollTop)
      console.log("获取tap栏高度",tabScroll)
      if (scrollTop >= tabScroll) {
        this.tabIsTop = true;
      } else {
        this.tabIsTop = false;
      }
    },
    butTab(id) {
      // console.log(id);
      this.tabId = id;
      // window.location.hash=this.tabId
      var id = this.tabId.replace("#", "");
      console.log(id);
      document.getElementById(id).scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  &-main {
    min-height: 100vh;
    overflow-y: scroll;
    // width:100%;
    margin: 0 16px;
    // padding: 20px 0;
  }
}
/deep/ .phoneButton {
  background: linear-gradient(90deg, #0e58a3 10%, #0e58a3 100%) !important;
}
/deep/ .addressButton {
  background: linear-gradient(90deg, #0e58a3 10%, #0e58a3 100%) !important;
}
.image{
  display: block;
}
</style>




