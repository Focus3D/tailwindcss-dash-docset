_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[98],{"+ar0":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,c.default)("gridTemplateColumns",[["grid-cols",["gridTemplateColumns"]]],{resolveArbitraryValue:s.asList})};var n,s=t("fC9q"),c=(n=t("y2+P"))&&n.__esModule?n:{default:n}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),o=t("Zb5r"),i=t("AOjV"),r=s.a.createElement;function l({plugin:e,name:a}){const t=c.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),s=`By default, ${t.length?`only ${Object(o.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:s}}),r("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",r("code",null,e)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(o.a)(n)," variants:"),r(i.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},R38X:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t("HALo"),s=t("dhJC"),c=t("q1tI"),o=t.n(c),i=t("7ljp"),r=t("YFqc"),l=t.n(r),p=t("tc9R"),u=t("pOT7"),m=t("vRWG"),d=t("I6Nb"),b=t("+ar0"),g=t.n(b),j=t("8C7G"),O=t("wH44");o.a.createElement;const f={Layout:m.DocumentationLayout,classes:{plugin:g()},meta:{title:"Grid Template Columns",description:"Utilities for specifying the columns in a grid layout."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},N=d.ContentsLayout;function h(e){let{components:a}=e,t=Object(s.a)(e,["components"]);return Object(i.a)(N,Object(n.a)({},f,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"Use the ",Object(i.a)("inlineCode",{parentName:"p"},"grid-cols-{n}")," utilities to create grids with ",Object(i.a)("em",{parentName:"p"},"n")," equally sized columns.")),Object(i.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4">\n    <div class="bg-fuchsia-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">1</div>\n    <div class="bg-fuchsia-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">2</div>\n    <div class="bg-fuchsia-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">3</div>\n    <div class="bg-fuchsia-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">4</div>\n    <div class="bg-fuchsia-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">5</div>\n    <div class="bg-fuchsia-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">6</div>\n    <div class="bg-fuchsia-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">7</div>\n    <div class="bg-fuchsia-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">8</div>\n    <div class="bg-fuchsia-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">9</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid <span class="code-highlight bg-code-highlight">grid-cols-3</span> gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"bg-white p-8",color:"fuchsia",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the columns of a grid at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing grid-template-columns utility. For example, use ",Object(i.a)("inlineCode",{parentName:"p"},"md:grid-cols-6")," to apply the ",Object(i.a)("inlineCode",{parentName:"p"},"grid-cols-6")," utility at only medium screen sizes and above."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"grid grid-cols-1 ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:grid-cols-6"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(i.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)("p",null,"By default, Tailwind includes grid-template-column utilities for creating basic grids with up to 12 equal width columns. You change, add, or remove these by customizing the ",Object(i.a)("inlineCode",{parentName:"p"},"gridTemplateColumns")," section of your Tailwind theme config."),Object(i.a)("p",null,"You have direct access to the ",Object(i.a)("inlineCode",{parentName:"p"},"grid-template-columns")," CSS property here so you can make your custom column values as generic or as complicated and site-specific as you like."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       gridTemplateColumns",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"         ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// Simple 16 column grid"),"\n"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'16'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'repeat(16, minmax(0, 1fr))'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"         ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// Complex site-specific column configuration"),"\n"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'footer'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'200px minmax(900px, 1fr) 100px'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(i.a)("p",null,"Learn more about customizing the default theme in the ",Object(i.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(i.a)("a",null,"theme customization documentation")),"."),Object(i.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(j.a,{plugin:"gridTemplateColumns",name:"grid-template-columns",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(O.a,{plugin:"gridTemplateColumns",name:"grid-template-columns",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=f},o6pH:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/grid-template-columns",function(){return t("R38X")}])},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return g})),t.d(a,"b",(function(){return j}));var n=t("HALo"),s=t("q1tI"),c=t.n(s),o=t("iuhU"),i=t("ZMKu"),r=c.a.createElement;const l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(e){const a=Object(s.useRef)(),{0:t,1:c}=Object(s.useState)(!1),{0:o,1:i}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function e(){i({height:a.current.contentDocument.body.scrollHeight})}const n=new window.ResizeObserver(e);return e(),n.observe(a.current.contentDocument.body),()=>{n.disconnect()}}),[t]),r("iframe",Object(n.a)({},e,{ref:a,onLoad:()=>c(!0),style:o}))}function b({color:e,snippet:a}){return r("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",l[e],{"bg-gray-800":!l[e]})},r("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[e]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function g({preview:e,src:a,snippet:t,previewClassName:n,color:s="gray"}){return r("div",{className:"relative overflow-hidden mb-8"},e?r("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",p[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):r(d,{src:a,className:Object(o.a)("w-full rounded-t-xl",p[s])}),r(b,{color:s,snippet:t}))}function j({preview:e,src:a,previewClassName:t,snippet:n,color:c="gray",min:l=!1}){const g=Object(s.useRef)(),j=Object(i.h)(0),O=Object(s.useRef)(),{0:f,1:N}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{j.set(0)}));return e.observe(g.current),()=>{e.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:g,className:`relative rounded-t-xl ${u[c]}`},r("div",{className:l?"md:w-88":void 0},r(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(j,(e=>-e))}},e?r("div",{className:Object(o.a)("rounded-t-xl",t,p[c],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):r(d,{src:a,className:Object(o.a)("w-full rounded-t-xl",p[c],{"pointer-events-none":f})}))),r("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(i.d.div,{drag:"x",_dragX:j,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(l?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:j},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),N(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${m[c]}`,style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(b,{color:c,snippet:n}))}}},[["o6pH",0,2,6,8,1,3,4,5,7,9,10]]]);