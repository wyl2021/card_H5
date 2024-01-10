<template>
  <div>
    <van-tabbar
      v-model="localActive"
      @change="changeTab"
      :active-color="configTabs.activeColor"
      :inactive-color="configTabs.inactiveColor"
    >
      <van-tabbar-item :to="i.path" v-for="(i, n) in configTabs.list" :key="n">
        {{ i.text }}
        <template #icon="props">
          <img :src="props.active ? i.activeIcon : i.inactiveIcon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    active: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      localActive: this.active,
      configTabs: {
        activeColor: "#0E58A3",
        inactiveColor: "#333",
        list: [],
        id: "",
      },
    };
  },
  created() {
    console.log(localStorage.getItem("id"));
    this.id = localStorage.getItem("id");
    console.log(this.id);
    switch (this.id) {
      case "aj":
        this.configTabs = {
          activeColor: "#0E58A3",
          inactiveColor: "#333",
          list: [
            {
              id: 0,
              text: "首页",
              activeIcon: require("@/assets/tempfile/aj/tabIcon/sy.png"),
              inactiveIcon: require("@/assets/tempfile/aj/tabIcon/nosy.png"),
              path: "/",
            },
            {
              id: 1,
              text: "走近",
              activeIcon: require("@/assets/tempfile/aj/tabIcon/zj.png"),
              inactiveIcon: require("@/assets/tempfile/aj/tabIcon/nozj.png"),
              path: "/thirdIndex",
            },
            {
              id: 2,
              text: "运输",
              activeIcon: require("@/assets/tempfile/aj/tabIcon/ys.png"),
              inactiveIcon: require("@/assets/tempfile/aj/tabIcon/noys.png"),
              path: "/secondIndex",
            },
            {
              text: "方案",
              activeIcon: require("@/assets/tempfile/aj/tabIcon/fa.png"),
              inactiveIcon: require("@/assets/tempfile/aj/tabIcon/nofa.png"),
              path: "/fourthIndex",
            },
          ],
        };
        break;
      case "nh":
        this.configTabs={
          activeColor: "#0E58A3",
          inactiveColor: "#333",
          list: [
          {
            id: 0,
            text: "首页",
            activeIcon: require("@/assets/tempfile/nh/tabIcon/shouye2.png"),
            inactiveIcon: require("@/assets/tempfile/nh/tabIcon/shouye.png"),
            path: "/",
          },
          {
            id: 1,
            text: "产品",
            activeIcon: require("@/assets/tempfile/nh/tabIcon/chanpin2.png"),
            inactiveIcon: require("@/assets/tempfile/nh/tabIcon/chanpin.png"),
            path: "/thirdIndex",
          },
        ]
        }
        break;
      case "jh":
        this.configTabs = {
          activeColor: "#DA2321",
          inactiveColor: "#333",
          list: [
            {
              id: 0,
              text: "首页",
              activeIcon: require("@/assets/tempfile/jh/shouye_active.png"),
              inactiveIcon: require("@/assets/tempfile/jh/shouye.png"),
              path: "/",
            },
            {
              id: 1,
              text: "产品",
              activeIcon: require("@/assets/tempfile/jh/chanpin_active.png"),
              inactiveIcon: require("@/assets/tempfile/jh/chanpin.png"),
              path: "/thirdIndex",
            },
            {
              id: 2,
              text: "案例",
              activeIcon: require("@/assets/tempfile/jh/anli_active.png"),
              inactiveIcon: require("@/assets/tempfile/jh/anli.png"),
              path: "/secondIndex",
            },
            {
              text: "探索",
              activeIcon: require("@/assets/tempfile/jh/tansuo_active.png"),
              inactiveIcon: require("@/assets/tempfile/jh/tansuo.png"),
              path: "/fourthIndex",
            },
          ],
        };
        break;
    }
  },
  computed: {
    ...mapGetters(["tarbbarActive"]),
  },
  methods: {
    ...mapMutations("routeAddr", ["setActive"]),

    changeTab(e) {
      // this.active=e
      // this.setActive(e)
    },
  },
};
</script>

<style>
</style>
