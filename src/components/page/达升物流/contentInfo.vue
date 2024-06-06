<template>
  <div>
    <img :src="IMG + 'ds/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->

      <img class="logo" :src="IMG + 'ds/image/logo.png'" />
      <div class="companyName">达升物流股份有限公司</div>

      <div class="textStyle" v-for="(item,index) in text.split(' ')" :key="index">{{ item }}</div>
      <!-- <van-image  v-if="item.image" :src="item.image.url" width="100%"></van-image> -->
      <div class="gyImage" :style="'background-image:url('+IMG+'ds/image/gy.png)'">
					<van-image :src="IMG+'ds/image/play.png'"  width="48px" height="48px" style="display: flex;margin: auto; "></van-image>
				</div>
    </div>
    <div class="m-x">
     <dsContent :nameList="['使命愿景','资质']" :list="[]"></dsContent>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      IMG: this.IMG,
      text:'达升物流股份有限公司成立于2001年1月，是一家集海运、空运、拼箱、无船承运、项目物流、第三方物流、供应链管理解决方案为一体的综合性国际物流企业，能提供中国至全球进出口物流综合服务；通过打造PLOUTO可视化数字物流平台，致力于成为全球可视化数字物流的领先者，帮助客户成为他们所在行业中的领导者。 达升物流总部位于中国宁波，在洛杉矶、达拉斯、香港、上海、深圳、青岛、天津、厦门、重庆、杭州、萧山、温州、玉环设有分（子）公司；在迈阿密、绍兴、余杭、诸暨设有办事处；在上海浦东国际机场、宁波栎社国际机场设有操作中心；下属二十多家分（子）公司及办事处，拥有500多名员工，年营业收入超过40亿元人民币。同时在海外有三百多家代理，服务网络遍布全球，能够提供从中国全口岸进出口至全球各地的海运、空运及多式联运服务。'
    };
  },
  created() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
.gyImage{
			background-size: 100% 100%;
			height: 160px;
			width: 100%;
			padding-top: 56px;
			margin-top: 10px;
		}
.m-x{
  margin: 12px 16px ;
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
.name{
  font-size: 12px;
  color: #AE2B34;
  margin: 8px 0 ;
}
.companyName {
  font-size: 13px;
  margin: 6px 0 8px 10px;
  color: #AE2B34;
  font-weight: 500;
}
.historyBox {
  border-bottom: 1px double rgba($color: #AE2B34, $alpha: 0.1);
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
    background-color: #AE2B34;
  }
  .item {
    width: 70%;
    margin-left: 10px;
  }
}
</style>
