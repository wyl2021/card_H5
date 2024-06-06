<template>
  <div>
     <!-- tab栏 -->
     <!-- <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#6EBB54"
    ></tab> -->
    <!-- 简介 -->
    <headerContent
      headerImg="dpkx/headerImage/qyjs.png"
      height="50px"
      width="128px"
      id="gywm"
    >
      <template #content>
        <div
          class="textStyle"
          v-for="(item, index) in getContent('企业介绍')[0].name.split(' ')"
          :key="index"
        >
          {{ item }}
        </div>
        <van-image
          v-if="getContent('企业介绍')[0].image"
          :src="getContent('企业介绍')[0].image.url"
        />
      </template>
    </headerContent>
    <!-- 发展历程 -->
    <headerContent
      headerImg="dpkx/headerImage/fzlc.png"
      height="50px"
      width="116px"
    >
      <template #content>
        <van-image :src="IMG + 'dpkx/image/fzlc.png'" />
      </template>
    </headerContent>
    <!-- 荣誉 -->
    <headerContent
      headerImg="dpkx/headerImage/dpry.png"
      height="50px"
      width="100px"
    >
      <template #content>
        <div class="d-flex justify-around">
          <div class="ryBox">
            <van-image :src="IMG + 'dpkx/image/ry1.png'"></van-image>
            荣获金刺猬2021 “十大影响力品牌”
          </div>
          <div class="ryBox">
            <van-image :src="IMG + 'dpkx/image/ry2.png'"></van-image>
            荣获金刺猬2021 “十大影响力品牌”
          </div>
        </div>
        <div class="textStyle tIndent m-t-10">
          德普凯信电器拥有自己的德普烘焙实验室,并且在国内全国人大办公楼进行现场烘焙的厨电品牌。产品不断更新换代,荣获数十项专利认证、天猫未来厨房“速度激情”奖、央视“可信品牌”、2018年度“中国集成灶十大品牌”及“集成灶十大影响力品牌”荣誉称号,品牌创始人李奎董事长获2018建材之家“领军人物”,并与前联合国秘书长潘基文先生同框,见证“全球中小企业联盟可持续发展委员会”成立。创业伊始就参与淘宝公益宝贝计划,并四度携手“AGN蝴蝶汇”慈善组织与“北京晨光脑瘫儿童康复中心”践行公益。
        </div>
      </template>
    </headerContent>
    <!-- 实力研发 -->
    <headerContent
      headerImg="dpkx/headerImage/slyf.png"
      height="50px"
      width="206px"
    >
      <template #content>
        <van-image :src="IMG + 'dpkx/image/yf1.png'" />
        <div class="textStyle tIndent">发明专利 <span>40</span> 多项</div>
        <div class="textStyle tIndent">成功发明44项国家专利产品</div>
        <div class="textStyle tIndent">
          depelec一直是专业智造代名词,专注于高端嵌入式及集成厨电的设计研发,已打造数十种适合中国人使用习惯的精品(集成灶、蒸箱、烤箱、洗碗机等),截止目前,已获得44项国家专利。
        </div>
        <van-image :src="IMG + 'dpkx/image/yf2.png'" class="m-t-10" />
      </template>
    </headerContent>
    <!-- 品牌 -->
    <headerContent
      headerImg="dpkx/headerImage/ppyx.png"
      height="50px"
      width="100px"
    >
      <template #content>
        <div
          class="textStyle tIndent ppStyle"
          v-if="getContent('品牌影响')[0]"
          v-for="(item, index) in getContent('品牌影响')[0].name.split(' ')"
          :key="index"
        >
          {{ item }}
        </div>
        <van-image
          v-if="getContent('品牌影响')[0].image"
          :src="getContent('品牌影响')[0].image.url"
        />
      </template>
    </headerContent>
    <!-- 产业优势 -->
    <headerContent
      headerImg="dpkx/headerImage/cyys.png"
      height="50px"
      width="100px"
    >
      <template #content>
        <div
          v-for="(item, index) in getContent('产品优势')"
          :key="index"
          class="d-flex align-center"
        >
          <van-image
            v-if="item.image && index % 2 == 0"
            :src="item.image.url"
            width="160px"
            height="120px"
          />
          <div :class="{ 'w-10': index % 2 == 0 }"></div>
          <div class="goodsDescribe">
            <div class="goodsName">
              <div class="line"></div>
              {{ item.name }}
            </div>
            {{ item.describe }}
          </div>
          <div :class="{ 'w-10': index % 2 != 0 }"></div>
          <van-image
            v-if="item.image && index % 2 != 0"
            :src="item.image.url"
            width="160px"
            height="122px"
          />
        </div>
      </template>
    </headerContent>
    <!-- 售后服务 -->
    <headerContent
      headerImg="dpkx/headerImage/shfw.png"
      height="50px"
      width="120px"
    >
      <template #content>
        <van-image
          :src="IMG + 'dpkx/image/shfw.png'"
          width="263px"
          class="m-auto"
        ></van-image>
      </template>
    </headerContent>
    <!-- 产品中心 -->
    <headerContent
      headerImg="dpkx/headerImage/cpyf.png"
      height="50px"
      width="100px"
      id="cpzx"
    >
      <template #content>
        <div
          class="productImage"
          :class="i % 2 == 0 ? 'right' : 'left'"
          :style="{
            backgroundImage: 'url(' + getUrl(item.image.url) + ')',
          }"
          v-for="(item, i) in getContent('产品中心')"
          :key="i"
          @click="getTo(item.id)"
        >
          <div
            class="productName"
            :style="{
              color: getJson(item.name_en).text,
              'border-top': '3px solid ' + getJson(item.name_en).border,
              'border-bottom': '3px solid ' + getJson(item.name_en).border,
              'background-color':
                'rgba(' +
                parseInt(getJson(item.name_en).text.slice(1, 3), 16) +
                ', ' +
                parseInt(getJson(item.name_en).text.slice(3, 5), 16) +
                ', ' +
                parseInt(getJson(item.name_en).text.slice(5, 7), 16) +
                ', ' +
                0.1 +
                ')',
            }"
          >
            {{ item.name }}
          </div>
        </div>
        <more :icon="IMG+'dpkx/icon/right.png'"></more>
      </template>
    </headerContent>
    <headerContent
      headerImg="dpkx/headerImage/symd.png"
      height="50px"
      width="100px"
      id="symd"
    >
      <template #content>
        <div
          class="storeImage"
          v-for="(item, index) in getContent('所有门店')"
          :key="index"
          :style="{
            backgroundImage: 'url(' + getUrl(item.image.url) + ')',
          }"
          @click="getTo(item.id)"
        >
          <div class="name">
            <van-image
              :src="IMG + 'dpkx/icon/addressButton.png'"
              width="16px"
              height="16px"
              class="m-r-10"
            />
            {{ item.name }}
          </div>
        </div>
        <more :icon="IMG+'dpkx/icon/right.png'" path="/secondIndex"></more>
      </template>
    </headerContent>
    <headerContent
      headerImg="dpkx/headerImage/jmlc.png"
      height="50px"
      width="103px"
      id='zsjm'
    >
      <template #content>
        <div class="flowBox">
          <div
            v-for="(item, index) in getContent('加盟流程')"
            :key="index"
            class="flowItem"
            :class="
              index % 4 === 0 || index == 3 + 4 * (index % 3) ? 'green' : 'blue'
            "
          >
            <div
              class="index"
              :style="{
                'background-color':
                  index % 4 === 0 || index == 3 + 4 * (index % 3)
                    ? '#6EBB54'
                    : '#15449A',
              }"
            >
              {{ (index<9?'0':'')+(index+1) }}
            </div>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
      </template>
    </headerContent>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  data(){
    return{
      tabList: [
        {
          name: "关于我们",
          id: "gywm",
        },
        {
          name: "产品中心",
          id: "cpzx",
        },
        {
          name: "所有门店",
          id: "symd",
        },
        {
          name: "招商加盟",
          id: "zsjm",
        },
      ], ///tab栏列表
      tabId: "gywm", //默认tab
      tabIsTop: false, //用作下拉到一定程度现实tab栏
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrolling);
  },
  mounted(){
    window.addEventListener("scroll", this.scrolling);
  },
  created() {

  },
  methods: {
    butTab(id){
      console.log("zi",id)
  document.getElementById(id).scrollIntoView()
},
// butTab(id) {
//       console.log(id);
//       this.tabId = id;
//       // window.location.hash=this.tabId
//       var id = this.tabId.replace("#", "");
//       console.log('fu',id);
//       // this.$refs.content.butTab(id);
//       document.getElementById(id).scrollIntoView();
//     },
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    },
    getUrl(str) {
      return "'" + str + "'";
    },
    getContent(name) {
      return this.list.find((item) => item.name == name)
        ? this.list.find((item) => item.name == name).solution_list
        : [];
    },
    getJson(str) {
      return JSON.parse(str);
    },
  },
};
</script>

