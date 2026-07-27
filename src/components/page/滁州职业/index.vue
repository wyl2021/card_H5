<template>
  <!-- @scroll="scrolling" style="overflow-y:auto;height: 1000px;" -->
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="czzy"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="false"
      :popupLength="1"
      color="#0F4931"
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
              <van-image :src="IMG + 'czzy/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'czzy/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'czzy/icon/address.png'" />
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
              <van-image :src="IMG + 'czzy/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'czzy/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'czzy/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="czzy/icon/phoneButton.png"
      addressButton="czzy/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="滁州职业"
      :type="1"
      width="16px"
      height="16px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="czzy/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="czzy/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#0F4931"
    ></tab>
    <!-- 学院介绍 -->
    <headerContent
      headerImg="czzy/headerImage/xyjs.png"
      width="100%"
      height="40px"
      id="xyjs"
      ref="xyjs"
    >
      <template #content>
        <div v-html="getContent('简介')[0].describe || ''"></div>
      </template>
    </headerContent>
    <!-- 校园视频 -->
    <headerContent
      headerImg="czzy/headerImage/xysp.png"
      width="100%"
      height="40px"
    >
      <template #content> </template>
    </headerContent>
    <!-- 荣誉之窗 -->
    <headerContent
      headerImg="czzy/headerImage/ryzc.png"
      width="100%"
      height="40px"
    >
      <template #content>
        <div class="ryBox">
          <div
            class="ryItem"
            v-for="(item, index) in getContent('荣誉之窗')"
            :key="index"
          >
            <van-image
              v-if="item.image"
              :src="item.image.url"
              width="155px"
              height="94px"
            ></van-image>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 教学部门 -->
    <headerContent
      headerImg="czzy/headerImage/jxbm.png"
      width="100%"
      height="40px"
      id="jxbm"
    >
      <template #content>
        <div class="jxBox">
          <div
            v-for="(item, index) in getContent('教学部门')"
            v-if="index <= 9"
            class="jxItem"
            :style="{ backgroundImage: 'url(' + IMG + 'czzy/image/jxBg.png)' }"
          >
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
        <div class="m-t-10"></div>
        <more
          title="查看更多"
          icon="arrow"
          path="/thirdIndex"
          color="#666666"
        ></more>
      </template>
    </headerContent>
    <!-- 招生就业 -->
    <headerContent
      headerImg="czzy/headerImage/zsjy.png"
      width="100%"
      height="40px"
      id="zsjy"
    >
      <template #content>
        <div
          class="zsBox"
          v-for="(item, index) in zsList"
          @click="getTo(item.id)"
        >
          <div class="d-flex">
            <div class="line"></div>
            <span class="name">{{ item.name }}</span>
          </div>
          <listBox
            v-for="(item2, index2) in item.list"
            :key="index2"
            :name="item2.name"
            :imageUrl="{
              url: item2.url,
              width: '140px',
              height: '96px',
              columWidth: '169px',
            }"
            :id="item2.id"
            :pageType="3"
            :index="1"
            button="查看详情"
            buttonColor="#0F4931"
            class="m-t-10"
          ></listBox>
        </div>

        <div class="m-t-10"></div>
        <more
          title="查看更多"
          :icon="IMG + 'czzy/icon/right.png'"
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
          name: "学院介绍",
          id: "xyjs",
        },
        {
          name: "教学部门",
          id: "jxbm",
        },
        {
          name: "招生就业",
          id: "zsjy",
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
      zsList: [],
      scrollPosition: 0,
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
    window.removeEventListener("scroll", this.scrolling);
  },

  methods: {
    // scrolling(event) {
    //   var scrollTop =
    //     document.body.scrollTop || document.documentElement.scrollTop;
    //   var tabScroll = document.getElementById("xyjs").offsetTop;
    //   console.log(scrollTop, tabScroll, scrollTop >= tabScroll);
    //   // 这里可以根据this.scrollPosition的值执行其他逻辑
    // },
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
          this.getRz();
        });
    },
    getContent(name) {
      let data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
    getRz() {
      const originalList = this.getContent("招生就业");
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
      this.zsList = transformedList;
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
      // var scrollTop =
      //   document.body.scrollTop || document.documentElement.scrollTop;
      // var tabScroll1 = document.getElementById("xyjs").offsetTop;
      // var tabScroll2 = document.getElementById("jxbm").offsetTop;
      // var tabScroll3 = document.getElementById("zsjy").offsetTop;
      // // console.log(scrollTop,tabScroll3,tabScroll3-150);
      //   //  console.log(scrollTop, tabScroll, scrollTop >= tabScroll);
      // if (scrollTop >= tabScroll1 && scrollTop<tabScroll2) {
      //   this.tabId = 'xyjs';
      //   this.tabIsTop = true;
      // } else if (scrollTop >= tabScroll2 && scrollTop<(tabScroll3-150)) {
      //   this.tabId = 'jxbm';
      //   this.tabIsTop = true;

      // }else if(scrollTop>=(tabScroll3-150)){
      //   this.tabId = 'zsjy';
      //   this.tabIsTop = true;
      // }else{
      //   this.tabIsTop = false;
      // }
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
  padding: 38px 0 0 30px;
  .post {
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
    margin-top: 31px;
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
  border: 1px solid #0f4931 !important;
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
  background-color: #0f4931 !important;
}
.whBox {
  margin-top: 8px;

  .line {
    width: 2px;
    height: 17px;
    background-color: #0f4931;
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

.ryBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .name {
    color: #333;
    font-size: 10px;
    margin-top: 5px;
    text-align: center;
  }
}
.jxBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .jxItem {
    width: 155px;
    height: 40px;
    background-size: 100% 100%;
    padding: 11px 0;
    .name {
      color: #0f4931;
      font-size: 12px;
      text-align: center;
    }
  }
}
.zsBox {
  margin-top: 10px;
  .line {
    background-color: #0f4931;
    width: 2px;
    height: 20px;
    margin-right: 4px;
  }
  .name {
    color: #333333;
    font-size: 14px;
  }
}
</style>
