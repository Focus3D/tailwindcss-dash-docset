(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[135],{HFy2:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/release-notes",function(){return t("yUed")}])},HZVv:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),l=t("98BF");var i=t("Nr79"),o=t.n(i),r=t("iuhU"),p=c.a.createElement;function b(e){var{name:a,value:t}=e;return p("div",{className:"flex items-center mt-5"},p("div",{className:"h-12 w-12 rounded-lg shadow-inner",style:{backgroundColor:t}}),p("div",{className:"ml-2 text-gray-800 text-xs leading-none pl-1"},p("div",{className:"font-semibold"},a),p("div",{className:"mt-1 font-normal opacity-75"},t.replace(/^#[a-f0-9]+/gi,e=>e.toUpperCase()))))}function m(e){var{colors:a}=e;return p("div",{className:"flex flex-wrap -mx-2 mt-0"},a.map((e,a)=>{var t=Array.isArray(e)?e[0]:function(e){return e.replace(/(?:^|-)([a-z])/gi,(e,a)=>" ".concat(a.toUpperCase())).trim()}(e),s=Array.isArray(e)?e[1]:e,c="string"===typeof s?[100,200,300,400,500,600,700,800,900].map(e=>({name:e,value:o()(l.defaultConfig,["theme","colors",s,e])})):Object.keys(s).map(e=>({name:e,value:s[e]}));return c.length<3?p("div",{key:a,className:Object(r.a)("px-2 w-full relative",{"mt-4":0!==a})},p("h3",{className:"markdown no-toc mb-4 mt-8"},t),p("div",{className:"-mx-2 -mt-5 flex flex-wrap"},c.map((e,a)=>p("div",{key:a,className:"w-1/2 md:w-1/3 px-2"},p(b,e))))):p("div",{key:a,className:Object(r.a)("w-1/2 px-2 md:w-full relative",{"mt-4":0!==a})},p("h3",{className:"markdown no-toc mb-4 mt-8"},t),p("div",{className:"md:-mx-2 md:-mt-5 md:flex md:flex-wrap"},function(e,a){for(var t=[],n=0;n<e.length;n+=a)t.push(e.slice(n,n+a));return t}(c,3).map((e,a)=>p("div",{key:a,className:"md:w-1/3 md:px-2"},e.map((e,a)=>p(b,Object(n.a)({key:a},e)))))))}))}},yUed:function(e,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return j})),t.d(a,"meta",(function(){return O})),t.d(a,"tableOfContents",(function(){return d})),t.d(a,"default",(function(){return g}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),l=t.n(c),i=t("7ljp"),o=t("YFqc"),r=t.n(o),p=t("tc9R"),b=t("vRWG"),m=t("I6Nb"),u=t("HZVv"),j=(l.a.createElement,b.DocumentationLayout),O={title:"Release Notes",description:"What's new in the latest version of Tailwind CSS."},d=[{title:"Tailwind CSS v1.7",slug:"tailwind-css-v1-7",children:[{title:"New features",slug:"new-features"},{title:"Deprecations",slug:"deprecations"},{title:"Experimental features",slug:"experimental-features"}]},{title:"Tailwind CSS v1.6",slug:"tailwind-css-v1-6",children:[]},{title:"Tailwind CSS v1.5",slug:"tailwind-css-v1-5",children:[]},{title:"Tailwind CSS v1.4",slug:"tailwind-css-v1-4",children:[]},{title:"Tailwind CSS v1.3",slug:"tailwind-css-v1-3",children:[]},{title:"Tailwind CSS v1.2",slug:"tailwind-css-v1-2",children:[]},{title:"Tailwind CSS v1.1",slug:"tailwind-css-v1-1",children:[]},{title:"Tailwind CSS v1.0",slug:"tailwind-css-v1-0",children:[{title:"Revamped config file format",slug:"revamped-config-file-format"},{title:"Redesigned color palette",slug:"redesigned-color-palette"},{title:"Updated breakpoints",slug:"updated-breakpoints"},{title:"New top/right/bottom/left utilities",slug:"new-top-right-bottom-left-utilities"},{title:"New order utilities",slug:"new-order-utilities"}]}],N={Layout:j,meta:O,tableOfContents:d},h=m.ContentsLayout;function g(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(i.a)(h,Object(n.a)({},N,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)(p.a,{level:2,id:"tailwind-css-v1-7",toc:!0},"Tailwind CSS v1.7"),Object(i.a)("div",{className:"-mt-4 text-gray-600"},"Aug 18, 2020"),Object(i.a)("p",null,"Tailwind CSS v1.7 is now available with gradients, background-clip support, a new experimental version of ",Object(i.a)("inlineCode",{parentName:"p"},"@apply")," that works with any class (!), and tons more:"),Object(i.a)(p.a,{level:3,id:"new-features",toc:!0},"New features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#gradients"}),"Gradients")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#new-background-clip-utilities"}),"New background-clip utilities")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#new-gap-utility-aliases"}),"New gap utility aliases")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#new-contents-display-utility"}),"New ",Object(i.a)("inlineCode",{parentName:"a"},"contents")," display utility")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#default-letter-spacing-per-font-size"}),"Default letter-spacing per font-size")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#divide-border-styles"}),"Divide border styles")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#access-entire-config-object-from-plugins"}),"Access entire config object from plugins")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#define-colors-as-closures"}),"Define colors as closures"))),Object(i.a)(p.a,{level:3,id:"deprecations",toc:!0},"Deprecations"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#deprecated-gap-utilities"}),"Deprecated gap utilities"))),Object(i.a)(p.a,{level:3,id:"experimental-features",toc:!0},"Experimental features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#use-apply-with-variants-and-other-complex-classes"}),"Use ",Object(i.a)("inlineCode",{parentName:"a"},"@apply")," with variants and other complex classes")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#new-color-palette"}),"New color palette")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#extended-spacing-scale"}),"Extended spacing scale")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#default-line-heights-per-font-size-by-default"}),"Default line-heights per font-size by default")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0#extended-font-size-scale"}),"Extended font size scale"))),Object(i.a)("p",null,"For all the details, ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.7.0"}),"check out the complete release notes on GitHub"),"."),Object(i.a)("hr",null),Object(i.a)(p.a,{level:2,id:"tailwind-css-v1-6",toc:!0},"Tailwind CSS v1.6"),Object(i.a)("div",{className:"-mt-4 text-gray-600"},"July 28, 2020"),Object(i.a)("p",null,"Tailwind CSS v1.6 is now available with animation support (!) and a bunch of other neat stuff:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.6.0#animation-support"}),"Animation support")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.6.0#new-prefers-reduced-motion-variants"}),"New prefers-reduced-motion variants")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.6.0#new-overscroll-behavior-utilities"}),"New overscroll-behavior utilities")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.6.0#generate-your-css-without-an-input-file"}),"Generate your CSS without an input file"))),Object(i.a)("p",null,"For all the details, ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.6.0"}),"check out the complete release notes on GitHub"),"."),Object(i.a)("hr",null),Object(i.a)(p.a,{level:2,id:"tailwind-css-v1-5",toc:!0},"Tailwind CSS v1.5"),Object(i.a)("div",{className:"-mt-4 text-gray-600"},"July 15, 2020"),Object(i.a)("p",null,"Tailwind CSS v1.5 is now available with a handful of useful new features:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases#component-variants-support"}),"Component variants support")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases#responsive-container-variants"}),"Responsive container variants")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases#new-focus-visible-variant"}),"New focus-visible variant")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases#new-checked-variant"}),"New checked variant"))),Object(i.a)("p",null,"For the full list of changes, ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.5.0"}),"check out the complete release notes on GitHub"),"."),Object(i.a)("hr",null),Object(i.a)(p.a,{level:2,id:"tailwind-css-v1-4",toc:!0},"Tailwind CSS v1.4"),Object(i.a)("div",{className:"-mt-4 text-gray-600"},"Apr 29, 2020"),Object(i.a)("p",null,"Tailwind CSS v1.4 is out now with a couple of major new features:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{href:"/docs/background-opacity",passHref:!0},Object(i.a)("a",null,"New color opacity utilities"))),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{href:"/docs/controlling-file-size",passHref:!0},Object(i.a)("a",null,"Built-in PurgeCSS support")))),Object(i.a)("p",null,"For the full list of changes, ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.4.0"}),"check out the complete release notes on GitHub"),"."),Object(i.a)("hr",null),Object(i.a)(p.a,{level:2,id:"tailwind-css-v1-3",toc:!0},"Tailwind CSS v1.3"),Object(i.a)("div",{className:"-mt-4 text-gray-600"},"Apr 21, 2020"),Object(i.a)("p",null,"Tailwind CSS v1.3 is now available with a bunch of super useful new features, including:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{href:"/docs/space",passHref:!0},Object(i.a)("a",null,'New "space between" layout utilities'))),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{href:"/docs/divide-width",passHref:!0},Object(i.a)("a",null,'New "border between" utilities'))),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{href:"/docs/transition-delay",passHref:!0},Object(i.a)("a",null,"New transition-delay utilities"))),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{href:"/docs/pseudo-class-variants/#group-focus",passHref:!0},Object(i.a)("a",null,"New group-focus variant")))),Object(i.a)("p",null,"For the full list of changes, ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.3.0"}),"check out the complete release notes on GitHub"),"."),Object(i.a)("hr",null),Object(i.a)(p.a,{level:2,id:"tailwind-css-v1-2",toc:!0},"Tailwind CSS v1.2"),Object(i.a)("div",{className:"-mt-4 text-gray-600"},"Feb 5, 2020"),Object(i.a)("p",null,"Tailwind CSS v1.2 is here and it's the biggest feature release since v0.1 dropped two and a half years ago!"),Object(i.a)("p",null,"Here are the features you're probably going to be the most excited about:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{href:"/docs/grid-template-columns",passHref:!0},Object(i.a)("a",null,"CSS Grid support"))),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{href:"/docs/transition-property",passHref:!0},Object(i.a)("a",null,"CSS Transitions support"))),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{href:"/docs/scale",passHref:!0},Object(i.a)("a",null,"CSS Transforms support")))),Object(i.a)("p",null,"For the full list of changes, ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.2.0"}),"check out the complete release notes on GitHub"),"."),Object(i.a)("hr",null),Object(i.a)(p.a,{level:2,id:"tailwind-css-v1-1",toc:!0},"Tailwind CSS v1.1"),Object(i.a)("div",{className:"-mt-4 text-gray-600"},"Aug 6, 2019"),Object(i.a)("p",null,"The first new feature release since v1.0 has arrived! Tailwind v1.1 includes a bunch of new stuff, but I think the things you'll probably be most excited about are:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.1.0#added-utilities-for-screenreader-visibility"}),"New screenreader visibility utilities")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.1.0#added-utilities-for-placeholder-color"}),"New utilities for setting the placeholder color on form elements")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.1.0#first-last-even-and-odd-child-variants"}),"New variants for ",Object(i.a)("inlineCode",{parentName:"a"},"first-child"),", ",Object(i.a)("inlineCode",{parentName:"a"},"last-child"),", ",Object(i.a)("inlineCode",{parentName:"a"},"nth-child(odd)"),", and ",Object(i.a)("inlineCode",{parentName:"a"},"nth-child(even)")))),Object(i.a)("p",null,"For the full list of changes, ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.1.0"}),"check out the complete release notes on GitHub"),"."),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Important note")," \u2014 although this is a minor release, it includes two bug fixes that may have a superficial impact on how your site looks if you are using horizontal rules in your site or are relying on the default placeholder color defined in Tailwind's base styles."),Object(i.a)("p",null,"Be sure to read through the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.1.0#fixes"}),"fixes")," section before upgrading to understand the impact."),Object(i.a)("hr",null),Object(i.a)(p.a,{level:2,id:"tailwind-css-v1-0",toc:!0},"Tailwind CSS v1.0"),Object(i.a)("div",{className:"-mt-4 text-gray-600"},"May 13, 2019"),Object(i.a)("p",null,"A year and a half in the making, the first stable release of Tailwind CSS is finally here! \ud83c\udf89"),Object(i.a)("p",null,"Since we released the first alpha on November 1st, 2017, the framework has seen ",Object(i.a)("strong",{parentName:"p"},"43 releases"),", racked up ",Object(i.a)("strong",{parentName:"p"},"2,281 commits")," from ",Object(i.a)("strong",{parentName:"p"},"88 contributors"),", and been installed over ",Object(i.a)("strong",{parentName:"p"},"1.4 million times"),"."),Object(i.a)("p",null,"It's been adopted by big companies like ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.algolia.com/doc/"}),"Algolia")," and ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://send.firefox.com/"}),"Mozilla"),", and used to build new startups like ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://rightmessage.com/"}),"RightMessage")," and ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://pingping.io/"}),"PingPing"),"."),Object(i.a)("p",null,"It's been a long road, but I'm super excited to finally have a truly stable version in the wild for us to build on for the future."),Object(i.a)("p",null,"This release focuses mostly on solidifying the existing API and locking in any breaking changes, but does include some exciting changes too."),Object(i.a)("p",null,"For a full list of changes and instructions on upgrading, ",Object(i.a)(r.a,{href:"/docs/upgrading-to-v1",passHref:!0},Object(i.a)("a",null,"read the upgrade guide")),"."),Object(i.a)(p.a,{level:3,id:"revamped-config-file-format",toc:!0},"Revamped config file format"),Object(i.a)("p",null,"In v1.0, the config file is completely optional, and if you do add a config file, you only need to specify your customizations, not your entire design system."),Object(i.a)("pre",{className:"language-js"},Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Example `tailwind.config.js` file"),"\n\nmodule",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  important",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"true"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  theme",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    fontFamily",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      display",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'Gilroy'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'sans-serif'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      body",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'Graphik'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'sans-serif'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    extend",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      colors",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        cyan",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'#9cdbff'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      margin",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'96'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'24rem'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'128'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'32rem'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  variants",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    opacity",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'responsive'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'hover'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"))),Object(i.a)("p",null,"This makes it a lot easier to know what values are custom for your project and which ones are built in to Tailwind by default, and in general keeps your config file a lot simpler and more manageable."),Object(i.a)("p",null,"Learn more about the new configuration format in ",Object(i.a)(r.a,{href:"/docs/configuration",passHref:!0},Object(i.a)("a",null,"the configuration documentation")),"."),Object(i.a)(p.a,{level:3,id:"redesigned-color-palette",toc:!0},"Redesigned color palette"),Object(i.a)("p",null,"Tailwind v1.0 includes a brand new numeric color palette, where each color now comes with nine shades instead of seven."),Object(i.a)(u.a,{colors:["teal"],mdxType:"ColorPalette"}),Object(i.a)("p",null,"Explore the new color palette in ",Object(i.a)(r.a,{href:"/docs/customizing-colors#default-color-palette",passHref:!0},Object(i.a)("a",null,"the customizing colors documentation")),"."),Object(i.a)(p.a,{level:3,id:"updated-breakpoints",toc:!0},"Updated breakpoints"),Object(i.a)("p",null,"We've updated the default breakpoints for v1.0 to better reflect common modern device resolutions."),Object(i.a)("pre",{className:"language-js"},Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    screens",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'sm'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'640px'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'md'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'768px'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'lg'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'1024px'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'xl'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'1280px'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"))),Object(i.a)("p",null,"The new breakpoints are more practical to work with and make it a bit easier to avoid annoying compromises in your responsive designs."),Object(i.a)("p",null,"New to responsive design with Tailwind? Check out our ",Object(i.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"responsive design documentation"))," to learn more."),Object(i.a)(p.a,{level:3,id:"new-top-right-bottom-left-utilities",toc:!0},"New top/right/bottom/left utilities"),Object(i.a)("p",null,"Tailwind v1.0 includes new configurable utilities for ",Object(i.a)("inlineCode",{parentName:"p"},"top"),", ",Object(i.a)("inlineCode",{parentName:"p"},"right"),", ",Object(i.a)("inlineCode",{parentName:"p"},"bottom"),", and ",Object(i.a)("inlineCode",{parentName:"p"},"left"),", so you're no longer limited by the old ",Object(i.a)("inlineCode",{parentName:"p"},"pin")," classes."),Object(i.a)("pre",{className:"language-html"},Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"top-16",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(i.a)("p",null,"Learn more in the ",Object(i.a)(r.a,{href:"/docs/top-right-bottom-left",passHref:!0},Object(i.a)("a",null,"top/right/bottom/left documentation")),"."),Object(i.a)(p.a,{level:3,id:"new-order-utilities",toc:!0},"New order utilities"),Object(i.a)("p",null,"Tailwind v1.0 also includes new utilities for the ",Object(i.a)("inlineCode",{parentName:"p"},"order")," property so you can easily re-order elements inside of flex containers."),Object(i.a)("pre",{className:"language-html"},Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"flex",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"order-last",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"1",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"2",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"3",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(i.a)("p",null,"Learn more in the ",Object(i.a)(r.a,{href:"/docs/order",passHref:!0},Object(i.a)("a",null,"order documentation")),"."))}g.isMDXComponent=!0,g.layoutProps=N}},[["HFy2",0,2,1,3,4]]]);