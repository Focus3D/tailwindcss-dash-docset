_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[88],{"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("KQm4"),s=t("rePB"),r=t("q1tI"),c=t.n(r),i=t("98BF"),o=t("Zb5r"),l=t("AOjV"),p=c.a.createElement;function u(e){var n=e.plugin,t=e.name,r=i.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(e){return!r.includes(e)})).slice(0,2);return p(c.a.Fragment,null,p("p",null,"By default, ",r.length?"only ".concat(Object(o.a)(r)):"no"," variants are generated for ",t," utilities."),p("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",p("code",null,n)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",r.length>0?"also ":"","generate"," ",Object(o.a)(u)," variants:"),p(l.a,{path:"variants",before:"// ...",remove:Object(s.a)({},n,r),add:Object(s.a)({},n,[].concat(Object(a.a)(r),Object(a.a)(u)))}))}},"9Jru":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return(0,s.default)(e).flatMap((e,n)=>s.default.isObject(e)?s.default.map(e,(e,t)=>{return[`${n}${"default"===t?"":`-${t}`}`,e]}):[[n,e]]).fromPairs().value()};var a,s=(a=t("LvDl"))&&a.__esModule?a:{default:a}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),r=t("Btb4"),c=t.n(r),i=t("AI3G"),o=t("iuhU"),l=s.a.createElement;function p(e){var n=e.edits,t=e.indent,s=void 0===t?"":t,r=e.type,i=void 0===r?"inserted":r;return l("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===i,"deleted-sign deleted":"inserted"!==i})},Object.keys(n).map((function(e,t){return l(a.Fragment,{key:t},l("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===i,deleted:"inserted"!==i})},"inserted"===i?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(r=e)?r:"'".concat(r,"'"),":"," ",c()(n[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(e,n){return"[".concat(n.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(e,n){return"".concat(0===n?"":"+ "+s).concat(e)})).join("\n"),",\n");var r})))}function u(e){var n=e.path,t=e.add,s=e.remove,r=e.before,c=e.after;return n="string"===typeof n?n.split("."):n,l("pre",{className:"language-diff"},l("code",{className:"language-diff"},l("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((function(e,n){return l(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,": ","{\n")})),r&&Object(i.a)(r).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")}))),s&&l(p,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&l(p,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),l("span",{className:"token unchanged"},c&&Object(i.a)(c).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")})),n.map((function(e,t){return l(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")})),"  }")))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),r=t("GAX2").default;e.exports=(e,n,t)=>{const c=[];return function e(n,t,i){let o;(t=t||{}).indent=t.indent||"\t",i=i||"",o=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),i).replace(new RegExp(o.indent,"g"),i+t.indent)};if(-1!==c.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";c.push(n);const a="["+o.newLine+n.map((a,s)=>{const r=n.length-1===s?o.newLine:","+o.newLineOrSpace;let c=e(a,t,i+t.indent);return t.transform&&(c=t.transform(n,s,c)),o.indent+c+r}).join("")+o.pad+"]";return c.pop(),l(a)}if(s(n)){let a=Object.keys(n).concat(r(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";c.push(n);const s="{"+o.newLine+a.map((s,r)=>{const c=a.length-1===r?o.newLine:","+o.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,t);let d=e(n[s],t,i+t.indent);return t.transform&&(d=t.transform(n,s,d)),o.indent+String(u)+": "+d+c}).join("")+o.pad+"}";return c.pop(),l(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},Jrok:function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return j})),t.d(n,"classes",(function(){return h})),t.d(n,"meta",(function(){return w})),t.d(n,"tableOfContents",(function(){return v})),t.d(n,"default",(function(){return k}));var a=t("wx14"),s=t("Ff2n"),r=t("q1tI"),c=t.n(r),i=t("7ljp"),o=t("YFqc"),l=t.n(o),p=t("tc9R"),u=t("pOT7"),d=t("vRWG"),f=t("I6Nb"),g=t("ZiNA"),m=t.n(g),b=t("8C7G"),O=t("wH44"),j=(c.a.createElement,d.DocumentationLayout),h={plugin:m.a},w={title:"Fill",description:"Utilities for styling the fill of SVG elements."},v=[{title:"Usage",slug:"usage",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],y={Layout:j,classes:h,meta:w,tableOfContents:v},N=f.ContentsLayout;function k(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(i.a)(N,Object(a.a)({},y,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".fill-current")," to set the fill color of an SVG to the current text color. This makes it easy to set an element's fill color by combining this class with an existing ",Object(i.a)(l.a,{href:"/docs/text-color",passHref:!0},Object(i.a)("a",null,"text color utility")),"."),Object(i.a)("p",null,"Useful for styling icon sets like ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"http://www.zondicons.com/"}),"Zondicons")," that are drawn entirely with fills."),Object(i.a)(u.a,{preview:'\n  <svg class="fill-current text-teal-500 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">\n    <path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"/>\n  </svg>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fill-current text-teal-500 inline-block h-12 w-12<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0 0 20 20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(i.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)("p",null,"Control which fill utilities Tailwind generates by customizing the ",Object(i.a)("inlineCode",{parentName:"p"},"theme.fill")," section of your ",Object(i.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(i.a)("pre",{className:"language-diff"},Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n"),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"     fill: {\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       current: 'currentColor',\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"     }\n"),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     fill: theme => ({\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'red': theme('colors.red.500'),\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'green': theme('colors.green.500'),\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'blue': theme('colors.blue.500'),\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     })\n"),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(i.a)(p.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(i.a)(b.a,{plugin:"fill",mdxType:"Variants"}),Object(i.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(i.a)(O.a,{plugin:"fill",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=y},OQsN:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/fill",function(){return t("Jrok")}])},YuTi:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((function(n,t,a){return 0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t)}),"")}t.d(n,"a",(function(){return a}))},ZiNA:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,e:n,theme:t,variants:r}){const c=(0,s.default)(t("fill"));e(a.default.fromPairs(a.default.map(c,(e,t)=>[`.${n(`fill-${t}`)}`,{fill:e}])),r("fill"))}};var a=r(t("LvDl")),s=r(t("9Jru"));function r(e){return e&&e.__esModule?e:{default:e}}},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("q1tI"),s=t.n(a),r=t("iuhU"),c=s.a.createElement;function i(e){var n=e.preview,t=e.snippet,a=e.previewClassName;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(r.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:n}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),r=t.n(s),c=t("AOjV"),i=t("AI3G"),o=t("Zb5r"),l=r.a.createElement;function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var n=e.plugin,t=e.name,s=Object(i.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())})),l(r.a.Fragment,null,l("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(c.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(e,n){return u(u({},e),{},Object(a.a)({},n,!1))}),{})}))}},yLpj:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"===typeof window&&(t=window)}e.exports=t}},[["OQsN",0,2,5,1,3,4]]]);