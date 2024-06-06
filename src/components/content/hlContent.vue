
<template>
  <div>
    <!-- 公司简介  -->
    <headerContent
      headerImg="hl/headerImage/gsjj.png"
      width="122px"
      height="21px"
      id="gsjj"
      v-if="name == '公司简介'"
    >
      <template #content>
        <van-image :src="IMG + 'hl/image/gsjsBg.png'"></van-image>
        <div v-for="item in text.split(' ')" class="textStyle">{{ item }}</div>
        <div
          :style="{
            backgroundImage: 'url(' + getUrl(item2.image.url) + ')',
          }"
          v-for="(item2, index2) in getContent('公司简介')"
          :key="index2"
          class="introduction"
        >
          {{ item2.name }}
        </div>
        <div class="h-10"></div>
        <more
          title="查看更多"
          float="flex-start"
          color="#666666"
          path="/contentInfo"
        ></more>
      </template>
    </headerContent>
    <!-- 优势 -->
    <headerContent :isHeader="false" v-if="name == '优势'">
      <template #content>
        <div class="productBox">
          <div
            class="productItem"
            v-for="(item, index) in getContent('优势')"
            :key="index"
          >
            <van-image
              :src="item.image.url"
              v-if="item.image"
              width="24px"
              height="24px"
            ></van-image>
            <div class="name">{{ item.name }}</div>
            <div class="name_en">{{ item.name_en }}</div>
            <div class="describe">{{ item.describe }}</div>
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 荣誉资质 -->
    <headerContent
      headerImg="hl/headerImage/ryzz.png"
      width="122px"
      height="21px"
      v-if="name == '荣誉资质' || name == '内容荣誉资质'"
    >
      <template #content>
        <div class="productBox">
          <van-image
            v-if="
              item.image && name == '荣誉资质'
                ? index <= 3
                : index <= getContent('荣誉资质').length
            "
            :src="item.image.url"
            v-for="(item, index) in getContent('荣誉资质')"
            :key="index"
          ></van-image>
        </div>
        <div v-if="name == '荣誉资质'" class="h-10"></div>
        <more
          v-if="name == '荣誉资质'"
          title="查看更多"
          float="flex-start"
          color="#666666"
          path="/contentInfo"
        ></more>
      </template>
    </headerContent>
    <!-- 产品中心 -->
    <headerContent
      headerImg="hl/headerImage/cpzx.png"
      width="122px"
      height="21px"
      id="cpzx"
      v-if="name == '产品中心'"
    >
      <template #content>
        <listBox
          v-for="(item, index) in getContent('产品中心')"
          :key="index"
          :type="1"
          :imageUrl="{
            url: item.image.url,
            width: '149px',
            columWidth: '210px',
          }"
          :name="item.name"
          :describe="item.describe"
          button="查看详情"
          buttonColor="#155499"
          :pageType="3"
          :id="item.id"
          class="m-t-10"
        ></listBox>
      </template>
    </headerContent>
    <!-- 联系我们 -->
    <headerContent
      headerImg="hl/headerImage/lxwm.png"
      width="122px"
      height="21px"
      id="lxwm"
      v-if="name == '联系我们'"
    >
      <template #content>
        <companyTitle
          title="宁波海洛泵业科技有限公司"
          fontSize="15px"
        ></companyTitle>
        <iText titles="联系人：" title="业务部"></iText>
        <iText titles="手机号：" title="17706881139"></iText>
        <iText titles="邮箱：" title="hfang@hife-battery.com"></iText>
        <iText titles="地址：" title="宁波市江北区康庄南路515号"></iText>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="宁波市江北区康庄南路515号"
          name="海洛泵业"
        ></TXMap>
        <iText titles="官网：" title="www.sws010.com"></iText>
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
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      text: "宁波海洛泵业科技有限公司是一家专业从事各种专业泵及机械设备的研发、生产、销售、技术咨询的工贸公司。 公司主营各种精密液体计量泵和适用于不同需求的灌装设备。公司拥有计量泵的制造与应用的核心技术，在业内处于领先地位，生产的计量泵广泛用于食品、化妆品、医药、包装等行业，因其高精度、高耐用度、高性能，从而有效地为用户节省物料，保证用户生产出质量稳定可靠的产品。公司同时自主研发机械设备，并提供相关技术服务及技术咨询。公司还可根据不同的客户需求，为客户量身定制灌装设备、电池生产设备及其他各种泵，比如隔膜泵等。",
    };
  },
  methods: {
    butTab(id) {
      console.log('zi',id)
      document.getElementById(id).scrollIntoView();
    },
    getMap() {
      // const address = this.getContent("地址列表");
      // if (address && Array.isArray(address) && address.length > 0) {
      //   // 确保address是一个数组且至少有一个元素
      //   return address[0].describe;
      // } else {
      //   // 如果address不是数组或没有元素，返回默认值
      //   return "浙江省宁波市";
      // }
    },
    getUrl(str) {
      return "'" + str + "'";
    },
    getContent(name) {
      const data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
  },
};
</script>

<style lang="scss" scoped>
.h-10 {
  height: 10px;
}
.m-t-10 {
  margin-top: 10px;
}
.introduction {
  width: 100%;
  height: 33px;
  padding: 8px 44px;
  background-size: 100% 100%;
  color: #333;
  font-size: 12px;
  margin-top: 7px;
}
.productBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  .productItem {
    background-color: #f6f6f6;
    border-radius: 4px;
    padding: 12px;
    text-align: center;
    .image {
      margin-bottom: 4px;
    }
    .name {
      color: #333333;
      font-size: 13px;
    }
    .name_en {
      color: #155499;
      font-size: 10px;
    }
    .describe {
      color: #666666;
      font-size: 10px;
      line-height: 15px;
      margin-top: 5px;
    }
  }
}
</style>
