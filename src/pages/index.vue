<template>
  <div class="home">
    <div class="home-main">
      <div v-for="(el,ind) in configHome" :key="ind">
        <template v-if="el.srot ==1">
          <!-- <rotate3DCard trigger="click" ref="3DCard" direction="row" v-model="card3dValue">
          </rotate3DCard> -->
          <!-- <tempTop1 :info='el' /> -->
          <tempTop2 :info='el' />
          <!-- <tempTop3  :info='el' />
          <tempTop4 :info='el' />
          <tempTop5  :info='el' />
          <tempTop6 :info='el' /> -->
        </template>
        <template v-else-if="el.srot == 2">
          <!-- <tempTwo1 :info='el'></tempTwo1> -->
          <tempTwo2 :info='el'></tempTwo2>
        </template>
        <template v-else-if="el.srot == 3">
          <tempThree1 :info='el'></tempThree1>
        </template>
        <template v-else-if="el.srot == 4">
          <four1 :info='el'></four1>
        </template>
        <template v-else-if="el.srot == 5">
          <five1 :info='el'></five1>
        </template>
        <template v-else-if="el.srot == 6">
          <six1 :info='el'></six1>
        </template>
        <template v-else-if="el.srot == 7">
          <seven1 :info='el'></seven1>
        </template>
      </div>
    </div>
    <div class="h-100"></div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/index.vue'
import rotate3DCard from '@/components/rotate3DCard/index.vue'
import tempTop1 from '@/components/temp/top1.vue'
import tempTop2 from '@/components/temp/top2.vue'
import tempTop3 from '@/components/temp/top3.vue'
import tempTop4 from '@/components/temp/top4.vue'
import tempTop5 from '@/components/temp/top5.vue'
import tempTop6 from '@/components/temp/top6.vue'
import tempTwo1 from '@/components/temp/two1.vue'
import tempTwo2 from '@/components/temp/two2.vue'
import tempThree1 from '@/components/temp/three1.vue'
import four1 from '@/components/temp/four1.vue'
import five1 from '@/components/temp/five1.vue'
import six1 from '@/components/temp/six1.vue'
import seven1 from '@/components/temp/seven1.vue'
export default {
  components: { tabbar, tempTop1, tempTop2, tempTop3, tempTop4, tempTop5, tempTop6, rotate3DCard ,
    tempTwo1,tempTwo2,tempThree1,four1,five1,six1,seven1
  },
  data() {
    return {
      card3dValue: true,
      topHeight:0,
      configHome: [
        {
          bgImage: require('@/assets/tempfile/img/carBg.png'),
          customerName: '阿库技术',
          customerLogo: '',
          post: '总经理',
          customerPhone: '18291900927',
          customerEmail: 'zeng@meixxx.com',
          customerAddress: '宁波市鄞州区翔云北路199号深蓝大厦19层',
          phoneIcon: '',
          emailIcon: '',
          addressIcon: '',
          srot: 1,
        },
        {
          srot: 2,
        },
        {
          srot: 3,
        },
        {
          srot: 4,
          imageList:[
            'https://akustatic.oss-cn-hangzhou.aliyuncs.com/card/Mask.png',
            'https://akustatic.oss-cn-hangzhou.aliyuncs.com/card/Mask1.png',
            'https://akustatic.oss-cn-hangzhou.aliyuncs.com/card/Mask.png',
          ],
          row:1,
          text:'宁波阿库网络技术有限公司成立于2017年，是一家高新技术企业，专注于服务中小企业的数字化和企业智能化转型，提供一套完整解决方案及服务。 在业务方面上深耕于数字孪生可视化及VR科技、企业级SaaS产品/定制化开发服务，还有企业数字化/智能化解决方案，此外也提供企业信息咨询与规划服务、云计算咨询及运维服务。'
        },
        {
          srot: 5,
          type:3,
          productList:[
            {title: '产品名称',imageUrl:'https://akustatic.oss-cn-hangzhou.aliyuncs.com/card/Mask4.png'},
            {title: '产品名称',imageUrl:'https://akustatic.oss-cn-hangzhou.aliyuncs.com/card/Mask.png'},
            {title: '产品名称',imageUrl:'https://akustatic.oss-cn-hangzhou.aliyuncs.com/card/Mask3.png'},
          ]
        },
        {
          srot: 6,
          type:3,
          planList:[
            {imageUrl:"https://akustatic.oss-cn-hangzhou.aliyuncs.com/card/Mask6.png",content:'Smart Community',title:'智慧社区管理平台',btnText:"查看方案"},
            {imageUrl:"https://akustatic.oss-cn-hangzhou.aliyuncs.com/card/Mask6.png",content:'Smart Community',title:'智慧社区管理平台',btnText:"查看方案"},
            {imageUrl:"https://akustatic.oss-cn-hangzhou.aliyuncs.com/card/Mask6.png",content:'Smart Community',title:'智慧社区管理平台',btnText:"查看方案"},
          ]
        },
        {
          srot: 7,
          type:2,
          children:[
            {name:'总公司地址',address:"深圳市龙岗区平湖街道禾花社区富安大道8号海源国际金融中心708单元"},
            {name:'东莞分公司地址',address:"东莞市南城街道天安数码城A1栋908"},
            {name:'东莞仓库地址',address:"东莞市塘厦镇桥蛟中路1号好运童园科技园B2栋"},
            {name:'广州分公司地址',address:"广州市白云区石沙路石井国际大厦2号楼1013"},
          ]
        }
      ]
    }
  },
  created() { },
  watch: {
    configHome: {
      handler(val) {
        setTimeout(() => {
          // this.topHeight = this.$refs['3DCard'][0].getCardHeight()
        },1000)
      },
      deep: true,
      immediate: true
    },
    card3dValue(){
      this.topHeight = this.$refs['3DCard'][0].getCardHeight()
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  &-main {
    min-height: 100vh;
    overflow-y: scroll;
    width: 343px;
    margin: 0 auto;
    padding: 20px 0;
  }
}
</style>