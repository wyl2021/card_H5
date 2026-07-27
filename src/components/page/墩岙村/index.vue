<template>
  <div class="p-page">
    <!-- 头部切换 -->
    <!-- 名字列表 -->
    <nameList
      :show="nameShow"
      @commitUserName="getCommitUserName"
      color="#02814A"
    ></nameList>
    <div style="height: 12px"></div>
    <headerBg
      cardBg="dac"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="false"
      :popupLength="1"
      color="#02814A"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="d-flex" style="justify-content: space-between">
            <div>
              <div class="post">
                <div class="name">
                  <div class="text1" >
                    {{ userInfo.name }}
                  </div>

                </div>

                <div class="text3">
                  {{ userInfo.post }}
                </div>
              </div>

              <div class="pm">
                <div v-if="userInfo.componyName" class="text4">
                  <van-image :src="IMG + 'dac/icon/company.png'" />{{
                    userInfo.componyName
                  }}
                </div>
                <div v-if="userInfo.phone" class="text5">
                  <van-image :src="IMG + 'dac/icon/phone.png'" />
                  {{ userInfo.phone }}
                </div>

                <div v-if="userInfo.address" class="text6">
                  <van-image :src="IMG + 'dac/icon/address.png'" />
                  <div>
                    <div class="textccc">
                      {{ userInfo.address || '浙江省宁波市象山县泗洲头镇墩岙村' }}
                    </div>
                  </div>
                </div>
              </div>
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
            <div class="text3">
              {{ userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div v-if="userInfo.phone" class="text4">
              <van-image
                :src="IMG + 'dac/icon/phone' + (slotProps.item + 1) + '.png'"
              />
              {{ userInfo.phone }}
            </div>
            <div v-if="userInfo.email" class="text5">
              <van-image
                :src="IMG + 'dac/icon/email' + (slotProps.item + 1) + '.png'"
              />{{ userInfo.email }}
            </div>
            <!-- <div v-if="userInfo.address" class="  text6">
              <van-image
                v-if="slotProps.item + 1 != 1"
                :src="IMG + 'dac/icon/address' + (slotProps.item + 1) + '.png'"
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
                :src="IMG + 'dac/icon/address' + (slotProps.item + 1) + '.png'"
              />
            </div> -->
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="dac/icon/phoneButton.png"
      addressButton="dac/icon/addressButton.png"
      :phone="userInfo.phone"
      address="浙江省宁波市象山县泗洲头镇墩岙村"
      name="象山县墩岙村村委会"
      :type="1"
      width="24px"
      height="24px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="dac/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="dac/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#02814A"
    ></tab>
    <!-- 墩岙故事 -->
    <headerContent
      headerImg="dac/headerImage/dags.png"
      width="117px"
      height="48px"
      id="dags"
    >
      <template #content>

          <van-image :src="IMG + 'dac/image/gsBg.png'" class="m-t-14" />
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
          style="line-height:20px;letter-spacing:1px;"
        >
          {{ item }}
        </p>
        <more title="查看更多" path="/thirdIndex" float="flex-start"></more>
      </template>
    </headerContent>
    <!-- 特色经济 -->
    <headerContent
      headerImg="dac/headerImage/tsjj.png"
      width="136px"
      height="48px"
      id="tsjj"
    >
      <template #content>
        <div
          v-for="(item,index) in list"
          class="alBox"
          :style="{ backgroundImage: `url(${handleUrl(item.image.url)})` }"
          @click="
            $router.push({
              path: '/secondIndex',
              query: { index:index  },
            })
          "
        >
          <div class="alBg">
            <span class="al-name">{{ item.name }}</span>
            <span class="al-describe">{{ zhToEn(item.name) }}</span>
            <img :src="IMG + 'dac/icon/right2.png'" />
          </div>
        </div>
        <more title="查看更多" path="/secondIndex" float="flex-start"></more>
      </template>
    </headerContent>

    <!-- 联系我们 -->
    <headerContent
      headerImg="dac/headerImage/lxwm.png"
      width="74px"
      height="48px"
      id="lxwm"
    >
      <template #content>
        <companyTitle
          title="浙江省宁波市象山县泗洲头镇墩岙村"
          fontSize="14px"
        ></companyTitle>


        <div class="h-10"></div>
        <i-text
          title="0574-65892279"
          titles="联系电话："
          color="#666666"
          fontSize="13px"
          fontSize2="13px"
        ></i-text>
        <i-text
          title="315724"
          titles="邮政编码："
          color="#666666"
          fontSize="13px"
          fontSize2="13px"
        ></i-text>
        <i-text
          title="浙江省宁波市象山县泗洲头镇墩岙村"
          titles="地理位置："
          color="#666666"
          fontSize="13px"
          fontSize2="13px"
        ></i-text>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="浙江省宁波市象山县泗洲头镇墩岙村"
          name="墩岙村"
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
export default {
  components: { iText },

  data() {
    return {
      tabList: [
        {
          name: "墩岙故事",
          id: "dags",
        },
        {
          name: "特色经济",
          id: "tsjj",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },
      ], ///tab栏列表
      tabId: "dags", //默认tab
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
    zhToEn(str){
      const zEn={
        '经济培训':'Training Economy',
        '民宿经济':'Homestay Economy',
        '农业经济':'Agricultural Economy',
        '云稻经济':'Yundao Economy'
      }
      return zEn[str] || '-'
    },
    handleUrl(str) {
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
        parent_name: "经济特色",
      });
      const request2 = this.$http.categorySolutionTypeList({
        parent_name: "村庄简介",
      });
      Promise.all([request1, request2])
        .then(([listResponse, introResponse]) => {

          const matchedItems = introResponse.data.list.filter(item => item.name === "首页");
          this.text = matchedItems.length > 0 ? matchedItems[0].solution_list[0].describe : '';
          this.list =listResponse.data.list|| [];

        })
        .catch((error) => {
          console.error("请求失败:", error);
        });
      // this.$http
      //   .categorySolutionTypeList({ parent_name: "经济特色" })
      //   .then((res) => {
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
        let webAddress = "象山县墩岙村村委会";
        list.forEach((item) => {
          if (item.key == str) {
            webAddress = !(item.value == "" || item.value == null)
              ? item.value
              : "象山县墩岙村村委会";
          } else {
            webAddress = "象山县墩岙村村委会";
          }
        });
        return webAddress;
      } else {
        return "象山县墩岙村村委会";
      }
    },
    getUserInfo() {
      wx.miniProgram.postMessage(this.userInfo);
      this.$http.cardUserInfo().then((res) => {
        this.userInfo = res.data;
        this.userInfo.componyName=this.getWebAddress(res.data.content_field,'company_name')
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

  .post {

    .name {
      display: flex;
    align-items: center;
     .text1 {
        font-size: 17px;
        font-weight: 800;
        letter-spacing: 5px;
        color: #02814A;
      }

    }
  }
  .text3 {
    font-size: 11px;
    color: #333;
    margin-top: 3px;
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
      // width: 151px;
      margin-bottom: 6px;
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
      color: #02814A;
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
  border: 1px solid #02814A !important;
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
  background-color: #02814A !important;
}

/deep/ .list1 {
  margin-top: 14px;
}

.h-10 {
  height: 10px;
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
