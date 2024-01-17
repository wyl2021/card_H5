<template>
  <div>
    <van-tabs v-model="active" color="#168ED3" title-active-color="#168ED3">
      <van-tab  v-for="(item, index) in tabList" :title="item.name" :key="index">
        <div class="h-10"></div>
        <router-link
          v-for="(item2, index2) in item.dataList"
          :key="index2"
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
    <tabbar :active="1"></tabbar>
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
          name: "公司新闻",
          dataList: [
            {
              imageUrl: require('@/assets/tempfile/ym/image/xw.png'),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            {
              imageUrl: require('@/assets/tempfile/ym/image/xw2.png'),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
            {
              imageUrl: require('@/assets/tempfile/ym/image/xw3.png'),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "快船(直达)船，我们设计此产品是为了解决实体工厂与贸易公司批量货跨省运输既想省钱又想快的难题，海运的价格，公路的速度。",
              title: "",
            },
          ],
        },
        {
          name: "行业新闻",
          dataList: [
            {
              imageUrl: require('@/assets/tempfile/ym/image/xw2.png'),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "当日达物流是指针对快需求客户，打造vip服务，优先派车，随发随走，急速物流，下单后3小时内上门提货。",
              title: "",
            },
            {
              imageUrl: require('@/assets/tempfile/ym/image/xw3.png'),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "当日达物流是指针对快需求客户，打造vip服务，优先派车，随发随走，急速物流，下单后3小时内上门提货。",
              title: "",
            },
            {
              imageUrl: require('@/assets/tempfile/ym/image/xw.png'),
              id: require("@/assets/tempfile/ym/image/content1.png"),
              content:
                "当日达物流是指针对快需求客户，打造vip服务，优先派车，随发随走，急速物流，下单后3小时内上门提货。",
              title: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>

</style>
