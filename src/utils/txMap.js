

export default {
  init:function(){
    const mapUrl="https://map.qq.com/api/js?v=2.exp&key=DNSBZ-XIACN-PQPFH-SRJY6-K374V-67FKD&callback=onMapCallback"
    return new Promise((resolve)=>{
      ///地图加载异常处理
      window.onMapCallback=function(){
        resolve(qq.maps);
      }
      let scriptLabel=document.createElement('script');
      scriptLabel.setAttribute("type", "text/javascript");
      scriptLabel.setAttribute("src", mapUrl);
      document.body.appendChild(scriptLabel);
    })
  }
}
