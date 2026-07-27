<template>
  <div class="p-page">
    <!-- 头部切换 -->
    <!-- 名字列表 -->
    <!-- <nameList
      :show="nameShow"
      @commitUserName="getCommitUserName"
      color="#004098"
    ></nameList> -->
    <headerBg
      cardBg="jrgj"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="false"
      :popupLength="1"
      color="#024190"
      :isCard="false"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="d-flex" style="justify-content: space-between;">
            <div>
              <div class="post">
                <div class="name">
                  <div class="text1" @click.stop="nameShow = true">
                    {{ userInfo.name }}
                  </div>
                </div>
                <div class="text3">
                  {{ userInfo.post }}
                </div>
              </div>
              <div class="pm">
                <div v-if="userInfo.phone" class="text4">
                  <van-image
                    :src="IMG + 'jrgj/icon/phone' + (cardId + 1) + '.png'"
                  />
                  {{ userInfo.phone }}
                </div>
                <div v-if="userInfo.email" class="text5">
                  <van-image
                    :src="IMG + 'jrgj/icon/email' + (cardId + 1) + '.png'"
                  />{{ userInfo.email }}
                </div>
                <div v-if="userInfo.address && cardId + 1 != 1" class="text6">
                  <van-image
                    v-if="cardId + 1 != 1"
                    :src="IMG + 'jrgj/icon/address' + (cardId + 1) + '.png'"
                  />
                  <div>
                    <div
                      class="textccc"
                      v-for="(item, index) in userInfo.address.split(' ')"
                      :key="index"
                      v-if="index < 3"
                    >
                      {{ item }}
                    </div>
                  </div>
                  <van-image
                    v-if="cardId + 1 == 1"
                    :src="IMG + 'jrgj/icon/address' + (cardId + 1) + '.png'"
                  />
                </div>
              </div>
            </div>
            <van-image
              width="70px"
              height="70px"
              :src="userInfo.wx_code.url"
              v-if="userInfo.wx_code"
            ></van-image>
          </div>
        </div>
      </template>
      <template #cardBg>
        <div   class="cardBg" :style="{'background-image':'url('+IMG+'jrgj/cardBg/cardBg'+ (cardId + 1)+'.png)'}">
         <div  v-for="(item, index) in userInfo.address.split(' ')"
                      :key="index"
                      v-if="index < 3 && cardId + 1===1" class="name">{{ item }}</div>
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
            <div class="text3">
              {{ userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div v-if="userInfo.phone" class="text4">
              <van-image
                :src="IMG + 'jrgj/icon/phone' + (slotProps.item + 1) + '.png'"
              />
              {{ userInfo.phone }}
            </div>
            <div v-if="userInfo.email" class="text5">
              <van-image
                :src="IMG + 'jrgj/icon/email' + (slotProps.item + 1) + '.png'"
              />{{ userInfo.email }}
            </div>
            <!-- <div v-if="userInfo.address" class="text6">
              <van-image
                v-if="slotProps.item + 1 != 1"
                :src="IMG + 'jrgj/icon/address' + (slotProps.item + 1) + '.png'"
              />
              <div>
                <div
                  class="textccc"
                  v-for="(item, index) in userInfo.address.split(' ')"
                  :key="index"
                  v-if="index < 3"
                >
                  {{ item }}
                </div>
              </div>
              <van-image
                v-if="slotProps.item + 1 == 1"
                :src="IMG + 'jrgj/icon/address' + (slotProps.item + 1) + '.png'"
              />
            </div> -->
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="jrgj/icon/phoneButton.png"
      addressButton="jrgj/icon/addressButton.png"
      :phone="userInfo.phone"
      address="义乌市国际陆港电商城二期21座801"
      name="巨润国际"
      :type="1"
      width="24px"
      height="24px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="jrgj/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="jrgj/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#024190"
    ></tab>
    <!-- 公司介绍 -->
    <headerContent
      headerImg="jrgj/headerImage/gsjj.png"
      width="94px"
      height="48px"
    >
      <template #content>
        <van-image :src="IMG + 'jrgj/image/jjBg.png'" class="m-t-14" />
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </p>
        <more
          title="查看更多"
          icon="arrow"
          path="/contentInfo"
          color="#666666"
          float="flex-start"
          :query="{ title: '巨润国际' }"
          class="m-t-10"
        ></more>
      </template>
    </headerContent>

    <!-- 我们提供的服务 -->
    <headerContent
      headerImg="jrgj/headerImage/fw.png"
      width="142px"
      height="48px"
    >
      <template #content>
        <van-image
          :src="IMG + 'jrgj/image/tgfw.png'"
          class="m-t-10"
          @click="get()"
        ></van-image>
        <!-- <div class="fwBox">
          <van-image
            v-for="(item, index) in getContent('我们提供的服务')"
            v-if="item.image"
            :src="item.image.url"
            width="155px"
            height="33px"
            :key="index"
          >
          </van-image>
        </div> -->
      </template>
    </headerContent>

    <!-- 企业文化 -->
    <headerContent
      headerImg="jrgj/headerImage/qywh.png"
      width="103px"
      height="48px"
    >
      <template #content>
        <div v-for="(item, index) in whList" :key="index" class="whBox">
          <div class="d-flex whItem">
            <van-image
              :src="IMG + 'jrgj/image/wh' + (index + 1) + '.png'"
              width="16px"
              height="16px"
              class="whImage"
            ></van-image>
            {{ item.name }}
          </div>
          <div class="whItem2">
            <div
              v-for="(item2, index2) in item.list.split('  ')"
              :key="index2"
              class="describe"
            >
              <div class="circular" v-if="index == whList.length - 1 || index==0"></div>
              {{ item2 }}
            </div>
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 发展历程 -->
    <headerContent
      headerImg="jrgj/headerImage/fzlc.png"
      width="118px"
      height="48px"
    >
      <template #content>
        <div class="h-10"></div>
        <van-image :src="IMG + 'jrgj/image/lcContent.png'"></van-image>
      </template>
    </headerContent>
    <!-- 产品服务 -->
    <headerContent
      headerImg="jrgj/headerImage/cpfw.png"
      width="91px"
      height="48px"
      id="cpfw"
    >
      <template #content>
        <listBox
          v-for="(item, index) in productList"
          :key="index"
          v-if="item && index < 4"
          :type="1"
          :imageUrl="{
            url: item.image.url,
            width: '149px',
            columWidth: '55%',
            height: '110px',
          }"
          :name="item.name"
          buttonColor="#024190"
          :describe="item.describe"
          :pageType="1"
          :id="item.id"
          button="查看详情"
        >
        </listBox>
        <div class="m-t-14"></div>
        <more
          title="查看更多"
          :icon="IMG + 'jrgj/icon/right.png'"
          color="#666666"
          path="secondIndex"
          :query="{ title: '服务' }"
          float="flex-start"
        ></more>
      </template>
    </headerContent>
    <!-- 联系我们 -->
    <headerContent
      headerImg="jrgj/headerImage/lxwm.png"
      width="74px"
      height="48px"
      id="lxwm"
    >
      <template #content>
        <companyTitle
          title="义乌市巨润国际货运代理有限公司"
          fontSize="14px"
        ></companyTitle>

        <div v-for="(item, index) in getContent('联系我们')" :key="index">
          <div @click="getMap(item.describe, item.name)" class="lxBox">
            <div class="name">
              <div class="line"></div>
              {{ item.name }}
            </div>
            <div class="describe">{{ item.describe }}</div>
          </div>
        </div>
        <div class="h-10"></div>
        <i-text
          title="18072350201"
          titles="联系电话："
          color="#666666"
          fontSize="14px"
        ></i-text>
        <i-text
          title="2069556336@qq.com"
          titles="电子邮箱："
          color="#666666"
          fontSize="14px"
        ></i-text>
        <i-text
          title="义乌市国际陆港电商城二期21座801"
          titles="总部地址："
          color="#666666"
          fontSize="14px"
        ></i-text>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="义乌市国际陆港电商城二期21座801"
          name="巨润国际"
        ></TXMap>
      </template>
    </headerContent>
    <!-- 阿库标识 -->
    <aKuLogo></aKuLogo>
  </div>
</template>

 <script>
import { Toast } from "vant";
import iText from "../../tool/iText.vue";
import axios from "axios";
export default {
  components: { iText },

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
      nameShow: false,
      text: "巨润国际货运代理有限公司成立于2010年，是一家主要经营国际进出口物流及相关业务的综合服务型企业。公司致力于“打造货运行业第一品牌”，以一体化精益物流、国际货运进出口代理、仓储、配送服务四大板块为主要业务发展方向，专注于中国出口至美国的海（空）运散货（整箱）双清门到门货运代理业务。",
      whList: [
        {
          name: "价值观",
          list: "注重人才  务实创新  客户至上  合作共赢",
        },
        {
          name: "企业愿景",
          list: "立志打造货运行业第一品牌",
        },
        {
          name: "企业使命",
          list: "为跨境电商提供最优质的跨境物流服务",
        },
        {
          name: "企业理念",
          list: "诚信  务实  发展  共赢",
        },
      ],
      productList: [],
    };
  },
  created() {
    this.getUserInfo();
    this.getList();
    this.getProduct();
  },
  mounted() {
    window.addEventListener("scroll", this.scrolling);
    // this.getUserInfo();
    // this.getList();
  },
    beforeDestroy() {  // Vue 2
  window.removeEventListener("scroll", this.scrolling);
},

  methods: {
    get() {
      // const config = {
      //   method: "post",
      //   url: "http://ywjrgj.nextsls.com/mpapi/v5/shipment/tracking",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Accept": "application/json",
      //     "Authorization":"Bearer 6690a4bf48358834de3a4e466690a4bfaaa8c9519",
      //   },
      //   data: {
      //     // shipment: {
      //     //   shipment_id: "10000060",
      //     //   client_reference: "",
      //     //   parcel_number: "",
      //     //   language: "zh",
      //     // },
      //   },
      // };
      // axios(config)
      //   .then(function (response) {
      //     // 处理响应数据
      //     console.log(response.data);
      //   })
      //   .catch(function (error) {
      //     // 处理错误
      //     console.error(error);
      //   });
      // axios.post('/mpapi/v5/shipment/tracking',{
      // },{
      //   headers:{
      //     'Authorization':'Bearer 6690a4bf48358834de3a4e466690a4bfaaa8c9519'
      //   }
      // }).then((res)=>{
      //     console.log(res)
      // })
    },
    getCommitUserName(id) {

      this.$http.cardUserEdit({ id: id }).then((res) => {
        if (res.code == 200) {
          this.getUserInfo();
          this.nameShow = false;
        } else {
          this.$toast(res.msg);
        }
      });
    },
    getMap(address, name) {

      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$router.push({
        path: "/map",
        query: { address: address, name: name, isTap: true },
      });
      Toast.clear;
    },
    // 内容信息
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          this.list = res.data.list;
        });
    },
    getContent(name) {
      const data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
    getProduct() {
      this.$http.solutionTypeList().then((res) => {
        this.productList = res.data.list[0].solution_list;
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
      });
    },

    // 名片切换
    getCommitUser(index) {
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
      this.tabId = id;
      // window.location.hash=this.tabId
      var id = this.tabId.replace("#", "");
      document.getElementById(id).scrollIntoView();
    },
  },
};
</script>

 <style lang="scss" scoped>
