<template>
  <div id="app">
    <router-view />
    <tabbar v-if="$route.meta.showTabbar" :active="$route.meta.index" :condition="id" :configTabs="configTabs"></tabbar>
  </div>
</template>

<script>
import data from "@/components/tabbar/tabbar.js";
import { mapState } from 'vuex';
import { Toast } from 'vant';
export default {
  name: "App",
  data() {
    return {
      id: "wx584bf9e6868bba55",
      configTabs: {},
    };
  },
  async  created() {
    // console.log(this.configTabs);
   await this.getLogin()
   await this.title()

  },
  computed:{
      ...mapState(['upData'])
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
          console.log("页面返回参数",arr2[1])
          return arr2[1];
        }
      });
      return null;
    },
    title(){
      this.$route.meta.title="12323123"
      console.log( this.$route)
    },
    getLogin() {
      var url = window.location.href.split("?")[1];
      if (!url) {
        return null;
      }
      // console.log("url:" + url);
      var arr1 = url.split("&");
      arr1.forEach((item) => {
        // console.log("1234",item)
        var arr2 = item.split("=");
        if (arr2[0] == 'company_name') {
          // console.log("页面返回参数",arr2[1])
          arr2[1]=arr2[1].replace(/\//g, '')
          arr2[1]=arr2[1].replace(/#/g, '')
          this.id =decodeURIComponent(arr2[1])
          // console.log(this.id)
              this.configTabs = data.data[`${this.id}`];
          localStorage.setItem("id", this.id);
          this.$store.commit('user/upData',this.id)
          // console.log(this.$store.state.user.id)
          // Toast.fail(localStorage.getItem("id"))
        }else if(arr2[0] == 'token'){

          arr2[1]=arr2[1].replace(/\//g, '')
          arr2[1]=arr2[1].replace(/#/g, '')
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


  },
};
</script>

<style lang="scss">
#app {
  /* padding: 10px 0 0 0 ; */
  margin: 0px;
  background-color: #f6f6f6;
  min-height: 100vh;
  // padding: 10px 16px;
}
html {
  min-height: 100vh;
}
body {
  min-height: 100vh;
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
}
.textStyle {
  text-indent: 2em;
  font-size: 12px;
  letter-spacing: 3px;
  line-height: 20px;
  color: #666666;
  text-align: justify;
}
.title{
  font-size: 15px;
  font-weight: 800;
  // margin-bottom: ;
}
.h-50{
  height: 50px;
}
.m-auto{
  display: flex;
  margin: 0 auto;
}
.p-page{
  padding: 10px 16px;
}
.h-70{
  height: 70px;
}
</style>
