webpackJsonp([7],{"7cSk":function(t,i){},V2QJ:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o={data:function(){return{solutionImgList:[]}},created:function(){this.getDetail()},methods:{getDetail:function(t){var i=this;console.log("1231231",this.$route.query.id),this.$http.categorySolutionTypeDetail({id:this.$route.query.id}).then(function(t){console.log(t),200==t.code&&t.data.solution_image!=[]&&t.data.solution_image.forEach(function(t){i.solutionImgList.push(t.url)}),console.log(i.solutionImgList)})}}},n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"p-page"},this._l(this.solutionImgList,function(t,e){return i("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:t}})}),0)},staticRenderFns:[]};var s=e("VU/8")(o,n,!1,function(t){e("7cSk")},null,null);i.default=s.exports}});
//# sourceMappingURL=7.0cd0a2a0b7b778232cc3.js.map