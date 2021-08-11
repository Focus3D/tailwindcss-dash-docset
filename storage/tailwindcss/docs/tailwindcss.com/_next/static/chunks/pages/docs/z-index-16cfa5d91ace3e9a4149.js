_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[186],{"7iEl":function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return h}));var n=t("HALo"),s=t("dhJC"),c=t("q1tI"),p=t.n(c),o=t("7ljp"),r=t("YFqc"),i=t.n(r),l=t("tc9R"),b=t("pOT7"),m=t("vRWG"),u=t("I6Nb"),d=t("f2nW"),j=t.n(d),O=t("8C7G"),N=t("wH44");p.a.createElement;const g={Layout:m.DocumentationLayout,classes:{plugin:j()},meta:{title:"Z-Index",description:"Utilities for controlling the stack order of an element.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Z-Index scale",slug:"z-index-scale"},{title:"Negative values",slug:"negative-values"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},k=u.ContentsLayout;function h(a){let{components:e}=a,t=Object(s.a)(a,["components"]);return Object(o.a)(k,Object(n.a)({},g,t,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Control the stack order (or three-dimensional positioning) of an element in Tailwind, regardless of order it has been displayed, using the ",Object(o.a)("inlineCode",{parentName:"p"},"z-{index}")," utilities.")),Object(o.a)(b.a,{preview:'\n  <div class="flex justify-center relative h-28 text-center transform translate-x-12">\n    <div class="z-40 relative w-20 h-20 bg-fuchsia-500 border-r border-opacity-50 border-fuchsia-600 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold">5</div>\n    <div class="z-30 relative w-20 h-20 -left-6 top-2 bg-fuchsia-500 border-r border-opacity-50 border-fuchsia-600 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold">4</div>\n    <div class="z-20 relative w-20 h-20 -left-12 top-4 bg-fuchsia-500 border-r border-opacity-50 border-fuchsia-600 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold">3</div>\n    <div class="z-10 relative w-20 h-20 -left-18 top-6 bg-fuchsia-500 border-r border-opacity-50 border-fuchsia-600 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold">2</div>\n    <div class="z-0 relative w-20 h-20 -left-24 top-8 bg-fuchsia-500 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold">1</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">z-40</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">z-30</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">z-20</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">z-10</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">z-0</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the z-index of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing z-index utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:z-50")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"z-50")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"z-0 ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:z-50")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(l.a,{level:3,id:"z-index-scale",toc:!0},"Z-Index scale"),Object(o.a)("p",null,"By default, Tailwind provides six numeric ",Object(o.a)("inlineCode",{parentName:"p"},"z-index")," utilities and an ",Object(o.a)("inlineCode",{parentName:"p"},"auto")," utility. You change, add, or remove these by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.zIndex")," section of your Tailwind config."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     zIndex",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'0'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"0"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'10'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"10"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'20'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"20"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'30'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"30"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'40'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"40"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'50'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"50"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'25'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"25"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'50'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"50"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'75'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"75"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'100'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"100"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'auto'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'auto'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(l.a,{level:3,id:"negative-values",toc:!0},"Negative values"),Object(o.a)("p",null,"If you\u2019d like to add any negative z-index classes that take the same form as Tailwind\u2019s ",Object(o.a)(i.a,{href:"/docs/margin#negative-margins",passHref:!0},Object(o.a)("a",null,"negative margin"))," classes, prefix the keys in your config file with a dash:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       zIndex",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'-10'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'-10'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Tailwind is smart enough to generate classes like ",Object(o.a)("inlineCode",{parentName:"p"},"-z-10")," when it sees the leading dash, not ",Object(o.a)("inlineCode",{parentName:"p"},"z--10")," like you might expect."),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(O.a,{plugin:"zIndex",name:"z-index",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(N.a,{plugin:"zIndex",name:"z-index",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=g},"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),p=t("Zb5r"),o=t("AOjV"),r=s.a.createElement;function i({plugin:a,name:e}){const t=c.defaultConfig.variants[a]||["responsive"];e=e||a.replace(/([a-z])([A-Z])/g,((a,e,t)=>`${e} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((a=>!t.includes(a))).slice(0,2),s=`By default, ${t.length?`only ${Object(p.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${e} utilities.`;return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:s}}),r("p",null,"You can control which variants are generated for the ",e," utilities by modifying the"," ",r("code",null,a)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(p.a)(n)," variants:"),r(o.a,{path:"variants.extend",before:"...",add:{[a]:n}}))}},ZYNp:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/z-index",function(){return t("7iEl")}])},f2nW:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("zIndex",[["z",["zIndex"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return j})),t.d(e,"b",(function(){return O}));var n=t("HALo"),s=t("q1tI"),c=t.n(s),p=t("iuhU"),o=t("ZMKu"),r=c.a.createElement;const i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},b={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function u(a){const e=Object(s.useRef)(),{0:t,1:c}=Object(s.useState)(!1),{0:p,1:o}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function a(){o({height:e.current.contentDocument.body.scrollHeight})}const n=new window.ResizeObserver(a);return a(),n.observe(e.current.contentDocument.body),()=>{n.disconnect()}}),[t]),r("iframe",Object(n.a)({},a,{ref:e,onLoad:()=>c(!0),style:p}))}function d({color:a,snippet:e}){return r("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",i[a],{"bg-gray-800":!i[a]})},r("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[a]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:e}})))}function j({preview:a,src:e,snippet:t,previewClassName:n,color:s="gray"}){return r("div",{className:"relative overflow-hidden mb-8"},a?r("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",l[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):r(u,{src:e,className:Object(p.a)("w-full rounded-t-xl",l[s])}),r(d,{color:s,snippet:t}))}function O({preview:a,src:e,previewClassName:t,snippet:n,color:c="gray",min:i=!1}){const j=Object(s.useRef)(),O=Object(o.h)(0),N=Object(s.useRef)(),{0:g,1:k}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const a=new window.ResizeObserver((()=>{O.set(0)}));return a.observe(j.current),()=>{a.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:j,className:`relative rounded-t-xl ${b[c]}`},r("div",{className:i?"md:w-88":void 0},r(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(O,(a=>-a))}},a?r("div",{className:Object(p.a)("rounded-t-xl",t,l[c],{"p-10":!t}),dangerouslySetInnerHTML:{__html:a}}):r(u,{src:e,className:Object(p.a)("w-full rounded-t-xl",l[c],{"pointer-events-none":g})}))),r("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(o.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(i?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),k(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),k(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${m[c]}`,style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(d,{color:c,snippet:n}))}}},[["ZYNp",0,2,6,8,1,3,4,5,7,9,10]]]);