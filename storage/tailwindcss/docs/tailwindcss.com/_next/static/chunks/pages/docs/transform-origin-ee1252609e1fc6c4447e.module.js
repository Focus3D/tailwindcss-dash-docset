(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[153],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),i=t("98BF"),o=t("Zb5r"),r=t("AOjV"),c=s.a.createElement;function l(e){var{plugin:a,name:t}=e,n=i.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var l=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2);return c(s.a.Fragment,null,c("p",null,"By default, ",n.length?"only ".concat(Object(o.a)(n)):"no"," variants are generated for ",t," utilities."),c("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",c("code",null,a)," property in the ",c("code",null,"variants")," section of your"," ",c("code",null,"tailwind.config.js")," file."),c("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(o.a)(l)," variants:"),c(r.a,{path:"variants",before:"// ...",remove:{[a]:n},add:{[a]:[...n,...l]}}))}},"Ca+n":function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("q1tI"),s=t.n(n),i=t("S5AU"),o=t.n(i),r=t("iuhU"),c=s.a.createElement,l=["","sm:","md:","lg:","xl:"];function p(e){var{children:a,active:t,onClick:n}=e;return c("button",{type:"button",className:Object(r.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:n},a)}var u=e=>'<div class="'.concat(e,'"></div>');function m(e){var{classNames:a,snippet:t=u,preview:s,previewClassName:i}=e,m=Array.isArray(a[0])?a.length:1,{0:g,1:d}=Object(n.useState)(0);return c("div",{className:"mt-8"},c("div",{className:"flex justify-center"},c("div",{className:"grid grid-cols-5 mb-2 bg-white"},c(p,{active:0===g,onClick:()=>d(0)},c("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),c("p",{className:"text-xs"},"all")),c(p,{active:1===g,onClick:()=>d(1)},c("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),c("p",{className:"text-xs"},"sm")),c(p,{active:2===g,onClick:()=>d(2)},c("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),c("p",{className:"text-xs"},"md")),c(p,{active:3===g,onClick:()=>d(3)},c("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),c("p",{className:"text-xs"},"lg")),c(p,{active:4===g,onClick:()=>d(4)},c("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),c("p",{className:"text-xs"},"xl")))),c("div",{className:"overflow-hidden mb-8"},c("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},c("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},c("code",{className:"inline-block p-4"},o()(t(1===m?"{{CLASSNAMES}}":Array.from({length:m}).map((e,a)=>"{{CLASSNAMES[".concat(a,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((e,t)=>{if(t%2===1){var n=e.match(/\[([0-9]+)\]/);return(n?a[parseInt(n[1],10)]:a).map((e,a)=>e?c("span",{key:"".concat(t,"-").concat(a),className:g===a?"text-code-yellow":""},0===a?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(e=>"".concat(l[a]).concat(e)).join(" ")):null).filter(Boolean)}return e})))),c("div",{className:Object(r.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",i,{"p-4":!i})},s(function(e){if(m>1)return a.map(a=>{for(var t=e;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")});for(var t=e;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")}(g)))))}},"IBu/":function(e,a,t){"use strict";const n=t("sQdO");e.exports=e=>{const a=n(e);if(0===a)return e;const t=new RegExp(`^[ \\t]{${a}}`,"gm");return e.replace(t,"")}},S5AU:function(e,a,t){"use strict";const n=t("IBu/"),s=t("S6im");e.exports=(e,a=0,t)=>s(n(e),a,t)},S6im:function(e,a,t){"use strict";e.exports=(e,a=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof a)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof a}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===a)return e;const n=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(n,t.indent.repeat(a))}},Tapg:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,s.default)("transformOrigin",[["origin",["transformOrigin"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},pO5O:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transform-origin",function(){return t("wtb5")}])},sQdO:function(e,a,t){"use strict";e.exports=e=>{const a=e.match(/^[ \t]*(?=\S)/gm);return a?a.reduce((e,a)=>Math.min(e,a.length),1/0):0}},wtb5:function(e,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return O})),t.d(a,"classes",(function(){return w})),t.d(a,"meta",(function(){return j})),t.d(a,"tableOfContents",(function(){return x})),t.d(a,"default",(function(){return N}));var n=t("wx14"),s=t("Ff2n"),i=t("q1tI"),o=t.n(i),r=t("7ljp"),c=t("YFqc"),l=t.n(c),p=t("tc9R"),u=t("pOT7"),m=t("vRWG"),g=t("I6Nb"),d=t("Tapg"),f=t.n(d),b=t("8C7G"),h=t("wH44"),v=t("Ca+n"),O=(o.a.createElement,m.DocumentationLayout),w={plugin:f()},j={title:"Transform Origin",description:"Utilities for specifying the origin for an element's transformations.",featureVersion:"v1.2.0+"},x=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Origin values",slug:"origin-values"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],y={Layout:O,classes:w,meta:j,tableOfContents:x},k=g.ContentsLayout;function N(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(r.a)(k,Object(n.a)({},y,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(r.a)("p",null,"Specify an element's transform origin using the ",Object(r.a)("inlineCode",{parentName:"p"},"origin-{keyword}")," utilities."),Object(r.a)(u.a,{preview:'\n  <div class="bg-gray-600">\n    <img class="h-16 w-16 origin-center transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n  </div>\n  <div class="bg-gray-600">\n    <img class="h-16 w-16 origin-top-left transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n  </div>\n  <div class="bg-gray-600">\n    <img class="h-16 w-16 origin-bottom-right transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n  </div>\n  <div class="bg-gray-600">\n    <img class="h-16 w-16 origin-left transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>origin-center transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>origin-top-left transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>origin-bottom-right transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>origin-left transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:"bg-white lg:flex justify-around items-center text-sm p-4 py-12"}),Object(r.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control the transform-origin of an element at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing transform-origin utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:origin-top")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"origin-top")," utility at only medium screen sizes and above."),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(v.a,{classNames:["origin-center","origin-top-left","origin-top-right","origin-bottom-right","origin-bottom-left"],snippet:e=>'\n    <img class="'.concat(e,' ...">\n  '),previewClassName:"flex justify-center items-center px-4 py-12",preview:e=>Object(r.a)("div",{className:"bg-gray-600"},Object(r.a)("img",{className:"h-16 w-16 transform rotate-45 ".concat(e),src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"})),mdxType:"ResponsiveCodeSample"}),Object(r.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(p.a,{level:3,id:"origin-values",toc:!0},"Origin values"),Object(r.a)("p",null,"By default Tailwind provides transform-origin utilities for all of the built-in browser keyword options. You change, add, or remove these by customizing the ",Object(r.a)("inlineCode",{parentName:"p"},"transformOrigin")," section of your Tailwind theme config."),Object(r.a)("pre",{className:"language-diff"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transformOrigin: {\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '24': '6rem',\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         'full': '100%',\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(r.a)("p",null,"Learn more about customizing the default theme in the ",Object(r.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(r.a)("a",null,"theme customization documentation")),"."),Object(r.a)(p.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(r.a)(b.a,{plugin:"transformOrigin",name:"transform-origin",mdxType:"Variants"}),Object(r.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(r.a)(h.a,{plugin:"transformOrigin",name:"transform-origin",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=y}},[["pO5O",0,2,1,3,4,7]]]);