<style lang="scss" scoped>
.m-auto{
  display: flex;
  margin: 0 auto;
}
.w-10 {
  width: 10px;
}
.m-x-0 {
  margin: 10px 0 !important;
}
.m-t-10 {
  margin-top: 10px;
}
.m-r-10 {
  margin-right: 10px;
}
.justify-around {
  justify-content: space-around;
}
.align-center {
  align-content: center;
}
.tIndent {
  text-indent: 0 !important;
  span {
    font-size: 12px;
    color: #6ebb54;
  }
}
.ryBox {
  width: 150px;
  text-align: center;
  font-size: 14px;
  color: #333;
}
.ppStyle {
  letter-spacing: 0 !important;
  text-align: left !important;
}
.goodsDescribe {
  text-align: justify;
  width: 150px;
  font-size: 10px;
  color: #666666;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  .goodsName {
    font-size: 12px;
    color: #333;
    display: flex;
    margin-bottom: 10px;
    .line {
      width: 2px;
      height: 17px;
      margin-right: 2px;
    }
  }
}
.right {
  padding-right: 40px;
  .productName {
    float: right;
  }
}
.left {
  padding-left: 40px;
}
.productImage {
  width: 100%;
  height: 160px;
  background-size: 100% 100%;
  margin-bottom: 10px;
  .productName {
    font-size: 15px;
    text-align: center;

    height: 100%;
    width: fit-content;
    padding: 70px 10px 0 10px;
  }
}
.storeImage {
  width: 100%;
  height: 160px;
  background-size: 100% 100%;
  padding: 12px 0 0 12px;

  margin-bottom: 10px;

  .name {
    display: flex;
    font-size: 14px;
    color: #fff;
    align-items: center;
    height: fit-content;
  }
}
.flowBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  .green {
    border: 1px solid #6ebb54;
  }
  .blue {
    border: 1px solid #15449a;
  }
  .flowItem {
    padding: 15px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    .index {
      width: 24px;
      height: 24px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      border-radius: 12px;
      margin-right: 10px;
      padding-top: 5px;
    }
    .name {
      width: 72px;
      font-size: 12px;
      color: #333;
    }
  }
}
</style>
