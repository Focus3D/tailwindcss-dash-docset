_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[68],{"57Mr":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,variants:n}){e({".border-solid":{"border-style":"solid"},".border-dashed":{"border-style":"dashed"},".border-dotted":{"border-style":"dotted"},".border-double":{"border-style":"double"},".border-none":{"border-style":"none"}},n("borderStyle"))}}},"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("KQm4"),s=t("rePB"),r=t("q1tI"),o=t.n(r),c=t("98BF"),i=t("Zb5r"),l=t("AOjV"),p=o.a.createElement;function u(e){var n=e.plugin,t=e.name,r=c.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(e){return!r.includes(e)})).slice(0,2);return p(o.a.Fragment,null,p("p",null,"By default, ",r.length?"only ".concat(Object(i.a)(r)):"no"," variants are generated for ",t," utilities."),p("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",p("code",null,n)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",r.length>0?"also ":"","generate"," ",Object(i.a)(u)," variants:"),p(l.a,{path:"variants",before:"// ...",remove:Object(s.a)({},n,r),add:Object(s.a)({},n,[].concat(Object(a.a)(r),Object(a.a)(u)))}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),r=t("Btb4"),o=t.n(r),c=t("AI3G"),i=t("iuhU"),l=s.a.createElement;function p(e){var n=e.edits,t=e.indent,s=void 0===t?"":t,r=e.type,c=void 0===r?"inserted":r;return l("span",{className:Object(i.a)("token",{"inserted-sign inserted":"inserted"===c,"deleted-sign deleted":"inserted"!==c})},Object.keys(n).map((function(e,t){return l(a.Fragment,{key:t},l("span",{className:Object(i.a)("token prefix",{inserted:"inserted"===c,deleted:"inserted"!==c})},"inserted"===c?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(r=e)?r:"'".concat(r,"'"),":"," ",o()(n[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(e,n){return"[".concat(n.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(e,n){return"".concat(0===n?"":"+ "+s).concat(e)})).join("\n"),",\n");var r})))}function u(e){var n=e.path,t=e.add,s=e.remove,r=e.before,o=e.after;return n="string"===typeof n?n.split("."):n,l("pre",{className:"language-diff"},l("code",{className:"language-diff"},l("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((function(e,n){return l(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,": ","{\n")})),r&&Object(c.a)(r).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")}))),s&&l(p,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&l(p,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),l("span",{className:"token unchanged"},o&&Object(c.a)(o).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")})),n.map((function(e,t){return l(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")})),"  }")))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),r=t("GAX2").default;e.exports=(e,n,t)=>{const o=[];return function e(n,t,c){let i;(t=t||{}).indent=t.indent||"\t",c=c||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),c).replace(new RegExp(i.indent,"g"),c+t.indent)};if(-1!==o.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";o.push(n);const a="["+i.newLine+n.map((a,s)=>{const r=n.length-1===s?i.newLine:","+i.newLineOrSpace;let o=e(a,t,c+t.indent);return t.transform&&(o=t.transform(n,s,o)),i.indent+o+r}).join("")+i.pad+"]";return o.pop(),l(a)}if(s(n)){let a=Object.keys(n).concat(r(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";o.push(n);const s="{"+i.newLine+a.map((s,r)=>{const o=a.length-1===r?i.newLine:","+i.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,t);let d=e(n[s],t,c+t.indent);return t.transform&&(d=t.transform(n,s,d)),i.indent+String(u)+": "+d+o}).join("")+i.pad+"}";return o.pop(),l(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},"Ca+n":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("q1tI"),s=t.n(a),r=t("S5AU"),o=t.n(r),c=t("iuhU"),i=s.a.createElement,l=["","sm:","md:","lg:","xl:"];function p(e){var n=e.children,t=e.active,a=e.onClick;return i("button",{type:"button",className:Object(c.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:a},n)}var u=function(e){return'<div class="'.concat(e,'"></div>')};function d(e){var n=e.classNames,t=e.snippet,s=void 0===t?u:t,r=e.preview,d=e.previewClassName,b=Array.isArray(n[0])?n.length:1,g=Object(a.useState)(0),f=g[0],m=g[1];return i("div",{className:"mt-8"},i("div",{className:"flex justify-center"},i("div",{className:"grid grid-cols-5 mb-2 bg-white"},i(p,{active:0===f,onClick:function(){return m(0)}},i("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"all")),i(p,{active:1===f,onClick:function(){return m(1)}},i("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"sm")),i(p,{active:2===f,onClick:function(){return m(2)}},i("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"md")),i(p,{active:3===f,onClick:function(){return m(3)}},i("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"lg")),i(p,{active:4===f,onClick:function(){return m(4)}},i("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),i("p",{className:"text-xs"},"xl")))),i("div",{className:"overflow-hidden mb-8"},i("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},i("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},i("code",{className:"inline-block p-4"},o()(s(1===b?"{{CLASSNAMES}}":Array.from({length:b}).map((function(e,n){return"{{CLASSNAMES[".concat(n,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(e,t){if(t%2===1){var a=e.match(/\[([0-9]+)\]/);return(a?n[parseInt(a[1],10)]:n).map((function(e,n){return e?i("span",{key:"".concat(t,"-").concat(n),className:f===n?"text-code-yellow":""},0===n?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(e){return"".concat(l[n]).concat(e)})).join(" ")):null})).filter(Boolean)}return e}))))),i("div",{className:Object(c.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",d,{"p-4":!d})},r(function(e){if(b>1)return n.map((function(n){for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}));for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}(f)))))}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},"IBu/":function(e,n,t){"use strict";const a=t("sQdO");e.exports=e=>{const n=a(e);if(0===n)return e;const t=new RegExp(`^[ \\t]{${n}}`,"gm");return e.replace(t,"")}},KJ57:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-style",function(){return t("URl4")}])},S5AU:function(e,n,t){"use strict";const a=t("IBu/"),s=t("S6im");e.exports=(e,n=0,t)=>s(a(e),n,t)},S6im:function(e,n,t){"use strict";e.exports=(e,n=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===n)return e;const a=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(a,t.indent.repeat(n))}},URl4:function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return h})),t.d(n,"classes",(function(){return w})),t.d(n,"meta",(function(){return x})),t.d(n,"tableOfContents",(function(){return k})),t.d(n,"default",(function(){return N}));var a=t("wx14"),s=t("Ff2n"),r=t("q1tI"),o=t.n(r),c=t("7ljp"),i=t("YFqc"),l=t.n(i),p=t("tc9R"),u=t("pOT7"),d=t("vRWG"),b=t("I6Nb"),g=t("57Mr"),f=t.n(g),m=t("8C7G"),v=t("wH44"),y=t("Ca+n"),h=(o.a.createElement,d.DocumentationLayout),w={plugin:f.a},x={title:"Border Style",description:"Utilities for controlling the style of an element's borders.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},k=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],O={Layout:h,classes:w,meta:x,tableOfContents:k},j=b.ContentsLayout;function N(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(c.a)(j,Object(a.a)({},O,t,{components:n,mdxType:"MDXLayout"}),Object(c.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},".border-{style}")," to control an element's border style."),Object(c.a)(u.a,{preview:'\n  <div class="block sm:flex sm:justify-around">\n    <div class="sm:w-3/5 sm:mb-0 flex justify-around mb-6">\n      <div class="flex-1">\n        <p class="text-center text-sm text-gray-600 mb-1">.border-solid</p>\n        <div class="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-solid"></div>\n      </div>\n      <div class="flex-1">\n        <p class="text-center text-sm text-gray-600 mb-1">.border-dashed</p>\n        <div class="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-dashed"></div>\n      </div>\n      <div class="flex-1">\n        <p class="text-center text-sm text-gray-600 mb-1">.border-dotted</p>\n        <div class="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-dotted"></div>\n      </div>\n    </div>\n    <div class="sm:w-2/5 flex justify-around">\n      <div class="flex-1">\n        <p class="text-center text-sm text-gray-600 mb-1">.border-double</p>\n        <div class="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-double"></div>\n      </div>\n      <div class="flex-1">\n        <p class="text-center text-sm text-gray-600 mb-1">.border-none</p>\n        <div class="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-none"></div>\n      </div>\n      <div class="flex-1 sm:hidden"></div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-solid border-4 border-gray-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-dashed border-4 border-gray-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-dotted border-4 border-gray-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-double border-4 border-gray-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-none border-4 border-gray-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control the border style of an element at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing border style utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:border-dotted")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"border-dotted")," utility at only medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(y.a,{classNames:["border-solid","border-dashed","border-dotted","border-double","border-none"],snippet:function(e){return'\n    <div class="'.concat(e,'">\n    </div>\n  ')},preview:function(e){return Object(c.a)("div",{className:"w-24 h-24 mx-auto border-8 border-gray-600 bg-gray-400 ".concat(e)})},mdxType:"ResponsiveCodeSample"}),Object(c.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(p.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(m.a,{plugin:"borderStyle",mdxType:"Variants"}),Object(c.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(v.a,{plugin:"borderStyle",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((function(n,t,a){return 0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t)}),"")}t.d(n,"a",(function(){return a}))},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("q1tI"),s=t.n(a),r=t("iuhU"),o=s.a.createElement;function c(e){var n=e.preview,t=e.snippet,a=e.previewClassName;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(r.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:n}}),o("div",{className:"rounded-b-lg bg-gray-800"},o("pre",{className:"scrollbar-none m-0 p-0 language-html"},o("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(e,n,t){"use strict";e.exports=e=>{const n=e.match(/^[ \t]*(?=\S)/gm);return n?n.reduce((e,n)=>Math.min(e,n.length),1/0):0}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),r=t.n(s),o=t("AOjV"),c=t("AI3G"),i=t("Zb5r"),l=r.a.createElement;function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var n=e.plugin,t=e.name,s=Object(c.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())})),l(r.a.Fragment,null,l("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(o.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(e,n){return u(u({},e),{},Object(a.a)({},n,!1))}),{})}))}}},[["KJ57",0,2,1,3,4]]]);