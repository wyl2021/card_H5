<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="xykfd"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="1"
      color="#F44D00"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>
              <div v-if="cardId + 1==3" class="text2">{{  userInfo.post}}</div>
            </div>
            <div class="text3">
              {{ cardId + 1==3?'深圳市德宁安达供应链管理有限公司':userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'xykfd/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'xykfd/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'xykfd/icon/address.png'" />
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
              <div class="text2" v-if="slotProps.item+1==3" >{{ userInfo.post }}</div>
            </div>
            <div class="text3">
              {{ slotProps.item+1==3?"深圳市德宁安达供应链管理有限公司":userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'xykfd/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'xykfd/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'xykfd/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="xykfd/icon/phoneButton.png"
      addressButton="xykfd/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="德宁安达"
      :type="1"
      width="24px"
      height="24px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="xykfd/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="xykfd/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#F44D00"
    ></tab>
    <!-- 走进雄鹰 -->
    <headerContent
      headerImg="xykfd/headerImage/zjxy.png"
      width="83px"
      height="48px"
      id="zjxy"
    >
      <template #content>
        <van-image :src="IMG + 'xykfd/image/jjBg.png'" class="m-t-14" />
        <p
          class="textStyle"
          v-for="(item, index) in text.split('  ')"
          :key="index"
        >
          {{ item }}
        </p>
        <div class="m-t-10"></div>
        <more
          title="查看更多"
          icon="arrow"
          color="#666666"
          path="thirdIndex"
          float="flex-start"
        ></more>
      </template>
    </headerContent>
    <!-- 厂荣厂貌 -->
    <headerContent
      headerImg="xykfd/headerImage/crcg.png"
      width="133px"
      height="48px"
    >

      <template #content>

          <div
            v-for="(item, index) in getContent('厂荣厂貌')"
            class="cmBox"
            :key="index"
            :style="'background-image:url('+getUrl(item.image.url)+')'"

          >
              <div class="name">{{ item.name }}</div>
          </div>
      </template>
    </headerContent>
    <!-- 产品服务 -->
    <headerContent
      headerImg="xykfd/headerImage/cpzx.png"
      width="87px"
      height="48px"
      id="cpzx"
    >
      <template #content>
          <div class="cpBox">
            <div class="cpItem" v-for="(item,index) in productList"  @click="getTo(item.id,item.name)" >
            <van-image :src="item.image.url" width="155px" height="155px" v-if="item.image"></van-image>
            <div class="name">{{ item.name }}</div>
            </div>
          </div>

          <more
          title="查看更多"
          icon="arrow"
          path="/secondIndex"
          float="flex-start"
          color="#666666"
        ></more>
      </template>
    </headerContent>

    <!-- 联系我们 -->
    <headerContent
      headerImg="xykfd/headerImage/lxwm.png"
      width="74px"
      height="48px"
      id="lxwm"
    >
      <template #content>
        <companyTitle
          title="浙江雄鹰科菲帝科技股份有限公司"
          fontSize="15px"
        ></companyTitle>
        <div @click="get(item)" class="address" v-for="(item,index) in getContent('地址列表')">
            <div class="d-flex name">
              <div class="line"></div>
              {{ item.name }}
            </div>
            <div class="describe">{{ item.describe }}</div>
        </div>


        <iText title="400-0909-858" titles="电话：" color="#666666"></iText>
        <iText
          title="www.kofidy.com"
          titles="网址："
          color="#666666"
        ></iText>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="宁波市高新区新梅路与清逸路交叉口雄鹰股份"
          name="雄鹰科菲帝科"
        ></TXMap>
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
          name: "走进雄鹰",
          id: "zjxy",
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
      tabId: "zjxy", //默认tab
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
      productList:[],
      text: "浙江雄鹰科菲帝科技股份有限公司（以下简称：雄鹰股份）成立于 2015 年，前身宁波雄鹰检测设备有限公司成立于 2010 年，雄鹰股份拥有 30 项自主技术专利（含发明专利 4项、软件著作权 5套、实用新型 16项、外观专利 4 项，科学技术成果 1 项），注册商标多个( 其中 XY、阿托卡、ATOKA 商标知名度极高 )。",
      firstAddress:''
    };
  },
  created() {
    this.getUserInfo();
    this.getList();
    this.getProduct()
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
    get(res){
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$router.push({
        path: "/map",
        query: { address: res.name, name: res.describe, isTap: true },
      });
      Toast.clear;
    },

    getTo(id,name) {
      this.$router.push({
        path: "/solutionInfo",
        query: { id: id,title:name },
      });
    },
    getProduct(){
        this.$http.solutionTypeList().then((res)=>{

          this.productList=res.data.list[0].solution_list
        })
    },
    getUrl(str){
      return "'" +str+"'"
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
          this.firstAddress=this.getContent('地址列表')!=[]?this.getContent('地址列表').describe:''
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
.m-t-10 {
  margin-top: 10px;
}
.header1 {
  // width: 100%;
  height: 100%;
  padding: 38px 0 0 40px;
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
    margin-top: 3px;
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

    color: #333;
    font-size: 12px;
  }
  .text5 {
    /deep/ .van-image {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
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
      width: 243px;
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
  padding: 56px 0 0 30px;

  .post {
    display: flex;
    align-items: center;
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 5px;
        color: #ffffff;
        margin-right: 3px;
      }
      .text2 {
        font-size: 12px;
        color: #422188;
      }
    }
  }
  .text3 {
    font-size: 12px;
    color: #ffffff;
  }
  .pm {
    margin-top: 24px;
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
    margin-top: 5px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
      width: 269px;
    }
    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 10px;
    align-items: baseline;
  }
}

.header3 {
  // width: 100%;
  height: 100%;
  padding: 20px 44px 0 30px;

  .post {
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
    margin-top:5px;

  }
  .pm {
    margin-top: 50px;
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
    margin-top: 5px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
      width: 263px;
    }
    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 10px;
    align-items: baseline;
  }
}
.header4 {
  // width: 100%;
  height: 100%;
  padding: 69px 30px 0 56px;

  .post {
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        color: #333333;
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
    font-size: 12px;
    color: #333333;
    margin-left: 5px;
    text-align: right;
  }
  .pm {
    margin-top: 10px;
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
    margin-top: 5px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
    .textccc {
      width: 243px;
    }
    display: flex;
    margin-top: 5px;
    color: #666666;
    font-size: 10px;
    align-items: baseline;
  }
}
.selectCard {
  border: 1px solid #F44D00 !important;
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
  background-color: #F44D00 !important;
}

/deep/ .list1 {
  margin-top: 14px;
}

  .cmBox{
    width: 319px;
    height: 160px;
    background-size: 100% 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    .name{
      background-color: rgba($color: #000000, $alpha: 0.6);
      border-radius: 0 0 8px 8px;
      text-align: center;
      padding: 10px 0;
      font-size: 14px;
      color: #ffffff;
    }
  }

.cpBox{
  display: grid;
  grid-template-columns: 49% 49%;
  margin:10px 0;
  column-gap: 10px;
  row-gap: 10px;
  .cpItem{
    box-shadow: 0px 2px 8px 0px rgba(137,20,27,0.08);
    border-radius: 4px;

  }
  .name{
    text-align: center;
    margin: 4px 0;
    font-size: 13px;
  }
}
.address{
  margin-top:10px;
  border-radius: 4px;
  background-color:#F6F6F6 ;
  padding: 10px 12px ;
  .line{
    background-color: #F44D00;
    margin-right: 3px;
    height: 10px;
    width: 2px;
  }
  .name{
   color: #333;
   font-size: 13px;
   font-weight: 500;
  }
  .describe{
    color: #666666;
    font-size: 12px;

  }
}
</style>
