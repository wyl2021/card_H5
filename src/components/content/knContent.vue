
<template>
  <div>
    <!-- 医院简介 -->
    <headerContent
      headerImg="kn/headerImage/yyjj.png"
      height="48px"
      width="88px"
      id="yyjj"
    >
      <template #content>
        <div
          v-for="(item, index) in getContent('列表信息', '医院简介')
            .solution_list"

        >
          <van-image v-if="item.image" :src="item.image.url"></van-image>
          <div
            class="textStyle"
            v-for="(item2, index2) in item.name.split(' ')"

          >
            {{ item2 }}
          </div>
        </div>
        <more title="查看更多" icon="arrow" float="flex-start" path="/contentInfo"></more>
      </template>
    </headerContent>
    <headerContent
      headerImg="kn/headerImage/lsyg.png"
      height="48px"
      width="110px"
    >
      <template #content>
        <div
          v-for="(item, index) in getContent('列表信息', '历史沿革')
            .solution_list"

          class="historyBox"
        >
          <van-image
            :src="item.image.url"
            width="100px"
            height="60px"
          ></van-image>
          <div class="item">
            <div class="name">{{ item.name }}<span>年</span></div>
            <div class="d-flex">
              <div
                :style="{
                  backgroundImage: 'url(' + IMG + 'kn/icon/solid.png)',
                }"
                class="historySolid"
              >
                <div
                  :style="{
                    backgroundImage: 'url(' + IMG + 'kn/image/solid.png)',
                  }"
                  class="historySolids"
                ></div>
              </div>
              <div class="line"></div>
              <van-image
                :src="IMG + 'kn/image/hollow.png'"
                width="5px"
                height="5px"
              ></van-image>
            </div>
            <div class="describe">{{ item.describe }}</div>
          </div>
        </div>
        <more title="查看更多" icon="arrow" float="flex-start" path="/contentInfo"></more>
      </template>
    </headerContent>
    <headerContent
      id="ksjs"
      headerImg="kn/headerImage/ksjs.png"
      height="48px"
      width="139px"
    >
      <template #content>
        <div class="departmentBox">
          <div
            class="departmentItem"
            v-if="index < 6"
            v-for="(item, index) in getContent('科室', '特色专科')
              .solution_list"

            @click="getTo(item.id)"
          >
            <van-image :src="item.image.url" v-if="item.image"></van-image>
            {{ item.name }}
          </div>
        </div>
        <more title="查看更多" icon="arrow" float="flex-start" path="/thirdIndex"></more>
      </template>
    </headerContent>
    <headerContent
      id="lxwm"
      headerImg="kn/headerImage/lxwm.png"
      height="48px"
      width="74px"
    >
      <template #content>
        <p class="f-15-3">宁波大学附属康宁医院</p>
        <div
          class="contactBox"
          v-for="(item, index) in getContent('列表信息', '地址').solution_list"

          @click="getShow(item)"
        >
          <div class="d-flex">
            <div class="line"></div>
            <div class="contactTitle">{{ item.name }}</div>
            <div class="contactName" v-if="item.name_en">
              {{ "(" + item.name_en + ")" }}
            </div>
          </div>
          <div class="contactDescribe">
            <van-image
              :src="IMG + 'kn/icon/address3.png'"
              width="12px"
              height="12px"
              class="contactImg"
            ></van-image>
            {{ item.pdf }}
          </div>
          <div class="contactDescribe">
            <van-image
              :src="IMG + 'kn/icon/phone3.png'"
              width="12px"
              height="12px"
              class="contactImg"
            ></van-image>
            {{ "预约电话：" + item.describe }}
          </div>
        </div>
        <div
          v-for="(item, index) in getContent('列表信息', '时间').solution_list"
          :key="index"
        >
          <div class="m-t-10">
            <p class="f-14-3">{{ item.name }}</p>
            <div
              class="f-12-6"
              v-for="(item2, index2) in item.describe.split('  ')"
            >
              {{ item2 }}
            </div>
          </div>
        </div>
        <iText titles="24h值班电话：" title="13732188581"></iText>
        <iText titles="电子邮箱：" title="nbknyydzb@163.com"></iText>
        <iText
          titles="总院地址："
          title="宁波市镇海区庄市街道庄俞南路1号"
        ></iText>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="宁波大学附属康宁医院"
          name="宁波大学附属康宁医院"
        ></TXMap>
        <div class="qrCord">
          <div
            class="qrBox"
            v-for="(item, index) in getContent('列表信息', '二维码')
              .solution_list"
            :key="index"
          >

            <img
              :src="item.image.url"
              v-if="item.image"
              width="74px"
              height="74px"
              class="image "
              @click="getImg(item.image.url)"
            />

            <div class="qrName">{{ item.name }}</div>
          </div>
        </div>
      </template>
    </headerContent>
    <van-popup v-model="show" closeable close-icon-position="top-right" round :style="{ width:'50%','padding-top':'30px' }">
    <div class="popupText" @click="getPhone">拨打电话</div>
    <div class="popupText" @click="getAddress">定位导航</div>
  </van-popup>
   <!-- 图片预览对话框 -->
   <div v-if="currentImage" class="image-preview">
      <img :src="currentImage" />
      <button @click="currentImage = null">关闭</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  data(){
      return{
        show:false,
       phoneAndAddress:{},
       currentImage: null,
      }
  },

  methods: {
    getImg(imgSrc){
      this.currentImage = imgSrc;
    },
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    },
     // 电话
     getPhone() {

      window.location.href = "tel:" + this.phoneAndAddress.describe;
    },
    // 地址
    getAddress() {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$router.push({
        path: "/map",
        query: { address: this.phoneAndAddress.pdf, name:this.phoneAndAddress.name_en ,isTap:true },
      });
      Toast.clear;
    },
    getShow(res){
      this.show=true
        this.phoneAndAddress=res
    },
    butTab(id) {
      document.getElementById(id).scrollIntoView();
    },
    getContent(name, name2) {
      return this.list
        .find((item) => item.name == name)
        ?this.list
        .find((item) => item.name == name)
        .list.find((item2) => item2.name == name2):[];
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .title {
  color: #666666 !important;
  margin-top: 10px;
  font-weight:300  !important;

}

.historyBox {
  border-bottom: 1px double rgba($color: #355da8, $alpha: 0.1);
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
  .name {
    font-size: 14px;
    text-align: right;
    width: 120px;
    color: #333;
    /deep/ span {
      font-size: 8px;
      color: #333;
      margin-left: 2px;
    }
  }
  .describe {
    font-size: 10px;
    text-align: center;
    color: #666666;
  }
  .historySolid {
    width: 11px;
    height: 11px;
    background-size: 100% 100%;
    padding-top: 3px;
    .historySolids {
      width: 5px;
      height: 5px;
      background-size: 100% 100%;
      display: flex;
      margin: 0 auto;
    }
  }
  .line {
    width: 97px;
    height: 1px;
    background-color: #355da8;
  }
  .item {
    width: 70%;
    margin-left: 10px;
  }
}
.departmentBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;

  .departmentItem {
    .van-image {
      margin-bottom: 5px;
    }
    border-radius: 8px;
    padding-bottom: 5px;
    text-align: center;
    background-color: #fff;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
    font-size: 13px;
    color: #333333;
  }
}
.contactBox {
  background-color: #f6f6f6;
  padding: 10px 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  .line {
    background-color: #355da8;
    width: 2px;
    height: 10px;
    margin-right: 5px;
  }
  .contactTitle {
    font-size: 12px;
    color: #333;
  }
  .contactName {
    font-size: 10px;
    color: #333;
  }
  .contactDescribe {
    font-size: 11px;
    color: #666;
    display: flex;
    align-items: center;
  }
  .contactImg {
    // margin-right: 5px;
  }
}
.f-14-3 {
  font-size: 14px;
  color: #333;
}
.f-12-6 {
  font-size: 12px;
  color: #666;
  margin-left: 70px;
}
.m-t-10 {
  margin-bottom: 10px;
}
.qrCord {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  .qrBox {
    background-color: #fff;
    padding: 12px;
    .image {
      display: flex;
      margin: 0 auto;
    }
    .qrName {
      margin-top: 10px;
      text-align: center;
      font-size: 12px;
    }
  }
}
.f-15-3 {
  font-size: 15px;
  color: #333;
}
.popupText{
  font-size: 14px;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #f6f6f6;
}
.image-preview {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000; /* 确保预览框在其他内容之上 */
}
.image-preview img {
  max-width: 100%;
  max-height: 100%;
}
</style>
