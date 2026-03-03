<template>
  <div id="app">
    <keep-alive :exclude="['categorySolutionInfo', 'contentInfo', 'productInfo', 'solutionInfo']">
      <router-view />
    </keep-alive>
    <tabbar v-if="$route.meta.showTabbar" :active="$route.meta.index" :condition="id" :configTabs="configTabs"></tabbar>
  </div>
</template>

<script>
import data from "@/components/tabbar/tabbar.js";
import { mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      id: "wx584bf9e6868bba55",
      configTabs: {},
    };
  },
  async created() {
    // console.log(this.configTabs);
    await this.getLogin();
    await this.title();
  },
  computed: {
    ...mapState(["upData"]),
  },
  methods: {
    // 截取微信返回参数
    getParameter(str) {
      var url = window.location.href.split("?")[1];

      if (!url) {
        return null;
      }
      // console.log("url:" + url);
      var arr1 = url.split("&");
      arr1.forEach((item) => {
        var arr2 = item.split("=");
        if (str == arr2[0]) {
          return arr2[1];
        }
      });
      return null;
    },
    title() {
      this.$route.meta.title = "12323123";
    },
    getLogin() {
      // console.log(localStorage.getItem('token'))
      // if(localStorage.getItem('token'))return
      var url = window.location.href.split("?")[1];
      if (!url) {
        return null;
      }
      // console.log("url:" + url);
      var arr1 = url.split("&");
      arr1.forEach((item) => {
        // console.log("1234",item)
        var arr2 = item.split("=");
        if (arr2[0] === "company_name") {
          // console.log("页面返回参数",arr2[1])
          arr2[1] = arr2[1].replace(/\//g, "");
          arr2[1] = arr2[1].replace(/#/g, "");
          this.id = decodeURIComponent(arr2[1]);
          // console.log(this.id)
          this.configTabs = data.data[`${this.id}`];
          localStorage.setItem("id", this.id);
          this.$store.commit("user/upData", this.id);

          // console.log(this.$store.state.user.id)
          // Toast.fail(localStorage.getItem("id"))
        } else if (arr2[0] === "token") {
          arr2[1] = arr2[1].replace(/\//g, "");
          arr2[1] = arr2[1].replace(/#/g, "");
          // console.log('token',arr2[1])列表信息
          localStorage.setItem("token", arr2[1]);
          // const token=localStorage.getItem("token")
          // console.log(token)
        }
      });
      return null;

      // this.id = this.getParameter("company_name")

      //     this.configTabs = data.data[`${this.id}`];
      //     localStorage.setItem("id", this.id);
      //     this.$store.commit('user/upData',this.id)
      //     localStorage.setItem("token", this.getParameter("token"));

      // this.$http
      //   .login({
      //     appid: this.getParameter("appid")
      //       ? this.getParameter("appid")
      //       : "wx33cecf18c7152766",
      //     code: this.getParameter("code"),
      //     company_name: this.id,
      //     id: null,
      //   })
      //   .then((res) => {
      //     // if(res.code!=0){
      //     //   Toast.fail(res);
      //     // }
      //     console.log("登录", res);
      //     localStorage.setItem("token", res.data.token);

      //   });
    },
    //   handleLogin(){
    //     try {
    //   const queryString = window.location.href.split("?")[1];
    //   if (!queryString) return null;

    //   const cleanValue = (value) => {
    //     if (!value) return value;
    //     return value.replace(/[\/#]/g, "");
    //   };

    //   const params = queryString.split("&");
    //   params.forEach(param => {
    //     const [key, value] = param.split("=");
    //     if (!key || !value) return;

    //     const cleanedValue = cleanValue(value);

    //     if (key === "company_name") {
    //       this.id = decodeURIComponent(cleanedValue);
    //       this.configTabs = data.data[this.id];
    //       localStorage.setItem("id", this.id);
    //       this.$store.commit("user/upData", this.id);
    //     } else if (key === "token") {
    //       localStorage.setItem("token", cleanedValue);
    //     }
    //   });

    //   return null;
    // } catch (error) {
    //   console.error("Login parameter processing failed:", error);
    //   return null;
    // }
    //   }
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* 禁止整体滚动 */
}

#app {
  width: 100%;
  height: 100vh;
  /* 使用视口高度 */
  overflow-y: auto;
  /* 让 #app 自己滚动 */
  -webkit-overflow-scrolling: touch;
  /* iOS 流畅滚动 */
  background-color: #f6f6f6;
}



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 模版 */
.contentBox {
  margin: 10px 16px;
  padding: 12px;
  background-color: #fff;
  border-radius: 8px;
}

.p-16 {
  padding: 16px;
}

.d-flex {
  display: flex;
  align-items: center;
}

.b-dotted {
  border: 1px dotted #333;
  border-radius: 8px;
}

.textStyle {
  text-indent: 2em;
  font-size: 12px;
  letter-spacing: 3px;
  line-height: 20px;
  color: #666666;
  text-align: justify;
}

.title {
  font-size: 15px;
  font-weight: 800;
  // margin-bottom: ;
}

.h-50 {
  height: 50px;
}

.m-auto {
  display: flex;
  margin: 0 auto;
}

.p-page {
  padding: 10px 16px;
}

.h-70 {
  height: 70px;
}

.m-auto {
  display: flex;
  margin: auto;
}

.m-t-10 {
  margin-top: 10px;
}

.twofold-grid {
  display: grid;
  grid-template-columns: 49% 49%;
  row-gap: 10px;
  column-gap: 10px;
  margin-top: 10px;
}

.triple-grid {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  row-gap: 10px;
  column-gap: 10px;
  margin-top: 10px;
}
</style>
