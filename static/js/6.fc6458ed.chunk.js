/*! For license information please see 6.fc6458ed.chunk.js.LICENSE.txt */
(this.webpackJsonpmyprofile=this.webpackJsonpmyprofile||[]).push([[6],{46:function(t,e,r){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=18)}([function(t,e){t.exports=r(47)},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?t.exports=n=function(t){return r(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)},n(e)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e){function r(){return t.exports=r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r.apply(this,arguments)}t.exports=r},function(t,e,r){t.exports=r(12)},function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}},function(t,e,r){var n=r(1),o=r(2);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},function(t,e,r){var n=r(13);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?h:f,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",p="executing",h="completed",d={};function y(){}function m(){}function v(){}var g={};g[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(_([])));w&&w!==r&&n.call(w,i)&&(g=w);var x=v.prototype=y.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){var e;this._invoke=function(r,o){function i(){return new Promise((function(e,i){!function e(r,o,i,a){var c=s(t[r],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}(r,o,e,i)}))}return e=e?e.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return m.prototype=x.constructor=v,v.constructor=m,v[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o){var i=new E(u(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},function(t,e,r){var n=r(15);"string"==typeof n&&(n=[[t.i,n,""]]);r(17)(n,{insert:"head",singleton:!1}),n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".addAnimate {\n  animation: grow 1.5s 0.5s forwards ease-out;\n}\n\n.addRectAnimate {\n  animation: rectGrow 1.5s 0.5s forwards ease-out;\n}\n\n@keyframes grow {\n  to {\n    stroke-dashoffset: var(--level, 200);\n  }\n}\n\n@keyframes rectGrow {\n  to {\n    width: var(--rectLevel, 50%);\n  }\n}\n.progress-bar {\n  position: relative;\n}\n.progress-bar-percent {\n  position: absolute;\n  font-size: 3em;\n  padding: 0;\n  margin: 0;\n  left: 50%;\n  top: 50%;\n  font-family: sans-serif;\n  transform: translate(-50%, -50%);\n}\n\n.progress-bar-rect-wrap-container {\n  display: flex;\n  align-items: center;\n}\n.progress-bar-rect-wrapper {\n  width: 100%;\n}\n.progress-bar-circ-container {\n  position: relative;\n  width: fit-content;\n}\n\n* {\n  box-sizing: border-box;\n}\n",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r,n,o,i=t[1]||"",a=t[3];if(!a)return i;if(e&&"function"==typeof btoa){var c=(r=a,n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(o," */")),u=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot).concat(t," */")}));return[i].concat(u).concat([c]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(r,"}"):r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(var a=0;a<t.length;a++){var c=t[a];null!=c[0]&&n[c[0]]||(r&&!c[2]?c[2]=r:r&&(c[2]="(".concat(c[2],") and (").concat(r,")")),e.push(c))}},e}},function(t,e,r){"use strict";var n,o={},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}();function a(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(c):r.push(n[a]={id:a,parts:[c]})}return r}function c(t,e){for(var r=0;r<t.length;r++){var n=t[r],i=o[n.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(y(n.parts[a],e))}else{for(var c=[];a<n.parts.length;a++)c.push(y(n.parts[a],e));o[n.id]={id:n.id,refs:1,parts:c}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=r.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach((function(r){e.setAttribute(r,t.attributes[r])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var s,l=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function f(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h=null,d=0;function y(t,e){var r,n,o;if(e.singleton){var i=d++;r=h||(h=u(e)),n=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=u(e),n=p.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=a(t,e);return c(r,e),function(t){for(var n=[],i=0;i<r.length;i++){var u=r[i],s=o[u.id];s&&(s.refs--,n.push(s))}t&&c(a(t,e),e);for(var l=0;l<n.length;l++){var f=n[l];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete o[f.id]}}}}},function(t,e,r){"use strict";r.r(e);var n=r(6),o=r.n(n),i=r(1),a=r.n(i),c=r(7),u=r.n(c),s=r(8),l=r.n(s),f=r(4),p=r.n(f),h=r(5),d=r.n(h),y=r(9),m=r.n(y),v=r(10),g=r.n(v),b=r(2),w=r.n(b),x=r(11),k=r.n(x),E=r(3),S=r.n(E),O=r(0),j=r.n(O),P=(r(14),function(){function t(e){p()(this,t),this.time=e,this.timeout=null,this.close=null}return d()(t,[{key:"getPromise",value:function(){var t=this;return new Promise((function(e,r){t.close=r,t.timeout=setTimeout((function(){e()}),t.time)}))}},{key:"cancel",value:function(){return this.timeout&&clearTimeout(this.timeout),this.close&&this.close(),{isCanceled:!0}}}]),t}()),_=function(t){var e=window.scrollY||window.pageYOffset,r=t.getBoundingClientRect(),n=r.top+e,o=e,i=e+window.innerHeight,a=n,c=n+r.height;return c>=o&&c<=i||a<=i&&a>=o},C=function(t){var e=Number(t);return e<0&&(e=0),e>100&&(e=100),e},R=function(t){var e=252-2.52*C(t);return"".concat(e,"%")},L=function(t,e){var r=C(t),n=e&&e.poor||"#F32013",o=e&&e.fair||"#ff6700",i=e&&e.good||"rgb(255, 217, 0)",a=e&&e.excellent||"#48AE2C";return r<25&&n||r<60&&o||r<81&&i||a},N=function(t){for(var e=t.split(""),r="",n=0;n<e.length&&!isNaN(Number(e[n]));n++)r+=e[n];return r},A=function(t){var e=Number(N(t));return e<20||isNaN(e)?250:"%"===t.trim().slice(-1)?e/2+"%":e/2},I={width:function(t,e){if(!t[e]||"string"!=typeof t[e])return new Error("Invalid ".concat(e," supplied to the progress bar component. Please provide a width!"))},percentage:function(t,e){if(!t[e]||t[e]&&"string"!=typeof t[e])return new Error("Invalid ".concat(e," supplied to progress bar component. Please provide a percentage value!"))},height:function(t,e){if(t.rect&&(!t[e]||t[e]&&"string"!=typeof t[e]))return new Error("Invalid ".concat(e," supplied to progress bar component. Please provide a height!"))},rectPadding:function(t,e){if(t.rect&&(!t.height||"string"!=typeof t.height))return new Error("Invalid information supplied to progress bar component. Please provide a height before you provide this ".concat(e,"!"))},trackBorderColor:function(t,e){if(t[e]&&"string"!=typeof t[e])return new Error("Invalid ".concat(e," supplied to progress bar component!"))},fontColor:function(t,e){if(t[e]&&"string"!=typeof t[e])return new Error("Invalid ".concat(e," supplied to progress bar component!"))},rectBorderRadius:function(t,e){if(t[e]&&"string"!=typeof t[e])return new Error("Invalid ".concat(e," supplied to progress bar component!"))},trackPathColor:function(t,e){if(t[e]&&"string"!=typeof t[e])return new Error("Invalid ".concat(e," supplied to progress bar component!"))},hollowBackgroundColor:function(t,e){if(t[e]&&"string"!=typeof t[e])return new Error("Invalid ".concat(e," supplied to progress bar component!"))},scrollArea:function(t,e){if(t[e]&&"object"!=a()(t[e]))return new Error("Invalid ".concat(e," supplied to progress bar component!"))},defColor:function(t,e){if(t[e]&&"object"==a()(t[e])){for(var r=Object.keys(t[e]),n=0;n<r.length;n++)if("string"!=typeof t[e][r[n]])return new Error("Invalid  property Key ".concat(r[n]," for ").concat(e," supplied to progress bar component!"))}else if(t[e]&&"object"!==a()(t[e]))return new Error("Invalid ".concat(e," supplied to progress bar component!"))}},T=function(t){var e=t.percentage,r=t.radius,n=t.trackWidth,o=t.trackPathColor,i=t.fontColor,a=t.trackBorderColor,c=t.defColor,u=t.hollowBackgroundColor,s=t.trackRef,l=t.animate,f=t.counter,p=!isNaN(Number(N(n)))&&.4*N(n)||4;return j.a.createElement("div",{className:"progress-bar-circ-container"},j.a.createElement("h2",{className:"progress-bar-percent",style:{fontSize:"".concat(.2*r,"px"),color:i}},f,"%"),j.a.createElement("svg",{height:"".concat(r||"183"),width:"".concat(r||"183")},j.a.createElement("circle",{className:"progress-bar-trackPath-background",ref:s,cx:"50%",cy:"50%",r:"40%",stroke:o||"rgba(158, 158, 158, 0.322)",strokeWidth:p+"%",fill:"none"}),j.a.createElement("circle",{className:"progress-bar-track ".concat(l&&"addAnimate"),ref:s,cx:"50%",cy:"50%",r:"40%",stroke:e&&L(e,c),strokeWidth:p+"%",fill:"none",strokeDasharray:"252%",strokeDashoffset:"252%"}),j.a.createElement("circle",{cx:"50%",cy:"50%",r:"".concat(40+p/2,"%")||!1,stroke:a||"rgba(158, 158, 158, 0.3)",strokeWidth:"1",fill:"none"}),j.a.createElement("circle",{className:"progress-bar-hollow",cx:"50%",cy:"50%",r:"".concat(40-p/2,"%")||!1,stroke:a||"rgba(158, 158, 158, 0.3)",strokeWidth:"1",fill:u||"none"})))},$=function(t){var e=t.percentage,r=t.trackWidth,n=t.trackPathColor,o=t.fontColor,i=t.trackBorderColor,a=t.defColor,c=(t.width,t.counter),u=t.rectTrackRef,s=t.animate,l=t.rectBorderRadius,f=t.trackBorderRadius,p=t.rectPadding,h=t.fontSize,d=t.height;return j.a.createElement("div",{className:"progress-bar-rect-wrap-container"},j.a.createElement("div",{className:"progress-bar-rect-wrapper",style:{border:"".concat(r||"1px"," solid ").concat(i),padding:"".concat(p),borderRadius:"".concat(l),height:"".concat(d)}},j.a.createElement("div",{style:{backgroundColor:"".concat(n),height:"100%"}},j.a.createElement("div",{ref:u,className:"inner-rect-bar ".concat(s&&"addRectAnimate"),style:{width:"0px",height:"100%",backgroundColor:L(e,a),borderRadius:"".concat(f||l||"0px")}}))),j.a.createElement("h2",{className:"rect-progress-bar-percent",style:{display:"flex",fontSize:"".concat(h||"calc(".concat(d," * 1.6)")),margin:"1em",color:o}},c,"%"))};function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function M(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(r,!0).forEach((function(e){S()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var B=function(t){function e(){var t,r;p()(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return r=m()(this,(t=g()(e)).call.apply(t,[this].concat(o))),S()(w()(r),"state",{animate:!1,counter:0,responsiveRadius:0,scrollAreaIsSet:null,stepDelay:null,countDelay:null}),S()(w()(r),"myRef",Object(O.createRef)()),S()(w()(r),"rectTrackRef",Object(O.createRef)()),S()(w()(r),"trackRef",Object(O.createRef)()),S()(w()(r),"animateCount",l()(u.a.mark((function t(){var e,n,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r.setState({counter:0}),e=C(r.props.percentage),n=new P(500),o=new P(1e3/e),r.setState({stepDelay:n,countDelay:o}),t.next=8,n.getPromise();case 8:if(!(r.state.counter<e)){t.next=14;break}return t.next=11,o.getPromise();case 11:r.setState((function(t){return M({},t,{counter:t.counter+1})})),t.next=8;break;case 14:t.next=18;break;case 16:t.prev=16,t.t0=t.catch(0);case 18:case"end":return t.stop()}}),t,null,[[0,16]])})))),S()(w()(r),"animateOnScroll",(function(){!r.state.animate&&_(r.myRef.current)&&(r.animateCount(),r.setState({animate:!0}),r.props.rect?r.rectTrackRef.current.style.setProperty("--rectLevel","".concat(C(r.props.percentage),"%")):r.trackRef.current.style.setProperty("--level",R(r.props.percentage)))})),r}return k()(e,t),d()(e,[{key:"componentDidMount",value:function(){this.animateOnScroll(),this.setState({scrollAreaIsSet:!1})}},{key:"componentDidUpdate",value:function(){this.state.scrollAreaIsSet||(this.setState({scrollAreaIsSet:!0}),this.props.scrollArea&&"object"==a()(this.props.scrollArea)?this.props.scrollArea.addEventListener("scroll",this.animateOnScroll):document.addEventListener("scroll",this.animateOnScroll))}},{key:"componentWillUnmount",value:function(){this.props.scrollArea&&"object"==a()(this.props.scrollArea)?this.props.scrollArea.removeEventListener("scroll",this.animateOnScroll):document.removeEventListener("scroll",this.animateOnScroll),this.state.stepDelay&&this.state.stepDelay.cancel(),this.state.countDelay&&this.state.countDelay.cancel()}},{key:"render",value:function(){var t=this.props,e=t.width,r=t.rect;return j.a.createElement("div",{ref:this.myRef,className:"progress-bar",style:{width:"".concat(e)}},r?j.a.createElement($,o()({},this.props,{rectTrackRef:this.rectTrackRef,counter:this.state.counter,animate:this.state.animate})):j.a.createElement(T,o()({},this.props,{radius:A(this.props.width),animate:this.state.animate,counter:this.state.counter,trackRef:this.trackRef})))}}]),e}(O.Component);B.propTypes=I,e.default=B}])},47:function(t,e,r){"use strict";t.exports=r(48)},48:function(t,e,r){"use strict";var n=r(12),o="function"===typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"===typeof Symbol&&Symbol.iterator;function v(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function w(t,e,r){this.props=t,this.context=e,this.refs=b,this.updater=r||g}function x(){}function k(t,e,r){this.props=t,this.context=e,this.refs=b,this.updater=r||g}w.prototype.isReactComponent={},w.prototype.setState=function(t,e){if("object"!==typeof t&&"function"!==typeof t&&null!=t)throw Error(v(85));this.updater.enqueueSetState(this,t,e,"setState")},w.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},x.prototype=w.prototype;var E=k.prototype=new x;E.constructor=k,n(E,w.prototype),E.isPureReactComponent=!0;var S={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function P(t,e,r){var n,o={},a=null,c=null;if(null!=e)for(n in void 0!==e.ref&&(c=e.ref),void 0!==e.key&&(a=""+e.key),e)O.call(e,n)&&!j.hasOwnProperty(n)&&(o[n]=e[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];o.children=s}if(t&&t.defaultProps)for(n in u=t.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:i,type:t,key:a,ref:c,props:o,_owner:S.current}}function _(t){return"object"===typeof t&&null!==t&&t.$$typeof===i}var C=/\/+/g,R=[];function L(t,e,r,n){if(R.length){var o=R.pop();return o.result=t,o.keyPrefix=e,o.func=r,o.context=n,o.count=0,o}return{result:t,keyPrefix:e,func:r,context:n,count:0}}function N(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>R.length&&R.push(t)}function A(t,e,r,n){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var c=!1;if(null===t)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case a:c=!0}}if(c)return r(n,t,""===e?"."+T(t,0):e),1;if(c=0,e=""===e?".":e+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=e+T(o=t[u],u);c+=A(o,s,r,n)}else if(null===t||"object"!==typeof t?s=null:s="function"===typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"===typeof s)for(t=s.call(t),u=0;!(o=t.next()).done;)c+=A(o=o.value,s=e+T(o,u++),r,n);else if("object"===o)throw r=""+t,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}function I(t,e,r){return null==t?0:A(t,"",e,r)}function T(t,e){return"object"===typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,(function(t){return e[t]}))}(t.key):e.toString(36)}function $(t,e){t.func.call(t.context,e,t.count++)}function D(t,e,r){var n=t.result,o=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?M(t,n,r,(function(t){return t})):null!=t&&(_(t)&&(t=function(t,e){return{$$typeof:i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,o+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(C,"$&/")+"/")+r)),n.push(t))}function M(t,e,r,n,o){var i="";null!=r&&(i=(""+r).replace(C,"$&/")+"/"),I(t,D,e=L(e,i,n,o)),N(e)}var B={current:null};function F(){var t=B.current;if(null===t)throw Error(v(321));return t}var U={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n};e.Children={map:function(t,e,r){if(null==t)return t;var n=[];return M(t,n,null,e,r),n},forEach:function(t,e,r){if(null==t)return t;I(t,$,e=L(null,null,e,r)),N(e)},count:function(t){return I(t,(function(){return null}),null)},toArray:function(t){var e=[];return M(t,e,null,(function(t){return t})),e},only:function(t){if(!_(t))throw Error(v(143));return t}},e.Component=w,e.Fragment=c,e.Profiler=s,e.PureComponent=k,e.StrictMode=u,e.Suspense=h,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,e.cloneElement=function(t,e,r){if(null===t||void 0===t)throw Error(v(267,t));var o=n({},t.props),a=t.key,c=t.ref,u=t._owner;if(null!=e){if(void 0!==e.ref&&(c=e.ref,u=S.current),void 0!==e.key&&(a=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)O.call(e,l)&&!j.hasOwnProperty(l)&&(o[l]=void 0===e[l]&&void 0!==s?s[l]:e[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:i,type:t.type,key:a,ref:c,props:o,_owner:u}},e.createContext=function(t,e){return void 0===e&&(e=null),(t={$$typeof:f,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:t},t.Consumer=t},e.createElement=P,e.createFactory=function(t){var e=P.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:p,render:t}},e.isValidElement=_,e.lazy=function(t){return{$$typeof:y,_ctor:t,_status:-1,_result:null}},e.memo=function(t,e){return{$$typeof:d,type:t,compare:void 0===e?null:e}},e.useCallback=function(t,e){return F().useCallback(t,e)},e.useContext=function(t,e){return F().useContext(t,e)},e.useDebugValue=function(){},e.useEffect=function(t,e){return F().useEffect(t,e)},e.useImperativeHandle=function(t,e,r){return F().useImperativeHandle(t,e,r)},e.useLayoutEffect=function(t,e){return F().useLayoutEffect(t,e)},e.useMemo=function(t,e){return F().useMemo(t,e)},e.useReducer=function(t,e,r){return F().useReducer(t,e,r)},e.useRef=function(t){return F().useRef(t)},e.useState=function(t){return F().useState(t)},e.version="16.14.0"}}]);
//# sourceMappingURL=6.fc6458ed.chunk.js.map