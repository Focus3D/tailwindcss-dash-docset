(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[131],{"5xSE":function(n,a,t){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,a,t){"use strict";t.d(a,"a",(function(){return i}));var s=t("q1tI"),e=t.n(s),p=t("98BF"),o=t("Zb5r"),c=t("AOjV"),l=e.a.createElement;function i(n){var{plugin:a,name:t}=n,s=p.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(n,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var i=["responsive","hover","focus","active","group-hover"].filter(n=>!s.includes(n)).slice(0,2);return l(e.a.Fragment,null,l("p",null,"By default, ",s.length?"only ".concat(Object(o.a)(s)):"no"," variants are generated for ",t," utilities."),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,a)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(o.a)(i)," variants:"),l(c.a,{path:"variants",before:"// ...",remove:{[a]:s},add:{[a]:[...s,...i]}}))}},AOjV:function(n,a,t){"use strict";t.d(a,"a",(function(){return u}));var s=t("q1tI"),e=t.n(s),p=t("Btb4"),o=t.n(p),c=t("AI3G"),l=t("iuhU"),i=e.a.createElement;function r(n){var{edits:a,indent:t="",type:e="inserted"}=n;return i("span",{className:Object(l.a)("token",{"inserted-sign inserted":"inserted"===e,"deleted-sign deleted":"inserted"!==e})},Object.keys(a).map((n,p)=>i(s.Fragment,{key:p},i("span",{className:Object(l.a)("token prefix",{inserted:"inserted"===e,deleted:"inserted"!==e})},"inserted"===e?"+":"-")," ",t,function(n){return/^[a-z_$][a-z0-9_$]*$/i.test(n)?n:"'".concat(n,"'")}(n),":"," ",o()(a[n],{indent:"  "}).replace(/\[([^\]]+)\]/g,(n,a)=>"[".concat(a.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((n,a)=>"".concat(0===a?"":"+ "+t).concat(n)).join("\n"),",\n")))}function u(n){var{path:a,add:t,remove:e,before:p,after:o}=n;return a="string"===typeof a?a.split("."):a,i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",a.map((n,a)=>i(s.Fragment,{key:a},"  ","  ".repeat(a+1),n,": ","{\n")),p&&Object(c.a)(p).map(n=>"".concat("  ".repeat(a.length+2)).concat(n,"\n"))),e&&i(r,{edits:e,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&i(r,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),i("span",{className:"token unchanged"},o&&Object(c.a)(o).map(n=>"".concat("  ".repeat(a.length+2)).concat(n,"\n")),a.map((n,t)=>i(s.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")),"  }")))}},BGd1:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:n,variants:a}){n({".pointer-events-none":{"pointer-events":"none"},".pointer-events-auto":{"pointer-events":"auto"}},a("pointerEvents"))}}},Btb4:function(n,a,t){"use strict";const s=t("5xSE"),e=t("p+I8"),p=t("GAX2").default;n.exports=(n,a,t)=>{const o=[];return function n(a,t,c){let l;(t=t||{}).indent=t.indent||"\t",c=c||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=n=>{if(void 0===t.inlineCharacterLimit)return n;const a=n.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:n.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),c).replace(new RegExp(l.indent,"g"),c+t.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||s(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const s="["+l.newLine+a.map((s,e)=>{const p=a.length-1===e?l.newLine:","+l.newLineOrSpace;let o=n(s,t,c+t.indent);return t.transform&&(o=t.transform(a,e,o)),l.indent+o+p}).join("")+l.pad+"]";return o.pop(),i(s)}if(e(a)){let s=Object.keys(a).concat(p(a));if(t.filter&&(s=s.filter(n=>t.filter(a,n))),0===s.length)return"{}";o.push(a);const e="{"+l.newLine+s.map((e,p)=>{const o=s.length-1===p?l.newLine:","+l.newLineOrSpace,i="symbol"===typeof e,r=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(e),u=i||r?e:n(e,t);let g=n(a[e],t,c+t.indent);return t.transform&&(g=t.transform(a,e,g)),l.indent+String(u)+": "+g+o}).join("")+l.pad+"}";return o.pop(),i(e)}return a=String(a).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(n,a,t)}},GAX2:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n=>Object.getOwnPropertySymbols(n).filter(a=>Object.prototype.propertyIsEnumerable.call(n,a))},Zb5r:function(n,a,t){"use strict";function s(n){return n.reduce((a,t,s)=>0===s?t:s===n.length-1?"".concat(a," and ").concat(t):"".concat(a,", ").concat(t),"")}t.d(a,"a",(function(){return s}))},n3tP:function(n,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/pointer-events",function(){return t("tWwp")}])},"p+I8":function(n,a,t){"use strict";n.exports=function(n){var a=typeof n;return null!==n&&("object"===a||"function"===a)}},pOT7:function(n,a,t){"use strict";t.d(a,"a",(function(){return c}));var s=t("q1tI"),e=t.n(s),p=t("iuhU"),o=e.a.createElement;function c(n){var{preview:a,snippet:t,previewClassName:s}=n;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(p.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",s,{"p-4":!s}),dangerouslySetInnerHTML:{__html:a}}),o("div",{className:"rounded-b-lg bg-gray-800"},o("pre",{className:"scrollbar-none m-0 p-0 language-html"},o("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},tWwp:function(n,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return f})),t.d(a,"classes",(function(){return m})),t.d(a,"meta",(function(){return b})),t.d(a,"tableOfContents",(function(){return h})),t.d(a,"default",(function(){return O}));var s=t("wx14"),e=t("Ff2n"),p=t("q1tI"),o=t.n(p),c=t("7ljp"),l=(t("YFqc"),t("tc9R")),i=t("pOT7"),r=t("vRWG"),u=t("I6Nb"),g=t("BGd1"),k=t.n(g),d=t("8C7G"),v=t("wH44"),f=(o.a.createElement,r.DocumentationLayout),m={plugin:k()},b={title:"Pointer Events",description:"Utilities for controlling whether an element responds to pointer events.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},h=[{title:"Usage",slug:"usage",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],w={Layout:f,classes:m,meta:b,tableOfContents:h},y=u.ContentsLayout;function O(n){var{components:a}=n,t=Object(e.a)(n,["components"]);return Object(c.a)(y,Object(s.a)({},w,t,{components:a,mdxType:"MDXLayout"}),Object(c.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},".pointer-events-auto")," to revert to the default browser behavior for pointer events (like ",Object(c.a)("inlineCode",{parentName:"p"},":hover")," and ",Object(c.a)("inlineCode",{parentName:"p"},"click"),")."),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},".pointer-events-none"),' to make an element ignore pointer events. The pointer events will still trigger on child elements and pass-through to elements that are "beneath" the target.'),Object(c.a)(i.a,{preview:'\n  <div class="max-w-sm">\n    <p class="text-sm text-gray-700">Try clicking the caret icon to open the dropdown</p>\n\n    <p class="text-sm text-gray-600 my-4">.pointer-events-auto (event captured)</p>\n    <div class="relative">\n      <select class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">\n        <option>Indiana</option>\n        <option>Michigan</option>\n        <option>Ohio</option>\n      </select>\n      <div class="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-gray-300 rounded-r pointer-events-auto">\n        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>\n      </div>\n    </div>\n\n    <p class="text-sm text-gray-600 my-4">.pointer-events-none (event passes through)</p>\n    <div class="relative">\n      <select class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">\n        <option>Indiana</option>\n        <option>Michigan</option>\n        <option>Ohio</option>\n      </select>\n      <div class="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-gray-300 rounded-r pointer-events-none">\n        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>\n      </div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Indiana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Ohio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pointer-events-auto ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fill-current h-4 w-4<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0 0 20 20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Indiana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Ohio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pointer-events-none ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fill-current h-4 w-4<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0 0 20 20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(d.a,{plugin:"pointerEvents",name:"pointer event",mdxType:"Variants"}),Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(v.a,{plugin:"pointerEvents",name:"pointer event",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=w},wH44:function(n,a,t){"use strict";t.d(a,"a",(function(){return g}));var s=t("rePB"),e=t("q1tI"),p=t.n(e),o=t("AOjV"),c=t("AI3G"),l=t("Zb5r"),i=p.a.createElement;function r(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,s)}return t}function u(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){Object(s.a)(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}function g(n){var{plugin:a,name:t}=n,s=Object(c.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(n,a,t)=>"".concat(a," ").concat(t.toLowerCase())),i(p.a.Fragment,null,i("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(s.map(n=>"<code>".concat(n,"</code>")))}})," ",s.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(o.a,{path:"corePlugins",before:"// ...",add:s.reduce((n,a)=>u(u({},n),{},{[a]:!1}),{})}))}}},[["n3tP",0,2,1,3,4]]]);