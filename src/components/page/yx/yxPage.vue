<template>
  <div>
    <!-- 头部切换 -->
    <headerBg
      cardBg="yx"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>
              <div class="text2" v-if="cardId == 0">{{ userInfo.english }}</div>
            </div>
            <div class="text3">{{ userInfo.post }}</div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'yx/icon/phone.png'" />{{ userInfo.phone }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'yx/icon/email.png'" />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'yx/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
      <template #default="slotProps">
        <div
          :class="[
            'header' + (cardId + 1),
            { selectCard: cardId == slotProps.item },
            'b-dotted',
          ]"
          @click="cardId = slotProps.item"
        >
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>
              <div class="text2" v-if="cardId == 0">{{ userInfo.english }}</div>
            </div>
            <div class="text3">{{ userInfo.post }}</div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'yx/icon/phone.png'" />{{ userInfo.phone }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'yx/icon/email.png'" />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'yx/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="yx/icon/phoneButton.png"
      addressButton="yx/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="'浙江省宁波市镇海区公园世家'"
      name="翼星国际"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode

      :isWx="userInfo.wx_code"
      qrCodeIcon="yx/icon/sys.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#422187"
    ></tab>
    <headerContent
      v-for="(item, index) in list"
      :key="index"
      :headerImg="'yx/headerImage/' + item.name + '.png'"
    >
      <template #content>
        <div :class="[{ 'qywh-box': item.name == 'qywh' }]">
          <div v-for="(item2, index2) in item.solution_list" :key="index2">
            <div v-if="item.name == 'qyjs'">
              <van-image v-if="item2.image" :src="item2.image.url"></van-image>
              <div
                v-if="item2.describe != ''"
                v-for="(item3, index3) in item2.describe.split(' ')"
                :key="index3"
                class="textStyle"
              >
                {{ item3 }}
              </div>
            </div>
            <div v-if="item.name == 'qywh'">
              <div class="d-flex">
                <van-image
                  :src="item2.image.url"
                  width="14px"
                  height="14px"
                ></van-image>
                <div class="cultureName">{{ item2.name }}</div>
              </div>
              <div class="cultureDescribe">{{ item2.describe }}</div>
            </div>
            <div v-if="item.name == 'cpjs'">
              <listBox
                :class="{ 'm-t-14': index2 != item.solution_list.length - 1 }"
                :imageUrl="{
                  url: item2.image.url,
                  width: '125px',
                  height: '96px',
                }"
                :name="item2.name"
                :describe="item2.describe"
                button="查看详情"
              ></listBox>
            </div>
            <div v-if="item.name == 'hzal'">
              <div
                v-if="item2.describe != ''"
                v-for="item4 in item2.describe.split(' ')"
                class="textStyle"
              >
                {{ item4 }}
              </div>
              <van-image v-if="item2.image" :src="item2.image.url"></van-image>
            </div>
            <div v-if="item.name == 'lxwm'">
              <van-image v-if="item2.image" :src="item2.image.url"></van-image>
              <div>{{ item2.describe }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 阿库标识 -->
    <aKuLogo></aKuLogo>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        {
          name: "企业介绍",
          id: "qyjs",
        },
        {
          name: "产品介绍",
          id: "cpjs",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },
      ], ///tab栏列表
      tabId: "qyjs", //默认tab
      tabIsTop: false, //用作下拉到一定程度现实tab栏
      cardId: 0,

      userInfo: {
        name: "正在加载",
        post: "正在加载",
        phone: "正在加载",
        email: "正在加载",
        address: "正在加载",
        english: "正在加载",
      },
      show: false,
      list: [
        {
          name: "qyjs",
          solution_list: [
            {
              name: "",
              describe: "",
              image: {
                url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
              },
            },
            {
              name: "",
              describe:
                "翼星国际货运代理有限公司，于2017年成立，注册资金1000万元，总部位于广州，毗邻白云国际机场经济枢纽区，目前在广州、深圳、义乌均设有分公司和仓库，办公共计1850平米;在广州、深圳、美国均设有直营搞自动化仓库，仓储转运共计11600平米，是华南地区欧美加空海运专线领头企业，美森系列产品尤其突出，深受华南地区众多“亿级”跨境电商和传统外贸企业及同行的高度认可。 翼星国际货运代理有限公司作为省跨协和空港协会的会员，与其他联盟单位齐头并进，经营商更是独辟蹊径，发展平台广阔，市场前景深渊，一坨我司中国和美国、欧洲、英国得天独厚的供应链资源，加上阔景电商风靡浪潮带来的更为有利的条件，积极开发中国北美，中国一一欧洲包税到门专线，为中国跨境电商，物流同仁、往来中美欧的企业工厂客户提供量身定制的供应链一体化物流策划以及个性化的物流信息解决方案。 翼星国际货运代理本着“客户至上、优价质诚”的经营宗旨，进一步完善服务网络，积极推进业务咨询及系统的建设，为我们的客户提供更为完善的服务，在实现客户利益基础上体现公司的价值。",
              image: null,
            },
          ],
        },
        {
          name: "qywh",
          solution_list: [
            {
              name: "宗旨",
              describe: "让跨境更简单",
              image: {
                url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
              },
            },
            {
              name: "宗旨",
              describe: "让跨境更简单",
              image: {
                url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
              },
            },
            {
              name: "宗旨",
              describe: "让跨境更简单",
              image: {
                url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
              },
            },
            {
              name: "宗旨",
              describe: "让跨境更简单",
              image: {
                url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
              },
            },
          ],
        },
        {
          name: "cpjs",
          solution_list: [
            {
              name: "国际快递",
              describe:
                "DHL / UPS / FEDEX头部一级代理商 产品优势：广深港点对点扫描...",
              image: {
                url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
              },
            },
            {
              name: "国际快递",
              describe:
                "DHL / UPS / FEDEX头部一级代理商 产品优势：广深港点对点扫描...",
              image: {
                url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
              },
            },
            {
              name: "国际快递",
              describe:
                "DHL / UPS / FEDEX头部一级代理商 产品优势：广深港点对点扫描...",
              image: {
                url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
              },
            },
            {
              name: "国际快递",
              describe: "DHL / UPS / ",
              image: {
                url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
              },
            },
          ],
        },
        {
          name: "hzal",
          solution_list: [
            {
              name: "",
              describe:
                "从国际货运到综合供应链，我们涵盖了所有市场领域,如:医药、食品、高科技、电子、化工、时尚、汽车、能源设备、电力设备、装饰材料等。翼星国际是您值得信赖的有影响力的综合供应链服务供合作伙伴。",
              image: null,
            },
            {
              name: "",
              describe: "",
              image: {
                url: "https://card-img1.oss-cn-beijing.aliyuncs.com/hl/image/gsjsBg.png",
              },
            },
          ],
        },
        {
          name: "lxwm",
          solution_list: [
            {
              name: "广州市白云区嘉禾街道下新村街粤旺财富创意园A栋101-103",
              describe: "3002405066@qq.com",
              pdf: "http://www.yixing-express.com",
              image: null,
            },
            {
              name: "",
              describe: "",
              image: null,
            },
          ],
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrolling);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrolling);
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    //判断
    getWebAddress(list,str) {
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
      this.$http.cardUserInfo().then((res) => {
        this.userInfo = res.data;
        this.userInfo.english=this.getWebAddress(res.data.content_field,'englishName')
      });
    },
    // 名片切换
    getCommitUser() {
      this.show = false;
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
  padding: 49px 125px 0 36px;
  .name {
    display: flex;
    align-items: center;
    .text1 {
      font-size: 14px;
      font-weight: 800;
      margin-right: 7px;
      letter-spacing: 5px;
    }
    .text2 {
      font-size: 9px;
      color: #422188;
    }
  }
  .text3 {
    font-size: 10px;
    letter-spacing: 5px;
    // margin-top: ;
  }
  .pm {
    margin-top: 19px;
  }
  .text4 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 11px;
  }
  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 11px;
    margin-top: 5px;
  }
  .text6 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    .textccc {
      width: 164.97px;
    }
    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 11px;
    align-items: baseline;
  }
}

