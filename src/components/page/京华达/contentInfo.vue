<template>
  <div>
    <img :src="IMG + 'jhd/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->

      <img class="logo" :src="IMG + 'jhd/image/logo.png'" />
      <div class="companyName">深圳市京华达智慧科技有限公司</div>

      <div v-html="text"></div>

    </div>
    <van-popup v-model="show" closeable close-icon-position="top-right" round
      :style="{ width: '50%', 'padding-top': '30px' }">
      <!-- <div class="popupText" >{{ phoneAndAddress.name || '加载中' }}</div> -->
      <div class="popupText" @click="getPhone">拨打电话</div>
      <div class="popupText" @click="getAddress">定位导航</div>
    </van-popup>
    <!-- 发展历程 -->
    <headerContent headerImg="jhd/headerImage/fzlc.png" width="118px" height="48px" :isMx="false">
      <template #content>
        <div class="d-flex jc-sa" style="margin-top: 10px;padding-bottom: 10px; border-bottom: 1px dashed #EBEFF6;"
          v-for="(item, index) in getContent('发展历程')">
          <van-image width="100px" height="60px" :src="item.image.url"></van-image>
          <div class="w60  fd-c dp-f">
            <p class="fs-14 ta-c"> {{ item.name_en }}<span class="fs-8 c-333">年</span></p>

            <van-image width="109px" height="11px" :src="IMG + 'jhd/image/line.png'"></van-image>
            <p class="fs-10 c-666 ta-c">{{ item.name }}</p>
          </div>
        </div>


      </template>
    </headerContent>
    <!-- 合作伙伴 -->
    <headerContent :isMx="false" headerImg="jhd/headerImage/hzhb.png" width="97px" height="48px">
      <template #content>
        <van-image v-for="(item, index) in getContent('合作伙伴')" :key="index" :src="item.image.url"></van-image>
      </template>
    </headerContent>

    <!-- 联系我们 -->
    <headerContent :isMx="false" headerImg="jhd/headerImage/lxwm.png" width="74px" height="48px" class="lxBox">
      <template #content>
        <p class="lxName">深圳市京华达智慧科技有限公司</p>

        <div class="lxItem" v-for="(item2, index2) in getContent('联系我们')" :key="index2" @click="getShow(item2)">
          <div class="d-flex name">
            <div class="line"></div>
            {{ item2.name }}
          </div>
          <i-text iconImage="jhd/icon/phone3.png" :title="item2.name_en"></i-text>
          <i-text iconImage="jhd/icon/phone4.png" :title="parseContactInfo(item2.pdf).phone || '-'"></i-text>
          <i-text iconImage="jhd/icon/email3.png" :title="parseContactInfo(item2.pdf).email || '-'"
            style="align-items: center;"></i-text>
          <i-text iconImage="jhd/icon/address3.png" :baselineNumber="25" font1Width="90%"
            :title="item2.describe"></i-text>
        </div>
        <div class="h-10"></div>
        <iText titles="联系电话：" title="0755-89689111 136-8686-1748"></iText>
        <iText titles="电子邮箱：" title="Jinghuada@kwt-logistics.com"></iText>
        <iText titles="总部地址：" title="广东省深圳市龙岗区坂田天安云谷2期11栋3105"></iText>
        <TXMap mapWidth="100%" mapHeight="130px" address="广东省深圳市龙岗区坂田天安云谷2期11栋3105" name="京华达"></TXMap>
        <div class="h-10"></div>
        <div class="d-flex" style="justify-content: space-evenly;">
          <div>
            <van-image width="98px" height="98px" :src="IMG + 'jhd/image/gzh.png'"></van-image>
            <div class="f-m">官方公众号</div>
          </div>
          <div><van-image width="98px" height="98px" :src="IMG + 'jhd/image/kf.png'"></van-image>
            <div class="f-m">咨询客服</div>
          </div>

        </div>
      </template>
    </headerContent>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {

  data() {
    return {
      IMG: this.IMG,
      list: [],
      text: "",
      whList: [],
      show: false,
      phoneAndAddress: {
        name: '',
        pdf: '',
        name_en: '',
        describe: ''
      }
    };
  },
  created() {
    this.getList();
  },

  methods: {
    // 解析联系信息字符串为对象
    parseContactInfo(contactString) {
      if (typeof contactString === 'object') {
        return contactString; // 如果已经是对象，直接返回
      }
      const contactInfo = {};
      // 提取电话号码
      const phoneMatch = contactString.match(/手机：(\d+)/);
      if (phoneMatch && phoneMatch[1]) {
        contactInfo.phone = phoneMatch[1];
      }
      // 提取邮箱
      const emailMatch = contactString.match(/邮箱：([^\s]+)/);
      if (emailMatch && emailMatch[1]) {
        contactInfo.email = emailMatch[1]; // 注意：用户要求使用emli作为键名
      }
      return contactInfo;
    },
    // 电话
    getPhone() {
      if (!this.parseContactInfo(this.phoneAndAddress.pdf).phone) {
        Toast({
          message: "联系电话不存在",
          forbidClick: true,
        });
        return;
      }
      const phoneInfo = this.parseContactInfo(this.phoneAndAddress.pdf).phone || '';
      const phoneNumber = phoneInfo.phone || this.phoneAndAddress.pdf;
      window.location.href = "tel:" + phoneNumber;
    },
    // 地址
    getAddress() {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$router.push({
        path: "/map",
        query: {
          address: this.phoneAndAddress.describe,
          name: this.phoneAndAddress.name,
          isTap: true,
        },
      });
      Toast.clear;
    },
    getShow(res) {
      this.show = true;
      this.phoneAndAddress = res;
    },
    getUrl(str) {
      return "'" + str + "'";
    },
    getContent(name) {
      const data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表内容" })
        .then((item) => {
          this.list = item.data.list;
          this.text =
            this.getContent("简介内容") != []
              ? this.getContent("简介内容")[0]
                .rich_text.replace(
                  /<p(.*?)>/,
                  "<p$1 style='width:100%;height:100%'>"
                )
                .replace(
                  /<video(.*?)>/,
                  "<video$1 style='width:100%;height:100%;border-radius:8px'>"
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
  },
};
</script>

<style lang="scss" scoped>
.m-x-12 {
  margin: 0 12px;
}

.h-10 {
  height: 10px;
}

.m-x {
  margin: 12px 16px;
}

.logoBg {
  // position: fixed;
  top: 0;
  width: 100%;
  height: 206px;
}

.content {
  z-index: 1;
  margin: -40px 0 0 0 !important;
  padding: 0 28px 10px 28px;
  position: relative;
  border-start-start-radius: 20px;
}

.logo {
  width: 50px;
  height: 50px;
  margin: -50px 0 0 10px;
}

.box {
  width: 100%;
  height: 200px;
  background-color: beige;
  margin-top: 12px;
}

.name {
  font-size: 12px;
  color: #FE6104;
  margin: 8px 0;
}

.companyName {
  font-size: 13px;
  margin: 6px 0 8px 10px;
  color: #FE6104;
  font-weight: 500;
}

.introduction {
  width: 100%;
  height: 33px;
  padding: 8px 44px;
  background-size: 100% 100%;
  color: #333;
  font-size: 12px;
  margin-top: 7px;
}

.lxBox {
  .lxItem {
    background-color: #f6f6f6;
    margin-top: 10px;
    padding: 8px 12px;
    border-radius: 8px;

    .name {
      align-items: center;
      font-size: 13px;
      color: #333333;
      font-weight: 500;
      margin-bottom: 8px;

      .line {
        width: 2px;
        height: 12px;
        margin-right: 5px;
        background-color: #FE6104;
      }
    }
  }

  .lxName {
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    margin-bottom: 10px;

  }
}

.popupText {
  font-size: 14px;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #f6f6f6;
}

.f-m {
  font-size: 12px;
  color: #333;
  margin-top: 10px;
  text-align: center;
}
</style>
