<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="sfkj"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="1"
      color="#0101FE"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>
            </div>
            <div
              class="text3"
              v-for="(item, index) in userInfo.post.split(' ')"
              key="index"
              v-if="index < 2"
            >
              {{ item }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'sfkj/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'sfkj/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'sfkj/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
      <template #default="slotProps">
        <div
          :class="[
            'header' + (slotProps.item + 1),
            { selectCard: cardIds == slotProps.item },
            'b-dotted',
          ]"
          @click="cardIds = slotProps.item"
        >
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>
            </div>
            <div
              class="text3"
              v-for="(item, index) in userInfo.post.split(' ')"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'sfkj/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'sfkj/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'sfkj/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="sfkj/icon/phoneButton.png"
      addressButton="sfkj/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="速锋科技"
      :type="0"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="sfkj/icon/sys.png"
      :qrContent="{
        qrName: '扫描二维码，添加我为好友',
        qrTitle: '扫码加微信',
      }"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#0101FE"
    ></tab>
    <!-- 公司简介 -->
    <headerContent
      id="gsjj"
      headerImg="sfkj/headerImage/gsjj.png"
      width="94px"
      height="48px"
    >
      <template #content>
        <van-image
          :src="IMG + 'sfkj/image/jjBg.png'"
          class="m-x-10"
        ></van-image>
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </p>
        <div class="m-t-14"></div>
        <more
          title="查看更多"
          float="flex-start"
          path="/contentInfo"
          color="#666666"
        ></more>
      </template>
    </headerContent>
    <!-- 企业文化 -->
    <headerContent
      headerImg="sfkj/headerImage/qywh.png"
      width="103px"
      height="48px"
    >
      <template #content>
        <div class="whBox" v-for="(item, index) in whList" :key="index">
          <van-image
            :src="IMG + item.url"
            width="16px"
            height="16px"
          ></van-image>
          <div class="whItem">
            <p class="name">{{ item.name }}</p>

            <div
              v-for="(item2, index2) in item.list"
              class="title"
              :class="{ 'align-baseline': index >= 2 }"
              :key="index2"
            >
              <div v-if="item.name == '企业风格'" class="dian"></div>
              <div class="w-text">{{ item2 }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 荣誉证书 -->
    <headerContent
      headerImg="sfkj/headerImage/ryzs.png"
      width="117px"
      height="48px"
    >
      <template #content>
        <div class="ryBox">
          <van-image
            v-for="(item, index) in getContent('荣誉证书')"
            v-if="item.image && index<=5"
            :src="item.image.url"
            :key="index"
            width="155px"
            height="210px"
          ></van-image>
        </div>
        <div class="m-t-14"></div>
        <more
          title="查看更多"
          float="flex-start"
          path="/contentInfo"
          color="#666666"
        ></more>
      </template>
    </headerContent>

    <!-- 产品服务 -->
    <headerContent
      headerImg="sfkj/headerImage/cpfw.png"
      width="117px"
      height="48px"
      id="cpfw"
    >
      <template #content>
        <div class="productBox">
          <div
            v-for="(item, index) in productList"
            class="productItem"
            :key="index"
            @click="getTo(item.id)"
          >
            <van-image
              class="image"
              :src="item.image.url"
              v-if="item.image"
            ></van-image>
            {{ item.name }}
          </div>
        </div>
        <div class="m-t-14"></div>
        <more
          title="查看更多"
          float="flex-start"
          path="/secondIndex"
          color="#666666"
        ></more>
      </template>
    </headerContent>
    <!-- 联系我们 -->
    <headerContent
      headerImg="sfkj/headerImage/lxwm.png"
      width="74px"
      height="48px"
      id="lxwm"
    >
      <template #content>
        <companyTitle
          title="深圳市速锋科技股份有限公司"
          fontSize="15px"
        ></companyTitle>
        <iText titles="联系人：" title="李先生"></iText>
        <iText titles="电话：" title="27480258"></iText>
        <iText titles="业务：" title="0752-7800269/13502832712"></iText>
        <iText titles="传真：" title="0752-7800099"></iText>
        <iText titles="邮箱：" title="sales@sufeng.com.cn"></iText>
        <iText titles="QQ：" title="2331230506/2644269661/2721557343"></iText>
        <div
          v-for="(item, index) in getContent('地址列表')"
          :key="index"
          @click="getAddress(item)"
        >
          <div @click="getMap(item.describe, item.name)" class="lxBox">
            <div class="d-flex name">
              <div class="line"></div>
              {{ item.name }}
            </div>
            <div class="describe">{{ item.describe }}</div>
          </div>
        </div>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          :address="getMap()"
          name="速锋科技"
        ></TXMap>
      </template>
    </headerContent>
    <!-- 阿库标识 -->
    <aKuLogo></aKuLogo>
  </div>
</template>

<script>
import more from "../../tool/more.vue";
import { Toast } from "vant";
export default {
  components: { more },
  data() {
    return {
      tabList: [
        {
          name: "公司简介",
          id: "gsjj",
        },
        {
          name: "产品服务",
          id: "cpfw",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },
      ], ///tab栏列表
      tabId: "gsjj", //默认tab
      tabIsTop: false, //用作下拉到一定程度现实tab栏
      cardId: 0,
      cardIds: 0,
      userInfo: {
        name: "正在加载",
        post: "正在加载",
        phone: "正在加载",
        email: "正在加载",
        address: "正在加载",
        english: "正在加载",
      },
      show: false,
      list: [],
      text: "深圳市速峰科技有限公司成立于2006年，是专业从事高端电主轴及其零配件自主研发、生产、维修和销售服务一体化的国家高新技术企业。 公司自成立以来，坚持“专注、专业、奉献”的方针。以客户需求为导向，根据客户不同类型机床的需求，研发设计PCB钻孔机/机电主轴、数控金属/玻璃雕铣机械电主轴、磨削主轴、电主轴、电主轴及一系列车床、磨床、加工中心主轴及相关配件产品。公司已通过ISO质量管理体系认证并得到严格执行。同时，公司业务领导高度重视发展规划，不断招募高端技术研发人才，并引进德国、美国、瑞士等国家的高精密生产设备和测试仪器。多年来，公司以优质的产品赢得了广大客户的一致认可，在电主轴行业树立了良好的声誉。通过不断的自主创新，我们拥有多项发明专利和实用新型专利证书，逐步成为国内电主轴行业的龙头企业之一。",
      whList: [
        {
          url: "sfkj/icon/1.png",
          name: "使命",
          list: [
            "为用户：用心服务于用户，让人类的生活丰富多；",
            "为员工：创造发展空间，提升员工价值，提高生活质量；",
            "为社会：促进社会健康发展，服务社会文明进步。",
          ],
        },
        {
          url: "sfkj/icon/2.png",
          name: "经营理念",
          list: ["正直！实际的！创新！高效的！责任！"],
        },
        {
          url: "sfkj/icon/3.png",
          name: "道德原则",
          list: [
            "宁愿赔钱，也决不失信誉；清虚做人，诚实做事；",
            "做事精益求精，待人真诚、务实；企业无论大小，都应 一视同仁。",
          ],
        },
        {
          url: "sfkj/icon/4.png",
          name: "企业风格",
          list: [
            "认真：精益求精、求知欲强。",
            "负责：勇于承担最终的责任。",
            "严格：严格管理，严以律己。严于律己，严法做人，严 于律己，严于律己，奖惩分明。",
            "主动：主动接受任务、主动承担责任、主动发现问题、 主动改进和完善。",
            "高效：工作计划明确，反应迅速。今天做了一些事情， 明天留出空间。",
          ],
        },
      ],
      productList: [],
    };
  },
  created() {
    this.getUserInfo();
    this.getList();
    this.getProductList();
  },
  mounted() {
    window.addEventListener("scroll", this.scrolling);
    // this.getUserInfo();
    // this.getList();
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrolling);
  },

  methods: {
    getMap() {
      const address = this.getContent("地址列表");
      if (address && Array.isArray(address) && address.length > 0) {
        // 确保address是一个数组且至少有一个元素
        return address[0].describe;
      } else {
        // 如果address不是数组或没有元素，返回默认值
        return "浙江省宁波市";
      }
    },
    getAddress(res) {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$router.push({
        path: "/map",
        query: { address: res.name, name: res.describe, isTap: true },
      });
      Toast.clear;
    },
    getProductList() {
      this.$http.solutionTypeList().then((res) => {
        this.productList = res.data.list[0].solution_list;
        // res.data.list.forEach((item) => {
        //   this.tabList.push(item.name);
        // });
      });
    },
    getTo(id) {
      this.$router.push({
        path: "/solutionInfo",
        query: { id: id },
      });
    },
    getContent(name) {
      const data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表详情" })
        .then((item) => {
          console.log(item);
          this.list = item.data.list;
        });
    },

    //判断
    getWebAddress(list, str) {
      if (list != []) {
        let webAddress = "";
        list.forEach((item) => {
          if (item.key == str) {
            webAddress = !(item.value == "" || item.value == null)
              ? item.value
              : "-";
          } else {
            webAddress = "-";
          }
        });
        return webAddress;
      } else {
        return "-";
      }
    },
    getUserInfo() {
      wx.miniProgram.postMessage(this.userInfo);
      this.$http.cardUserInfo().then((res) => {
        this.userInfo = res.data;
        this.cardId = res.data.select;

        console.log("1231231");
      });
    },

    // 名片切换
    getCommitUser(index) {
      console.log("名片切换", index);
      this.$http.cardInfo({ select_num: this.cardIds }).then((item) => {
        if (item.code == 200) {
          this.cardId = this.cardIds;
          this.show = false;
        }
      });
      // this.cardId=1
    },

    scrolling() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      var tabScroll = document.getElementById("tap").offsetTop;
      // console.log(scrollTop);
      // console.log("获取tap栏高度", tabScroll);
      if (scrollTop >= tabScroll) {
        this.tabIsTop = true;
      } else {
        this.tabIsTop = false;
      }
    },

    butTab(id) {
      console.log(id);
      this.tabId = id;
      // window.location.hash=this.tabId
      var id = this.tabId.replace("#", "");
      console.log(id);
      document.getElementById(id).scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
.header1 {
  // width: 100%;
  height: 100%;
  padding: 44px 0 0 30px;

  .post {
  }
  .name {
    .text1 {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #0101fe;
    }
    .text2 {
      font-size: 9px;
      color: #0101fe;
    }
  }
  .text3 {
    margin-top: 5px;
    font-size: 10px;
    letter-spacing: 2px;
    color: #333;
    line-height: 12px;
  }
  .pm {
    margin-top: 23px;
  }
  .text4 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }

    color: #343434;
    font-size: 10px;
  }
  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #343434;
    font-size: 10px;
    margin-top: 4px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
      width: 174px;
    }
    display: flex;
    margin-top: 4px;
    color: #343434;
    font-size: 10px;
    align-items: baseline;
  }
}

