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
      cardBg="snw"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="false"
      :popupLength="1"
      color="#1363F2"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="d-flex" style="justify-content: space-between">
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
                  <van-image :src="IMG + 'snw/icon/phone.png'" />
                  {{ userInfo.phone }}
                </div>
                <div v-if="userInfo.email" class="text5">
                  <van-image :src="IMG + 'snw/icon/email.png'" />{{
                    userInfo.email
                  }}
                </div>
                <div v-if="userInfo.address" class="text6">
                  <van-image :src="IMG + 'snw/icon/address.png'" />
                  <div>
                    <div class="textccc">
                      {{ userInfo.address }}
                    </div>
                  </div>
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
      <!-- <template #cardBg>
        <div
          class="cardBg"
          :style="{
            'background-image':
              'url(' + IMG + 'snw/cardBg/cardBg' + (cardId + 1) + '.png)',
          }"
        ></div>
      </template> -->
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
                :src="IMG + 'snw/icon/phone' + (slotProps.item + 1) + '.png'"
              />
              {{ userInfo.phone }}
            </div>
            <div v-if="userInfo.email" class="text5">
              <van-image
                :src="IMG + 'snw/icon/email' + (slotProps.item + 1) + '.png'"
              />{{ userInfo.email }}
            </div>
            <!-- <div v-if="userInfo.address" class="text6">
              <van-image
                v-if="slotProps.item + 1 != 1"
                :src="IMG + 'snw/icon/address' + (slotProps.item + 1) + '.png'"
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
                :src="IMG + 'snw/icon/address' + (slotProps.item + 1) + '.png'"
              />
            </div> -->
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="snw/icon/phoneButton.png"
      addressButton="snw/icon/addressButton.png"
      :phone="userInfo.phone"
      address="深圳市龙华区民治街道宝山时代大厦2610-2616"
      name="易通科技物流"
      :type="1"
      width="24px"
      height="24px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="snw/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="snw/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#1363F2"
    ></tab>
    <!-- 企业介绍 -->
    <headerContent
      headerImg="snw/headerImage/qyjs.png"
      width="112px"
      height="30px"
      id="qyjj"
    >
      <template #content>
        <van-image :src="IMG + 'snw/image/jjBg.png'" class="m-t-14" />
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </p>
        <more title="查看更多" path="/contentInfo" float="flex-start" color="#666666"></more>
      </template>
    </headerContent>
    <!-- 合作伙伴 -->
    <headerContent
      headerImg="snw/headerImage/hzhb.png"
      width="112px"
      height="30px"
    >
      <template #content>
        <!-- <div class="hbBox">
          <img
            v-if="item.image && index <= 8"
            :src="item.image.url"
            v-for="(item, index) in getContent('合作伙伴')"
          />
        </div> -->

      </template>
    </headerContent>
    <!-- 服务内容 -->
    <headerContent headerImg="snw/headerImage/fwnr.png"
      width="112px"
      height="41px"
      id="fwnr">
      <template #content>
        <listBox
          v-for="(item, index) in getContent('服务内容')"
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
        <more title="查看更多" path="/thirdIndex" float="flex-start" color="#666666"></more>
      </template>
    </headerContent>
    <!-- 平台系统 -->
    <headerContent
      headerImg="snw/headerImage/ptxt.png"
      width="112px"
      height="41px"
      id="ptxt"
    >
      <template #content>
        <div
          v-for="item in getContent('平台系统')"
          class="ptBox"
          :style="{ backgroundImage: `url(${getUrl(item.image.url)})` }"
          @click="
            $router.push({
              path: '/categorySolutionInfo',
              query: { id: item.id },
            })
          "
        >
          <div class="ptBg">
            <span class="pt-name">{{ item.name }}</span>
            <div class="pt-line"></div>
            <span class="pt-describe">{{ item.describe }}</span>

          </div>
        </div>
        <more title="查看更多" path="/secondIndex" float="flex-start" color="#666666"></more>
      </template>
    </headerContent>

    <!-- 联系我们 -->
    <headerContent
      headerImg="snw/headerImage/lxwm.png"
      width="112px"
      height="30px"
      id="lxwm"
    >
      <template #content>
        <companyTitle
          title="上海申诺伟国际物流有限公司"
          fontSize="14px"
        ></companyTitle>
        <i-text
          title="021-60126118"
          titles="电话："
          color="#666666"
          fontSize="14px"
        ></i-text>
        <i-text
          title="上海市浦东新区东方路818号22楼"
          titles="地址："
          color="#666666"
          fontSize="14px"
        ></i-text>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="深圳市龙华区民治街道宝山时代大厦2610-2616"
          name="易通科技物流"
        ></TXMap>
        <i-text
          title="www.sinoway56.com"
          titles="官网："
          color="#666666"
          fontSize="14px"
        ></i-text>
      </template>
    </headerContent>
    <popup ref="lxPopup" :data="popupData"></popup>
    <!-- 阿库标识 -->
    <aKuLogo></aKuLogo>
  </div>
