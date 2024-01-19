<template>
  <div>
    <van-image fit="cover" class="image" v-if="imageList.length>0" :key="index" v-for="(item,index) in imageList" :src="item"></van-image>
    <div class="h-50"></div>
    <tabbar :active="2"></tabbar>
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
      imageList: [],
    };
  },
  mounted() {
    this.getPage()
  },
  methods:{
    getPage(){
      const params = { button: localStorage.getItem("page2")};
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
  }
};
</script>
<style lang="scss" scoped>
.image{
  display: block;
}
</style>

