<template>
  <div class="p-all-12 bg-fff br-8 mb-12 fs-13">
    <div class="ta-c">
      <van-image class="mb-12" width="122" height='21'
        src="https://akustatic.oss-cn-hangzhou.aliyuncs.com/card/telTitle.png"></van-image>
    </div>
    <div v-if="info.type ==1">
      <p class="fs-14 mb-8">深圳市安速国际货运代理有限公司</p>
      <p class="fw-l mb-8">公司地址：<span></span></p>
      <!-- 插入地图 -->
      <p class="fw-l mb-8">联系人：<span class="c-666"></span></p>
      <p class="fw-l mb-8">联系方式：<span class="c-666"></span></p>
      <p class="fw-l mb-8">电子邮件：<span class="c-666"></span></p>
      <p class="fw-l mb-8">公司网址：<span class="c-666"></span></p>
    </div>
    <div v-else-if="info.type ==2">
      <p class="fs-14 mb-8">深圳市安速国际货运代理有限公司</p>
      <div class="address br-4 p-all-10" v-for="(i,v) in info.children" :key="v">
        <div class="fs-13 dp-f ai-c mb-4">
          <p class="line mr-5"></p>
          {{i.name}}
        </div>
        <p class="c-666">{{i.address}}</p>
      </div>
      <p class="fw-l mb-8">电话：<span class="c-666"></span></p>
      <p class="fw-l mb-8">网址：<span class="c-666"></span></p>
      <!-- 插入地图 -->
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
.address{
  margin-bottom: 10px;
  background-color: #F6F6F6;
  .line{
      width: 2px;
      height: 10px;
      background-color:#FD7222;
    }
}
</style>