<template>
  <div>
     <!-- 企业介绍 -->
     <headerContent
      id="qyjs"
      headerImg="ywkj/headerImage/qyjs.png"
      width="131px"
      height="48px"
      v-if="name=='企业介绍'"
    >
      <template #content>

        <van-image class="m-y-8" :src="IMG + 'ywkj/image/jsBg.png'"></van-image>

        <div
          class="textStyle"
          v-for="(item, index) in text.split(' ')"
          :key="index"
        >
          {{ item }}
        </div>
        <div class="m-t-14"></div>

      </template>
    </headerContent>
    <!-- 团队价值观 -->
    <headerContent
      headerImg="ywkj/headerImage/tdjzg.png"
      width="76px"
      height="48px"
      v-if="name=='团队价值观'"
    >
      <template #content>
        <div class="whBox" v-for="(item, index) in whList" :key="index">
          <van-image
            :src="IMG + item.url"
            width="16px"
            height="16px"
          ></van-image>
          <div class="whItem">
            <p class="name">{{ item.name }}</p>
            <p v-if="item.name != '品牌精神'" class="title">{{ item.title }}</p>
            <div
              v-else
              v-for="(item2, index2) in item.list"
              class="title"
              :key="index2"
            >
              <div class="dian"></div>
              {{ item2 }}
            </div>
          </div>
        </div>
      </template>
    </headerContent>
    <!-- 服务项目 -->
    <headerContent
      headerImg="ywkj/headerImage/fwxm.png"
      width="74px"
      height="48px"
      id="fwxm"
      v-if="name=='服务项目'"
    >
      <template #content>
        <listBox v-for="(item,index) in getContent('服务项目')" :key="index"
        :type="1"
          :imageUrl="{
            url: item.image.url,
            width:'149px',
            columWidth:'160px'
          }"
          :name="item.name"
          buttonColor="#E14805"
          :describe="item.describe"
          :pageType="3"
          :id="item.id"
          button="查 看"
        ></listBox>
      </template>
    </headerContent>
    <!-- 联系我们 -->
    <headerContent
      headerImg="ywkj/headerImage/lxwm.png"
      width="100%"
      height="31px"
      id="lxwm"
      v-if="name=='联系我们'"
    >
      <template #content>
        <company-title title="域外电子商务（深圳）有限公司">  </company-title>
       <i-text title="电话：" titles="15521010596"></i-text>
       <i-text title="网站：" titles="www.yuwai123.com"></i-text>
        <div class="m-t-14"></div>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="宁波市江北区环城北路东段291号Jeep4S店"
          name="域外跨境"
        ></TXMap>
      </template>
    </headerContent>
  </div>
</template>

<script>
export default {
  props:{
    name:String,
    list:Array
  },
  data(){
    return{
      text: "域外电子商务（深圳）有限公司致力于为国际顶级电商平台Shopee和Lazada等的卖家提供一站式服务，致力于为商家提供以下服务： 多站点海外仓服务，本土店铺出售，各国当地供应链货源提供，店铺运营孵化， 海外公司/商标注册，全站点测评补单，自研引流软件，店铺回款及广告代充值等一条龙跨境电商服务。业务范围覆盖台湾、马来、菲律宾、泰国、新加坡、巴西、越南等地区。 域外跨境已设立了5个线下网点，公司总部坐落于中国跨境电商核心圈深圳，同时设立了广州两家分公司，泰国子公司，越南子公司，为客户提供及时、周到和专业的服务。",
    }
  },
  methods:{

    getContent(name) {
      const data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
  }
}
</script>

<style lang="scss" scoped>
.m-y-8{
  margin:8px 0;
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
</style>
