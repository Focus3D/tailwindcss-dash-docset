_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[146],{"0iwl":function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:n,variants:a}){n({".table-auto":{"table-layout":"auto"},".table-fixed":{"table-layout":"fixed"}},a("tableLayout"))}}},"5xSE":function(n,a,s){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,a,s){"use strict";s.d(a,"a",(function(){return r}));var t=s("KQm4"),p=s("rePB"),e=s("q1tI"),o=s.n(e),c=s("98BF"),l=s("Zb5r"),u=s("AOjV"),i=o.a.createElement;function r(n){var a=n.plugin,s=n.name,e=c.defaultConfig.variants[a]||["responsive"];s=s||a.replace(/([a-z])([A-Z])/g,(function(n,a,s){return"".concat(a," ").concat(s.toLowerCase())}));var r=["responsive","hover","focus","active","group-hover"].filter((function(n){return!e.includes(n)})).slice(0,2);return i(o.a.Fragment,null,i("p",null,"By default, ",e.length?"only ".concat(Object(l.a)(e)):"no"," variants are generated for ",s," utilities."),i("p",null,"You can control which variants are generated for the ",s," utilities by modifying the"," ",i("code",null,a)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",e.length>0?"also ":"","generate"," ",Object(l.a)(r)," variants:"),i(u.a,{path:"variants",before:"// ...",remove:Object(p.a)({},a,e),add:Object(p.a)({},a,[].concat(Object(t.a)(e),Object(t.a)(r)))}))}},AOjV:function(n,a,s){"use strict";s.d(a,"a",(function(){return r}));var t=s("q1tI"),p=s.n(t),e=s("Btb4"),o=s.n(e),c=s("AI3G"),l=s("iuhU"),u=p.a.createElement;function i(n){var a=n.edits,s=n.indent,p=void 0===s?"":s,e=n.type,c=void 0===e?"inserted":e;return u("span",{className:Object(l.a)("token",{"inserted-sign inserted":"inserted"===c,"deleted-sign deleted":"inserted"!==c})},Object.keys(a).map((function(n,s){return u(t.Fragment,{key:s},u("span",{className:Object(l.a)("token prefix",{inserted:"inserted"===c,deleted:"inserted"!==c})},"inserted"===c?"+":"-")," ",p,/^[a-z_$][a-z0-9_$]*$/i.test(e=n)?e:"'".concat(e,"'"),":"," ",o()(a[n],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(n,a){return"[".concat(a.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(n,a){return"".concat(0===a?"":"+ "+p).concat(n)})).join("\n"),",\n");var e})))}function r(n){var a=n.path,s=n.add,p=n.remove,e=n.before,o=n.after;return a="string"===typeof a?a.split("."):a,u("pre",{className:"language-diff"},u("code",{className:"language-diff"},u("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",a.map((function(n,a){return u(t.Fragment,{key:a},"  ","  ".repeat(a+1),n,": ","{\n")})),e&&Object(c.a)(e).map((function(n){return"".concat("  ".repeat(a.length+2)).concat(n,"\n")}))),p&&u(i,{edits:p,type:"deleted",indent:"  ".repeat(a.length+1)}),s&&u(i,{edits:s,type:"inserted",indent:"  ".repeat(a.length+1)}),u("span",{className:"token unchanged"},o&&Object(c.a)(o).map((function(n){return"".concat("  ".repeat(a.length+2)).concat(n,"\n")})),a.map((function(n,s){return u(t.Fragment,{key:s},"  ","  ".repeat(a.length-s),"}\n")})),"  }")))}},Btb4:function(n,a,s){"use strict";const t=s("5xSE"),p=s("p+I8"),e=s("GAX2").default;n.exports=(n,a,s)=>{const o=[];return function n(a,s,c){let l;(s=s||{}).indent=s.indent||"\t",c=c||"",l=void 0===s.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+s.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const u=n=>{if(void 0===s.inlineCharacterLimit)return n;const a=n.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=s.inlineCharacterLimit?a:n.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),c).replace(new RegExp(l.indent,"g"),c+s.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||t(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const t="["+l.newLine+a.map((t,p)=>{const e=a.length-1===p?l.newLine:","+l.newLineOrSpace;let o=n(t,s,c+s.indent);return s.transform&&(o=s.transform(a,p,o)),l.indent+o+e}).join("")+l.pad+"]";return o.pop(),u(t)}if(p(a)){let t=Object.keys(a).concat(e(a));if(s.filter&&(t=t.filter(n=>s.filter(a,n))),0===t.length)return"{}";o.push(a);const p="{"+l.newLine+t.map((p,e)=>{const o=t.length-1===e?l.newLine:","+l.newLineOrSpace,u="symbol"===typeof p,i=!u&&/^[a-z$_][a-z$_0-9]*$/i.test(p),r=u||i?p:n(p,s);let k=n(a[p],s,c+s.indent);return s.transform&&(k=s.transform(a,p,k)),l.indent+String(r)+": "+k+o}).join("")+l.pad+"}";return o.pop(),u(p)}return a=String(a).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===s.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(n,a,s)}},GAX2:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n=>Object.getOwnPropertySymbols(n).filter(a=>Object.prototype.propertyIsEnumerable.call(n,a))},Iz6y:function(n,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/table-layout",function(){return s("YGyf")}])},YGyf:function(n,a,s){"use strict";s.r(a),s.d(a,"Layout",(function(){return f})),s.d(a,"classes",(function(){return y})),s.d(a,"meta",(function(){return m})),s.d(a,"tableOfContents",(function(){return h})),s.d(a,"default",(function(){return x}));var t=s("wx14"),p=s("Ff2n"),e=s("q1tI"),o=s.n(e),c=s("7ljp"),l=(s("YFqc"),s("tc9R")),u=s("pOT7"),i=s("vRWG"),r=s("I6Nb"),k=s("0iwl"),d=s.n(k),g=s("8C7G"),b=s("wH44"),f=(o.a.createElement,i.DocumentationLayout),y={plugin:d.a},m={title:"Table Layout",description:"Utilities for controlling the table layout algorithm.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},h=[{title:"Auto",slug:"auto",children:[]},{title:"Fixed",slug:"fixed",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],v={Layout:f,classes:y,meta:m,tableOfContents:h},w=r.ContentsLayout;function x(n){var a=n.components,s=Object(p.a)(n,["components"]);return Object(c.a)(w,Object(t.a)({},v,s,{components:a,mdxType:"MDXLayout"}),Object(c.a)(l.a,{level:2,id:"auto",toc:!0},"Auto"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},".table-auto")," to allow the table to automatically size columns to fit the contents of the cell."),Object(c.a)(u.a,{preview:'\n  <table class="table-auto">\n    <thead>\n      <tr>\n        <th class="px-4 py-2">Title</th>\n        <th class="px-4 py-2">Author</th>\n        <th class="px-4 py-2">Views</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border px-4 py-2">Intro to CSS</td>\n        <td class="border px-4 py-2">Adam</td>\n        <td class="border px-4 py-2">858</td>\n      </tr>\n      <tr class="bg-gray-100">\n        <td class="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>\n        <td class="border px-4 py-2">Adam</td>\n        <td class="border px-4 py-2">112</td>\n      </tr>\n      <tr>\n        <td class="border px-4 py-2">Intro to JavaScript</td>\n        <td class="border px-4 py-2">Chris</td>\n        <td class="border px-4 py-2">1,280</td>\n      </tr>\n    </tbody>\n  </table>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>table-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Author<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Views<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Intro to CSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Adam<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>858<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Adam<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>112<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Intro to JavaScript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Chris<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1,280<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:2,id:"fixed",toc:!0},"Fixed"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},".table-fixed")," to allow the table to ignore the content and use fixed widths for columns. The width of the first row will set the column widths for the whole table."),Object(c.a)("p",null,"You can manually set the widths for some columns and the rest of the available width will be divided evenly amongst the columns without explicit width."),Object(c.a)(u.a,{preview:'\n  <table class="table-fixed">\n    <thead>\n      <tr>\n        <th class="w-1/2 px-4 py-2">Title</th>\n        <th class="w-1/4 px-4 py-2">Author</th>\n        <th class="w-1/4 px-4 py-2">Views</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border px-4 py-2">Intro to CSS</td>\n        <td class="border px-4 py-2">Adam</td>\n        <td class="border px-4 py-2">858</td>\n      </tr>\n      <tr class="bg-gray-100">\n        <td class="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>\n        <td class="border px-4 py-2">Adam</td>\n        <td class="border px-4 py-2">112</td>\n      </tr>\n      <tr>\n        <td class="border px-4 py-2">Intro to JavaScript</td>\n        <td class="border px-4 py-2">Chris</td>\n        <td class="border px-4 py-2">1,280</td>\n      </tr>\n    </tbody>\n  </table>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>table-fixed<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-1/2 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-1/4 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Author<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-1/4 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Views<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Intro to CSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Adam<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>858<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Adam<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>112<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Intro to JavaScript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Chris<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1,280<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(g.a,{plugin:"tableLayout",mdxType:"Variants"}),Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(b.a,{plugin:"tableLayout",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=v},Zb5r:function(n,a,s){"use strict";function t(n){return n.reduce((function(a,s,t){return 0===t?s:t===n.length-1?"".concat(a," and ").concat(s):"".concat(a,", ").concat(s)}),"")}s.d(a,"a",(function(){return t}))},"p+I8":function(n,a,s){"use strict";n.exports=function(n){var a=typeof n;return null!==n&&("object"===a||"function"===a)}},pOT7:function(n,a,s){"use strict";s.d(a,"a",(function(){return c}));var t=s("q1tI"),p=s.n(t),e=s("iuhU"),o=p.a.createElement;function c(n){var a=n.preview,s=n.snippet,t=n.previewClassName;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(e.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",t,{"p-4":!t}),dangerouslySetInnerHTML:{__html:a}}),o("div",{className:"rounded-b-lg bg-gray-800"},o("pre",{className:"scrollbar-none m-0 p-0 language-html"},o("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:s}}))))}},wH44:function(n,a,s){"use strict";s.d(a,"a",(function(){return k}));var t=s("rePB"),p=s("q1tI"),e=s.n(p),o=s("AOjV"),c=s("AI3G"),l=s("Zb5r"),u=e.a.createElement;function i(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function r(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?i(Object(s),!0).forEach((function(a){Object(t.a)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}function k(n){var a=n.plugin,s=n.name,p=Object(c.a)(a);return s=s||a.replace(/([a-z])([A-Z])/g,(function(n,a,s){return"".concat(a," ").concat(s.toLowerCase())})),u(e.a.Fragment,null,u("p",null,"If you don't plan to use the ",s," utilities in your project, you can disable them entirely by setting the"," ",u("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(p.map((function(n){return"<code>".concat(n,"</code>")})))}})," ",p.length>1?"properties":"property"," to ",u("code",null,"false")," in the"," ",u("code",null,"corePlugins")," section of your config file:"),u(o.a,{path:"corePlugins",before:"// ...",add:p.reduce((function(n,a){return r(r({},n),{},Object(t.a)({},a,!1))}),{})}))}}},[["Iz6y",0,2,1,3,4]]]);