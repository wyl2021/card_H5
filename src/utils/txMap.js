

export default {
  init:function(){
    const mapUrl="https://map.qq.com/api/js?v=2.exp&key=DNSBZ-XIACN-PQPFH-SRJY6-K374V-67FKD&callback=onMapCallback"
      //  const mapUrl="https://map.qq.com/api/gljs?v=1.exp&libraries=service&key=DNSBZ-XIACN-PQPFH-SRJY6-K374V-67FKD"

    return new Promise((resolve)=>{
      ///地图加载异常处理
      window.onMapCallback=function(){
        resolve(qq.maps);
      }
      let scriptLabel=document.createElement('script');
      scriptLabel.setAttribute("type", "text/javascript");
      scriptLabel.setAttribute("src", mapUrl);
      // scriptLabel.setAttribute("src2", mapUrl2);
      document.body.appendChild(scriptLabel);
    })
  }
}
