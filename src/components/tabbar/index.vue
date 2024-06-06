<template>
  <div>
    <van-tabbar
      v-model="localActive"
      @change="changeTab"
      :active-color="configTabs.activeColor"
      :inactive-color="configTabs.inactiveColor"
    >
      <van-tabbar-item :to="i.path+'?title='+i.text" v-for="(i, n) in configTabs.list" :key="n">
        {{ i.text }}
        <template #icon="props">
          <img :src="props.active ? i.activeIcon : i.inactiveIcon" />
        </template>
      </van-tabbar-item>
      <!-- <van-tabbar-item :to="i.path" v-for="(i, n) in configTabs.list" :key="n">
        {{ i.text }}
        <template #icon="props">
          <img :src="props.active ? i.activeIcon : i.inactiveIcon" />
        </template>
      </van-tabbar-item> -->
    </van-tabbar>
    <!-- <div style="height:5px"></div> -->
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";
import data from "@/components/tabbar/tabbar.js";

export default {
  name: "tabbar",
  props: {
    // active: {
    //   type: Number,
    //   default: 0,
    // },
    // configTabs: {
    //   type: Object,
    //   default: () => ({
    //     activeColor: "#0E58A3",
    //     inactiveColor: "#333",
    //     // list: [],
    //     // id: "",
    //     // buttonId:null
    //   }),
    // },
    condition: {
      type: String,
      default: "yx",
    },
  },
  data() {
    return {
      localActive: 0,//this.active,
      // activeIndex: null,
      // localActive: this.active,
      // condition:'yx',
      configTabs: {
        activeColor: "#0E58A3",
        inactiveColor: "#333",
        // list: [],
        id: "",
        buttonId:null
      },
    };
  },
  mounted() {
    this.getTab();
  },
  created() {
    // console.log(data)
    // console.log(this.configTabs,this.condition)
     this.configTabs=data.data[`${localStorage.getItem("id")}`]
     this.localActive = this.active;
  },
  // created() {
  //   console.log(localStorage.getItem("id"));
  //   this.id = localStorage.getItem("id");
  //   console.log(this.id);
  //   switch (this.id) {
  //     case "aj":
  //       this.configTabs = {
  //         activeColor: "#0E58A3",
  //         inactiveColor: "#333",
  //         list: [
  //           {
  //             id: 0,
  //             text: "首页",
  //             activeIcon: require("@/assets/tempfile/aj/tabIcon/sy.png"),
  //             inactiveIcon: require("@/assets/tempfile/aj/tabIcon/nosy.png"),
  //             path: "/",
  //           },
  //           {
  //             id: 1,
  //             text: "走近",
  //             activeIcon: require("@/assets/tempfile/aj/tabIcon/zj.png"),
  //             inactiveIcon: require("@/assets/tempfile/aj/tabIcon/nozj.png"),
  //             path: "/thirdIndex",
  //           },
  //           {
  //             id: 2,
  //             text: "运输",
  //             activeIcon: require("@/assets/tempfile/aj/tabIcon/ys.png"),
  //             inactiveIcon: require("@/assets/tempfile/aj/tabIcon/noys.png"),
  //             path: "/secondIndex",
  //           },
  //           {
  //             text: "方案",
  //             activeIcon: require("@/assets/tempfile/aj/tabIcon/fa.png"),
  //             inactiveIcon: require("@/assets/tempfile/aj/tabIcon/nofa.png"),
  //             path: "/fourthIndex",
  //           },
  //         ],
  //       };
  //       break;
  //     case "nh":
  //       this.configTabs = {
  //         activeColor: "#0E58A3",
  //         inactiveColor: "#333",
  //         list: [
  //           {
  //             id: 0,
  //             text: "首页",
  //             activeIcon: require("@/assets/tempfile/nh/tabIcon/shouye2.png"),
  //             inactiveIcon: require("@/assets/tempfile/nh/tabIcon/shouye.png"),
  //             path: "/",
  //           },
  //           {
  //             id: 1,
  //             text: "动态",
  //             activeIcon: require("@/assets/tempfile/nh/tabIcon/dt.png"),
  //             inactiveIcon: require("@/assets/tempfile/nh/tabIcon/nodt.png"),
  //             path: "/thirdIndex",
  //           },
  //           {
  //             id: 2,
  //             text: "产品",
  //             activeIcon: require("@/assets/tempfile/nh/tabIcon/chanpin2.png"),
  //             inactiveIcon: require("@/assets/tempfile/nh/tabIcon/chanpin.png"),
  //             path: "/secondIndex",
  //           },
  //           {
  //             id: 3,
  //             text: "探索",
  //             activeIcon: require("@/assets/tempfile/nh/tabIcon/ts.png"),
  //             inactiveIcon: require("@/assets/tempfile/nh/tabIcon/nots.png"),
  //             path: "/fourthIndex",
  //           },
  //         ],
  //       };
  //       break;
  //     case "jh":
  //       this.configTabs = {
  //         activeColor: "#DA2321",
  //         inactiveColor: "#333",
  //         list: [
  //           {
  //             id: 0,
  //             text: "首页",
  //             activeIcon: require("@/assets/tempfile/jh/shouye_active.png"),
  //             inactiveIcon: require("@/assets/tempfile/jh/shouye.png"),
  //             path: "/",
  //           },
  //           {
  //             id: 1,
  //             text: "产品",
  //             activeIcon: require("@/assets/tempfile/jh/chanpin_active.png"),
  //             inactiveIcon: require("@/assets/tempfile/jh/chanpin.png"),
  //             path: "/thirdIndex",
  //           },
  //           {
  //             id: 2,
  //             text: "案例",
  //             activeIcon: require("@/assets/tempfile/jh/anli_active.png"),
  //             inactiveIcon: require("@/assets/tempfile/jh/anli.png"),
  //             path: "/secondIndex",
  //           },
  //           {
  //             text: "探索",
  //             activeIcon: require("@/assets/tempfile/jh/tansuo_active.png"),
  //             inactiveIcon: require("@/assets/tempfile/jh/tansuo.png"),
  //             path: "/fourthIndex",
  //           },
  //         ],
  //       };
  //       break;
  //     case "gj":
  //       this.configTabs = {
  //         activeColor: "#392DDD",
  //         inactiveColor: "#333",
  //         list: [
  //           {
  //             id: 0,
  //             text: "首页",
  //             activeIcon: require("@/assets/tempfile/gj/tabIcon/shouye2.png"),
  //             inactiveIcon: require("@/assets/tempfile/gj/tabIcon/shouye.png"),
  //             path: "/",
  //           },
  //           {
  //             id: 1,
  //             text: "动态",
  //             activeIcon: require("@/assets/tempfile/gj/tabIcon/dongtai2.png"),
  //             inactiveIcon: require("@/assets/tempfile/gj/tabIcon/dongtai.png"),
  //             path: "/thirdIndex",
  //           },
  //           {
  //             id: 2,
  //             text: "合作",
  //             activeIcon: require("@/assets/tempfile/gj/tabIcon/hezuo2.png"),
  //             inactiveIcon: require("@/assets/tempfile/gj/tabIcon/hezuo.png"),
  //             path: "/secondIndex",
  //           },
  //           {
  //             text: "探索",
  //             activeIcon: require("@/assets/tempfile/gj/tabIcon/tansuo2.png"),
  //             inactiveIcon: require("@/assets/tempfile/gj/tabIcon/tansuo.png"),
  //             path: "/fourthIndex",
  //           },
  //         ],
  //       };
  //       break;
  //     case "tsz":
  //       this.configTabs = {
  //         activeColor: "#E50015",
  //         inactiveColor: "#333",
  //         list: [
  //           {
  //             id: 0,
  //             text: "首页",
  //             activeIcon: require("@/assets/tempfile/tsz/tabIcon/image5.png"),
  //             inactiveIcon: require("@/assets/tempfile/tsz/tabIcon/image1.png"),
  //             path: "/",
  //           },
  //           {
  //             id: 1,
  //             text: "资讯",
  //             activeIcon: require("@/assets/tempfile/tsz/tabIcon/image6.png"),
  //             inactiveIcon: require("@/assets/tempfile/tsz/tabIcon/image2.png"),
  //             path: "/thirdIndex",
  //           },
  //           {
  //             id: 2,
  //             text: "产品",
  //             activeIcon: require("@/assets/tempfile/tsz/tabIcon/image7.png"),
  //             inactiveIcon: require("@/assets/tempfile/tsz/tabIcon/image3.png"),
  //             path: "/secondIndex",
  //           },
  //           {
  //             text: "探索",
  //             activeIcon: require("@/assets/tempfile/tsz/tabIcon/image8.png"),
  //             inactiveIcon: require("@/assets/tempfile/tsz/tabIcon/image4.png"),
  //             path: "/fourthIndex",
  //           },
  //         ],
  //       };
  //       break;
  //     case "ym":
  //       this.configTabs = {
  //         activeColor: "#168ED3",
  //         inactiveColor: "#333",
  //         list: [
  //           {
  //             id: 0,
  //             text: "名片",
  //             activeIcon: require("@/assets/tempfile/ym/tabIcon/mp.png"),
  //             inactiveIcon: require("@/assets/tempfile/ym/tabIcon/nomp.png"),
  //             path: "/",
  //           },
  //           {
  //             id: 1,
  //             text: "动态",
  //             activeIcon: require("@/assets/tempfile/ym/tabIcon/dt.png"),
  //             inactiveIcon: require("@/assets/tempfile/ym/tabIcon/nodt.png"),
  //             path: "/thirdIndex",
  //           },
  //           {
  //             id: 2,
  //             text: "服务",
  //             activeIcon: require("@/assets/tempfile/ym/tabIcon/fw.png"),
  //             inactiveIcon: require("@/assets/tempfile/ym/tabIcon/nofw.png"),
  //             path: "/secondIndex",
  //           },
  //           {
  //             text: "探索",
  //             activeIcon: require("@/assets/tempfile/ym/tabIcon/ts.png"),
  //             inactiveIcon: require("@/assets/tempfile/ym/tabIcon/nots.png"),
  //             path: "/fourthIndex",
  //           },
  //         ],
  //       };
  //       break;
  //     default:
  //     this.fetchDataFromApi()
  //       // this.configTabs = {
  //       //   activeColor: "#168ED3",
  //       //   inactiveColor: "#333",
  //       //   list: [
  //       //     {
  //       //       id: 0,
  //       //       text: "名片",
  //       //       activeIcon: require("@/assets/tempfile/ym/tabIcon/mp.png"),
  //       //       inactiveIcon: require("@/assets/tempfile/ym/tabIcon/nomp.png"),
  //       //       path: "/",
  //       //     },
  //       //     {
  //       //       id: 1,
  //       //       text: "动态",
  //       //       activeIcon: require("@/assets/tempfile/ym/tabIcon/dt.png"),
  //       //       inactiveIcon: require("@/assets/tempfile/ym/tabIcon/nodt.png"),
  //       //       path: "/thirdIndex",
  //       //     },
  //       //   ],
  //       // };
  //       break;
  //   }
  // },
  computed: {
    ...mapGetters(["tarbbarActive"]),
    active(){
      return this.$route.meta.index
    }

  },
watch:{
  '$route':function(to,from){
    // console.log('Route changed from', from, 'to', to);
    this.localActive = to.meta.index;
  }
},
  methods: {
    // 定义方法来修改 activeIndex
    updateActiveIndex(newIndex) {
      this.activeIndex = newIndex;
    },
    getTab(){
      console.log('小表',this.active)
    },
    ...mapMutations("routeAddr", ["setActive"]),

    changeTab(e) {
      // this.buttonId = this.configTabs.list[e].buttonId;
      // this.active
      this.activeIndex = e;
      // this.getPage(e)
    },
    getPage(index) {
      // const params = { button: this.buttonId  };
      // localStorage.setItem("page" + index, this.buttonId);
      // axios
      //   .get("https://staticapi.oa00.com/v1/app/company/buttonImage/list", {
      //     params,
      //   }) // 这里替换为你要连接的接口地址
      //   .then((response) => {
      //     console.log(response);
      //     if (response.data.code == 200) {
      //       if (response.data.data.length != 0) {
      //         let imageUrl={}
      //         response.data.data.forEach((element, index) => {
      //           imageUrl[index]=element.url
      //         });
      //         // this.$store.commit('page'+(index+1), imageUrl)
      //         // console.log("页面数据",JSON.stringify(imageUrl))
      //         // localStorage.setItem("page"+index, imageUrl.toString());
      //         // console.log("本地储存数据",localStorage.getItem("page"+index))
      //       }
      //     }
      //     console.log("11111",this.configTabs)
      //     // this.responseData = response.data; // 将返回的数据赋值给responseData变量
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
    fetchDataFromApi() {
      // "bebbd1a0-b522-11ee-a473-00163e237fe6"
      const params = { company: localStorage.getItem("id") };
      axios
        .get("https://staticapi.oa00.com/v1/app/company/button/list", {
          params,
        }) // 这里替换为你要连接的接口地址
        .then((response) => {
          console.log(response);
          if (response.data.code == 200) {
            if (response.data.data.total != 0) {
              response.data.data.list.forEach((element, index) => {
                (this.configTabs.activeColor = element.colour_1
                  ? element.colour_1
                  : "#E50015"),
                  (this.configTabs.inactiveColor = element.colour_2
                    ? element.colour_2
                    : "#333"),
                  this.configTabs.list.push({
                    buttonId: element.id,
                    id: index,
                    text: element.name,
                    activeIcon: element.image_1.url,
                    inactiveIcon: element.image_2.url,
                    path:
                      index == 0
                        ? "/?id="+condition
                        : index == 1
                        ? "/thirdIndex"
                        : index == 2
                        ? "/secondIndex"
                        : index == 3
                        ? "/fourthIndex"
                        : "/fiveIndex",
                  });
              });
              console.log(this.configTabs);
              console.log(this.configTabs.list[0].buttonId);
              localStorage.setItem("page0", this.configTabs.list[0].buttonId);
              this.$emit("onPage", this.configTabs.list[0].buttonId);
              console.log("本地储存数据", localStorage.getItem("page0"));
              // this.buttonId=this.configTabs.list[0].buttonId
              // this.getPage(0)
            }
          }
          console.log("11111", this.configTabs);
          // this.responseData = response.data; // 将返回的数据赋值给responseData变量
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .van-tabbar {
  padding-bottom: 13px !important;
}
</style>
