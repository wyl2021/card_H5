<template>
 <div class="p-page">
    <!-- 头部切换 -->

    <headerBg
      cardBg="mxt"
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
              <div
                v-if="cardId + 1 == 4"
                :class="cardId + 1 == 4 ? 'text3' : 'text2'"
              >
                {{
                  cardId + 1 == 4 ? "深圳美线通供应链有限公司" : userInfo.post
                }}
              </div>
            </div>
            <div :class="cardId + 1 != 4 ? 'text3' : 'text2'">
              {{ cardId + 1 == 4 ? "深圳美线通供应链有限公司" : userInfo.post }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'mxt/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image
                :src="
                  cardId + 1 == 3 || cardId + 1 == 4
                    ? IMG + 'mxt/icon/email2.png'
                    : IMG + 'mxt/icon/email.png'
                "
              />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image
                :src="
                  cardId + 1 == 3 || cardId + 1 == 4
                    ? IMG + 'mxt/icon/address2.png'
                    : IMG + 'mxt/icon/address.png'
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
              <div
                v-if="slotProps.item + 1 == 4"
                :class="slotProps.item + 1 == 4 ? 'text3' : 'text2'"
              >
                {{
                  slotProps.item + 1 == 4
                    ? "深圳美线通供应链有限公司"
                    : userInfo.post
                }}
              </div>
            </div>
            <div :class="slotProps.item + 1 != 4 ? 'text3' : 'text2'">
              {{
                slotProps.item + 1 == 4
                  ? "深圳美线通供应链有限公司"
                  : userInfo.post
              }}
            </div>
          </div>
          <div class="pm">
            <div class="text4">
              <van-image :src="IMG + 'mxt/icon/phone.png'" />{{
                userInfo.phone
              }}
            </div>
            <div class="text5">
              <van-image
                :src="
                  slotProps.item + 1 == 3 || slotProps.item + 1 == 4
                    ? IMG + 'mxt/icon/email2.png'
                    : IMG + 'mxt/icon/email.png'
                "
              />{{ userInfo.email }}
            </div>
            <div class="text6">
              <van-image
                :src="
                  slotProps.item + 1 == 3 || slotProps.item + 1 == 4
                    ? IMG + 'mxt/icon/address2.png'
                    : IMG + 'mxt/icon/address.png'
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
      phoneButton="mxt/icon/phoneButton.png"
      addressButton="mxt/icon/addressButton.png"
      :phone="userInfo.phone"
      :address="'浙江省宁波市镇海区公园世家'"
      name="翼星国际"
      :type="0"
    ></pAddress>
    <!-- 二维码和形象照 -->
    <pQrcode :isWx="userInfo.wx_code" qrCodeIcon="mxt/icon/sys.png"></pQrcode>
    <!-- tab栏 -->
    <tab
      :tabList="tabList"
      :tabId="tabId"
      :isTob="tabIsTop"
      id="tap"
      @butTab="butTab"
      color="#101749"
    ></tab>
    <!-- <div  v-for="(item, index) in list"
      :key="index">{{ item }}</div> -->
    <!-- <headerContent  :headerImg="'mxt/headerImage/gsjs.png'"  width="122px"
      height="21px">
      <template #content>
        <div id="gsjs">
              <van-image  :src="IMG+'image/gsjs.png'"></van-image>
              <div
                v-for="(item, index) in list[0].solution_list[0].name.split(' ')"
                :key="index"
                class="textStyle"
              >
                {{ item }}
              </div>
            </div>
      </template>
    </headerContent> -->
    <headerContent
    v-for="(item, index) in list"
      :key="index"
      :headerImg="'mxt/headerImage/' + item.name + '.png'"
      width="122px"
      height="21px"
    >
      <template #content>
        <div>

          <div v-for="(item2, index2) in item.solution_list" :key="index2">
            <div v-if="item.name == 'gsjs'" id="gsjs">
              <van-image  :src="IMG+'mxt/image/gsjs.png'"></van-image>
              <div
                v-if="item2.name != ''"
                v-for="(item3, index3) in item2.name.split(' ')"
                :key="index3"
                class="textStyle"
              >
                {{ item3 }}
              </div>
            </div>
            <div v-if="item.name == 'smyj'">
              <div class="d-flex">
                <van-image
                  :src="item2.image.url"
                  width="14px"
                  height="14px"
                ></van-image>
                <div class="cultureName">{{ item2.name }}</div>
              </div>
              <div class="cultureDescribe">{{ item2.describe }}</div>
              <div
                :class="{ 'm-t-14': index2 != item.solution_list.length - 1 }"
              ></div>
            </div>
            <div v-if="item.name == 'wlcp'" id="wlcp">
              <listBox
                :class="{ 'm-t-14': index2 != item.solution_list.length - 1 }"
                :imageUrl="{
                  url: item2.image.url,
                }"
                :name="item2.name"
                :describe="item2.describe"
                :type="2"
                :pageType="2"
                :id="item2.id"
              ></listBox>
            </div>
            <div v-if="item.name == 'lxwm'" id="lxwm">
              <div class="title">深圳美线通供应链有限公司</div>
              <div class="m-t-14"></div>
              <iText titles="电话：" :title="item2.name"></iText>
              <iText titles="邮箱：" :title="item2.name_en"></iText>
              <iText class="a-item" titles="地址：" :title="item2.describe"></iText>
              <TXMap
                mapWidth="100%"
                mapHeight="130px"
                address="广东省深圳市宝安区福永街道福州大道76号智荟园A2栋103A"
                name="美线通物流"
              ></TXMap>
              <iText titles="官网：" :title="item2.pdf"></iText>
            </div>
          </div>
        </div>
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
          name: "企业介绍",
          id: "qyjs",
        },
        {
          name: "物流产品",
          id: "wlcp",
        },
        {
          name: "联系我们",
          id: "lxwm",
        },
      ], ///tab栏列表
      tabId: "qyjs", //默认tab
      tabIsTop: false, //用作下拉到一定程度现实tab栏
      cardId: 0,
      cardIds:0,
      userInfo: {
        name: "正在加载",
        post: "正在加载",
        phone: "正在加载",
        email: "正在加载",
        address: "正在加载",
        english: "正在加载",
      },
      show: false,
      list: [

      ],
    };
  },
  created(){
    this.getUserInfo();
    this.getList()
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
    // 内容信息
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          console.log("列表信息",res)
          res.data.list.forEach((item) => {
            console.log(item == "使命愿景")
            if (item.name == "公司介绍") {
              this.list[0] = {
                name: "gsjs",
                solution_list: item.solution_list,
              };
            }
            else if (item.name == "使命愿景") {
              this.list[1] = {
                name: "smyj",
                solution_list: item.solution_list,
              };
            } else if (item.name == "物流产品") {
              this.list[2] = {
                name: "wlcp",
                solution_list: item.solution_list,
              };
            } else if (item.name == "联系我们") {
              this.list[3] = {
                name: "lxwm",
                solution_list: item.solution_list,
              };
              console.log("liebiao",this.list[3])
            }
          });

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
      wx.miniProgram.postMessage(this.userInfo)
      this.$http.cardUserInfo().then((res) => {
        this.userInfo = res.data;
        this.cardId=res.data.select;

        console.log("1231231")
      });
    },

    // 名片切换
    getCommitUser(index) {
      console.log("名片切换",index)
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
    text-align: right;
  }
  .name {
    display: flex;
    align-items: center;

    .text1 {
      text-align: right;
      width: 100%;
      font-size: 14px;
      font-weight: 800;
      letter-spacing: 5px;
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
    margin-top: 30px;
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
      width: 247px;
    }
    display: flex;
    margin-top: 4px;
    color: #666666;
    font-size: 10px;
    align-items: baseline;
  }
}

.header2 {
  // width: 100%;
  height: 100%;
  padding: 43px 30px 0 46px;
  .post {
    .name {
      display: flex;
      align-items: center;
      .text1 {
        width: 100%;
        font-size: 16px;
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
    font-size: 10px;
    color: #666;
    // margin-top: ;
  }
  .pm {
    margin-top: 26px;
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
      width: 253px;
    }
    display: flex;
    margin-top: 4px;
    color: #666666;
    font-size: 10px;
    align-items: baseline;
  }
}

.header3 {
  // width: 100%;
  height: 100%;
  padding: 56px 0 0 30px;

  .post {
    display: flex;
    align-items: center;

    .name {
      display: flex;
      align-items: center;
      .text1 {
        font-size: 16px;
        font-weight: 800;
        color: #fff;
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
    color: #fff;
    margin-left: 5px;
  }
  .pm {
    margin-top: 34px;
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
    margin-top: 8px;
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
    margin-top: 8px;
    color: #666666;
    font-size: 10px;
    align-items: baseline;
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
  border: 1px solid #101749 !important;
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
.a-item{
  align-items: baseline !important;
  width:290px ;

}

</style>
