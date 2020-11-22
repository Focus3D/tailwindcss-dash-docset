_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[128],{"+Bc5":function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/padding",function(){return n("rVkB")}])},"2b2o":function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,theme:e,variants:n}){const p=[(a,e)=>({[(0,s.default)("p",e)]:{padding:""+a}}),(a,e)=>({[(0,s.default)("py",e)]:{"padding-top":""+a,"padding-bottom":""+a},[(0,s.default)("px",e)]:{"padding-left":""+a,"padding-right":""+a}}),(a,e)=>({[(0,s.default)("pt",e)]:{"padding-top":""+a},[(0,s.default)("pr",e)]:{"padding-right":""+a},[(0,s.default)("pb",e)]:{"padding-bottom":""+a},[(0,s.default)("pl",e)]:{"padding-left":""+a}})];a(t.default.flatMap(p,a=>t.default.flatMap(e("padding"),a)),n("padding"))}};var t=p(n("LvDl")),s=p(n("dzuX"));function p(a){return a&&a.__esModule?a:{default:a}}},"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return r}));var t=n("rePB"),s=n("q1tI"),p=n.n(s),c=n("98BF"),o=n("Zb5r"),i=n("AOjV"),l=p.a.createElement;function r(a){var e=a.plugin,n=a.name,s=c.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(function(a,e,n){return"".concat(e," ").concat(n.toLowerCase())}));var p=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),r="By default, ".concat(s.length?"only ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:r}}),l("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",l("code",null,e)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(o.a)(p)," variants:"),l(i.a,{path:"variants.extend",before:"...",add:Object(t.a)({},e,p)}))}},C4b9:function(a,e){a.exports=function(a,e){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!==typeof e)throw new Error("expected a function for second argument");for(var n={},t=0;t<a.length;t++){var s=a[t],p=e(s),c=n[p];Array.isArray(c)?n[p].push(s):n[p]=[s]}return n}},"cOG/":function(a,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));var t=n("KQm4"),s=n("C4b9"),p=n.n(s);function c(a){return Object(t.a)(a).sort((function(a,e){var n=a.replace(/\\/g,"").match(/-([0-9.]+)$/);n=null===n?NaN:parseFloat(n[1]);var t=e.replace(/\\/g,"").match(/-([0-9.]+)$/);return t=null===t?NaN:parseFloat(t[1]),isNaN(n)&&isNaN(t)?0:isNaN(n)?1:isNaN(t)?-1:n-t}))}function o(a){return Object.values(p()(a,(function(a){return a.match(/^(-?.*?)[^-]+$/)[1]}))).flatMap(c)}},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var t=n("q1tI"),s=n.n(t),p=n("iuhU"),c=s.a.createElement,o={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function l(a){var e=a.preview,n=a.snippet,t=a.previewClassName,s=a.color,l=void 0===s?"gray":s;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",i[l],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}),c("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",o[l],{"bg-gray-800":!o[l]})},c("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":o[l]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}}))))}},rVkB:function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var t=n("wx14"),s=n("Ff2n"),p=n("q1tI"),c=n.n(p),o=n("7ljp"),i=n("YFqc"),l=n.n(i),r=n("tc9R"),d=n("pOT7"),u=n("vRWG"),m=n("I6Nb"),b=n("2b2o"),g=n.n(b),j=n("8C7G"),O=n("wH44"),N=n("cOG/"),k=(c.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:g.a,sort:N.b},meta:{title:"Padding",description:"Utilities for controlling an element's padding.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Add padding to a single side",slug:"add-padding-to-a-single-side",children:[]},{title:"Add horizontal padding",slug:"add-horizontal-padding",children:[]},{title:"Add vertical padding",slug:"add-vertical-padding",children:[]},{title:"Add padding to all sides",slug:"add-padding-to-all-sides",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Padding scale",slug:"padding-scale"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=m.ContentsLayout;function h(a){var e=a.components,n=Object(s.a)(a,["components"]);return Object(o.a)(f,Object(t.a)({},k,n,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"add-padding-to-a-single-side",toc:!0},"Add padding to a single side"),Object(o.a)("p",null,"Control the padding on one side of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},"p{t|r|b|l}-{size}")," utilities."),Object(o.a)("p",null,"For example, ",Object(o.a)("inlineCode",{parentName:"p"},"pt-6")," would add ",Object(o.a)("inlineCode",{parentName:"p"},"1.5rem")," of padding to the top of an element, ",Object(o.a)("inlineCode",{parentName:"p"},"pr-4")," would add ",Object(o.a)("inlineCode",{parentName:"p"},"1rem")," of padding to the right of an element, ",Object(o.a)("inlineCode",{parentName:"p"},"pb-8")," would add ",Object(o.a)("inlineCode",{parentName:"p"},"2rem")," of padding to the bottom of an element, and ",Object(o.a)("inlineCode",{parentName:"p"},"pl-2")," would add ",Object(o.a)("inlineCode",{parentName:"p"},"0.5rem")," of padding to the left of an element.")),Object(o.a)(d.a,{preview:'\n  <div class="flex flex-wrap items-start justify-center text-white font-mono -mx-5">\n    <div class="mx-5 bg-rose-500 bg-stripes bg-stripes-white rounded-md overflow-hidden pt-6">\n      <div class="bg-rose-500 flex items-center justify-center py-3 px-4">\n        pt-6\n      </div>\n    </div>\n    <div class="mx-5 bg-rose-500 bg-stripes bg-stripes-white rounded-md overflow-hidden pr-4 mt-6">\n      <div class="bg-rose-500 flex items-center justify-center py-3 px-4">\n        pr-4\n      </div>\n    </div>\n    <div class="mx-5 bg-rose-500 bg-stripes bg-stripes-white rounded-md overflow-hidden pb-8 mt-6">\n      <div class="bg-rose-500 flex items-center justify-center py-3 px-4">\n        pb-8\n      </div>\n    </div>\n    <div class="mx-5 bg-rose-500 bg-stripes bg-stripes-white rounded-md overflow-hidden pl-2 mt-6">\n      <div class="bg-rose-500 flex items-center justify-center py-3 px-4">\n        pl-2\n      </div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">pt-6</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pt-6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">pr-4</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pr-4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">pb-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pb-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">pl-2</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pl-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"add-horizontal-padding",toc:!0},"Add horizontal padding"),Object(o.a)("p",null,"Control the horizontal padding of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},"px-{size}")," utilities.")),Object(o.a)(d.a,{preview:'\n  <div class="flex justify-center text-white font-mono">\n    <div class="bg-emerald-500 bg-stripes bg-stripes-white rounded-md overflow-hidden px-8">\n      <div class="bg-emerald-500 py-3 px-4">px-8</div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">px-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>px-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"add-vertical-padding",toc:!0},"Add vertical padding"),Object(o.a)("p",null,"Control the vertical padding of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},"py-{size}")," utilities.")),Object(o.a)(d.a,{preview:'\n  <div class="flex justify-center text-white font-mono">\n    <div class="bg-indigo-500 bg-stripes bg-stripes-white rounded-md overflow-hidden py-8">\n      <div class="bg-indigo-500 py-3 px-4">py-8</div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">py-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>py-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"add-padding-to-all-sides",toc:!0},"Add padding to all sides"),Object(o.a)("p",null,"Control the padding on all sides of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},"p-{size}")," utilities.")),Object(o.a)(d.a,{preview:'\n  <div class="flex justify-center text-white font-mono">\n    <div class="bg-fuchsia-500 bg-stripes bg-stripes-white rounded-md overflow-hidden p-8">\n      <div class="bg-fuchsia-500 py-3 px-4">p-8</div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">p-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>p-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia"}),Object(o.a)("div",{className:"prose"},Object(o.a)("hr",null),Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the padding of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing padding utility. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:py-8")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"py-8")," utility at medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:py-8")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)("hr",null),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"padding-scale",toc:!0},"Padding scale"),Object(o.a)("p",null,"By default Tailwind provides 19 fixed padding utilities for each side and axis."),Object(o.a)("p",null,"If you'd like to customize these values for padding, margin, width, and height all at once, use the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.spacing")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     spacing",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       sm",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'8px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       md",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'16px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       lg",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'24px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       xl",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'48px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"To customize only the padding values, use the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.padding")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     padding",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       sm",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'8px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       md",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'16px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       lg",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'24px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       xl",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'48px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(j.a,{plugin:"padding",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(O.a,{plugin:"padding",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=k}},[["+Bc5",0,2,9,1,3,4,5,6,7]]]);