<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="wa"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="4"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>
            </div>
            <div
              class="text3"
              v-for="(item, index) in userInfo.post.split(' ')"
              key="index"
              v-if="index<2"
            >
              {{ item }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image
                :src="
                  cardId + 1 == 4
                    ? IMG + 'wa/icon/phone2.png'
                    : IMG + 'wa/icon/phone.png'
                "
              />{{ userInfo.phone }}
            </div>
            <div class="text5">
              <van-image
                :src="
                  cardId + 1 == 4
                    ? IMG + 'wa/icon/email2.png'
                    : IMG + 'wa/icon/email.png'
                "
              />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image
                :src="
                  cardId + 1 == 4
                    ? IMG + 'wa/icon/address2.png'
                    : IMG + 'wa/icon/address.png'
                "
              />
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
            <div
              class="text3"
              v-for="(item, index) in userInfo.post.split(' ')"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image
                :src="
                  slotProps.item + 1 == 4
                    ? IMG + 'wa/icon/phone2.png'
                    : IMG + 'wa/icon/phone.png'
                "
              />{{ userInfo.phone }}
            </div>
            <div class="text5">
              <van-image
                :src="
                  slotProps.item + 1 == 4
                    ? IMG + 'wa/icon/email2.png'
                    : IMG + 'wa/icon/email.png'
                "
              />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image
                :src="
                  slotProps.item + 1 == 4
                    ? IMG + 'wa/icon/address2.png'
                    : IMG + 'wa/icon/address.png'
                "
              />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="wa/icon/phoneButton.png"
      addressButton="wa/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="宁波工程学院"
      :type="1"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode :isWx="userInfo.wx_code" qrCodeIcon="wa/icon/sys.png"></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#D0333A"
    ></tab>
    <waContent
      name="简介"
      title="宁波工程学院——网络空间安全学院简介"
      :list="list"
    ></waContent>
    <waContent name="院士工作站" title="院士工作站" :list="list" id="xyjj"></waContent>
     <waContent name="名师风采" title="名师风采" :list="list" id="szll"></waContent>
    <waContent name="专业建设" title="专业建设" :list="list"></waContent>
    <waContent name="网安学院招生" title="网安学院招生" :list="list"></waContent>
    <waContent name="网安学院就业实习" title="网安学院就业实习" :list="list" id="zsjy"></waContent>

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
          name: "学院简介",
          id: "xyjj",
        },
        {
          name: "师资力量",
          id: "szll",
        },
        {
          name: "招生就业",
          id: "zsjy",
        },
      ], ///tab栏列表
      tabId: "xyjj", //默认tab
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
    };
  },
  created() {
    this.getUserInfo();

  },
  mounted() {
    window.addEventListener("scroll", this.scrolling);
    this.getUserInfo();
    this.getList()
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrolling);
  },

  methods: {
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((item) => {
          console.log(item)
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

        console.log("1231231");
      });
    },

    // 名片切换
    getCommitUser(index) {
      console.log("名片切换", index);
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
  padding: 110px 0 0 36px;
  display: flex;
  justify-content: space-around;
  .post {
  }
  .name {
    .text1 {
      font-size: 17px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #333;
    }
    .text2 {
      font-size: 9px;
      color: #422188;
    }
  }
  .text3 {
    margin-top: 5px;
    font-size: 10px;
    letter-spacing: 2px;
    color: #666666;
    line-height: 12px;
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
    margin-top: 2px;
  }
  .text6 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    .textccc {
      width: 183px;
    }
    display: flex;
    margin-top: 2px;
    color: #666666;
    font-size: 12px;
    align-items: center;
  }
}

.header2 {
  // width: 100%;
  height: 100%;
  padding: 54px 26px 0 150px;
  .post {
    .name {
      display: flex;
      align-items: center;
      .text1 {
        font-size: 17px;
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
    color: #666;
    margin-right: 1px;
  }
  .pm {
    margin-top: 14px;
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
    margin-top: 2px;
  }
  .text6 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    .textccc {
      width: 175px;
    }
    display: flex;
    margin-top: 2px;
    color: #666666;
    font-size: 12px;
    align-items: baseline;
  }
}

.header3 {
  // width: 100%;
  height: 100%;
  padding: 34px 0 0 30px;

  .post {
    .name {
      .text1 {
        font-size: 17px;
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
    font-size: 10px;
    color: #666666;
    margin-right: 5px;
  }
  .pm {
    margin-top: 20px;
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
    margin-top: 2px;
  }
  .text6 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    .textccc {
      width: 150px;
    }
    display: flex;
    margin-top: 2px;
    color: #666666;
    font-size: 12px;
    align-items: baseline;
  }
}
.header4 {
  // width: 100%;
  height: 100%;
  padding: 51px 0 0 28px;

  .post {
    display: flex;
    align-items: center;
    .name {
      .text1 {
        font-size: 17px;
        font-weight: 800;
        color: #333333;
        margin-right: 7px;
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
    margin-right: 5px;
  }
  .pm {
    margin-top: 56px;
  }
  .text4 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #ffffff;
    font-size: 12px;
  }
  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    color: #ffffff;
    font-size: 12px;
    margin-top: 2px;
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
    margin-top: 2px;
    color: #ffffff;
    font-size: 12px;
    align-items: center;
  }
}
/deep/ .confirmButton {
  background-color: #db001a !important;
}
/deep/ .line {
  background-color: #db001a !important;
}
.selectCard {
  border: 1px solid #d0333a !important;
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
</style>
