(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[107],{"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),s=t.n(a),c=t("98BF"),i=t("Zb5r"),p=t("AOjV"),o=s.a.createElement;function r(e){var{plugin:n,name:t}=e,a=c.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(e,n,t)=>"".concat(n," ").concat(t.toLowerCase()));var r=["responsive","hover","focus","active","group-hover"].filter(e=>!a.includes(e)).slice(0,2);return o(s.a.Fragment,null,o("p",null,"By default, ",a.length?"only ".concat(Object(i.a)(a)):"no"," variants are generated for ",t," utilities."),o("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",o("code",null,n)," property in the ",o("code",null,"variants")," section of your"," ",o("code",null,"tailwind.config.js")," file."),o("p",null,"For example, this config will ",a.length>0?"also ":"","generate"," ",Object(i.a)(r)," variants:"),o(p.a,{path:"variants",before:"// ...",remove:{[n]:a},add:{[n]:[...a,...r]}}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),c=t("Btb4"),i=t.n(c),p=t("AI3G"),o=t("iuhU"),r=s.a.createElement;function l(e){var{edits:n,indent:t="",type:s="inserted"}=e;return r("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(n).map((e,c)=>r(a.Fragment,{key:c},r("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,function(e){return/^[a-z_$][a-z0-9_$]*$/i.test(e)?e:"'".concat(e,"'")}(e),":"," ",i()(n[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(e,n)=>"[".concat(n.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((e,n)=>"".concat(0===n?"":"+ "+t).concat(e)).join("\n"),",\n")))}function u(e){var{path:n,add:t,remove:s,before:c,after:i}=e;return n="string"===typeof n?n.split("."):n,r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((e,n)=>r(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,": ","{\n")),c&&Object(p.a)(c).map(e=>"".concat("  ".repeat(n.length+2)).concat(e,"\n"))),s&&r(l,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&r(l,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),r("span",{className:"token unchanged"},i&&Object(p.a)(i).map(e=>"".concat("  ".repeat(n.length+2)).concat(e,"\n")),n.map((e,t)=>r(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")),"  }")))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;e.exports=(e,n,t)=>{const i=[];return function e(n,t,p){let o;(t=t||{}).indent=t.indent||"\t",p=p||"",o=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),p).replace(new RegExp(o.indent,"g"),p+t.indent)};if(-1!==i.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";i.push(n);const a="["+o.newLine+n.map((a,s)=>{const c=n.length-1===s?o.newLine:","+o.newLineOrSpace;let i=e(a,t,p+t.indent);return t.transform&&(i=t.transform(n,s,i)),o.indent+i+c}).join("")+o.pad+"]";return i.pop(),r(a)}if(s(n)){let a=Object.keys(n).concat(c(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";i.push(n);const s="{"+o.newLine+a.map((s,c)=>{const i=a.length-1===c?o.newLine:","+o.newLineOrSpace,r="symbol"===typeof s,l=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=r||l?s:e(s,t);let d=e(n[s],t,p+t.indent);return t.transform&&(d=t.transform(n,s,d)),o.indent+String(u)+": "+d+i}).join("")+o.pad+"}";return i.pop(),r(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},"Ca+n":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("q1tI"),s=t.n(a),c=t("S5AU"),i=t.n(c),p=t("iuhU"),o=s.a.createElement,r=["","sm:","md:","lg:","xl:"];function l(e){var{children:n,active:t,onClick:a}=e;return o("button",{type:"button",className:Object(p.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:a},n)}var u=e=>'<div class="'.concat(e,'"></div>');function d(e){var{classNames:n,snippet:t=u,preview:s,previewClassName:c}=e,d=Array.isArray(n[0])?n.length:1,{0:g,1:m}=Object(a.useState)(0);return o("div",{className:"mt-8"},o("div",{className:"flex justify-center"},o("div",{className:"grid grid-cols-5 mb-2 bg-white"},o(l,{active:0===g,onClick:()=>m(0)},o("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"all")),o(l,{active:1===g,onClick:()=>m(1)},o("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"sm")),o(l,{active:2===g,onClick:()=>m(2)},o("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"md")),o(l,{active:3===g,onClick:()=>m(3)},o("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"lg")),o(l,{active:4===g,onClick:()=>m(4)},o("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),o("p",{className:"text-xs"},"xl")))),o("div",{className:"overflow-hidden mb-8"},o("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},o("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},o("code",{className:"inline-block p-4"},i()(t(1===d?"{{CLASSNAMES}}":Array.from({length:d}).map((e,n)=>"{{CLASSNAMES[".concat(n,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((e,t)=>{if(t%2===1){var a=e.match(/\[([0-9]+)\]/);return(a?n[parseInt(a[1],10)]:n).map((e,n)=>e?o("span",{key:"".concat(t,"-").concat(n),className:g===n?"text-code-yellow":""},0===n?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(e=>"".concat(r[n]).concat(e)).join(" ")):null).filter(Boolean)}return e})))),o("div",{className:Object(p.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",c,{"p-4":!c})},s(function(e){if(d>1)return n.map(n=>{for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")});for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}(g)))))}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},"IBu/":function(e,n,t){"use strict";const a=t("sQdO");e.exports=e=>{const n=a(e);if(0===n)return e;const t=new RegExp(`^[ \\t]{${n}}`,"gm");return e.replace(t,"")}},KmGD:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,e:n,theme:t,variants:a}){e(s.default.fromPairs(s.default.map(t("height"),(e,t)=>[`.${n(`h-${t}`)}`,{height:e}])),a("height"))}};var a,s=(a=t("LvDl"))&&a.__esModule?a:{default:a}},S5AU:function(e,n,t){"use strict";const a=t("IBu/"),s=t("S6im");e.exports=(e,n=0,t)=>s(a(e),n,t)},S6im:function(e,n,t){"use strict";e.exports=(e,n=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===n)return e;const a=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(a,t.indent.repeat(n))}},TALv:function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return O})),t.d(n,"classes",(function(){return j})),t.d(n,"meta",(function(){return k})),t.d(n,"tableOfContents",(function(){return w})),t.d(n,"default",(function(){return y}));var a=t("wx14"),s=t("Ff2n"),c=t("q1tI"),i=t.n(c),p=t("7ljp"),o=t("YFqc"),r=t.n(o),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),m=t("KmGD"),h=t.n(m),f=t("8C7G"),b=t("wH44"),v=t("Ca+n"),O=(i.a.createElement,d.DocumentationLayout),j={plugin:h()},k={title:"Height",description:"Utilities for setting the height of an element"},w=[{title:"Auto",slug:"auto",children:[]},{title:"Screen height",slug:"screen-height",children:[]},{title:"Fixed height",slug:"fixed-height",children:[]},{title:"Full height",slug:"full-height",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Height Scale",slug:"height-scale"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],N={Layout:O,classes:j,meta:k,tableOfContents:w},x=g.ContentsLayout;function y(e){var{components:n}=e,t=Object(s.a)(e,["components"]);return Object(p.a)(x,Object(a.a)({},N,t,{components:n,mdxType:"MDXLayout"}),Object(p.a)(l.a,{level:2,id:"auto",toc:!0},"Auto"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"h-auto")," to let the browser determine the height for the element."),Object(p.a)(u.a,{preview:'\n  <div class="h-auto w-32 text-center mx-auto bg-gray-400 p-6">h-auto</div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-auto w-32 p-6 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>h-auto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(p.a)(l.a,{level:2,id:"screen-height",toc:!0},"Screen height"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"h-screen")," to make an element span the entire height of the viewport."),Object(p.a)(u.a,{preview:'\n  <div class="bg-gray-400 h-screen"></div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-400 h-screen<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"overflow-x-scroll p-4"}),Object(p.a)(l.a,{level:2,id:"fixed-height",toc:!0},"Fixed height"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"h-{number}")," or ",Object(p.a)("inlineCode",{parentName:"p"},"h-px")," to set an element to a fixed height."),Object(p.a)(u.a,{preview:'\n  <div class="mr-3">\n    <div class="h-8 w-8 bg-gray-400"></div>\n    <p class="text-center mt-2 text-sm">h-8</p>\n  </div>\n  <div class="mr-3">\n    <div class="h-12 w-12 bg-gray-400"></div>\n    <p class="text-center mt-2 text-sm">h-12</p>\n  </div>\n  <div>\n    <div class="h-16 w-16 bg-gray-400"></div>\n    <p class="text-center mt-2 text-sm">h-16</p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-8 w-8 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-12 w-12 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-16 w-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-around items-end text-sm p-4"}),Object(p.a)(l.a,{level:2,id:"full-height",toc:!0},"Full height"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"h-full")," to set an element's height to 100% of its parent, as long as the parent has a defined height."),Object(p.a)(u.a,{preview:'\n  <div class="h-48">\n    <div class="h-full p-6 bg-gray-400">h-full</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-48<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-full p-6 bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>h-full<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-around items-end text-sm p-4"}),Object(p.a)("hr",null),Object(p.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the height of an element at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing width utility. For example, adding the class ",Object(p.a)("inlineCode",{parentName:"p"},"md:h-full")," to an element would apply the ",Object(p.a)("inlineCode",{parentName:"p"},"h-full")," utility at medium screen sizes and above."),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(v.a,{classNames:["h-8","h-12","h-16","h-20","h-24"],snippet:e=>'\n    <div class="'.concat(e,' w-32 bg-gray-400"></div>\n  '),preview:e=>Object(p.a)("div",{className:"w-32 bg-gray-400 ".concat(e)}),mdxType:"ResponsiveCodeSample"}),Object(p.a)("hr",null),Object(p.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(l.a,{level:3,id:"height-scale",toc:!0},"Height Scale"),Object(p.a)("p",null,"By default, Tailwind's height scale is a combination of the ",Object(p.a)(r.a,{href:"/docs/customizing-spacing#default-spacing-scale",passHref:!0},Object(p.a)("a",null,"default spacing scale"))," as well as some additional values specific to heights."),Object(p.a)("p",null,"You can customize the spacing scale for padding, margin, width, and height all at once in the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.spacing")," section of your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(p.a)("pre",{className:"language-diff"},Object(p.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     spacing: {\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       sm: '8px',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       md: '16px',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       lg: '24px',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       xl: '48px',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(p.a)("p",null,"To customize height separately, use the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.height")," section of your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(p.a)("pre",{className:"language-diff"},Object(p.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     height: {\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       sm: '8px',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       md: '16px',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       lg: '24px',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       xl: '48px',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(p.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(p.a)(f.a,{plugin:"height",mdxType:"Variants"}),Object(p.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(p.a)(b.a,{plugin:"height",mdxType:"Disabling"}))}y.isMDXComponent=!0,y.layoutProps=N},YuTi:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((n,t,a)=>0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t),"")}t.d(n,"a",(function(){return a}))},lTpF:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/height",function(){return t("TALv")}])},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("q1tI"),s=t.n(a),c=t("iuhU"),i=s.a.createElement;function p(e){var{preview:n,snippet:t,previewClassName:a}=e;return i("div",{className:"relative overflow-hidden mb-8"},i("div",{className:Object(c.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:n}}),i("div",{className:"rounded-b-lg bg-gray-800"},i("pre",{className:"scrollbar-none m-0 p-0 language-html"},i("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(e,n,t){"use strict";e.exports=e=>{const n=e.match(/^[ \t]*(?=\S)/gm);return n?n.reduce((e,n)=>Math.min(e,n.length),1/0):0}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),c=t.n(s),i=t("AOjV"),p=t("AI3G"),o=t("Zb5r"),r=c.a.createElement;function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var{plugin:n,name:t}=e,a=Object(p.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(e,n,t)=>"".concat(n," ").concat(t.toLowerCase())),r(c.a.Fragment,null,r("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(a.map(e=>"<code>".concat(e,"</code>")))}})," ",a.length>1?"properties":"property"," to ",r("code",null,"false")," in the"," ",r("code",null,"corePlugins")," section of your config file:"),r(i.a,{path:"corePlugins",before:"// ...",add:a.reduce((e,n)=>u(u({},e),{},{[n]:!1}),{})}))}},yLpj:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"===typeof window&&(t=window)}e.exports=t}},[["lTpF",0,2,5,1,3,4]]]);