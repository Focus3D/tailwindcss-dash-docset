(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[134],{"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),o=t("Zb5r"),p=t("AOjV"),r=s.a.createElement;function i(a){var{plugin:e,name:t}=a,n=c.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(a,e,t)=>"".concat(e," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(a=>!n.includes(a)).slice(0,2),i="By default, ".concat(n.length?"only ".concat(Object(o.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:i}}),r("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",r("code",null,e)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(o.a)(s)," variants:"),r(p.a,{path:"variants.extend",before:"...",add:{[e]:s}}))}},KM9i:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/object-position",function(){return t("dyt1")}])},dyt1:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return N}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),p=t("7ljp"),r=t("YFqc"),i=t.n(r),l=t("tc9R"),b=t("pOT7"),u=t("vRWG"),m=t("I6Nb"),g=t("mvUL"),d=t.n(g),j=t("8C7G"),O=t("wH44"),h=(o.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:d()},meta:{title:"Object Position",description:"Utilities for controlling how a replaced element's content should be positioned within its container.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Object Positioning",slug:"object-positioning"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),k=m.ContentsLayout;function N(a){var{components:e}=a,t=Object(s.a)(a,["components"]);return Object(p.a)(k,Object(n.a)({},h,t,{components:e,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"object-{side}")," utilities to specify how a replaced element's content should be positioned within its container.")),Object(p.a)(b.a,{preview:'\n  <div class="grid grid-cols-3 gap-4">\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Left Top</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-left-top object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Top</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-top object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Right Top</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-right-top object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Left</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-left object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Center</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-center object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Right</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-right object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Left Bottom</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-left-bottom object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Bottom</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-bottom object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Right Bottom</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-right-bottom object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-left-top</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-top</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-right-top</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-left</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-center</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-right</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-left-bottom</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-bottom</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-right-bottom</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To position an object only at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing object position utility. For example, adding the class ",Object(p.a)("inlineCode",{parentName:"p"},"md:object-top")," to an element would apply the ",Object(p.a)("inlineCode",{parentName:"p"},"object-top")," utility at medium screen sizes and above."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"object-center ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:object-top")," ...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"src"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(l.a,{level:3,id:"object-positioning",toc:!0},"Object Positioning"),Object(p.a)("p",null,"By default, Tailwind provides nine object position utilities. You can change, add, or remove these by editing the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.objectPosition")," section of your Tailwind config."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     objectPosition",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       bottom",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'bottom'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       center",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'center'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       left",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'left'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'left-bottom'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'left bottom'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'left-top'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'left top'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       right",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'right'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'right-bottom'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'right bottom'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'right-top'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'right top'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       top",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'top'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'center-bottom'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'center bottom'"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'center-top'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'center top'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(p.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(p.a)(j.a,{plugin:"objectPosition",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(p.a)(O.a,{plugin:"objectPosition",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=h},mvUL:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("objectPosition",[["object",["objectPosition"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return j}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("iuhU"),p=t("ZMKu"),r=c.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},b={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},u={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(a){var e=Object(s.useRef)(),{0:t,1:c}=Object(s.useState)(!1),{0:o,1:p}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(t){var a=new window.ResizeObserver(n);return n(),a.observe(e.current.contentDocument.body),()=>{a.disconnect()}}function n(){p({height:e.current.contentDocument.body.scrollHeight})}},[t]),r("iframe",Object(n.a)({},a,{ref:e,onLoad:()=>c(!0),style:o}))}function g(a){var{color:e,snippet:t}=a;return r("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",i[e],{"bg-gray-800":!i[e]})},r("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[e]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function d(a){var{preview:e,src:t,snippet:n,previewClassName:s,color:c="gray"}=a;return r("div",{className:"relative overflow-hidden mb-8"},e?r("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):r(m,{src:t,className:Object(o.a)("w-full rounded-t-xl",l[c])}),r(g,{color:c,snippet:n}))}function j(a){var{preview:e,src:t,previewClassName:n,snippet:c,color:i="gray",min:d=!1}=a,j=Object(s.useRef)(),O=Object(p.h)(0),h=Object(s.useRef)(),{0:k,1:N}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var a=new window.ResizeObserver(()=>{O.set(0)});return a.observe(j.current),()=>{a.disconnect()}},[]),r("div",{className:"relative mb-8"},r("div",{ref:j,className:"relative rounded-t-xl ".concat(b[i])},r("div",{className:d?"md:w-88":void 0},r(p.d.div,{className:"relative",style:{marginRight:Object(p.i)(O,a=>-a)}},e?r("div",{className:Object(o.a)("rounded-t-xl",n,l[i],{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):r(m,{src:t,className:Object(o.a)("w-full rounded-t-xl",l[i],{"pointer-events-none":k})}))),r("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(p.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(d?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),N(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(u[i]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(g,{color:i,snippet:c}))}}},[["KM9i",0,2,6,1,3,4,5,7,8,9]]]);