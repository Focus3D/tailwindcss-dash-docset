_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,a=e.hasQuery,i=void 0!==a&&a;return n||r&&i}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"3o5W":function(e,t){e.exports={tailwindVersion:"2.0.1"}},"5fIB":function(e,t,n){var o=n("7eYB");e.exports=function(e){if(Array.isArray(e))return o(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var o,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(o=n("Xuae"))&&o.__esModule?o:{default:o},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var s=0,c=f.length;s<c;s++){var u=f[s];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var l=r.props[u],d=o[u]||new Set;d.has(l)?a=!1:(d.add(l),o[u]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),o=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:p,headManager:o,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var v=m;t.default=v},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var o=n("q1tI"),r=n.n(o),a=(n("WF7/"),n("lfCk"),n("YFqc")),i=n.n(a),s=n("fhQF"),c=n("II4a"),u=n("iuhU"),l=n("nOHt"),d=n.n(l),f=n("F7AD"),p=r.a.createElement;function m(e){var t=e.navIsOpen,n=e.onNavToggle;return p(r.a.Fragment,null,p("div",{className:"sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex"},p("div",{className:"flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center border-b border-gray-200 lg:border-b-0 lg:w-60 xl:w-72"},p(i.a,{href:"/"},p("a",{className:"overflow-hidden w-10 md:w-auto",onContextMenu:function(e){e.preventDefault(),d.a.push("/brand")}},p("span",{className:"sr-only"},"Tailwind CSS home page"),p(f.a,{className:"w-auto h-6"})))),p("div",{className:"flex-auto border-b border-gray-200 h-18 flex items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8"},p(c.a,null),p("div",{className:"flex items-center space-x-6"},p(s.a,{className:"hidden lg:block"}),p("a",{href:"https://github.com/tailwindlabs/tailwindcss",className:"text-gray-400 hover:text-gray-500 transition-colors duration-200"},p("span",{className:"sr-only"},"Tailwind CSS on GitHub"),p("svg",{width:"20",height:"20",viewBox:"0 0 16 16",fill:"currentColor"},p("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})))))),p("button",{type:"button",className:"fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 text-white block lg:hidden",onClick:function(){return n(!t)}},p("span",{className:"sr-only"},"Open site navigation"),p("svg",{width:"24",height:"24",fill:"none",className:Object(u.a)("absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform",{"opacity-0 scale-80":t})},p("path",{d:"M4 8h16M4 16h16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),p("svg",{width:"24",height:"24",fill:"none",className:Object(u.a)("absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform",{"opacity-0 scale-80":!t})},p("path",{d:"M6 18L18 6M6 6l12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))))}var v=n("ap0H"),h=n("8Kt/"),y=n.n(h),g="/_next/static/media/twitter-large-card.85c0ff9e455da585949ff0aa50981857.jpg",w=r.a.createElement,b=new function(e){var t=function(e,t){Object.keys(t).forEach((function(n){e[n]=t[n]}))},n={size:2,color:"#29e",className:"bar-of-progress",delay:80};e&&t(n,e);var o,r,a={position:"fixed",top:0,left:0,margin:0,padding:0,border:"none",borderRadius:0,backgroundColor:"currentColor",zIndex:1e4,height:"number"==typeof n.size?n.size+"px":n.size,color:n.color,opacity:0,width:"0%"},i={opacity:1,width:"99%",transition:"width 10s cubic-bezier(0.1, 0.05, 0, 1)"},s={opacity:0,width:"100%",transition:"width 0.1s ease-out, opacity 0.5s ease 0.2s"},c={opacity:.4,boxShadow:"3px 0 8px",height:"100%"};this.start=function(){r&&r.parentNode&&r.parentNode.removeChild(r),(r=document.body.appendChild(document.createElement("div"))).className=n.className+" stopped",t(r.style,a);var e=r.appendChild(document.createElement("div"));e.className="glow",t(e.style,c),null!=o&&clearTimeout(o),o=setTimeout((function(){o=null,r.className=n.className+" started",t(r.style,i)}),n.delay),r.scrollTop=0},this.finish=function(){null!=o&&(clearTimeout(o),o=null),r&&(r.className=n.className+" finished",t(r.style,s))}}({size:2,color:"#22D3EE",className:"bar-of-progress",delay:100});function E(e){var t,n,a,i=e.Component,s=e.pageProps,c=e.router,u=Object(o.useState)(!1),l=u[0],f=u[1];Object(o.useEffect)((function(){if(l)return d.a.events.on("routeChangeComplete",e),function(){d.a.events.off("routeChangeComplete",e)};function e(){f(!1)}}),[l]);var p=(null===(t=i.layoutProps)||void 0===t?void 0:t.Layout)||o.Fragment,h=(null===(n=i.layoutProps)||void 0===n?void 0:n.Layout)?{layoutProps:i.layoutProps,navIsOpen:l,setNavIsOpen:f}:{},b=(null===(a=i.layoutProps)||void 0===a?void 0:a.meta)||{},E=b.metaDescription||b.description||"Documentation for the Tailwind CSS framework.";return w(r.a.Fragment,null,w(v.a,{suffix:"Tailwind CSS"},b.metaTitle||b.title),w(y.a,null,w("meta",{key:"twitter:card",name:"twitter:card",content:"summary_large_image"}),w("meta",{key:"twitter:site",name:"twitter:site",content:"@tailwindcss"}),w("meta",{key:"twitter:description",name:"twitter:description",content:E}),w("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat(g)}),w("meta",{key:"twitter:creator",name:"twitter:creator",content:"@tailwindcss"}),w("meta",{key:"og:url",property:"og:url",content:"https://tailwindcss.com".concat(c.pathname)}),w("meta",{key:"og:type",property:"og:type",content:"article"}),w("meta",{key:"og:description",property:"og:description",content:E}),w("meta",{key:"og:image",property:"og:image",content:"https://tailwindcss.com".concat(g)})),"/"!==c.pathname&&w(m,{navIsOpen:l,onNavToggle:function(e){return f(e)}}),w(p,h,w(i,s)))}b.start(),b.finish(),d.a.events.on("routeChangeStart",b.start),d.a.events.on("routeChangeComplete",(function(){b.finish(),window.scrollTo(0,0)})),d.a.events.on("routeChangeError",b.finish)},"WF7/":function(e,t,n){},Xuae:function(e,t,n){"use strict";var o=n("mPvQ"),r=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),s=n("tCBg"),c=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=u(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(o(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("q1tI"),r=n.n(o),a=n("8Kt/"),i=n.n(a),s=r.a.createElement;function c(e){var t=e.suffix,n=e.children+(t?" - ".concat(t):"");return s(i.a,null,s("title",{key:"title"},n),s("meta",{key:"twitter:title",name:"twitter:title",content:n}),s("meta",{key:"og:title",property:"og:title",content:n}))}},cTJO:function(e,t,n){"use strict";var o=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var a,i=r(n("q1tI")),s=n("elyg"),c=n("nOHt"),u=new Map,l=window.IntersectionObserver,d={};var f=function(e,t){var n=a||(l?a=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function p(e,t,n,o){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),d[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),r=n&&n.pathname||"/",a=i.default.useMemo((function(){var t=(0,s.resolveHref)(r,e.href,!0),n=o(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,s.resolveHref)(r,e.as):i||a}}),[r,e.href,e.as]),u=a.href,m=a.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,w=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=i.Children.only(v),E=b&&"object"===typeof b&&b.ref,x=i.default.useRef(),C={ref:i.default.useCallback((function(e){(x.current&&(x.current(),x.current=void 0),t&&l&&e&&e.tagName&&(0,s.isLocalURL)(u))&&(d[u+"%"+m]||(x.current=f(e,(function(){p(n,u,m,{locale:"undefined"!==typeof w?w:n&&n.locale})}))));E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[t,E,u,m,n,w]),onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a,locale:c}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,u,m,h,y,g,w)}};return t&&(C.onMouseEnter=function(e){(0,s.isLocalURL)(u)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),p(n,u,m,{priority:!0}))}),(e.passHref||"a"===b.type&&!("href"in b.props))&&(C.href=(0,s.addBasePath)((0,s.addLocale)(m,"undefined"!==typeof w?w:n&&n.locale,n&&n.defaultLocale))),i.default.cloneElement(b,C)};t.default=m},fhQF:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("q1tI"),r=n.n(o),a=n("3o5W"),i=n("iuhU"),s=r.a.createElement;function c(e){var t=e.className,n=Object(o.useRef)();function r(e){e.preventDefault(),"v0"===n.current.value&&(window.location="https://tailwindcss-v0.netlify.app/"),"v1"===n.current.value&&(window.location="https://v1.tailwindcss.com/")}return s("form",{onSubmit:r,className:Object(i.a)("relative",t)},s("label",null,s("span",{className:"sr-only"},"Tailwind CSS Version"),s("select",{ref:n,className:"appearance-none block bg-transparent pr-7 py-1 text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200",onChange:r},s("option",{value:"v2"},"v",a.tailwindVersion),s("option",{value:"v1"},"v1.9.6"),s("option",{value:"v0"},"v0.7.4"))),s("svg",{className:"w-5 h-5 text-gray-400 absolute top-1/2 right-0 -mt-2.5 pointer-events-none",fill:"currentColor"},s("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"})))}},iuhU:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lfCk:function(e,t,n){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function i(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!r[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function c(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function u(n){n.metaKey||n.altKey||n.ctrlKey||(a(e.activeElement)&&s(e.activeElement),t=!0)}function l(e){t=!1}function d(e){a(e.target)&&(t||i(e.target))&&s(e.target)}function f(e){a(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),c(e.target))}function p(e){"hidden"===document.visibilityState&&(n&&(t=!0),m())}function m(){document.addEventListener("mousemove",h),document.addEventListener("mousedown",h),document.addEventListener("mouseup",h),document.addEventListener("pointermove",h),document.addEventListener("pointerdown",h),document.addEventListener("pointerup",h),document.addEventListener("touchmove",h),document.addEventListener("touchstart",h),document.addEventListener("touchend",h)}function v(){document.removeEventListener("mousemove",h),document.removeEventListener("mousedown",h),document.removeEventListener("mouseup",h),document.removeEventListener("pointermove",h),document.removeEventListener("pointerdown",h),document.removeEventListener("pointerup",h),document.removeEventListener("touchmove",h),document.removeEventListener("touchstart",h),document.removeEventListener("touchend",h)}function h(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,v())}document.addEventListener("keydown",u,!0),document.addEventListener("mousedown",l,!0),document.addEventListener("pointerdown",l,!0),document.addEventListener("touchstart",l,!0),document.addEventListener("visibilitychange",p,!0),m(),e.addEventListener("focus",d,!0),e.addEventListener("blur",f,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!==typeof window&&"undefined"!==typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(n){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!==typeof document&&e(document)}()},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r},mPvQ:function(e,t,n){var o=n("5fIB"),r=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return o(e)||r(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rePB:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},wx14:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return o}))}},[[0,0,2,1,12]]]);