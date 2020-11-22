_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{"8C7G":function(n,a,s){"use strict";s.d(a,"a",(function(){return u}));var t=s("rePB"),e=s("q1tI"),p=s.n(e),o=s("98BF"),c=s("Zb5r"),l=s("AOjV"),r=p.a.createElement;function u(n){var a=n.plugin,s=n.name,e=o.defaultConfig.variants[a]||["responsive"];s=s||a.replace(/([a-z])([A-Z])/g,(function(n,a,s){return"".concat(a," ").concat(s.toLowerCase())}));var p=["responsive","hover","focus","active","group-hover"].filter((function(n){return!e.includes(n)})).slice(0,2),u="By default, ".concat(e.length?"only ".concat(Object(c.a)(e).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(s," utilities.");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:u}}),r("p",null,"You can control which variants are generated for the ",s," utilities by modifying the"," ",r("code",null,a)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",e.length>0?"also ":"","generate"," ",Object(c.a)(p)," variants:"),r(l.a,{path:"variants.extend",before:"...",add:Object(t.a)({},a,p)}))}},Vhtw:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return h}));var t=s("wx14"),e=s("Ff2n"),p=s("q1tI"),o=s.n(p),c=s("7ljp"),l=(s("YFqc"),s("tc9R")),r=s("pOT7"),u=s("vRWG"),i=s("I6Nb"),k=s("sEq3"),d=s.n(k),g=s("8C7G"),b=s("wH44"),m=(o.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:d.a},meta:{title:"Border Collapse",description:"Utilities for controlling whether table borders should collapse or be separated."},tableOfContents:[{title:"Separate",slug:"separate",children:[]},{title:"Collapse",slug:"collapse",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=i.ContentsLayout;function h(n){var a=n.components,s=Object(e.a)(n,["components"]);return Object(c.a)(f,Object(t.a)({},m,s,{components:a,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"separate",toc:!0},"Separate"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"border-separate")," to force each cell to display its own separate borders.")),Object(c.a)(r.a,{preview:'\n  <table class="border-separate w-full border-2 border-emerald-800">\n    <thead class="bg-emerald-200">\n      <tr>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">State</th>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">City</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indiana</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indianapolis</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Ohio</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Columbus</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Michigan</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Detroit</td>\n      </tr>\n    </tbody>\n  </table>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-separate</span> border border-green-800 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>State<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>City<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indiana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indianapolis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Ohio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Columbus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Detroit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"collapse",toc:!0},"Collapse"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"border-collapse")," to combine adjacent cell borders into a single border when possible. Note that this includes collapsing borders on the top-level ",Object(c.a)("inlineCode",{parentName:"p"},"<table>")," tag.")),Object(c.a)(r.a,{preview:'\n  <table class="border-collapse w-full border-2 border-emerald-800">\n    <thead class="bg-emerald-200">\n      <tr>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">State</th>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">City</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indiana</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indianapolis</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Ohio</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Columbus</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Michigan</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Detroit</td>\n      </tr>\n    </tbody>\n  </table>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-collapse</span> border border-green-800 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>State<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>City<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indiana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indianapolis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Ohio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Columbus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Detroit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(c.a)(g.a,{plugin:"borderCollapse",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(c.a)(b.a,{plugin:"borderCollapse",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=m},Zb5r:function(n,a,s){"use strict";function t(n){return n.reduce((function(a,s,t){return 0===t?s:t===n.length-1?"".concat(a," and ").concat(s):"".concat(a,", ").concat(s)}),"")}s.d(a,"a",(function(){return t}))},dam5:function(n,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-collapse",function(){return s("Vhtw")}])},pOT7:function(n,a,s){"use strict";s.d(a,"a",(function(){return r}));var t=s("q1tI"),e=s.n(t),p=s("iuhU"),o=e.a.createElement,c={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function r(n){var a=n.preview,s=n.snippet,t=n.previewClassName,e=n.color,r=void 0===e?"gray":e;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",l[r],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:a}}),o("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",c[r],{"bg-gray-800":!c[r]})},o("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":c[r]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:s}}))))}},sEq3:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:n,variants:a}){n({".border-collapse":{"border-collapse":"collapse"},".border-separate":{"border-collapse":"separate"}},a("borderCollapse"))}}},wH44:function(n,a,s){"use strict";s.d(a,"a",(function(){return k}));var t=s("rePB"),e=s("q1tI"),p=s.n(e),o=s("AOjV"),c=s("AI3G"),l=s("Zb5r"),r=p.a.createElement;function u(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function i(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?u(Object(s),!0).forEach((function(a){Object(t.a)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}function k(n){var a=n.plugin,s=n.name,e=Object(c.a)(a);return s=s||a.replace(/([a-z])([A-Z])/g,(function(n,a,s){return"".concat(a," ").concat(s.toLowerCase())})),r("div",{className:"prose"},r("p",null,"If you don't plan to use the ",s," utilities in your project, you can disable them entirely by setting the"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(e.map((function(n){return"<code>".concat(n,"</code>")})))}})," ",e.length>1?"properties":"property"," to ",r("code",null,"false")," in the"," ",r("code",null,"corePlugins")," section of your config file:"),r(o.a,{path:"corePlugins",before:"...",add:e.reduce((function(n,a){return i(i({},n),{},Object(t.a)({},a,!1))}),{})}))}}},[["dam5",0,2,1,3,4,5,6]]]);