_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[74],{"5xSE":function(a,n,e){"use strict";a.exports=function(a){return"[object RegExp]"===Object.prototype.toString.call(a)}},"8C7G":function(a,n,e){"use strict";e.d(n,"a",(function(){return r}));var t=e("KQm4"),s=e("rePB"),i=e("q1tI"),c=e.n(i),p=e("98BF"),l=e("Zb5r"),o=e("AOjV"),u=c.a.createElement;function r(a){var n=a.plugin,e=a.name,i=p.defaultConfig.variants[n]||["responsive"];e=e||n.replace(/([a-z])([A-Z])/g,(function(a,n,e){return"".concat(n," ").concat(e.toLowerCase())}));var r=["responsive","hover","focus","active","group-hover"].filter((function(a){return!i.includes(a)})).slice(0,2);return u(c.a.Fragment,null,u("p",null,"By default, ",i.length?"only ".concat(Object(l.a)(i)):"no"," variants are generated for ",e," utilities."),u("p",null,"You can control which variants are generated for the ",e," utilities by modifying the"," ",u("code",null,n)," property in the ",u("code",null,"variants")," section of your"," ",u("code",null,"tailwind.config.js")," file."),u("p",null,"For example, this config will ",i.length>0?"also ":"","generate"," ",Object(l.a)(r)," variants:"),u(o.a,{path:"variants",before:"// ...",remove:Object(s.a)({},n,i),add:Object(s.a)({},n,[].concat(Object(t.a)(i),Object(t.a)(r)))}))}},AOjV:function(a,n,e){"use strict";e.d(n,"a",(function(){return r}));var t=e("q1tI"),s=e.n(t),i=e("Btb4"),c=e.n(i),p=e("AI3G"),l=e("iuhU"),o=s.a.createElement;function u(a){var n=a.edits,e=a.indent,s=void 0===e?"":e,i=a.type,p=void 0===i?"inserted":i;return o("span",{className:Object(l.a)("token",{"inserted-sign inserted":"inserted"===p,"deleted-sign deleted":"inserted"!==p})},Object.keys(n).map((function(a,e){return o(t.Fragment,{key:e},o("span",{className:Object(l.a)("token prefix",{inserted:"inserted"===p,deleted:"inserted"!==p})},"inserted"===p?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(i=a)?i:"'".concat(i,"'"),":"," ",c()(n[a],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(a,n){return"[".concat(n.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(a,n){return"".concat(0===n?"":"+ "+s).concat(a)})).join("\n"),",\n");var i})))}function r(a){var n=a.path,e=a.add,s=a.remove,i=a.before,c=a.after;return n="string"===typeof n?n.split("."):n,o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((function(a,n){return o(t.Fragment,{key:n},"  ","  ".repeat(n+1),a,": ","{\n")})),i&&Object(p.a)(i).map((function(a){return"".concat("  ".repeat(n.length+2)).concat(a,"\n")}))),s&&o(u,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),e&&o(u,{edits:e,type:"inserted",indent:"  ".repeat(n.length+1)}),o("span",{className:"token unchanged"},c&&Object(p.a)(c).map((function(a){return"".concat("  ".repeat(n.length+2)).concat(a,"\n")})),n.map((function(a,e){return o(t.Fragment,{key:e},"  ","  ".repeat(n.length-e),"}\n")})),"  }")))}},Btb4:function(a,n,e){"use strict";const t=e("5xSE"),s=e("p+I8"),i=e("GAX2").default;a.exports=(a,n,e)=>{const c=[];return function a(n,e,p){let l;(e=e||{}).indent=e.indent||"\t",p=p||"",l=void 0===e.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+e.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const o=a=>{if(void 0===e.inlineCharacterLimit)return a;const n=a.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return n.length<=e.inlineCharacterLimit?n:a.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),p).replace(new RegExp(l.indent,"g"),p+e.indent)};if(-1!==c.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||t(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";c.push(n);const t="["+l.newLine+n.map((t,s)=>{const i=n.length-1===s?l.newLine:","+l.newLineOrSpace;let c=a(t,e,p+e.indent);return e.transform&&(c=e.transform(n,s,c)),l.indent+c+i}).join("")+l.pad+"]";return c.pop(),o(t)}if(s(n)){let t=Object.keys(n).concat(i(n));if(e.filter&&(t=t.filter(a=>e.filter(n,a))),0===t.length)return"{}";c.push(n);const s="{"+l.newLine+t.map((s,i)=>{const c=t.length-1===i?l.newLine:","+l.newLineOrSpace,o="symbol"===typeof s,u=!o&&/^[a-z$_][a-z$_0-9]*$/i.test(s),r=o||u?s:a(s,e);let m=a(n[s],e,p+e.indent);return e.transform&&(m=e.transform(n,s,m)),l.indent+String(r)+": "+m+c}).join("")+l.pad+"}";return c.pop(),o(s)}return n=String(n).replace(/[\r\n]/g,a=>"\n"===a?"\\n":"\\r"),!1===e.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(a,n,e)}},GAX2:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=a=>Object.getOwnPropertySymbols(a).filter(n=>Object.prototype.propertyIsEnumerable.call(a,n))},Zb5r:function(a,n,e){"use strict";function t(a){return a.reduce((function(n,e,t){return 0===t?e:t===a.length-1?"".concat(n," and ").concat(e):"".concat(n,", ").concat(e)}),"")}e.d(n,"a",(function(){return t}))},"cl/B":function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/clear",function(){return e("fWdt")}])},egFW:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:a,variants:n}){a({".clear-left":{clear:"left"},".clear-right":{clear:"right"},".clear-both":{clear:"both"},".clear-none":{clear:"none"}},n("clear"))}}},fWdt:function(a,n,e){"use strict";e.r(n),e.d(n,"Layout",(function(){return k})),e.d(n,"classes",(function(){return h})),e.d(n,"meta",(function(){return O})),e.d(n,"tableOfContents",(function(){return j})),e.d(n,"default",(function(){return w}));var t=e("wx14"),s=e("Ff2n"),i=e("q1tI"),c=e.n(i),p=e("7ljp"),l=e("YFqc"),o=e.n(l),u=e("tc9R"),r=e("pOT7"),m=e("vRWG"),d=e("I6Nb"),g=e("egFW"),f=e.n(g),v=e("8C7G"),b=e("wH44"),k=(c.a.createElement,m.DocumentationLayout),h={plugin:f.a},O={title:"Clear",description:"Utilities for controlling the wrapping of content around an element.",featureVersion:"v1.2.0+"},j=[{title:"Clear left",slug:"clear-left",children:[]},{title:"Clear right",slug:"clear-right",children:[]},{title:"Clear both",slug:"clear-both",children:[]},{title:"Don't clear",slug:"don-t-clear",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],y={Layout:k,classes:h,meta:O,tableOfContents:j},q=d.ContentsLayout;function w(a){var n=a.components,e=Object(s.a)(a,["components"]);return Object(p.a)(q,Object(t.a)({},y,e,{components:n,mdxType:"MDXLayout"}),Object(p.a)(u.a,{level:2,id:"clear-left",toc:!0},"Clear left"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"clear-left")," to position an element below any preceding left-floated elements."),Object(p.a)(r.a,{preview:'\n  <div class="bg-gray-200 p-4">\n    <img class="float-left mr-4 my-2 h-24" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">\n    <img class="float-right ml-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">\n    <p class="clear-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-200 p-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>float-left mr-4 my-2 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>float-right ml-4 my-2 h-32<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>clear-left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(p.a)(u.a,{level:2,id:"clear-right",toc:!0},"Clear right"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"clear-right")," to position an element below any preceding right-floated elements."),Object(p.a)(r.a,{preview:'\n  <div class="bg-gray-200 p-4">\n    <img class="float-left mr-4 my-2 h-24" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">\n    <img class="float-right ml-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">\n    <p class="clear-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-200 p-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>float-left mr-4 my-2 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>float-right ml-4 my-2 h-32<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>clear-right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(p.a)(u.a,{level:2,id:"clear-both",toc:!0},"Clear both"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"clear-both")," to position an element below all preceding floated elements."),Object(p.a)(r.a,{preview:'\n  <div class="bg-gray-200 p-4">\n    <img class="float-left mr-4 my-2 h-24" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">\n    <img class="float-right ml-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">\n    <p class="clear-both">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-200 p-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>float-left mr-4 my-2 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>float-right ml-4 my-2 h-32<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>clear-both<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(p.a)(u.a,{level:2,id:"don-t-clear",toc:!0},"Don't clear"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"clear-none")," to reset any clears that are applied to an element. This is the default value for the clear property."),Object(p.a)(r.a,{preview:'\n  <div class="bg-gray-200 p-4">\n    <img class="float-left mr-4 my-2 h-24" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">\n    <img class="float-right ml-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">\n    <p class="clear-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-200 p-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>float-left mr-4 my-2 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>float-right ml-4 my-2 h-32<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>clear-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(p.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the clear property of an element at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing clear utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:clear-left")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"clear-left")," utility at only medium screen sizes and above."),Object(p.a)("pre",{className:"language-html"},Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"clear-right md:clear-left ...",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(o.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(u.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(p.a)(v.a,{plugin:"clear",mdxType:"Variants"}),Object(p.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(p.a)(b.a,{plugin:"clear",mdxType:"Disabling"}))}w.isMDXComponent=!0,w.layoutProps=y},"p+I8":function(a,n,e){"use strict";a.exports=function(a){var n=typeof a;return null!==a&&("object"===n||"function"===n)}},pOT7:function(a,n,e){"use strict";e.d(n,"a",(function(){return p}));var t=e("q1tI"),s=e.n(t),i=e("iuhU"),c=s.a.createElement;function p(a){var n=a.preview,e=a.snippet,t=a.previewClassName;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(i.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",t,{"p-4":!t}),dangerouslySetInnerHTML:{__html:n}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:e}}))))}},wH44:function(a,n,e){"use strict";e.d(n,"a",(function(){return m}));var t=e("rePB"),s=e("q1tI"),i=e.n(s),c=e("AOjV"),p=e("AI3G"),l=e("Zb5r"),o=i.a.createElement;function u(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function r(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){Object(t.a)(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function m(a){var n=a.plugin,e=a.name,s=Object(p.a)(n);return e=e||n.replace(/([a-z])([A-Z])/g,(function(a,n,e){return"".concat(n," ").concat(e.toLowerCase())})),o(i.a.Fragment,null,o("p",null,"If you don't plan to use the ",e," utilities in your project, you can disable them entirely by setting the"," ",o("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(s.map((function(a){return"<code>".concat(a,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",o("code",null,"false")," in the"," ",o("code",null,"corePlugins")," section of your config file:"),o(c.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(a,n){return r(r({},a),{},Object(t.a)({},n,!1))}),{})}))}}},[["cl/B",0,2,1,3,4]]]);