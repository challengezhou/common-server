webpackJsonp([1],{"1BSC":function(t,n){},"7Otq":function(t,n,o){t.exports=o.p+"static/img/logo.653e2c3.png"},NHnr:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o("/5sW"),l=o("mtWM"),s=o.n(l),r={name:"HelloWorld",data:function(){return{nowFood:"",allFoods:[],intervalState:!0,nowInterval:0}},props:{msg:String},mounted:function(){this.getAllFoods(),this.startInterval()},methods:{getAllFoods:function(){var t=this;s.a.get("https://challengezhou.github.io/common-server/z/foods").then(function(n){n.data.split("\n").forEach(function(n){n&&t.allFoods.push(n)}),console.log("数据：",t.allFoods)})},startInterval:function(){var t=this,n=0;this.nowInterval=setInterval(function(){t.nowFood=t.allFoods[n%t.allFoods.length],n++},80)},foodClick:function(){console.log(this.nowInterval),this.intervalState?(clearInterval(this.nowInterval),this.intervalState=!1):(this.startInterval(),this.intervalState=!0)}}},a={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"hello"},[o("h1",[t._v(t._s(t.msg))]),t._v(" "),o("div",{staticClass:"food-container",on:{click:t.foodClick}},[t._v("\n    "+t._s(t.nowFood)+"\n  ")])])},staticRenderFns:[]};var i={name:"App",components:{HelloWorld:o("VU/8")(r,a,!1,function(t){o("SUT+")},"data-v-5c8223c3",null).exports}},c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{src:o("7Otq")}}),this._v(" "),n("HelloWorld",{attrs:{msg:"自动化决策系统"}})],1)},staticRenderFns:[]};var d=o("VU/8")(i,c,!1,function(t){o("1BSC")},null,null).exports;e.a.config.productionTip=!1,new e.a({el:"#app",render:function(t){return t(d)}})},"SUT+":function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.6474d07955f31e3314d8.js.map