(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[149],{"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return r}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),o=t("Zb5r"),p=t("AOjV"),i=s.a.createElement;function r(a){var{plugin:e,name:t}=a,n=c.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(a,e,t)=>"".concat(e," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(a=>!n.includes(a)).slice(0,2),r="By default, ".concat(n.length?"only ".concat(Object(o.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:r}}),i("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(o.a)(s)," variants:"),i(p.a,{path:"variants.extend",before:"...",add:{[e]:s}}))}},"99vz":function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/skew",function(){return t("wMG5")}])},"9lJ/":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("skew",[["skew-x",["--tw-skew-x"]],["skew-y",["--tw-skew-y"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return r}));var n=t("q1tI"),s=t.n(n),c=t("iuhU"),o=s.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function r(a){var{preview:e,snippet:t,previewClassName:n,color:s="gray"}=a;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",i[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}),o("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",p[s],{"bg-gray-800":!p[s]})},o("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[s]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}}))))}},wMG5:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return k}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),p=t("7ljp"),i=t("YFqc"),r=t.n(i),l=t("tc9R"),m=t("pOT7"),u=t("vRWG"),b=t("I6Nb"),d=t("9lJ/"),g=t.n(d),j=t("8C7G"),O=t("wH44"),f=(o.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:g()},meta:{title:"Skew",description:"Utilities for skewing elements with transform."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Skew scale",slug:"skew-scale"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),N=b.ContentsLayout;function k(a){var{components:e}=a,t=Object(s.a)(a,["components"]);return Object(p.a)(N,Object(n.a)({},f,t,{components:e,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(p.a)("p",null,"Skew an element by first enabling transforms with the ",Object(p.a)("inlineCode",{parentName:"p"},"transform")," utility, then specifying the skew angle using the ",Object(p.a)("inlineCode",{parentName:"p"},"skew-x-{amount}")," and ",Object(p.a)("inlineCode",{parentName:"p"},"skew-y-{amount}")," utilities.")),Object(p.a)(m.a,{preview:'\n  <div class="flex flex-col justify-around space-y-12 md:flex-row md:space-y-0 md:space-x-12">\n    <div class="w-16 h-16 bg-indigo-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 skew-y-0 transform" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-indigo-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 skew-y-3 transform" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-indigo-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 skew-y-6 transform" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-indigo-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 skew-y-12 transform" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform skew-y-0 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform skew-y-3 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform skew-y-6 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform skew-y-12 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo"}),Object(p.a)("div",{className:"prose"},Object(p.a)("p",null,"Note that because Tailwind implements transforms using ",Object(p.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"}),"CSS custom properties"),", ",Object(p.a)("strong",{parentName:"p"},"the transform utilities are not supported in older browsers like IE11"),". If you need transforms for your project and need to support older browsers, ",Object(p.a)(r.a,{href:"/docs/adding-new-utilities",passHref:!0},Object(p.a)("a",null,"add your own utilities"))," or other custom CSS."),Object(p.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the skew of an element at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing skew utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:skew-6")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"skew-6")," utility at only medium screen sizes and above."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"transform ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md-skew-6")," ...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(l.a,{level:3,id:"skew-scale",toc:!0},"Skew scale"),Object(p.a)("p",null,"By default Tailwind provides seven general purpose skew utilities. You change, add, or remove these by customizing the ",Object(p.a)("inlineCode",{parentName:"p"},"skew")," section of your Tailwind theme config."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       skew",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'25'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'25deg'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'60'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'60deg'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(p.a)("p",null,"Learn more about customizing the default theme in the ",Object(p.a)(r.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(p.a)("a",null,"theme customization documentation")),"."),Object(p.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(p.a)(j.a,{plugin:"skew",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(p.a)(O.a,{plugin:"skew",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=f}},[["99vz",0,2,1,3,4,5,6,7,8]]]);