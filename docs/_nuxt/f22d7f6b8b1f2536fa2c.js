(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{336:function(t,r){var e,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];r.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},r.getSymbolTotalCodewords=function(t){return n[t]},r.getBCHDigit=function(data){for(var t=0;0!==data;)t++,data>>>=1;return t},r.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');e=t},r.isKanjiModeEnabled=function(){return void 0!==e},r.toSJIS=function(t){return e(t)}},337:function(t,r,e){var n=e(499),o=e(500);r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(t,r){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!n.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?t.ccBits[0]:r<27?t.ccBits[1]:t.ccBits[2]},r.getBestModeForData=function(t){return o.testNumeric(t)?r.NUMERIC:o.testAlphanumeric(t)?r.ALPHANUMERIC:o.testKanji(t)?r.KANJI:r.BYTE},r.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},r.isValid=function(t){return t&&t.bit&&t.ccBits},r.from=function(t,e){if(r.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return e}}},465:function(t,r,e){"use strict";var n=e(485);f.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}();var o=f.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function f(t,r,e){return f.TYPED_ARRAY_SUPPORT||this instanceof f?"number"==typeof t?l(this,t):function(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');if("undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer)return function(t,r,e,n){if(e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");var o;o=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);f.TYPED_ARRAY_SUPPORT?o.__proto__=f.prototype:o=d(t,o);return o}(t,r,e,n);if("string"==typeof r)return function(t,r){var e=0|w(r),n=c(t,e),o=n.write(r);o!==e&&(n=n.slice(0,o));return n}(t,r);return function(t,r){if(f.isBuffer(r)){var e=0|h(r.length),n=c(t,e);return 0===n.length||r.copy(n,0,0,e),n}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(o=r.length)!=o?c(t,0):d(t,r);if("Buffer"===r.type&&Array.isArray(r.data))return d(t,r.data)}var o;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}(this,t,r,e):new f(t,r,e)}function h(t){if(t>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|t}function c(t,r){var e;return f.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(r)).__proto__=f.prototype:(null===(e=t)&&(e=new f(r)),e.length=r),e}function l(t,r){var e=c(t,r<0?0:0|h(r));if(!f.TYPED_ARRAY_SUPPORT)for(var i=0;i<r;++i)e[i]=0;return e}function d(t,r){for(var e=r.length<0?0:0|h(r.length),n=c(t,e),i=0;i<e;i+=1)n[i]=255&r[i];return n}function v(t,r){var e;r=r||1/0;for(var n=t.length,o=null,f=[],i=0;i<n;++i){if((e=t.charCodeAt(i))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&f.push(239,191,189);continue}if(i+1===n){(r-=3)>-1&&f.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&f.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&f.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;f.push(e)}else if(e<2048){if((r-=2)<0)break;f.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;f.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;f.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return f}function w(t){return f.isBuffer(t)?t.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)?t.byteLength:("string"!=typeof t&&(t=""+t),0===t.length?0:v(t).length)}f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),f.prototype.write=function(t,r,e){void 0===r||void 0===e&&"string"==typeof r?(e=this.length,r=0):isFinite(r)&&(r|=0,isFinite(e)?e|=0:e=void 0);var n=this.length-r;if((void 0===e||e>n)&&(e=n),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");return function(t,r,e,n){return function(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}(v(r,t.length-e),t,e,n)}(this,t,r,e)},f.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),f.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=f.prototype;else{var o=r-t;e=new f(o,void 0);for(var i=0;i<o;++i)e[i]=this[i+t]}return e},f.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},f.prototype.fill=function(t,r,e){if("string"==typeof t){if("string"==typeof r?(r=0,e=this.length):"string"==typeof e&&(e=this.length),1===t.length){var code=t.charCodeAt(0);code<256&&(t=code)}}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var i;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(i=r;i<e;++i)this[i]=t;else{var n=f.isBuffer(t)?t:new f(t),o=n.length;for(i=0;i<e-r;++i)this[i+r]=n[i%o]}return this},f.concat=function(t,r){if(!n(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return c(null,0);var i;if(void 0===r)for(r=0,i=0;i<t.length;++i)r+=t[i].length;var e=l(null,r),o=0;for(i=0;i<t.length;++i){var h=t[i];if(!f.isBuffer(h))throw new TypeError('"list" argument must be an Array of Buffers');h.copy(e,o),o+=h.length}return e},f.byteLength=w,f.prototype._isBuffer=!0,f.isBuffer=function(b){return!(null==b||!b._isBuffer)},t.exports.alloc=function(t){var r=new f(t);return r.fill(0),r},t.exports.from=function(data){return new f(data)}},485:function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},486:function(t,r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2},r.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},r.from=function(t,e){if(r.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return e}}},498:function(t,r,e){var n=e(486),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],f=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];r.getBlocksCount=function(t,r){switch(r){case n.L:return o[4*(t-1)+0];case n.M:return o[4*(t-1)+1];case n.Q:return o[4*(t-1)+2];case n.H:return o[4*(t-1)+3];default:return}},r.getTotalCodewordsCount=function(t,r){switch(r){case n.L:return f[4*(t-1)+0];case n.M:return f[4*(t-1)+1];case n.Q:return f[4*(t-1)+2];case n.H:return f[4*(t-1)+3];default:return}}},499:function(t,r){r.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},500:function(t,r){var e="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(e=e.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";r.KANJI=new RegExp(e,"g"),r.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),r.BYTE=new RegExp(n,"g"),r.NUMERIC=new RegExp("[0-9]+","g"),r.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var o=new RegExp("^"+e+"$"),f=new RegExp("^[0-9]+$"),h=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");r.testKanji=function(t){return o.test(t)},r.testNumeric=function(t){return f.test(t)},r.testAlphanumeric=function(t){return h.test(t)}},501:function(t,r){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var r=t.slice().replace("#","").split("");if(r.length<3||5===r.length||r.length>8)throw new Error("Invalid hex color: "+t);3!==r.length&&4!==r.length||(r=Array.prototype.concat.apply([],r.map((function(t){return[t,t]})))),6===r.length&&r.push("F","F");var e=parseInt(r.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:255&e,hex:"#"+r.slice(0,6).join("")}}r.getOptions=function(t){t||(t={}),t.color||(t.color={});var r=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:r,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},r.getScale=function(t,r){return r.width&&r.width>=t+2*r.margin?r.width/(t+2*r.margin):r.scale},r.getImageWidth=function(t,e){var n=r.getScale(t,e);return Math.floor((t+2*e.margin)*n)},r.qrToImageData=function(t,e,n){for(var o=e.modules.size,data=e.modules.data,f=r.getScale(o,n),h=Math.floor((o+2*n.margin)*f),c=n.margin*f,l=[n.color.light,n.color.dark],i=0;i<h;i++)for(var d=0;d<h;d++){var v=4*(i*h+d),w=n.color.light;if(i>=c&&d>=c&&i<h-c&&d<h-c)w=l[data[Math.floor((i-c)/f)*o+Math.floor((d-c)/f)]?1:0];t[v++]=w.r,t[v++]=w.g,t[v++]=w.b,t[v]=w.a}}},539:function(t,r,e){var n=e(540),o=e(541),f=e(558),h=e(559);function c(t,canvas,text,r,e){var f=[].slice.call(arguments,1),h=f.length,c="function"==typeof f[h-1];if(!c&&!n())throw new Error("Callback required as last argument");if(!c){if(h<1)throw new Error("Too few arguments provided");return 1===h?(text=canvas,canvas=r=void 0):2!==h||canvas.getContext||(r=text,text=canvas,canvas=void 0),new Promise((function(e,n){try{var data=o.create(text,r);e(t(data,canvas,r))}catch(t){n(t)}}))}if(h<2)throw new Error("Too few arguments provided");2===h?(e=text,text=canvas,canvas=r=void 0):3===h&&(canvas.getContext&&void 0===e?(e=r,r=void 0):(e=r,r=text,text=canvas,canvas=void 0));try{var data=o.create(text,r);e(null,t(data,canvas,r))}catch(t){e(t)}}r.create=o.create,r.toCanvas=c.bind(null,f.render),r.toDataURL=c.bind(null,f.renderToDataURL),r.toString=c.bind(null,(function(data,t,r){return h.render(data,r)}))},540:function(t,r){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},541:function(t,r,e){var n=e(465),o=e(336),f=e(486),h=e(542),c=e(543),l=e(544),d=e(545),v=e(546),w=e(498),y=e(547),m=e(550),E=e(551),A=e(337),B=e(552),P=e(485);function R(t,r,e){var i,n,o=t.size,f=E.getEncodedBits(r,e);for(i=0;i<15;i++)n=1==(f>>i&1),i<6?t.set(i,8,n,!0):i<8?t.set(i+1,8,n,!0):t.set(o-15+i,8,n,!0),i<8?t.set(8,o-i-1,n,!0):i<9?t.set(8,15-i-1+1,n,!0):t.set(8,15-i-1,n,!0);t.set(o-8,8,1,!0)}function T(t,r,e){var f=new h;e.forEach((function(data){f.put(data.mode.bit,4),f.put(data.getLength(),A.getCharCountIndicator(data.mode,t)),data.write(f)}));var c=8*(o.getSymbolTotalCodewords(t)-w.getTotalCodewordsCount(t,r));for(f.getLengthInBits()+4<=c&&f.put(0,4);f.getLengthInBits()%8!=0;)f.putBit(0);for(var l=(c-f.getLengthInBits())/8,i=0;i<l;i++)f.put(i%2?17:236,8);return function(t,r,e){for(var f=o.getSymbolTotalCodewords(r),h=w.getTotalCodewordsCount(r,e),c=f-h,l=w.getBlocksCount(r,e),d=l-f%l,v=Math.floor(f/l),m=Math.floor(c/l),E=m+1,A=v-m,B=new y(A),P=0,R=new Array(l),T=new Array(l),C=0,I=n.from(t.buffer),b=0;b<l;b++){var M=b<d?m:E;R[b]=I.slice(P,P+M),T[b]=B.encode(R[b]),P+=M,C=Math.max(C,M)}var i,N,data=n.alloc(f),_=0;for(i=0;i<C;i++)for(N=0;N<l;N++)i<R[N].length&&(data[_++]=R[N][i]);for(i=0;i<A;i++)for(N=0;N<l;N++)data[_++]=T[N][i];return data}(f,t,r)}function C(data,t,r,e){var n;if(P(data))n=B.fromArray(data);else{if("string"!=typeof data)throw new Error("Invalid data");var f=t;if(!f){var h=B.rawSplit(data);f=m.getBestVersionForData(h,r)}n=B.fromString(data,f||40)}var w=m.getBestVersionForData(n,r);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<w)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+w+".\n")}else t=w;var y=T(t,r,n),E=o.getSymbolSize(t),A=new c(E);return function(t,r){for(var e=t.size,n=d.getPositions(r),i=0;i<n.length;i++)for(var o=n[i][0],col=n[i][1],f=-1;f<=7;f++)if(!(o+f<=-1||e<=o+f))for(var h=-1;h<=7;h++)col+h<=-1||e<=col+h||(f>=0&&f<=6&&(0===h||6===h)||h>=0&&h<=6&&(0===f||6===f)||f>=2&&f<=4&&h>=2&&h<=4?t.set(o+f,col+h,!0,!0):t.set(o+f,col+h,!1,!0))}(A,t),function(t){for(var r=t.size,e=8;e<r-8;e++){var n=e%2==0;t.set(e,6,n,!0),t.set(6,e,n,!0)}}(A),function(t,r){for(var e=l.getPositions(r),i=0;i<e.length;i++)for(var n=e[i][0],col=e[i][1],o=-2;o<=2;o++)for(var f=-2;f<=2;f++)-2===o||2===o||-2===f||2===f||0===o&&0===f?t.set(n+o,col+f,!0,!0):t.set(n+o,col+f,!1,!0)}(A,t),R(A,r,0),t>=7&&function(t,r){for(var e,col,n,o=t.size,f=m.getEncodedBits(r),i=0;i<18;i++)e=Math.floor(i/3),col=i%3+o-8-3,n=1==(f>>i&1),t.set(e,col,n,!0),t.set(col,e,n,!0)}(A,t),function(t,data){for(var r=t.size,e=-1,n=r-1,o=7,f=0,col=r-1;col>0;col-=2)for(6===col&&col--;;){for(var h=0;h<2;h++)if(!t.isReserved(n,col-h)){var c=!1;f<data.length&&(c=1==(data[f]>>>o&1)),t.set(n,col-h,c),-1===--o&&(f++,o=7)}if((n+=e)<0||r<=n){n-=e,e=-e;break}}}(A,y),isNaN(e)&&(e=v.getBestMask(A,R.bind(null,A,r))),v.applyMask(e,A),R(A,r,e),{modules:A,version:t,errorCorrectionLevel:r,maskPattern:e,segments:n}}r.create=function(data,t){if(void 0===data||""===data)throw new Error("No input text");var r,mask,e=f.M;return void 0!==t&&(e=f.from(t.errorCorrectionLevel,f.M),r=m.from(t.version),mask=v.from(t.maskPattern),t.toSJISFunc&&o.setToSJISFunction(t.toSJISFunc)),C(data,r,e,mask)}},542:function(t,r){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){var r=Math.floor(t/8);return 1==(this.buffer[r]>>>7-t%8&1)},put:function(t,r){for(var i=0;i<r;i++)this.putBit(1==(t>>>r-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var r=Math.floor(this.length/8);this.buffer.length<=r&&this.buffer.push(0),t&&(this.buffer[r]|=128>>>this.length%8),this.length++}},t.exports=e},543:function(t,r,e){var n=e(465);function o(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=n.alloc(t*t),this.reservedBit=n.alloc(t*t)}o.prototype.set=function(t,col,r,e){var n=t*this.size+col;this.data[n]=r,e&&(this.reservedBit[n]=!0)},o.prototype.get=function(t,col){return this.data[t*this.size+col]},o.prototype.xor=function(t,col,r){this.data[t*this.size+col]^=r},o.prototype.isReserved=function(t,col){return this.reservedBit[t*this.size+col]},t.exports=o},544:function(t,r,e){var n=e(336).getSymbolSize;r.getRowColCoords=function(t){if(1===t)return[];for(var r=Math.floor(t/7)+2,e=n(t),o=145===e?26:2*Math.ceil((e-13)/(2*r-2)),f=[e-7],i=1;i<r-1;i++)f[i]=f[i-1]-o;return f.push(6),f.reverse()},r.getPositions=function(t){for(var e=[],n=r.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var f=0;f<o;f++)0===i&&0===f||0===i&&f===o-1||i===o-1&&0===f||e.push([n[i],n[f]]);return e}},545:function(t,r,e){var n=e(336).getSymbolSize;r.getPositions=function(t){var r=n(t);return[[0,0],[r-7,0],[0,r-7]]}},546:function(t,r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var e=3,n=3,o=40,f=10;function h(t,i,e){switch(t){case r.Patterns.PATTERN000:return(i+e)%2==0;case r.Patterns.PATTERN001:return i%2==0;case r.Patterns.PATTERN010:return e%3==0;case r.Patterns.PATTERN011:return(i+e)%3==0;case r.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(e/3))%2==0;case r.Patterns.PATTERN101:return i*e%2+i*e%3==0;case r.Patterns.PATTERN110:return(i*e%2+i*e%3)%2==0;case r.Patterns.PATTERN111:return(i*e%3+(i+e)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}r.isValid=function(mask){return null!=mask&&""!==mask&&!isNaN(mask)&&mask>=0&&mask<=7},r.from=function(t){return r.isValid(t)?parseInt(t,10):void 0},r.getPenaltyN1=function(data){for(var t=data.size,r=0,n=0,o=0,f=null,h=null,c=0;c<t;c++){n=o=0,f=h=null;for(var col=0;col<t;col++){var l=data.get(c,col);l===f?n++:(n>=5&&(r+=e+(n-5)),f=l,n=1),(l=data.get(col,c))===h?o++:(o>=5&&(r+=e+(o-5)),h=l,o=1)}n>=5&&(r+=e+(n-5)),o>=5&&(r+=e+(o-5))}return r},r.getPenaltyN2=function(data){for(var t=data.size,r=0,e=0;e<t-1;e++)for(var col=0;col<t-1;col++){var o=data.get(e,col)+data.get(e,col+1)+data.get(e+1,col)+data.get(e+1,col+1);4!==o&&0!==o||r++}return r*n},r.getPenaltyN3=function(data){for(var t=data.size,r=0,e=0,n=0,f=0;f<t;f++){e=n=0;for(var col=0;col<t;col++)e=e<<1&2047|data.get(f,col),col>=10&&(1488===e||93===e)&&r++,n=n<<1&2047|data.get(col,f),col>=10&&(1488===n||93===n)&&r++}return r*o},r.getPenaltyN4=function(data){for(var t=0,r=data.data.length,i=0;i<r;i++)t+=data.data[i];return Math.abs(Math.ceil(100*t/r/5)-10)*f},r.applyMask=function(pattern,data){for(var t=data.size,col=0;col<t;col++)for(var r=0;r<t;r++)data.isReserved(r,col)||data.xor(r,col,h(pattern,r,col))},r.getBestMask=function(data,t){for(var e=Object.keys(r.Patterns).length,n=0,o=1/0,p=0;p<e;p++){t(p),r.applyMask(p,data);var f=r.getPenaltyN1(data)+r.getPenaltyN2(data)+r.getPenaltyN3(data)+r.getPenaltyN4(data);r.applyMask(p,data),f<o&&(o=f,n=p)}return n}},547:function(t,r,e){var n=e(465),o=e(548),f=e(192).Buffer;function h(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}h.prototype.initialize=function(t){this.degree=t,this.genPoly=o.generateECPolynomial(this.degree)},h.prototype.encode=function(data){if(!this.genPoly)throw new Error("Encoder not initialized");var t=n.alloc(this.degree),r=f.concat([data,t],data.length+this.degree),e=o.mod(r,this.genPoly),h=this.degree-e.length;if(h>0){var c=n.alloc(this.degree);return e.copy(c,h),c}return e},t.exports=h},548:function(t,r,e){var n=e(465),o=e(549);r.mul=function(t,r){for(var e=n.alloc(t.length+r.length-1),i=0;i<t.length;i++)for(var f=0;f<r.length;f++)e[i+f]^=o.mul(t[i],r[f]);return e},r.mod=function(t,r){for(var e=n.from(t);e.length-r.length>=0;){for(var f=e[0],i=0;i<r.length;i++)e[i]^=o.mul(r[i],f);for(var h=0;h<e.length&&0===e[h];)h++;e=e.slice(h)}return e},r.generateECPolynomial=function(t){for(var e=n.from([1]),i=0;i<t;i++)e=r.mul(e,[1,o.exp(i)]);return e}},549:function(t,r,e){var n=e(465),o=n.alloc(512),f=n.alloc(256);!function(){for(var t=1,i=0;i<255;i++)o[i]=t,f[t]=i,256&(t<<=1)&&(t^=285);for(i=255;i<512;i++)o[i]=o[i-255]}(),r.log=function(t){if(t<1)throw new Error("log("+t+")");return f[t]},r.exp=function(t){return o[t]},r.mul=function(t,r){return 0===t||0===r?0:o[f[t]+f[r]]}},550:function(t,r,e){var n=e(336),o=e(498),f=e(486),h=e(337),c=e(499),l=e(485),d=n.getBCHDigit(7973);function v(t,r){return h.getCharCountIndicator(t,r)+4}function w(t,r){var e=0;return t.forEach((function(data){var t=v(data.mode,r);e+=t+data.getBitsLength()})),e}r.from=function(t,r){return c.isValid(t)?parseInt(t,10):r},r.getCapacity=function(t,r,e){if(!c.isValid(t))throw new Error("Invalid QR Code version");void 0===e&&(e=h.BYTE);var f=8*(n.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,r));if(e===h.MIXED)return f;var l=f-v(e,t);switch(e){case h.NUMERIC:return Math.floor(l/10*3);case h.ALPHANUMERIC:return Math.floor(l/11*2);case h.KANJI:return Math.floor(l/13);case h.BYTE:default:return Math.floor(l/8)}},r.getBestVersionForData=function(data,t){var e,n=f.from(t,f.M);if(l(data)){if(data.length>1)return function(t,e){for(var n=1;n<=40;n++){if(w(t,n)<=r.getCapacity(n,e,h.MIXED))return n}}(data,n);if(0===data.length)return 1;e=data[0]}else e=data;return function(t,e,n){for(var o=1;o<=40;o++)if(e<=r.getCapacity(o,n,t))return o}(e.mode,e.getLength(),n)},r.getEncodedBits=function(t){if(!c.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var r=t<<12;n.getBCHDigit(r)-d>=0;)r^=7973<<n.getBCHDigit(r)-d;return t<<12|r}},551:function(t,r,e){var n=e(336),o=n.getBCHDigit(1335);r.getEncodedBits=function(t,mask){for(var data=t.bit<<3|mask,r=data<<10;n.getBCHDigit(r)-o>=0;)r^=1335<<n.getBCHDigit(r)-o;return 21522^(data<<10|r)}},552:function(t,r,e){var n=e(337),o=e(553),f=e(554),h=e(555),c=e(556),l=e(500),d=e(336),v=e(557);function w(t){return unescape(encodeURIComponent(t)).length}function y(t,r,e){for(var n,o=[];null!==(n=t.exec(e));)o.push({data:n[0],index:n.index,mode:r,length:n[0].length});return o}function m(t){var r,e,o=y(l.NUMERIC,n.NUMERIC,t),f=y(l.ALPHANUMERIC,n.ALPHANUMERIC,t);return d.isKanjiModeEnabled()?(r=y(l.BYTE,n.BYTE,t),e=y(l.KANJI,n.KANJI,t)):(r=y(l.BYTE_KANJI,n.BYTE,t),e=[]),o.concat(f,r,e).sort((function(t,r){return t.index-r.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function E(t,r){switch(r){case n.NUMERIC:return o.getBitsLength(t);case n.ALPHANUMERIC:return f.getBitsLength(t);case n.KANJI:return c.getBitsLength(t);case n.BYTE:return h.getBitsLength(t)}}function A(data,t){var r,e=n.getBestModeForData(data);if((r=n.from(t,e))!==n.BYTE&&r.bit<e.bit)throw new Error('"'+data+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(e));switch(r!==n.KANJI||d.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new o(data);case n.ALPHANUMERIC:return new f(data);case n.KANJI:return new c(data);case n.BYTE:return new h(data)}}r.fromArray=function(t){return t.reduce((function(t,r){return"string"==typeof r?t.push(A(r,null)):r.data&&t.push(A(r.data,r.mode)),t}),[])},r.fromString=function(data,t){for(var e=function(t,r){for(var table={},e={start:{}},o=["start"],i=0;i<t.length;i++){for(var f=t[i],h=[],c=0;c<f.length;c++){var l=f[c],d=""+i+c;h.push(d),table[d]={node:l,lastCount:0},e[d]={};for(var v=0;v<o.length;v++){var w=o[v];table[w]&&table[w].node.mode===l.mode?(e[w][d]=E(table[w].lastCount+l.length,l.mode)-E(table[w].lastCount,l.mode),table[w].lastCount+=l.length):(table[w]&&(table[w].lastCount=l.length),e[w][d]=E(l.length,l.mode)+4+n.getCharCountIndicator(l.mode,r))}}o=h}for(v=0;v<o.length;v++)e[o[v]].end=0;return{map:e,table:table}}(function(t){for(var r=[],i=0;i<t.length;i++){var e=t[i];switch(e.mode){case n.NUMERIC:r.push([e,{data:e.data,mode:n.ALPHANUMERIC,length:e.length},{data:e.data,mode:n.BYTE,length:e.length}]);break;case n.ALPHANUMERIC:r.push([e,{data:e.data,mode:n.BYTE,length:e.length}]);break;case n.KANJI:r.push([e,{data:e.data,mode:n.BYTE,length:w(e.data)}]);break;case n.BYTE:r.push([{data:e.data,mode:n.BYTE,length:w(e.data)}])}}return r}(m(data,d.isKanjiModeEnabled())),t),path=v.find_path(e.map,"start","end"),o=[],i=1;i<path.length-1;i++)o.push(e.table[path[i]].node);return r.fromArray(function(t){return t.reduce((function(t,r){var e=t.length-1>=0?t[t.length-1]:null;return e&&e.mode===r.mode?(t[t.length-1].data+=r.data,t):(t.push(r),t)}),[])}(o))},r.rawSplit=function(data){return r.fromArray(m(data,d.isKanjiModeEnabled()))}},553:function(t,r,e){var n=e(337);function o(data){this.mode=n.NUMERIC,this.data=data.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){var i,r,e;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),e=parseInt(r,10),t.put(e,10);var n=this.data.length-i;n>0&&(r=this.data.substr(i),e=parseInt(r,10),t.put(e,3*n+1))},t.exports=o},554:function(t,r,e){var n=e(337),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function f(data){this.mode=n.ALPHANUMERIC,this.data=data}f.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},f.prototype.getLength=function(){return this.data.length},f.prototype.getBitsLength=function(){return f.getBitsLength(this.data.length)},f.prototype.write=function(t){var i;for(i=0;i+2<=this.data.length;i+=2){var r=45*o.indexOf(this.data[i]);r+=o.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(o.indexOf(this.data[i]),6)},t.exports=f},555:function(t,r,e){var n=e(465),o=e(337);function f(data){this.mode=o.BYTE,this.data=n.from(data)}f.getBitsLength=function(t){return 8*t},f.prototype.getLength=function(){return this.data.length},f.prototype.getBitsLength=function(){return f.getBitsLength(this.data.length)},f.prototype.write=function(t){for(var i=0,r=this.data.length;i<r;i++)t.put(this.data[i],8)},t.exports=f},556:function(t,r,e){var n=e(337),o=e(336);function f(data){this.mode=n.KANJI,this.data=data}f.getBitsLength=function(t){return 13*t},f.prototype.getLength=function(){return this.data.length},f.prototype.getBitsLength=function(){return f.getBitsLength(this.data.length)},f.prototype.write=function(t){var i;for(i=0;i<this.data.length;i++){var r=o.toSJIS(this.data[i]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[i]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}},t.exports=f},557:function(t,r,e){"use strict";var n={single_source_shortest_paths:function(t,s,r){var e={},o={};o[s]=0;var f,u,h,c,l,d,v,w=n.PriorityQueue.make();for(w.push(s,0);!w.empty();)for(h in u=(f=w.pop()).value,c=f.cost,l=t[u]||{})l.hasOwnProperty(h)&&(d=c+l[h],v=o[h],(void 0===o[h]||v>d)&&(o[h]=d,w.push(h,d),e[h]=u));if(void 0!==r&&void 0===o[r]){var y=["Could not find a path from ",s," to ",r,"."].join("");throw new Error(y)}return e},extract_shortest_path_from_predecessor_list:function(t,r){for(var e=[],u=r;u;)e.push(u),t[u],u=t[u];return e.reverse(),e},find_path:function(t,s,r){var e=n.single_source_shortest_paths(t,s,r);return n.extract_shortest_path_from_predecessor_list(e,r)},PriorityQueue:{make:function(t){var r,e=n.PriorityQueue,o={};for(r in t=t||{},e)e.hasOwnProperty(r)&&(o[r]=e[r]);return o.queue=[],o.sorter=t.sorter||e.default_sorter,o},default_sorter:function(a,b){return a.cost-b.cost},push:function(t,r){var e={value:t,cost:r};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=n},558:function(t,r,e){var n=e(501);r.render=function(t,canvas,r){var e=r,o=canvas;void 0!==e||canvas&&canvas.getContext||(e=canvas,canvas=void 0),canvas||(o=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),e=n.getOptions(e);var f=n.getImageWidth(t.modules.size,e),h=o.getContext("2d"),image=h.createImageData(f,f);return n.qrToImageData(image.data,t,e),function(t,canvas,r){t.clearRect(0,0,canvas.width,canvas.height),canvas.style||(canvas.style={}),canvas.height=r,canvas.width=r,canvas.style.height=r+"px",canvas.style.width=r+"px"}(h,o,f),h.putImageData(image,0,0),o},r.renderToDataURL=function(t,canvas,e){var n=e;void 0!==n||canvas&&canvas.getContext||(n=canvas,canvas=void 0),n||(n={});var o=r.render(t,canvas,n),f=n.type||"image/png",h=n.rendererOpts||{};return o.toDataURL(f,h.quality)}},559:function(t,r,e){var n=e(501);function o(t,r){var e=t.a/255,n=r+'="'+t.hex+'"';return e<1?n+" "+r+'-opacity="'+e.toFixed(2).slice(1)+'"':n}function f(t,r,e){var n=t+r;return void 0!==e&&(n+=" "+e),n}r.render=function(t,r,e){var h=n.getOptions(r),c=t.modules.size,data=t.modules.data,l=c+2*h.margin,d=h.color.light.a?"<path "+o(h.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",path="<path "+o(h.color.dark,"stroke")+' d="'+function(data,t,r){for(var path="",e=0,n=!1,o=0,i=0;i<data.length;i++){var col=Math.floor(i%t),h=Math.floor(i/t);col||n||(n=!0),data[i]?(o++,i>0&&col>0&&data[i-1]||(path+=n?f("M",col+r,.5+h+r):f("m",e,0),e=0,n=!1),col+1<t&&data[i+1]||(path+=f("h",o),o=0)):e++}return path}(data,c,h.margin)+'"/>',v='viewBox="0 0 '+l+" "+l+'"',w='<svg xmlns="http://www.w3.org/2000/svg" '+(h.width?'width="'+h.width+'" height="'+h.width+'" ':"")+v+' shape-rendering="crispEdges">'+d+path+"</svg>\n";return"function"==typeof e&&e(null,w),w}}}]);