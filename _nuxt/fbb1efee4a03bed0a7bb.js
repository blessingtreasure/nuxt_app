(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{466:function(t,e,r){var content=r(503);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("4723b4ce",content,!0,{sourceMap:!1})},467:function(t,e,r){var content=r(505);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("64215cce",content,!0,{sourceMap:!1})},502:function(t,e,r){"use strict";var o=r(466);r.n(o).a},503:function(t,e,r){(e=r(11)(!1)).push([t.i,'.search-form[data-v-6aad12c0]{border:1px solid #ddd;border-top:none;width:360px;height:350px;box-sizing:border-box}.search-tab span[data-v-6aad12c0]{display:block;flex:1;text-align:center;height:48px;line-height:42px;box-sizing:border-box;border-top:3px solid #eee;background:#eee}.search-tab .active[data-v-6aad12c0]{border-top-color:orange;background:#fff}.search-tab i[data-v-6aad12c0]{margin-right:5px;font-size:18px}.search-tab i[data-v-6aad12c0]:first-child{font-size:16px}.search-form-content[data-v-6aad12c0]{padding:15px 50px 15px 15px;position:relative}.search-form-content .el-autocomplete[data-v-6aad12c0]{width:100%}.reverse[data-v-6aad12c0]{position:absolute;top:35px;right:15px}.reverse[data-v-6aad12c0]:after,.reverse[data-v-6aad12c0]:before{display:block;content:"";position:absolute;left:-35px;width:25px;height:1px;background:#ccc}.reverse[data-v-6aad12c0]:after{top:0}.reverse[data-v-6aad12c0]:before{top:60px}.reverse span[data-v-6aad12c0]{display:block;position:absolute;top:20px;right:0;font-size:12px;background:#999;color:#fff;width:20px;height:20px;line-height:18px;text-align:center;border-radius:2px;cursor:pointer}.reverse span[data-v-6aad12c0]:after,.reverse span[data-v-6aad12c0]:before{display:block;content:"";position:absolute;left:10px;width:1px;height:20px;background:#ccc}.reverse span[data-v-6aad12c0]:after{top:-20px}.reverse span[data-v-6aad12c0]:before{top:20px}',""]),t.exports=e},504:function(t,e,r){"use strict";var o=r(467);r.n(o).a},505:function(t,e,r){(e=r(11)(!1)).push([t.i,".air-sale[data-v-31e30dc4]{border:1px solid #ddd;padding:20px;margin-bottom:50px}.air-sale .air-sale-pic>div[data-v-31e30dc4]{width:225px;height:140px;position:relative;overflow:hidden}.air-sale .air-sale-pic>div img[data-v-31e30dc4]{width:100%}.air-sale .air-sale-pic>div .layer-bar[data-v-31e30dc4]{position:absolute;bottom:0;left:0;background:rgba(0,0,0,.5);color:#fff;height:30px;line-height:30px;width:100%;box-sizing:border-box;padding:0 15px;font-size:14px}.air-sale .air-sale-pic>div .layer-bar span[data-v-31e30dc4]:last-child{font-size:18px}.air-sale-group[data-v-31e30dc4]{margin-top:20px;padding-top:8px;border-right:1px solid #eee}.air-sale-group[data-v-31e30dc4]:last-child{border-right:none}.air-sale-group .air-sale-row[data-v-31e30dc4]{font-size:12px;color:#666;margin-bottom:8px}.air-sale-group .air-sale-row .air-sale-price[data-v-31e30dc4]{color:orange;font-size:20px}.container[data-v-31e30dc4]{width:1000px;margin:0 auto}.air-title[data-v-31e30dc4]{margin:15px 0;font-weight:400;color:orange}.air-title[data-v-31e30dc4],.air-title span[data-v-31e30dc4]{font-size:20px}.statement[data-v-31e30dc4]{margin:15px 0;border:1px solid #ddd;background:#f5f5f5;height:58px;padding:10px 0;box-sizing:border-box}.statement>div[data-v-31e30dc4]{text-align:center;line-height:38px;border-right:1px solid #ddd}.statement>div[data-v-31e30dc4]:last-child{border-right:none}.statement>div *[data-v-31e30dc4]{vertical-align:middle}.statement>div i[data-v-31e30dc4]{font-size:30px}.air-sale-title[data-v-31e30dc4]{margin:15px 0;font-size:20px;font-weight:400;color:#409eff}.air-sale-title span[data-v-31e30dc4]{font-size:20px}",""]),t.exports=e},592:function(t,e,r){"use strict";r.r(e);r(25),r(64);var o={data:function(){return{tabs:[{icon:"iconfont icondancheng",name:"单程"},{icon:"iconfont iconshuangxiang",name:"往返"}],currentTab:0,form:{departCity:"",departCode:"",destCity:"",destCode:"",departDate:""},departCities:[],destCities:[],pickerOptions:{disabledDate:function(time){return time.getTime()<Date.now()-864e5}},rules:{departCity:[{required:!0,message:"请选中出发城市",trigger:"abc"}],destCity:[{required:!0,message:"请选中到达城市",trigger:"abc"}],departDate:[{required:!0,message:"请选中出发时间",trigger:"abc"}]}}},methods:{getCities:function(t){return this.$axios({url:"/airs/city",params:{name:t}}).then((function(t){return t.data.data.map((function(t){return t.value=t.name.replace("市",""),t}))}))},handleSearchTab:function(t,e){1===e&&this.$alert("当前暂不支持往返机票","提示",{confirmButtonText:"确定"})},queryDepartSearch:function(t,e){var r=this;if(!t)return e([]),void(this.departCities=[]);this.$refs.form.validateField("departCity"),this.getCities(t).then((function(t){r.departCities=t,e(t)}))},handlDepartBlur:function(){this.departCities.length>0&&(this.form.departCity=this.departCities[0].value,this.form.departCode=this.departCities[0].sort)},queryDestSearch:function(t,e){var r=this;if(!t)return e([]),void(this.destCities=[]);this.$refs.form.validateField("destCity"),this.getCities(t).then((function(t){r.destCities=t,e(t)}))},handlDestBlur:function(){this.destCities.length>0&&(this.form.destCity=this.destCities[0].value,this.form.destCode=this.destCities[0].sort)},handleDepartSelect:function(t){this.form.departCode=t.sort},handleDestSelect:function(t){this.form.destCode=t.sort},handleDate:function(t){},handleReverse:function(){var t=this.form,e=t.departCity,r=t.departCode,o=t.destCity,n=t.destCode;this.form.destCity=e,this.form.destCode=r,this.form.departCity=o,this.form.departCode=n},handleSubmit:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.$store.commit("air/setSearchList",t.form),t.$router.push({path:"/air/flights",query:t.form}))}))}},mounted:function(){}},n=(r(502),r(13)),d={data:function(){return{sales:[]}},components:{SearchForm:Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-form"},[r("el-row",{staticClass:"search-tab",attrs:{type:"flex"}},t._l(t.tabs,(function(e,o){return r("span",{key:o,class:{active:o===t.currentTab},on:{click:function(r){return t.handleSearchTab(e,o)}}},[r("i",{class:e.icon}),t._v("\n            "+t._s(e.name)+"\n        ")])})),0),t._v(" "),r("el-form",{ref:"form",staticClass:"search-form-content",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"出发城市",prop:"departCity"}},[r("el-autocomplete",{staticClass:"el-autocomplete",attrs:{"fetch-suggestions":t.queryDepartSearch,placeholder:"请搜索出发城市"},on:{select:t.handleDepartSelect,blur:t.handlDepartBlur},model:{value:t.form.departCity,callback:function(e){t.$set(t.form,"departCity",e)},expression:"form.departCity"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"到达城市",prop:"destCity"}},[r("el-autocomplete",{staticClass:"el-autocomplete",attrs:{"fetch-suggestions":t.queryDestSearch,placeholder:"请搜索到达城市"},on:{select:t.handleDestSelect,blur:t.handlDestBlur},model:{value:t.form.destCity,callback:function(e){t.$set(t.form,"destCity",e)},expression:"form.destCity"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"出发时间",prop:"departDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择日期","value-format":"yyyy-MM-dd","picker-options":t.pickerOptions},on:{change:t.handleDate},model:{value:t.form.departDate,callback:function(e){t.$set(t.form,"departDate",e)},expression:"form.departDate"}})],1),t._v(" "),r("el-form-item",{attrs:{label:""}},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleSubmit}},[t._v("搜索")])],1),t._v(" "),r("div",{staticClass:"reverse"},[r("span",{on:{click:t.handleReverse}},[t._v("换")])])],1)],1)}),[],!1,null,"6aad12c0",null).exports},mounted:function(){var t=this;this.$axios({url:"/airs/sale"}).then((function(e){var data=e.data.data;t.sales=data}))}},c=(r(504),Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[t._m(0),t._v(" "),r("el-row",{attrs:{type:"flex",justify:"space-between"}},[r("SearchForm"),t._v(" "),r("div",{staticClass:"sale-banner"},[r("img",{attrs:{src:"http://157.122.54.189:9093/images/pic_sale.jpeg"}})])],1),t._v(" "),r("el-row",{staticClass:"statement",attrs:{type:"flex"}},[r("el-col",{attrs:{span:8}},[r("i",{staticClass:"iconfont iconweibiaoti-_huabanfuben",staticStyle:{color:"#409EFF"}}),t._v(" "),r("span",[t._v("100%航协认证")])]),t._v(" "),r("el-col",{attrs:{span:8}},[r("i",{staticClass:"iconfont iconbaozheng",staticStyle:{color:"green"}}),t._v(" "),r("span",[t._v("出行保证")])]),t._v(" "),r("el-col",{attrs:{span:8}},[r("i",{staticClass:"iconfont icondianhua",staticStyle:{color:"#409EFF"}}),t._v(" "),r("span",[t._v("7x24小时服务")])])],1),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"air-sale"},[r("el-row",{staticClass:"air-sale-pic",attrs:{type:"flex",justify:"space-between"}},t._l(t.sales,(function(e,o){return r("el-col",{key:o,attrs:{span:6}},[r("nuxt-link",{attrs:{to:"/air/flights?departCity="+e.departCity+"&departCode="+e.departCode+"&destCity="+e.destCity+"&destCode="+e.destCode+"&departDate="+e.departDate}},[r("img",{attrs:{src:e.cover}}),t._v(" "),r("el-row",{staticClass:"layer-bar",attrs:{type:"flex",justify:"space-between"}},[r("span",[t._v(t._s(e.departCity)+"-"+t._s(e.destCity))]),t._v(" "),r("span",[t._v("￥"+t._s(e.price))])])],1)],1)})),1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"air-title"},[e("span",{staticClass:"iconfont iconfeiji"}),this._v(" "),e("i",[this._v("国内机票")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"air-sale-title"},[e("span",{staticClass:"iconfont icontejiajipiao"}),this._v(" "),e("i",[this._v("特价机票")])])}],!1,null,"31e30dc4",null));e.default=c.exports}}]);