.header1 {
  // width: 100%;
  height: 100%;
  padding: 60px 20px 0 120px;
  .post {
    display: flex;
    align-items: center;
  }
  .name {
    .text1 {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 5px;
      color: "#333333";
    }
    .text2 {
      font-size: 9px;
      color: #422188;
    }
  }
  .text3 {
    font-size: 10px;
    // letter-spacing: 5px;
    font-weight: 400;
  }
  .pm {
    margin-top: 12px;
    text-align: right;
    margin-right: 5px;
  }
  .text4 {
    /deep/ .van-image {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }

    color: #343434;
    font-size: 9px;
    align-items: center;

    display: flex;
  }
  .text5 {
    /deep/ .van-image {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
    color: #343434;
    font-size: 9px;
    align-items: center;

    display: flex;
    margin-top: 4px;
  }
  .text6 {
    /deep/ .van-image {
      width: 16px;
      height: 16px;
      margin-left: 4px;
    }
    .textccc {
      width: 171px;
      margin-top: 2px;
    }
    line-height: 12px;
    margin-top: 4px;
    display: flex;
    color: #343434;
    font-size: 9px;
    align-items: flex-start;
    justify-content: end;
    text-align: right;
  }
}

.header2 {
  // width: 100%;
  height: 100%;
  padding: 40px 0 0 30px;

  .post {
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 5px;
        color: #024190;
      }
      .text2 {
        font-size: 12px;
        color: #422188;
      }
    }
  }
  .text3 {
    font-size: 10px;
    color: #333;
    margin-top: 3px;
  }
  .pm {
    margin-top: 19px;
  }
  .text4 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #343434;
    font-size: 10px;
    display: flex;
    align-items: center;
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
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    .textccc {
      // width: 151px;
      margin-bottom: 6px;
    }
    display: flex;
    margin-top: 4px;
    color: #343434;
    font-size: 10px;
    align-items: flex-start;
  }
}

