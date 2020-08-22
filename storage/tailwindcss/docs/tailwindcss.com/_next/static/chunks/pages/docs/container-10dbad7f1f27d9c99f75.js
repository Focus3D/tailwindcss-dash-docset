_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[77],{DMeq:function(e,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return l})),t.d(a,"screens",(function(){return j})),t.d(a,"classes",(function(){return O})),t.d(a,"meta",(function(){return N})),t.d(a,"tableOfContents",(function(){return u})),t.d(a,"default",(function(){return k}));var n=t("wx14"),c=t("Ff2n"),s=t("q1tI"),o=t.n(s),p=t("7ljp"),r=(t("YFqc"),t("tc9R")),m=t("vRWG"),b=t("I6Nb"),i=t("98BF"),l=(o.a.createElement,m.DocumentationLayout),j=i.defaultConfig.theme.screens,O=Object(p.a)("table",{className:"w-full text-left table-collapse"},Object(p.a)("colgroup",null,Object(p.a)("col",{className:"w-1/4"}),Object(p.a)("col",{className:"w-1/4"}),Object(p.a)("col",{className:"w-1/2"})),Object(p.a)("thead",null,Object(p.a)("tr",null,Object(p.a)("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100"},"Class"),Object(p.a)("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100"},"Breakpoint"),Object(p.a)("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100"},"Properties"))),Object(p.a)("tbody",{className:"align-baseline"},Object(p.a)("tr",null,Object(p.a)("td",{rowSpan:5,className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},".container"),Object(p.a)("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-gray-600"},Object(p.a)("span",{className:"font-sans italic font-sans"},"None")),Object(p.a)("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-blue-700"},"width: 100%;")),Object.keys(j).map((function(e){return Object(p.a)("tr",{key:e},Object(p.a)("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-gray-700"},e," ",Object(p.a)("span",{className:"text-gray-600 font-sans italic"},"(",j[e],")")),Object(p.a)("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-blue-700"},"max-width: ",j[e],";"))})))),N={title:"Container",description:"A component for fixing an element's width to the current breakpoint."},u=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive variants",slug:"responsive-variants",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Centering by default",slug:"centering-by-default"},{title:"Horizontal padding",slug:"horizontal-padding"},{title:"Disabling responsive variants",slug:"disabling-responsive-variants"},{title:"Disabling entirely",slug:"disabling-entirely"}]}],d={Layout:l,screens:j,classes:O,meta:N,tableOfContents:u},g=b.ContentsLayout;function k(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(p.a)(g,Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(p.a)(r.a,{level:2,id:"usage",toc:!0},"Usage"),Object(p.a)("p",null,"The ",Object(p.a)("inlineCode",{parentName:"p"},".container")," class sets the ",Object(p.a)("inlineCode",{parentName:"p"},"max-width")," of an element to match the ",Object(p.a)("inlineCode",{parentName:"p"},"min-width")," of the current breakpoint. This is useful if you'd prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport."),Object(p.a)("p",null,"Note that unlike containers you might have used in other frameworks, ",Object(p.a)("strong",{parentName:"p"},"Tailwind's container does not center itself automatically and does not have any built-in horizontal padding.")),Object(p.a)("p",null,"To center a container, use the ",Object(p.a)("inlineCode",{parentName:"p"},".mx-auto")," utility:"),Object(p.a)("pre",{className:"language-html"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"container mx-auto",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(p.a)("p",null,"To add horizontal padding, use the ",Object(p.a)("inlineCode",{parentName:"p"},".px-{size}")," utilities:"),Object(p.a)("pre",{className:"language-html"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"container mx-auto px-4",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(p.a)("p",null,"If you'd like to center your containers by default or include default horizontal padding, see the ",Object(p.a)("a",Object(n.a)({parentName:"p"},{href:"#customizing"}),"customization options")," below."),Object(p.a)(r.a,{level:2,id:"responsive-variants",toc:!0},"Responsive variants"),Object(p.a)("p",null,"The ",Object(p.a)("inlineCode",{parentName:"p"},"container")," class also includes responsive variants like ",Object(p.a)("inlineCode",{parentName:"p"},"md:container")," by default that allow you to make something behave like a container at only a certain breakpoint and up:"),Object(p.a)("pre",{className:"language-html"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- Full-width fluid until the `lg` breakpoint, then lock to container --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"lg:container lg:mx-auto",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(p.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(r.a,{level:3,id:"centering-by-default",toc:!0},"Centering by default"),Object(p.a)("p",null,"To center containers by default, set the ",Object(p.a)("inlineCode",{parentName:"p"},"center")," option to ",Object(p.a)("inlineCode",{parentName:"p"},"true")," in the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.container")," section of your config file:"),Object(p.a)("pre",{className:"language-js"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    container",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      center",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"true"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"))),Object(p.a)(r.a,{level:3,id:"horizontal-padding",toc:!0},"Horizontal padding"),Object(p.a)("p",null,"To add horizontal padding by default, specify the amount of padding you'd like using the ",Object(p.a)("inlineCode",{parentName:"p"},"padding")," option in the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.container")," section of your config file:"),Object(p.a)("pre",{className:"language-js"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    container",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      padding",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'2rem'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"))),Object(p.a)("p",null,"If you want to specify a different padding amount for each breakpoint, use an object to provide a ",Object(p.a)("inlineCode",{parentName:"p"},"default")," value and any breakpoint-specific overrides:"),Object(p.a)("pre",{className:"language-js"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    container",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      padding",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"default"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'1rem'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        sm",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'2rem'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        lg",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'4rem'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        xl",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'5rem'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"))),Object(p.a)(r.a,{level:3,id:"disabling-responsive-variants",toc:!0},"Disabling responsive variants"),Object(p.a)("p",null,"If you'd like to disable the responsive variants, you can do so using by setting ",Object(p.a)("inlineCode",{parentName:"p"},"container")," to an empty array in the ",Object(p.a)("inlineCode",{parentName:"p"},"variants")," section of your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(p.a)("pre",{className:"language-diff"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   variants: {\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     // ...\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     container: [],\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(p.a)(r.a,{level:3,id:"disabling-entirely",toc:!0},"Disabling entirely"),Object(p.a)("p",null,"If you don't plan to use the ",Object(p.a)("inlineCode",{parentName:"p"},".container")," class in your project, you can disable it entirely by setting the ",Object(p.a)("inlineCode",{parentName:"p"},"container")," property to ",Object(p.a)("inlineCode",{parentName:"p"},"false")," in the ",Object(p.a)("inlineCode",{parentName:"p"},"corePlugins")," section of your config file:"),Object(p.a)("pre",{className:"language-diff"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   corePlugins: {\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     // ...\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     container: false,\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))))}k.isMDXComponent=!0,k.layoutProps=d},iR8S:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/container",function(){return t("DMeq")}])}},[["iR8S",0,2,1,3,4]]]);