webpackJsonp([7],{"2NXm":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("0r7a"),c={data:function(){return{show:!1,id:""}},onload:function(){},created:function(){},computed:{currentComponent:function(){return console.log("扫码",localStorage.getItem("id")),o.a[localStorage.getItem("id")][0]}},methods:{getInfo:function(){var t=this;this.$http.cardUserInfo().then(function(n){console.log("用户登录信息",n),t.userInfo=n.data})},getTest:function(){}}},r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n(this.currentComponent,{tag:"component"}),this._v(" "),n("div",{staticClass:"h-50"})],1)},staticRenderFns:[]};var i=e("VU/8")(c,r,!1,function(t){e("lcDN")},null,null);n.default=i.exports},lcDN:function(t,n){}});
//# sourceMappingURL=7.3feda19b44281ee1578a.js.map