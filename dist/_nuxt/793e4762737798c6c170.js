(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{482:function(t,e,r){var content=r(534);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("1f36b054",content,!0,{sourceMap:!1})},483:function(t,e,r){var content=r(536);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("220a5144",content,!0,{sourceMap:!1})},484:function(t,e,r){var content=r(538);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("de2a5790",content,!0,{sourceMap:!1})},533:function(t,e,r){"use strict";var n=r(482);r.n(n).a},534:function(t,e,r){(e=r(11)(!1)).push([t.i,".air-column[data-v-1bf7589c]{border-bottom:1px dashed #ddd;padding-bottom:20px;margin-bottom:20px}.air-column h2[data-v-1bf7589c]{margin-bottom:20px;font-size:22px;font-weight:400}[data-v-1bf7589c] .el-select .el-input{width:130px}.input-with-select[data-v-1bf7589c]{width:590px}.input-with-select[data-v-1bf7589c] .el-input-group__prepend{background-color:#fff}.member-info[data-v-1bf7589c] .el-form-item{margin-bottom:0}.member-info-item[data-v-1bf7589c]{border-bottom:1px dashed #eee;padding-bottom:20px;position:relative}.member-info-item:first-child .delete-user[data-v-1bf7589c]{display:none}.add-member[data-v-1bf7589c]{margin-top:20px}.delete-user[data-v-1bf7589c]{display:block;background:#ddd;width:16px;height:16px;font-size:14px;text-align:center;line-height:16px;color:#fff;cursor:pointer;border-radius:50px;position:absolute;right:-30px;top:50%}.insurance>div[data-v-1bf7589c]{margin-top:10px}.insurance-item[data-v-1bf7589c]{margin-bottom:20px}.contact[data-v-1bf7589c] .el-input{width:50%}.submit[data-v-1bf7589c]{margin:50px auto;display:block;width:250px;height:50px}",""]),t.exports=e},535:function(t,e,r){"use strict";var n=r(483);r.n(n).a},536:function(t,e,r){(e=r(11)(!1)).push([t.i,".aside[data-v-1e7a8272]{width:350px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border:1px solid #ddd}.air-info[data-v-1e7a8272]{padding:15px}.air-info .info-top[data-v-1e7a8272]{margin-bottom:10px}.air-info .info-top>div[data-v-1e7a8272]:last-child{font-size:14px}.air-info .info-step .flight-airport strong[data-v-1e7a8272]{display:block;font-size:22px;font-weight:400}.air-info .info-step .flight-airport span[data-v-1e7a8272]{font-size:12px;color:#999}.air-info .info-step .flight-time[data-v-1e7a8272]{text-align:center;font-size:12px;color:#999}.air-info .info-step .flight-time span[data-v-1e7a8272]{display:block}.info-bar[data-v-1e7a8272]{border-top:1px dashed #ddd;padding:10px 15px;font-size:14px;color:#666}.info-bar .price[data-v-1e7a8272]{font-size:28px;color:orange}",""]),t.exports=e},537:function(t,e,r){"use strict";var n=r(484);r.n(n).a},538:function(t,e,r){(e=r(11)(!1)).push([t.i,".container[data-v-2670d33f]{width:1000px;margin:20px auto}.aside[data-v-2670d33f]{width:350px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border:1px solid #ddd}",""]),t.exports=e},591:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{form:{users:[{username:"",id:""}],insurances:[],contactName:"",contactPhone:"",captcha:"",invoice:!1,seat_xid:"",air:""},detail:{},rules:{users:[{validator:function(t,e,r){var n=!0;e.forEach((function(t){if(!1!==n)return""===t.username.trim()?(n=!1,r(new Error("乘机人姓名不能为空"))):""===t.id.trim()?(n=!1,r(new Error("乘机人证件号码不能为空"))):void 0})),n&&r()},trigger:"blur"}],contactName:[{required:!0,message:"联系人不能为空"}],contactPhone:[{required:!0,message:"联系人电话不能为空"}],captcha:[{required:!0,message:"验证码不能为空"}]}}},computed:{allPrice:function(){var t=this;if(!this.detail.seat_infos)return 0;var e=0;return e+=this.detail.seat_infos.org_settle_price,e+=this.detail.airport_tax_audlet,this.form.insurances.forEach((function(r){t.detail.insurances.forEach((function(t){r==t.id&&(e+=t.price)}))})),e*=this.form.users.length,this.$store.commit("air/setAllPrice",e),e}},mounted:function(){var t=this,e=this.$route.query,r=e.id,n=e.seat_xid;this.form.air=r,this.form.seat_xid=n,this.$axios({url:"/airs/"+r,params:{seat_xid:n}}).then((function(e){t.detail=e.data,t.$store.commit("air/setFlightData",t.detail)}))},methods:{handleAddUsers:function(){this.form.users.push({username:"",id:""})},handleDeleteUser:function(t){this.form.users.splice(t,1)},handleSendCaptcha:function(){var t=this;this.form.contactPhone?this.$store.dispatch("user/sendCaptcha",this.form.contactPhone).then((function(code){t.$message.success("验证码发送成功，模拟的验证码是:"+code)})):this.$refs.form2.validateField("contactPhone")},handleInsurances:function(t){var e=this.form.insurances.indexOf(t);e>-1?this.form.insurances.splice(e,1):this.form.insurances.push(t)},handleSubmit:function(){var t=this;this.$refs.form.validate((function(e){t.$refs.form2.validate((function(r){e&&r&&t.$axios({url:"/airorders",method:"POST",headers:{Authorization:"Bearer "+t.$store.state.user.userInfo.token},data:t.form}).then((function(e){t.$message.success("订单提交成功");var r=e.data.data.id;t.$router.push({path:"/air/pay",query:{id:r}})}))}))}))}}},o=(r(533),r(13)),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("div",{staticClass:"air-column"},[r("h2",[t._v("乘机人")]),t._v(" "),r("el-form",{ref:"form",staticClass:"member-info",attrs:{rules:t.rules,model:t.form}},t._l(t.form.users,(function(e,n){return r("div",{key:n,staticClass:"member-info-item"},[r("el-form-item",{attrs:{prop:"users"}},[r("el-form-item",{attrs:{label:"乘机人类型"}},[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"姓名"},model:{value:e.username,callback:function(r){t.$set(e,"username",r)},expression:"item.username"}},[r("el-select",{attrs:{slot:"prepend",value:"1",placeholder:"请选择"},slot:"prepend"},[r("el-option",{attrs:{label:"成人",value:"1"}})],1)],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"证件类型"}},[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"证件号码"},model:{value:e.id,callback:function(r){t.$set(e,"id",r)},expression:"item.id"}},[r("el-select",{attrs:{slot:"prepend",value:"1",placeholder:"请选择"},slot:"prepend"},[r("el-option",{attrs:{label:"身份证",value:"1",checked:!0}})],1)],1)],1),t._v(" "),r("span",{staticClass:"delete-user",on:{click:function(e){return t.handleDeleteUser(n)}}},[t._v("-")])],1)],1)})),0),t._v(" "),r("el-button",{staticClass:"add-member",attrs:{type:"primary"},on:{click:t.handleAddUsers}},[t._v("添加乘机人")])],1),t._v(" "),r("div",{staticClass:"air-column"},[r("h2",[t._v("保险")]),t._v(" "),r("div",t._l(t.detail.insurances,(function(e,n){return r("div",{key:n,staticClass:"insurance-item"},[r("el-checkbox",{attrs:{checked:!1,label:e.type+"：￥"+e.price+"/份×1  最高赔付"+e.compensation,border:""},on:{change:function(r){return t.handleInsurances(e.id)}}})],1)})),0)]),t._v(" "),r("div",{staticClass:"air-column"},[r("h2",[t._v("联系人")]),t._v(" "),r("div",{staticClass:"contact"},[r("el-form",{ref:"form2",attrs:{"label-width":"80px",rules:t.rules,model:t.form}},[r("el-form-item",{attrs:{label:"姓名",prop:"contactName"}},[r("el-input",{model:{value:t.form.contactName,callback:function(e){t.$set(t.form,"contactName",e)},expression:"form.contactName"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"手机",prop:"contactPhone"}},[r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.form.contactPhone,callback:function(e){t.$set(t.form,"contactPhone",e)},expression:"form.contactPhone"}},[r("template",{slot:"append"},[r("el-button",{on:{click:t.handleSendCaptcha}},[t._v("发送验证码")])],1)],2)],1),t._v(" "),r("el-form-item",{attrs:{label:"验证码",prop:"captcha"}},[r("el-input",{model:{value:t.form.captcha,callback:function(e){t.$set(t.form,"captcha",e)},expression:"form.captcha"}})],1)],1),t._v(" "),r("el-button",{staticClass:"submit",attrs:{type:"warning"},on:{click:t.handleSubmit}},[t._v("提交订单")])],1)]),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[t._v("\n        "+t._s(t.allPrice)+"\n    ")])])}),[],!1,null,"1bf7589c",null).exports,c=(r(131),{props:{data:{type:Object,default:{}}},computed:{rankTime:function(){if(!this.data.dep_time)return"";var t=this.data.dep_time.split(":"),e=this.data.arr_time.split(":"),r=60*t[0]+ +t[1],n=60*e[0]+ +e[1],o=n-r;return o<0&&(o=n+1440-r),"".concat(Math.floor(o/60),"时").concat(o%60,"分")}}}),d=(r(535),{components:{OrderForm:l,OrderAside:Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"aside"},[r("div",{staticClass:"air-info"},[r("el-row",{staticClass:"info-top",attrs:{type:"flex",justify:"space-between"}},[r("div",[t._v(t._s(t.data.dep_date))]),t._v(" "),r("div",[t._v(t._s(t.data.org_city_name)+" - "+t._s(t.data.dst_city_name))])]),t._v(" "),r("el-row",{staticClass:"info-step",attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("el-col",{staticClass:"flight-airport",attrs:{span:5}},[r("strong",[t._v(t._s(t.data.dep_time))]),t._v(" "),r("span",[t._v(t._s(t.data.org_airport_name)+t._s(t.data.org_airport_quay))])]),t._v(" "),r("el-col",{staticClass:"flight-time",attrs:{span:14}},[r("span",[t._v("--- "+t._s(t.rankTime)+" ---")]),t._v(" "),r("span",[t._v(t._s(t.data.airline_name)+t._s(t.data.flight_no))])]),t._v(" "),r("el-col",{staticClass:"flight-airport",attrs:{span:5}},[r("strong",[t._v(t._s(t.data.arr_time))]),t._v(" "),r("span",[t._v("浦东机场T2")])])],1)],1),t._v(" "),r("el-row",{staticClass:"info-bar",attrs:{type:"flex",justify:"space-between"}},[r("span",[t._v("订单总价")]),t._v(" "),r("span",[t._v("金额")]),t._v(" "),r("span",[t._v("数量")])]),t._v(" "),r("el-row",{staticClass:"info-bar",attrs:{type:"flex",justify:"space-between"}},[r("span",[t._v("成人机票")]),t._v(" "),r("span",[t._v("￥"+t._s(t.data.seat_infos.org_settle_price))]),t._v(" "),r("span",[t._v("x "+t._s(Math.floor(t.$store.state.air.allPrice/(t.data.seat_infos.org_settle_price+t.data.airport_tax_audlet))))])]),t._v(" "),r("el-row",{staticClass:"info-bar",attrs:{type:"flex",justify:"space-between"}},[r("span",[t._v("机建＋燃油")]),t._v(" "),r("span",[t._v("¥"+t._s(t.data.airport_tax_audlet)+"/人/单程")]),t._v(" "),r("span",[t._v("x1")])]),t._v(" "),r("el-row",{staticClass:"info-bar",attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("span",[t._v("应付总额：")]),t._v(" "),r("span",{staticClass:"price"},[t._v("￥ "+t._s(t.$store.state.air.allPrice))])])],1)}),[],!1,null,"1e7a8272",null).exports}}),f=(r(537),Object(o.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("el-row",{attrs:{type:"flex",justify:"space-between"}},[e("OrderForm"),this._v(" "),e("OrderAside",{attrs:{data:this.$store.state.air.flightData}})],1)],1)}),[],!1,null,"2670d33f",null));e.default=f.exports}}]);