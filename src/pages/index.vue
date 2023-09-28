<template>
  <div class="home">
    <div class="home-main">
      <div v-for="(el,ind) in configHome" :key="ind">
        <div class="first" v-if="el.srot ==1" :style="{height:firstHeight+'px'}">
          <el-image class="bg" fit="scale-down" :src="el.bgImage" />
          <div class="content h100">
            <div class="content-top c-333">
              <div class="fw-b fs-16">{{ el.customerName }}</div>
              <div class="fs-12">{{ el.post }}</div>
            </div>
            <div class="content-bottom c-666 fs-12"> 
              <div class="dp-f">
                {{ el.customerPhone }}
              </div>
              <div class="dp-f">
                {{ el.customerEmail }}
              </div>
              <div class="dp-f">
                {{ el.customerAddress }}
              </div>
            </div>
          </div>
        </div>
        <div class="two pt-20 pb-20 pr-20 pl-20 w100 bg-fff br-8">
          <!-- <div class="two-top"></div> -->
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/index.vue'
import {getImageSize} from '@/utils/file.js'
export default {
  components: { tabbar },
  data() {
    return {
      firstWidth:0,
      firstHeight:0,
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

        }
      ]
    }
  },
  created(){},
  mounted(){
    this.firstWidth = document.querySelector('.first').clientWidth
    this.getFirstHeight(this.configHome[0].bgImage)
  },
  methods: {
    //计算头部背景图片高度
    getFirstHeight(url){
        if(this.firstWidth){
          getImageSize(url,(width,height)=>{
            this.firstHeight= (height/width*this.firstWidth)
          })
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  &-main {
    min-height: 100vh;
    overflow-y: scroll;
    padding: 12px 16px;
    .first {
      position: relative;
      box-sizing: border-box;
      padding-right: 10px;
      margin-bottom: 12px;
      .bg{
        position: absolute;
        top:0px;
        height: auto;
        width: auto;
        max-width: 100%;
        max-height: 100%;
      }
      .content{
        position: relative;
        margin-left: 40%;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
}
</style>