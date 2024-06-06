<template>
  <div
    @click="e"
    id="container"
    :style="{ width: mapWidth, height: mapHeight }"
    class="txMap"
  ></div>
</template>

<script >
import TXMap from "@/utils/txMap.js";
import { jsonp } from "vue-jsonp";
import axios from "axios";
// 地图api  https://lbs.qq.com/webApi/javascriptV2/jsGuide/jsOverview
export default {
  props: {
    mapWidth: String,
    mapHeight: String,
    address: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    isTap: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      map: null,
      zoom: 20,
      geocode: null,
      latLng: {
        lat: 39.916527,
        lng: 116.397128,
      },
      isError: false,
    };
  },
  created() {},
  mounted() {
    console.log("接收到的父组件参数：", this.address);
    TXMap.init().then((TXMap) => {
      console.log("12312312", this.$route.query.address);
      this.TXMap = TXMap;
      jsonp("https://apis.map.qq.com/ws/geocoder/v1/", {
        key: "DNSBZ-XIACN-PQPFH-SRJY6-K374V-67FKD",
        output: "jsonp",
        address: this.address != "" ? this.address : this.$route.query.address, //this.$route.q,
      }).then((res) => {
        console.log(res);
        if (res.message == "Success") {
          this.latLng = res.result.location;
          this.isTap ? this.e() : () => {};
          this.isTap
            ? null
            : (this.map = new TXMap.Map(document.getElementById("container"), {
                //配置地图参数
                center: new TXMap.LatLng(this.latLng.lat, this.latLng.lng), //地图中心点 维度，经度
                zoom: this.zoom, //设置缩放级别
                draggable: true, //设置是否可以拖拽
                scrollwheel: true, //设置是否可以滚动
                disableDoubleClickZoom: true, //设置是否可以双击放大
                disableDefaultUI: true, //隐藏所有地图控件
              }));

          var marker = new TXMap.Marker({
            map: this.map,
            position: new TXMap.LatLng(this.latLng.lat, this.latLng.lng), //地图中心点 维度，经度
          });
          var cssSty={
            border:"none !important",
              backgroundColor: "rgba(255,0,0,0) !important",
          }
          var label = new TXMap.Label({
            map: this.map,
            position: new TXMap.LatLng(this.latLng.lat, this.latLng.lng), //地图中心点 维度，经度
            content: this.name ? this.name : this.$route.query.name,
          });
          label.setStyle(cssSty);
          // var anchor = new qq.maps.Point(0, 39),
          //       size = new qq.maps.Size(42, 68),
          //       origin = new qq.maps.Point(0, 0),
          //       icon = new qq.maps.MarkerImage(
          //           "https://aku.card.3dh5.vip/bz.png",
          //           size,
          //           origin,
          //           anchor
          //       );
          // var anchor = new TXMap.Point(0, 39),
          //   size = new TXMap.Size(24, 24),
          //   origin = new TXMap.Point(10, 0),
          //   icon = new TXMap.MarkerImage(
          //     "https://aku.card.3dh5.vip/bz.png",
          //     size,
          //     origin,
          //     anchor
          //   );
          // marker.setIcon(icon);
          //设置Marker的可见性，为true时可见,false时不可见，默认属性为true
          marker.setVisible(true);
        }
      });
    });
  },
  created() {},
  methods: {
    e() {
      // const address = "浙江省宁波市镇海区公园世家";
      this.address ? this.address : this.$route.query.address;
      this.name ? this.name : this.$route.query.name;
      console.log("点击地图", this.address, this.name);
      uni.navigateTo({
        // 跳回小程序的路径
        url:
          "/pages/index/map?latitude=" +
          this.latLng.lat +
          "&longitude=" +
          this.latLng.lng +
          "&address=" +
          this.address +
          "&name=" +
          this.name,
        // 以下回调方法可以不要，如果需要调试的时候可以加上
        success: function (res) {
          console.log("success", res);
        },
        fail: function (res) {
          console.log("fail", res);
        },
        complete: function (res) {
          console.log("complete", res);
        },
      });
    },
    loadMap() {
      new this.TXMap.Circle({
        //向地图中添加圆
        map: this.map, //要显示圆形的地图
        center: new this.TXMap.LatLng(30.228232, 120.051238), //圆形的中心点坐标
        radius: 20, //圆形的半径
        strokeColor: red, //圆形的边框颜色
        fillColor: new this.TXMap.Color(255, 255, 255, 1), //圆形的填充色
        strokeWidth: 1, //圆形的边框线宽
      });
      data.forEach((x) => {
        //向地图中添加多边形区域,data->坐标点数组
        new this.TXMap.Polygon({
          map: this.map,
          path: new this.TXMap.LatLng(x.dots), //dots->坐标点
          fillColor: new this.TXMap.Color.fromHex("#ccc", 0.5), //填充的颜色
          strokeWeight: 0, //边框宽度
        });
      });
      let cssC = {
        //这种方式添加样式更全，适合动态添加样式
        backgroundColor: "#ccc",
        fontSize: "20px",
        lineHeight: "20px",
        borderRadius: "4px",
        color: "#000",
        border: 0,
      };
      let label = new this.TXMap.Label({
        //向地图中添加标签(一个可以随意改变的块元素，而marker自带一个定位点的图片)
        map: this.map,
        zIndex: 12,
        content: "123456", //文本
        offset: new this.TXMap.Size(-10, -10), //偏移量(相对坐标偏移)
        position: new this.TXMap.LatLng(30.228232, 120.051238), //坐标位置
      });
      label.setStyle(cssC);
      data.forEach((x) => {
        //向地图中添加折线
        new this.TXMap.Polyline({
          map: this.map,
          path: new this.TXMap.LatLng(x.dots),
          strokeWeight: 3, // 线条宽度，默认为 1
          StrokeDashStyle: "dash", //线条样式
          strokeColor: "#00f", // 线条颜色
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/.csssprite {
  width: 20px !important;
  height: 20px !important;
  min-width: 20px !important;
  max-width: 20px !important;
  min-height: 20px !important;
  max-height: 20px !important;
}
</style>
