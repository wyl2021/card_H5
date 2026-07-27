<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="nbzy"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="false"
      :popupLength="1"
      color="#1660C6"
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
              <van-image :src="IMG + 'nbzy/icon/phone.png'" />{{
                userInfo.phone || "-"
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'nbzy/icon/email.png'" />{{
                userInfo.email || "-"
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'nbzy/icon/address.png'" />
              <div class="textccc">
                {{ userInfo.address || "宁波经济技术开发区庐山东路388号" }}
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
              <van-image :src="IMG + 'nbzy/icon/phone.png'" />{{
                userInfo.phone || "-"
              }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'nbzy/icon/emali.png'" />{{
                userInfo.email || "-"
              }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'nbzy/icon/address.png'" />
              <div class="textccc">
                {{ userInfo.address || "宁波经济技术开发区庐山东路388号" }}
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
      color="#1660C6"
    ></nameList>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="nbzy/icon/phoneButton.png"
      addressButton="nbzy/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address || '宁波经济技术开发区庐山东路388号'"
      name="宁波职业技术学院"
      :type="1"
      backgroundColor="#1660C6"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode :isWx="userInfo.wx_code" qrCodeIcon="nbzy/icon/sys.png"></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#1660C6"
    ></tab>
    <!-- 学校简介 -->
    <headerContent headerImg="nbzy/headerImage/xxjj.png" id="xxjj"
    height="48px"
      width="80px"
    >
      <template #content>
        <div class="h-10"></div>
        <van-image :src="IMG + 'nbzy/image/jjBg.png'"></van-image>
        <div
          class="textStyle"
          v-if="getContent('学校介绍').length==1 "
          v-for="(item, index) in getContent('学校介绍')[0].describe.split(' ')"
          :key="index"
        >
          {{ item }}
        </div>
        <div class="h-10"></div>
        <more
          title="查看更多"
          :icon="IMG + 'nbzy/icon/right.png'"
          color="#666666"
          path="contentInfo"
          float="flex-start"
        ></more>
      </template>
    </headerContent>
    <!-- 办学成果 -->
    <headerContent headerImg="nbzy/headerImage/bxcg.png"
    height="48px"
      width="169px"
      >
      <template #content>
        <div class="bxBg" v-if="index<6" v-for="(item,index) in getContent('办学成果')" :key="index" :style="{'backgroundImage':'url('+getUrl(item.image.url)+')'}">
        {{ item.name }}
        </div>
        <div class="h-10"></div>
        <more
          title="查看更多"
          :icon="IMG + 'nbzy/icon/right.png'"
          color="#666666"
          path="contentInfo"
          float="flex-start"
        ></more>
      </template>

    </headerContent>
    <!-- 新闻资讯 -->
    <headerContent headerImg="nbzy/headerImage/xwzx.png" id="xwzx"
    height="48px"
      width="100px"
    >
      <template #content>
        <!-- @click="getTo(item.name,item.id)" -->
        <div  v-if="index<3" :style="{'background-image':'url('+getUrl(item.image.url)+')'}" v-for="(item,index) in getContent('新闻资讯')" class="xwItem" :key="index">
        <!-- <van-image :src="item.image.url" v-if="item.image" width="30px" height="30px"></van-image> -->
        <div class="name">{{ item.name }}</div>


      </div>
      <div class="h-10"></div>
        <more
          title="查看更多"
          :icon="IMG + 'nbzy/icon/right.png'"
          color="#666666"
          path="thirdIndex"
          float="flex-start"
        ></more>
      </template>
    </headerContent>
    <!-- 招生就业 -->
    <headerContent headerImg="nbzy/headerImage/zsjy.png" id="zsjy"
    height="48px"
      width="161px"
    >
      <template #content>
        <div class="zsBg">
        <div @click="getTo(item.name,item.id)" v-for="(item,index) in getContent('招生就业')" class="zsItem" :key="index">
        <van-image :src="item.image.url" v-if="item.image" width="30px" height="30px"></van-image>
        <div class="name">{{ item.name }}</div>
        <div class="name_en">{{ item.name_en }}</div>
        </div>
      </div>
      </template>
    </headerContent>
    <!-- 联系我们 -->
    <headerContent headerImg="nbzy/headerImage/lxwm.png" id="lxwm"
    height="48px"
      width="74px"
    >
        <template #content>
          <companyTitle title="宁波职业技术学院" fontSize="15px" color="#333333" ></companyTitle>
          <i-text titles="电话：" title="0574-86891367" color="#666666" fontSize="14px"></i-text>
          <i-text titles="邮编：" title="315800" color="#666666" fontSize="14px"></i-text>
          <i-text titles="地址：" title="宁波经济技术开发区庐山东路388号" color="#666666" fontSize="14px"></i-text>
        <div class="m-t-14"></div>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="宁波经济技术开发区庐山东路388号"
          name="宁波职业技术学院"
        ></TXMap>
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
          name: "学校简介",
          id: "xxjj",
        },
        // {
        //   name: "新闻资讯",
        //   id: "xwzx",
        // },
        {
          name: "招生就业",
          id: "zsjy",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },
      ], ///tab栏列表
      tabId: "xxjj", //默认tab
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
    getUrl(str){
      return "'" + str + "'"
    },
    getTo(name,id){
      if(name=='政策解读' || name=="提前招生"){

      }else{
        this.$router.push({
        path: "/categorySolutionInfo",
        query: { id: id,title:name,isPage:false },
      });
      }

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
  padding: 40px 0 0 30px;

  .post {
  }
  .name {
    .text1 {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #1660C6;
    }
    .text2 {
      font-size: 10px;
      color: #422188;
    }
  }
  .text3 {
    margin-top: 4px;
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
      margin-right: 3px;
    }

    color: #343434;
    font-size: 10px;
  }
  .text5 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 3px;
    }
    color: #343434;
    font-size: 10px;
    margin-top: 6px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 3px;
    }
    .textccc {
      width: 183px;
    }
    display: flex;
    margin-top: 6px;
    color: #343434;
    font-size: 10px;
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
  background-color: #1660C6 !important;
}
/deep/ .line {
  background-color: #1660C6 !important;
}
.selectCard {
  border: 1px solid #1660C6 !important;
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
  background-color: #1660C6;
  height: 1px;
  width: 112px;
}
.titleHeader {
  color: #1660C6;
  font-size: 15px;
  margin: 0 10px;
  font-weight: 700;
}
.nameHeader {
  font-size: 12px;
  color: #1660C6;
  font-weight: 400;
  text-align: center;
  // margin: ;
}
.auto {
  display: flex;
  flex-direction: column;
  margin: auto;
}
.bxBg{
  width: 100%;
  height: 33px;
  border-radius: 8px;
  padding:9px 0 0 30px;
  color: #333333;
  font-size: 12px;
  margin-top:10px;
  background-size: 100% 100%;
}
.zsBg{
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap:10px;
  row-gap: 10px;
  margin-top:10px;
  .zsItem{
    width:155px;
    // height: 123px;
    border-radius: 8px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 0px 8px 0px rgba(22,96,198,0.08);
    padding: 24px 0;
    .name{
      color: #333333;
      font-size: 14px;
      font-weight: 500;
      margin:6px 0 9px 0;
    }
    .name_en{
      font-size: 10px;
      color:#666666;

    }
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
.xwItem{
  width: 100%;
  height: 160px;
  margin-top:10px;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .name{
    background-color: rgba($color: #000000, $alpha: 0.5);
    padding:12px;
    border-radius: 0 0 8px 8px;
    text-align: center;
    color: rgba($color: #fff, $alpha: 0.8);
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp:1;

  }
}
</style>
