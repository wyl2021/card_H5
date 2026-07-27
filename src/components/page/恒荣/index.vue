<template>
  <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="hr"
      :cardId="cardId"
      @commitUser="getCommitUser"
      :show="false"
      :popupLength="1"
      color="#482F7D"
    >
      <template #userInfo>
        <div :class="'header' + (cardId + 1)" @click="show = true">
          <div class="post">
            <div class="name">
              <div class="text1">{{ userInfo.name }}</div>

              <div class="text3">
                {{ userInfo.post }}
              </div>
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'hr/icon/phone.png'" />{{ userInfo.phone }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'hr/icon/email.png'" />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'hr/icon/address.png'" />
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

              <div class="text3">
                {{ userInfo.post }}
              </div>
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'hr/icon/phone.png'" />{{ userInfo.phone }}
            </div>
            <div class="text5">
              <van-image :src="IMG + 'hr/icon/email.png'" />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image :src="IMG + 'hr/icon/address.png'" />
              <div class="textccc">{{ userInfo.address }}</div>
            </div>
          </div>
        </div>
      </template>
    </headerBg>
    <!-- 名字列表 -->
    <nameList
      :show="nameShow"
      @commitUserName="getCommitUserName"
      color="#DB001A"
    ></nameList>
    <!-- 电话和地址 -->
    <pAddress
      phoneButton="hr/icon/phoneButton.png"
      addressButton="hr/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="userInfo.address"
      name="恒荣"
      :type="1"
      width="16px"
      height="16px"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode
      :isWx="userInfo.wx_code"
      qrCodeIcon="hr/icon/sys.png"
      :isXx="userInfo.image"
      phonoIcon="hr/icon/grxx.png"
    >
    </pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#482F7D"
    ></tab>
    <!-- 公司介绍 -->
    <headerContent
      headerImg="hr/headerImage/gsjj.png"
      width="319px"
      height="42px"
      id="gsjs"
    >
      <template #content>
        <!-- <video poster="https://card-img1.oss-cn-beijing.aliyuncs.com/hr/image/vodie.png" :controls="true" width="316" height="185" ><source src="http://www.kwt56.com/images/history/hrxcp4.mp4" type="video/mp4"></video><source src="http://www.kwt56.com/images/history/hrxcp4.mp4" type="video/mp4"></video> -->
        <div v-html="text" class="m-t-10"></div>
        <div
          v-if="item.image"
          :key="index"
          v-for="(item, index) in getContent('简介数据')"
          class="jsBg"
          :style="{ 'background-image': 'url(' + getUrl(item.image.url) + ')' }"
        >
          <span v-html="highlightText(item.name)"></span>
        </div>

        <more
          title="查看更多"
          icon="arrow"
          path="/thirdindex"
          color="#666666"
          float="flex-start"
          class="m-t-10"
          :query="{ title: ' ' }"
        ></more>
      </template>
    </headerContent>
    <!-- 合作伙伴 -->
    <headerContent
      headerImg="hr/headerImage/hzhb.png"
      width="319px"
      height="42px"
    >
      <template #content>
        <div class="hz-box">
          <el-image
            :src="item.image.url"
            :key="index"
            v-for="(item, index) in getContent('合作伙伴')"
          ></el-image>
        </div>
        <more
          title="查看更多"
          icon="arrow"
          path="/thirdindex"
          color="#666666"
          float="flex-start"
          class="m-t-10"
          :query="{ title: ' ' }"
        ></more>
      </template>
    </headerContent>
    <!-- 服务优势 -->
    <headerContent
      headerImg="hr/headerImage/fwys.png"
      width="319px"
      height="42px"
    >
      <template #content>
        <div class="ysBox">
          <div class="item" v-for="(item, index) in getContent('服务优势')">
            <el-image class="image" :src="item.image.url" />
            <span class="name">{{ item.name }}</span>
            <!-- <br/> -->
            <span class="name_en">{{ item.name_en }}</span>
            <!-- <br/> -->
            <span class="describe">{{ item.describe }}</span>
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 产品介绍 -->
    <headerContent
      headerImg="hr/headerImage/cpjs.png"
      width="112px"
      height="30px"
      id="cpjs"
    ></headerContent>
    <headerContent :isHeader="false">
      <template #content>
        <listBox
          v-for="(item, index) in getContent('产品介绍')"
          v-if="index < 5"
          :key="index"
          :type="1"
          :imageUrl="{
            url: item.image.url,
            width: '130px',
            columWidth: '200px',
          }"
          :name="item.name"
          :describe="item.describe"
          button="查看详情"
          buttonColor="#482F7D"
          :pageType="3"
          :id="item.id"
          class="m-t-10"
        ></listBox>
      </template>
    </headerContent>
    <!-- 联系我们 -->
    <headerContent
      headerImg="hr/headerImage/lxwm.png"
      width="319px"
      height="42px"
      class="lxBox"
      id="lxwm"
    >
      <template #content>
        <p class="lxName">深圳恒荣跨境电商物流有限公司</p>

        <div
          class="lxItem"
          v-for="(item2, index2) in getContent('地址列表')"
          :key="index2"
          @click="getAddress(item2)"
        >
          <div class="d-flex name">
            <div class="lines"></div>
            {{ item2.name }}
          </div>
          <div class="lxDcribe">{{ item2.describe }}</div>
        </div>

        <iText class="m-t-10" titles="联系电话：" title="1861232698"></iText>
        <iText titles="电子邮箱：" title="13412233915@139.com"></iText>
        <iText
          titles="总部地址："
          title="深圳市龙岗区坂田街道天安云谷2期11栋3105"
        ></iText>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="深圳市龙岗区坂田街道天安云谷2期11栋3105"
          name="恒荣物流"
        ></TXMap>
        <div class="h-10"></div>
        <div class="d-flex" style="justify-content: space-evenly">
          <div>
            <van-image
              width="98px"
              height="98px"
              :src="IMG + 'hr/image/gzh.png'"
            ></van-image>
            <div class="f-m">微信公众号</div>
          </div>
        </div>
      </template>
    </headerContent>
    <van-popup
      v-model="lxShow"
      closeable
      close-icon-position="top-right"
      round
      :style="{ width: '50%', 'padding-top': '30px' }"
    >
      <!-- <div class="popupText" >{{ phoneAndAddress.name || '加载中' }}</div> -->
      <div class="popupText" @click="getPhone">拨打电话</div>
      <div class="popupText" @click="getAddress">定位导航</div>
    </van-popup>
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
          name: "公司简介",
          id: "gsjs",
        },
        {
          name: "产品介绍",
          id: "cpjs",
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
      nameShow: false,
      list: [],
      text: "",
      phoneAndAddress: {
        name: "",
        pdf: "",
        name_en: "",
        describe: "",
      },
      lxShow: false,
    };
  },
  created() {
    this.getUserInfo();
    this.getList();
  },

  mounted() {
    // this.getCommitUserName("1998e4ae-b69f-11ef-9813-00163e237fe6");
    window.addEventListener("scroll", this.scrolling);
    // this.getUserInfo();
    // this.getList();
  },
    beforeDestroy() {  // Vue 2
  window.removeEventListener("scroll", this.scrolling);
},

  methods: {
    getTo(id) {
      this.$router.push({
        path: "/categorySolutionInfo",
        query: { id: id },
      });
    },
    getTo2(index, index2) {
      // console.log(index2)
      this.$router.push({
        path: "/secondIndex",
        query: { index: index, index2: index2 ? index2 : 0 },
      });
    },
    // 电话
    getPhone() {
      window.location.href = "tel:" + this.userInfo.phone;
    },
    // 地址
    getAddress(res) {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$router.push({
        path: "/map",
        query: {
          address: res ? res.describe : this.userInfo.address,
          name: res ? res.name : "恒荣物流",
          isTap: true,
        },
      });
      Toast.clear;
    },

    highlightText(text) {
      // 使用正则表达式将数字（包括小数）和字母分开
      const regex = /(\d+\.\d+|\d+|[a-zA-Z]+|万|\＋)/g; // 匹配数字（包括小数）、字母、万和+

      return text.replace(regex, (match) => {
        if (/^\d+(\.\d+)?(万)?$|^\＋$/.test(match) || match === "万") {
          // 数字、小数、万、+ 显示为红色
          return `<span style="color:#E77D38;">${match}</span>`;
        } else {
          // 其他情况（如字母）显示为蓝色
          return `<span style="color: blue;">${match}</span>`;
        }
      });
    },
    // 角色切换
    getCommitUserName(id) {
      // this.$http.cardUserEdit({ id: '1998e4ae-b69f-11ef-9813-00163e237fe6' }).then((res) => {
      //   if (res.code == 200) {
      //     this.getUserInfo();
      //     this.nameShow = false;
      //   } else {
      //     this.$toast(res.msg);
      //   }
      // });
      this.$http.cardUserEdit({ id: id }).then((res) => {
        if (res.code == 200) {
          this.getUserInfo();
          this.nameShow = false;
        } else {
          this.$toast(res.msg);
        }
      });
    },
    // 角色弹框
    getIsName() {
      this.nameShow = true;
    },
    // 图片
    getUrl(str) {
      return "'" + str + "'";
    },
    // 打开地图
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
        .categorySolutionTypeList({ parent_name: "列表内容" })
        .then((res) => {

          // res.data.list.forEach((data)=>{
          //   if(data.name=='简介内容'){

          //   }
          // })
          this.list = res.data.list;
          // .replace(/controls="[^"]*"/g, 'controls="false"')
          this.text =
            this.getContent("简介内容") != []
              ? this.getContent("简介内容")[0]
                  .rich_text.replace(
                    /<p(.*?)>/,
                    "<p$1 style='width:100%;height:100%;'>"
                  )
                  .replace(/<br\s*\/?>/gi, "")
                  .replace(
                    /(style=['"][^'"]*?)line-height:[^;'"]*?([^'"]*['"])/g,
                    (match, p1, p2) => {
                      return p1 + "line-height:0.6;" + p2; // 替换为新的line-height值
                    }
                  )
              : "";

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
  padding: 40px 0 0 30px;
  .post {
    display: flex;
    align-items: center;
    /deep/ .van-image {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }
  }
  .name {
    .text1 {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 1px;
      color: #482f7d;
    }
    .text2 {
    }
  }
  .text3 {
    font-size: 10px;

    color: #333333;
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
      margin-right: 3px;
    }
    display: flex;
    align-items: center;
    color: #343434;
    font-size: 10px;
    margin-top: 4px;
  }
  .text6 {
    /deep/ .van-image {
      width: 10px;
      height: 10px;
      margin-right: 3px;
    }
    display: flex;
    align-items: self-start;
    color: #343434;
    font-size: 10px;
    line-height: 12px;

    margin-top: 4px;
    .textccc {
    }
  }
}
.header2 {
  // width: 100%;
  height: 100%;
  padding: 58px 0 0 24px;

  .post {
    display: flex;
    align-items: center;
    .name {
      .text1 {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 5px;
        color: #333333;
      }
      .text2 {
        font-size: 10px;
        color: #333333;
      }
    }
  }
  .text3 {
    width: fit-content;
    font-size: 10px;
    color: #fff;
    margin-top: 3px;
    background: #482f7d;
    border-radius: 2px;
    padding: 1px;
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
    display: flex;
    align-items: center;
    color: #343434;
    font-size: 9px;
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
      width: 200px;
    }
    display: flex;
    margin-top: 4px;
    color: #343434;
    font-size: 9px;
    align-items: center;
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
  border: 1px solid #482f7d !important;
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
  background-color: #482f7d !important;
}
.jsBg {
  width: 320px;
  height: 33px;
  background-size: 100% 100%;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 500;
  padding: 10px 0 0 45px;
}
.hz-box {
  display: grid;
  grid-template-columns: repeat(
    3,
    33%
  ); // repeat(auto-fit, minmax(200px, 1fr));// /* 响应式列 */minmax(200px, 1fr): 每列的最小宽度为 200px，最大宽度为 1fr（平分剩余空间）。
  gap: 8px; /* 设置网格间距 */
  padding: 8px; /* 容器内边距 */
}
.td-lt {
  text-decoration: line-through;
}

.lxBox {
  .lxName {
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .lxItem {
    background-color: #f6f6f6;
    margin-top: 10px;
    padding: 10px 12px;
    border-radius: 8px;
  }
  .name {
    align-items: center;
    font-size: 13px;
    color: #333333;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .lines {
    width: 2px;
    height: 12px;
    margin-right: 5px;
    background-color: #482f7d;
  }
  .lxDcribe {
    font-size: 13px;
    color: #666666;
  }
}
.f-m {
  font-size: 12px;
  color: #333;
  margin-top: 10px;
  text-align: center;
}
.popupText {
  font-size: 14px;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #f6f6f6;
}
.ysBox {
  display: grid;
  grid-template-columns: repeat(
    2,
    50%
  ); // repeat(auto-fit, minmax(200px, 1fr));// /* 响应式列 */minmax(200px, 1fr): 每列的最小宽度为 200px，最大宽度为 1fr（平分剩余空间）。
  gap: 8px; /* 设置网格间距 */
  padding: 8px; /* 容器内边距 */
  .item {
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background: #f6f6f6;
    padding: 12px;
  }
  .image {
    width: 30px;
    height: 30px;
    margin: auto;
  }
  .name {
    font-size: 13px;
    font-weight: 500;
    padding-top: 5px;
  }
  .name_en {
    color: #e77d38;
    font-size: 9px;
  }
  .describe {
    color: #666666;
    font-size: 11px;
    padding-top: 5px;
  }
}
</style>