</template>

 <script>
import { Toast } from "vant";
import iText from "../../tool/iText.vue";
export default {
  components: { iText },

  data() {
    return {
      tabList: [
        {
          name: "企业简介",
          id: "qyjj",
        },
        {
          name: "服务内容",
          id: "fwnr",
        },
        {
          name: "平台系统",
          id: "ptxt",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },
      ], ///tab栏列表
      tabId: "qyjj", //默认tab
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
      popupData: null,
      text:'申诺伟（控股）集团是一家总部设在上海陆家嘴金融中心，专注于供应链管理领域运营及投资服务，利用互联网信息技术以前瞻性的管理理念和全新商务模式，为国内外客户提供全新供应链管理解决方案，覆盖供应链上、中、下游各个环节，力求创造高效、独特、优质的供应链管理模式，转化为客户商业价值。在华东、华南、西南、华北设营运中心、11家独立经营公司，拥有员工600多人，在全球67个国家拥有200多家海外代理网络。目前，服务领域涉及全球采购、EPC国际援外工程、造船和海洋工程、石油化工、电子、零售等行业。'
    };
  },
  created() {
    this.getUserInfo();
    this.getList();
  },
  mounted() {
    window.addEventListener("scroll", this.scrolling);
    // this.getUserInfo();
    // this.getList();
  },
  beforeDestroy() {
    // Vue 2
    window.removeEventListener("scroll", this.scrolling);
  },
  methods: {
    getClick(res) {
      this.popupData = {
        phone: res.pdf,
        address: res.describe,
        addressName: res.name,
      };
      this.$refs.lxPopup.show = true;
    },
    getUrl(str) {
      return "'" + str + "'";
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
        (document.body ? document.body.scrollTop : 0) ||
        (document.documentElement ? document.documentElement.scrollTop : 0);

      var tapElement = document.getElementById("tap");
      if (!tapElement) return; // 避免 `null.offsetTop` 报错

      var tabScroll = tapElement.offsetTop;
      this.tabIsTop = scrollTop >= tabScroll;
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
  padding: 40px 0 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .post {
  }
  .name {
    .text1 {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 5px;
      color: #1363F2;
    }
    .text2 {
      font-size: 10px;
      color: #333333;

    }
  }
  .text3 {
    font-size: 10px;
    // letter-spacing: 5px;
    font-weight: 400;
    line-height: 15px;
  }
  .pm {
    margin-top: 30px;
  }
  .text4 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }

    color: #343434;
    font-size: 10px;
    align-items: center;

    display: flex;
  }
  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #343434;
    font-size: 10px;
    align-items: center;

    display: flex;
    margin-top: 4px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
      margin-top: 2px;
    }
    line-height: 12px;
    margin-top: 4px;
    display: flex;
    color: #343434;
    font-size: 10px;
    align-items: center;
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
        color: #1363F2;
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
  border: 1px solid #1363F2 !important;
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
  background-color: #1363F2 !important;
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
    font-size: 10px;
    align-items: center;
    display: flex;
    margin-top: 2px;
  }
  .describe img {
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }
  .line {
    width: 1px;
    height: 10px;
    background-color: #1363F2;
    margin-right: 5px;
  }
}
.h-10 {
  height: 10px;
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
.ptBox {
  margin: 10px 0;
  background-size: cover; /* 让背景图片等比例铺满 */
  background-position: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden; /* 防止子元素溢出 */
  height: 160px;
}

.ptBg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  height:100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 8px 8px;
}

.pt-name {
  color: #ffffff;
  font-size: 15px;
}
.pt-line{
  width: 108px;
height: 2px;
background: rgba(255,255,255,0.5);
border-radius: 2px;
margin:4px 0 6px 0;
}
.pt-describe {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
}


</style>
