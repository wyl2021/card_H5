<!-- 自定义头部模块 -->
<template>
  <div class="p-all-12 bg-fff br-8 mb-12">

  <div class="r">
    <van-image
            :src="require('@/assets/tempfile/gj/headerImage/lxwm.png')"
          ></van-image>
          <div class="r1">宁波市国际联运协会</div>
          <div class="r2">
            <div>公司地址：宁波市鄞州区沧海路1926号上东国际1号楼202室</div>
            <div>电 话：0574-87888569</div>
            <div>邮 箱：nbkafh@vip163.com</div>
            <div>传 真：0574-87888569</div>
            <div>官 网：https://www.nbita.com.cn</div>
          </div>

              <!-- <div class="r3"> -->
                <!-- <van-image class="r3" src="@/assets/tempfile/gj/headerImage/map.png"></van-image> -->
              <!-- </div> -->
        </div>
        <TXMap mapWidth="100%" mapHeight="144px"></TXMap>

        </div>
</template>


<script>
import TXMap from '@/components/temp/TXMap.vue';
export default {

components: {
  TXMap
},
data() {
  return {

  };
},
};
</script>

<style lang="scss">
.r{
  .r1{
    width: 150px;
    height: 25px;
    font-size: 12px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    color: #484848;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top:10px;
    margin-bottom:10px;
  }
  .r2{
    width: 319px;
    height: 120px;
    font-size: 12px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 20px;
    letter-spacing: 1px;


  }

}
.r3{
    display:flex;
    justify-content: space-between;
    width: 320px;
    height: auto;
    justify-content: center;
    // margin-left:10px;
    // position:absolute;

  }

</style>
