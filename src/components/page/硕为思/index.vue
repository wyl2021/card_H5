<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="sws"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="4"
      color="#EB6027"
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
                  cardId + 1 != 2
                    ? IMG + 'sws/icon/phone.png'
                    : IMG + 'sws/icon/phone2.png'
                "
              />{{ userInfo.phone || "-" }}
            </div>
            <div class="text5">
              <van-image
                :src="
                  cardId + 1 != 2
                    ? IMG + 'sws/icon/email.png'
                    : IMG + 'sws/icon/email2.png'
                "
              />{{ userInfo.email || "-" }}
            </div>
            <div class="text6">
              <van-image
                :src="
                  cardId + 1 != 2
                    ? IMG + 'sws/icon/address.png'
                    : IMG + 'sws/icon/address.png'
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
                  slotProps.item + 1 != 2
                    ? IMG + 'sws/icon/phone.png'
                    : IMG + 'sws/icon/phone2.png'
                "
              />{{ userInfo.phone || "-" }}
            </div>
            <div class="text5">
              <van-image
                :src="
                  slotProps.item + 1 != 2
                    ? IMG + 'sws/icon/email.png'
                    : IMG + 'sws/icon/email2.png'
                "
              />{{ userInfo.email || "-" }}
            </div>
            <div class="text6">
              <van-image
                :src="
                  slotProps.item + 1 != 2
                    ? IMG + 'sws/icon/address.png'
                    : IMG + 'sws/icon/address2.png'
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
      color="#EB6027"
    ></nameList>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="sws/icon/phoneButton.png"
      addressButton="sws/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="硕为思"
      :type="1"
      backgroundColor="#EB6027"
      width="24px"
      height="24px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode :isWx="userInfo.wx_code" qrCodeIcon="sws/icon/sys.png"></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#EB6027"
    ></tab>
    <swsContent
      :id="
        item == '公司介绍'
          ? 'gsjs'
          : item == '案例'
          ? 'al'
          : item == '联系我们'
          ? 'lxwm'
          : ''
      "
      :list="list"
      :name="item"
      v-for="(item, index) in nameList"
      :key="index"
    ></swsContent>
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
          name: "公司介绍",
          id: "gsjs",
        },
        {
          name: "案例",
          id: "al",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },
      ], ///tab栏列表
      tabId: "gsjs", //默认tab
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
        "公司介绍",
        "业务范畴",
        "我们的荣誉",
        "我们的客户",
        "案例",
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
  padding: 40px 0 0 30px;

  .post {

  }
  .name {
    width: 80%;
    .text1 {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #EB6027;


    }
    .text2 {

    }
  }
  .text3 {
    font-size: 10px;
    letter-spacing: 2px;
    color: #333333;
    line-height: 12px;
    white-space: nowrap;
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
    margin-top: 4px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
    }
    display: flex;
    margin-top: 4px;
    color: #666666;
    font-size: 10px;
    align-items: center;
  }
}

.header2 {
  // width: 100%;
  height: 100%;
  padding: 74px 0 0 30px;

  .post {
    display: flex;
    height: 26px;
    justify-content: center;
    align-items: center;
  }
  .name {
    width: 80%;
    .text1 {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #fff;
      text-align: right;

    }
    .text2 {
      font-size: 9px;
      color: #422188;
    }
  }
  .text3 {
    margin-left: 10px;
    font-size: 10px;
    letter-spacing: 2px;
    color: #ffff;
    line-height: 12px;
    text-align: right;
    white-space: nowrap;
  }
  .pm {
    margin-top: 14px;
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
    margin-top: 4px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
    }
    display: flex;
    margin-top: 4px;
    color: #666666;
    font-size: 10px;
    align-items: center;
  }
}

.header3 {
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
    margin-top: 34px;
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
    }
    display: flex;
    margin-top: 4px;
    color: #333;
    font-size: 12px;
    align-items: center;
  }
}

.header4 {
  // width: 100%;
  height: 100%;
  padding: 40px 0 0 30px;

  .post {
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        color: #eb6027;
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
    color: #333333;
    margin-top: 2px;
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
    margin-top: 6px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
    }
    display: flex;
    align-items: center;
    margin-top: 6px;
    color: #343434;
    font-size: 10px;
  }
}

/deep/ .confirmButton {
  background-color: #eb6027 !important;
}
/deep/ .line {
  background-color: #eb6027 !important;
}
.selectCard {
  border: 1px solid #eb6027 !important;
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
  background-color: #eb6027;
  height: 1px;
  width: 112px;
}
.titleHeader {
  color: #eb6027;
  font-size: 15px;
  margin: 0 10px;
  font-weight: 700;
}
.nameHeader {
  font-size: 12px;
  color: #eb6027;
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
  border: 1px solid rgba($color: #eb6027, $alpha: 0.3);
  padding: 8px;
  display: flex;
  align-content: center;
  border-radius: 4px;
  .jsIcon {
    background-image: url("https://card-img1.oss-cn-beijing.aliyuncs.com/sws/icon/jxImage.png");
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