.header2 {
  // width: 100%;
  height: 100%;
  padding: 70px 30px 0 52px;
  .post {
    text-align: right;

    .name {
      display: flex;
      align-items: center;
      .text1 {
        width: 100%;
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 5px;
      }
      .text2 {
        font-size: 12px;
        color: #422188;
      }
    }
  }
  .text3 {
    font-size: 10px;
    letter-spacing: 5px;
    // margin-top: ;
  }
  .pm {
    margin-top: 19px;
  }
  .text4 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 11px;
  }
  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 11px;
    margin-top: 5px;
  }
  .text6 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    .textccc {
    }
    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 11px;
    align-items: baseline;
  }
}

.header3 {
  // width: 100%;
  height: 100%;
  padding: 110px 30px 0 65px;
  display: flex;
  justify-content: space-between;
  .post {
    margin-top: 5px;
    .name {
      display: flex;
      align-items: center;
      .text1 {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 0.65em;
        color: #422187;
      }
      .text2 {
        font-size: 10px;
        color: #666666;
      }
    }
  }
  .text3 {
    font-size: 10px;
    letter-spacing: 5px;
    // margin-top: ;
  }
  .pm {
  }
  .text4 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 11px;
  }
  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 11px;
    margin-top: 5px;
  }
  .text6 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    .textccc {
      width: 164.97px;
    }
    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 11px;
    align-items: baseline;
  }
}
.selectCard {
  border: 1px solid #422187 !important;
}
.qywh-box {
  display: grid;
  grid-template-columns: 50% 50%;
  padding-left: 30px;
  row-gap: 10px;
  .cultureName {
    font-size: 14px;
    color: #333;
  }
  .cultureDescribe {
    font-size: 12px;
    color: #666;
    margin-left: 12px;
  }
}
.m-t-14 {
  margin-bottom: 14px;
}
</style>
