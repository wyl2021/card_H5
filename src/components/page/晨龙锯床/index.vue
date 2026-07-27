<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="cljc"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="show"
      :popupLength="1"
      color="#d0333a"
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
              <van-image :src="IMG + 'cljc/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'cljc/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'cljc/icon/address.png'" />
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
              <van-image :src="IMG + 'cljc/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'cljc/icon/email.png'" />{{
                userInfo.email
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'cljc/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="cljc/icon/phoneButton.png"
      addressButton="cljc/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="晨龙锯床"
      :type="1"
      width="24px"
      height="24px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="cljc/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="cljc/icon/grxx.png"
    ></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#d0333a"
    ></tab>
  <!-- 公司介绍 -->
  <headerContent
      headerImg="cljc/headerImage/zjcl.png"
      width="143px"
      height="48px"
      id="gsjs"
    >
      <template #content>
        <van-image :src="IMG + 'cljc/image/jjBg1.png'" class="m-t-14" />
        <p
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </p>
        <div class="m-t-10"></div>
        <more
          title="查看更多"
          icon="arrow"
          color="#666666"
          path="contentInfo"
          float="flex-start"
        ></more>
      </template>
    </headerContent>
    <!-- 荣誉证书 -->
    <headerContent
    headerImg="cljc/headerImage/ryzs.png"
      width="117px"
      height="48px"
      id="cpzx"
      >
      <template #content>
          <div class="yyBox">
            <van-image width="155px" height="116px" v-if="item.image && index<=3" :src="item.image.url" v-for="(item,index) in  getContent('荣誉证书')" :key="index"></van-image>
          </div>
          <more
          title="查看更多"
          icon="arrow"
          color="#666666"
          path="contentInfo"
          float="flex-start"
        ></more>
      </template>
    </headerContent>
      <!-- 产品中心 -->
      <headerContent
      headerImg="cljc/headerImage/cpzx.png"
      width="87px"
      height="48px"
      id="cpzx"
      >
      <template #content>
        <div class="departmentBox">
          <div
            class="departmentItem"
            v-for="(item, index) in getContent('产品中心')"
            :key="index"
            @click="getTo(item.id)"
            v-if="index<=3"
          >
            <van-image v-if="item.image" :src="item.image.url"></van-image>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
          <more
          title="查看更多"
          icon="arrow"
          color="#666666"
          path="contentInfo"
          float="flex-start"
        ></more>
      </template>
    </headerContent>
    <!-- 联系我们 -->
    <headerContent
      headerImg="cljc/headerImage/lxwm.png"
      width="74px"
      height="48px"
      id="lxwm"
    >
      <template #content>
        <companyTitle
          title="浙江晨龙锯床股份有限公司"
          fontSize="15px"
        ></companyTitle>
        <iText title="0578-3159588 / 3158588" titles="电话：" color="#666666"></iText>
        <iText
          title="0578-3162158"
          titles="传真："
          color="#666666"
        ></iText>
        <iText
          title="xs@chenlong.com"
          titles="邮箱："
          color="#666666"
        ></iText>
        <iText title="浙江缙云壶镇工业园华强路1号" titles="地址：" color="#666666"></iText>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="浙江缙云壶镇工业园华强路1号"
          name="晨龙锯床"
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
          name: "走进晨龙",
          id: "zjcl",
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
      tabId: "zjcl", //默认tab
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
      text: "浙江晨龙锯床股份有限公司创办于2000年，是一家集高端智能锯切成套装备研发、生产、销售和服务于一体的国家级专精特新“小巨人”企业，拥有年产万台带锯床的综合生产能力，是国内智能锯切装备生产龙头企业。 公司是全国金属切削机床标准化技术委员会锯刨床分会秘书长单位、中国锻压协会下料装备委员会主任委员单位、中国机床工具工业协会锯床分会副理事长单位，是锯床行业首家被评为 “国家知识产权示范企业”、“全国文明单位”、“浙江省第一批制造业云上企业”，近年来相继被认定为“国家高新技术企业”、“浙江省隐形冠军”、“浙江省专精特新中小企业”、“浙江省知识产权示范企业”“浙江省级低碳绿色工厂”、“浙江省清洁生产企业”、“浙江省专利示范企业”、AAA“守合同重信用”企业和AAA级资信企业。“晨龙”牌商标被评为“中国驰名商标”、“浙江省著名商标”。",
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
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
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
  padding: 44px 0 0 30px;
  .post {

  }
  .name {
    .text1 {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 5px;
      margin-right: 3px;
      color: #D80916;
    }
    .text2 {
      font-size: 9px;
      color: #422188;
    }
  }
  .text3 {
    font-size: 10px;
    letter-spacing: 5px;
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

    color: #343434;
    font-size: 10px;
  }
  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 4px;
    }
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
      width: 243px;
    }
    display: flex;
    margin-top: 4px;
    color: #343434;
    font-size: 10px;
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
  border: 1px solid #d0333a !important;
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
  background-color: #D80916 !important;
}

.yyBox{
    display: grid;
    grid-template-columns: 49% 49%;
    column-gap: 10px;
    row-gap: 10px;
    margin: 10px 0;
}
.departmentBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  padding: 12px 0;
  margin:10px 0;
  .departmentItem {
    border-radius: 4px;
    padding-bottom: 5px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 2px 8px 0px rgba(137,20,27,0.08);
    .name {
      font-size:  13px;
      font-weight: 500;
      color: #333333;
    }
  }
}
</style>
