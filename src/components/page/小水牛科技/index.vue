<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="xsnkj"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="false"
      :popupLength="1"
      color="#DA9C17"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>
            </div>
            <div class="text3">
              {{ userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'xsnkj/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'xsnkj/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'xsnkj/icon/address.png'" />
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
            <div class="text3">
              {{ userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'xsnkj/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'xsnkj/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'xsnkj/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="xsnkj/icon/phoneButton.png"
      addressButton="xsnkj/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="小水牛科技"
      :type="1"
      width="16px"
      height="16px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="xsnkj/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="xsnkj/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#DA9C17"
    ></tab>
    <!-- 公司介绍 -->
    <headerContent
      headerImg="xsnkj/headerImage/qyjs.png"
      width="106px"
      height="50px"
      id="gywm"
    >
      <template #content>
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </p>
        <van-image :src="IMG + 'xsnkj/image/jsBg.png'" />
      </template>
    </headerContent>
    <!-- 品牌文化 -->
    <headerContent
      headerImg="xsnkj/headerImage/ppwh.png"
      width="100px"
      height="50px"
    >
      <template #content>
        <div
          class="whBox"
          v-for="(item, index) in getContent('品牌文化')"
          :key="index"
        >
          <div class="d-flex">
            <div class="line"></div>
            <span class="name">{{ item.name }}</span>
          </div>
          <div class="nameEn">{{ item.name_en }}</div>
          <div class="describe">{{ item.describe }}</div>
        </div>
      </template>
    </headerContent>
    <!-- 荣誉认证 -->
    <headerContent
      headerImg="xsnkj/headerImage/ryzs.png"
      width="124px"
      height="50px"
    >
      <template #content>
        <div
          class="rzBox"
          v-if="index < 2"
          v-for="(item, index) in rzList"
          :key="index"
        >
          <div class="name">{{ item.name }}</div>
          <div class="rzItem">
            <van-image
              v-if="index2 < 2"
              width="155px"
              height="208px"
              v-for="(item2, index2) in item.list"
              :key="index2"
              :src="item2"
            ></van-image>
          </div>
        </div>
        <div class="m-t-10"></div>
        <more
          title="查看更多"
          :icon="IMG + 'xsnkj/icon/right.png'"
          path="/contentInfo"
          color="#666666"
        ></more>
      </template>
    </headerContent>
    <!-- 产品方案 -->
    <headerContent
      headerImg="xsnkj/headerImage/cpfa.png"
      width="100px"
      height="50px"
      id="cpfa"
    >
      <template #content>
        <div
          v-for="(item, index) in getContent('产品方案')"
          v-if="index <= 2"
          class="zyBox"
          :style="{ backgroundImage: 'url(' + getUrl(item.image.url) + ')' }"
          @click="getTo(item.id)"
        >
          <div class="zyItem">
            <div class="name">{{ item.name }}</div>
            <div class="describe">{{ item.describe }}</div>
          </div>
        </div>
        <div class="m-t-10"></div>
        <more
          title="查看更多"
          :icon="IMG + 'xsnkj/icon/right.png'"
          path="/thirdIndex"
          color="#666666"
        ></more>
      </template>
    </headerContent>
    <!-- 应用场景 -->
    <headerContent
      headerImg="xsnkj/headerImage/yycj.png"
      width="121px"
      height="50px"
      id="yycj"
    >
      <template #content>
        <div
          class="d-flex cjBox"
          v-for="(item, index) in getContent('应用场景')"
          v-if="index<4"
          @click="getTo(item.id)"
        >
          <van-image
            v-if="item.image"
            :src="item.image.url"
            width="148px"
            height="116px"
          ></van-image>
          <div class="w-55">
            <div class="name">
              <div class="round"></div>
              {{ item.name }}
            </div>
            <div class="describe">{{ item.describe }}</div>
            <div class="cjButton">查看更多</div>
          </div>
        </div>

        <div class="m-t-10"></div>
        <more
          title="查看更多"
          :icon="IMG + 'xsnkj/icon/right.png'"
          path="/secondIndex"
          color="#666666"
        ></more>
      </template>
    </headerContent>

    <!-- 阿库标识 -->
    <aKuLogo></aKuLogo>
  </div>
</template>

 <script>
import { Toast } from "vant";
export default {
  data() {
    return {
      tabList: [
        {
          name: "关于我们",
          id: "gywm",
        },
        {
          name: "产品方案",
          id: "cpfa",
        },
        {
          name: "应用场景",
          id: "yycj",
        },
      ], ///tab栏列表
      tabId: "gywm", //默认tab
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
      text: " 小水牛科技，致力于为客户提供工厂柔性防护解决方案，打造安全、环保、高端的企业环境让千万劳动者能够更加安心的、专注的投入到工作之中。 公司研发团队由“浙江千人计划”的美籍华人李博士带队，自主设计研发出独特的高分子材料和多级柔性缓冲结构，获得几十项国家专利、著作权证书，并通过了严苛的德国TUV认证。 公司凭靠先进的创新设计、生产制造、品质管理和优秀服务，小水牛成为可口可乐、蒙牛、伊利、青岛啤酒、益海嘉里、美的、海尔、西门子、施耐德、公牛、特斯拉、大众、沃尔沃、三菱比亚迪、宝洁、中外运、京东物流等全球知名企业的长期合作伙伴。 我们通过了ISO9001:2015质量管理体系、ISO14001:2015环境管理体系、OHSAS18001职业健康安全管理体系认证。我们将进一步优化和规范各项管理标准，不断提高体系运行的有效性和公司的管理水平，持续为广大客户提供优质的产品与服务。 我们定期会对产品及零部件根据不同的特性要求进行高低温循环试验、高低温后压力及冲击试验、中性盐雾试验、耐化学性试验、氙灯老化试验、摆锤冲击试验、模拟场景冲击试验等验证手段，确保产品质量的有效性，从而赢得众多客户的信任。  公司始终坚持以“让工作更安全”为使命，以“人品、产品、企品三品合一”为核心价值观，向着成为“全球安全防护领域领导者”的宏伟愿景大步迈进！",
      rzList: [],
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
    beforeDestroy() {  // Vue 2
  window.removeEventListener("scroll", this.scrolling);
},

  methods: {
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    },
    getUrl(str) {
      return "'" + str + "'";
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
          this.getRz();
        });
    },
    getContent(name) {
      let data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
    getRz() {
      const originalList = this.getContent("荣誉认证");
      const transformedList = originalList.reduce(
        (accumulator, currentValue) => {
          // 查找当前name是否已经在accumulator中
          const existingItem = accumulator.find(
            (item) => item.name === currentValue.name
          );

          // 如果已经存在，将当前元素的text添加到其list中
          if (existingItem) {
            existingItem.list.push(currentValue.image.url);
          } else {
            // 如果不存在，则创建一个新对象并添加到accumulator中
            accumulator.push({
              name: currentValue.name,
              list: [currentValue.image.url],
            });
          }

          // 返回累积的accumulator以便下一次迭代
          return accumulator;
        },
        []
      ); // 初始值是一个空数组

      this.rzList = transformedList;
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
.line {
  width: 100%;
  height: 1px;
  color: #eaeaea;
  margin: 5px 0;
}
.m-t-10 {
  margin-top: 10px;
}
.header1 {
  // width: 100%;
  height: 100%;
  padding: 46px 0 0 30px;
  .post {
    display: flex;
    align-items: center;
  }
  .name {
    .text1 {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 5px;
      color: #333333;
    }
    .text2 {
      font-size: 9px;
      color: #422188;
    }
  }
  .text3 {
    font-size: 10px;
    letter-spacing: 5px;
    margin-left: 4px;
  }
  .pm {
    margin-top: 28px;
  }
  .text4 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }

    color: #666666;
    font-size: 12px;
  }
  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 12px;
    margin-top: 4px;
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
    margin-top: 3px;
    color: #666666;
    font-size: 12px;
    align-items: center;
  }
}

.header2 {
  // width: 100%;
  height: 100%;
  padding: 42px 0 0 50px;

  .post {
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 5px;
        color: #333333;
      }
      .text2 {
        font-size: 12px;
        color: #422188;
      }
    }
  }
  .text3 {
    font-size: 10px;
    color: #333333;
    margin-top: 4px;
  }
  .pm {
    margin-top: 24px;
  }
  .text4 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 12px;
  }
  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 12px;
    margin-top: 3px;
  }
  .text6 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    .textccc {
      width: 230px;
    }
    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 12px;
    align-items: baseline;
  }
}

