<template>
  <div>
    <img :src="IMG + 'jr/image/contentBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->
      <img class="logo" :src="IMG + 'jr/image/contentLogo.png'" />
      <div class="companyName">浙江君睿智能装备有限公司</div>
      <p class="textStyle" style="letter-spacing:1px;line-height: 15px;" v-for="(item, index) in text.split('  ')"
        :key="index">
        {{ item }}
      </p>
      <div v-for="(item, index) in textList" :key="index"
        :style="{ 'background-image': 'url(' + getUrl(item.image.url) + ')' }" v-html="item.rich_text" class="textList">

      </div>
      <i-text style="margin-top: 10px" :iconImageCss="{ width: '5px', height: '5px' }" iconImage="yt/icon/round.png"
        title="企业文化"></i-text>
      <div class="whBox" v-for="(item, index) in cultureList" :key="index">
        <van-image v-if="item.image" :src="item.image.url" width="16px" height="16px"></van-image>
        <div class="whItem">
          <p class="name">{{ item.name }}</p>
          <div class="title" v-for="(item, index) in item.describe.split('。')" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
      <i-text style="margin-top: 10px" :iconImageCss="{ width: '5px', height: '5px' }" iconImage="yt/icon/round.png"
        title="核心技术"></i-text>
      <van-image :src="IMG + 'jr/image/hxjs.png?time=' + time" width="100%" height="298px"
        style="margin-bottom: 10px;"></van-image>
      <listBox v-for="(item, index) in technologyList" :key="index" :type="1" :imageUrl="{
        url: item.image.url,
        width: '130px',
        columWidth: '60%',
        height: '96px',
      }" :name="item.name" :describe="item.describe" :pageType="null" :class="{ 'm-t-10': index != 0 }">
      </listBox>
      <i-text style="margin-top: 10px" :iconImageCss="{ width: '5px', height: '5px' }" iconImage="yt/icon/round.png"
        title="合作伙伴"></i-text>
      <van-swipe class="my-swipe" indicator-color="white" :loop="false">
        <van-swipe-item v-for="(image, index) in groupedPartnerList" :key="index">
          <div style="display:grid;grid-template-columns: repeat(3, 1fr);gap:16px;">
            <van-image :src="i2.image.url" v-for="(i2, d2) in image" :key="d2" width="100" height="50"></van-image>
          </div>
          <!-- <van-image :src="image.image.url" style="display:unset"></van-image> -->
        </van-swipe-item>
      </van-swipe>

      <!-- <div style="display:grid;grid-template-columns: repeat(3, 1fr);gap:16px;">
        <van-image :src="item.image.url" v-for="(item, index) in partnerList" :key="index"></van-image>
      </div> -->

      <i-text style="margin-top: 10px" :iconImageCss="{ width: '5px', height: '5px' }" iconImage="yt/icon/round.png"
        title="企业风采"></i-text>
      <div v-for="(item, index) in eleganceList" :key="index">
        <div class="eleganceBox" :style="{ 'grid-template-columns': 'repeat(' + item.length + ', 1fr)' }">
          <div v-for="(i2, d2) in item" :key="d2" class="eleganceItem"
            :style="{ 'background-image': 'url(' + getUrl(i2.image.url) + ')' }">
            <div class="eleganceItems">{{ i2.name }}<span>{{ i2.describe }}</span></div>
          </div>
        </div>
      </div>

    </div>

    <!-- 荣誉资质 -->
    <headerContent :isMx="false" headerImg="jr/headerImage/ryzz.png" width="149px" height="48px">
      <template #content>
        <van-swipe class="my-swipe" indicator-color="#2347B3" height="214px" :loop="false" style="margin:12px 0">
          <van-swipe-item v-for="(image, index) in groupedHonorList(true)" :key="index">
            <div style="display:grid;grid-template-columns: repeat(2, 1fr);gap:16px;">
              <van-image :src="i2.image.url" v-for="(i2, d2) in image" :key="d2"></van-image>
            </div>
            <!-- <van-image :src="image.image.url" style="display:unset"></van-image> -->
            <!-- <img v-lazy="image.image.url" /> -->
            <!-- <div style="width:100%;height:214px;overflow: hidden; position: relative;">
              <van-image :src="image.image.url" class="honorItem"
                :style="{ 'aspect-ratio': index < 3 ? '5/7' : index == 3 ? '340/100' : '155/100' }"></van-image>
            </div> -->

          </van-swipe-item>
        </van-swipe>
        <van-swipe class="my-swipe" indicator-color="#2347B3" height="214px" :loop="false">
          <van-swipe-item v-for="(image, index) in groupedHonorList(false)" :key="index">
            <div style="display:grid;grid-template-columns: repeat(3, 1fr);gap:16px;">
              <van-image :src="i2.image.url" v-for="(i2, d2) in image" :key="d2"></van-image>
            </div>
          </van-swipe-item>
        </van-swipe>
        <!-- <div v-for="(item, index) in honorList" :key="index">
          <div class="honorBox" :style="{ 'grid-template-columns': 'repeat(' + item.length + ', 1fr)' }">
            <van-image :src="i2.image.url" v-for="(i2, d2) in item" :key="d2" class="honorItem"
              :style="{ 'aspect-ratio': index == 0 ? '5/7' : index == 1 ? '340/100' : '155/100' }"></van-image>
          </div>

        </div> -->
      </template>
    </headerContent>
    <!-- 发展历程 -->
    <headerContent :isMx="false" headerImg="jr/headerImage/fzlc.png" width="118px" height="48px">
      <template #content>
        <van-image :src="item.image.url" v-for="(item, index) in courseList" :key="index" width="100%"></van-image>
      </template>
    </headerContent>
  </div>
