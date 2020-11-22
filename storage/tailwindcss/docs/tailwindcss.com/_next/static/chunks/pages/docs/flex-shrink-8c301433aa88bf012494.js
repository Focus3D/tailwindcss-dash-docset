_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[77],{"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return r}));var t=n("rePB"),s=n("q1tI"),c=n.n(s),p=n("98BF"),o=n("Zb5r"),l=n("AOjV"),i=c.a.createElement;function r(a){var e=a.plugin,n=a.name,s=p.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(function(a,e,n){return"".concat(e," ").concat(n.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),r="By default, ".concat(s.length?"only ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:r}}),i("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(o.a)(c)," variants:"),i(l.a,{path:"variants.extend",before:"...",add:Object(t.a)({},e,c)}))}},RdsV:function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),p=n.n(c),o=n("7ljp"),l=n("YFqc"),i=n.n(l),r=n("tc9R"),u=n("pOT7"),m=n("vRWG"),d=n("I6Nb"),b=n("Wne5"),k=n.n(b),j=n("8C7G"),g=n("wH44"),O=(p.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:k.a},meta:{title:"Flex Shrink",description:"Utilities for controlling how flex items shrink.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Shrink",slug:"shrink",children:[]},{title:"Don't shrink",slug:"don-t-shrink",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Shrink Values",slug:"shrink-values"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),N=d.ContentsLayout;function h(a){var e=a.components,n=Object(s.a)(a,["components"]);return Object(o.a)(N,Object(t.a)({},O,n,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"shrink",toc:!0},"Shrink"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"flex-shrink")," to allow a flex item to shrink if needed:")),Object(o.a)(u.a,{preview:'\n  <div class="flex space-x-4">\n    <div class="flex-1 h-16 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">\n      <svg class="w-5 h-5" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.286 8.875v-2.25a5.58 5.58 0 011.673-3.977A5.76 5.76 0 0110 1a5.76 5.76 0 014.04 1.648 5.581 5.581 0 011.674 3.977v2.25c.606 0 1.188.237 1.617.659.428.422.669.994.669 1.591v5.625c0 .597-.24 1.169-.67 1.591a2.304 2.304 0 01-1.616.659H4.286a2.304 2.304 0 01-1.617-.659A2.233 2.233 0 012 16.75v-5.625c0-.597.24-1.169.67-1.591a2.304 2.304 0 011.616-.659zm9.143-2.25v2.25H6.57v-2.25c0-.895.362-1.754 1.005-2.386A3.456 3.456 0 0110 3.25c.91 0 1.781.356 2.424.989a3.349 3.349 0 011.005 2.386z" fill="currentColor"/></svg>\n    </div>\n    <div class="flex-shrink h-16 rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center px-6">\n      <svg class="h-5 w-14" fill="none"><path d="M8 5l5 5m0 0l-5 5m5-5H1M24 10.005l2 1.999 4-3.998m6 1.999C36 14.972 31.97 19 27 19c-4.98 0-9-4.028-9-8.995C17.99 5.028 22.02 1 26.99 1c4.97-.01 9 4.018 9 8.985l.01.02zM46 5l-5 5m0 0l5 5m-5-5h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\n    </div>\n    <div class="flex-1 h-16 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">\n      <svg class="w-5 h-5" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.286 8.875v-2.25a5.58 5.58 0 011.673-3.977A5.76 5.76 0 0110 1a5.76 5.76 0 014.04 1.648 5.581 5.581 0 011.674 3.977v2.25c.606 0 1.188.237 1.617.659.428.422.669.994.669 1.591v5.625c0 .597-.24 1.169-.67 1.591a2.304 2.304 0 01-1.616.659H4.286a2.304 2.304 0 01-1.617-.659A2.233 2.233 0 012 16.75v-5.625c0-.597.24-1.169.67-1.591a2.304 2.304 0 011.616-.659zm9.143-2.25v2.25H6.57v-2.25c0-.895.362-1.754 1.005-2.386A3.456 3.456 0 0110 3.25c.91 0 1.781.356 2.424.989a3.349 3.349 0 011.005 2.386z" fill="currentColor"/></svg>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-1 h-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- This item will grow or shrink as needed --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">flex-shrink</span> h-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- This item will shrink --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-1 h-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- This item will grow or shrink as needed --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"don-t-shrink",toc:!0},"Don't shrink"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"flex-shrink-0")," to prevent a flex item from shrinking:")),Object(o.a)(u.a,{preview:'\n  <div class="flex space-x-4">\n    <div class="flex-1 h-16 rounded-md bg-light-blue-300 text-white text-2xl font-extrabold flex items-center justify-center">\n      <svg class="h-5 w-14" fill="none"><path d="M8 5l5 5m0 0l-5 5m5-5H1M24 10.005l2 1.999 4-3.998m6 1.999C36 14.972 31.97 19 27 19c-4.98 0-9-4.028-9-8.995C17.99 5.028 22.02 1 26.99 1c4.97-.01 9 4.018 9 8.985l.01.02zM46 5l-5 5m0 0l5 5m-5-5h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\n    </div>\n    <div class="flex-shrink-0 h-16 w-40 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">\n      <svg class="w-5 h-5" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.286 8.875v-2.25a5.58 5.58 0 011.673-3.977A5.76 5.76 0 0110 1a5.76 5.76 0 014.04 1.648 5.581 5.581 0 011.674 3.977v2.25c.606 0 1.188.237 1.617.659.428.422.669.994.669 1.591v5.625c0 .597-.24 1.169-.67 1.591a2.304 2.304 0 01-1.616.659H4.286a2.304 2.304 0 01-1.617-.659A2.233 2.233 0 012 16.75v-5.625c0-.597.24-1.169.67-1.591a2.304 2.304 0 011.616-.659zm9.143-2.25v2.25H6.57v-2.25c0-.895.362-1.754 1.005-2.386A3.456 3.456 0 0110 3.25c.91 0 1.781.356 2.424.989a3.349 3.349 0 011.005 2.386z" fill="currentColor"/></svg>\n    </div>\n    <div class="flex-1 h-16 rounded-md bg-light-blue-300 text-white text-2xl font-extrabold flex items-center justify-center">\n      <svg class="h-5 w-14" fill="none"><path d="M8 5l5 5m0 0l-5 5m5-5H1M24 10.005l2 1.999 4-3.998m6 1.999C36 14.972 31.97 19 27 19c-4.98 0-9-4.028-9-8.995C17.99 5.028 22.02 1 26.99 1c4.97-.01 9 4.018 9 8.985l.01.02zM46 5l-5 5m0 0l5 5m-5-5h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-1 h-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- This item will grow or shrink as needed --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">flex-shrink-0</span> h-16 w-40 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- This item will not shrink below its initial size--\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-1 h-16 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- This item will grow or shrink as needed --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control how a flex item shrinks at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing utility class. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:flex-shrink-0")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"flex-shrink-0")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"flex ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"flex-shrink ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:flex-shrink-0")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n    Responsive flex item\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"shrink-values",toc:!0},"Shrink Values"),Object(o.a)("p",null,"By default Tailwind provides two ",Object(o.a)("inlineCode",{parentName:"p"},"flex-shrink")," utilities. You change, add, or remove these by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.flexShrink")," section of your Tailwind config."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     flexShrink",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token number"}),"0"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token constant"}),"DEFAULT"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token number"}),"1"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token constant"}),"DEFAULT"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token number"}),"2"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'1'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token number"}),"1"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(j.a,{plugin:"flexShrink",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(g.a,{plugin:"flexShrink",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=O},Wne5:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,theme:e,variants:n}){a(t.default.fromPairs(t.default.map(e("flexShrink"),(a,e)=>[(0,s.default)("flex-shrink",e),{"flex-shrink":a}])),n("flexShrink"))}};var t=c(n("LvDl")),s=c(n("dzuX"));function c(a){return a&&a.__esModule?a:{default:a}}},fFr5:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/flex-shrink",function(){return n("RdsV")}])},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return i}));var t=n("q1tI"),s=n.n(t),c=n("iuhU"),p=s.a.createElement,o={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function i(a){var e=a.preview,n=a.snippet,t=a.previewClassName,s=a.color,i=void 0===s?"gray":s;return p("div",{className:"relative overflow-hidden mb-8"},p("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",l[i],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}),p("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",o[i],{"bg-gray-800":!o[i]})},p("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":o[i]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}}))))}}},[["fFr5",0,2,9,1,3,4,5,6,7]]]);