.header3 {
  // width: 100%;
  height: 100%;
  padding: 57px 30px 0 30px;

  .post {
    display: flex;
    align-items: center;
    float: right;
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        color: #333;
        text-align: right;
      }
      .text2 {
        font-size: 10px;
        color: #333;
        margin-left: 5px;
        text-align: right;
      }
    }
  }
  .text3 {
    font-size: 12px;
    color: #333;
    margin-left: 5px;
  }
  .pm {
    margin-top: 50px;
  }
  .text4 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 12px;
  }
  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 12px;
    margin-top: 4px;
  }
  .text6 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    .textccc {
      width: 230px;
    }
    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 12px;
    align-items: baseline;
  }
}
.header4 {
  // width: 100%;
  height: 100%;
  padding: 30px 0 0 30px;

  .post {
    margin-left: 184px;
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        color: #333333;
      }
    }
    .text2 {
      font-size: 12px;
      color: #333;
      font-weight: 500;
      margin-top: 5px;
    }
  }
  .text3 {
    font-size: 10px;
    color: #333333;
    margin-top: 5px;
  }
  .pm {
    margin-top: 24px;
  }
  .text4 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 12px;
  }
  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 12px;
    margin-top: 4px;
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
    margin-top: 4px;
    color: #666666;
    font-size: 12px;
    align-items: center;
  }
}
.selectCard {
  border: 1px solid #da9c17 !important;
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
  background-color: #da9c17 !important;
}
.whBox {
  margin-top: 8px;

  .line {
    width: 2px;
    height: 17px;
    background-color: #da9c17;
    margin-right: 5px;
  }
  .name {
    color: #333333;
    font-size: 12px;
    font-weight: 400;
  }
  .nameEn {
    font-size: 10px;
    color: #333333;
  }
  .describe {
    color: #666666;
    font-size: 12px;
  }
}

