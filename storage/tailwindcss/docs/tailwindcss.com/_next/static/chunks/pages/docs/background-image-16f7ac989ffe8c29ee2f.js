_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[59],{"2H90":function(e,t){function n(e,t){var n,r,o=e.type,c=e.value;return t&&void 0!==(r=t(e))?r:"word"===o||"space"===o?c:"string"===o?(n=e.quote||"")+c+(e.unclosed?"":n):"comment"===o?"/*"+c+(e.unclosed?"":"*/"):"div"===o?(e.before||"")+c+(e.after||""):Array.isArray(e.nodes)?(n=a(e.nodes,t),"function"!==o?n:c+"("+(e.before||"")+n+(e.after||"")+(e.unclosed?"":")")):c}function a(e,t){var a,r;if(Array.isArray(e)){for(a="",r=e.length-1;~r;r-=1)a=n(e[r],t)+a;return a}return n(e,t)}e.exports=a},"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"6PMm":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t=!1;return(0,r.default)(e).walk(e=>("function"===e.type&&"var"===e.value&&(t=!0),!t)),t};var a,r=(a=n("ejEX"))&&a.__esModule?a:{default:a}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("KQm4"),r=n("rePB"),o=n("q1tI"),c=n.n(o),i=n("98BF"),s=n("Zb5r"),l=n("AOjV"),u=c.a.createElement;function p(e){var t=e.plugin,n=e.name,o=i.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())}));var p=["responsive","hover","focus","active","group-hover"].filter((function(e){return!o.includes(e)})).slice(0,2);return u(c.a.Fragment,null,u("p",null,"By default, ",o.length?"only ".concat(Object(s.a)(o)):"no"," variants are generated for ",n," utilities."),u("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",u("code",null,t)," property in the ",u("code",null,"variants")," section of your"," ",u("code",null,"tailwind.config.js")," file."),u("p",null,"For example, this config will ",o.length>0?"also ":"","generate"," ",Object(s.a)(p)," variants:"),u(l.a,{path:"variants",before:"// ...",remove:Object(r.a)({},t,o),add:Object(r.a)({},t,[].concat(Object(a.a)(o),Object(a.a)(p)))}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),o=n("Btb4"),c=n.n(o),i=n("AI3G"),s=n("iuhU"),l=r.a.createElement;function u(e){var t=e.edits,n=e.indent,r=void 0===n?"":n,o=e.type,i=void 0===o?"inserted":o;return l("span",{className:Object(s.a)("token",{"inserted-sign inserted":"inserted"===i,"deleted-sign deleted":"inserted"!==i})},Object.keys(t).map((function(e,n){return l(a.Fragment,{key:n},l("span",{className:Object(s.a)("token prefix",{inserted:"inserted"===i,deleted:"inserted"!==i})},"inserted"===i?"+":"-")," ",r,/^[a-z_$][a-z0-9_$]*$/i.test(o=e)?o:"'".concat(o,"'"),":"," ",c()(t[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(e,t){return"[".concat(t.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(e,t){return"".concat(0===t?"":"+ "+r).concat(e)})).join("\n"),",\n");var o})))}function p(e){var t=e.path,n=e.add,r=e.remove,o=e.before,c=e.after;return t="string"===typeof t?t.split("."):t,l("pre",{className:"language-diff"},l("code",{className:"language-diff"},l("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",t.map((function(e,t){return l(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,": ","{\n")})),o&&Object(i.a)(o).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")}))),r&&l(u,{edits:r,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&l(u,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),l("span",{className:"token unchanged"},c&&Object(i.a)(c).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,n){return l(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")})),"  }")))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),r=n("p+I8"),o=n("GAX2").default;e.exports=(e,t,n)=>{const c=[];return function e(t,n,i){let s;(n=n||{}).indent=n.indent||"\t",i=i||"",s=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(s.newLine,"g"),"").replace(new RegExp(s.newLineOrSpace,"g")," ").replace(new RegExp(s.pad+"|"+s.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(s.newLine+"|"+s.newLineOrSpace,"g"),"\n").replace(new RegExp(s.pad,"g"),i).replace(new RegExp(s.indent,"g"),i+n.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const a="["+s.newLine+t.map((a,r)=>{const o=t.length-1===r?s.newLine:","+s.newLineOrSpace;let c=e(a,n,i+n.indent);return n.transform&&(c=n.transform(t,r,c)),s.indent+c+o}).join("")+s.pad+"]";return c.pop(),l(a)}if(r(t)){let a=Object.keys(t).concat(o(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";c.push(t);const r="{"+s.newLine+a.map((r,o)=>{const c=a.length-1===o?s.newLine:","+s.newLineOrSpace,l="symbol"===typeof r,u=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(r),p=l||u?r:e(r,n);let d=e(t[r],n,i+n.indent);return n.transform&&(d=n.transform(t,r,d)),s.indent+String(p)+": "+d+c}).join("")+s.pad+"}";return c.pop(),l(r)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},"Ca+n":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("q1tI"),r=n.n(a),o=n("S5AU"),c=n.n(o),i=n("iuhU"),s=r.a.createElement,l=["","sm:","md:","lg:","xl:"];function u(e){var t=e.children,n=e.active,a=e.onClick;return s("button",{type:"button",className:Object(i.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":n,"text-gray-500":!n}),onClick:a},t)}var p=function(e){return'<div class="'.concat(e,'"></div>')};function d(e){var t=e.classNames,n=e.snippet,r=void 0===n?p:n,o=e.preview,d=e.previewClassName,f=Array.isArray(t[0])?t.length:1,g=Object(a.useState)(0),m=g[0],b=g[1];return s("div",{className:"mt-8"},s("div",{className:"flex justify-center"},s("div",{className:"grid grid-cols-5 mb-2 bg-white"},s(u,{active:0===m,onClick:function(){return b(0)}},s("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},s("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),s("p",{className:"text-xs"},"all")),s(u,{active:1===m,onClick:function(){return b(1)}},s("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},s("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),s("p",{className:"text-xs"},"sm")),s(u,{active:2===m,onClick:function(){return b(2)}},s("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},s("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),s("p",{className:"text-xs"},"md")),s(u,{active:3===m,onClick:function(){return b(3)}},s("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},s("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),s("p",{className:"text-xs"},"lg")),s(u,{active:4===m,onClick:function(){return b(4)}},s("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},s("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),s("p",{className:"text-xs"},"xl")))),s("div",{className:"overflow-hidden mb-8"},s("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},s("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},s("code",{className:"inline-block p-4"},c()(r(1===f?"{{CLASSNAMES}}":Array.from({length:f}).map((function(e,t){return"{{CLASSNAMES[".concat(t,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(e,n){if(n%2===1){var a=e.match(/\[([0-9]+)\]/);return(a?t[parseInt(a[1],10)]:t).map((function(e,t){return e?s("span",{key:"".concat(n,"-").concat(t),className:m===t?"text-code-yellow":""},0===t?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(e){return"".concat(l[t]).concat(e)})).join(" ")):null})).filter(Boolean)}return e}))))),s("div",{className:Object(i.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",d,{"p-4":!d})},o(function(e){if(f>1)return t.map((function(t){for(var n=e;n>=0;n--)if(t[n])return t[n].replace(/\(([^)]+)\)/g,"$1")}));for(var n=e;n>=0;n--)if(t[n])return t[n].replace(/\(([^)]+)\)/g,"$1")}(m)))))}},EYah:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-image",function(){return n("xPJo")}])},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},"IBu/":function(e,t,n){"use strict";const a=n("sQdO");e.exports=e=>{const t=a(e);if(0===t)return e;const n=new RegExp(`^[ \\t]{${t}}`,"gm");return e.replace(n,"")}},MkS0:function(e,t){var n="(".charCodeAt(0),a=")".charCodeAt(0),r="'".charCodeAt(0),o='"'.charCodeAt(0),c="\\".charCodeAt(0),i="/".charCodeAt(0),s=",".charCodeAt(0),l=":".charCodeAt(0),u="*".charCodeAt(0),p="u".charCodeAt(0),d="U".charCodeAt(0),f="+".charCodeAt(0),g=/^[a-f0-9?-]+$/i;e.exports=function(e){for(var t,m,b,h,v,O,j,y,w,N=[],x=e,k=0,A=x.charCodeAt(k),C=x.length,_=[{nodes:N}],E=0,I="",S="",L="";k<C;)if(A<=32){t=k;do{t+=1,A=x.charCodeAt(t)}while(A<=32);h=x.slice(k,t),b=N[N.length-1],A===a&&E?L=h:b&&"div"===b.type?b.after=h:A===s||A===l||A===i&&x.charCodeAt(t+1)!==u&&(!w||w&&"function"===w.type&&"calc"!==w.value)?S=h:N.push({type:"space",sourceIndex:k,value:h}),k=t}else if(A===r||A===o){t=k,h={type:"string",sourceIndex:k,quote:m=A===r?"'":'"'};do{if(v=!1,~(t=x.indexOf(m,t+1)))for(O=t;x.charCodeAt(O-1)===c;)O-=1,v=!v;else t=(x+=m).length-1,h.unclosed=!0}while(v);h.value=x.slice(k+1,t),N.push(h),k=t+1,A=x.charCodeAt(k)}else if(A===i&&x.charCodeAt(k+1)===u)h={type:"comment",sourceIndex:k},-1===(t=x.indexOf("*/",k))&&(h.unclosed=!0,t=x.length),h.value=x.slice(k+2,t),N.push(h),k=t+2,A=x.charCodeAt(k);else if(A!==i&&A!==u||!w||"function"!==w.type||"calc"!==w.value)if(A===i||A===s||A===l)h=x[k],N.push({type:"div",sourceIndex:k-S.length,value:h,before:S,after:""}),S="",k+=1,A=x.charCodeAt(k);else if(n===A){t=k;do{t+=1,A=x.charCodeAt(t)}while(A<=32);if(y=k,h={type:"function",sourceIndex:k-I.length,value:I,before:x.slice(y+1,t)},k=t,"url"===I&&A!==r&&A!==o){t-=1;do{if(v=!1,~(t=x.indexOf(")",t+1)))for(O=t;x.charCodeAt(O-1)===c;)O-=1,v=!v;else t=(x+=")").length-1,h.unclosed=!0}while(v);j=t;do{j-=1,A=x.charCodeAt(j)}while(A<=32);y<j?(h.nodes=k!==j+1?[{type:"word",sourceIndex:k,value:x.slice(k,j+1)}]:[],h.unclosed&&j+1!==t?(h.after="",h.nodes.push({type:"space",sourceIndex:j+1,value:x.slice(j+1,t)})):h.after=x.slice(j+1,t)):(h.after="",h.nodes=[]),k=t+1,A=x.charCodeAt(k),N.push(h)}else E+=1,h.after="",N.push(h),_.push(h),N=h.nodes=[],w=h;I=""}else if(a===A&&E)k+=1,A=x.charCodeAt(k),w.after=L,L="",E-=1,_.pop(),N=(w=_[E]).nodes;else{t=k;do{A===c&&(t+=1),t+=1,A=x.charCodeAt(t)}while(t<C&&!(A<=32||A===r||A===o||A===s||A===l||A===i||A===n||A===u&&w&&"function"===w.type&&"calc"===w.value||A===i&&"function"===w.type&&"calc"===w.value||A===a&&E));h=x.slice(k,t),n===A?I=h:p!==h.charCodeAt(0)&&d!==h.charCodeAt(0)||f!==h.charCodeAt(1)||!g.test(h.slice(2))?N.push({type:"word",sourceIndex:k,value:h}):N.push({type:"unicode-range",sourceIndex:k,value:h}),k=t}else h=x[k],N.push({type:"word",sourceIndex:k-S.length,value:h}),k+=1,A=x.charCodeAt(k);for(k=_.length-1;k;k-=1)_[k].unclosed=!0;return _[0].nodes}},P5DM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,e:t,theme:n,variants:o,target:c}){e(a.default.fromPairs(a.default.map(n("backgroundImage"),(e,n)=>"ie11"===c("backgroundImage")&&(0,r.default)(e)?[]:[`.${t(`bg-${n}`)}`,{"background-image":e}])),o("backgroundImage"))}};var a=o(n("LvDl")),r=o(n("6PMm"));function o(e){return e&&e.__esModule?e:{default:e}}},S5AU:function(e,t,n){"use strict";const a=n("IBu/"),r=n("S6im");e.exports=(e,t=0,n)=>r(a(e),t,n)},S6im:function(e,t,n){"use strict";e.exports=(e,t=1,n)=>{if(n={indent:" ",includeEmptyLines:!1,...n},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof t)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if("string"!==typeof n.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``);if(0===t)return e;const a=n.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(a,n.indent.repeat(t))}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((function(t,n,a){return 0===a?n:a===e.length-1?"".concat(t," and ").concat(n):"".concat(t,", ").concat(n)}),"")}n.d(t,"a",(function(){return a}))},ejEX:function(e,t,n){var a=n("MkS0"),r=n("oFEu"),o=n("2H90");function c(e){return this instanceof c?(this.nodes=a(e),this):new c(e)}c.prototype.toString=function(){return Array.isArray(this.nodes)?o(this.nodes):""},c.prototype.walk=function(e,t){return r(this.nodes,e,t),this},c.unit=n("gL++"),c.walk=r,c.stringify=o,e.exports=c},"gL++":function(e,t){var n="-".charCodeAt(0),a="+".charCodeAt(0),r=".".charCodeAt(0),o="e".charCodeAt(0),c="E".charCodeAt(0);e.exports=function(e){var t,i,s,l=0,u=e.length;if(0===u||!function(e){var t,o=e.charCodeAt(0);if(o===a||o===n){if((t=e.charCodeAt(1))>=48&&t<=57)return!0;var c=e.charCodeAt(2);return t===r&&c>=48&&c<=57}return o===r?(t=e.charCodeAt(1))>=48&&t<=57:o>=48&&o<=57}(e))return!1;for((t=e.charCodeAt(l))!==a&&t!==n||l++;l<u&&!((t=e.charCodeAt(l))<48||t>57);)l+=1;if(t=e.charCodeAt(l),i=e.charCodeAt(l+1),t===r&&i>=48&&i<=57)for(l+=2;l<u&&!((t=e.charCodeAt(l))<48||t>57);)l+=1;if(t=e.charCodeAt(l),i=e.charCodeAt(l+1),s=e.charCodeAt(l+2),(t===o||t===c)&&(i>=48&&i<=57||(i===a||i===n)&&s>=48&&s<=57))for(l+=i===a||i===n?3:2;l<u&&!((t=e.charCodeAt(l))<48||t>57);)l+=1;return{number:e.slice(0,l),unit:e.slice(l)}}},oFEu:function(e,t){e.exports=function e(t,n,a){var r,o,c,i;for(r=0,o=t.length;r<o;r+=1)c=t[r],a||(i=n(c,r,t)),!1!==i&&"function"===c.type&&Array.isArray(c.nodes)&&e(c.nodes,n,a),a&&n(c,r,t)}},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a),o=n("iuhU"),c=r.a.createElement;function i(e){var t=e.preview,n=e.snippet,a=e.previewClassName;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(o.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:t}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:n}}))))}},sQdO:function(e,t,n){"use strict";e.exports=e=>{const t=e.match(/^[ \t]*(?=\S)/gm);return t?t.reduce((e,t)=>Math.min(e,t.length),1/0):0}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),r=n("q1tI"),o=n.n(r),c=n("AOjV"),i=n("AI3G"),s=n("Zb5r"),l=o.a.createElement;function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=e.plugin,n=e.name,r=Object(i.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())})),l(o.a.Fragment,null,l("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(s.a)(r.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",r.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(c.a,{path:"corePlugins",before:"// ...",add:r.reduce((function(e,t){return p(p({},e),{},Object(a.a)({},t,!1))}),{})}))}},xPJo:function(e,t,n){"use strict";n.r(t),n.d(t,"Layout",(function(){return v})),n.d(t,"classes",(function(){return O})),n.d(t,"meta",(function(){return j})),n.d(t,"tableOfContents",(function(){return y})),n.d(t,"default",(function(){return x}));var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),c=n.n(o),i=n("7ljp"),s=n("YFqc"),l=n.n(s),u=n("tc9R"),p=n("pOT7"),d=n("vRWG"),f=n("I6Nb"),g=n("P5DM"),m=n.n(g),b=(n("Ca+n"),n("8C7G")),h=n("wH44"),v=(c.a.createElement,d.DocumentationLayout),O={plugin:m.a},j={title:"Background Image",description:"Utilities for controlling an element's background image.",featureVersion:"v1.7.0+"},y=[{title:"Linear gradients",slug:"linear-gradients",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Background Images",slug:"background-images"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],w={Layout:v,classes:O,meta:j,tableOfContents:y},N=f.ContentsLayout;function x(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)(N,Object(a.a)({},w,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)(u.a,{level:2,id:"linear-gradients",toc:!0},"Linear gradients"),Object(i.a)("p",null,"To give an element a linear gradient background, use one of the ",Object(i.a)("inlineCode",{parentName:"p"},"bg-gradient-{direction}")," utilities, in combination with the ",Object(i.a)(l.a,{href:"/docs/gradient-color-stops",passHref:!0},Object(i.a)("a",null,"gradient color stop"))," utilities."),Object(i.a)(p.a,{preview:'\n  <div class="h-24 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"></div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-24 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-8"}),Object(i.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the background image of an element at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing background image utility. For example, use ",Object(i.a)("inlineCode",{parentName:"p"},"md:bg-gradient-to-r")," to apply the ",Object(i.a)("inlineCode",{parentName:"p"},"bg-gradient-to-r")," utility at only medium screen sizes and above."),Object(i.a)("pre",{className:"language-html"},Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-gradient-to-r md:bg-gradient-to-t ...",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(u.a,{level:3,id:"background-images",toc:!0},"Background Images"),Object(i.a)("p",null,"By default Tailwind includes background image utilities for creating linear gradient backgrounds in eight directions."),Object(i.a)("p",null,"You can add your own background images by editing the ",Object(i.a)("inlineCode",{parentName:"p"},"theme.backgroundImage")," section of your ",Object(i.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(i.a)("pre",{className:"language-diff"},Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       backgroundImage: theme => ({\n"),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         'hero-pattern': \"url('/img/hero-pattern.svg')\",\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         'footer-texture': \"url('/img/footer-texture.png')\",\n"),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       })\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(i.a)("p",null,"These don't just have to be gradients \u2014 they can be any background images you need."),Object(i.a)("p",null,"These classes will take the form ",Object(i.a)("inlineCode",{parentName:"p"},"bg-{key}"),", so ",Object(i.a)("inlineCode",{parentName:"p"},"hero-pattern")," will become ",Object(i.a)("inlineCode",{parentName:"p"},"bg-hero-pattern")," for example."),Object(i.a)(u.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(i.a)(b.a,{plugin:"backgroundImage",mdxType:"Variants"}),Object(i.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(i.a)(h.a,{plugin:"backgroundImage",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=w},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"===typeof window&&(n=window)}e.exports=n}},[["EYah",0,2,5,1,3,4]]]);