/deep/ .confirmButton {
  background-color: #0101fe !important;
}
/deep/ .line {
  background-color: #0101fe !important;
}
.selectCard {
  border: 1px solid #0101fe !important;
}

.m-t-14 {
  margin-bottom: 8px;
}
.m-x-10 {
  margin: 5px 0;
}
.a-item {
  align-items: baseline !important;
  width: 290px;
}

.whBox {
  margin-top: 8px;
  display: flex;
  align-items: baseline;
  .whItem {
    margin-left: 8px;

    .name {
      color: #333333;
      font-size: 14px;
      margin-bottom: 8px;
    }
    .title {
      color: #666666;
      font-size: 12px;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
    }
    .dian {
      width: 5px;
      height: 5px;
      margin-right: 3px;
      background-color: #113681;
      border-radius: 2px;
    }
    .w-text {
      width: 291px;
    }
    .align-baseline {
      align-items: baseline;
    }
  }
}
.ryBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 8px;
}
.productBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 8px;
  .productItem {
    box-shadow: 0px 2px 8px 0px rgba(14, 14, 142, 0.08);
    border-radius: 4px;
    color: #333333;
    font-size: 13px;
    text-align: center;
    .image {
      margin-bottom: 8px;
    }
  }
}
.lxBox {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 8px;
  .name {
    font-size: 13px;
    color: #333;
  }
  .describe {
    color: #666666;
    font-size: 13px;
    margin-top: 4px;
  }
  .line {
    width: 2px;
    height: 10px;
    background-color: #0101fe;
    margin-right: 5px;
  }
}
</style>
