<template>
  <div class="p-page">
    <!-- 头部切换 -->
    <!-- 名字列表 -->
    <!-- <nameList
      :show="nameShow"
      @commitUserName="getCommitUserName"
      color="#004098"
    ></nameList> -->
    <div style="height: 12px"></div>
    <headerBg
      cardBg="yt"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="false"
      :popupLength="1"
      color="#004097"

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
                  <div class="text2" @click.stop="nameShow = true">
                    {{ userInfo.Ename  }}
                  </div>
                </div>
                <div
                  style="width: 1px; height: 10px; background: #004097;margin:0 8px 0 8px"
                ></div>
                <div class="text3">
                  {{ userInfo.post }}
                </div>
              </div>
              <div class="pm">
                <div v-if="userInfo.phone" class="text4">
                  <van-image :src="IMG + 'yt/icon/phone.png'" />
                  {{ userInfo.phone }}
                </div>
                <div v-if="userInfo.email" class="text5">
                  <van-image :src="IMG + 'yt/icon/email.png'" />{{
                    userInfo.email
                  }}
                </div>
                <div v-if="userInfo.address" class="text6">
                  <van-image :src="IMG + 'yt/icon/address.png'" />
                  <div>
                    <div class="textccc" v-for="(item, index) in userInfo.address.split('  ')" :key="index">
                      {{ item }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </template>
      <!-- <template #cardBg>
        <div
          class="cardBg"
          :style="{
            'background-image':
              'url(' + IMG + 'yt/cardBg/cardBg' + (cardId + 1) + '.png)',
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
                :src="IMG + 'yt/icon/phone' + (slotProps.item + 1) + '.png'"
              />
              {{ userInfo.phone }}
            </div>
            <div v-if="userInfo.email" class="text5">
              <van-image
                :src="IMG + 'yt/icon/email' + (slotProps.item + 1) + '.png'"
              />{{ userInfo.email }}
            </div>
            <!-- <div v-if="userInfo.address" class="text6">
              <van-image
                v-if="slotProps.item + 1 != 1"
                :src="IMG + 'yt/icon/address' + (slotProps.item + 1) + '.png'"
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
                :src="IMG + 'yt/icon/address' + (slotProps.item + 1) + '.png'"
              />
            </div> -->
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="yt/icon/phoneButton.png"
      addressButton="yt/icon/addressButton.png"
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
      qrCodeIcon="yt/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="yt/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#004097"
    ></tab>
    <!-- 公司介绍 -->
    <headerContent
      headerImg="yt/headerImage/gsjj.png"
      width="100%"
      height="41px"
      id="gsjj"
    >
      <template #content>
        <van-image :src="IMG + 'yt/image/jjBg.png'" class="m-t-14" />
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
          style="line-height:20px;letter-spacing:1px;"
        >
          {{ item }}
        </p>
        <yt-content
          :styleType="1"
          :styleData="textList[0]"
          :isHome="true"
        ></yt-content>
        <more title="查看更多" path="/contentInfo" float="flex-start"></more>
      </template>
    </headerContent>
    <!-- 感恩伙伴 -->
    <headerContent
      headerImg="yt/headerImage/gehb.png"
      width="100%"
      height="41px"
    >
      <template #content>
        <div class="hbBox">
          <img
            v-if="item.image && index <= 8"
            :src="item.image.url"
            v-for="(item, index) in getContent('感恩伙伴')"
          />
        </div>
        <more title="查看更多" path="/contentInfo" float="flex-start"></more>
      </template>
    </headerContent>
    <!-- 业务展示 -->
    <headerContent
      headerImg="yt/headerImage/ywzs.png"
      width="135px"
      height="33px"
      id="ywzs"
    ></headerContent>
    <headerContent :isHeader="false">
      <template #content>
        <listBox
          v-for="(item, index) in getContent('业务展示')"
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
    <!-- 案例展示 -->
    <headerContent
      headerImg="yt/headerImage/alzs.png"
      width="100%"
      height="41px"
      id="alzs"
    >
      <template #content>
        <div
          v-for="item in getContent('案例展示')"
          class="alBox"
          :style="{ backgroundImage: `url(${getUrl(item.image.url)})` }"
          @click="
            $router.push({
              path: '/categorySolutionInfo',
              query: { id: item.id },
            })
          "
        >
          <div class="alBg">
            <span class="al-name">{{ item.name }}</span>
            <span class="al-describe">{{ item.describe }}</span>
            <img :src="IMG + 'yt/icon/right2.png'" />
          </div>
        </div>
        <more title="查看更多" path="/fourthIndex" float="flex-start"></more>
      </template>
    </headerContent>

    <!-- 联系我们 -->
    <headerContent
      headerImg="yt/headerImage/lxwm.png"
      width="100%"
      height="41px"
      id="lxwm"
    >
      <template #content>
        <companyTitle
          title="深圳市易通科技物流有限公司"
          fontSize="14px"
        ></companyTitle>

        <div v-for="(item, index) in getContent('联系我们')" :key="index">
          <div @click="getClick(item)" class="lxBox">
            <div class="name">
              <div class="line"></div>
              {{ item.name }}
            </div>
            <div class="describe">
              <img :src="IMG + 'yt/icon/name.png'" />{{ item.name_en }}
            </div>
            <div class="describe">
              <img :src="IMG + 'yt/icon/email.png'" />{{ item.pdf }}
            </div>
            <div class="describe">
              <img :src="IMG + 'yt/icon/address.png'" />
              <span :class="{ 'multi-line': item.describe.length > 26 }">{{
                item.describe
              }}</span>
            </div>
          </div>
        </div>
        <div class="h-10"></div>
        <i-text
          title="0755-2819 3626"
          titles="联系电话："
          color="#666666"
          fontSize="13px"
          fontSize2="13px"
        ></i-text>
        <i-text
          title="alex-szlbc@etton-log.com"
          titles="电子邮箱："
          color="#666666"
          fontSize="13px"
          fontSize2="13px"
        ></i-text>
        <i-text
          title="深圳市龙华区民治街道宝山时代26楼"
          titles="总部地址："
          color="#666666"
          fontSize="13px"
          fontSize2="13px"
        ></i-text>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="深圳市龙华区民治街道宝山时代大厦26楼"
          name="易通科技物流"
        ></TXMap>
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
          name: "公司简介",
          id: "gsjj",
        },
        {
          name: "业务展示",
          id: "ywzs",
        },
        {
          name: "案例展示",
          id: "alzs",
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
      popupData: null,
      textList: [],
      text: '',
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
    addSpace(str) {
      let aList=str.split(' ')
      return aList;
    },
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
      const request1 = this.$http.categorySolutionTypeList({
        parent_name: "列表信息",
      });
      const request2 = this.$http.categorySolutionTypeList({
        parent_name: "公司简介",
      });
      Promise.all([request1, request2])
        .then(([listResponse, introResponse]) => {
          this.list = listResponse.data.list;
          const matchedItems = introResponse.data.list.filter(item => item.name === "文本内容");
          this.text = matchedItems.length > 0 ? matchedItems[0].solution_list[0].describe : '';
          this.textList =
            introResponse.data.list.filter(
              (item) => item.name === "易通优势"
            ) || [];


        })
        .catch((error) => {
          console.error("请求失败:", error);
        });
      // this.$http
      //   .categorySolutionTypeList({ parent_name: "列表信息" })
      //   .then((res) => {
      //     console.log("列表信息", res);
      //     this.list = res.data.list;
      //   });
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
        this.userInfo.Ename=this.getWebAddress(res.data.content_field,'e_name')
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
  padding: 65px 0 0 30px;

  .post {
    display: flex;
    align-items: center;
    .name {
      display: flex;
    align-items: center;
     .text1 {
        font-size: 17px;
        font-weight: 800;
        // letter-spacing: 5px;
        color: #004097;
        margin-left:10px;
      }
      .text2 {
        font-size: 14px;
        color: #004097;
        margin-left:3px;
        font-weight: 600;
      }
    }
  }
  .text3 {
    font-size: 11px;
    color: #333;
    margin-top: 3px;
  }
  .pm {
    margin-top: 12px;
  }
  .text4 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #343434;
    font-size: 11px;
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
    font-size: 11px;
    margin-top: 4px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
      width: 280px;
      margin-bottom: 2px;
    }
    display: flex;
    margin-top: 4px;
    color: #343434;
    font-size: 11px;
    align-items: flex-start;
  }
}
.header2 {
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
      color: #004097;
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
    align-items: flex-start;
    justify-content: end;
    text-align: right;
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
  border: 1px solid #004097 !important;
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
  background-color: #004097 !important;
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
  .describe:has(span.multi-line) {
    align-items: flex-start; /* 如果 name_en 换行，则对齐到底部 */
  }

  .describe span {
    display: inline-block;
    max-width: 260px; /* 限制宽度触发换行 */
    word-break: break-word; /* 避免长单词溢出 */
  }
  .line {
    width: 1px;
    height: 10px;
    background-color: #004097;
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
.alBox {
  margin: 10px 0;
  background-size: cover; /* 让背景图片等比例铺满 */
  background-position: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden; /* 防止子元素溢出 */
  height: 160px;
}

.alBg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  height: 50%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 8px 8px;
}

.al-name {
  color: #ffffff;
  font-size: 15px;
}

.al-describe {
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
}

.alBg img {
  width: 29px;
  margin-right: auto; /* 让图片靠右对齐 */
  align-self: center;
}

</style>
