(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"2W6z":function(e,t,r){"use strict";var n=function(){};e.exports=n},"3o5W":function(e,t){e.exports={tailwindVersion:"2.0.1"}},"7ljp":function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("q1tI"),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"===typeof e?e(t):i(i({},t),e)),r},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,b=d["".concat(o,".").concat(p)]||d[p]||f[p]||l;return r?a.a.createElement(b,i(i({ref:t},s),{},{components:r})):a.a.createElement(b,i({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"===typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},AI3G:function(e,t,r){"use strict";function n(e){return Array.isArray(e)?e:[e]}r.d(t,"a",(function(){return n}))},"As+U":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("q1tI"),a=r.n(n),l=r("iuhU"),o=a.a.createElement;function i(e){var{title:t,description:r,badge:n={},border:a=!0}=e;return t||r?o("div",{className:Object(l.a)("pb-10",{"border-b border-gray-200 mb-10":a})},o("div",{className:"flex items-center"},o("h1",{className:"text-3xl font-extrabold text-gray-900 tracking-tight"},t),n.key&&n.value&&o("dl",{className:"mt-0 mb-1 ml-3 flex-none inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-4 bg-green-150 text-green-900 tracking-tight"},o("dt",{className:"sr-only"},n.key),o("dd",null,n.value))),r&&o("p",{className:"mt-1 text-lg text-gray-500"},r)):null}},I6Nb:function(e,t,r){"use strict";r.r(t),r.d(t,"ContentsContext",(function(){return j})),r.d(t,"ContentsLayoutOuter",(function(){return C})),r.d(t,"ContentsLayout",(function(){return F}));var n=r("wx14"),a=r("Ff2n"),l=r("q1tI"),o=r.n(l),i=r("Nr79"),c=r.n(i),s=r("98BF");function u(e){return"[object Object]"===Object.prototype.toString.call(e)}var f=r("AI3G"),d=r("iuhU"),p=r("tc9R"),b=o.a.createElement,m=function e(t){return"object"!==typeof t?t:Array.isArray(t)?t.map(e):Object.keys(t).reduce((r,n)=>{var a=t[n],l="object"===typeof a?e(a):a;return r[n.replace(/([a-z])([A-Z])/g,(e,t,r)=>"".concat(t,"-").concat(r.toLowerCase()))]=l,r},{})};var g=Object(l.memo)(e=>{var{plugin:t,filterProperties:r,preview:n,sort:a=(e=>e),transformSelector:l=(e=>1===e.length?e:e.slice(1).replace(/\\/g,"")),transformProperties:o=(e=>{var{properties:t}=e;return t}),transformValue:i,custom:g}=e,v={};return Object(f.a)(t).forEach(e=>{Object.assign(v,function(e){if(!e)return{};var t={};return e()({addUtilities:e=>{e=Array.isArray(e)?e:[e];for(var r=0;r<e.length;r++)for(var n in e[r])t[n]=m(e[r][n])},config:()=>({future:"all"}),theme:(e,t)=>c()(s.defaultConfig.theme,e,t),variants:()=>[],e:e=>e.replace(/([:.])/g,"\\$1"),corePlugins:()=>!0}),t}(e))}),b("div",{className:"border-b border-gray-200 overflow-hidden relative"},b(p.a,{level:2,id:"class-reference",toc:!0,className:"relative"},b("span",{className:"sr-only"},"Default class reference")),b("div",{className:Object(d.a)("overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch",{"lg:max-h-sm":Object.keys(v).length>12})},g||b("table",{className:"w-full text-left border-collapse"},b("thead",null,b("tr",null,b("th",{className:"z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0"},b("div",{className:"pb-2 pr-2 border-b border-gray-200"},"Class")),b("th",{className:Object(d.a)("z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0",{"hidden sm:table-cell":n})},b("div",{className:Object(d.a)("pb-2 pl-2 border-b border-gray-200",{"pr-2":n})},"Properties")),n&&b("th",{className:"z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0"},b("div",{className:"pb-2 pl-2 border-b border-gray-200"},b("span",{className:"sr-only"},"Preview"),"\xa0")))),b("tbody",{className:"align-baseline"},a(Object.keys(v)).map((e,t)=>{var a=e,c=v[a];return b("tr",{key:e},b("td",{className:Object(d.a)("py-2 pr-2 font-mono text-xs text-violet-600 whitespace-nowrap",{"border-t border-gray-200":0!==t})},l(a)),b("td",{className:Object(d.a)("py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre",{"border-t border-gray-200":0!==t,"hidden sm:table-cell sm:pr-2":n})},function e(t){var{filter:r=(()=>!0),transformValue:n=(e=>e),indent:a=0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=[];return Object.keys(t).forEach(o=>{u(t[o])?(l.push("".concat(o," {")),l.push(e(t[o],{filter:r,transformValue:n,indent:a+1})),l.push("}")):Object(f.a)(t[o]).forEach((e,i)=>{r(o,e,t)&&l.push("".concat("  ".repeat(a)).concat(o,": ").concat(n(e),";"))})}),l.join("\n")}(o({selector:a,properties:c}),{filter:r,transformValue:i})),n&&n(c,{className:0===t?"":"border-t border-gray-200"}))})))))}),v=r("ekQu"),h=r("nOHt");var y=r("YFqc"),x=r.n(y),O=r("As+U"),w=o.a.createElement,j=Object(l.createContext)();function N(e){var{tableOfContents:t,currentSection:r}=e,n=Object(l.useContext)(v.a),a=Boolean(n);function i(){a&&n.setNavIsOpen(!1)}return w(o.a.Fragment,null,w("h5",{className:"text-gray-900 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs"},"On this page"),w("ul",{className:"overflow-x-hidden text-gray-500 font-medium"},t.map(e=>{var t=r===e.slug||e.children.findIndex(e=>{var{slug:t}=e;return t===r})>-1;return w(l.Fragment,{key:e.slug},w("li",null,w("a",{href:"#".concat(e.slug),onClick:i,className:Object(d.a)("block transform transition-colors duration-200 py-2 hover:text-gray-900",{"text-gray-900":t})},e.title)),e.children.map(e=>{var t=r===e.slug;return w("li",{className:Object(d.a)({"ml-4":a,"ml-2":!a}),key:e.slug},w("a",{href:"#".concat(e.slug),onClick:i,className:Object(d.a)("block py-2 transition-colors duration-200 hover:text-gray-900 font-medium",{"text-gray-900":t})},e.title))}))})))}function k(e){var t,{0:r,1:n}=Object(l.useState)(null===(t=e[0])||void 0===t?void 0:t.slug),{0:a,1:o}=Object(l.useState)([]),i=Object(l.useCallback)((e,t)=>{o(r=>[...r.filter(t=>e!==t.id),{id:e,top:t}])},[]),c=Object(l.useCallback)(e=>{o(t=>t.filter(t=>e!==t.id))},[]);return Object(l.useEffect)(()=>{if(0!==e.length&&0!==a.length)return window.addEventListener("scroll",t,{capture:!0,passive:!0}),t(),()=>window.removeEventListener("scroll",t,!0);function t(){var e=window.pageYOffset,t=window.innerHeight,r=a.concat([]).sort((e,t)=>e.top-t.top);if(e<=0)n(r[0].id);else if(e+t>=document.body.scrollHeight)n(r[r.length-1].id);else{for(var l=e+t/2,o=r[0].id,i=0;i<r.length;i++)l>=r[i].top&&(o=r[i].id);n(o)}}},[a,e]),{currentSection:r,registerHeading:i,unregisterHeading:c}}function C(e){var{children:t,layoutProps:r}=e,l=Object(a.a)(e,["children","layoutProps"]),{currentSection:o,registerHeading:i,unregisterHeading:c}=k(r.tableOfContents);return w(v.b,Object(n.a)({sidebar:w("div",{className:"mb-8"},w(N,{tableOfContents:r.tableOfContents,currentSection:o}))},l),w(j.Provider,{value:{registerHeading:i,unregisterHeading:c}},t))}function F(e){var{children:t,meta:r,classes:n,tableOfContents:a}=e,i=[...n?[{title:"Default class reference",slug:"class-reference",children:[]}]:[],...a],{currentSection:c,registerHeading:s,unregisterHeading:u}=k(i),{prev:f,next:d}=function(){var e=Object(h.useRouter)(),{nav:t}=Object(l.useContext)(v.a),r=Object.keys(t).flatMap(e=>t[e]),n=r.findIndex(t=>t.href===e.pathname);return{prev:n>-1?r[n-1]:void 0,next:n>-1?r[n+1]:void 0}}();return w("div",{id:r.containerId,className:"pt-10 pb-24 lg:pb-16 w-full flex"},w("div",{className:"min-w-0 flex-auto px-4 sm:px-6 xl:px-8"},w(O.a,{title:r.title,description:r.description,badge:{key:"Tailwind CSS version",value:r.featureVersion},border:!n&&!1!==r.headerSeparator}),w(j.Provider,{value:{registerHeading:s,unregisterHeading:u}},w("div",null,n&&w(g,Object(l.isValidElement)(n)?{custom:n}:n),t)),(f||d)&&w(o.a.Fragment,null,w("hr",{className:"border-gray-200 mt-10 mb-4"}),w("div",{className:"flex justify-between leading-7 font-medium"},f&&w(x.a,{href:f.href},w("a",null,"\u2190 ",f.shortTitle||f.title)),d&&w(x.a,{href:d.href},w("a",null,d.shortTitle||d.title," \u2192"))))),w("div",{className:"hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8"},w("div",{className:"flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) -mt-10 pt-10 pb-4 top-18"},i.length>0&&w("div",{className:"mb-8"},w(N,{tableOfContents:i,currentSection:c})))))}},ekQu:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O}));var n=r("wx14"),a=r("Ff2n"),l=r("q1tI"),o=r.n(l),i=r("YFqc"),c=r.n(i),s=r("nOHt"),u=r("fhQF"),f=r("8rel"),d=r("iuhU"),p=r("8IrU"),b=o.a.createElement,m=Object(l.createContext)(),g=Object(l.forwardRef)((e,t)=>{var{href:r,children:n,isActive:a,isPublished:l,fallbackHref:o}=e;return b("li",{ref:t},b(c.a,{href:l?r:o},b("a",{className:Object(d.a)("px-3 py-2 transition-colors duration-200 relative block",{"text-cyan-700":a,"hover:text-gray-900 text-gray-500":!a&&l,"text-gray-400":!a&&!l})},b("span",{className:Object(d.a)("rounded-md absolute inset-0 bg-cyan-50",{"opacity-50":a,"opacity-0":!a})}),b("span",{className:"relative"},n))))});function v(e){var{nav:t,children:r,fallbackHref:n}=e,a=Object(s.useRouter)(),o=Object(l.useRef)(),i=Object(l.useRef)();return Object(f.a)(()=>{if(o.current){var e=i.current.getBoundingClientRect(),t=o.current.getBoundingClientRect();i.current.scrollTop=t.top-e.top-e.height/2+t.height/2}},[]),b("nav",{id:"nav",ref:i,className:"px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-16 sticky?lg:h-(screen-18)"},b("div",{className:"relative flex mb-8 px-3 lg:hidden"},b(u.a,null)),b("ul",null,b(x,null),r,t&&Object.keys(t).map(e=>{var r=t[e].filter(e=>!1!==e.published);return 0!==r.length||n?b("li",{key:e,className:"mt-8"},b("h5",{className:Object(d.a)("px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs",{"text-gray-900":r.length>0,"text-gray-400":0===r.length})},e),b("ul",null,(n?t[e]:r).map((e,t)=>b(g,{key:t,href:e.href,isActive:e.href===a.pathname,ref:e.href===a.pathname?o:void 0,isPublished:!1!==e.published,fallbackHref:n},e.shortTitle||e.title)))):null}).filter(Boolean)))}var h=Object(l.forwardRef)((e,t)=>{var{children:r,href:n,className:a,icon:l,isActive:o,onClick:i,color:c}=e;return b("li",null,b("a",{ref:t,href:n,onClick:i,className:Object(d.a)("flex items-center px-3 hover:text-gray-900 transition-colors duration-200",a,{"text-gray-900":o})},b("div",{className:"mr-3 rounded-md bg-gradient-to-br ".concat(p.a[c][0])},b("svg",{className:"h-6 w-6",viewBox:"0 0 24 24"},l)),r))});function y(e){var{href:t,as:r}=e,l=Object(a.a)(e,["href","as"]);return/^https?:\/\//.test(t)?b(h,Object(n.a)({href:t},l)):b(c.a,{href:t,as:r,passHref:!0},b(h,l))}function x(){var{pathname:e}=Object(s.useRouter)(),t=e.split("/")[1];return b(o.a.Fragment,null,b(y,{href:"/docs",isActive:""===t||"docs"===t,color:"pink",className:"mb-4",icon:b(o.a.Fragment,null,b("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 6C10.0929 6 11.1175 6.29218 12 6.80269V16.8027C11.1175 16.2922 10.0929 16 9 16C7.90714 16 6.88252 16.2922 6 16.8027V6.80269C6.88252 6.29218 7.90714 6 9 6Z",fill:"#FFF1F2"}),b("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 6C16.0929 6 17.1175 6.29218 18 6.80269V16.8027C17.1175 16.2922 16.0929 16 15 16C13.9071 16 12.8825 16.2922 12 16.8027V6.80269C12.8825 6.29218 13.9071 6 15 6Z",fill:"#FECDD3"}))},"Documentation"),b(y,{href:"https://tailwindui.com/components?utm_source=tailwindcss&utm_medium=navigation",color:"violet",className:"mb-4",icon:b(o.a.Fragment,null,b("path",{d:"M6 9l6-3 6 3v6l-6 3-6-3V9z",fill:"#F5F3FF"}),b("path",{d:"M6 9l6 3v6l-6-3V9z",fill:"#DDD6FE"}),b("path",{d:"M18 9l-6 3v6l6-3V9z",fill:"#C4B5FD"}))},"Components"),b(y,{href:"https://play.tailwindcss.com",color:"amber",className:"mb-4",icon:b(o.a.Fragment,null,b("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.196 6.02a1 1 0 01.785 1.176l-2 10a1 1 0 01-1.961-.392l2-10a1 1 0 011.176-.784z",fill:"#FDE68A"}),b("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.293 9.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L16.586 12l-1.293-1.293a1 1 0 010-1.414zM8.707 9.293a1 1 0 010 1.414L7.414 12l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z",fill:"#FDF4FF"}))},"Playground"),b(y,{href:"https://blog.tailwindcss.com",color:"teal",className:"mb-4",icon:b(o.a.Fragment,null,b("path",{d:"M8 9a1 1 0 011-1h8a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 018 16.5V9z",fill:"#6EE7B7"}),b("path",{d:"M15 7a1 1 0 00-1-1H7a1 1 0 00-1 1v9.5A1.5 1.5 0 007.5 18H16v-.085a1.5 1.5 0 01-1-1.415V7z",fill:"#ECFDF5"}),b("path",{fill:"#A7F3D0",d:"M8 8h5v4H8zM8 14h5v2H8z"}))},"News"),b(y,{href:"/resources",isActive:"resources"===t,color:"blue",className:"mb-4",icon:b(o.a.Fragment,null,b("path",{d:"M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z",fill:"#93C5FD"}),b("path",{d:"M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z",fill:"#BFDBFE"}),b("path",{d:"M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z",fill:"#EFF6FF"}),b("path",{d:"M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z",fill:"#60A5FA"}))},"Resources"),b(y,{href:"https://www.youtube.com/tailwindlabs",color:"purple",className:"mb-10",icon:b(o.a.Fragment,null,b("circle",{cx:"12",cy:"12",r:"7",fill:"#F3E8FF"}),b("path",{d:"M14.52 11.136a1 1 0 010 1.728l-3.016 1.759A1 1 0 0110 13.759v-3.518a1 1 0 011.504-.864l3.015 1.76z",fill:"#C084FC"}))},"Screencasts"))}function O(e){var{children:t,navIsOpen:r,setNavIsOpen:n,nav:a,sidebar:l,fallbackHref:o}=e;return b(m.Provider,{value:{nav:a,navIsOpen:r,setNavIsOpen:n}},b("div",{className:"w-full max-w-8xl mx-auto"},b("div",{className:"lg:flex"},b("div",{id:"sidebar",onClick:()=>n(!1),className:Object(d.a)("fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block",{hidden:!r})},b("div",{id:"navWrapper",onClick:e=>e.stopPropagation(),className:"h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0"},b("div",{className:"hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-white"}),b(v,{nav:a,fallbackHref:o},l))),b("div",{id:"content-wrapper",className:Object(d.a)("min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible",{"overflow-hidden max-h-screen fixed":r})},t))))}},fhQF:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),a=r.n(n),l=r("3o5W"),o=r("iuhU"),i=a.a.createElement;function c(e){var{className:t}=e,r=Object(n.useRef)();function a(e){e.preventDefault(),"v0"===r.current.value&&(window.location="https://tailwindcss-v0.netlify.app/"),"v1"===r.current.value&&(window.location="https://v1.tailwindcss.com/")}return i("form",{onSubmit:a,className:Object(o.a)("relative",t)},i("label",null,i("span",{className:"sr-only"},"Tailwind CSS Version"),i("select",{ref:r,className:"appearance-none block bg-transparent pr-7 py-1 text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200",onChange:a},i("option",{value:"v2"},"v",l.tailwindVersion),i("option",{value:"v1"},"v1.9.6"),i("option",{value:"v0"},"v0.7.4"))),i("svg",{className:"w-5 h-5 text-gray-400 absolute top-1/2 right-0 -mt-2.5 pointer-events-none",fill:"currentColor"},i("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"})))}},tc9R:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var n,a=r("wx14"),l=r("rePB"),o=r("Ff2n"),i=r("q1tI"),c=r.n(i),s=r("I6Nb"),u=(r("17x9"),["bottom","height","left","right","top","width"]),f=new Map,d=function e(){var t=[];f.forEach((function(e,r){var n,a,l=r.getBoundingClientRect();n=l,a=e.rect,void 0===n&&(n={}),void 0===a&&(a={}),u.some((function(e){return n[e]!==a[e]}))&&(e.rect=l,t.push(e))})),t.forEach((function(e){e.callbacks.forEach((function(t){return t(e.rect)}))})),n=window.requestAnimationFrame(e)};var p=function(e,t){return{observe:function(){var r=0===f.size;f.has(e)?f.get(e).callbacks.push(t):f.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[t]}),r&&d()},unobserve:function(){var r=f.get(e);if(r){var a=r.callbacks.indexOf(t);a>=0&&r.callbacks.splice(a,1),r.callbacks.length||f.delete(e),f.size||cancelAnimationFrame(n)}}}},b=(r("2W6z"),m()?c.a.useLayoutEffect:c.a.useEffect);"undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math&&self;function m(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}function g(e,t,r){void 0===t&&(t=!0);var n=Object(i.useState)(e.current),a=n[0],l=n[1],o=Object(i.useRef)(!1),c=Object(i.useRef)(!1),s=Object(i.useState)(null),u=s[0],f=s[1],d=Object(i.useRef)();return b((function(){d.current=r,e.current!==a&&l(e.current)})),b((function(){a&&!o.current&&(o.current=!0,f(a.getBoundingClientRect()))}),[a]),b((function(){var r,n=a;return c.current||(c.current=!0,n=e.current),n?(r=p(n,(function(e){d.current&&d.current(e),f(e)})),t&&r.observe(),l):l;function l(){r&&r.unobserve()}}),[t,a]),u}var v=r("iuhU"),h=c.a.createElement;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e){var{level:t,id:r,children:n,number:l,badge:c,className:u="",hidden:f=!1,toc:d=!1,style:p={}}=e,b=Object(o.a)(e,["level","id","children","number","badge","className","hidden","toc","style"]),m="h".concat(t),{registerHeading:y,unregisterHeading:O}=Object(i.useContext)(s.ContentsContext),w=Object(i.useRef)(),j=function(e){var{0:t,1:r}=Object(i.useState)(),n=g(e),a=n?n.top:void 0;return Object(i.useEffect)(()=>{if("undefined"!==typeof a){var e=a+window.pageYOffset;e!==t&&r(e)}},[a,t]),t}(w);return Object(i.useEffect)(()=>(d&&"undefined"!==typeof j&&y(r,j),()=>{O(r)}),[d,j,r,y,O]),h(m,Object(a.a)({className:Object(v.a)("group flex whitespace-pre-wrap",u),id:r,ref:w,style:x(x({},f?{marginBottom:0}:{}),p)},b),!f&&h("a",{href:"#".concat(r),className:"absolute after:hash opacity-0 group-hover:opacity-100",style:{marginLeft:"-1em",paddingRight:"0.5em",boxShadow:"none",color:"#a1a1aa"},"aria-label":"Anchor"}),l&&h("span",{className:"bg-cyan-100 w-8 h-8 inline-flex items-center justify-center rounded-full text-cyan-700 text-xl mr-3 flex-none"},l),h("span",{className:f?"sr-only":void 0},n),c&&h("span",{className:"ml-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-4 bg-green-150 text-green-900"},c))}}}]);