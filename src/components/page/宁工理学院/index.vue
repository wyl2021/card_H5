<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="nglxy"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="3"
      color="#004098"
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
            <div class="text3" >
              {{ userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'nglxy/icon/phone.png'" />{{
                userInfo.phone || "-"
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'nglxy/icon/emali.png'" />{{
                userInfo.email || "-"
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'nglxy/icon/address.png'" />
              <div class="textccc">
                {{ userInfo.address || "浙江省宁波市江北区风华路201号" }}
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
              <van-image :src="IMG + 'nglxy/icon/phone.png'" />{{
                userInfo.phone || "-"
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'nglxy/icon/emali.png'" />{{
                userInfo.email || "-"
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'nglxy/icon/address.png'" />
              <div class="textccc">
                {{ userInfo.address || "浙江省宁波市江北区风华路201号" }}
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
      color="#004098"
    ></nameList>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="nglxy/icon/phoneButton.png"
      addressButton="nglxy/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address || '浙江省宁波市江北区风华路201号'"
      name="宁波工程学院"
      :type="1"
      backgroundColor="#004098"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode :isWx="userInfo.wx_code" qrCodeIcon="nglxy/icon/sys.png"></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#004098"
    ></tab>
    <!-- 学院介绍 -->
    <headerContent :isHeader="false" id="yyjs">
      <template #headerRight>
        <div class="auto">
          <div class="d-flex">
            <div class="headerLine"></div>
            <div class="titleHeader">学院介绍</div>
            <div class="headerLine"></div>
          </div>
          <div class="nameHeader">Campus Introduction</div>
        </div>
      </template>
      <template #content>
        <div class="h-10"></div>
        <van-image :src="IMG + 'nglxy/image/yjjs.png'"></van-image>

        <div
          class="textStyle"
          v-if="getContent('学院介绍')[0].name "
          v-for="(item, index) in getContent('学院介绍')[0].name.split(' ')"
          :key="index"
        >
          {{ item }}
        </div>
      </template>
    </headerContent>
    <!-- 校园风光 -->
    <headerContent :isHeader="false" >
      <template #headerRight>
        <div class="auto">
          <div class="d-flex">
            <div class="headerLine"></div>
            <div class="titleHeader">校园风光</div>
            <div class="headerLine"></div>
          </div>
          <div class="nameHeader">Campus Scenery</div>
        </div>
      </template>
      <template #content>
        <div class="h-10"></div>
        <van-image
          v-for="(item, index) in getContent('校园风光')"
          :src="item.image.url"
          :key="index"
        ></van-image>
      </template>
    </headerContent>
    <!-- 专业教学 -->
    <headerContent :isHeader="false" id="zyjx">
      <template #headerRight>
        <div class="auto">
          <div class="d-flex">
            <div class="headerLine"></div>
            <div class="titleHeader">专业教学</div>
            <div class="headerLine"></div>
          </div>
          <div class="nameHeader">Professional teaching</div>
        </div>
      </template>
      <template #content>
        <div
          v-if="index < 9"
          :key="index"
          class="jxBox"
          v-for="(item, index) in getContent('专业教学')"
          @click="getTo(item.id)"
        >
          <div class="jsIcon">
            {{ index < 9 ? "0" + (index + 1) : index + 1 }}
          </div>
          <div class="jsTitle">{{ item.name }}</div>
        </div>
      </template>
    </headerContent>
    <!-- 学工动态 -->
    <headerContent :isHeader="false" id="xgdt">
      <template #headerRight>
        <div class="auto">
          <div class="d-flex">
            <div class="headerLine"></div>
            <div class="titleHeader">学工动态</div>
            <div class="headerLine"></div>
          </div>
          <div class="nameHeader">Student Engineering Dynamics</div>
        </div>
      </template>
      <template #content>
        <listBox
          v-for="(item, index) in getContent('学工动态')"
          v-if="index < 4"
          :key="index"
          :type="1"
          :imageUrl="{
            url: item.image.url,
            width: '140px',
            height: '96px',

          }"
          :name="item.name"
          button="查看详情"
          buttonColor="#004098"
          :pageType="3"
          :id="item.id"
            class="m-t-10"
        ></listBox>
        <more  class="m-t-10" title="查看更多"  color="#666666" path="/secondIndex"></more>
      </template>
    </headerContent>
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
          name: "学院介绍",
          id: "xyjs",
        },
        {
          name: "专业教学",
          id: "zyjx",
        },
        {
          name: "学工动态",
          id: "xgdt",
        },
      ], ///tab栏列表
      tabId: "xyjs", //默认tab
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
    getTo(id){
      this.$router.push({
        path: "/categorySolutionInfo",
        query: { id: id },
      });
    },
    getContent(name) {

      const data = this.list.find((item) => item.name == name);

      return data ? data.solution_list : [];
    },
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
  padding: 44px 0 0 44px;

  .post {
  }
  .name {
    .text1 {
      font-size: 16px;
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
    margin-top: 8px;
    font-size: 10px;
    letter-spacing: 2px;
    color: #666666;
    line-height: 12px;
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
    margin-top: 4px;
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
    margin-top: 4px;
    color: #666666;
    font-size: 12px;
    align-items: center;
  }
}

.header2 {
  // width: 100%;
  height: 100%;
  padding: 46px 26px 0 30px;
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
    color: #666;
    margin-top: 8px;
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
      width: 175px;
    }
    display: flex;
    margin-top: 4px;
    color: #666666;
    font-size: 12px;
    align-items: center;
  }
}

.header3 {
  // width: 100%;
  height: 100%;
  padding: 50px 0 0 30px;

  .post {
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
    font-size: 10px;
    color: #666666;
    margin-top: 10px;
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
    margin-top: 4px;
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
    margin-top: 4px;
    color: #666666;
    font-size: 12px;
    align-items: center;
  }
}

/deep/ .confirmButton {
  background-color: #004098 !important;
}
/deep/ .line {
  background-color: #004098 !important;
}
.selectCard {
  border: 1px solid #004098 !important;
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
  background-color: #004098;
  height: 1px;
  width: 112px;
}
.titleHeader {
  color: #004098;
  font-size: 15px;
  margin: 0 10px;
  font-weight: 700;
}
.nameHeader {
  font-size: 12px;
  color: #004098;
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
  border: 1px solid rgba($color: #004098, $alpha: 0.3);
  padding: 8px;
  display: flex;
  align-content: center;
  border-radius: 4px;
  .jsIcon {
    background-image: url("https://card-img1.oss-cn-beijing.aliyuncs.com/nglxy/icon/jxImage.png");
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
.h-10{
  height: 10px;
}
.m-t-10{
  margin-top: 10px;
}
/deep/ .f-colum{
  justify-content: space-between;
}
</style>
