<!-- 第三个页面 -->
<template>
  <div>
    <van-tabs v-model="active" color="#0E58A3" title-active-color="#0E58A3">
      <van-tab v-for="(item, index) in tabList" :title="item.name" :key="index">
        <list-box-1
        :dataListId="item2.id"
          :key="index2"
          v-for="(item2, index2) in item.dataList"
          :title="item2.title"
          :content="item2.content"
          :imageUrl="item2.imageUrl"
        ></list-box-1>
      </van-tab>
    </van-tabs>
    <div class="h-50"></div>
    <tabbar :active="2"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
import listBox1 from "../components/temp/listBox/listBox1.vue";
export default {
  components: {
    tabbar,
    listBox1,
  },
  data() {
    return {
      tabList: [
        {
          name: "国内海运",
          dataList: [
            {
              imageUrl: require('@/assets/tempfile/aj/image/gnhy1.png'),
              id: require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            {
              imageUrl:  require('@/assets/tempfile/aj/image/gnhy1.png'),
              id:  require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "普货集装箱海运是按照货物比重特性，可选择20尺或40尺集装箱的运输服务，具有方便快捷、装载量大、无货损、安全、运费低的优点。",
              title: "",
            },
            {
              imageUrl:  require('@/assets/tempfile/aj/image/gnhy1.png'),
              id: require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "为降低长距离运输产品易腐烂易变质的问题，并且降低运输成本，采用冷冻集装箱运输，可根据货物需求，长时间保持-30~30度的恒温...",
              title: "",
            },
            {
              imageUrl: require('@/assets/tempfile/aj/image/gnhy1.png'),
              id:require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "液体集装箱海运是针对液体产品专属定制的海运方案，相较于传统罐式集装箱成本更低的同时，可多装载40%的货物。液袋装卸方便...",
              title: "",
            },
          ],
        },
        {
          name: "公路运输",
          dataList: [
            {
              imageUrl: require('@/assets/tempfile/aj/image/gnhy1.png'),
              id: require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "当日达物流是指针对快需求客户，打造vip服务，优先派车，随发随走，急速物流，下单后3小时内上门提货。",
              title: "",
            },
            {
              imageUrl: require('@/assets/tempfile/aj/image/gnhy1.png'),
              id: require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "次日达是指今发明至，结合时效需求，安排运输车辆，24小时送内达，省内运输的首要选择。",
              title: "",
            },
            {
              imageUrl:require('@/assets/tempfile/aj/image/gnhy1.png'),
              id: require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "隔日达是指今天发货，明天就能到达，24小时就能送达，是省内运输的更优选择。",
              title: "",
            },
            {
              imageUrl: require('@/assets/tempfile/aj/image/gnhy1.png'),
              id: require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "跨省整车是门到门运输的首要选择，可提前预约，选择更合适的车辆，获得更优惠的价格。",
              title: "",
            },
            {
              imageUrl:require('@/assets/tempfile/aj/image/gnhy1.png'),
              id:require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "大件运输主要是针对大件物品制定的运输服务，优先调用大型重型拖车(特种车辆)保障大型货物的运输。",
              title: "",
            },
          ],
        },

        {
          name: "港装/港拆",
          dataList: [
            {
              imageUrl: require('@/assets/tempfile/aj/image/gnhy1.png'),
              id: require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "港装港拆适用于集装箱车辆无法进厂或特殊货物工厂没有专用设备进行装卸，我们会提供专门的装卸货地点，以及专用设备进行装箱、拆箱...",
              title: "",
            },
          ],
        },
        {
          name: "项目物流",
          dataList: [
            {
              imageUrl: require('@/assets/tempfile/aj/image/gnhy1.png'),
              id: require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "围绕中大型实体企业与工厂批量货跨省运输，提供量身定制的运输方案，适用于工厂对一个或多个地点的产品批量运输，签订专属服务...",
              title: "",
            },
          ],
        },
        {
          name: "新能源物流",
          dataList: [
            {
              imageUrl: require('@/assets/tempfile/aj/image/gnhy1.png'),
              id: require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "新能源产业相关的产品运输，并为其制定专属的运输方案，可根据工厂要求，安排货物运输，节省人力物力，获得更好的运输效果，更低的...",
              title: "",
            },
          ],
        },
        {
          name: "新能源物流",
          dataList: [
            {
              imageUrl: require('@/assets/tempfile/aj/image/gnhy1.png'),
              id: require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "新能源产业相关的产品运输，并为其制定专属的运输方案，可根据工厂要求，安排货物运输，节省人力物力，获得更好的运输效果，更低的...",
              title: "",
            },
          ],
        },
        {
          name: "新能源物流",
          dataList: [
            {
              imageUrl: require('@/assets/tempfile/aj/image/gnhy1.png'),
              id: require('@/assets/tempfile/aj/cantent/kcc.png'),
              content:
                "新能源产业相关的产品运输，并为其制定专属的运输方案，可根据工厂要求，安排货物运输，节省人力物力，获得更好的运输效果，更低的...",
              title: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" >



</style>
