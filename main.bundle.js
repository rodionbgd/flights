!function(){var t={553:function(t){var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(t,r,e){var n=s;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return L()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===s)throw n=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=d;var u=l(t,r,e);if("normal"===u.type){if(n=e.done?h:p,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=h,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var s="suspendedStart",p="suspendedYield",d="executing",h="completed",v={};function y(){}function g(){}function b(){}var m={};u(m,i,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(k([])));O&&O!==e&&n.call(O,i)&&(m=O);var E=b.prototype=y.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function P(t,r){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function A(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:r,done:!0}}return g.prototype=b,u(E,"constructor",b),u(b,"constructor",g),g.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},j(P.prototype),u(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new P(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),u(E,c,"Generator"),u(E,i,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),A(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;A(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},757:function(t,r,e){t.exports=e(553)}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)};var n={};!function(){"use strict";function t(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function r(r){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=r.apply(e,n);function c(r){t(a,o,i,c,u,"next",r)}function u(r){t(a,o,i,c,u,"throw",r)}c(void 0)}))}}e.d(n,{q0:function(){return er},X4:function(){return ir},w4:function(){return ar},So:function(){return cr},h:function(){return rr}});var o=e(757),i=e.n(o);function a(t){for(var r=arguments.length,e=Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(e.length?" "+e.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function c(t){return!!t&&!!t[H]}function u(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var r=Object.getPrototypeOf(t);if(null===r)return!0;var e=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return e===Object||"function"==typeof e&&Function.toString.call(e)===V}(t)||Array.isArray(t)||!!t[W]||!!t.constructor[W]||h(t)||v(t))}function f(t,r,e){void 0===e&&(e=!1),0===l(t)?(e?Object.keys:$)(t).forEach((function(n){e&&"symbol"==typeof n||r(n,t[n],t)})):t.forEach((function(e,n){return r(n,e,t)}))}function l(t){var r=t[H];return r?r.i>3?r.i-4:r.i:Array.isArray(t)?1:h(t)?2:v(t)?3:0}function s(t,r){return 2===l(t)?t.has(r):Object.prototype.hasOwnProperty.call(t,r)}function p(t,r,e){var n=l(t);2===n?t.set(r,e):3===n?(t.delete(r),t.add(e)):t[r]=e}function d(t,r){return t===r?0!==t||1/t==1/r:t!=t&&r!=r}function h(t){return X&&t instanceof Map}function v(t){return q&&t instanceof Set}function y(t){return t.o||t.t}function g(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var r=J(t);delete r[H];for(var e=$(r),n=0;n<e.length;n++){var o=e[n],i=r[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(r[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),r)}function b(t,r){return void 0===r&&(r=!1),w(t)||c(t)||!u(t)||(l(t)>1&&(t.set=t.add=t.clear=t.delete=m),Object.freeze(t),r&&f(t,(function(t,r){return b(r,!0)}),!0)),t}function m(){a(2)}function w(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function O(t){var r=Y[t];return r||a(18,t),r}function E(){return B}function j(t,r){r&&(O("Patches"),t.u=[],t.s=[],t.v=r)}function P(t){_(t),t.p.forEach(A),t.p=null}function _(t){t===B&&(B=t.l)}function S(t){return B={p:[],l:B,h:t,m:!0,_:0}}function A(t){var r=t[H];0===r.i||1===r.i?r.j():r.O=!0}function x(t,r){r._=r.p.length;var e=r.p[0],n=void 0!==t&&t!==e;return r.h.g||O("ES5").S(r,t,n),n?(e[H].P&&(P(r),a(4)),u(t)&&(t=k(r,t),r.l||D(r,t)),r.u&&O("Patches").M(e[H].t,t,r.u,r.s)):t=k(r,e,[]),P(r),r.u&&r.v(r.u,r.s),t!==G?t:void 0}function k(t,r,e){if(w(r))return r;var n=r[H];if(!n)return f(r,(function(o,i){return L(t,n,r,o,i,e)}),!0),r;if(n.A!==t)return r;if(!n.P)return D(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=g(n.k):n.o;f(3===n.i?new Set(o):o,(function(r,i){return L(t,n,o,r,i,e)})),D(t,o,!1),e&&t.u&&O("Patches").R(n,e,t.u,t.s)}return n.o}function L(t,r,e,n,o,i){if(c(o)){var a=k(t,o,i&&r&&3!==r.i&&!s(r.D,n)?i.concat(n):void 0);if(p(e,n,a),!c(a))return;t.m=!1}if(u(o)&&!w(o)){if(!t.h.F&&t._<1)return;k(t,o),r&&r.A.l||D(t,o)}}function D(t,r,e){void 0===e&&(e=!1),t.h.F&&t.m&&b(r,e)}function I(t,r){var e=t[H];return(e?y(e):t)[r]}function N(t,r){if(r in t)for(var e=Object.getPrototypeOf(t);e;){var n=Object.getOwnPropertyDescriptor(e,r);if(n)return n;e=Object.getPrototypeOf(e)}}function T(t){t.P||(t.P=!0,t.l&&T(t.l))}function R(t){t.o||(t.o=g(t.t))}function F(t,r,e){var n=h(r)?O("MapSet").N(r,e):v(r)?O("MapSet").T(r,e):t.g?function(t,r){var e=Array.isArray(t),n={i:e?1:0,A:r?r.A:E(),P:!1,I:!1,D:{},l:r,t,k:null,o:null,j:null,C:!1},o=n,i=Q;e&&(o=[n],i=Z);var a=Proxy.revocable(o,i),c=a.revoke,u=a.proxy;return n.k=u,n.j=c,u}(r,e):O("ES5").J(r,e);return(e?e.A:E()).p.push(n),n}function C(t){return c(t)||a(22,t),function t(r){if(!u(r))return r;var e,n=r[H],o=l(r);if(n){if(!n.P&&(n.i<4||!O("ES5").K(n)))return n.t;n.I=!0,e=M(r,o),n.I=!1}else e=M(r,o);return f(e,(function(r,o){n&&function(t,r){return 2===l(t)?t.get(r):t[r]}(n.t,r)===o||p(e,r,t(o))})),3===o?new Set(e):e}(t)}function M(t,r){switch(r){case 2:return new Map(t);case 3:return Array.from(t)}return g(t)}var U,B,K="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,z="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,G=K?Symbol.for("immer-nothing"):((U={})["immer-nothing"]=!0,U),W=K?Symbol.for("immer-draftable"):"__$immer_draftable",H=K?Symbol.for("immer-state"):"__$immer_state",V=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),$="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,J=Object.getOwnPropertyDescriptors||function(t){var r={};return $(t).forEach((function(e){r[e]=Object.getOwnPropertyDescriptor(t,e)})),r},Y={},Q={get:function(t,r){if(r===H)return t;var e=y(t);if(!s(e,r))return function(t,r,e){var n,o=N(r,e);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,e,r);var n=e[r];return t.I||!u(n)?n:n===I(t.t,r)?(R(t),t.o[r]=F(t.A.h,n,t)):n},has:function(t,r){return r in y(t)},ownKeys:function(t){return Reflect.ownKeys(y(t))},set:function(t,r,e){var n=N(y(t),r);if(null==n?void 0:n.set)return n.set.call(t.k,e),!0;if(!t.P){var o=I(y(t),r),i=null==o?void 0:o[H];if(i&&i.t===e)return t.o[r]=e,t.D[r]=!1,!0;if(d(e,o)&&(void 0!==e||s(t.t,r)))return!0;R(t),T(t)}return t.o[r]===e&&"number"!=typeof e&&(void 0!==e||r in t.o)||(t.o[r]=e,t.D[r]=!0,!0)},deleteProperty:function(t,r){return void 0!==I(t.t,r)||r in t.t?(t.D[r]=!1,R(t),T(t)):delete t.D[r],t.o&&delete t.o[r],!0},getOwnPropertyDescriptor:function(t,r){var e=y(t),n=Reflect.getOwnPropertyDescriptor(e,r);return n?{writable:!0,configurable:1!==t.i||"length"!==r,enumerable:n.enumerable,value:e[r]}:n},defineProperty:function(){a(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){a(12)}},Z={};f(Q,(function(t,r){Z[t]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),Z.deleteProperty=function(t,r){return Z.set.call(this,t,r,void 0)},Z.set=function(t,r,e){return Q.set.call(this,t[0],r,e,t[0])};var tt=function(){function t(t){var r=this;this.g=z,this.F=!0,this.produce=function(t,e,n){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var i=r;return function(t){var r=this;void 0===t&&(t=o);for(var n=arguments.length,a=Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=arguments[c];return i.produce(t,(function(t){var n;return(n=e).call.apply(n,[r,t].concat(a))}))}}var c;if("function"!=typeof e&&a(6),void 0!==n&&"function"!=typeof n&&a(7),u(t)){var f=S(r),l=F(r,t,void 0),s=!0;try{c=e(l),s=!1}finally{s?P(f):_(f)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return j(f,n),x(t,f)}),(function(t){throw P(f),t})):(j(f,n),x(c,f))}if(!t||"object"!=typeof t){if(void 0===(c=e(t))&&(c=t),c===G&&(c=void 0),r.F&&b(c,!0),n){var p=[],d=[];O("Patches").M(t,c,p,d),n(p,d)}return c}a(21,t)},this.produceWithPatches=function(t,e){if("function"==typeof t)return function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return r.produceWithPatches(e,(function(r){return t.apply(void 0,[r].concat(o))}))};var n,o,i=r.produce(t,e,(function(t,r){n=t,o=r}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(t){return[t,n,o]})):[i,n,o]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var r=t.prototype;return r.createDraft=function(t){u(t)||a(8),c(t)&&(t=C(t));var r=S(this),e=F(this,t,void 0);return e[H].C=!0,_(r),e},r.finishDraft=function(t,r){var e=(t&&t[H]).A;return j(e,r),x(void 0,e)},r.setAutoFreeze=function(t){this.F=t},r.setUseProxies=function(t){t&&!z&&a(20),this.g=t},r.applyPatches=function(t,r){var e;for(e=r.length-1;e>=0;e--){var n=r[e];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}e>-1&&(r=r.slice(e+1));var o=O("Patches").$;return c(t)?o(t,r):this.produce(t,(function(t){return o(t,r)}))},t}(),rt=new tt,et=rt.produce;rt.produceWithPatches.bind(rt),rt.setAutoFreeze.bind(rt),rt.setUseProxies.bind(rt),rt.applyPatches.bind(rt),rt.createDraft.bind(rt),rt.finishDraft.bind(rt);const nt=et;function ot(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function it(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function at(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?it(Object(e),!0).forEach((function(r){ot(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):it(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function ct(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var ut="function"==typeof Symbol&&Symbol.observable||"@@observable",ft=function(){return Math.random().toString(36).substring(7).split("").join(".")},lt={INIT:"@@redux/INIT"+ft(),REPLACE:"@@redux/REPLACE"+ft(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ft()}};function st(t){if("object"!=typeof t||null===t)return!1;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}function pt(t,r,e){var n;if("function"==typeof r&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(ct(0));if("function"==typeof r&&void 0===e&&(e=r,r=void 0),void 0!==e){if("function"!=typeof e)throw new Error(ct(1));return e(pt)(t,r)}if("function"!=typeof t)throw new Error(ct(2));var o=t,i=r,a=[],c=a,u=!1;function f(){c===a&&(c=a.slice())}function l(){if(u)throw new Error(ct(3));return i}function s(t){if("function"!=typeof t)throw new Error(ct(4));if(u)throw new Error(ct(5));var r=!0;return f(),c.push(t),function(){if(r){if(u)throw new Error(ct(6));r=!1,f();var e=c.indexOf(t);c.splice(e,1),a=null}}}function p(t){if(!st(t))throw new Error(ct(7));if(void 0===t.type)throw new Error(ct(8));if(u)throw new Error(ct(9));try{u=!0,i=o(i,t)}finally{u=!1}for(var r=a=c,e=0;e<r.length;e++)(0,r[e])();return t}function d(t){if("function"!=typeof t)throw new Error(ct(10));o=t,p({type:lt.REPLACE})}function h(){var t,r=s;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(ct(11));function e(){t.next&&t.next(l())}return e(),{unsubscribe:r(e)}}})[ut]=function(){return this},t}return p({type:lt.INIT}),(n={dispatch:p,subscribe:s,getState:l,replaceReducer:d})[ut]=h,n}function dt(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return 0===r.length?function(t){return t}:1===r.length?r[0]:r.reduce((function(t,r){return function(){return t(r.apply(void 0,arguments))}}))}function ht(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return function(t){return function(){var e=t.apply(void 0,arguments),n=function(){throw new Error(ct(15))},o={getState:e.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=r.map((function(t){return t(o)}));return n=dt.apply(void 0,i)(e.dispatch),at(at({},e),{},{dispatch:n})}}}function vt(t){return function(r){var e=r.dispatch,n=r.getState;return function(r){return function(o){return"function"==typeof o?o(e,n,t):r(o)}}}}var yt=vt();yt.withExtraArgument=vt;const gt=yt;var bt,mt=(bt=function(t,r){return bt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])},bt(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}bt(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}),wt=function(t,r){for(var e=0,n=r.length,o=t.length;e<n;e++,o++)t[o]=r[e];return t},Ot=Object.defineProperty,Et=(Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols),jt=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable,_t=function(t,r,e){return r in t?Ot(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e},St=function(t,r){for(var e in r||(r={}))jt.call(r,e)&&_t(t,e,r[e]);if(Et)for(var n=0,o=Et(r);n<o.length;n++)e=o[n],Pt.call(r,e)&&_t(t,e,r[e]);return t},At="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?dt:dt.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var xt=function(t){function r(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=t.apply(this,e)||this;return Object.setPrototypeOf(o,r.prototype),o}return mt(r,t),Object.defineProperty(r,Symbol.species,{get:function(){return r},enumerable:!1,configurable:!0}),r.prototype.concat=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return t.prototype.concat.apply(this,r)},r.prototype.prepend=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 1===t.length&&Array.isArray(t[0])?new(r.bind.apply(r,wt([void 0],t[0].concat(this)))):new(r.bind.apply(r,wt([void 0],t.concat(this))))},r}(Array);function kt(t,r){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(r){var o=r.apply(void 0,e);if(!o)throw new Error("prepareAction did not return an object");return St(St({type:t,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:t,payload:e[0]}}return e.toString=function(){return""+t},e.type=t,e.match=function(r){return r.type===t},e}function Lt(t){var r,e={},n=[],o={addCase:function(t,r){var n="string"==typeof t?t:t.type;if(n in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[n]=r,o},addMatcher:function(t,r){return n.push({matcher:t,reducer:r}),o},addDefaultCase:function(t){return r=t,o}};return t(o),[e,n,r]}function Dt(t){var r=t.name;if(!r)throw new Error("`name` is a required option for createSlice");var e,n="function"==typeof t.initialState?t.initialState:nt(t.initialState,(function(){})),o=t.reducers||{},i=Object.keys(o),a={},f={},l={};function s(){var r="function"==typeof t.extraReducers?Lt(t.extraReducers):[t.extraReducers],e=r[0],o=void 0===e?{}:e,i=r[1],a=void 0===i?[]:i,l=r[2],s=void 0===l?void 0:l,p=St(St({},o),f);return function(t,r,e,n){void 0===e&&(e=[]);var o,i="function"==typeof r?Lt(r):[r,e,n],a=i[0],f=i[1],l=i[2];if(function(t){return"function"==typeof t}(t))o=function(){return nt(t(),(function(){}))};else{var s=nt(t,(function(){}));o=function(){return s}}function p(t,r){void 0===t&&(t=o());var e=wt([a[r.type]],f.filter((function(t){return(0,t.matcher)(r)})).map((function(t){return t.reducer})));return 0===e.filter((function(t){return!!t})).length&&(e=[l]),e.reduce((function(t,e){if(e){var n;if(c(t))return void 0===(n=e(t,r))?t:n;if(u(t))return nt(t,(function(t){return e(t,r)}));if(void 0===(n=e(t,r))){if(null===t)return t;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return t}),t)}return p.getInitialState=o,p}(n,p,a,s)}return i.forEach((function(t){var e,n,i=o[t],c=r+"/"+t;"reducer"in i?(e=i.reducer,n=i.prepare):e=i,a[t]=e,f[c]=e,l[t]=n?kt(c,n):kt(c)})),{name:r,reducer:function(t,r){return e||(e=s()),e(t,r)},actions:l,caseReducers:a,getInitialState:function(){return e||(e=s()),e.getInitialState()}}}function It(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function Nt(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?It(Object(e),!0).forEach((function(r){ot(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):It(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}!function(){function t(t,r){var e=o[t];return e?e.enumerable=r:o[t]=e={configurable:!0,enumerable:r,get:function(){var r=this[H];return Q.get(r,t)},set:function(r){var e=this[H];Q.set(e,t,r)}},e}function r(t){for(var r=t.length-1;r>=0;r--){var o=t[r][H];if(!o.P)switch(o.i){case 5:n(o)&&T(o);break;case 4:e(o)&&T(o)}}}function e(t){for(var r=t.t,e=t.k,n=$(e),o=n.length-1;o>=0;o--){var i=n[o];if(i!==H){var a=r[i];if(void 0===a&&!s(r,i))return!0;var c=e[i],u=c&&c[H];if(u?u.t!==a:!d(c,a))return!0}}var f=!!r[H];return n.length!==$(r).length+(f?0:1)}function n(t){var r=t.k;if(r.length!==t.t.length)return!0;var e=Object.getOwnPropertyDescriptor(r,r.length-1);if(e&&!e.get)return!0;for(var n=0;n<r.length;n++)if(!r.hasOwnProperty(n))return!0;return!1}var o={};!function(t,r){Y[t]||(Y[t]=r)}("ES5",{J:function(r,e){var n=Array.isArray(r),o=function(r,e){if(r){for(var n=Array(e.length),o=0;o<e.length;o++)Object.defineProperty(n,""+o,t(o,!0));return n}var i=J(e);delete i[H];for(var a=$(i),c=0;c<a.length;c++){var u=a[c];i[u]=t(u,r||!!i[u].enumerable)}return Object.create(Object.getPrototypeOf(e),i)}(n,r),i={i:n?5:4,A:e?e.A:E(),P:!1,I:!1,D:{},l:e,t:r,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,H,{value:i,writable:!0}),o},S:function(t,e,o){o?c(e)&&e[H].A===t&&r(t.p):(t.u&&function t(r){if(r&&"object"==typeof r){var e=r[H];if(e){var o=e.t,i=e.k,a=e.D,c=e.i;if(4===c)f(i,(function(r){r!==H&&(void 0!==o[r]||s(o,r)?a[r]||t(i[r]):(a[r]=!0,T(e)))})),f(o,(function(t){void 0!==i[t]||s(i,t)||(a[t]=!1,T(e))}));else if(5===c){if(n(e)&&(T(e),a.length=!0),i.length<o.length)for(var u=i.length;u<o.length;u++)a[u]=!1;else for(var l=o.length;l<i.length;l++)a[l]=!0;for(var p=Math.min(i.length,o.length),d=0;d<p;d++)i.hasOwnProperty(d)||(a[d]=!0),void 0===a[d]&&t(i[d])}}}}(t.p[0]),r(t.p))},K:function(t){return 4===t.i?e(t):n(t)}})}();var Tt=Dt({name:"flights",initialState:[],reducers:{createFlightsList:{reducer:function(t,r){Object.values(r.payload).forEach((function(r){t.push(r)}))},prepare:function(t){return{payload:Nt({},t)}}}}}),Rt=Dt({name:"airlines",initialState:[],reducers:{createAirlinesList:{reducer:function(t,r){Object.values(r.payload).forEach((function(r){t.push(r)}))},prepare:function(t){return{payload:Nt({},t)}}}}}),Ft=Dt({name:"filter",initialState:{},reducers:{editFilter:{reducer:function(t,r){return Nt(Nt({},t),r.payload)},prepare:function(t){return{payload:Nt({},t)}}}}}),Ct=Tt.actions.createFlightsList,Mt=Rt.actions.createAirlinesList,Ut=Ft.actions.editFilter;function Bt(){return Kt.apply(this,arguments)}function Kt(){return(Kt=r(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./json/flights.json");case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Xt(t){var r=new Set;return t.forEach((function(t){r.add(t.flight.carrier.caption)})),Array.from(r)}function qt(t){var r=rr.getState().airlines,e="";r.forEach((function(t){e+='\n         <li>\n            <input type="checkbox" data-airline="'.concat(t,'" checked>\n            <span>').concat(t,"</span>\n         </li>\n        ")})),t.innerHTML=e}function zt(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function Gt(t,r){if(t){if("string"==typeof t)return zt(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?zt(t,r):void 0}}function Wt(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i=[],a=!0,c=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==e.return||e.return()}finally{if(c)throw o}}return i}}(t,r)||Gt(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ht(t,r){return+t.flight.price.total.amount-+r.flight.price.total.amount}function Vt(t,r){return+r.flight.price.total.amount-+t.flight.price.total.amount}function $t(t,r){var e=t.flight.legs,n=r.flight.legs;return e.reduce((function(t,r){return t+r.duration}),0)-n.reduce((function(t,r){return t+r.duration}),0)}var Jt=document.getElementById("sort-flights").querySelector('input[type="radio"]:checked');function Yt(){var t='input[type="checkbox"]:checked',r=Jt.dataset.type,e=ir.querySelectorAll(t),n=Array.from(e).map((function(t){return+t.dataset.type})),o=[+ar.value,+cr.value],i=er.querySelectorAll(t);return{sort:r,change:n,price:o,airlines:Array.from(i).map((function(t){return t.dataset.airline}))}}var Qt=new Intl.DateTimeFormat("ru-RU",{weekday:"short",day:"numeric",month:"short"});function Zt(t){var r,e,n=Qt.formatToParts(t),o=null===(r=n.find((function(t){return"weekday"===t.type})))||void 0===r?void 0:r.value,i=null===(e=n.find((function(t){return"month"===t.type})))||void 0===e?void 0:e.value;return"".concat(t.getDate()," ").concat(i," ").concat(o)}function tr(t){var r=rr.getState(),e=function(t,r){var e,n=function(t){if(Array.isArray(t))return zt(t)}(e=r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||Gt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=new Set;Object.entries(t).forEach((function(r){var e=Wt(r,2),i=e[0],a=e[1];switch(i){case"change":1===a.length&&(n=n.filter((function(t){return t.flight.legs.every((function(t){return t.segments.length-1===a[0]}))})));break;case"price":if(!a.filter((function(t){return t})).length)break;var c=Wt(a,2),u=c[0],f=c[1];u||(u=0),f||(f=1/0),n=n.filter((function(t){return+t.flight.price.total.amount>=u&&+t.flight.price.total.amount<=f}));break;case"airlines":t.airlines.length&&(n=n.filter((function(r){return!!t.airlines.includes(r.flight.carrier.caption)&&(o.add(r.flight.carrier.caption),!0)})))}}));var i,a=Array.from(o);switch(Array.from(er.children).forEach((function(t){a.includes(t.children[1].innerHTML)?(t.children[0].checked=!0,t.children[0].disabled=!1):t.children[0].checked=!1})),t.sort){case"asc":i=Ht;break;case"desc":i=Vt;break;case"duration":i=$t}return n.sort(i)}(r.filter,r.flights),n="";e.forEach((function(t){var r=t.flight,e=r.price,o=r.legs;n+='\n           <li class="flights__item-wrapper">\n            <div class="flights__item__label">\n                <div>\n                    <img width="100" src="images/logo.png" alt="">\n                </div>\n                <div class="price">\n                    <div class="font-1_2rem">'.concat(e.total.amount,' &#8381;</div>\n                    <div class="font-0_8rem">Стоимость для одного взрослого пассажира</div>\n                </div>\n            </div>\n            '),o.forEach((function(t){var r=t.segments,e=r.at(-1),o=e.arrivalCity,i=e.arrivalAirport,a=e.arrivalDate,c="";r.length-1==1&&(c='<div class="flights__item__change orange-color">'.concat(t.segments.length-1," пересадка</div>")),r.forEach((function(r,e){var u,f,l,s=r.departureCity,p=r.departureAirport,d=r.arrivalCity,h=r.arrivalAirport,v=r.departureDate,y=r.arrivalDate,g=r.airline,b=r.travelDuration,m=new Date(v),w=new Date(y),O=d,E=h;e||(w=new Date(a),O=o,E=i,b=t.duration);var j=Zt(m),P=Zt(w);n+='\n                <div class="flights__item'.concat(e?"-hidden":"",'">\n                    <div class="flights__item__destination">\n                        <span>').concat(null==s?void 0:s.caption,", ").concat(null==p?void 0:p.caption,'</span>\n                        <span class="main-color">(').concat(null==p?void 0:p.uid,')</span>\n                        <span class="main-color"><i class="fa-solid fa-arrow-right-long"></i></span>\n                        <span>').concat(null===(u=O)||void 0===u?void 0:u.caption,", ").concat(null===(f=E)||void 0===f?void 0:f.caption,'</span>\n                        <span class="main-color">(').concat(null===(l=E)||void 0===l?void 0:l.uid,')\n                    </div>\n                    <div class="flights__item__schedule">\n                        <div>\n                            <span>').concat("0".concat(m.getHours()).slice(-2),":").concat("0".concat(m.getMinutes()).slice(-2),'</span>\n                            <span class="main-color font-1rem">').concat(j,'</span>\n                        </div>\n                        <div><span><i class="fa-regular fa-clock"></i> ').concat((b/60).toFixed()," ч ").concat((b%60).toFixed(),' мин</span></div>\n                        <div>\n                            <span class="main-color font-1rem">').concat(P,"</span>\n                            <span>  ").concat("0".concat(w.getHours()).slice(-2),":").concat("0".concat(w.getMinutes()).slice(-2),"</span>\n                        </div>\n                    </div>\n                    ").concat(c,'\n                    <div class="no-border">Рейс выполняет: ').concat(g.caption,"</div>\n                </div>\n                ")}))})),n+='<div class="flights__item__choose white-color no-border">\n                ВЫБРАТЬ\n            </div>\n       </li>\n        '})),t.innerHTML=n}var rr=function(t){var r,e=function(t){return function(t){void 0===t&&(t={});var r=t.thunk,e=void 0===r||r,n=(t.immutableCheck,t.serializableCheck,new xt);return e&&(function(t){return"boolean"==typeof t}(e)?n.push(gt):n.push(gt.withExtraArgument(e.extraArgument))),n}(t)},n=t||{},o=n.reducer,i=void 0===o?void 0:o,a=n.middleware,c=void 0===a?e():a,u=n.devTools,f=void 0===u||u,l=n.preloadedState,s=void 0===l?void 0:l,p=n.enhancers,d=void 0===p?void 0:p;if("function"==typeof i)r=i;else{if(!function(t){if("object"!=typeof t||null===t)return!1;var r=Object.getPrototypeOf(t);if(null===r)return!0;for(var e=r;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return r===e}(i))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');r=function(t){for(var r=Object.keys(t),e={},n=0;n<r.length;n++){var o=r[n];"function"==typeof t[o]&&(e[o]=t[o])}var i,a=Object.keys(e);try{!function(t){Object.keys(t).forEach((function(r){var e=t[r];if(void 0===e(void 0,{type:lt.INIT}))throw new Error(ct(12));if(void 0===e(void 0,{type:lt.PROBE_UNKNOWN_ACTION()}))throw new Error(ct(13))}))}(e)}catch(t){i=t}return function(t,r){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},c=0;c<a.length;c++){var u=a[c],f=e[u],l=t[u],s=f(l,r);if(void 0===s)throw r&&r.type,new Error(ct(14));o[u]=s,n=n||s!==l}return(n=n||a.length!==Object.keys(t).length)?o:t}}(i)}var h=c;"function"==typeof h&&(h=h(e));var v=ht.apply(void 0,h),y=dt;f&&(y=At(St({trace:!1},"object"==typeof f&&f)));var g=[v];return Array.isArray(d)?g=wt([v],d):"function"==typeof d&&(g=d(g)),pt(r,s,y.apply(void 0,g))}({reducer:{flights:Tt.reducer,airlines:Rt.reducer,filter:Ft.reducer}}),er=document.getElementById("airlines-list"),nr=document.getElementById("flights-list"),or=document.getElementById("sort-flights"),ir=document.getElementById("change-filter"),ar=document.getElementById("price-from"),cr=document.getElementById("price-to");function ur(){+cr.value&&+ar.value>+cr.value&&(ar.value=cr.value);var t=[+ar.value,+cr.value];rr.dispatch(Ut({price:t}))}function fr(){or.addEventListener("click",(function(t){var r=t.target;r.dataset.type&&rr.dispatch(Ut({sort:r.dataset.type}))})),ir.addEventListener("click",(function(t){if("input"===t.target.tagName.toLowerCase()){var r=ir.querySelectorAll('input[type="checkbox"]:checked'),e=Array.from(r).map((function(t){return+t.dataset.type}));rr.dispatch(Ut({change:e}))}})),ar.addEventListener("change",ur),cr.addEventListener("change",ur),er.addEventListener("click",(function(t){if("input"===t.target.tagName.toLowerCase()){var r=er.querySelectorAll('input[type="checkbox"]:checked'),e=Array.from(r).map((function(t){return t.dataset.airline}));rr.dispatch(Ut({airlines:e}))}}))}function lr(){return(lr=r(i().mark((function t(){var r,e,n,o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Bt();case 2:r=t.sent,e=r.result,n=e.flights,o=Xt(n),fr(),rr.dispatch(Ct(n)),rr.dispatch(Mt(o)),qt(er),rr.subscribe((function(){tr(nr)})),a=Yt(),rr.dispatch(Ut(a));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.addEventListener("load",(function(){return lr.apply(this,arguments)}))}()}();