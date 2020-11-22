_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return r}));var t=n("rePB"),s=n("q1tI"),p=n.n(s),c=n("98BF"),o=n("Zb5r"),i=n("AOjV"),l=p.a.createElement;function r(a){var e=a.plugin,n=a.name,s=c.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(function(a,e,n){return"".concat(e," ").concat(n.toLowerCase())}));var p=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),r="By default, ".concat(s.length?"only ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:r}}),l("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",l("code",null,e)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(o.a)(p)," variants:"),l(i.a,{path:"variants.extend",before:"...",add:Object(t.a)({},e,p)}))}},kmR3:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,theme:e,variants:n}){const p=[(a,e)=>({[(0,s.default)("border",e)]:{borderWidth:""+a}}),(a,e)=>({[(0,s.default)("border-t",e)]:{borderTopWidth:""+a},[(0,s.default)("border-r",e)]:{borderRightWidth:""+a},[(0,s.default)("border-b",e)]:{borderBottomWidth:""+a},[(0,s.default)("border-l",e)]:{borderLeftWidth:""+a}})];a(t.default.flatMap(p,a=>t.default.flatMap(e("borderWidth"),(e,n)=>a(e,n))),n("borderWidth"))}};var t=p(n("LvDl")),s=p(n("dzuX"));function p(a){return a&&a.__esModule?a:{default:a}}},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var t=n("q1tI"),s=n.n(t),p=n("iuhU"),c=s.a.createElement,o={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function l(a){var e=a.preview,n=a.snippet,t=a.previewClassName,s=a.color,l=void 0===s?"gray":s;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",i[l],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}),c("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",o[l],{"bg-gray-800":!o[l]})},c("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":o[l]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}}))))}},t6vv:function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return N}));var t=n("wx14"),s=n("Ff2n"),p=n("q1tI"),c=n.n(p),o=n("7ljp"),i=n("YFqc"),l=n.n(i),r=n("tc9R"),d=n("pOT7"),u=n("vRWG"),b=n("I6Nb"),g=n("kmR3"),m=n.n(g),k=n("8C7G"),j=n("wH44"),O=(c.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:m.a},meta:{title:"Border Width",description:"Utilities for controlling the width of an element's borders.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"All sides",slug:"all-sides",children:[]},{title:"Individual sides",slug:"individual-sides",children:[]},{title:"Between elements",slug:"between-elements",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Border Widths",slug:"border-widths"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=b.ContentsLayout;function N(a){var e=a.components,n=Object(s.a)(a,["components"]);return Object(o.a)(h,Object(t.a)({},O,n,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"all-sides",toc:!0},"All sides"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"border"),", ",Object(o.a)("inlineCode",{parentName:"p"},".border-0"),", ",Object(o.a)("inlineCode",{parentName:"p"},".border-2"),", ",Object(o.a)("inlineCode",{parentName:"p"},".border-4"),", or ",Object(o.a)("inlineCode",{parentName:"p"},".border-8")," utilities to set the border width for all sides of an element.")),Object(o.a)(d.a,{preview:'\n  <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">\n      <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-0 border-indigo-600">\n        .border-0\n      </div>\n      <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border border-indigo-600">\n        .border\n      </div>\n      <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-2 border-indigo-600">\n        .border-2\n      </div>\n      <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-4 border-indigo-600">\n        .border-4\n      </div>\n      <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-8 border-indigo-600">\n        .border-8\n      </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-0</span> border-indigo-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border</span> border-indigo-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-2</span> border-indigo-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-4</span> border-indigo-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-8</span> border-indigo-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"individual-sides",toc:!0},"Individual sides"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"border-{side}"),", ",Object(o.a)("inlineCode",{parentName:"p"},".border-{side}-0"),", ",Object(o.a)("inlineCode",{parentName:"p"},".border-{side}-2"),", ",Object(o.a)("inlineCode",{parentName:"p"},".border-{side}-4"),", or ",Object(o.a)("inlineCode",{parentName:"p"},".border-{side}-8")," utilities to set the border width for one side of an element.")),Object(o.a)(d.a,{preview:'\n  <div class="grid grid-cols-2 gap-2 lg:grid-cols-4">\n      <div class="p-4 bg-fuchsia-300 text-white text-center font-extrabold flex items-center justify-center border-t-2 border-fuchsia-600">\n        .border-t-2\n      </div>\n      <div class="p-4 bg-fuchsia-300 text-white text-center font-extrabold flex items-center justify-center border-r-2 border-fuchsia-600">\n        .border-r-2\n      </div>\n      <div class="p-4 bg-fuchsia-300 text-white text-center font-extrabold flex items-center justify-center border-b-2 border-fuchsia-600">\n        .border-b-2\n      </div>\n      <div class="p-4 bg-fuchsia-300 text-white text-center font-extrabold flex items-center justify-center border-l-2 border-fuchsia-600">\n        .border-l-2\n      </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-t-2</span> border-fuchsia-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-r-2</span> border-fuchsia-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-b-2</span> border-fuchsia-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-l-2</span> border-fuchsia-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"between-elements",toc:!0},"Between elements"),Object(o.a)("p",null,"You can also add borders between child elements using the ",Object(o.a)("inlineCode",{parentName:"p"},"divide-{x/y}-{width}")," and ",Object(o.a)("inlineCode",{parentName:"p"},"divide-{color}")," utilities."),Object(o.a)("p",null,"Learn more in the ",Object(o.a)(l.a,{href:"/docs/divide-width",passHref:!0},Object(o.a)("a",null,"Divide Width"))," and ",Object(o.a)(l.a,{href:"/docs/divide-color",passHref:!0},Object(o.a)("a",null,"Divide Color"))," documentation.")),Object(o.a)(d.a,{preview:'\n  <div class="divide-y divide-light-blue-400">\n    <div class="p-4 text-light-blue-800 text-center font-extrabold">1</div>\n    <div class="p-4 text-light-blue-800 text-center font-extrabold">2</div>\n    <div class="p-4 text-light-blue-800 text-center font-extrabold">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">divide-y</span> divide-light-blue-400 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the border width of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing border width utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:border-t-4")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"border-t-4")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"border-2 ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:border-t-4")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"border-widths",toc:!0},"Border Widths"),Object(o.a)("p",null,"By default Tailwind provides five ",Object(o.a)("inlineCode",{parentName:"p"},"border-width")," utilities, and the same number of utilities per side (top, right, bottom, and left). You change, add, or remove these by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.borderWidth")," section of your Tailwind config. The values in this section will also control which utilities will be generated side."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     borderWidth",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token constant"}),"DEFAULT"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'1px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'2'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'2px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'3'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'3px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'4'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'4px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'6'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'6px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'8'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'8px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(k.a,{plugin:"borderWidth",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(j.a,{plugin:"borderWidth",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},woNo:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-width",function(){return n("t6vv")}])}},[["woNo",0,2,9,1,3,4,5,6,7]]]);