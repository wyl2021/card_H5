<template>
  <!-- @scroll="scrolling" style="overflow-y:auto;height: 1000px;" -->
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="czjx"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="false"
      :popupLength="1"
      color="#316895"
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
              <van-image :src="IMG + 'czjx/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'czjx/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'czjx/icon/address.png'" />
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
              <van-image :src="IMG + 'czjx/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'czjx/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'czjx/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="czjx/icon/phoneButton.png"
      addressButton="czjx/icon/addressButton.png"
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
      qrCodeIcon="czjx/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="czjx/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#316895"
    ></tab>
    <!-- 学院介绍 -->
    <headerContent
      headerImg="czjx/headerImage/xyjs.png"
      width="82px"
      height="22px"
      margin="unset"
      id="xyjs"
    >
      <template #content>
        <div class="line"></div>
        <div v-html="jsText"></div>
      </template>
      <template #headerRight>
        <more
          title="更多"
          :icon="IMG + 'czjx/icon/right.png'"
          color="#666666"
          path="thirdIndex"
        ></more>
      </template>
    </headerContent>
    <!-- 院部智能 -->
    <headerContent

      headerImg="czjx/headerImage/ybzn.png"
      width="82px"
      height="22px"
      margin="unset"
    >
      <template #content>
        <div class="line"></div>
        <van-image
          :src="IMG + 'czjx/image/znBg1.png'"
          width="100%"
          height="178px"
          style="margin-top: 10px;"

        ></van-image>
        <van-image
          :src="IMG + 'czjx/image/znBg2.png'"
          width="100%"
          height="178px"
        ></van-image>
        <div
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </div>
      </template>
    </headerContent>
    <!-- 专业设置 -->
    <headerContent
      headerImg="czjx/headerImage/zysz.png"
      width="82px"
      height="22px"
      margin="unset"
      id="zysz"
    >
      <template #content>
        <div class="line"></div>
        <listBox
          v-for="(item, index) in getContent('专业设置')"
          v-if="index<4"
          :key="index"
          :name="item.name"
          :describe="item.describe"
          :imageUrl="{
            url: item.image.url,
            width: '140px',
            columWidth: '169px',
            height: '120px',
          }"
          :type="1"
          buttonColor="RGBA(#316895,0.1)"
          :pageType="3"
          :id="item.id"
          button="了解更多"
          class="m-t-10"
        ></listBox>
      </template>
      <template #headerRight>
        <more
          title="更多"
          :icon="IMG + 'czjx/icon/right.png'"
          color="#000000"
          path="thirdIndex"
        ></more>
      </template>
    </headerContent>
    <!-- 招生就业 -->
    <headerContent
    headerImg="czjx/headerImage/zsjy.png"
      width="82px"
      height="22px"
      margin="unset"
      id="zsjy"
    >
<template #content>
  <div class="line"></div>
<div class="jyBox" v-if="index<3" v-for="(item,index) in getContent('招生就业')" :key="index" :style="{'backgroundImage':'url('+getUrl(item.image.url)+')'}">
  <div class="jyItem">
    <div class="name">{{ item.name }}</div>
    <div class="describe">{{ item.describe }}</div>
  </div>

</div>
</template>
<template #headerRight>
        <more
          title="更多"
          :icon="IMG + 'czjx/icon/right.png'"
          color="#000000"
          path="secondIndex"
        ></more>
      </template>
    </headerContent>
    <!-- 阿库标识 -->
    <aKuLogo></aKuLogo>
  </div>
</template>

 <script>
 import axios from 'axios'
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
          name: "专业设置",
          id: "zysz",
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
      jsText: "",
      text: "",

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
          this.jsText =
            this.getContent("学院介绍") != []
              ? this.getContent("学院介绍")[0].describe
              : "";
          this.text =
            this.getContent("院部职能") != []
              ? this.getContent("院部职能")[0].describe
              : "";
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
// .line {
//   width: 100%;
//   height: 1px;
//   color: #eaeaea;
//   margin: 5px 0;
// }
.m-t-10 {
  margin-top: 10px;
}
.header1 {
  // width: 100%;
  height: 100%;
  padding: 38px 0 0 120px;
  .post {
  }
  .name {
    .text1 {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 5px;
      color: #316895;
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
    color: #666666;
  }
  .pm {
    margin-top: 33px;
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
    font-size: 9px;
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
  border: 1px solid #316895 !important;
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
  background-color: #316895 !important;
}
/deep/ .listButton{
  background-color: rgba($color: #316895, $alpha: 0.1) !important;
  border: 1px solid #316895;
  color: #316895 !important;
}
.jyBox{
  width: 100%;
  height:160px;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 10px;
  .jyItem{
    background-color: rgba($color: #000000, $alpha: 0.3);
    width: 100%;
    height: 75px;
    padding:8px 10px 10px 10px;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .name{
      color:#fff;
      font-size:14px;

    }
    .describe{
      color: #fff;
      font-size:12px;
      font-weight: 200;
      text-align: right;
    }
  }
}
.line{
  width: 100%;
  height: 1px;
  background-color:#EAEAEA;
  margin-top: 10px;
}
</style>
