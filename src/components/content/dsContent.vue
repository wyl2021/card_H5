<template>
  <div>

    <div v-for="(item, index) in nameList" :key="index">
      <headerContent
        headerImg="ds/headerImage/gywm.png"
        height="21px"
        width="122px"
        id="gsjs"
        v-if="item == '关于达升'"

      >
        <template #content>
          <div class="textStyle"  >
            达升物流股份有限公司成立于2001年1月，是一家集海运、空运、拼箱、无船承运、项目物流、第三方物流、供应链管理解决方案为一体的综合性国际物流企业，能提供中国至全球进出口物流综合服务；通过打造PLOUTO可视化数字物流平台，致力于成为全球可视化数字物流的领先者，帮助客户成为他们所在行业中的领导者。
          </div>
          <div class="gyImage" :style="'background-image:url('+IMG+'ds/image/gy.png)'">
					<van-image :src="IMG+'ds/image/play.png'"  width="48px" height="48px" style="display: flex;margin: auto; "></van-image>
				</div>
          <more
            title="查看更多"
            icon="arrow"
            float="flex-start"
            path="/contentInfo"
            color="#666666"
          ></more>
        </template>
      </headerContent>
      <headerContent
        headerImg="ds/headerImage/smyj.png"
        height="21px"
        width="122px"
        v-else-if="item == '使命愿景'"
      >
        <template #content>
          <div
            class="smList"
            v-for="(item, index) in smList"
            @tap="qiehuanName(item.name)"
            :key="index"
          >
            <van-image
              :src="item.icon"
              class="smItem"
              width="16px"
              height="16px"
            ></van-image>

            <div class="smItems">
              <div class="name">{{ item.name }}</div>
              <div :class="{ contantBox: item.contant.split(' ').length != 1 }">
                <div
                  class="contant"
                  v-for="(item2, index2) in item.contant.split(' ')"
                  :key="index2"
                >
                  <div
                    :class="{ circular: item.contant.split(' ').length != 1 }"
                  ></div>
                  {{ item2 }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </headerContent>
      <headerContent
        headerImg="ds/headerImage/ryzz.png"
        height="21px"
        width="122px"
        v-else-if="item == '荣誉资质'||item=='资质'"
      >
        <template #content>
          <div
            class="zzList"
            v-for="(item2, index2) in zzList"
            :key="index2"
          >
            <div class="item">
              <div class="time">{{ item2.time }}</div>
              <div class="title">{{ item2.title }}</div>
            </div>
            <van-image
              width="120px"
              height="71px"
              :src="IMG + 'ds/image/ryzz' + (index2 + 1) + '.png'"
              class="image"
            ></van-image>
          </div>
          <more
            v-if="item=='荣誉资质'"
            title="更多荣誉"
            icon="arrow"
            float="flex-start"
            path="/contentInfo"
            color="#666666"
          ></more>
        </template>
      </headerContent>
      <headerContent
        headerImg="ds/headerImage/cp.png"
        height="21px"
        width="94px"
        v-else-if="item == '产品'"
        id="cpfw"
      >
        <template #content>
          <div


            v-for="(item2, index2) in getList('产品').solution_list"
            class="cpList"
            :key="index2"
            :style="'background-image:url(' + getUrl(item2.image.url) + ')'"
            @click="getTo(item2.id)"
          >
            <div class="name">
              {{ item2.name }}
            </div>
            <div class="xian"></div>
            <div class="describe">{{ item2.describe }}</div>
          </div>
        </template>
      </headerContent>
      <headerContent
        headerImg="ds/headerImage/wmdfw.png"
        height="21px"
        width="122px"
        v-else-if="item == '我们的服务'"
      >
        <template #content>
          <div class="list">
            <div

              class="fwList"
              v-for="(item2, index2) in getList('我们的服务').solution_list"
              :key="index2"
            >
              <van-image :src="item2.image.url" v-if="item2.image" width="24px" height="24px"></van-image>
              <div class="name">
                {{ item2.name }}
              </div>
              <div class="name_en">
                {{ item2.name_en }}
              </div>
              <div class="describe">
                {{ item2.describe }}
              </div>
            </div>
          </div>
        </template>
      </headerContent>
      <headerContent
        headerImg="ds/headerImage/lxwm.png"
        height="21px"
        width="122px"
        v-else-if="item == '联系我们'"
        id="lxwm"
      >
        <template #content>
         <p  class="lxName">达升物流股份有限公司</p>
          <iText titles="总部电话：" title="0574-87754488"></iText>
          <iText titles="总部传真：" title="0574-87759375"></iText>
          <iText titles="总部地址：" title="宁波市鄞州区中山东路1800号国华金融中心43楼8"></iText>
          <TXMap
                mapWidth="100%"
                mapHeight="130px"
                address="宁波市鄞州区中山东路1800号国华金融中心43楼"
                name="达升物流"
              ></TXMap>
              <div class="h-10"></div>
              <iText titles="官网：" title="www.sws010.com"></iText>
        </template>
      </headerContent>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nameList: {
      type: Array,
      default: [],
    },
    list: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      smList: [
        {
          name: "愿景",
          icon: this.IMG + "ds/icon/yj.png",
          contant:
            "我们是一家全球性的物流服务商。我们是物流行业的领先者，在服务企业和回报社会的同时我们赢得了客户、合作伙伴以及员工的认可和尊重。",
        },
        {
          name: "使命",
          icon: this.IMG + "ds/icon/sm.png",
          contant:
            "我们持续地学习和创新并不断地提高我们的技能和服务水平。我们致力于用先进的技术和领先的经营理念帮助我们的客户成为他们所在行业的领先者。",
        },
        {
          name: "价值观",
          icon: this.IMG + "ds/icon/jzg.png",
          contant:
            "正直为人、诚信立业 严以律己、宽以待人 终身学习、不断创新 持续尝试、永不放弃 企业发展和员工发展同步 企业目标与社会责任一致",
        },
      ],
      zzList: [
        {
          title: "宁波市服务业企业百强34名",
          time: "2022年",
        },
        {
          title: "获得ISO质量体系认证证书",
          time: "2021年",
        },
        {
          title: "中国货运业大奖（金轮奖）",
          time: "2019年",
        },
        {
          title: "连续三年获宁波航运物流企业信用评价A级企业",
          time: "2016~2018年",
        },
      ],
    };
  },
  methods: {
    butTab(id) {
      console.log('zi',id)
      document.getElementById(id).scrollIntoView();
    },
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    },
    getUrl(str){
        return "'"+str+"'"
    },
    getList(name) {
      return this.list.find((item) => item.name == name)?this.list.find((item) => item.name == name):[];
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .title{
  margin-top: 10px !important;
}
.smList {
  display: flex;
  align-items: baseline;
  .smItem {
    width: 5%;
    margin-right: 5px;
  }
  .smItems {
    display: block;
    width: 90%;
    .name {
      color: #333333;
      font-size: 14px;
      margin-bottom: 5px;
    }
    .contantBox {
      display: grid;
      grid-template-columns: 50% 50%;
      column-gap: 10px;
    }
    .contant {
      color: #666666;
      font-size: 12px;
      line-height: 20px;
      display: flex;
      align-items: center;
      .circular {
        width: 5px;
        height: 5px;
        margin-right: 5px;
        border-radius: 3px;
        background-color: #ae2b34;
      }
    }
  }
}
.zzList {
  border: 1px solid #ececec;
  margin-top: 12px;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  .item {
    display: block;
    width: 163px;
    .time {
      color: #999999;
      font-size: 12px;
      margin-bottom: 10px;
    }
    .title {
      color: #333333;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .image {
    margin-left: 12px;
  }
}
.cpList {
  width: 100%;
  height: 200px;
  background-size: 100% 100%;
  padding: 15px 12px;
  margin-top: 10px;
  .name {
    color: #fff;
    font-weight: 700;
    font-size: 14px;
  }
  .xian {
    width: 108px;
    height: 2px;
    background-color: rgba($color: #fff, $alpha: 0.5);
    margin: 4px 0 8px 0;
  }
  .describe {
    font-size: 12px;
    color: rgba($color: #fff, $alpha: 0.5);
    line-height: 17px;

  }
}

.list {
  display: grid;
  grid-template-columns: 49% 49%;
  row-gap: 9px;
  column-gap: 9px;
  .fwList {
      border-radius: 4px;
      background-color: #f6f6f6;
      padding: 12px;
      text-align: center;

      .name {
        font-size: 13px;
        color: #333333;
        line-height: 18px;
      }
      .name_en {
        font-size: 10px;
        color: #ae2b34;
        line-height: 14px;
        margin-bottom: 8px;
      }
      .describe {
        font-size: 10px;
        color: #666666;
        line-height: 15px;
      }
      image {
        margin-bottom: 4px;
      }
    }
}
.h-10{
  height: 10px;
}
.lxName{
  font-size: 16px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 10px;
}
.gyImage{
			background-size: 100% 100%;
			height: 160px;
			width: 100%;
			padding-top: 56px;
			margin-top: 10px;
		}
</style>
