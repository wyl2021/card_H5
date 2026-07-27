<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="jwjm"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="false"
      :popupLength="1"
      color="#FF0000"
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
              <van-image :src="IMG + 'jwjm/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'jwjm/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'jwjm/icon/address.png'" />
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
              <van-image :src="IMG + 'jwjm/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'jwjm/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'jwjm/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="jwjm/icon/phoneButton.png"
      addressButton="jwjm/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="精伟精密"
      :type="1"
      width="16px"
      height="16px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="jwjm/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="jwjm/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#FF0000"
    ></tab>
    <!-- 企业介绍 -->
    <headerContent
      headerImg="jwjm/headerImage/qyjs.png"
      height="21px"
      width="240px"
      margin="unset"
      id="gywm"
    >
      <template #content> <div v-html="text"></div> </template
    ></headerContent>
    <!-- 文化理念 -->
    <headerContent
      headerImg="jwjm/headerImage/whln.png"
      height="21px"
      width="213px"
      margin="unset"
    >
      <template #content>
        <div v-for="(item, index) in lnList" class="lnBox">
          <div class="d-flex pieceName">
            <div class="piece"></div>
            {{ item.name }}
          </div>
          <div class="d-flex roundName" v-for="(item2, index2) in item.list">
            <div class="round"></div>
            {{ item2 }}
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 售后与联系 -->
    <headerContent
      headerImg="jwjm/headerImage/shylx.png"
      height="21px"
      width="263px"
      margin="unset"
    >
      <template #content>
        <van-image
          class=""
          v-for="(item, index) in getContent('售后与联系')"
          :key="index"
          v-if="item.image"
          :src="item.image.url"
        ></van-image>
      </template>
    </headerContent>
    <!-- 产品中心 -->
    <headerContent
      headerImg="jwjm/headerImage/cpzx.png"
      height="21px"
      width="248px"
      margin="unset"
      id="cpzx"
    >
      <template #content>
        <div class="cpBox" v-for="(item, index) in cpList" v-if="index < 3">
          <div class="d-flex title">
            <div class="line"></div>
            {{ item.name }}
          </div>
          <div class="twofold-grid">
            <div
              @click="getTo(item2.id)"
              class="cpItem"
              v-if="index2 < 2"
              v-for="(item2, index2) in item.list"
              :key="index2"
            >
              <van-image
                v-if="item2.url"
                :src="item2.url"
                width="155px"
                height="116px"
              ></van-image>
              {{ item2.name }}
            </div>
          </div>
        </div>
        <more
          title="查看更多"
          :icon="IMG + 'jwjm/icon/right.png'"
          color="#666666"
          path="thirdIndex"
          class="m-t-10"
        >
        </more>
      </template>
    </headerContent>
    <!-- 应用案例 -->
    <headerContent
      headerImg="jwjm/headerImage/yyal.png"
      height="21px"
      width="213px"
      margin="unset"
      id="yyal"
    >
      <template #content>
        <van-image
          style="margin-top: 10px"
          v-for="(item, index) in getContent('应用案例')"
          :src="item.image.url"
          :key="index"
          height="180px"
          width="100%"
        ></van-image>
        <more
          title="查看更多"
          :icon="IMG + 'jwjm/icon/right.png'"
          color="#666666"
          path="secondIndex"
          class="m-t-10"
        >
        </more>
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
          name: "产品中心",
          id: "cpzx",
        },
        {
          name: "应用案例",
          id: "yyal",
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
      text: "",
      lnList: [
        {
          name: "企业文化",
          list: [
            "企业愿景：让品牌受尊重",
            "企业使命：为员工搭建平台，为客户创造价值，为社会做出贡献",
            "核心价值观：忠诚，和谐，创新，奉献",
            "企业作风：主动出击，快速反应，马上行动",
          ],
        },
        {
          name: "企业理念",
          list: [
            "经营理念：努力工作，快乐生活",
            "工作理念：第一次就把事情做好，每一次都把事情做对",
            "质量理念：高标准，严要求，精细化，零误差",
            "服务理念：用心，专业，迅速",
            "营销理念：整合资源，共创共赢",
            "人才理念：合适的就是最好的",
            "创新理念：鼓励创新，宽容失败",
            "学习理念：活到老，学到老",
            "沟通理念：真诚，互信，尊重",
          ],
        },
      ],
      cpList: [],
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
    getTo(id) {
      this.$router.push({
        path: "/categorySolutionInfo",
        query: { id: id },
      });
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
          this.text =
            this.getContent("企业介绍") != []
              ? this.getContent("企业介绍")[0].describe
              : "";
          this.getRz();
        });
    },
    getContent(name) {

      let data = this.list.find((item) => item.name == name);
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
    getRz() {
      const originalList = this.getContent("产品中心");
      const transformedList = originalList.reduce(
        (accumulator, currentValue) => {
          // 查找当前name是否已经在accumulator中
          const existingItem = accumulator.find(
            (item) => item.name === currentValue.name
          );

          // 如果已经存在，将当前元素的text添加到其list中
          if (existingItem) {
            existingItem.list.push({
              name: currentValue.describe || "",
              url: currentValue.image.url || "",
              id: currentValue.id || "",
            });
          } else {
            // 如果不存在，则创建一个新对象并添加到accumulator中
            accumulator.push({
              name: currentValue.name,
              list: [
                {
                  name: currentValue.describe || "",
                  url: currentValue.image.url || "",
                  id: currentValue.id || "",
                },
              ],
            });
          }

          // 返回累积的accumulator以便下一次迭代
          return accumulator;
        },
        []
      ); // 初始值是一个空数组

      this.cpList = transformedList;
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
  padding: 40px 0 0 46px;
  .post {
  }
  .name {
    .text1 {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 5px;
      color: #333;
    }
    .text2 {
    }
  }
  .text3 {
    font-size: 10px;
    letter-spacing: 5px;
    margin-top: 4px;
    color: #666;
  }
  .pm {
    margin-top: 30px;
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
  border: 1px solid #ff0000 !important;
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
  background-color: #ff0000 !important;
}
.lnBox {
  .piece {
    border-radius: 3px;
    width: 8px;
    height: 8px;
    background-color: #ff0000;
    margin-right: 4px;
  }
  .pieceName {
    font-size: 14px;
    color: #333333;
    margin: 10px;
  }
  .round {
    width: 5px;
    height: 5px;
    border-radius: 3px;
    background-color: #666666;
    margin: 0 5px 0 15px;
  }
  .roundName {
    font-size: 12px;
    color: #666;
  }
}
.cpBox {
  margin-top: 10px;
  .line {
    background-color: #ff0000;
    width: 3px;
    height: 20px;
    border-radius: 11px;
    margin-right: 5px;
  }
  .title {
    color: #333;
    font-size: 14px;
    font-weight: 500;
  }
  .cpItem {
    text-align: center;
    color: #666;
    font-size: 12px;
  }
}
</style>
