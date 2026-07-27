<template>
  <div>
    <img :src="IMG + 'snw/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->
      <img class="logo" :src="IMG + 'snw/image/logo.png'" />
      <div class="companyName">上海申诺伟国际物流有限公司</div>
      <van-image :src="IMG + 'snw/image/jjBg.png'" class="m-t-14" />
      <p
        class="textStyle"
        v-for="(item, index) in text.split(' ')"
        :key="index"
      >
        {{ item }}
      </p>
      <i-text
        style="margin-top: 10px"
        :iconImageCss="{ width: '5px', height: '5px' }"
        iconImage="snw/icon/round.png"
        title="服务网络"
      ></i-text>
      <p
        class="textStyle"
        v-for="(item, index) in text2.split(' ')"
        :key="index"
      >
        {{ item }}
      </p>
      <van-image :src="IMG + 'snw/image/jjBg.png'" class="m-t-14" />
    </div>

    <!-- 合作伙伴 -->
    <headerContent
      :isMx="false"
      headerImg="snw/headerImage/hzhb.png"
      width="112px"
      height="30px"
    >
      <template #content>
        <!-- <div class="hbBox">
        <van-image
          v-for="(item, index) in hbList"
          :key="index"
          :src="item.image.url"
        ></van-image>
      </div> -->
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
      text: "申诺伟（控股）集团是一家总部设在上海陆家嘴金融中心，专注于供应链管理领域运营及投资服务，利用互联网信息技术以前瞻性的管理理念和全新商务模式，为国内外客户提供全新供应链管理解决方案，覆盖供应链上、中、下游各个环节，力求创造高效、独特、优质的供应链管理模式，转化为客户商业价值。在华东、华南、西南、华北设营运中心、11家独立经营公司，拥有员工600多人，在全球67个国家拥有200多家海外代理网络。目前，服务领域涉及全球采购、EPC国际援外工程、造船和海洋工程、石油化工、电子、零售等行业。",
      text2:
        "国内城市： 上海、大连、天津、青岛、福州、厦门、北京、钦州、宁波、广州、深圳、香港、成都、武汉、重庆、西安、洛阳、太原、长沙、合肥、郑州等主要城市和口岸设有分支机构； 国外城市： 洛杉矶（美国）、纽约（美国）、新泽西（美国）、亚特兰大（美国）、休斯顿（美国）、斯图加特（德国）、里约热内卢（巴西）、马尼拉（菲律宾）、雅加达（印度尼西亚）、胡志明（越南）等67个国家拥有200多个海外分支机构和代理网络。",
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
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {

          const data = res.data.list.find((item) => item.name == "合作伙伴");
          this.hbList = data ? data.solution_list : [];
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
