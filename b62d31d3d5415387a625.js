(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{403:function(e,t,n){},412:function(e,t,n){"use strict";var r=n(403);n.n(r).a},421:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"header"},[t("div",{staticClass:"wrapper wrapper-flex"},[t("user"),t("span",{staticClass:"header__title"},[this._v("Панель администрирования")]),t("a",{staticClass:"logout",attrs:{href:"#"},on:{click:this.logout}},[this._v("Выйти")])],1)])};r._withStripped=!0;var o=n(27),a=n(99);function i(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={name:"Header",components:{user:function(){return n.e(4).then(n.bind(null,430))}},methods:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}({},Object(o.b)("user",["logout"]),{logout:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.post("/logout");case 3:t=e.sent,n=t.data.token,localStorage.removeItem("token",n),delete a.a.defaults.headers.Authorization,this.$router.replace("/login"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,s,"next",e)}function s(e){i(a,r,o,c,s,"throw",e)}c(void 0)})});return function(){return t.apply(this,arguments)}}()})},u=(n(412),n(42)),l=Object(u.a)(s,r,[],!1,null,null,null);l.options.__file="src/admin/components/header.vue";t.default=l.exports}}]);