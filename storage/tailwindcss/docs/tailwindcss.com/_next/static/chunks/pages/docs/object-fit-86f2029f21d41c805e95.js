_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[124],{"5xSE":function(n,t,e){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var a=e("KQm4"),s=e("rePB"),c=e("q1tI"),o=e.n(c),i=e("98BF"),l=e("Zb5r"),r=e("AOjV"),p=o.a.createElement;function u(n){var t=n.plugin,e=n.name,c=i.defaultConfig.variants[t]||["responsive"];e=e||t.replace(/([a-z])([A-Z])/g,(function(n,t,e){return"".concat(t," ").concat(e.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(n){return!c.includes(n)})).slice(0,2);return p(o.a.Fragment,null,p("p",null,"By default, ",c.length?"only ".concat(Object(l.a)(c)):"no"," variants are generated for ",e," utilities."),p("p",null,"You can control which variants are generated for the ",e," utilities by modifying the"," ",p("code",null,t)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",c.length>0?"also ":"","generate"," ",Object(l.a)(u)," variants:"),p(r.a,{path:"variants",before:"// ...",remove:Object(s.a)({},t,c),add:Object(s.a)({},t,[].concat(Object(a.a)(c),Object(a.a)(u)))}))}},AOjV:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var a=e("q1tI"),s=e.n(a),c=e("Btb4"),o=e.n(c),i=e("AI3G"),l=e("iuhU"),r=s.a.createElement;function p(n){var t=n.edits,e=n.indent,s=void 0===e?"":e,c=n.type,i=void 0===c?"inserted":c;return r("span",{className:Object(l.a)("token",{"inserted-sign inserted":"inserted"===i,"deleted-sign deleted":"inserted"!==i})},Object.keys(t).map((function(n,e){return r(a.Fragment,{key:e},r("span",{className:Object(l.a)("token prefix",{inserted:"inserted"===i,deleted:"inserted"!==i})},"inserted"===i?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(c=n)?c:"'".concat(c,"'"),":"," ",o()(t[n],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(n,t){return"[".concat(t.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(n,t){return"".concat(0===t?"":"+ "+s).concat(n)})).join("\n"),",\n");var c})))}function u(n){var t=n.path,e=n.add,s=n.remove,c=n.before,o=n.after;return t="string"===typeof t?t.split("."):t,r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",t.map((function(n,t){return r(a.Fragment,{key:t},"  ","  ".repeat(t+1),n,": ","{\n")})),c&&Object(i.a)(c).map((function(n){return"".concat("  ".repeat(t.length+2)).concat(n,"\n")}))),s&&r(p,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),e&&r(p,{edits:e,type:"inserted",indent:"  ".repeat(t.length+1)}),r("span",{className:"token unchanged"},o&&Object(i.a)(o).map((function(n){return"".concat("  ".repeat(t.length+2)).concat(n,"\n")})),t.map((function(n,e){return r(a.Fragment,{key:e},"  ","  ".repeat(t.length-e),"}\n")})),"  }")))}},Btb4:function(n,t,e){"use strict";const a=e("5xSE"),s=e("p+I8"),c=e("GAX2").default;n.exports=(n,t,e)=>{const o=[];return function n(t,e,i){let l;(e=e||{}).indent=e.indent||"\t",i=i||"",l=void 0===e.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+e.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=n=>{if(void 0===e.inlineCharacterLimit)return n;const t=n.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return t.length<=e.inlineCharacterLimit?t:n.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),i).replace(new RegExp(l.indent,"g"),i+e.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const a="["+l.newLine+t.map((a,s)=>{const c=t.length-1===s?l.newLine:","+l.newLineOrSpace;let o=n(a,e,i+e.indent);return e.transform&&(o=e.transform(t,s,o)),l.indent+o+c}).join("")+l.pad+"]";return o.pop(),r(a)}if(s(t)){let a=Object.keys(t).concat(c(t));if(e.filter&&(a=a.filter(n=>e.filter(t,n))),0===a.length)return"{}";o.push(t);const s="{"+l.newLine+a.map((s,c)=>{const o=a.length-1===c?l.newLine:","+l.newLineOrSpace,r="symbol"===typeof s,p=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=r||p?s:n(s,e);let d=n(t[s],e,i+e.indent);return e.transform&&(d=e.transform(t,s,d)),l.indent+String(u)+": "+d+o}).join("")+l.pad+"}";return o.pop(),r(s)}return t=String(t).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===e.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(n,t,e)}},"Ca+n":function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var a=e("q1tI"),s=e.n(a),c=e("S5AU"),o=e.n(c),i=e("iuhU"),l=s.a.createElement,r=["","sm:","md:","lg:","xl:"];function p(n){var t=n.children,e=n.active,a=n.onClick;return l("button",{type:"button",className:Object(i.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":e,"text-gray-500":!e}),onClick:a},t)}var u=function(n){return'<div class="'.concat(n,'"></div>')};function d(n){var t=n.classNames,e=n.snippet,s=void 0===e?u:e,c=n.preview,d=n.previewClassName,g=Array.isArray(t[0])?t.length:1,f=Object(a.useState)(0),m=f[0],b=f[1];return l("div",{className:"mt-8"},l("div",{className:"flex justify-center"},l("div",{className:"grid grid-cols-5 mb-2 bg-white"},l(p,{active:0===m,onClick:function(){return b(0)}},l("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"all")),l(p,{active:1===m,onClick:function(){return b(1)}},l("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"sm")),l(p,{active:2===m,onClick:function(){return b(2)}},l("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"md")),l(p,{active:3===m,onClick:function(){return b(3)}},l("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"lg")),l(p,{active:4===m,onClick:function(){return b(4)}},l("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),l("p",{className:"text-xs"},"xl")))),l("div",{className:"overflow-hidden mb-8"},l("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},l("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},l("code",{className:"inline-block p-4"},o()(s(1===g?"{{CLASSNAMES}}":Array.from({length:g}).map((function(n,t){return"{{CLASSNAMES[".concat(t,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(n,e){if(e%2===1){var a=n.match(/\[([0-9]+)\]/);return(a?t[parseInt(a[1],10)]:t).map((function(n,t){return n?l("span",{key:"".concat(e,"-").concat(t),className:m===t?"text-code-yellow":""},0===t?"":" ",n.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(n){return"".concat(r[t]).concat(n)})).join(" ")):null})).filter(Boolean)}return n}))))),l("div",{className:Object(i.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",d,{"p-4":!d})},c(function(n){if(g>1)return t.map((function(t){for(var e=n;e>=0;e--)if(t[e])return t[e].replace(/\(([^)]+)\)/g,"$1")}));for(var e=n;e>=0;e--)if(t[e])return t[e].replace(/\(([^)]+)\)/g,"$1")}(m)))))}},GAX2:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n=>Object.getOwnPropertySymbols(n).filter(t=>Object.prototype.propertyIsEnumerable.call(n,t))},"IBu/":function(n,t,e){"use strict";const a=e("sQdO");n.exports=n=>{const t=a(n);if(0===t)return n;const e=new RegExp(`^[ \\t]{${t}}`,"gm");return n.replace(e,"")}},S5AU:function(n,t,e){"use strict";const a=e("IBu/"),s=e("S6im");n.exports=(n,t=0,e)=>s(a(n),t,e)},S6im:function(n,t,e){"use strict";n.exports=(n,t=1,e)=>{if(e={indent:" ",includeEmptyLines:!1,...e},"string"!==typeof n)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof n}\``);if("number"!==typeof t)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if("string"!==typeof e.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof e.indent}\``);if(0===t)return n;const a=e.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return n.replace(a,e.indent.repeat(t))}},Zb5r:function(n,t,e){"use strict";function a(n){return n.reduce((function(t,e,a){return 0===a?e:a===n.length-1?"".concat(t," and ").concat(e):"".concat(t,", ").concat(e)}),"")}e.d(t,"a",(function(){return a}))},cryp:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/object-fit",function(){return e("u+Ep")}])},"hv1/":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:n,variants:t,target:e}){"ie11"!==e("objectFit")&&n({".object-contain":{"object-fit":"contain"},".object-cover":{"object-fit":"cover"},".object-fill":{"object-fit":"fill"},".object-none":{"object-fit":"none"},".object-scale-down":{"object-fit":"scale-down"}},t("objectFit"))}}},"p+I8":function(n,t,e){"use strict";n.exports=function(n){var t=typeof n;return null!==n&&("object"===t||"function"===t)}},pOT7:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var a=e("q1tI"),s=e.n(a),c=e("iuhU"),o=s.a.createElement;function i(n){var t=n.preview,e=n.snippet,a=n.previewClassName;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(c.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:t}}),o("div",{className:"rounded-b-lg bg-gray-800"},o("pre",{className:"scrollbar-none m-0 p-0 language-html"},o("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:e}}))))}},sQdO:function(n,t,e){"use strict";n.exports=n=>{const t=n.match(/^[ \t]*(?=\S)/gm);return t?t.reduce((n,t)=>Math.min(n,t.length),1/0):0}},"u+Ep":function(n,t,e){"use strict";e.r(t),e.d(t,"Layout",(function(){return w})),e.d(t,"classes",(function(){return j})),e.d(t,"meta",(function(){return k})),e.d(t,"tableOfContents",(function(){return y})),e.d(t,"default",(function(){return N}));var a=e("wx14"),s=e("Ff2n"),c=e("q1tI"),o=e.n(c),i=e("7ljp"),l=e("YFqc"),r=e.n(l),p=e("tc9R"),u=e("pOT7"),d=e("vRWG"),g=e("I6Nb"),f=e("hv1/"),m=e.n(f),b=e("8C7G"),v=e("wH44"),h=e("Ca+n"),w=(o.a.createElement,d.DocumentationLayout),j={plugin:m.a},k={title:"Object Fit",description:"Utilities for controlling how a replaced element's content should be resized."},y=[{title:"Contain",slug:"contain",children:[]},{title:"Cover",slug:"cover",children:[]},{title:"Fill",slug:"fill",children:[]},{title:"None",slug:"none",children:[]},{title:"Scale Down",slug:"scale-down",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],O={Layout:w,classes:j,meta:k,tableOfContents:y},x=g.ContentsLayout;function N(n){var t=n.components,e=Object(s.a)(n,["components"]);return Object(i.a)(x,Object(a.a)({},O,e,{components:t,mdxType:"MDXLayout"}),Object(i.a)(p.a,{level:2,id:"contain",toc:!0},"Contain"),Object(i.a)("p",null,"Resize an element's content to stay contained within its container using ",Object(i.a)("inlineCode",{parentName:"p"},".object-contain"),"."),Object(i.a)(u.a,{preview:'\n  <div class="p-4">\n    <p class="text-sm text-gray-600">.object-contain</p>\n    <div class="bg-gray-400">\n      <img class="h-48 w-full object-contain" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-contain h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"cover",toc:!0},"Cover"),Object(i.a)("p",null,"Resize an element's content to cover its container using ",Object(i.a)("inlineCode",{parentName:"p"},".object-cover"),"."),Object(i.a)(u.a,{preview:'\n  <div class="p-4">\n    <p class="text-sm text-gray-600">.object-cover</p>\n    <div class="bg-gray-400">\n      <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-cover h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"fill",toc:!0},"Fill"),Object(i.a)("p",null,"Stretch an element's content to fit its container using ",Object(i.a)("inlineCode",{parentName:"p"},".object-fill"),"."),Object(i.a)(u.a,{preview:'\n  <div class="p-4">\n    <p class="text-sm text-gray-600">.object-fill</p>\n    <div class="bg-gray-400">\n      <img class="h-48 w-full object-fill" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-fill h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"none",toc:!0},"None"),Object(i.a)("p",null,"Display an element's content at its original size ignoring the container size using ",Object(i.a)("inlineCode",{parentName:"p"},".object-none"),"."),Object(i.a)(u.a,{preview:'\n  <div class="p-4">\n    <p class="text-sm text-gray-600">.object-none</p>\n    <div class="bg-gray-400">\n      <img class="h-48 w-full object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"scale-down",toc:!0},"Scale Down"),Object(i.a)("p",null,"Display an element's content at its original size but scale it down to fit its container if necessary using ",Object(i.a)("inlineCode",{parentName:"p"},".object-scale-down"),"."),Object(i.a)(u.a,{preview:'\n  <div class="p-4">\n    <p class="text-sm text-gray-600">.object-scale-down</p>\n    <div class="bg-gray-400">\n      <img class="h-48 w-full object-scale-down" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=128&q=80" alt="">\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-scale-down h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control how a replaced element's content should be resized only at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing object fit utility. For example, adding the class ",Object(i.a)("inlineCode",{parentName:"p"},"md:object-scale-down")," to an element would apply the ",Object(i.a)("inlineCode",{parentName:"p"},"object-scale-down")," utility at medium screen sizes and above."),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(h.a,{classNames:["object-contain","object-cover","object-fill","object-none","object-scale-down"],snippet:function(n){return'\n    <div class="bg-gray-400">\n      <img class="'.concat(n,' ..." src="...">\n    </div>\n  ')},preview:function(n){return Object(i.a)("div",{className:"bg-gray-400"},Object(i.a)("img",{className:"h-48 w-full ".concat(n),src:"https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",alt:""}))},mdxType:"ResponsiveCodeSample"}),Object(i.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(p.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(i.a)(b.a,{plugin:"objectFit",name:"object-fit",mdxType:"Variants"}),Object(i.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(i.a)(v.a,{plugin:"objectFit",name:"object-fit",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},wH44:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var a=e("rePB"),s=e("q1tI"),c=e.n(s),o=e("AOjV"),i=e("AI3G"),l=e("Zb5r"),r=c.a.createElement;function p(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){Object(a.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function d(n){var t=n.plugin,e=n.name,s=Object(i.a)(t);return e=e||t.replace(/([a-z])([A-Z])/g,(function(n,t,e){return"".concat(t," ").concat(e.toLowerCase())})),r(c.a.Fragment,null,r("p",null,"If you don't plan to use the ",e," utilities in your project, you can disable them entirely by setting the"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(s.map((function(n){return"<code>".concat(n,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",r("code",null,"false")," in the"," ",r("code",null,"corePlugins")," section of your config file:"),r(o.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(n,t){return u(u({},n),{},Object(a.a)({},t,!1))}),{})}))}}},[["cryp",0,2,1,3,4]]]);