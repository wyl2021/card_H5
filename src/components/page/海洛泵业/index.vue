<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="hl"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="3"
      color="#155499"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>
              <div class="text2">{{ userInfo.post }}</div>
            </div>
            <div
              class="text3"
            >
              {{getStr(userInfo.content_field,'-','name_en')}}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'hl/icon/phone.png'" />{{ userInfo.phone }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'hl/icon/email.png'" />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'hl/icon/address.png'" />
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
              <van-image :src="IMG + 'hl/icon/phone.png'" />{{ userInfo.phone }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'hl/icon/email.png'" />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'hl/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="hl/icon/phoneButton.png"
      addressButton="hl/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="海洛泵业"
      :type="0"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode :isWx="userInfo.wx_code" qrCodeIcon="hl/icon/sys.png"></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#155499"
      ref="content"
    ></tab>
    <hlContent :list="list" name="公司简介"></hlContent>
    <hlContent :list="list" name="优势"></hlContent>
    <hlContent :list="list" name="荣誉资质"></hlContent>
    <hlContent :list="list" name="产品中心"></hlContent>
    <hlContent :list="list" name="联系我们"></hlContent>
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
          name: "产品中心",
          id: "cpzx",
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
  destroyed() {
    window.removeEventListener("scroll", this.scrolling);
  },

  methods: {
    getStr(list, str,keyStr) {
      let web = str ? str : "-";
      if (list) {
        list.forEach((item) => {
          if (item.key == keyStr) {
            web = !(item.value == "" || item.value == null) ? item.value : web;
          }
        });
        return web;
      } else {
        return web;
      }
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((item) => {
          console.log(item);
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
      this.$refs.content.butTab(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.header1 {
  // width: 100%;
  height: 100%;
  padding: 54px 0 0 30px;

  .post {
  }
  .name {
    display: flex;
    align-items: center;
    .text1 {
      font-size:  16px;
      font-weight: 800;
      letter-spacing: 5px;
      color: #155499;
    }
    .text2 {
      font-size:  8px;
      color: #666666;
    }
  }
  .text3 {
    margin-top: 5px;
    font-size:  7px;
    letter-spacing: 2px;
    color: #666666;

  }
  .pm {
  margin-top:42px ;
  }
  .text4 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }

    color: #666666;
    font-size: 9px;
  }
  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 9px;
    margin-top: 2px;
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
    margin-top: 2px;
    color: #666666;
    font-size: 9px;
    align-items: center;
  }
}

.header2 {
  // width: 100%;
  height: 100%;
  padding: 54px 0 0 30px;
  .post {
    .name {
      display: flex;
      align-items: center;
      .text1 {
        font-size:  16px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #155499;
      }
      .text2 {
        font-size:  8px;
        color: #666666;
      }
    }
  }
  .text3 {
    font-size: 7px;
    color: #666666;

  }
  .pm {
    margin-top: 36px;
  }
  .text4 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 9px;
  }
  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    color: #666666;
    font-size: 9px;
    margin-top: 2px;
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
    margin-top: 2px;
    color: #666666;
    font-size: 9px;
    align-items: center;
  }
}

.header3 {
  // width: 100%;
  height: 100%;
  padding: 30px 0 0 30px;

  .post {
    .name {
      display: flex;
      align-items: center;
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
    font-size: 10px;
    color: #666666;
    margin-right: 5px;
  }
  .pm {
    margin-top: 38px;
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
    margin-top: 10px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
      width: 139px;
    }
    display: flex;
    margin-top: 10px;
    color: #666666;
    font-size: 10px;
    align-items: baseline;
  }
}
/deep/ .confirmButton {
  background-color: #155499 !important;
}
/deep/ .line {
  background-color: #155499 !important;
}
.selectCard {
  border: 1px solid #155499 !important;
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
