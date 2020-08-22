_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[161],{Bcm3:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/upcoming-changes",function(){return t("kvn1")}])},kvn1:function(e,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return u})),t.d(a,"meta",(function(){return m})),t.d(a,"tableOfContents",(function(){return b})),t.d(a,"default",(function(){return g}));var n,o=t("wx14"),c=t("Ff2n"),i=t("q1tI"),r=t.n(i),p=t("7ljp"),s=(t("YFqc"),t("tc9R")),l=t("vRWG"),d=t("I6Nb"),u=(r.a.createElement,l.DocumentationLayout),m={title:"Upcoming Changes",description:"Updates and deprecations coming in the future and how to prepare for them."},b=[{title:"Overview",slug:"overview",children:[]},{title:"Remove deprecated gap utilities",slug:"remove-deprecated-gap-utilities",children:[]}],j=(n="Heading",function(e){return console.warn("Component '"+n+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(p.a)("div",e)}),O={Layout:u,meta:m,tableOfContents:b},N=d.ContentsLayout;function g(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(p.a)(N,Object(o.a)({},O,t,{components:a,mdxType:"MDXLayout"}),Object(p.a)(j,{level:2,id:"overview",toc:!0,hidden:!0,mdxType:"Heading"},"Overview"),Object(p.a)("p",null,"Tailwind follows ",Object(p.a)("a",Object(o.a)({parentName:"p"},{href:"https://semver.org/"}),"semantic versioning"),", so we never introduce breaking changes until a new major release ",Object(p.a)("em",{parentName:"p"},"(v2.0 is the next one)"),"."),Object(p.a)("p",null,"Rather than drop a bunch of breaking changes on you at once though, we use feature flags as an incremental adoption strategy so you can opt-in to breaking changes early, and save the upgrade hassle down the road."),Object(p.a)("p",null,"The following breaking changes are currently available in Tailwind behind flags."),Object(p.a)(s.a,{level:2,id:"remove-deprecated-gap-utilities",toc:!0},"Remove deprecated gap utilities"),Object(p.a)("p",null,"Tailwind v1.7.0 introduced new ",Object(p.a)("inlineCode",{parentName:"p"},"gap-x-{n}")," and ",Object(p.a)("inlineCode",{parentName:"p"},"gap-y-{n}")," utilities to replace the existing ",Object(p.a)("inlineCode",{parentName:"p"},"col-gap-{n}")," and ",Object(p.a)("inlineCode",{parentName:"p"},"row-gap-{n}")," utilities. We currently include both by default, but the old utilities will be removed in v2.0."),Object(p.a)("p",null,"To opt-in to removing them now, use the ",Object(p.a)("inlineCode",{parentName:"p"},"removeDeprecatedGapUtilities")," flag:"),Object(p.a)("pre",{className:"language-js"},Object(p.a)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  future",Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    removeDeprecatedGapUtilities",Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token boolean"}),"true"),Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token comment"}),"// ..."),"\n",Object(p.a)("span",Object(o.a)({parentName:"code"},{className:"token punctuation"}),"}"))))}g.isMDXComponent=!0,g.layoutProps=O}},[["Bcm3",0,2,1,3,4]]]);