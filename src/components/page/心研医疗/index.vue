<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="xy"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="3"
      color="#D62223"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="post">
            <div class="name">
              <div class="text1" @click.stop="getIsName">
                {{ userInfo.name }}
              </div>
            </div>
            <!-- v-for="(item, index) in userInfo.post.split('、')" -->
            <div class="text3">
              {{ userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image
                :src="
                  cardId + 1 == 1
                    ? IMG + 'xy/icon/phone.png'
                    : IMG + 'xy/icon/phone2.png'
                "
              />{{ userInfo.phone || "-" }}
            </div>
            <div class="text5">
              <van-image
                :src="
                  cardId + 1 == 1
                    ? IMG + 'xy/icon/email.png'
                    : IMG + 'xy/icon/email2.png'
                "
              />{{ userInfo.email || "-" }}
            </div>
            <div class="text6">
              <van-image
                :src="
                  cardId + 1 == 1
                    ? IMG + 'xy/icon/address.png'
                    : IMG + 'xy/icon/address2.png'
                "
              />
              <div class="textccc">
                {{ userInfo.address || "-" }}
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
            <!-- v-for="(item, index) in userInfo.post.split(' ')" -->
            <!-- :key="index" -->
            <div class="text3">
              {{ userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image
                :src="
                  slotProps.item + 1 == 1
                    ? IMG + 'xy/icon/phone.png'
                    : IMG + 'xy/icon/phone2.png'
                "
              />{{ userInfo.phone || "-" }}
            </div>
            <div class="text5">
              <van-image
                :src="
                  slotProps.item + 1 == 1
                    ? IMG + 'xy/icon/email.png'
                    : IMG + 'xy/icon/email2.png'
                "
              />{{ userInfo.email || "-" }}
            </div>
            <div class="text6">
              <van-image
                :src="
                  slotProps.item + 1 == 1
                    ? IMG + 'xy/icon/address.png'
                    : IMG + 'xy/icon/address2.png'
                "
              />
              <div class="textccc">
                {{ userInfo.address || "-" }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 名字列表 -->
    <nameList
      :show="nameShow"
      @commitUserName="getCommitUserName"
      color="#D62223"
    ></nameList>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="xy/icon/phoneButton.png"
      addressButton="xy/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="硕为思"
      :type="1"
      backgroundColor="#D62223"
      width="24px"
      height="24px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode :isWx="userInfo.wx_code" qrCodeIcon="xy/icon/sys.png"></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#D62223"
    ></tab>
    <xyylContent
      :id="
        item == '公司简介'
          ? 'gsjj'
          : item == '产品展示'
          ? 'cpzs'
          : item == '联系我们'
          ? 'lxwm'
          : ''
      "
      :list="list"
      :name="item"
      v-for="(item, index) in nameList"
      :key="index"
    ></xyylContent>
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
          name: "公司简介",
          id: "gsjj",
        },
        {
          name: "产品展示",
          id: "cpzs",
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
      text: "",
      nameList: [
        "公司简介",
        "资质证书",
        "合作伙伴",
        "产品展示",
        "联系我们",
      ],
    };
  },
  created() {
    this.getUserInfo();
  },
  mounted() {
    window.addEventListener("scroll", this.scrolling);
    // this.getUserInfo();
    this.getList();
  },
    beforeDestroy() {  // Vue 2
  window.removeEventListener("scroll", this.scrolling);
},

  methods: {
    getIsName() {
      this.nameShow = true;
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((item) => {

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

      });
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
      var id = this.tabId.replace("#", "");
      document.getElementById(id).scrollIntoView();
      // this.$refs.content.butTab(id);
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
      color: #d62223;
    }
    .text2 {
      font-size: 9px;
      color: #422188;
    }
  }
  .text3 {
    font-size: 10px;
    letter-spacing: 2px;
    color: #333333;
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
    display: flex;
    align-items: center;
    color: #343434;
    font-size: 10px;
  }
  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    display: flex;
    align-items: center;
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

.header2 {
  // width: 100%;
  height: 100%;
  padding: 38px 0 0 40px;
  .post {
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #333;
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
    margin-top: 4px;
  }
  .pm {
    margin-top: 26px;
  }
  .text4 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    display: flex;
    align-items: center;
    color: #333;
    font-size: 12px;
  }
  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    display: flex;
    align-items: center;
    color: #333;
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
      width: 200px;
    }
    display: flex;
    margin-top: 4px;
    color: #333;
    font-size: 12px;
    align-items: baseline;
  }
}

.header3 {
  // width: 100%;
  height: 100%;
  padding: 54px 0 0 30px;

  .post {
    display: flex;
    align-content: center;
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        color: #333333;
      }
      .text2 {
        font-size: 12px;
        color: #fff;
        margin-right: 2px;
      }
    }
  }
  .text3 {
    font-size: 12px;
    color: #666666;
  }
  .pm {
    margin-top: 37px;
  }
  .text4 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    display: flex;
    align-items: center;
    color: #666666;
    font-size: 10px;
  }
  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    display: flex;
    align-items: center;
    color: #666666;
    font-size: 10px;
    margin-top: 6px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
      // width: ;
    }
    display: flex;
    align-items: center;
    margin-top: 6px;
    color: #666666;
    font-size: 10px;
  }
}

/deep/ .confirmButton {
  background-color: #d62223 !important;
}
/deep/ .line {
  background-color: #d62223 !important;
}
.selectCard {
  border: 1px solid #d62223 !important;
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
  margin-bottom: 14px;
}
.a-item {
  align-items: baseline !important;
  width: 290px;
}
.headerLine {
  background-color: #d62223;
  height: 1px;
  width: 112px;
}
.titleHeader {
  color: #d62223;
  font-size: 15px;
  margin: 0 10px;
  font-weight: 700;
}
.nameHeader {
  font-size: 12px;
  color: #d62223;
  font-weight: 400;
  text-align: center;
  // margin: ;
}
.auto {
  display: flex;
  flex-direction: column;
  margin: auto;
}
.jxBox {
  margin: 5px 0;
  border: 1px solid rgba($color: #d62223, $alpha: 0.3);
  padding: 8px;
  display: flex;
  align-content: center;
  border-radius: 4px;
  .jsIcon {
    background-image: url("https://card-img1.oss-cn-beijing.aliyuncs.com/xy/icon/jxImage.png");
    width: 20px;
    height: 18px;
    background-size: 100% 100%;
    padding: 4px 0;
    text-align: center;
    color: #fff;
    font-size: 10px;
    margin-right: 10px;
  }
  .jsTitle {
    color: #333;
    font-size: 14px;
  }
}
.h-10 {
  height: 10px;
}
.m-t-10 {
  margin-top: 10px;
}
/deep/ .f-colum {
  justify-content: space-between;
}
</style>

