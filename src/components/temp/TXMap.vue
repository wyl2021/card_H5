<template>
  <div @click="e"  id="container" :style="{width:mapWidth,height:mapHeight}" class="txMap">
  </div>
</template>

<script >
import TXMap from "@/utils/TXMap";
// 地图api  https://lbs.qq.com/webApi/javascriptV2/jsGuide/jsOverview
export default {
  props:{
    mapWidth:String,
    mapHeight:String
  },
  data(){
    return{
      map:null,
      zoom:10
    }
  },
  mounted(){
    TXMap.init().then((TXMap) => {
      this.TXMap = TXMap;
      this.map = new TXMap.Map(document.getElementById("container"), {
        //配置地图参数
        center: new TXMap.LatLng(39.916527,116.397128), //地图中心点 维度，经度
        zoom: this.zoom, //设置缩放级别
        draggable: true, //设置是否可以拖拽
        scrollwheel: true, //设置是否可以滚动
        disableDoubleClickZoom: true, //设置是否可以双击放大
        disableDefaultUI: true, //隐藏所有地图控件

      });

    });
  },
  created(){

  },
  methods:{
    e(){
      let navigationLink = `https://maps.google.com/maps?daddr=30.228232, 120.051238`;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.open(navigationLink);
    } else {
      alert('该功能仅支持移动端');
    }
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
    }
  }
}
</script>

<style>

</style>
