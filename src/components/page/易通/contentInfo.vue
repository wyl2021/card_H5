<template>
  <div>
    <img :src="IMG + 'yt/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->
      <img class="logo" :src="IMG + 'yt/image/logo.png'" />
      <div class="companyName">深圳市易通科技物流有限公司</div>
      <ytContent
        v-for="(item, index) in textList"
        :styleType="index"
        :styleData="index === 0 ? item.solution_list[0] : item"
        :key="index"
      ></ytContent>
    </div>

    <!-- 感恩伙伴 -->
    <headerContent
      :isMx="false"
      headerImg="yt/headerImage/gehb.png"
      width="100%"
      height="41px"
    >
      <template #content>
        <div class="hbBox">
        <van-image
          v-for="(item, index) in hbList"
          :key="index"
          :src="item.image.url"
        ></van-image>
      </div>
      </template>
    </headerContent>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IMG: this.IMG,
      hbList: [],
      textList: [],
    };
  },
  created() {
    this.getList();
  },

  methods: {
    getUrl(str) {
      return "'" + str + "'";
    },
    getContent(name) {
      const data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
    processHtmlContent(html) {
      // 确保输入是字符串，避免出错
      if (typeof html !== "string") {
        return "";
      }

      // 统一替换：提高可维护性，正则优化
      return html
        .replace(/<p(.*?)>/g, "<p$1 style='width:100%;height:100%'>")
        .replace(
          /<video(.*?)>/g,
          "<video$1 style='width:100%;height:100%;border-radius:8px'>"
        )
        .replace(/<br\s*\/?>/gi, "") // 删除所有 <br> 标签
        .replace(
          /(style=['"][^'"]*?)line-height:[^;'"]*?([^'"]*['"])/g,
          (match, p1, p2) => `${p1}line-height:0.6;${p2}` // 修改 line-height
        );
    },
    getList() {
    // 两次请求，参数不同
    const request1 = this.$http.categorySolutionTypeList({
      parent_name: "列表信息",
    });
    const request2 = this.$http.categorySolutionTypeList({
      parent_name: "公司简介",
    });
    Promise.all([request1, request2])
      .then(([listResponse, introResponse]) => {
        this.hbList = listResponse.data.list && listResponse.data.list.find((item) => item.name === "感恩伙伴") ?
               listResponse.data.list.find((item) => item.name === "感恩伙伴").solution_list : [];

        this.textList = introResponse.data.list;

      })
      .catch((error) => {
        console.error("请求失败:", error);
      });
  },
  },
  // getList() {
  //   this.$http
  //     .categorySolutionTypeList({ parent_name: "列表内容" })
  //     .then((item) => {
  //       console.log(item);
  //       this.list = item.data.list;
  //       this.text =
  //         this.getContent("简介内容") != []
  //           ? this.getContent("简介内容")[0]
  //               .rich_text.replace(
  //                 /<p(.*?)>/,
  //                 "<p$1 style='width:100%;height:100%'>"
  //               )
  //               .replace(
  //                 /<video(.*?)>/,
  //                   "<video$1 style='width:100%;height:100%;border-radius:8px'>"
  //               )
  //               .replace(/<br\s*\/?>/gi, "")
  //               .replace(
  //                 /(style=['"][^'"]*?)line-height:[^;'"]*?([^'"]*['"])/g,
  //                 (match, p1, p2) => {
  //                   return p1 + "line-height:0.6;" + p2; // 替换为新的line-height值
  //                 }
  //               )
  //           : "";
  //     });
  // },

};
</script>

<style lang="scss" scoped>
.m-x-12 {
  margin: 0 12px;
}
.h-10 {
  height: 10px;
}
.m-x {
  margin: 12px 16px;
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
  padding: 0 28px 10px 28px;
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
.name {
  font-size: 12px;
  color: #004097;
  margin: 8px 0;
}
.companyName {
  font-size: 13px;
  margin: 6px 0 8px 10px;
  color: #004097;
  font-weight: 500;
}
.hbBox {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  img {
    width: 102px;
    height: 48px;
  }
}
</style>
