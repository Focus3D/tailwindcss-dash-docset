(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[149],{"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),p=t("Zb5r"),o=t("AOjV"),l=s.a.createElement;function i(a){var{plugin:e,name:t}=a,n=c.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(a,e,t)=>"".concat(e," ").concat(t.toLowerCase()));var i=["responsive","hover","focus","active","group-hover"].filter(a=>!n.includes(a)).slice(0,2);return l(s.a.Fragment,null,l("p",null,"By default, ",n.length?"only ".concat(Object(p.a)(n)):"no"," variants are generated for ",t," utilities."),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,e)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(p.a)(i)," variants:"),l(o.a,{path:"variants",before:"// ...",remove:{[e]:n},add:{[e]:[...n,...i]}}))}},"91DB":function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-opacity",function(){return t("nfj5")}])},Hj73:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({target:a,...e}){"ie11"!==a("textOpacity")&&(0,s.default)("textOpacity",[["text-opacity",["--text-opacity"]]])({target:a,...e})}};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},UyA5:function(a,e,t){"use strict";t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return o}));var n=t("q1tI"),s=t.n(n).a.createElement;function c(a){var{children:e}=a;return s("p",{className:"flex items-start mt-8 mb-0"},s("svg",{className:"h-6 w-6 mr-2 flex-shrink-0",viewBox:"0 0 24 24"},s("circle",{className:"text-green-200 fill-current",cx:"12",cy:"12",r:"10"}),s("path",{className:"text-green-600 fill-current",d:"M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"})),s("strong",{className:"text-base font-semibold text-gray-800"},e))}function p(a){var{children:e}=a;return s("p",{className:"flex items-start mt-8 mb-0"},s("svg",{className:"h-6 w-6 mr-2 flex-shrink-0",viewBox:"0 0 24 24"},s("circle",{cx:"12",cy:"12",r:"10",fill:"#fed7d7"}),s("path",{fill:"#f56565",d:"M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"})),s("strong",{className:"text-base font-semibold text-gray-800"},e))}function o(a){var{children:e}=a;return s("div",{className:"text-sm bg-blue-100 text-blue-700 font-semi-bold px-4 py-2 mb-4 rounded"},s("div",{className:"flex items-center"},s("div",{className:"mr-2"},s("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"block text-blue-400 h-5 w-5"},s("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.432 15C14.387 9.893 12 8.547 12 6V3h.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H8v3c0 2.547-2.387 3.893-4.432 9-.651 1.625-2.323 4 6.432 4s7.083-2.375 6.432-4zm-1.617 1.751c-.702.21-2.099.449-4.815.449s-4.113-.239-4.815-.449c-.249-.074-.346-.363-.258-.628.22-.67.635-1.828 1.411-3.121 1.896-3.159 3.863.497 5.5.497s1.188-1.561 1.824-.497a15.353 15.353 0 0 1 1.411 3.121c.088.265-.009.553-.258.628z"}))),s("div",null,s("p",{className:"font-semibold"},e))))}},nfj5:function(a,e,t){"use strict";t.r(e),t.d(e,"Layout",(function(){return g})),t.d(e,"classes",(function(){return f})),t.d(e,"meta",(function(){return x})),t.d(e,"tableOfContents",(function(){return h})),t.d(e,"default",(function(){return w}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),p=t.n(c),o=t("7ljp"),l=t("YFqc"),i=t.n(l),r=t("tc9R"),u=t("pOT7"),m=t("vRWG"),b=t("I6Nb"),j=t("Hj73"),O=t.n(j),N=t("8C7G"),d=t("wH44"),k=t("UyA5"),g=(p.a.createElement,m.DocumentationLayout),f={plugin:O()},x={title:"Text Opacity",description:"Utilities for controlling the opacity of an element's text color.",featureVersion:"v1.4.0+"},h=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],v={Layout:g,classes:f,meta:x,tableOfContents:h},y=b.ContentsLayout;function w(a){var{components:e}=a,t=Object(s.a)(a,["components"]);return Object(o.a)(y,Object(n.a)({},v,t,{components:e,mdxType:"MDXLayout"}),Object(o.a)(r.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Control the opacity of an element's text color using the ",Object(o.a)("inlineCode",{parentName:"p"},".text-opacity-{amount}")," utilities."),Object(o.a)(u.a,{preview:'\n  <div class="space-y-4">\n    <p class="font-semibold text-xl text-purple-700 text-opacity-100">The quick brown fox jumped over the lazy dog.</p>\n    <p class="font-semibold text-xl text-purple-700 text-opacity-75">The quick brown fox jumped over the lazy dog.</p>\n    <p class="font-semibold text-xl text-purple-700 text-opacity-50">The quick brown fox jumped over the lazy dog.</p>\n    <p class="font-semibold text-xl text-purple-700 text-opacity-25">The quick brown fox jumped over the lazy dog.</p>\n    <p class="font-semibold text-xl text-purple-700 text-opacity-0">The quick brown fox jumped over the lazy dog.</p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-purple-700 text-opacity-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-purple-700 text-opacity-75<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-purple-700 text-opacity-50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-purple-700 text-opacity-25<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-purple-700 text-opacity-0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)("p",null,"Note that because these utilities are implemented using CSS custom properties, a ",Object(o.a)("inlineCode",{parentName:"p"},".text-{color}")," utility must be present on the same element for them to work."),Object(o.a)(k.a,{mdxType:"TipBad"},"Don't try to use text opacity utilities on an inherited text color"),Object(o.a)("pre",{className:"language-html"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"text-black",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"text-opacity-50",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"...",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(o.a)(k.c,{mdxType:"TipGood"},"Do make sure to add a text color utility to the same element explicitly"),Object(o.a)("pre",{className:"language-html"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"text-black",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"text-black text-opacity-50",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"...",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control an element's text color opacity at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing text color opacity utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:text-opacity-50")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"text-opacity-50")," utility at only medium screen sizes and above."),Object(o.a)("pre",{className:"language-html"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"text-blue-500 text-opacity-75 md:text-opacity-50",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)("p",null,"To customize the opacity values for all opacity-related utilities at once, use the ",Object(o.a)("inlineCode",{parentName:"p"},"opacity")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," theme configuration:"),Object(o.a)("pre",{className:"language-diff"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       opacity: {\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '10': '0.1',\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '20': '0.2',\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '95': '0.95',\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(o.a)("p",null,"If you want to customize only the text opacity utilities, use the ",Object(o.a)("inlineCode",{parentName:"p"},"textOpacity")," section:"),Object(o.a)("pre",{className:"language-diff"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       textOpacity: {\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '10': '0.1',\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '20': '0.2',\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '95': '0.95',\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(i.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(r.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(o.a)(N.a,{plugin:"textOpacity",mdxType:"Variants"}),Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(o.a)(d.a,{plugin:"textOpacity",mdxType:"Disabling"}))}w.isMDXComponent=!0,w.layoutProps=v}},[["91DB",0,2,1,3,4,7]]]);