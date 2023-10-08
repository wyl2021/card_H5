<template>
  <div class="p-all-12 bg-fff br-8 mb-12">
    <div class="ta-c">
      <van-image class="mb-12" width="122" height='21' :src="require('@/assets/tempfile/img/CompanyItem.png')"></van-image>
    </div>
    <div class="dp-f jc-sb fw-w" v-if="info.type == 1">
      <div class="pBox1" v-for="(i,v) in info.productList" :key="v">
        <van-image fit="cover" width="155" height="155" :src='i.imageUrl'></van-image>
        <div class="mt-8 fs-14">{{i.title}}</div>
      </div>
    </div>
    <div class="dp-f jc-sb fw-w" v-else-if="info.type == 2">
      <div class="pBox2" v-for="(i,v) in info.productList" :key="v" :style="{backgroundImage:`url(${i.imageUrl})`}">
        <div class="mask"></div>
        <div class="c-fff pos-r mt-15">
          <p class="fs-12 mb-5">{{i.title}}</p>
          <p class="minSize">查看详情 <van-icon color="#fff" name="arrow"/></p>
        </div>
      </div>
    </div>
    <div class="" v-else-if="info.type == 3">
      <div class="w100 dp-f jc-sb mb-12" v-for="(i,v) in info.productList" :key="v">
        <div class="mr-10 dp-f">
          <van-image width="149" height="93" fit="fill" :src="i.imageUrl" />
          <span class="ml-10 fs-14"> {{i.title}} </span>
        </div>
        <div class="c-666 fs-12 pos-r">
          <p class="pos-a b-0 r-0 w-65">
            查看详情 <van-icon name="arrow"/>
          </p>
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
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.pBox1 {
  width: 155px;
  height: 195px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px 8px 8px 8px;
  text-align: center;
  overflow: hidden;
  margin-bottom: 9px;
}
.pBox2 {
  width: 155px;
  height: 167px;
  border-radius: 4px 4px 4px 4px;
  background-size: cover;
  margin-bottom: 9px;
  text-align: center;
  position: relative;
  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .minSize{
    font-size: .1rem;
    transform: scale(0.7);
  }
}
.b-0{
  bottom: 0;
}
.r-0{
  right: 0;
}
</style>