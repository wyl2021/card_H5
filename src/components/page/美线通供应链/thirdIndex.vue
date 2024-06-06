<template>
  <div >
    <img :src="IMG + 'mxt/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->
      <div class=" ">
        <img class="logo" :src="IMG + 'mxt/image/logo.png'" />
        <div class="companyName">深圳美线通供应链有限公司</div>
      </div>
      <div
      v-for="(item, index) in list2[0].name.split(' ')"
                :key="index"
                class="textStyle"
              >
                {{ item }}
              </div>
      <van-image  :src="IMG+'mxt/image/gsjs.png'"></van-image>

    </div>
    <div class="m-x-24">
      <headerContent
        :headerImg="'mxt/headerImage/smyj.png'"
        width="122px"
        height="21px"
      >

        <template #content>
          <div v-for="(item, index) in list" :key="index">
            <div class="d-flex">
              <van-image
                :src="item.image.url"
                width="14px"
                height="14px"
              ></van-image>
              <div class="cultureName">{{ item.name }}</div>
            </div>
            <div class="cultureDescribe">{{ item.describe }}</div>
            <div :class="{ 'm-t-14': index != list.length - 1 }"></div>
          </div>
        </template>
      </headerContent>
      <div class="h-100"></div>
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
          console.log(res.data)
          res.data.list.forEach(element => {
            if(element.name=='使命愿景'){
              this.list=element.solution_list
            }else if(element.name=="公司介绍"){
              this.list2=element.solution_list
              console.log("公司介绍",this.list2)
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
.logoBg {
  // position: fixed;
  top: 0;
  width: 100%;
  height: 206px;
}
.content {
  z-index: 1;
  margin: -40px 0 0 0 !important;
  position: relative;
}
.logo {
  width: 50px;
  height: 50px;
}
.box {
  width: 100%;
  height: 200px;
  background-color: beige;
  margin-top: 12px;
}
.companyName {
  font-size: 13px;
  margin: 6px 0 8px 0;
  color: #101749;
  font-weight: 500;
}
.cultureName {
  font-size: 14px;
  color: #333;
  margin-left: 5px;
}
.cultureDescribe {
  font-size: 12px;
  color: #666;
  margin: 6px 0 0 15px;
}

.m-t-14 {
  margin-bottom: 14px;
}
.m-x-24 {
  margin: 0 12px;
}
.h-100{
  height: 100px;
}
</style>
