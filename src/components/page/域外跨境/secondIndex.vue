<template>
  <div>
    <img :src="IMG + 'zxbl/image/jsBg2.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->
      <div class="d-flex">
        <img class="logo" :src="IMG + 'zxbl/image/logo.png'" />
        <div>
          <p class="title">宁波中鑫博勒汽车销售服务有限公司</p>
          <p class="title_en">
            NINGBO ZHONGXIN BOLE AUTOMOBILE SALES AND SERVICE CO., LTD
          </p>
        </div>
      </div>
      <div class="xian"></div>
      <div class="" v-for="(item, index) in list" :key="index">
        <div class="d-flex heading">
          <img :src="IMG + 'zxbl/icon/right2.png'" class="img" />
          {{ item.name }}
        </div>
        <div
          class=""
          v-for="(item2, index2) in item.solution_list"
          :key="index2"
        >
          <div v-if="item.name == '志愿者队伍'">
            <p class="subtitle">{{ item2.name_en }}</p>
            <div class="d-flex" style="justify-content: space-between">
              <van-image
                v-if="item2.image && index2 % 2 == 0"
                :src="item2.image.url"
                width="136px"



              ></van-image>
              <div

                class=" zyzBox"
                :style="{width:index2 % 2 != 0?'80%':'60%'}"
              >
                {{ item2.describe }}
              </div>
              <van-image
                v-if="item2.image && index2 % 2 != 0"
                :src="item2.image.url"
                width="65px"
                height="65px"
              ></van-image>
            </div>
          </div>
          <div
            class="whBox"
            v-else-if="item.name == '品牌文化'"
            v-for="(item3, index3) in whList"
            :key="index3"
          >
            <van-image
              :src="IMG + item3.url"
              width="16px"
              height="16px"
            ></van-image>
            <div class="whItem">
              <p class="name">{{ item3.name }}</p>
              <p v-if="item3.name != '品牌精神'" class="title">
                {{ item3.title }}
              </p>
              <div
                v-else
                v-for="(item5, index5) in item3.list"
                class="title"
                :key="index5"
              >
                <div class="dian"></div>
                {{ item5 }}
              </div>
            </div>
          </div>
          <div v-else>
            <div class="subtitle">{{ item2.name_en }}</div>
            <p
              class="textStyle"
              v-for="(item4, index4) in item2.describe.split(' ')"
              :key="index4"
            >
              {{ item4 }}
            </p>
            <van-image :src="item2.image.url" v-if="item2.image"></van-image>
          </div>
        </div>
      </div>
    </div>
    <div class="h-70"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      whList: [
        {
          url: "zxbl/icon/1.png",
          name: "品牌定位",
          title: "一切都是为了回归生活",
        },
        {
          url: "zxbl/icon/2.png",
          name: "品牌愿景",
          title: "中国汽车户外生活引领者",
        },
        {
          url: "zxbl/icon/3.png",
          name: "品牌精神",
          list: [
            "自由：追求生活体验 征服不同旅程 生而无悔",
            "探索：尝试新的体验与独特的生活方式",
            "激情：精神与体验的双重享受",
            "本真：做自己 探索真实的世界",
          ],
        },
        {
          url: "zxbl/icon/4.png",
          name: "品牌使命",
          title: "打造人与人之间最自然和真实的沟通",
        },
      ],
    };
  },
  created() {
    this.getList();
  },

  methods: {
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "公司介绍" })
        .then((res) => {
          console.log("公司介绍", res.data);
          this.list = res.data.list;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.m-x {
  margin: 12px 16px;
}
.m-r-10 {
  margin-right: 10px;
}
.logoBg {
  // position: fixed;
  top: 0;
  width: 100%;
  height: 206px;
}
.content {
  z-index: 1;
  margin-top: -40px;
  padding: 0 16px;
  position: relative;
  border-start-start-radius: 20px;
}
.logo {
  width: 75px;
  height: 35px;
  margin-right: 5px;
}
.box {
  width: 100%;
  height: 200px;
  background-color: beige;
  margin-top: 12px;
}
.name {
  font-size: 14px;
  color: #484848;
  margin: 8px 0;
}

.title {
  color: #000000;
  font-size: 13px;
}
.title_en {
  color: #000000;
  font-size: 6px;
  letter-spacing: 0.5;
}
.whBox {
  margin-top: 8px;
  display: flex;
  align-items: baseline;
  .whItem {
    margin-left: 8px;

    .name {
      color: #333333;
      font-size: 14px;
      margin-bottom: 8px;
    }
    .title {
      color: #666666;
      font-size: 12px;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
    }
    .dian {
      width: 5px;
      height: 5px;
      margin-right: 3px;
      background-color: #113681;
      border-radius: 2px;
    }
  }
}
.subtitle {
  font-size: 12px;
  color: #113682;
  margin: 4px 0;
  font-weight: 500;
}
.heading {
  color: #484848;
  font-size: 14px;
  margin-top: 8px;
  .img {
    width: 6px;
    height: 13px;
    margin-right: 5px;
  }
}
.zyzBox{

  font-size: 8px;
text-align: justify;
color: #666;
line-height: 14px;
letter-spacing: 0.72px;
}
</style>
