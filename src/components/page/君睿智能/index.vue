<template>
  <div class="p-page">
    <!-- 头部切换 -->
    <!-- 名字列表 -->
    <nameList :showFilter="true" :show="nameShow" @commitUserName="getCommitUserName" color="#2347B3"></nameList>
    <headerBg v-show="modelShow('名片')" cardBg="jr" :cardId="cardId" :isCard="modelShow('名片背面')"
      @commitUser="getCommitUser" :show="false" :popupLength="1" color="#2347B3">
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
                  <van-image :src="IMG + 'jr/icon/phone.png'" />
                  {{ userInfo.phone }}
                </div>
                <div v-if="userInfo.email" class="text5">
                  <van-image :src="IMG + 'jr/icon/email.png'" />
                  {{
                    userInfo.email
                  }}
                </div>
                <div v-if="userInfo.address" class="text6">
                  <van-image :src="IMG + 'jr/icon/address.png'" />
                  <div>
                    <div class="textccc">
                      {{ userInfo.address }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <van-image width="70px" height="70px" :src="userInfo.wx_code.url" v-if="userInfo.wx_code"></van-image> -->
          </div>

        </div>
      </template>
      <!-- <template #cardBg>
        <div
          class="cardBg"
          :style="{
            'background-image':
              'url(' + IMG + 'jr/cardBg/cardBg' + (cardId + 1) + '.png)',
          }"
        ></div>
      </template> -->
      <template #default="slotProps">
        <div :class="[
          'header' + (slotProps.item + 1),
          { selectCard: cardIds == slotProps.item },
          'b-dotted',
        ]" @click="cardIds = slotProps.item">
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
              <van-image :src="IMG + 'jr/icon/phone' + (slotProps.item + 1) + '.png'" />
              {{ userInfo.phone }}
            </div>
            <div v-if="userInfo.email" class="text5">
              <van-image :src="IMG + 'jr/icon/email' + (slotProps.item + 1) + '.png'" />{{ userInfo.email }}
            </div>
            <!-- <div v-if="userInfo.address" class="text6">
              <van-image
                v-if="slotProps.item + 1 != 1"
                :src="IMG + 'jr/icon/address' + (slotProps.item + 1) + '.png'"
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
                :src="IMG + 'jr/icon/address' + (slotProps.item + 1) + '.png'"
              />
            </div> -->
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress v-show="modelShow('电话导航')" phoneButton="jr/icon/phoneButton.png" addressButton="jr/icon/addressButton.png"
      :phone="userInfo.phone" :address="userInfo.address ? userInfo.address : '浙江省宁波市鄞州区姜山镇和益村（鄞工智能制造产业园7#楼1-2室）'"
      name="君睿智能" :type="1" width="24px" height="24px"></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode v-show="modelShow('扫码加微信')" :isWx="userInfo.wx_code" qrCodeIcon="jr/icon/sys.png" :isXx="userInfo.image"
      phonoIcon="jr/icon/grxx.png">
    </pQrcode>
    <!-- tab栏 -->
    <tab v-show="tabList.length != 0" :tabList="tabList" :tabId="tabId" :isTob="tabIsTop" id="tap" @butTab="butTab"
      color="#2347B3"></tab>
    <!-- 君睿智能 -->
    <headerContent v-show="modelShow('君睿智能')" headerImg="jr/headerImage/jrzn.png" width="103px" height="48px" id="jrzn">
      <template #content>
        <van-image :src="IMG + 'jr/image/jjBg.png?time=' + time" class="m-t-14" />
        <p class="textStyle" style="letter-spacing:1px;line-height: 15px;" v-for="(item, index) in text.split('  ')"
          :key="index">
          {{ item }}
        </p>
        <!-- <p class="textStyle">{{ text }}</p> -->
        <div>
          <div v-for="(item, index) in textList" :key="index"
            :style="{ 'background-image': 'url(' + getUrl(item.image.url) + ')' }" v-html="item.rich_text"
            class="textList">

          </div>
        </div>
        <div class="h-10"></div>
        <more title="查看更多" path="/thirdIndex" float="flex-start" color="#666666"></more>
      </template>
    </headerContent>
    <!-- 产品案例 -->
    <headerContent v-show="modelShow('产品案例')" headerImg="jr/headerImage/cpal.png" width="78px" height="48px" id="cpal">
      <template #content>
      </template>
    </headerContent>
    <headerContent v-show="modelShow('产品案例')" :isHeader="false">
      <template #content>
        <div v-for="(item, index) in productList" :key="index" class="productBox" @click="getTo(item.id)">
          <van-image :src="item.image.url" width="100%" height="160px"></van-image>
          <div class="p-name">{{ item.name }}</div>
        </div>
        <more title="查看更多" path="/secondIndex" float="flex-start" color="#666666"></more>
      </template>
    </headerContent>
    <!-- 联系我们 -->
    <headerContent v-show="modelShow('联系我们')" headerImg="jr/headerImage/lxwm.png" width="74px" height="48px" id="lxwm">
      <template #content>
        <companyTitle title="浙江君睿智能装备有限公司" fontSize="14px"></companyTitle>
        <div v-for="(item, index) in addressList" :key="index">
          <div @click="getMap(item.describe, item.name)" class="lxBox">
            <div class="name">
              <div class="line"></div>
              {{ item.name }}
            </div>
            <div class="describe">{{ item.describe }}</div>
          </div>
        </div>
        <i-text title="13805868417" titles="联系电话：" color="#666666" fontSize="14px"></i-text>
        <i-text title="liming@junrui-auto.com" titles="电子邮箱：" color="#666666" fontSize="14px"></i-text>
        <!-- <i-text title="浙江省宁波市鄞州区姜山镇联东U谷7号楼" titles="地址：" color="#666666" fontSize="14px"></i-text> -->
        <!-- <TXMap mapWidth="100%" mapHeight="130px" address="浙江省宁波市鄞州区姜山镇联东U谷7号楼" name="易通科技物流"></TXMap> -->
        <div style="display: flex;flex-direction: column;justify-content: center;text-align:center;">
          <van-image :src="IMG + 'jr/image/fwh.png'" width="90px" height="90px" style="margin: auto;"></van-image>
          <span style="font-size:12px">关注官方服务号</span>
        </div>
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
import resData from "./resData";
export default {
  components: { iText },

  data() {
    return {
      tabList: [
        {
          name: "君睿智能",
          id: "jrzn",
        },
        {
          name: "产品案例",
          id: "cpal",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },
      ], ///tab栏列表
      tabId: "jrzn", //默认tab
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
      text: '',
      textList: [],
      addressList: [],
      productList: [],
      time: null,
      modelList: []
    };
  },
  async created() {
    this.getUserInfo();
    this.getList();
    this.time = Date.now()
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
    async getList() {
      try {
        // 1. 并行执行独立的异步请求（提升性能）
        const [textRes, textListRes, addressListRes, modelRes] = await Promise.all([
          resData.text(),
          resData.textList(),
          resData.addressList(),
          resData.modelList(),
        ]);

        // 2. 同步赋值（结构清晰）
        this.text = textRes;
        this.textList = textListRes;
        this.addressList = addressListRes;
        this.modelList = modelRes;
        // 3. 处理单独的接口请求（增加类型判断和容错）
        const caseRes = await this.$http.solutionTypeList({
          name: 'AI视觉检测案例'
        });

        // 4. 严格判断响应有效性（避免空指针错误）
        if (caseRes.code === 200 && Array.isArray(caseRes.data.list) && caseRes.data.list.length > 0) {
          this.productList = caseRes.data.list[0].solution_list || [];
        } else {
          this.productList = [];
          console.warn('AI视觉检测案例数据格式异常或为空');
        }

      } catch (error) {
        // 5. 统一错误处理（避免单个请求失败导致整体崩溃）
        console.error('数据获取失败:', error);
        // 可选：设置默认值或显示错误提示
        this.text = '';
        this.textList = [];
        this.addressList = [];
        this.productList = [];
      }
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
    getTo(id) {
      this.$router.push({
        path: '/solutionInfo',
        query: { id: id },
      })
    },
    modelShow(modelStr) {
      const matchedItem = this.modelList.find(item => item.name === modelStr);
      if (['君睿智能', '产品案例', '联系我们'].includes(modelStr)) {
        if (matchedItem && matchedItem.describe === "禁用") {
          const index = this.tabList.findIndex(item => item.name === modelStr);
          if (index !== -1) {
            this.tabList.splice(index, 1);
            this.tabId = this.tabList[0].id
          }
        }
      }

      // 先判断是否存在匹配项，再检查describe是否不等于"禁用"
      // 避免当没有匹配项时，访问undefined.describe导致的错误
      return !!matchedItem && matchedItem.describe !== "禁用";
    }
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

  .post {}

  .name {
    .text1 {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 5px;
      color: #2347B3;
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
      width: 234px;
    }

    line-height: 12px;
    margin-top: 4px;
    display: flex;
    color: #343434;
    font-size: 10px;
    align-items:flex-start;
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
        color: #2347B3;
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
  border: 1px solid #2347B3 !important;
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
  background-color: #2347B3 !important;
}

/deep/ .list1 {
  margin-top: 14px;
}

.lxBox {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  margin: 8px 0 4px 0;

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
    background-color: #2347B3;
    margin-right: 5px;
  }
}

.h-10 {
  height: 10px;
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

.productBox {
  margin-bottom: 20px;

  .p-name {
    color: #FFF;
    background-color: #2347B3;
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
