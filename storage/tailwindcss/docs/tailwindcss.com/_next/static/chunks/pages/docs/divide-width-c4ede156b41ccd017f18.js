_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[86],{"+K1I":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,e:n,theme:t,variants:a,target:c}){if("ie11"===c("divideWidth")){const c=[(e,t)=>({[`.${n(`divide-y${t}`)} > :not(template) ~ :not(template)`]:{"border-top-width":e},[`.${n(`divide-x${t}`)} > :not(template) ~ :not(template)`]:{"border-left-width":e}})];return void e(s.default.flatMap(c,e=>s.default.flatMap(t("divideWidth"),(n,t)=>e(n,"default"===t?"":`-${t}`))),a("divideWidth"))}const i=[(e,t)=>({[`.${n(`divide-y${t}`)} > :not(template) ~ :not(template)`]:{"--divide-y-reverse":"0","border-top-width":`calc(${"0"===e?"0px":e} * calc(1 - var(--divide-y-reverse)))`,"border-bottom-width":`calc(${"0"===e?"0px":e} * var(--divide-y-reverse))`},[`.${n(`divide-x${t}`)} > :not(template) ~ :not(template)`]:{"--divide-x-reverse":"0","border-right-width":`calc(${"0"===e?"0px":e} * var(--divide-x-reverse))`,"border-left-width":`calc(${"0"===e?"0px":e} * calc(1 - var(--divide-x-reverse)))`}})];e(s.default.flatMap(i,e=>[...s.default.flatMap(t("divideWidth"),(n,t)=>e(n,"default"===t?"":`-${t}`)),{".divide-y-reverse > :not(template) ~ :not(template)":{"--divide-y-reverse":"1"},".divide-x-reverse > :not(template) ~ :not(template)":{"--divide-x-reverse":"1"}}]),a("divideWidth"))}};var a,s=(a=t("LvDl"))&&a.__esModule?a:{default:a}},"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("KQm4"),s=t("rePB"),c=t("q1tI"),i=t.n(c),p=t("98BF"),o=t("Zb5r"),r=t("AOjV"),l=i.a.createElement;function d(e){var n=e.plugin,t=e.name,c=p.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())}));var d=["responsive","hover","focus","active","group-hover"].filter((function(e){return!c.includes(e)})).slice(0,2);return l(i.a.Fragment,null,l("p",null,"By default, ",c.length?"only ".concat(Object(o.a)(c)):"no"," variants are generated for ",t," utilities."),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,n)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",c.length>0?"also ":"","generate"," ",Object(o.a)(d)," variants:"),l(r.a,{path:"variants",before:"// ...",remove:Object(s.a)({},n,c),add:Object(s.a)({},n,[].concat(Object(a.a)(c),Object(a.a)(d)))}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("q1tI"),s=t.n(a),c=t("Btb4"),i=t.n(c),p=t("AI3G"),o=t("iuhU"),r=s.a.createElement;function l(e){var n=e.edits,t=e.indent,s=void 0===t?"":t,c=e.type,p=void 0===c?"inserted":c;return r("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===p,"deleted-sign deleted":"inserted"!==p})},Object.keys(n).map((function(e,t){return r(a.Fragment,{key:t},r("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===p,deleted:"inserted"!==p})},"inserted"===p?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(c=e)?c:"'".concat(c,"'"),":"," ",i()(n[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(e,n){return"[".concat(n.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(e,n){return"".concat(0===n?"":"+ "+s).concat(e)})).join("\n"),",\n");var c})))}function d(e){var n=e.path,t=e.add,s=e.remove,c=e.before,i=e.after;return n="string"===typeof n?n.split("."):n,r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((function(e,n){return r(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,": ","{\n")})),c&&Object(p.a)(c).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")}))),s&&r(l,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&r(l,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),r("span",{className:"token unchanged"},i&&Object(p.a)(i).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")})),n.map((function(e,t){return r(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")})),"  }")))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;e.exports=(e,n,t)=>{const i=[];return function e(n,t,p){let o;(t=t||{}).indent=t.indent||"\t",p=p||"",o=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),p).replace(new RegExp(o.indent,"g"),p+t.indent)};if(-1!==i.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";i.push(n);const a="["+o.newLine+n.map((a,s)=>{const c=n.length-1===s?o.newLine:","+o.newLineOrSpace;let i=e(a,t,p+t.indent);return t.transform&&(i=t.transform(n,s,i)),o.indent+i+c}).join("")+o.pad+"]";return i.pop(),r(a)}if(s(n)){let a=Object.keys(n).concat(c(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";i.push(n);const s="{"+o.newLine+a.map((s,c)=>{const i=a.length-1===c?o.newLine:","+o.newLineOrSpace,r="symbol"===typeof s,l=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(s),d=r||l?s:e(s,t);let u=e(n[s],t,p+t.indent);return t.transform&&(u=t.transform(n,s,u)),o.indent+String(d)+": "+u+i}).join("")+o.pad+"}";return i.pop(),r(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},"Ca+n":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),c=t("S5AU"),i=t.n(c),p=t("iuhU"),o=s.a.createElement,r=["","sm:","md:","lg:","xl:"];function l(e){var n=e.children,t=e.active,a=e.onClick;return o("button",{type:"button",className:Object(p.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:a},n)}var d=function(e){return'<div class="'.concat(e,'"></div>')};function u(e){var n=e.classNames,t=e.snippet,s=void 0===t?d:t,c=e.preview,u=e.previewClassName,m=Array.isArray(n[0])?n.length:1,v=Object(a.useState)(0),b=v[0],g=v[1];return o("div",{className:"mt-8"},o("div",{className:"flex justify-center"},o("div",{className:"grid grid-cols-5 mb-2 bg-white"},o(l,{active:0===b,onClick:function(){return g(0)}},o("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"all")),o(l,{active:1===b,onClick:function(){return g(1)}},o("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"sm")),o(l,{active:2===b,onClick:function(){return g(2)}},o("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"md")),o(l,{active:3===b,onClick:function(){return g(3)}},o("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"lg")),o(l,{active:4===b,onClick:function(){return g(4)}},o("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),o("p",{className:"text-xs"},"xl")))),o("div",{className:"overflow-hidden mb-8"},o("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},o("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},o("code",{className:"inline-block p-4"},i()(s(1===m?"{{CLASSNAMES}}":Array.from({length:m}).map((function(e,n){return"{{CLASSNAMES[".concat(n,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(e,t){if(t%2===1){var a=e.match(/\[([0-9]+)\]/);return(a?n[parseInt(a[1],10)]:n).map((function(e,n){return e?o("span",{key:"".concat(t,"-").concat(n),className:b===n?"text-code-yellow":""},0===n?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(e){return"".concat(r[n]).concat(e)})).join(" ")):null})).filter(Boolean)}return e}))))),o("div",{className:Object(p.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",u,{"p-4":!u})},c(function(e){if(m>1)return n.map((function(n){for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}));for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}(b)))))}},F9u7:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/divide-width",function(){return t("lmUR")}])},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},"IBu/":function(e,n,t){"use strict";const a=t("sQdO");e.exports=e=>{const n=a(e);if(0===n)return e;const t=new RegExp(`^[ \\t]{${n}}`,"gm");return e.replace(t,"")}},S5AU:function(e,n,t){"use strict";const a=t("IBu/"),s=t("S6im");e.exports=(e,n=0,t)=>s(a(e),n,t)},S6im:function(e,n,t){"use strict";e.exports=(e,n=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===n)return e;const a=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(a,t.indent.repeat(n))}},YuTi:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((function(n,t,a){return 0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t)}),"")}t.d(n,"a",(function(){return a}))},lmUR:function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return k})),t.d(n,"classes",(function(){return O})),t.d(n,"meta",(function(){return j})),t.d(n,"tableOfContents",(function(){return N})),t.d(n,"default",(function(){return w}));var a=t("wx14"),s=t("Ff2n"),c=t("q1tI"),i=t.n(c),p=t("7ljp"),o=t("YFqc"),r=t.n(o),l=t("tc9R"),d=t("pOT7"),u=t("vRWG"),m=t("I6Nb"),v=t("+K1I"),b=t.n(v),g=t("8C7G"),f=t("wH44"),h=t("Ca+n"),k=(i.a.createElement,u.DocumentationLayout),O={plugin:b.a,filterProperties:function(e,n,t){return 1===Object.keys(t).length||!e.includes("--")&&!e.includes("bottom")&&!e.includes("right")},transformValue:function(e){return e.includes("calc(")?e.match(/calc\(([^ ]+) /)[1].replace(/^0px$/,"0"):e},transformSelector:function(e){return Object(p.a)(i.a.Fragment,null,e.split(">").shift().trim()," ",Object(p.a)("span",{className:"ml-1 text-purple-300"},"> * + *"))}},j={title:"Divide Width",description:"Utilities for controlling the border width between elements.",featureVersion:"v1.3.0+"},N=[{title:"Add borders between horizontal children",slug:"add-borders-between-horizontal-children",children:[]},{title:"Add borders between stacked children",slug:"add-borders-between-stacked-children",children:[]},{title:"Reversing children order",slug:"reversing-children-order",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Divide width scale",slug:"divide-width-scale"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],x={Layout:k,classes:O,meta:j,tableOfContents:N},y=m.ContentsLayout;function w(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(p.a)(y,Object(a.a)({},x,t,{components:n,mdxType:"MDXLayout"}),Object(p.a)(l.a,{level:2,id:"add-borders-between-horizontal-children",toc:!0},"Add borders between horizontal children"),Object(p.a)("p",null,"Add borders between horizontal elements using the ",Object(p.a)("inlineCode",{parentName:"p"},"divide-x-{amount}")," utilities."),Object(p.a)(d.a,{preview:'\n  <div class="grid grid-cols-3 divide-x divide-gray-400">\n    <div class="text-center">1</div>\n    <div class="text-center">2</div>\n    <div class="text-center">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 divide-x divide-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(p.a)(l.a,{level:2,id:"add-borders-between-stacked-children",toc:!0},"Add borders between stacked children"),Object(p.a)("p",null,"Add borders between stacked elements using the ",Object(p.a)("inlineCode",{parentName:"p"},"divide-y-{amount}")," utilities."),Object(p.a)(d.a,{preview:'\n  <div class="divide-y divide-gray-400">\n    <div class="text-center py-2">1</div>\n    <div class="text-center py-2">2</div>\n    <div class="text-center py-2">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>divide-y divide-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(p.a)(l.a,{level:2,id:"reversing-children-order",toc:!0},"Reversing children order"),Object(p.a)("p",null,"If your elements are in reverse order (using say ",Object(p.a)("inlineCode",{parentName:"p"},"flex-row-reverse")," or ",Object(p.a)("inlineCode",{parentName:"p"},"flex-col-reverse"),"), use the ",Object(p.a)("inlineCode",{parentName:"p"},"divide-x-reverse")," or ",Object(p.a)("inlineCode",{parentName:"p"},"divide-y-reverse")," utilities to ensure the border is added to the correct side of each element."),Object(p.a)(d.a,{preview:'\n  <div class="flex flex-col-reverse divide-y divide-y-reverse divide-gray-400">\n    <div class="text-center py-2">1</div>\n    <div class="text-center py-2">2</div>\n    <div class="text-center py-2">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex flex-col-reverse divide-y divide-y-reverse divide-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(p.a)("hr",null),Object(p.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the borders between elements at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing divide utility. For example, adding the class ",Object(p.a)("inlineCode",{parentName:"p"},"md:divide-x-8")," to an element would apply the ",Object(p.a)("inlineCode",{parentName:"p"},"divide-x-8")," utility at medium screen sizes and above."),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(h.a,{classNames:["divide-y","divide-y-2","divide-y-4","divide-y-8","divide-y-0"],snippet:function(e){return'\n    <div class="'.concat(e,' divide-gray-400">\n      <div class="text-center py-2">1</div>\n      <div class="text-center py-2">2</div>\n      <div class="text-center py-2">3</div>\n    </div>\n  ')},preview:function(e){return Object(p.a)("div",{className:"divide-gray-400 ".concat(e)},Object(p.a)("div",{className:"text-center py-2"},"1"),Object(p.a)("div",{className:"text-center py-2"},"2"),Object(p.a)("div",{className:"text-center py-2"},"3"))},mdxType:"ResponsiveCodeSample"}),Object(p.a)("hr",null),Object(p.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(l.a,{level:3,id:"divide-width-scale",toc:!0},"Divide width scale"),Object(p.a)("p",null,"The divide width scale inherits its values from the ",Object(p.a)("inlineCode",{parentName:"p"},"borderWidth")," scale by default, so if you'd like to customize your values for both border width and divide width together, use the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.borderWidth")," section of your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(p.a)("pre",{className:"language-diff"},Object(p.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     borderWidth: {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       default: '1px',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '0': '0',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '2': '2px',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '3': '3px',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '4': '4px',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '6': '6px',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '8': '8px',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(p.a)("p",null,"To customize only the divide width values, use the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.divideWidth")," section of your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(p.a)("pre",{className:"language-diff"},Object(p.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     divideWidth: {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       default: '1px',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '0': '0',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '2': '2px',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '3': '3px',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '4': '4px',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '6': '6px',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '8': '8px',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(p.a)("p",null,"Learn more about customizing the default theme in the ",Object(p.a)(r.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(p.a)("a",null,"theme customization documentation")),"."),Object(p.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(p.a)(g.a,{plugin:"divideWidth",mdxType:"Variants"}),Object(p.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(p.a)(f.a,{plugin:"divideWidth",mdxType:"Disabling"}))}w.isMDXComponent=!0,w.layoutProps=x},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("q1tI"),s=t.n(a),c=t("iuhU"),i=s.a.createElement;function p(e){var n=e.preview,t=e.snippet,a=e.previewClassName;return i("div",{className:"relative overflow-hidden mb-8"},i("div",{className:Object(c.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:n}}),i("div",{className:"rounded-b-lg bg-gray-800"},i("pre",{className:"scrollbar-none m-0 p-0 language-html"},i("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(e,n,t){"use strict";e.exports=e=>{const n=e.match(/^[ \t]*(?=\S)/gm);return n?n.reduce((e,n)=>Math.min(e,n.length),1/0):0}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("rePB"),s=t("q1tI"),c=t.n(s),i=t("AOjV"),p=t("AI3G"),o=t("Zb5r"),r=c.a.createElement;function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e){var n=e.plugin,t=e.name,s=Object(p.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())})),r(c.a.Fragment,null,r("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",r("code",null,"false")," in the"," ",r("code",null,"corePlugins")," section of your config file:"),r(i.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(e,n){return d(d({},e),{},Object(a.a)({},n,!1))}),{})}))}},yLpj:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"===typeof window&&(t=window)}e.exports=t}},[["F9u7",0,2,5,1,3,4]]]);