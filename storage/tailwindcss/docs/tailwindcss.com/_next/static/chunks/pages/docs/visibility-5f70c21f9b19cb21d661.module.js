(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[166],{"5xSE":function(n,e,t){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var a=t("q1tI"),s=t.n(a),i=t("98BF"),c=t("Zb5r"),o=t("AOjV"),l=s.a.createElement;function p(n){var{plugin:e,name:t}=n,a=i.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(n,e,t)=>"".concat(e," ").concat(t.toLowerCase()));var p=["responsive","hover","focus","active","group-hover"].filter(n=>!a.includes(n)).slice(0,2);return l(s.a.Fragment,null,l("p",null,"By default, ",a.length?"only ".concat(Object(c.a)(a)):"no"," variants are generated for ",t," utilities."),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,e)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",a.length>0?"also ":"","generate"," ",Object(c.a)(p)," variants:"),l(o.a,{path:"variants",before:"// ...",remove:{[e]:a},add:{[e]:[...a,...p]}}))}},AOjV:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),i=t("Btb4"),c=t.n(i),o=t("AI3G"),l=t("iuhU"),p=s.a.createElement;function r(n){var{edits:e,indent:t="",type:s="inserted"}=n;return p("span",{className:Object(l.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(e).map((n,i)=>p(a.Fragment,{key:i},p("span",{className:Object(l.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,function(n){return/^[a-z_$][a-z0-9_$]*$/i.test(n)?n:"'".concat(n,"'")}(n),":"," ",c()(e[n],{indent:"  "}).replace(/\[([^\]]+)\]/g,(n,e)=>"[".concat(e.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((n,e)=>"".concat(0===e?"":"+ "+t).concat(n)).join("\n"),",\n")))}function u(n){var{path:e,add:t,remove:s,before:i,after:c}=n;return e="string"===typeof e?e.split("."):e,p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",e.map((n,e)=>p(a.Fragment,{key:e},"  ","  ".repeat(e+1),n,": ","{\n")),i&&Object(o.a)(i).map(n=>"".concat("  ".repeat(e.length+2)).concat(n,"\n"))),s&&p(r,{edits:s,type:"deleted",indent:"  ".repeat(e.length+1)}),t&&p(r,{edits:t,type:"inserted",indent:"  ".repeat(e.length+1)}),p("span",{className:"token unchanged"},c&&Object(o.a)(c).map(n=>"".concat("  ".repeat(e.length+2)).concat(n,"\n")),e.map((n,t)=>p(a.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n")),"  }")))}},Btb4:function(n,e,t){"use strict";const a=t("5xSE"),s=t("p+I8"),i=t("GAX2").default;n.exports=(n,e,t)=>{const c=[];return function n(e,t,o){let l;(t=t||{}).indent=t.indent||"\t",o=o||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=n=>{if(void 0===t.inlineCharacterLimit)return n;const e=n.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return e.length<=t.inlineCharacterLimit?e:n.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),o).replace(new RegExp(l.indent,"g"),o+t.indent)};if(-1!==c.indexOf(e))return'"[Circular]"';if(null===e||void 0===e||"number"===typeof e||"boolean"===typeof e||"function"===typeof e||"symbol"===typeof e||a(e))return String(e);if(e instanceof Date)return`new Date('${e.toISOString()}')`;if(Array.isArray(e)){if(0===e.length)return"[]";c.push(e);const a="["+l.newLine+e.map((a,s)=>{const i=e.length-1===s?l.newLine:","+l.newLineOrSpace;let c=n(a,t,o+t.indent);return t.transform&&(c=t.transform(e,s,c)),l.indent+c+i}).join("")+l.pad+"]";return c.pop(),p(a)}if(s(e)){let a=Object.keys(e).concat(i(e));if(t.filter&&(a=a.filter(n=>t.filter(e,n))),0===a.length)return"{}";c.push(e);const s="{"+l.newLine+a.map((s,i)=>{const c=a.length-1===i?l.newLine:","+l.newLineOrSpace,p="symbol"===typeof s,r=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||r?s:n(s,t);let d=n(e[s],t,o+t.indent);return t.transform&&(d=t.transform(e,s,d)),l.indent+String(u)+": "+d+c}).join("")+l.pad+"}";return c.pop(),p(s)}return e=String(e).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===t.singleQuotes?`"${e=e.replace(/"/g,'\\"')}"`:`'${e=e.replace(/\\?'/g,"\\'")}'`}(n,e,t)}},"Ca+n":function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var a=t("q1tI"),s=t.n(a),i=t("S5AU"),c=t.n(i),o=t("iuhU"),l=s.a.createElement,p=["","sm:","md:","lg:","xl:"];function r(n){var{children:e,active:t,onClick:a}=n;return l("button",{type:"button",className:Object(o.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:a},e)}var u=n=>'<div class="'.concat(n,'"></div>');function d(n){var{classNames:e,snippet:t=u,preview:s,previewClassName:i}=n,d=Array.isArray(e[0])?e.length:1,{0:g,1:v}=Object(a.useState)(0);return l("div",{className:"mt-8"},l("div",{className:"flex justify-center"},l("div",{className:"grid grid-cols-5 mb-2 bg-white"},l(r,{active:0===g,onClick:()=>v(0)},l("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"all")),l(r,{active:1===g,onClick:()=>v(1)},l("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"sm")),l(r,{active:2===g,onClick:()=>v(2)},l("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"md")),l(r,{active:3===g,onClick:()=>v(3)},l("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"lg")),l(r,{active:4===g,onClick:()=>v(4)},l("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),l("p",{className:"text-xs"},"xl")))),l("div",{className:"overflow-hidden mb-8"},l("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},l("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},l("code",{className:"inline-block p-4"},c()(t(1===d?"{{CLASSNAMES}}":Array.from({length:d}).map((n,e)=>"{{CLASSNAMES[".concat(e,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((n,t)=>{if(t%2===1){var a=n.match(/\[([0-9]+)\]/);return(a?e[parseInt(a[1],10)]:e).map((n,e)=>n?l("span",{key:"".concat(t,"-").concat(e),className:g===e?"text-code-yellow":""},0===e?"":" ",n.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(n=>"".concat(p[e]).concat(n)).join(" ")):null).filter(Boolean)}return n})))),l("div",{className:Object(o.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",i,{"p-4":!i})},s(function(n){if(d>1)return e.map(e=>{for(var t=n;t>=0;t--)if(e[t])return e[t].replace(/\(([^)]+)\)/g,"$1")});for(var t=n;t>=0;t--)if(e[t])return e[t].replace(/\(([^)]+)\)/g,"$1")}(g)))))}},GAX2:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>Object.getOwnPropertySymbols(n).filter(e=>Object.prototype.propertyIsEnumerable.call(n,e))},"IBu/":function(n,e,t){"use strict";const a=t("sQdO");n.exports=n=>{const e=a(n);if(0===e)return n;const t=new RegExp(`^[ \\t]{${e}}`,"gm");return n.replace(t,"")}},S5AU:function(n,e,t){"use strict";const a=t("IBu/"),s=t("S6im");n.exports=(n,e=0,t)=>s(a(n),e,t)},S6im:function(n,e,t){"use strict";n.exports=(n,e=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof n)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof n}\``);if("number"!==typeof e)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof e}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===e)return n;const a=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return n.replace(a,t.indent.repeat(e))}},Zb5r:function(n,e,t){"use strict";function a(n){return n.reduce((e,t,a)=>0===a?t:a===n.length-1?"".concat(e," and ").concat(t):"".concat(e,", ").concat(t),"")}t.d(e,"a",(function(){return a}))},aP1M:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/visibility",function(){return t("fUQf")}])},cXWA:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:n,variants:e}){n({".visible":{visibility:"visible"},".invisible":{visibility:"hidden"}},e("visibility"))}}},fUQf:function(n,e,t){"use strict";t.r(e),t.d(e,"Layout",(function(){return k})),t.d(e,"classes",(function(){return y})),t.d(e,"meta",(function(){return w})),t.d(e,"tableOfContents",(function(){return O})),t.d(e,"default",(function(){return N}));var a=t("wx14"),s=t("Ff2n"),i=t("q1tI"),c=t.n(i),o=t("7ljp"),l=t("YFqc"),p=t.n(l),r=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),v=t("cXWA"),b=t.n(v),m=t("8C7G"),f=t("wH44"),h=t("Ca+n"),k=(c.a.createElement,d.DocumentationLayout),y={plugin:b()},w={title:"Visibility",description:"Utilities for controlling the visibility of an element.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},O=[{title:"Visible",slug:"visible",children:[]},{title:"Invisible",slug:"invisible",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],j={Layout:k,classes:y,meta:w,tableOfContents:O},x=g.ContentsLayout;function N(n){var{components:e}=n,t=Object(s.a)(n,["components"]);return Object(o.a)(x,Object(a.a)({},j,t,{components:e,mdxType:"MDXLayout"}),Object(o.a)(r.a,{level:2,id:"visible",toc:!0},"Visible"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},".visible")," to make an element visible. This is mostly useful for undoing the ",Object(o.a)("inlineCode",{parentName:"p"},".invisible")," utility at different screen sizes."),Object(o.a)(u.a,{preview:'\n  <div class="bg-gray-400 w-32 h-12"></div>\n  <div class="visible bg-gray-600 w-32 h-12"></div>\n  <div class="bg-gray-400 w-32 h-12"></div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex justify-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-600 visible<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-center p-4"}),Object(o.a)(r.a,{level:2,id:"invisible",toc:!0},"Invisible"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},".invisible")," to hide an element, but still maintain its place in the DOM, affecting the layout of other elements (compare with ",Object(o.a)("inlineCode",{parentName:"p"},".hidden")," from the ",Object(o.a)(p.a,{href:"/docs/display#hidden",passHref:!0},Object(o.a)("a",null,"display"))," documentation)."),Object(o.a)(u.a,{preview:'\n  <div class="bg-gray-400 w-32 h-12"></div>\n  <div class="invisible bg-gray-600 w-32 h-12"></div>\n  <div class="bg-gray-400 w-32 h-12"></div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex justify-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-600 invisible<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-center p-4"}),Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To apply a visibility utility only at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to the existing class name. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:invisible")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"invisible")," utility at medium screen sizes and above."),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(h.a,{classNames:["visible","invisible","visible","invisible","visible"],snippet:n=>'\n    <div class="flex justify-center">\n      <div class="bg-gray-400"></div>\n      <div class="bg-gray-600 '.concat(n,'"></div>\n      <div class="bg-gray-400"></div>\n    </div>\n  '),preview:n=>Object(o.a)("div",{className:"flex justify-center"},Object(o.a)("div",{className:"bg-gray-400 w-32 h-12"}),Object(o.a)("div",{className:"bg-gray-600 w-32 h-12 ".concat(n)}),Object(o.a)("div",{className:"bg-gray-400 w-32 h-12"})),mdxType:"ResponsiveCodeSample"}),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(o.a)(m.a,{plugin:"visibility",mdxType:"Variants"}),Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(o.a)(f.a,{plugin:"visibility",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j},"p+I8":function(n,e,t){"use strict";n.exports=function(n){var e=typeof n;return null!==n&&("object"===e||"function"===e)}},pOT7:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t("q1tI"),s=t.n(a),i=t("iuhU"),c=s.a.createElement;function o(n){var{preview:e,snippet:t,previewClassName:a}=n;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(i.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:e}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(n,e,t){"use strict";n.exports=n=>{const e=n.match(/^[ \t]*(?=\S)/gm);return e?e.reduce((n,e)=>Math.min(n,e.length),1/0):0}},wH44:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),i=t.n(s),c=t("AOjV"),o=t("AI3G"),l=t("Zb5r"),p=i.a.createElement;function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){Object(a.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n){var{plugin:e,name:t}=n,a=Object(o.a)(e);return t=t||e.replace(/([a-z])([A-Z])/g,(n,e,t)=>"".concat(e," ").concat(t.toLowerCase())),p(i.a.Fragment,null,p("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(a.map(n=>"<code>".concat(n,"</code>")))}})," ",a.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(c.a,{path:"corePlugins",before:"// ...",add:a.reduce((n,e)=>u(u({},n),{},{[e]:!1}),{})}))}}},[["aP1M",0,2,1,3,4]]]);