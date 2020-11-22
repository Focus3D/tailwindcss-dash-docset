(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[75],{"8C7G":function(a,n,e){"use strict";e.d(n,"a",(function(){return i}));var t=e("q1tI"),s=e.n(t),o=e("98BF"),c=e("Zb5r"),p=e("AOjV"),l=s.a.createElement;function i(a){var{plugin:n,name:e}=a,t=o.defaultConfig.variants[n]||["responsive"];e=e||n.replace(/([a-z])([A-Z])/g,(a,n,e)=>"".concat(n," ").concat(e.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(a=>!t.includes(a)).slice(0,2),i="By default, ".concat(t.length?"only ".concat(Object(c.a)(t).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(e," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:i}}),l("p",null,"You can control which variants are generated for the ",e," utilities by modifying the"," ",l("code",null,n)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(c.a)(s)," variants:"),l(p.a,{path:"variants.extend",before:"...",add:{[n]:s}}))}},ABV8:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:a,variants:n}){a({".flex-row":{"flex-direction":"row"},".flex-row-reverse":{"flex-direction":"row-reverse"},".flex-col":{"flex-direction":"column"},".flex-col-reverse":{"flex-direction":"column-reverse"}},n("flexDirection"))}}},GuPV:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/flex-direction",function(){return e("sdhg")}])},Zb5r:function(a,n,e){"use strict";function t(a){return a.reduce((n,e,t)=>0===t?e:t===a.length-1?"".concat(n," and ").concat(e):"".concat(n,", ").concat(e),"")}e.d(n,"a",(function(){return t}))},pOT7:function(a,n,e){"use strict";e.d(n,"a",(function(){return i}));var t=e("q1tI"),s=e.n(t),o=e("iuhU"),c=s.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function i(a){var{preview:n,snippet:e,previewClassName:t,color:s="gray"}=a;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[s],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:n}}),c("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",p[s],{"bg-gray-800":!p[s]})},c("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[s]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:e}}))))}},sdhg:function(a,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return x}));var t=e("wx14"),s=e("Ff2n"),o=e("q1tI"),c=e.n(o),p=e("7ljp"),l=e("YFqc"),i=e.n(l),r=e("tc9R"),u=e("pOT7"),d=e("vRWG"),g=e("I6Nb"),b=e("ABV8"),m=e.n(b),k=e("8C7G"),v=e("wH44"),f=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m()},meta:{title:"Flex Direction",description:"Utilities for controlling the direction of flex items.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Row",slug:"row",children:[]},{title:"Row reversed",slug:"row-reversed",children:[]},{title:"Column",slug:"column",children:[]},{title:"Column reversed",slug:"column-reversed",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=g.ContentsLayout;function x(a){var{components:n}=a,e=Object(s.a)(a,["components"]);return Object(p.a)(h,Object(t.a)({},f,e,{components:n,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"row",toc:!0},"Row"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"flex-row")," to position flex items horizontally in the same direction as text:")),Object(p.a)(u.a,{preview:'\n  <div class="flex flex-row space-x-4">\n    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-row</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"amber"}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"row-reversed",toc:!0},"Row reversed"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"flex-row-reverse")," to position flex items horizontally in the opposite direction:")),Object(p.a)(u.a,{preview:'\n  <div class="flex flex-row-reverse space-x-reverse space-x-4">\n    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-row-reverse</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"lightBlue"}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"column",toc:!0},"Column"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"flex-col")," to position flex items vertically:")),Object(p.a)(u.a,{preview:'\n  <div class="flex flex-col space-y-4">\n    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-col</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"emerald"}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"column-reversed",toc:!0},"Column reversed"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"flex-col-reverse")," to position flex items vertically in the opposite direction:")),Object(p.a)(u.a,{preview:'\n  <div class="flex flex-col-reverse space-y-reverse space-y-4">\n    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-col-reverse</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"rose"}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To apply a flex direction utility only at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to the existing class name. For example, adding the class ",Object(p.a)("inlineCode",{parentName:"p"},"md:flex-row")," to an element would apply the ",Object(p.a)("inlineCode",{parentName:"p"},"flex-row")," utility at medium screen sizes and above."),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),"  ",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"flex flex-col ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:flex-row")," ...",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n  ",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(p.a)(k.a,{plugin:"flexDirection",name:"flex-direction",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(p.a)(v.a,{plugin:"flexDirection",name:"flex-direction",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=f},wH44:function(a,n,e){"use strict";e.d(n,"a",(function(){return d}));var t=e("rePB"),s=e("q1tI"),o=e.n(s),c=e("AOjV"),p=e("AI3G"),l=e("Zb5r"),i=o.a.createElement;function r(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function u(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){Object(t.a)(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function d(a){var{plugin:n,name:e}=a,t=Object(p.a)(n);return e=e||n.replace(/([a-z])([A-Z])/g,(a,n,e)=>"".concat(n," ").concat(e.toLowerCase())),i("div",{className:"prose"},i("p",null,"If you don't plan to use the ",e," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(t.map(a=>"<code>".concat(a,"</code>")))}})," ",t.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(c.a,{path:"corePlugins",before:"...",add:t.reduce((a,n)=>u(u({},a),{},{[n]:!1}),{})}))}}},[["GuPV",0,2,1,3,4,5,6]]]);