_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,l=d.length;c<l;c++){var s=d[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var f=a.props[s],p=r[s]||new Set;"name"===s&&i||!p.has(f)?(p.add(f),r[s]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),a=n.n(r),o=n("g4pe"),i=n.n(o),u=n("ZWax"),c=n.n(u),l=a.a.createElement;function s(e){var t=e.children;return l("div",{className:c.a.container},l(i.a,null,l("meta",{name:"description",cotext:"\u81ea\u5df1\u7d39\u4ecb\u517c\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u7d39\u4ecb\u30da\u30fc\u30b8\u3067\u3059\u3002 "}),l("meta",{name:"og:title",context:"\u81ea\u5df1\u7d39\u4ecb"})),l("header",{className:c.a.header},l("h2",null,"Introductoin")),l("main",null,t))}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},HE7B:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("q1tI"),a=n.n(r),o=n("g4pe"),i=n.n(o),u=n("Pn2L"),c=n.n(u),l=n("CafY"),s=n("YFqc"),f=n.n(s),d=a.a.createElement;function p(){return d(l.a,null,d(i.a,null,d("title",null,"\u81ea\u5df1\u7d39\u4ecb")),d("h4",{className:c.a.profileTitle},"\u81ea\u5df1\u7d39\u4ecb"),d("div",{className:c.a.profile},d("span",{className:c.a.inlinePc},"\uff12\uff11\u5352\u60c5\u5831\u7cfb\u5c02\u9580\u5b66\u6821\uff13\u5e74\u751f\u3000\u3000"),d("span",{className:c.a.inlinePc},"Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30b9\u30de\u30db\u30a2\u30d7\u30ea\u306e\u958b\u767a\u3092\u3057\u3066\u3044\u307e\u3059\u3002"),d("br",null),d("span",{className:c.a.inlinePc},"\u30e1\u30a4\u30f3PC\uff1aThinkPad X1 Carbon(6Gen)\u3000\u3000"),d("span",{className:c.a.inlinePc},"\u30e1\u30a4\u30f3OS\uff1aLinux(Elementary OS)")),d("h4",{className:c.a.profileTitle},"\u7d4c\u9a13\u30fb\u5b9f\u7e3e"),d("div",null,d("ul",{className:c.a.unorderList},d("li",null,"\u30e4\u30d5\u30fc\u682a\u5f0f\u4f1a\u793e\u4e3b\u50acHack-U 2019 Fukuoka : \u30e4\u30d5\u30fc\u8cde"),d("li",null,"\u30a2\u30b9\u30af\u30eb\u682a\u5f0f\u4f1a\u793e : \u30a4\u30f3\u30bf\u30fc\u30f3\u30b7\u30c3\u30d7(5\u65e5\u9593)"),d("li",null,"Triple Four\u682a\u5f0f\u4f1a\u793e : \u30a2\u30eb\u30d0\u30a4\u30c8(6\u30f6\u6708)"))),d("h4",{className:c.a.profileTitle},"\u5404\u7a2e\u30ea\u30f3\u30af"),d("div",{className:c.a.profile+" "+c.a.btnList},d("a",{href:"https://github.com/hoashi-akane",className:c.a.btn+" "+c.a.svgBtn},d("svg",null,d("rect",{x:"2",y:"2",rx:"2",fill:"none",width:"200",height:"50"})),d("span",null,"GitHub")),d(f.a,{href:"/product/list"},d("a",{className:c.a.btn+" "+c.a.svgBtn},d("svg",null,d("rect",{x:"2",y:"2",rx:"2",fill:"none",width:"200",height:"50"})),d("span",null,"\u958b\u767a\u30b3\u30f3\u30c6\u30f3\u30c4"))),d("a",{href:"#",className:c.a.btn+" "+c.a.svgBtn},d("svg",null,d("rect",{x:"2",y:"2",rx:"2",fill:"none",width:"200",height:"50"})),d("span",null,"\u4eca\u5f8c\u3084\u308a\u305f\u3044\u3053\u3068"))))}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Pn2L:function(e,t,n){e.exports={container:"Introduction_container__14sdG",inlinePc:"Introduction_inlinePc__25F7u",profile:"Introduction_profile__2vkzH",profileTitle:"Introduction_profileTitle__1aOuP",unorderList:"Introduction_unorderList__2c5Ug",btnList:"Introduction_btnList__2-4vs",btn:"Introduction_btn__1qphM",svgBtn:"Introduction_svgBtn__EuqkZ"}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},TKNU:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/introduction",function(){return n("HE7B")}])},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),f=function(e){i(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},ZWax:function(e,t,n){e.exports={container:"Layout_container__oiF2U"}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),i=n("elyg"),u=n("nOHt"),c=n("vNVm"),l={};function s(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],u=n[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):u||o}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,_=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=o.Children.only(h),b=g&&"object"===typeof g&&g.ref,M=(0,c.useIntersection)({rootMargin:"200px"}),w=r(M,2),x=w[0],I=w[1],k=o.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);(0,o.useEffect)((function(){var e=I&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof _?_:n&&n.locale,a=l[d+"%"+p+(r?"%"+r:"")];e&&!a&&s(n,d,p,{locale:r})}),[p,d,I,_,t,n]);var P={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,n,d,p,v,m,y,_)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),s(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var C="undefined"!==typeof _?_:n&&n.locale,E=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,C,n&&n.locales,n&&n.domainLocales);P.href=E||(0,i.addBasePath)((0,i.addLocale)(p,C,n&&n.defaultLocale))}return o.default.cloneElement(g,P)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=(0,a.useRef)(),l=(0,a.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),u.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=n("q1tI"),o=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var u=new Map}},[["TKNU",0,1,2]]]);