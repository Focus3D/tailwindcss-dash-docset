(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[69],{"+VXr":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,e:n,theme:a,variants:o}){e(t.default.fromPairs(t.default.map(a("boxShadow"),(e,a)=>{return[`.${"default"===a?"shadow":`${n((0,s.default)("shadow",a))}`}`,{"box-shadow":e}]})),o("boxShadow"))}};var t=o(a("LvDl")),s=o(a("6HzA"));function o(e){return e&&e.__esModule?e:{default:e}}},"5xSE":function(e,n,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"6HzA":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){return"-"===n?`-${e}`:s.default.startsWith(n,"-")?`-${e}-${n.slice(1)}`:`${e}-${n}`};var t,s=(t=a("LvDl"))&&t.__esModule?t:{default:t}},"8C7G":function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var t=a("q1tI"),s=a.n(t),o=a("98BF"),c=a("Zb5r"),p=a("AOjV"),i=s.a.createElement;function l(e){var{plugin:n,name:a}=e,t=o.defaultConfig.variants[n]||["responsive"];a=a||n.replace(/([a-z])([A-Z])/g,(e,n,a)=>"".concat(n," ").concat(a.toLowerCase()));var l=["responsive","hover","focus","active","group-hover"].filter(e=>!t.includes(e)).slice(0,2);return i(s.a.Fragment,null,i("p",null,"By default, ",t.length?"only ".concat(Object(c.a)(t)):"no"," variants are generated for ",a," utilities."),i("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",i("code",null,n)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(c.a)(l)," variants:"),i(p.a,{path:"variants",before:"// ...",remove:{[n]:t},add:{[n]:[...t,...l]}}))}},AOjV:function(e,n,a){"use strict";a.d(n,"a",(function(){return u}));var t=a("q1tI"),s=a.n(t),o=a("Btb4"),c=a.n(o),p=a("AI3G"),i=a("iuhU"),l=s.a.createElement;function r(e){var{edits:n,indent:a="",type:s="inserted"}=e;return l("span",{className:Object(i.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(n).map((e,o)=>l(t.Fragment,{key:o},l("span",{className:Object(i.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",a,function(e){return/^[a-z_$][a-z0-9_$]*$/i.test(e)?e:"'".concat(e,"'")}(e),":"," ",c()(n[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(e,n)=>"[".concat(n.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((e,n)=>"".concat(0===n?"":"+ "+a).concat(e)).join("\n"),",\n")))}function u(e){var{path:n,add:a,remove:s,before:o,after:c}=e;return n="string"===typeof n?n.split("."):n,l("pre",{className:"language-diff"},l("code",{className:"language-diff"},l("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((e,n)=>l(t.Fragment,{key:n},"  ","  ".repeat(n+1),e,": ","{\n")),o&&Object(p.a)(o).map(e=>"".concat("  ".repeat(n.length+2)).concat(e,"\n"))),s&&l(r,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),a&&l(r,{edits:a,type:"inserted",indent:"  ".repeat(n.length+1)}),l("span",{className:"token unchanged"},c&&Object(p.a)(c).map(e=>"".concat("  ".repeat(n.length+2)).concat(e,"\n")),n.map((e,a)=>l(t.Fragment,{key:a},"  ","  ".repeat(n.length-a),"}\n")),"  }")))}},Btb4:function(e,n,a){"use strict";const t=a("5xSE"),s=a("p+I8"),o=a("GAX2").default;e.exports=(e,n,a)=>{const c=[];return function e(n,a,p){let i;(a=a||{}).indent=a.indent||"\t",p=p||"",i=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===a.inlineCharacterLimit)return e;const n=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return n.length<=a.inlineCharacterLimit?n:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),p).replace(new RegExp(i.indent,"g"),p+a.indent)};if(-1!==c.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||t(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";c.push(n);const t="["+i.newLine+n.map((t,s)=>{const o=n.length-1===s?i.newLine:","+i.newLineOrSpace;let c=e(t,a,p+a.indent);return a.transform&&(c=a.transform(n,s,c)),i.indent+c+o}).join("")+i.pad+"]";return c.pop(),l(t)}if(s(n)){let t=Object.keys(n).concat(o(n));if(a.filter&&(t=t.filter(e=>a.filter(n,e))),0===t.length)return"{}";c.push(n);const s="{"+i.newLine+t.map((s,o)=>{const c=t.length-1===o?i.newLine:","+i.newLineOrSpace,l="symbol"===typeof s,r=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||r?s:e(s,a);let d=e(n[s],a,p+a.indent);return a.transform&&(d=a.transform(n,s,d)),i.indent+String(u)+": "+d+c}).join("")+i.pad+"}";return c.pop(),l(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,a)}},"Ca+n":function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a("q1tI"),s=a.n(t),o=a("S5AU"),c=a.n(o),p=a("iuhU"),i=s.a.createElement,l=["","sm:","md:","lg:","xl:"];function r(e){var{children:n,active:a,onClick:t}=e;return i("button",{type:"button",className:Object(p.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":a,"text-gray-500":!a}),onClick:t},n)}var u=e=>'<div class="'.concat(e,'"></div>');function d(e){var{classNames:n,snippet:a=u,preview:s,previewClassName:o}=e,d=Array.isArray(n[0])?n.length:1,{0:m,1:g}=Object(t.useState)(0);return i("div",{className:"mt-8"},i("div",{className:"flex justify-center"},i("div",{className:"grid grid-cols-5 mb-2 bg-white"},i(r,{active:0===m,onClick:()=>g(0)},i("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"all")),i(r,{active:1===m,onClick:()=>g(1)},i("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"sm")),i(r,{active:2===m,onClick:()=>g(2)},i("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"md")),i(r,{active:3===m,onClick:()=>g(3)},i("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"lg")),i(r,{active:4===m,onClick:()=>g(4)},i("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),i("p",{className:"text-xs"},"xl")))),i("div",{className:"overflow-hidden mb-8"},i("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},i("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},i("code",{className:"inline-block p-4"},c()(a(1===d?"{{CLASSNAMES}}":Array.from({length:d}).map((e,n)=>"{{CLASSNAMES[".concat(n,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((e,a)=>{if(a%2===1){var t=e.match(/\[([0-9]+)\]/);return(t?n[parseInt(t[1],10)]:n).map((e,n)=>e?i("span",{key:"".concat(a,"-").concat(n),className:m===n?"text-code-yellow":""},0===n?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(e=>"".concat(l[n]).concat(e)).join(" ")):null).filter(Boolean)}return e})))),i("div",{className:Object(p.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",o,{"p-4":!o})},s(function(e){if(d>1)return n.map(n=>{for(var a=e;a>=0;a--)if(n[a])return n[a].replace(/\(([^)]+)\)/g,"$1")});for(var a=e;a>=0;a--)if(n[a])return n[a].replace(/\(([^)]+)\)/g,"$1")}(m)))))}},DxjC:function(e,n,a){"use strict";a.r(n),a.d(n,"Layout",(function(){return v})),a.d(n,"classes",(function(){return w})),a.d(n,"meta",(function(){return k})),a.d(n,"tableOfContents",(function(){return O})),a.d(n,"default",(function(){return N}));var t=a("wx14"),s=a("Ff2n"),o=a("q1tI"),c=a.n(o),p=a("7ljp"),i=a("YFqc"),l=a.n(i),r=a("tc9R"),u=a("pOT7"),d=a("vRWG"),m=a("I6Nb"),g=a("+VXr"),b=a.n(g),h=a("8C7G"),f=a("wH44"),x=a("Ca+n"),v=(c.a.createElement,d.DocumentationLayout),w={plugin:b()},k={title:"Box Shadow",description:"Utilities for controlling the box shadow of an element.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},O=[{title:"Outer shadow",slug:"outer-shadow",children:[]},{title:"Inner shadow",slug:"inner-shadow",children:[]},{title:"Focus outline shadow",slug:"focus-outline-shadow",children:[]},{title:"No shadow",slug:"no-shadow",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Box Shadows",slug:"box-shadows"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],j={Layout:v,classes:w,meta:k,tableOfContents:O},y=m.ContentsLayout;function N(e){var{components:n}=e,a=Object(s.a)(e,["components"]);return Object(p.a)(y,Object(t.a)({},j,a,{components:n,mdxType:"MDXLayout"}),Object(p.a)(r.a,{level:2,id:"outer-shadow",toc:!0},"Outer shadow"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},".shadow-xs"),", ",Object(p.a)("inlineCode",{parentName:"p"},".shadow-sm"),", ",Object(p.a)("inlineCode",{parentName:"p"},".shadow"),", ",Object(p.a)("inlineCode",{parentName:"p"},".shadow-md"),", ",Object(p.a)("inlineCode",{parentName:"p"},".shadow-lg"),", ",Object(p.a)("inlineCode",{parentName:"p"},".shadow-xl"),", or ",Object(p.a)("inlineCode",{parentName:"p"},".shadow-2xl")," utilities to apply different sized outer box shadows to an element."),Object(p.a)(u.a,{preview:'\n  <div class="text-center px-2">\n    <div class="mb-1 text-xs text-gray-600">xs</div>\n    <div class="mx-auto h-6 w-6 text-xs bg-white rounded shadow-xs"></div>\n  </div>\n  <div class="mt-6 lg:mt-0 text-center px-2">\n    <div class="mb-1 text-xs text-gray-600">sm</div>\n    <div class="mx-auto h-8 w-8 text-xs bg-white rounded shadow-sm"></div>\n  </div>\n  <div class="mt-6 lg:mt-0 text-center px-2">\n    <div class="mb-1 text-xs text-gray-600">base</div>\n    <div class="mx-auto h-10 w-10 text-xs bg-white rounded shadow"></div>\n  </div>\n  <div class="mt-6 lg:mt-0 text-center px-2">\n    <div class="mb-1 text-xs text-gray-600">md</div>\n    <div class="mx-auto h-12 w-12 text-xs bg-white rounded shadow-md"></div>\n  </div>\n  <div class="mt-6 lg:mt-0 text-center px-2">\n    <div class="mb-1 text-xs text-gray-600">lg</div>\n    <div class="mx-auto h-16 w-16 text-xs bg-white rounded shadow-lg"></div>\n  </div>\n  <div class="mt-6 lg:mt-0 text-center px-2">\n    <div class="mb-1 text-xs text-gray-600">xl</div>\n    <div class="mx-auto h-20 w-20 text-xs bg-white rounded shadow-xl"></div>\n  </div>\n  <div class="mt-6 lg:mt-0 text-center px-2">\n    <div class="mb-1 text-xs text-gray-600">2xl</div>\n    <div class="mx-auto h-24 w-24 text-xs bg-white rounded shadow-2xl"></div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow-xs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow-lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow-xl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow-2xl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"bg-gray-100 lg:flex justify-around items-center text-sm p-4 py-8"}),Object(p.a)(r.a,{level:2,id:"inner-shadow",toc:!0},"Inner shadow"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},".shadow-inner")," utility to apply a subtle inset box shadow to an element. This can be useful for things like form controls or wells."),Object(p.a)(u.a,{preview:'\n  <div class="rounded p-4 bg-gray-200 shadow-inner">.shadow-inner</div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow-inner<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-around text-sm p-4 py-8"}),Object(p.a)(r.a,{level:2,id:"focus-outline-shadow",toc:!0},"Focus outline shadow"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},".shadow-outline")," utility to apply a focus-ring-style shadow to an element. This can be useful when combined with ",Object(p.a)("inlineCode",{parentName:"p"},".focus:outline-none")," to create a better looking focus style that follows an element's border radius."),Object(p.a)(u.a,{preview:'\n  <button class="focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-32 mr-6">\n    Unfocused\n  </button>\n  <button class="focus:outline-none shadow-outline bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-32">\n    Focused\n  </button>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>focus:outline-none focus:shadow-outline ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Button\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-center text-sm p-4 py-8"}),Object(p.a)(r.a,{level:2,id:"no-shadow",toc:!0},"No shadow"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},".shadow-none")," to remove an existing box shadow from an element. This is most commonly used to remove a shadow that was applied at a smaller breakpoint."),Object(p.a)(u.a,{preview:'\n  <div class="rounded p-4 shadow-none bg-gray-200">.shadow-none</div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-around text-sm p-4 py-8"}),Object(p.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the shadow of an element at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing shadow utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:shadow-lg")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"shadow-lg")," utility at only medium screen sizes and above."),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(x.a,{classNames:["shadow","shadow-md","shadow-lg","shadow-xl","shadow-2xl"],snippet:e=>'\n    <div class="'.concat(e,' ...">\n      \x3c!-- ... --\x3e\n    </div>\n  '),preview:e=>Object(p.a)("div",{className:"h-16 w-16 bg-white rounded ".concat(e)}),previewClassName:"bg-gray-200 flex justify-around items-center text-sm py-8",mdxType:"ResponsiveCodeSample"}),Object(p.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(r.a,{level:3,id:"box-shadows",toc:!0},"Box Shadows"),Object(p.a)("p",null,"By default Tailwind provides three drop shadow utilities, one inner shadow utility, and a utility for removing existing shadows. You can change, add, or remove these by editing the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.boxShadow")," section of your Tailwind config."),Object(p.a)("p",null,"If a ",Object(p.a)("inlineCode",{parentName:"p"},"default")," shadow is provided, it will be used for the non-suffixed ",Object(p.a)("inlineCode",{parentName:"p"},".shadow")," utility. Any other keys will be used as suffixes, for example the key ",Object(p.a)("inlineCode",{parentName:"p"},"'2'")," will create a corresponding ",Object(p.a)("inlineCode",{parentName:"p"},".shadow-2")," utility."),Object(p.a)("pre",{className:"language-diff"},Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     boxShadow: {\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       none: 'none',\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(p.a)(r.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(p.a)(h.a,{plugin:"boxShadow",mdxType:"Variants"}),Object(p.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(p.a)(f.a,{plugin:"boxShadow",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j},GAX2:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},"IBu/":function(e,n,a){"use strict";const t=a("sQdO");e.exports=e=>{const n=t(e);if(0===n)return e;const a=new RegExp(`^[ \\t]{${n}}`,"gm");return e.replace(a,"")}},JNdO:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/box-shadow",function(){return a("DxjC")}])},S5AU:function(e,n,a){"use strict";const t=a("IBu/"),s=a("S6im");e.exports=(e,n=0,a)=>s(t(e),n,a)},S6im:function(e,n,a){"use strict";e.exports=(e,n=1,a)=>{if(a={indent:" ",includeEmptyLines:!1,...a},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);if("string"!==typeof a.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof a.indent}\``);if(0===n)return e;const t=a.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(t,a.indent.repeat(n))}},YuTi:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Zb5r:function(e,n,a){"use strict";function t(e){return e.reduce((n,a,t)=>0===t?a:t===e.length-1?"".concat(n," and ").concat(a):"".concat(n,", ").concat(a),"")}a.d(n,"a",(function(){return t}))},"p+I8":function(e,n,a){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,a){"use strict";a.d(n,"a",(function(){return p}));var t=a("q1tI"),s=a.n(t),o=a("iuhU"),c=s.a.createElement;function p(e){var{preview:n,snippet:a,previewClassName:t}=e;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(o.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",t,{"p-4":!t}),dangerouslySetInnerHTML:{__html:n}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:a}}))))}},sQdO:function(e,n,a){"use strict";e.exports=e=>{const n=e.match(/^[ \t]*(?=\S)/gm);return n?n.reduce((e,n)=>Math.min(e,n.length),1/0):0}},wH44:function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a("rePB"),s=a("q1tI"),o=a.n(s),c=a("AOjV"),p=a("AI3G"),i=a("Zb5r"),l=o.a.createElement;function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){Object(t.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e){var{plugin:n,name:a}=e,t=Object(p.a)(n);return a=a||n.replace(/([a-z])([A-Z])/g,(e,n,a)=>"".concat(n," ").concat(a.toLowerCase())),l(o.a.Fragment,null,l("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(t.map(e=>"<code>".concat(e,"</code>")))}})," ",t.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(c.a,{path:"corePlugins",before:"// ...",add:t.reduce((e,n)=>u(u({},e),{},{[n]:!1}),{})}))}},yLpj:function(e,n){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a}},[["JNdO",0,2,5,1,3,4]]]);