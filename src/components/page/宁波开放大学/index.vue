<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="nbkd"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="3"
      color="#a51c30"
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
              <van-image :src="IMG + 'nbkd/icon/phone.png'" />{{
                "手机：" + userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'nbkd/icon/email.png'" />{{
                "邮箱：" + userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'nbkd/icon/address.png'" />
              <div class="textccc">{{ "地址：" + userInfo.address }}</div>
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
              <van-image :src="IMG + 'nbkd/icon/phone.png'" />{{
                "手机：" + userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'nbkd/icon/email.png'" />{{
                "邮箱：" + userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'nbkd/icon/address.png'" />
              <div class="textccc">{{ "地址：" + userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="nbkd/icon/phoneButton.png"
      addressButton="nbkd/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="宁波开放大学"
      :type="1"
      color="#A51C30"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode :isWx="userInfo.wx_code" qrCodeIcon="nbkd/icon/sys.png"></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#A51C30"
    ></tab>
    <!-- 校园简介 -->
    <headerContent
      headerImg="nbkd/headerImage/xxjj.png"
      width="174px"
      height="26px"
      margin="unset"
      id="xxjj"
    >
      <template #content>
        <van-image class="" :src="IMG + 'nbkd/image/jj1.png'"></van-image>
        <div class="textStyle">
          {{ text }}
        </div>
        <!-- <van-image class="" :src="IMG + 'nbkd/image/jj2.png'"></van-image> -->
        <van-image class="" :src="IMG + 'nbkd/image/jjs.png'"></van-image>
      </template>
    </headerContent>
    <!-- 招生专业 -->
    <headerContent
      headerImg="nbkd/headerImage/zszy.png"
      width="174px"
      height="26px"
      margin="unset"
      id="zszy"
    >
    <!-- @click="getTo(item.id)" -->
      <template #content>
        <div
          v-for="(item, index) in getContent('招生专业').solution_list"
          class="zsBox"
          :key="index"

        >
          <div class="d-flex name">
            <div class="circular"></div>
            {{ item.name }}
          </div>
          <van-image :src="item.image.url" v-if="item.image"></van-image>
        </div>
      </template>
      <template #headerRight>
        <more
          title="查看更多"
          :icon="IMG + 'nbkd/icon/right.png'"
          color="#666666"
          path="thirdIndex"
        ></more>
      </template>
    </headerContent>
    <!-- 杰出校友 -->
    <headerContent
      headerImg="nbkd/headerImage/jcxy.png"
      width="174px"
      height="26px"
      margin="unset"
      id="jcxy"
    >
    <!-- -->
      <template #content>
        <div class="xyBox">
          <div
            v-for="(item, index) in getContent('杰出校友').solution_list"
            v-if="index<6"
            :key="index"
            @click="getTo(item.id)"
          >
        <van-image v-if="item.image" :src="item.image.url"></van-image>
        <div class="name">{{ item.name }}</div>
        </div>
        </div>
      </template>
      <template #headerRight>
        <more
          title="查看更多"
          :icon="IMG + 'nbkd/icon/right.png'"
          color="#666666"
          path="secondIndex"
        ></more>
      </template>
    </headerContent>
    <!-- 联系我们 -->
     <!-- 杰出校友 -->
     <headerContent
      headerImg="nbkd/headerImage/lxwm.png"
      width="135px"
      height="26px"
      margin="unset"
    >
      <template #content>
        <img :src="IMG+'nbkd/image/qrCode.png'" width="252px" height="140px" class="image" />
        <p class="p1">公众号</p>
        <p class="p2">联系电话：0574 8720 1035</p>
        <p class="p2">报名地址：宁波市江北区文教路1号</p>
      </template>

    </headerContent>
    <!-- 阿库标识 -->
    <aKuLogo></aKuLogo>
  </div>
</template>

 <script>
import more from "../../tool/more.vue";
export default {
  components: { more },
  data() {
    return {
      tabList: [
        {
          name: "学校介绍",
          id: "xxjs",
        },
        {
          name: "招生专业",
          id: "zszy",
        },
        {
          name: "杰出校友",
          id: "jcxy",
        },
      ], ///tab栏列表
      tabId: "xxjs", //默认tab
      tabIsTop: false, //用作下拉到一定程度现实tab栏
      cardId: 0,
      cardIds: 0,
      data: [],
      userInfo: {
        name: "正在加载",
        post: "正在加载",
        phone: "正在加载",
        email: "正在加载",
        address: "正在加载",
        english: "正在加载",
      },
      show: false,

      text: "宁波开放大学，前身为创办于1979年3月的宁波广播电视大学，2020年12月更名为宁波开放大学，2009年10月增挂宁波社区大学，2021年11月增挂宁波工人大学。学校坚持系统办学，上承国家开放大学，下设10个县级学院、1个学习中心，办学网络全覆盖、全公办，是宁波地区唯一一所承担全民终身教育使命的新型高校。学校恪守国家开放大学“敬学广惠、有教无类”的校训，秉持“开放、创新、融合”的办学理念，坚持以学习者为中心，把大学办在社会中，在实践中探索，在改革中创新，在转型中超越，初步构建起“特色学院创新引领、学历非学历融合共促、‘三驾马车’开放协同”的发展新格局。",
    };
  },
  created() {
    this.getUserInfo();
    this.getList();
  },

  mounted() {
    window.addEventListener("scroll", this.scrolling);
    this.getUserInfo();
    this.getList();
  },
  computed: {
    // list(name){
    //   return this.data.find((item)=>item.name==name)
    //  }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrolling);
  },

  methods: {
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    },
    getContent(name) {
    let list=this.data.find((item) => item.name == name)
      return list?list:[];
    },
    // 内容信息
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          // console.log("列表信息", res);
          this.data = res.data.list;
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
  padding: 60px 30px 0 52px;
  .post {
    display: flex;
    align-items: center;
  }
  .name {
    .text1 {
      margin-right: 10px;
      font-size: 15px;
      font-weight: 800;
      letter-spacing: 5px;
    }
    .text2 {
      font-size: 9px;
      color: #422188;
    }
  }
  .text3 {
    font-size: 12px;
    letter-spacing: 5px;
    color: #333333;
  }
  .pm {
    margin-top: 36px;
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
      width: 247px;
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
  padding: 72px 30px 0 41px;
  .post {
    .name {
      .text1 {
        font-size: 15px;
        font-weight: 800;
        letter-spacing: 5px;
      }
      .text2 {
        font-size: 12px;
        color: #422188;
      }
    }
  }
  .text3 {
    font-size: 12px;
    color: #666;
    // margin-top: ;
  }
  .pm {
    margin-left: 90px;
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
      //  width: 253px；
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
  padding: 42px 0 0 50px;

  .post {
    .name {
      .text1 {
        font-size: 15px;
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
    color: #666;
  }
  .pm {
    margin-top: 23px;
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
    margin-top: 8px;
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
    margin-top: 8px;
    color: #666666;
    font-size: 12px;
    align-items: center;
  }
}
.header4 {
  // width: 100%;
  height: 100%;
  padding: 20px 30px 0 34px;

  .post {
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        color: #333333;
        width: 100%;
        text-align: right;
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
    width: 100%;
    text-align: right;
  }
  .pm {
    margin-top: 39px;
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
    align-items: baseline;
  }
}
.selectCard {
  border: 1px solid #a51c30 !important;
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
/deep/ .button {
  background-color: #a51c30 !important;
}
.zsBox {
  .circular {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 5px;
    background-color: #a51c30;
  }
  .name {
    font-size: 14px;
    color: #333;
    margin: 10px 0;
  }
  .image {
  }
}
.xyBox{
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .name{
    text-align: center;
    font-size: 12px;
    color: #333;
  }
}
.image{
  display: flex;
  margin-top: 10px;
  margin: auto;
}
.p1{
  font-size: 12px;
  color: #333;
  text-align: center;
}
.p2{
  font-size:12px;
  color: #666;
  text-align: center;
  margin-top: 10px;
}
</style>