.rzBox {
  margin-top: 5px;
  .name {
    font-size: 14px;
    color: #333;
  }
  .rzItem {
    display: grid;
    grid-template-columns: 49% 49%;
    column-gap: 5px;
    row-gap: 5px;
    margin-top: 10px;
  }
}
.zyBox {
  width: 319px;
  height: 156px;
  background-size: 100% 100%;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .zyItem {
    background-color: rgba($color: #000000, $alpha: 0.3);
    width: 100%;
    padding: 10px 8px;
    height: 85px;
    border-radius: 0 0 8px 8px;
    .name {
      color: #ffffff;
      font-size: 14px;
      margin-bottom: 6px;
    }
    .describe {
      color: #ffffff;
      font-size: 12px;
      font-weight: 300;
    }
  }
}
.cjBox {
  justify-content: space-between;
  margin-top:8px;
  .round {
    background-color: #da9c17;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 4px;
  }
  .w-55 {
    width: 53%;
  }
  .name {
    color: #333;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .describe {
    font-size: 12px;
    color: #999;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .cjButton {
    width: 64px;
    height: 28px;
    padding: 6px 8px;
    border: 1px solid #333;
    font-size: 12px;
    background-color: #fff;
    margin-left:100px;
    border-radius: 8px;
    white-space: nowrap;
  }
}
</style>
