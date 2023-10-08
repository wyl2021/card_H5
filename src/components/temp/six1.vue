<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <div class="ta-c">
      <van-image class="mb-12" width="122" height='21'
        src="https://akustatic.oss-cn-hangzhou.aliyuncs.com/card/Group%20337%402x%20%282%29.png"></van-image>
    </div>
    <div v-if="info.type ==1">
      <div class="w100 dp-f jc-sb mb-12" v-for="(i,v) in info.planList" :key="v">
        <div class="mr-10 dp-f">
          <van-image width="149" height="93" fit="fill" :src="i.imageUrl" />
          <div class="c-666">
            <p class="ml-10 fs-14"> {{i.title}} </p>
            <p class="ml-10 fs-12"> {{i.content}} </p>
          </div>
        </div>
        <div class="c-666 fs-12 pos-r">
          <p class="pos-a b-0 r-0 w-70 br-4">
            <van-button size="small" class="h-26 br-4" type="danger">{{i.btnText}}</van-button>
          </p>
        </div>
      </div>
    </div>
    <div v-else-if="info.type ==2">
      <div class="planBox1" v-for="(i,v) in info.planList" :key="v" :style="{backgroundImage:`url(${i.imageUrl})`}">
        <div class="mask">
          {{i.title}}
        </div>
      </div>
    </div>
    <div v-else-if="info.type ==3">
      <div class="planBox2" v-for="(i,v) in info.planList" :key="v" :style="{backgroundImage:`url(${i.imageUrl})`}">
        <div class="mask">
          <span class="fs-15 borline">{{i.title}}</span>
          <p class="mt-8 content">我们不只是可以提供中俄运输服务，同时我们也是MCC的全国订舱代理。 我们很清楚所有来自俄罗斯远东的各种额外的询价，我们保证会满足货主所需一切的要求，如果有任何改变，通常我们早已经收到其他代理类似要求
            所以请不要担心，我们保证会把货物安全的从中国送到您的目的地。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },

}
</script>

<style lang="scss" scoped>
.b-0 {
  bottom: 0;
}
.r-0 {
  right: 0;
}
.planBox1 {
  width: 100%;
  height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 9px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  .mask {
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.4);
    height: 33px;
    padding: 8px;
    font-size: 12px;
    color: #fff;
    width: 100%;
  }
}
.planBox2 {
  width: 100%;
  height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 9px;
  position: relative;
  overflow: hidden;
  .mask {
    position: absolute;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.4);
    height: 100%;
    padding: 8px;
    font-size: 12px;
    color: #fff;
    width: 100%;
    padding: 15px 12px;
    .borline {
      padding-bottom: 4px;
      border-bottom: 2px solid #af6c1a;
    }
    .content {
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>