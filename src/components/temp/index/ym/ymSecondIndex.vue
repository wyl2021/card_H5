<template>
  <div>
    <van-tabs v-model="active" color="#168ED3" title-active-color="#168ED3">
      <van-tab v-for="(item, index) in tabList" :title="item.name" :key="index">
        <div class="h-10"></div>
        <router-link
          v-for="(item2, index2) in item.dataList"
          :to="{
            path: '/solutionInfo',
            name: 'solutionInfo',
            params: {
              id: item2.id,
            },
          }"
        >
          <van-image style="margin:0 12px 5px 12px;" :src="item2.imageUrl"></van-image>
        </router-link>
      </van-tab>
    </van-tabs>
    <div class="h-50"></div>
    <tabbar :active="2"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
import listBox1 from "@/components/temp/listBox/listBox1.vue";
export default {
  components: {
    tabbar,
    listBox1,
  },
  data() {
    return {
      tabList: [
        {
          name: "欧洲渠道",
          dataList: [
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd3.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd2.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd6.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd7.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            // {
            //   imageUrl: require("@/assets/tempfile/ym/image/qd2.png"),
            //   id: require("@/assets/tempfile/ym/image/content1.png"),
            //   content:
            //     "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
            //   title: "",
            // },
            // {
            //   imageUrl: require("@/assets/tempfile/ym/image/qd4.png"),
            //   id: require("@/assets/tempfile/ym/image/content1.png"),
            //   content:
            //     "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
            //   title: "",
            // },
          ],
        },
        {
          name: "美国渠道",
          dataList: [
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd2.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "当日达物流是指针对快需求客户，打造vip服务，优先派车，随发随走，急速物流，下单后3小时内上门提货。",
              title: "",
            },
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd1.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd5.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd3.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            // {
            //   imageUrl: require("@/assets/tempfile/ym/image/qd4.png"),
            //   id: require("@/assets/tempfile/ym/image/content1.png"),
            //   content:
            //     "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
            //   title: "",
            // },
            // {
            //   imageUrl: require("@/assets/tempfile/ym/image/qd7.png"),
            //   id: require("@/assets/tempfile/ym/image/content1.png"),
            //   content:
            //     "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
            //   title: "",
            // },
          ],
        },

        {
          name: "加拿大渠道",
          dataList: [
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd2.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "港装港拆适用于集装箱车辆无法进厂或特殊货物工厂没有专用设备进行装卸，我们会提供专门的装卸货地点，以及专用设备进行装箱、拆箱...",
              title: "",
            },
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd3.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd1.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd6.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            // {
            //   imageUrl: require("@/assets/tempfile/ym/image/qd1.png"),
            //   id: require("@/assets/tempfile/ym/image/content1.png"),
            //   content:
            //     "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
            //   title: "",
            // },
            // {
            //   imageUrl: require("@/assets/tempfile/ym/image/qd5.png"),
            //   id: require("@/assets/tempfile/ym/image/content1.png"),
            //   content:
            //     "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
            //   title: "",
            // },
          ],
        },
        {
          name: "英国渠道",
          dataList: [
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd1.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "围绕中大型实体企业与工厂批量货跨省运输，提供量身定制的运输方案，适用于工厂对一个或多个地点的产品批量运输，签订专属服务...",
              title: "",
            },
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd3.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd6.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            {
              imageUrl: require("@/assets/tempfile/ym/image/qd7.png"),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            // {
            //   imageUrl: require("@/assets/tempfile/ym/image/qd4.png"),
            //   id: require("@/assets/tempfile/ym/image/content1.png"),
            //   content:
            //     "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
            //   title: "",
            // },
            // {
            //   imageUrl: require("@/assets/tempfile/ym/image/qd5.png"),
            //   id: require("@/assets/tempfile/ym/image/content1.png"),
            //   content:
            //     "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
            //   title: "",
            // },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>
