_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[155],{"2cYW":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-decoration",function(){return t("unN4")}])},"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("KQm4"),s=t("rePB"),o=t("q1tI"),c=t.n(o),r=t("98BF"),i=t("Zb5r"),p=t("AOjV"),l=c.a.createElement;function u(e){var n=e.plugin,t=e.name,o=r.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(e){return!o.includes(e)})).slice(0,2);return l(c.a.Fragment,null,l("p",null,"By default, ",o.length?"only ".concat(Object(i.a)(o)):"no"," variants are generated for ",t," utilities."),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,n)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",o.length>0?"also ":"","generate"," ",Object(i.a)(u)," variants:"),l(p.a,{path:"variants",before:"// ...",remove:Object(s.a)({},n,o),add:Object(s.a)({},n,[].concat(Object(a.a)(o),Object(a.a)(u)))}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),o=t("Btb4"),c=t.n(o),r=t("AI3G"),i=t("iuhU"),p=s.a.createElement;function l(e){var n=e.edits,t=e.indent,s=void 0===t?"":t,o=e.type,r=void 0===o?"inserted":o;return p("span",{className:Object(i.a)("token",{"inserted-sign inserted":"inserted"===r,"deleted-sign deleted":"inserted"!==r})},Object.keys(n).map((function(e,t){return p(a.Fragment,{key:t},p("span",{className:Object(i.a)("token prefix",{inserted:"inserted"===r,deleted:"inserted"!==r})},"inserted"===r?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(o=e)?o:"'".concat(o,"'"),":"," ",c()(n[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(e,n){return"[".concat(n.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(e,n){return"".concat(0===n?"":"+ "+s).concat(e)})).join("\n"),",\n");var o})))}function u(e){var n=e.path,t=e.add,s=e.remove,o=e.before,c=e.after;return n="string"===typeof n?n.split("."):n,p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((function(e,n){return p(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,": ","{\n")})),o&&Object(r.a)(o).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")}))),s&&p(l,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&p(l,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),p("span",{className:"token unchanged"},c&&Object(r.a)(c).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")})),n.map((function(e,t){return p(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")})),"  }")))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),o=t("GAX2").default;e.exports=(e,n,t)=>{const c=[];return function e(n,t,r){let i;(t=t||{}).indent=t.indent||"\t",r=r||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),r).replace(new RegExp(i.indent,"g"),r+t.indent)};if(-1!==c.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";c.push(n);const a="["+i.newLine+n.map((a,s)=>{const o=n.length-1===s?i.newLine:","+i.newLineOrSpace;let c=e(a,t,r+t.indent);return t.transform&&(c=t.transform(n,s,c)),i.indent+c+o}).join("")+i.pad+"]";return c.pop(),p(a)}if(s(n)){let a=Object.keys(n).concat(o(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";c.push(n);const s="{"+i.newLine+a.map((s,o)=>{const c=a.length-1===o?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,t);let d=e(n[s],t,r+t.indent);return t.transform&&(d=t.transform(n,s,d)),i.indent+String(u)+": "+d+c}).join("")+i.pad+"}";return c.pop(),p(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},"Ca+n":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("q1tI"),s=t.n(a),o=t("S5AU"),c=t.n(o),r=t("iuhU"),i=s.a.createElement,p=["","sm:","md:","lg:","xl:"];function l(e){var n=e.children,t=e.active,a=e.onClick;return i("button",{type:"button",className:Object(r.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:a},n)}var u=function(e){return'<div class="'.concat(e,'"></div>')};function d(e){var n=e.classNames,t=e.snippet,s=void 0===t?u:t,o=e.preview,d=e.previewClassName,m=Array.isArray(n[0])?n.length:1,b=Object(a.useState)(0),g=b[0],f=b[1];return i("div",{className:"mt-8"},i("div",{className:"flex justify-center"},i("div",{className:"grid grid-cols-5 mb-2 bg-white"},i(l,{active:0===g,onClick:function(){return f(0)}},i("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"all")),i(l,{active:1===g,onClick:function(){return f(1)}},i("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"sm")),i(l,{active:2===g,onClick:function(){return f(2)}},i("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"md")),i(l,{active:3===g,onClick:function(){return f(3)}},i("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"lg")),i(l,{active:4===g,onClick:function(){return f(4)}},i("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),i("p",{className:"text-xs"},"xl")))),i("div",{className:"overflow-hidden mb-8"},i("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},i("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},i("code",{className:"inline-block p-4"},c()(s(1===m?"{{CLASSNAMES}}":Array.from({length:m}).map((function(e,n){return"{{CLASSNAMES[".concat(n,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(e,t){if(t%2===1){var a=e.match(/\[([0-9]+)\]/);return(a?n[parseInt(a[1],10)]:n).map((function(e,n){return e?i("span",{key:"".concat(t,"-").concat(n),className:g===n?"text-code-yellow":""},0===n?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(e){return"".concat(p[n]).concat(e)})).join(" ")):null})).filter(Boolean)}return e}))))),i("div",{className:Object(r.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",d,{"p-4":!d})},o(function(e){if(m>1)return n.map((function(n){for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}));for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}(g)))))}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},"IBu/":function(e,n,t){"use strict";const a=t("sQdO");e.exports=e=>{const n=a(e);if(0===n)return e;const t=new RegExp(`^[ \\t]{${n}}`,"gm");return e.replace(t,"")}},S5AU:function(e,n,t){"use strict";const a=t("IBu/"),s=t("S6im");e.exports=(e,n=0,t)=>s(a(e),n,t)},S6im:function(e,n,t){"use strict";e.exports=(e,n=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===n)return e;const a=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(a,t.indent.repeat(n))}},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((function(n,t,a){return 0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t)}),"")}t.d(n,"a",(function(){return a}))},msGM:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,variants:n}){e({".underline":{"text-decoration":"underline"},".line-through":{"text-decoration":"line-through"},".no-underline":{"text-decoration":"none"}},n("textDecoration"))}}},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),s=t.n(a),o=t("iuhU"),c=s.a.createElement;function r(e){var n=e.preview,t=e.snippet,a=e.previewClassName;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(o.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:n}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(e,n,t){"use strict";e.exports=e=>{const n=e.match(/^[ \t]*(?=\S)/gm);return n?n.reduce((e,n)=>Math.min(e,n.length),1/0):0}},unN4:function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return O})),t.d(n,"classes",(function(){return j})),t.d(n,"meta",(function(){return N})),t.d(n,"tableOfContents",(function(){return k})),t.d(n,"default",(function(){return y}));var a=t("wx14"),s=t("Ff2n"),o=t("q1tI"),c=t.n(o),r=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),m=t("I6Nb"),b=t("msGM"),g=t.n(b),f=t("8C7G"),v=t("wH44"),h=t("Ca+n"),O=(c.a.createElement,d.DocumentationLayout),j={plugin:g.a},N={title:"Text Decoration",description:"Utilities for controlling the decoration of text.",features:{responsive:!0,customizable:!1,hover:!0,focus:!0}},k=[{title:"Underline",slug:"underline",children:[]},{title:"Line Through",slug:"line-through",children:[]},{title:"No Underline",slug:"no-underline",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Hover",slug:"hover",children:[]},{title:"Focus",slug:"focus",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],w={Layout:O,classes:j,meta:N,tableOfContents:k},x=m.ContentsLayout;function y(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(r.a)(x,Object(a.a)({},w,t,{components:n,mdxType:"MDXLayout"}),Object(r.a)(l.a,{level:2,id:"underline",toc:!0},"Underline"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},".underline")," utility to underline text."),Object(r.a)(u.a,{preview:'\n  <p class="underline text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>underline ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(r.a)(l.a,{level:2,id:"line-through",toc:!0},"Line Through"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},".line-through")," utility to strike out text."),Object(r.a)(u.a,{preview:'\n  <p class="line-through text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>line-through ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(r.a)(l.a,{level:2,id:"no-underline",toc:!0},"No Underline"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},".no-underline")," utility to remove underline or line-through styling."),Object(r.a)(u.a,{preview:'\n  <div class="text-center">\n    <a href="#" class="no-underline text-blue-500 text-lg">Link with no underline</a>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>no-underline ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link with no underline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(r.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control the text decoration of an element at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing text decoration utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:underline")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility at only medium screen sizes and above."),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(h.a,{classNames:["underline","no-underline","line-through","underline","no-underline"],snippet:function(e){return'\n    <p class="'.concat(e,' ...">\n      The quick brown fox jumped over the lazy dog.\n    </p>\n  ')},preview:function(e){return Object(r.a)("p",{className:"text-lg text-gray-800 ".concat(e)},"The quick brown fox jumped over the lazy dog.")},mdxType:"ResponsiveCodeSample"}),Object(r.a)(l.a,{level:2,id:"hover",toc:!0},"Hover"),Object(r.a)("p",null,"To control the text decoration of an element on hover, add the ",Object(r.a)("inlineCode",{parentName:"p"},"hover:")," prefix to any existing text decoration utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"hover:underline")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility on hover."),Object(r.a)(u.a,{preview:'\n  <a href="#hover" class="no-underline hover:underline text-blue-500 text-lg">Link</a>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#hover<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>no-underline hover:underline text-blue-500 text-lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(r.a)("p",null,"Hover utilities can also be combined with responsive utilities by adding the responsive ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(r.a)("em",{parentName:"p"},"before")," the ",Object(r.a)("inlineCode",{parentName:"p"},"hover:")," prefix."),Object(r.a)("pre",{className:"language-html"},Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"href"),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"#",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:no-underline md:hover:underline ...",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"Link",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"a"),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(r.a)(l.a,{level:2,id:"focus",toc:!0},"Focus"),Object(r.a)("p",null,"To control the text decoration of an element on focus, add the ",Object(r.a)("inlineCode",{parentName:"p"},"focus:")," prefix to any existing text decoration utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"focus:underline")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility on focus."),Object(r.a)(u.a,{preview:'\n  <div class="max-w-xs w-full mx-auto">\n    <input class="bg-white focus:underline focus:shadow-outline text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none" value="Focus me" placeholder="Focus me">\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>focus:underline ...<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Focus me<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(r.a)("p",null,"Focus utilities can also be combined with responsive utilities by adding the responsive ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(r.a)("em",{parentName:"p"},"before")," the ",Object(r.a)("inlineCode",{parentName:"p"},"focus:")," prefix."),Object(r.a)("pre",{className:"language-html"},Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"md:focus:underline ...",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"value"),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"Focus me",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(r.a)(f.a,{plugin:"textDecoration",mdxType:"Variants"}),Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(r.a)(v.a,{plugin:"textDecoration",mdxType:"Disabling"}))}y.isMDXComponent=!0,y.layoutProps=w},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),o=t.n(s),c=t("AOjV"),r=t("AI3G"),i=t("Zb5r"),p=o.a.createElement;function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var n=e.plugin,t=e.name,s=Object(r.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())})),p(o.a.Fragment,null,p("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(c.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(e,n){return u(u({},e),{},Object(a.a)({},n,!1))}),{})}))}}},[["2cYW",0,2,1,3,4]]]);