</template>

<script>
import resData from "./resData";
export default {
  data() {
    return {
      IMG: this.IMG,
      hbList: [],
      text: '',
      textList: [],
      cultureList: [],
      technologyList: [],
      partnerList: [],
      eleganceList: [],
      courseList: [],
      honorList: [],
      time: null,
    };
  },
  computed: {
    groupedPartnerList() {
      // 将partnerList分割成每组9个元素的数组
      const groups = [];
      for (let i = 0; i < this.partnerList.length; i += 9) {
        groups.push(this.partnerList.slice(i, i + 9));
      }
      return groups;
    },
    groupedHonorList() {
      return (isHonor) => {
        // 根据isHonor过滤数据
        const filteredList = this.honorList.filter(item => {
          // isHonor为true时筛选name_en为"资质"的数据，否则筛选其他数据
          return isHonor ? item.name === "资质" : item.name !== "资质";
        });

        // 根据isHonor决定每组数量（4个或3个）
        const groupSize = isHonor ? 4 : 3;

        // 分割数组
        const groups = [];
        for (let i = 0; i < filteredList.length; i += groupSize) {
          // 注意：slice的结束索引应为i + groupSize
          groups.push(filteredList.slice(i, i + groupSize));
        }

        return groups;

      };
    }
  },
  created() {
    this.getList();
    this.time = Date.now()
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
    // 内容信息
    async getList() {
      try {
        // 1. 并行执行独立的异步请求（提升性能）
        const [textRes, textListRes, cultureRes, technologyRes, partnerRes, eleganceRes, courseRes, honorRes] = await Promise.all([
          resData.text(),
          resData.textList(),
          resData.cultureList(),
          resData.technologyList(),
          resData.partnerList(),
          resData.eleganceList(),
          resData.courseList(),
          resData.honorList(),

        ]);

        // 2. 同步赋值（结构清晰）
        this.text = textRes;
        this.textList = textListRes;
        this.cultureList = cultureRes;
        this.technologyList = technologyRes;
        this.partnerList = partnerRes;
        this.courseList = courseRes;
        this.honorList = honorRes;//this.groupByEnName(honorRes);
        this.eleganceList = this.groupByEnName(eleganceRes);
        console.log(this.honorList)
      } catch (error) {
        // 5. 统一错误处理（避免单个请求失败导致整体崩溃）
        console.error('数据获取失败:', error);
        // 可选：设置默认值或显示错误提示
        // this.text = '';
        // this.textList = [];
      }
    },
    groupByEnName(list) {
      // 使用reduce遍历列表，累积分组结果
      const grouped = list.reduce((acc, item) => {
        // 获取当前项的name_en值（作为分组键）
        const key = item.name_en;

        // 查找当前分组中是否已存在该key对应的子数组
        const existingGroup = acc.find(group => {
          // 子数组的第一个元素的name_en即为该组的key
          return group.length > 0 && group[0].name_en === key;
        });

        if (existingGroup) {
          // 若已存在该分组，直接添加当前项
          existingGroup.push(item);
        } else {
          // 若不存在该分组，创建新的子数组并添加当前项
          acc.push([item]);
        }

        return acc;
      }, []); // 初始值为一个空数组

      return grouped;
    }
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
  color: #2347B3;
  margin-bottom: 8px;
}

.companyName {
  font-size: 13px;
  margin: 6px 0 8px 10px;
  color: #2347B3;
  font-weight: 500;
}

.textList {
  width: 100%;
  height: 33px;
  padding: 10px 40px;
  margin-top: 12px;
  background-size: 100% 100%;
  display: flex;
  align-items: center;

  /deep/ p {
    display: flex;
    align-items: center;
  }
}

.whBox {
  margin-top: 8px;
  display: flex;
  align-items: flex-start;

  .whItem {
    margin-left: 8px;

    .name {
      color: #333333;
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .title {
      font-weight: 400;
      color: #666;
      font-size: 12px;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      width: 268px;
    }
  }
}

.eleganceBox {
  display: grid;
  column-gap: 8px;
  margin-bottom: 8px;

  .eleganceItem {
    aspect-ratio: 2/1;
    // background: 100% 100%;
    background-size: cover;
    flex-direction: column;
    display: flex;
    justify-content: end;
  }

  .eleganceItems {
    background-color: rgba($color: #000000, $alpha: 0.5);
    // display: flex;
    // flex-direction: column;
    height: 34px;
    padding-top: 8px;
    // text-align: center;
    color: #fff;
    justify-content: center;
    font-size: 13px;
    text-align: center;

    span {
      font-size: 10px;
    }
  }
}

.honorBox {
  display: grid;
  column-gap: 8px;
  margin-bottom: 8px;

  .honorItem {
    // aspect-ratio: 2/1;
    // background: 100% 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* 移除可能的默认间距 */
    margin: 0;
    padding: 0;
    background-size: cover;
    max-width: '100%';
    max-height: '100%';
    object-fit: 'contain'
      /* 核心：等比例缩放，完整显示在容器内 */
  }
}
</style>
