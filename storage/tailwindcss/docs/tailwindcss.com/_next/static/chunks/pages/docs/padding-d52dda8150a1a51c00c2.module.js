(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[141],{"+Bc5":function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/padding",function(){return n("rVkB")}])},"2b2o":function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,theme:e,variants:n}){const p=[(a,e)=>({[(0,s.default)("p",e)]:{padding:""+a}}),(a,e)=>({[(0,s.default)("py",e)]:{"padding-top":""+a,"padding-bottom":""+a},[(0,s.default)("px",e)]:{"padding-left":""+a,"padding-right":""+a}}),(a,e)=>({[(0,s.default)("pt",e)]:{"padding-top":""+a},[(0,s.default)("pr",e)]:{"padding-right":""+a},[(0,s.default)("pb",e)]:{"padding-bottom":""+a},[(0,s.default)("pl",e)]:{"padding-left":""+a}})];a(t.default.flatMap(p,a=>t.default.flatMap(e("padding"),a)),n("padding"))}};var t=p(n("XMip")),s=p(n("dzuX"));function p(a){return a&&a.__esModule?a:{default:a}}},"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var t=n("q1tI"),s=n.n(t),p=n("98BF"),c=n("Zb5r"),i=n("AOjV"),o=s.a.createElement;function l(a){var{plugin:e,name:n}=a,t=p.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(a,e,n)=>"".concat(e," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(a=>!t.includes(a)).slice(0,2),l="By default, ".concat(t.length?"only ".concat(Object(c.a)(t).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return o("div",{className:"prose"},o("p",{dangerouslySetInnerHTML:{__html:l}}),o("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",o("code",null,e)," property in the ",o("code",null,"variants")," section of your"," ",o("code",null,"tailwind.config.js")," file."),o("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(c.a)(s)," variants:"),o(i.a,{path:"variants.extend",before:"...",add:{[e]:s}}))}},C4b9:function(a,e){a.exports=function(a,e){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!==typeof e)throw new Error("expected a function for second argument");for(var n={},t=0;t<a.length;t++){var s=a[t],p=e(s),c=n[p];Array.isArray(c)?n[p].push(s):n[p]=[s]}return n}},"cOG/":function(a,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return c}));var t=n("C4b9"),s=n.n(t);function p(a){return[...a].sort((a,e)=>{var n=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);n=null===n?NaN:parseFloat(n[1]);var t=e.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return t=null===t?NaN:parseFloat(t[1]),isNaN(n)&&isNaN(t)?0:isNaN(n)?1:isNaN(t)?-1:n-t})}function c(a){return Object.values(s()(a,a=>a.match(/^(.*?)[^-]+$/)[1])).flatMap(p)}},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return j}));var t=n("wx14"),s=n("q1tI"),p=n.n(s),c=n("iuhU"),i=n("ZMKu"),o=p.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},d={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},u={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(a){var e=Object(s.useRef)(),{0:n,1:p}=Object(s.useState)(!1),{0:c,1:i}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(n){var a=new window.ResizeObserver(t);return t(),a.observe(e.current.contentDocument.body),()=>{a.disconnect()}}function t(){i({height:e.current.contentDocument.body.scrollHeight})}},[n]),o("iframe",Object(t.a)({},a,{ref:e,onLoad:()=>p(!0),style:c}))}function m(a){var{color:e,snippet:n}=a;return o("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",l[e],{"bg-gray-800":!l[e]})},o("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[e]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function g(a){var{preview:e,src:n,snippet:t,previewClassName:s,color:p="gray"}=a;return o("div",{className:"relative overflow-hidden mb-8"},e?o("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",r[p],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):o(b,{src:n,className:Object(c.a)("w-full rounded-t-xl",r[p])}),o(m,{color:p,snippet:t}))}function j(a){var{preview:e,src:n,previewClassName:t,snippet:p,color:l="gray",min:g=!1}=a,j=Object(s.useRef)(),O=Object(i.h)(0),N=Object(s.useRef)(),{0:f,1:h}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var a=new window.ResizeObserver(()=>{O.set(0)});return a.observe(j.current),()=>{a.disconnect()}},[]),o("div",{className:"relative mb-8"},o("div",{ref:j,className:"relative rounded-t-xl ".concat(d[l])},o("div",{className:g?"md:w-88":void 0},o(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(O,a=>-a)}},e?o("div",{className:Object(c.a)("rounded-t-xl",t,r[l],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):o(b,{src:n,className:Object(c.a)("w-full rounded-t-xl",r[l],{"pointer-events-none":f})}))),o("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},o(i.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(g?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),h(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),h(!1)}},o("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},o("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(u[l]),style:{width:"0.4375rem"}},o("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),o(m,{color:l,snippet:p}))}},rVkB:function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var t=n("wx14"),s=n("Ff2n"),p=n("q1tI"),c=n.n(p),i=n("7ljp"),o=n("YFqc"),l=n.n(o),r=n("tc9R"),d=n("pOT7"),u=n("vRWG"),b=n("I6Nb"),m=n("2b2o"),g=n.n(m),j=n("8C7G"),O=n("wH44"),N=n("cOG/"),f=(c.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:g(),sort:N.b},meta:{title:"Padding",description:"Utilities for controlling an element's padding.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Add padding to a single side",slug:"add-padding-to-a-single-side",children:[]},{title:"Add horizontal padding",slug:"add-horizontal-padding",children:[]},{title:"Add vertical padding",slug:"add-vertical-padding",children:[]},{title:"Add padding to all sides",slug:"add-padding-to-all-sides",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Padding scale",slug:"padding-scale"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=b.ContentsLayout;function v(a){var{components:e}=a,n=Object(s.a)(a,["components"]);return Object(i.a)(h,Object(t.a)({},f,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(r.a,{level:2,id:"add-padding-to-a-single-side",toc:!0},"Add padding to a single side"),Object(i.a)("p",null,"Control the padding on one side of an element using the ",Object(i.a)("inlineCode",{parentName:"p"},"p{t|r|b|l}-{size}")," utilities."),Object(i.a)("p",null,"For example, ",Object(i.a)("inlineCode",{parentName:"p"},"pt-6")," would add ",Object(i.a)("inlineCode",{parentName:"p"},"1.5rem")," of padding to the top of an element, ",Object(i.a)("inlineCode",{parentName:"p"},"pr-4")," would add ",Object(i.a)("inlineCode",{parentName:"p"},"1rem")," of padding to the right of an element, ",Object(i.a)("inlineCode",{parentName:"p"},"pb-8")," would add ",Object(i.a)("inlineCode",{parentName:"p"},"2rem")," of padding to the bottom of an element, and ",Object(i.a)("inlineCode",{parentName:"p"},"pl-2")," would add ",Object(i.a)("inlineCode",{parentName:"p"},"0.5rem")," of padding to the left of an element.")),Object(i.a)(d.a,{preview:'\n  <div class="flex flex-wrap items-start justify-center text-white font-mono -mx-5">\n    <div class="mx-5 bg-rose-500 bg-stripes bg-stripes-white rounded-md overflow-hidden pt-6">\n      <div class="bg-rose-500 flex items-center justify-center py-3 px-4">\n        pt-6\n      </div>\n    </div>\n    <div class="mx-5 bg-rose-500 bg-stripes bg-stripes-white rounded-md overflow-hidden pr-4 mt-6">\n      <div class="bg-rose-500 flex items-center justify-center py-3 px-4">\n        pr-4\n      </div>\n    </div>\n    <div class="mx-5 bg-rose-500 bg-stripes bg-stripes-white rounded-md overflow-hidden pb-8 mt-6">\n      <div class="bg-rose-500 flex items-center justify-center py-3 px-4">\n        pb-8\n      </div>\n    </div>\n    <div class="mx-5 bg-rose-500 bg-stripes bg-stripes-white rounded-md overflow-hidden pl-2 mt-6">\n      <div class="bg-rose-500 flex items-center justify-center py-3 px-4">\n        pl-2\n      </div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">pt-6</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pt-6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">pr-4</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pr-4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">pb-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pb-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">pl-2</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pl-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(r.a,{level:2,id:"add-horizontal-padding",toc:!0},"Add horizontal padding"),Object(i.a)("p",null,"Control the horizontal padding of an element using the ",Object(i.a)("inlineCode",{parentName:"p"},"px-{size}")," utilities.")),Object(i.a)(d.a,{preview:'\n  <div class="flex justify-center text-white font-mono">\n    <div class="bg-emerald-500 bg-stripes bg-stripes-white rounded-md overflow-hidden px-8">\n      <div class="bg-emerald-500 py-3 px-4">px-8</div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">px-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>px-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(r.a,{level:2,id:"add-vertical-padding",toc:!0},"Add vertical padding"),Object(i.a)("p",null,"Control the vertical padding of an element using the ",Object(i.a)("inlineCode",{parentName:"p"},"py-{size}")," utilities.")),Object(i.a)(d.a,{preview:'\n  <div class="flex justify-center text-white font-mono">\n    <div class="bg-indigo-500 bg-stripes bg-stripes-white rounded-md overflow-hidden py-8">\n      <div class="bg-indigo-500 py-3 px-4">py-8</div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">py-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>py-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(r.a,{level:2,id:"add-padding-to-all-sides",toc:!0},"Add padding to all sides"),Object(i.a)("p",null,"Control the padding on all sides of an element using the ",Object(i.a)("inlineCode",{parentName:"p"},"p-{size}")," utilities.")),Object(i.a)(d.a,{preview:'\n  <div class="flex justify-center text-white font-mono">\n    <div class="bg-fuchsia-500 bg-stripes bg-stripes-white rounded-md overflow-hidden p-8">\n      <div class="bg-fuchsia-500 py-3 px-4">p-8</div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">p-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>p-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)("hr",null),Object(i.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the padding of an element at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing padding utility. For example, adding the class ",Object(i.a)("inlineCode",{parentName:"p"},"md:py-8")," to an element would apply the ",Object(i.a)("inlineCode",{parentName:"p"},"py-8")," utility at medium screen sizes and above."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:py-8")," ...",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)("hr",null),Object(i.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(r.a,{level:3,id:"padding-scale",toc:!0},"Padding scale"),Object(i.a)("p",null,"By default, Tailwind provides 19 fixed padding utilities for each side and axis."),Object(i.a)("p",null,"If you'd like to customize these values for padding, margin, width, and height all at once, use the ",Object(i.a)("inlineCode",{parentName:"p"},"theme.spacing")," section of your ",Object(i.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     spacing",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       sm",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'8px'"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       md",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'16px'"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       lg",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'24px'"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       xl",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'48px'"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(i.a)("p",null,"To customize only the padding values, use the ",Object(i.a)("inlineCode",{parentName:"p"},"theme.padding")," section of your ",Object(i.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     padding",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       sm",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'8px'"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       md",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'16px'"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       lg",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'24px'"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       xl",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'48px'"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(i.a)("p",null,"Learn more about customizing the default theme in the ",Object(i.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(i.a)("a",null,"theme customization documentation")),"."),Object(i.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(j.a,{plugin:"padding",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(O.a,{plugin:"padding",mdxType:"Disabling"}))}v.isMDXComponent=!0,v.layoutProps=f}},[["+Bc5",0,2,6,10,1,3,4,5,7,8]]]);