.header3 {
  // width: 100%;
  height: 100%;
  padding: 40px 0 0 112px;

  .post {
    display: flex;
    align-items: center;

    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        color: #000000;
        margin-right: 8px;
      }
      .text2 {
        font-size: 12px;
        color: #fff;
        margin-right: 2px;
      }
    }
  }
  .text3 {
    font-size: 10px;
    color: #666666;
  }
  .pm {
    margin-top: 26px;
  }
  .text4 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 10px;
  }
  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 10px;
    margin-top: 5px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
      margin-bottom: 5px;
    }
    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 10px;
    align-items: baseline;
  }
}
.selectCard {
  border: 1px solid #024190 !important;
  border-radius: 8px;
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
  margin-top: 14px;
}
.a-item {
  align-items: baseline !important;
  width: 290px;
}
/deep/ .button {
  background-color: #024190 !important;
}
.ysBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .ysItem {
    background-color: #fff8f6;
    border-radius: 8px;
    padding: 13px 0;
    .image {
      display: flex;
      margin: auto;
    }
    .name {
      font-size: 14px;
      color: #333;
      margin: 5px 0;
      text-align: center;
    }
    .describe {
      font-size: 9px;
      color: #666666;
      text-align: center;
    }
  }
}
/deep/ .list1 {
  margin-top: 14px;
}
.lxBox {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  margin-top: 8px;
  .name {
    font-size: 12px;
    display: flex;
    align-items: baseline;
    color: #484848;
    font-weight: 800;
  }
  .describe {
    color: #666;
    font-size: 13px;
  }
  .line {
    width: 1px;
    height: 10px;
    background-color: #024190;
    margin-right: 5px;
  }
}
.h-10 {
  height: 10px;
}
.fwBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
}
.whBox {
  margin-top: 10px;
  .whItem {
    color: #333333;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 6px;
    .whImage {
      margin-right: 2px;
    }
  }
  .whItem2 {
    display: flex;
    align-items: center;
    margin-left: 20px;
    .describe {
      color: #666666;
      font-size: 12px;
      font-weight: 400;
      display: flex;
      align-items: center;
      margin-right: 20px;
      text-wrap: nowrap;


      .circular {
        width: 5px;
        height: 5px;
        background-color: #024190;
        border-radius: 3px;
        margin-right: 6px;
      }
    }
  }
}
.cardBg{
  background-size: 100% 100%;
  width: 100%;
  height: 200px;
  padding:65px 20px 0 20px !important;
  margin-top: 10px;
  .name{
    text-align: center;
    color:#000000;
    font-size: 10px;
    margin-top:5px;
  }

}
</style>
