(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[79],{"0CVn":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,e:n,theme:t,variants:a}){e(s.default.fromPairs(s.default.map(t("cursor"),(e,t)=>[`.${n(`cursor-${t}`)}`,{cursor:e}])),a("cursor"))}};var a,s=(a=t("LvDl"))&&a.__esModule?a:{default:a}},"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("q1tI"),s=t.n(a),o=t("98BF"),c=t("Zb5r"),r=t("AOjV"),p=s.a.createElement;function i(e){var{plugin:n,name:t}=e,a=o.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(e,n,t)=>"".concat(n," ").concat(t.toLowerCase()));var i=["responsive","hover","focus","active","group-hover"].filter(e=>!a.includes(e)).slice(0,2);return p(s.a.Fragment,null,p("p",null,"By default, ",a.length?"only ".concat(Object(c.a)(a)):"no"," variants are generated for ",t," utilities."),p("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",p("code",null,n)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",a.length>0?"also ":"","generate"," ",Object(c.a)(i)," variants:"),p(r.a,{path:"variants",before:"// ...",remove:{[n]:a},add:{[n]:[...a,...i]}}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),o=t("Btb4"),c=t.n(o),r=t("AI3G"),p=t("iuhU"),i=s.a.createElement;function l(e){var{edits:n,indent:t="",type:s="inserted"}=e;return i("span",{className:Object(p.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(n).map((e,o)=>i(a.Fragment,{key:o},i("span",{className:Object(p.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,function(e){return/^[a-z_$][a-z0-9_$]*$/i.test(e)?e:"'".concat(e,"'")}(e),":"," ",c()(n[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(e,n)=>"[".concat(n.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((e,n)=>"".concat(0===n?"":"+ "+t).concat(e)).join("\n"),",\n")))}function u(e){var{path:n,add:t,remove:s,before:o,after:c}=e;return n="string"===typeof n?n.split("."):n,i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((e,n)=>i(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,": ","{\n")),o&&Object(r.a)(o).map(e=>"".concat("  ".repeat(n.length+2)).concat(e,"\n"))),s&&i(l,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&i(l,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),i("span",{className:"token unchanged"},c&&Object(r.a)(c).map(e=>"".concat("  ".repeat(n.length+2)).concat(e,"\n")),n.map((e,t)=>i(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")),"  }")))}},AYO1:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/cursor",function(){return t("ipTb")}])},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),o=t("GAX2").default;e.exports=(e,n,t)=>{const c=[];return function e(n,t,r){let p;(t=t||{}).indent=t.indent||"\t",r=r||"",p=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(p.newLine,"g"),"").replace(new RegExp(p.newLineOrSpace,"g")," ").replace(new RegExp(p.pad+"|"+p.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(p.newLine+"|"+p.newLineOrSpace,"g"),"\n").replace(new RegExp(p.pad,"g"),r).replace(new RegExp(p.indent,"g"),r+t.indent)};if(-1!==c.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";c.push(n);const a="["+p.newLine+n.map((a,s)=>{const o=n.length-1===s?p.newLine:","+p.newLineOrSpace;let c=e(a,t,r+t.indent);return t.transform&&(c=t.transform(n,s,c)),p.indent+c+o}).join("")+p.pad+"]";return c.pop(),i(a)}if(s(n)){let a=Object.keys(n).concat(o(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";c.push(n);const s="{"+p.newLine+a.map((s,o)=>{const c=a.length-1===o?p.newLine:","+p.newLineOrSpace,i="symbol"===typeof s,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||l?s:e(s,t);let d=e(n[s],t,r+t.indent);return t.transform&&(d=t.transform(n,s,d)),p.indent+String(u)+": "+d+c}).join("")+p.pad+"}";return c.pop(),i(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},YuTi:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((n,t,a)=>0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t),"")}t.d(n,"a",(function(){return a}))},ipTb:function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return f})),t.d(n,"classes",(function(){return v})),t.d(n,"meta",(function(){return O})),t.d(n,"tableOfContents",(function(){return j})),t.d(n,"default",(function(){return w}));var a=t("wx14"),s=t("Ff2n"),o=t("q1tI"),c=t.n(o),r=t("7ljp"),p=(t("YFqc"),t("tc9R")),i=t("pOT7"),l=t("vRWG"),u=t("I6Nb"),d=t("0CVn"),m=t.n(d),g=t("8C7G"),b=t("wH44"),f=(c.a.createElement,l.DocumentationLayout),v={plugin:m()},O={title:"Cursor",description:"Utilities for controlling the cursor style when hovering over an element.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},j=[{title:"Auto",slug:"auto",children:[]},{title:"Default",slug:"default",children:[]},{title:"Pointer",slug:"pointer",children:[]},{title:"Wait",slug:"wait",children:[]},{title:"Text",slug:"text",children:[]},{title:"Move",slug:"move",children:[]},{title:"Not Allowed",slug:"not-allowed",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Cursors",slug:"cursors"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],k={Layout:f,classes:v,meta:O,tableOfContents:j},h=u.ContentsLayout;function w(e){var{components:n}=e,t=Object(s.a)(e,["components"]);return Object(r.a)(h,Object(a.a)({},k,t,{components:n,mdxType:"MDXLayout"}),Object(r.a)(p.a,{level:2,id:"auto",toc:!0},"Auto"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".cursor-auto")," to allow the browser to change the cursor based on the current content (e.g. automatically change to ",Object(r.a)("inlineCode",{parentName:"p"},"text")," cursor when hovering over text)."),Object(r.a)(i.a,{preview:'\n  <div class="cursor-auto max-w-xs p-2 bg-gray-200 mx-auto">\n    Hover over this text\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cursor-auto ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Hover over this text\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(r.a)(p.a,{level:2,id:"default",toc:!0},"Default"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".cursor-default")," to change the mouse cursor to always use the platform-dependent default cursor (usually an arrow)."),Object(r.a)(i.a,{preview:'\n  <div class="cursor-default max-w-xs p-2 bg-gray-200 mx-auto">\n    Hover over this text\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cursor-default ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Hover over this text\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(r.a)(p.a,{level:2,id:"pointer",toc:!0},"Pointer"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".cursor-pointer")," to change the mouse cursor to indicate an interactive element (usually a pointing hand)."),Object(r.a)(i.a,{preview:'\n  <div class="cursor-pointer max-w-xs p-2 bg-gray-200 mx-auto">\n    Hover me\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cursor-pointer ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Hover me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(r.a)(p.a,{level:2,id:"wait",toc:!0},"Wait"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".cursor-wait")," to change the mouse cursor to indicate something is happening in the background (usually an hourglass or watch)."),Object(r.a)(i.a,{preview:'\n  <div class="cursor-wait max-w-xs p-2 bg-gray-200 mx-auto">\n    Hover me\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cursor-wait ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Hover me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(r.a)(p.a,{level:2,id:"text",toc:!0},"Text"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".cursor-text")," to change the mouse cursor to indicate the text can be selected (usually an I-beam shape)."),Object(r.a)(i.a,{preview:'\n  <div class="cursor-text max-w-xs p-2 bg-gray-200 mx-auto">\n    Hover me\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cursor-text ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Hover me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(r.a)(p.a,{level:2,id:"move",toc:!0},"Move"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".cursor-move")," to change the mouse cursor to indicate something that can be moved."),Object(r.a)(i.a,{preview:'\n  <div class="cursor-move max-w-xs p-2 bg-gray-200 mx-auto">\n    Hover me\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cursor-move ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Hover me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(r.a)(p.a,{level:2,id:"not-allowed",toc:!0},"Not Allowed"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".cursor-not-allowed")," to change the mouse cursor to indicate something can not be interacted with or clicked."),Object(r.a)(i.a,{preview:'\n  <div class="cursor-not-allowed max-w-xs p-2 bg-gray-200 mx-auto">\n    Hover me\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cursor-not-allowed ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Hover me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(r.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(p.a,{level:3,id:"cursors",toc:!0},"Cursors"),Object(r.a)("p",null,"By default Tailwind provides six ",Object(r.a)("inlineCode",{parentName:"p"},"cursor")," utilities. You change, add, or remove these by editing the ",Object(r.a)("inlineCode",{parentName:"p"},"theme.cursor")," section of your Tailwind config."),Object(r.a)("pre",{className:"language-diff"},Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     cursor: {\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       auto: 'auto',\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       default: 'default',\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       pointer: 'pointer',\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       wait: 'wait',\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       text: 'text',\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       move: 'move',\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       'not-allowed': 'not-allowed',\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       crosshair: 'crosshair',\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'zoom-in': 'zoom-in',\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(r.a)(p.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(r.a)(g.a,{plugin:"cursor",mdxType:"Variants"}),Object(r.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(r.a)(b.a,{plugin:"cursor",mdxType:"Disabling"}))}w.isMDXComponent=!0,w.layoutProps=k},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),s=t.n(a),o=t("iuhU"),c=s.a.createElement;function r(e){var{preview:n,snippet:t,previewClassName:a}=e;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(o.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:n}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),o=t.n(s),c=t("AOjV"),r=t("AI3G"),p=t("Zb5r"),i=o.a.createElement;function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var{plugin:n,name:t}=e,a=Object(r.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(e,n,t)=>"".concat(n," ").concat(t.toLowerCase())),i(o.a.Fragment,null,i("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(p.a)(a.map(e=>"<code>".concat(e,"</code>")))}})," ",a.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(c.a,{path:"corePlugins",before:"// ...",add:a.reduce((e,n)=>u(u({},e),{},{[n]:!1}),{})}))}},yLpj:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"===typeof window&&(t=window)}e.exports=t}},[["AYO1",0,2,5,1,3,4]]]);