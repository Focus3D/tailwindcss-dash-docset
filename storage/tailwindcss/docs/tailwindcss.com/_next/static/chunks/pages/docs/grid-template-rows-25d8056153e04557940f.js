_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[95],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("rePB"),s=t("q1tI"),c=t.n(s),o=t("98BF"),p=t("Zb5r"),i=t("AOjV"),r=c.a.createElement;function l(e){var a=e.plugin,t=e.name,s=o.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),l="By default, ".concat(s.length?"only ".concat(Object(p.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:l}}),r("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",r("code",null,a)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(p.a)(c)," variants:"),r(i.a,{path:"variants.extend",before:"...",add:Object(n.a)({},a,c)}))}},C7gB:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/grid-template-rows",function(){return t("a+39")}])},"a+39":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),p=t("7ljp"),i=t("YFqc"),r=t.n(i),l=t("tc9R"),m=t("pOT7"),d=t("vRWG"),u=t("I6Nb"),b=t("zOK1"),g=t.n(b),j=t("8C7G"),O=t("wH44"),N=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:g.a},meta:{title:"Grid Template Rows",description:"Utilities for specifying the rows in a grid layout."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=u.ContentsLayout;function h(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(p.a)(f,Object(n.a)({},N,t,{components:a,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"grid-rows-{n}")," utilities to create grids with ",Object(p.a)("em",{parentName:"p"},"n")," equally sized rows.")),Object(p.a)(m.a,{preview:'\n  <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">1</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">2</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">3</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">4</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">5</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">6</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">7</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">8</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">9</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-64 grid <span class="code-highlight bg-code-highlight">grid-rows-3</span> grid-flow-col gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"bg-white p-8",color:"lightBlue"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the rows of a grid at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing grid-template-rows utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:grid-rows-6")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"grid-rows-6")," utility at only medium screen sizes and above."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"grid grid-rows-2 ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:grid-rows-6")," ...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)("p",null,"By default Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You change, add, or remove these by customizing the ",Object(p.a)("inlineCode",{parentName:"p"},"gridTemplateRows")," section of your Tailwind theme config."),Object(p.a)("p",null,"You have direct access to the ",Object(p.a)("inlineCode",{parentName:"p"},"grid-template-rows")," CSS property here so you can make your custom rows values as generic or as complicated and site-specific as you like."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       gridTemplateRows",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"         ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// Simple 8 row grid"),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'8'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'repeat(8, minmax(0, 1fr))'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"         ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// Complex site-specific row configuration"),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'layout'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'200px minmax(900px, 1fr) 100px'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(p.a)("p",null,"Learn more about customizing the default theme in the ",Object(p.a)(r.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(p.a)("a",null,"theme customization documentation")),"."),Object(p.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(p.a)(j.a,{plugin:"gridTemplateRows",name:"grid-template-rows",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(p.a)(O.a,{plugin:"gridTemplateRows",name:"grid-template-rows",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=N},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("q1tI"),s=t.n(n),c=t("iuhU"),o=s.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function r(e){var a=e.preview,t=e.snippet,n=e.previewClassName,s=e.color,r=void 0===s?"gray":s;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",i[r],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}),o("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",p[r],{"bg-gray-800":!p[r]})},o("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[r]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}}))))}},zOK1:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,s.default)("gridTemplateRows",[["grid-rows",["gridTemplateRows"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}}},[["C7gB",0,2,1,3,4,5,6,7,8]]]);