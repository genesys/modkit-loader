!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dayjs")):"function"==typeof define&&define.amd?define(["dayjs"],t):"object"==typeof exports?exports.UMD=t(require("dayjs")):e.UMD=t(e.dayjs)}(self,(function(e){return(()=>{var t={705:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var i=[].concat(e[s]);n&&a[i[0]]||(r&&(i[2]?i[2]="".concat(r," and ").concat(i[2]):i[2]=r),t.push(i))}},t}},444:function(e){e.exports=function(){"use strict";return function(e,t,r){var n="h:mm A",a={lastDay:"[Yesterday at] "+n,sameDay:"[Today at] "+n,nextDay:"[Tomorrow at] "+n,nextWeek:"dddd [at] "+n,lastWeek:"[Last] dddd [at] "+n,sameElse:"MM/DD/YYYY"};t.prototype.calendar=function(e,t){var n=t||this.$locale().calendar||a,o=r(e||void 0).startOf("d"),d=this.diff(o,"d",!0),s=d<-6?"sameElse":d<-1?"lastWeek":d<0?"lastDay":d<1?"sameDay":d<2?"nextDay":d<7?"nextWeek":"sameElse",i=n[s]||a[s];return"function"==typeof i?i.call(this,r()):this.format(i)}}}()},737:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(705),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,"div#umd-sample[data-v-5a2932d0]{display:flex;flex-direction:row;justify-content:flex-end}div#umd-sample>div.container[data-v-5a2932d0]{display:flex;flex-direction:column}div#umd-sample>div.container>div.date[data-v-5a2932d0]{padding-top:1em;padding-right:1em;color:var(--madoc-github-grey-2)}",""]);const o=a},764:(e,t,r)=>{var n=r(737);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,r(23).Z)("5bad2802",n,!0,{})},23:(e,t,r)=>{"use strict";function n(e,t){for(var r=[],n={},a=0;a<t.length;a++){var o=t[a],d=o[0],s={id:e+":"+a,css:o[1],media:o[2],sourceMap:o[3]};n[d]?n[d].parts.push(s):r.push(n[d]={id:d,parts:[s]})}return r}r.d(t,{Z:()=>v});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},d=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,i=0,u=!1,l=function(){},c=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,r,a){u=r,c=a||{};var d=n(e,t);return m(d),function(t){for(var r=[],a=0;a<d.length;a++){var s=d[a];(i=o[s.id]).refs--,r.push(i)}for(t?m(d=n(e,t)):d=[],a=0;a<r.length;a++){var i;if(0===(i=r[a]).refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete o[i.id]}}}}function m(e){for(var t=0;t<e.length;t++){var r=e[t],n=o[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(h(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var d=[];for(a=0;a<r.parts.length;a++)d.push(h(r.parts[a]));o[r.id]={id:r.id,refs:1,parts:d}}}}function y(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function h(e){var t,r,n=document.querySelector("style["+f+'~="'+e.id+'"]');if(n){if(u)return l;n.parentNode.removeChild(n)}if(p){var a=i++;n=s||(s=y()),t=b.bind(null,n,a,!1),r=b.bind(null,n,a,!0)}else n=y(),t=D.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var g,x=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function b(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,a);else{var o=document.createTextNode(a),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(o,d[t]):e.appendChild(o)}}function D(e,t){var r=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),c.ssrId&&e.setAttribute(f,t.id),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},349:t=>{"use strict";t.exports=e}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={id:e,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";n.r(a),n.d(a,{UmdView:()=>c,load:()=>u,unload:()=>l});var e=n(349),t=n.n(e),r=n(444),o=n.n(r);t().extend(o());var d={sameDay:"[Updated Today at] h:mm A",nextDay:"[Updated Tomorrow]",nextWeek:"[Updated] dddd",lastDay:"[Updated Yesterday]",lastWeek:"[Last] dddd",sameElse:"[Updated on] DD/MM/YYYY"};const s={name:"ModuleView",props:{updatedDate:String},computed:{text:function(){return t()(this.updatedDate).calendar(null,d)}}};n(764);const i=function(e,t,r,n,a,o,d,s){var i,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=[],u._compiled=!0),u._scopeId="data-v-5a2932d0",i)if(u.functional){u._injectStyles=i;var l=u.render;u.render=function(e,t){return i.call(t),l(e,t)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,i):[i]}return{exports:e,options:u}}(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"umd-sample"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"date"},[e._v(e._s(e.text))]),e._v(" "),r("div",{staticClass:"slot"},[e._t("default")],2)])])})).exports;function u(e){var t=e.Vue,r=e.updatedDate;new(t.extend(i))({propsData:{updatedDate:r}}).$mount("#umd-sample")}function l(){document.getElementById("umd-sample").innerHTML=""}var c=i})(),a})()}));