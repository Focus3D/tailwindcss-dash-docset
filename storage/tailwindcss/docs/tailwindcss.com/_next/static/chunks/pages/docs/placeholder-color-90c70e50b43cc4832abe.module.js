(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[128],{"1Nmd":function(a,e,n){"use strict";n.r(e),n.d(e,"Layout",(function(){return f})),n.d(e,"classes",(function(){return O})),n.d(e,"meta",(function(){return y})),n.d(e,"tableOfContents",(function(){return x})),n.d(e,"default",(function(){return w}));var t=n("wx14"),s=n("Ff2n"),o=n("q1tI"),p=n.n(o),c=n("7ljp"),l=n("YFqc"),r=n.n(l),i=n("tc9R"),u=n("pOT7"),d=n("vRWG"),m=n("I6Nb"),b=n("2YpA"),k=n.n(b),h=n("8C7G"),g=n("wH44"),j=n("Ca+n"),f=(p.a.createElement,d.DocumentationLayout),O={plugin:k(),filterProperties:(a,e)=>!a.includes("--")&&!e.includes("--"),transformSelector:a=>Object(c.a)(p.a.Fragment,null,a.split("::")[0].trim(),Object(c.a)("span",{className:"text-gray-500"},"::placeholder")),preview:(a,e)=>{var{className:n}=e;return Object(c.a)("td",{className:"w-16 font-medium text-base whitespace-no-wrap ".concat(n),style:{color:Array.isArray(a.color)?a.color[0]:a.color}},"Aa")}},y={title:"Placeholder Color",description:"Utilities for controlling the color of placeholder text.",featureVersion:"v1.1.0+"},x=[{title:"Usage",slug:"usage",children:[{title:"Changing opacity",slug:"changing-opacity"}]},{title:"Responsive",slug:"responsive",children:[]},{title:"Focus",slug:"focus",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Placeholder Colors",slug:"placeholder-colors"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],N={Layout:f,classes:O,meta:y,tableOfContents:x},v=m.ContentsLayout;function w(a){var{components:e}=a,n=Object(s.a)(a,["components"]);return Object(c.a)(v,Object(t.a)({},N,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(i.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Control the placeholder color of an element using the ",Object(c.a)("inlineCode",{parentName:"p"},".placeholder-{color}")," utilities."),Object(c.a)(u.a,{preview:'\n  <div class="max-w-xs">\n    <input class="block appearance-none placeholder-gray-500 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">\n    <input class="mt-4 block appearance-none placeholder-red-300 border border-red-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-gray-500 border<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-red-300 border border-red-400<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:"text-center p-6"}),Object(c.a)(i.a,{level:3,id:"changing-opacity",toc:!0,badge:"v1.4.0+",mdxType:"Heading"},"Changing opacity"),Object(c.a)("p",null,"Control the opacity of an element's placeholder color using the ",Object(c.a)("inlineCode",{parentName:"p"},".placeholder-opacity-{amount}")," utilities."),Object(c.a)(u.a,{preview:'\n  <div class="space-y-4">\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">\n    </div>\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-75 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">\n    </div>\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">\n    </div>\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-25 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">\n    </div>\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-0 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-gray-500 placeholder-opacity-100 ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-gray-500 placeholder-opacity-75 ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-gray-500 placeholder-opacity-50 ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-gray-500 placeholder-opacity-25 ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-gray-500 placeholder-opacity-0 ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)("p",null,"Learn more in the ",Object(c.a)(r.a,{href:"/docs/placeholder-opacity",passHref:!0},Object(c.a)("a",null,"placeholder opacity documentation")),"."),Object(c.a)(i.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control the text color of an element at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing text color utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:text-green-600")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"text-green-600")," utility at only medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(j.a,{classNames:["placeholder-gray-500","placeholder-red-400","placeholder-blue-400","placeholder-green-400","placeholder-orange-400"],snippet:a=>'\n    <input class="'.concat(a,'" placeholder="jane@example.com">\n  '),previewClassName:"text-center p-4",preview:a=>Object(c.a)("div",{className:"max-w-xs mx-auto"},Object(c.a)("input",{className:"block appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ".concat(a),placeholder:"jane@example.com"})),mdxType:"ResponsiveCodeSample"}),Object(c.a)(i.a,{level:2,id:"focus",toc:!0},"Focus"),Object(c.a)("p",null,"To control the placeholder color of an element on focus, add the ",Object(c.a)("inlineCode",{parentName:"p"},"focus:")," prefix to any existing placeholder color utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"focus:placeholder-blue-600")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"placeholder-blue-600")," utility on focus."),Object(c.a)(u.a,{preview:'\n  <div class="max-w-xs mx-auto">\n    <input class="block appearance-none bg-gray-200 placeholder-gray-600 border border-transparent focus:border-gray-300 focus:bg-white focus:placeholder-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" placeholder="jane@example.com">\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-gray-600 focus:placeholder-gray-500 ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:"text-center p-6"}),Object(c.a)("p",null,"Focus utilities can also be combined with responsive utilities by adding the responsive ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(c.a)("em",{parentName:"p"},"before")," the ",Object(c.a)("inlineCode",{parentName:"p"},"focus:")," prefix."),Object(c.a)("pre",{className:"language-html"},Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:placeholder-gray-900 md:focus:placeholder-red-600 ...",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(c.a)(i.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(i.a,{level:3,id:"placeholder-colors",toc:!0},"Placeholder Colors"),Object(c.a)("p",null,"By default Tailwind makes the entire ",Object(c.a)(r.a,{href:"/docs/customizing-colors#default-color-palette",passHref:!0},Object(c.a)("a",null,"default color palette"))," available as placeholder colors."),Object(c.a)("p",null,"You can ",Object(c.a)(r.a,{href:"/docs/colors#customizing",passHref:!0},Object(c.a)("a",null,"customize your color palette"))," by editing ",Object(c.a)("inlineCode",{parentName:"p"},"theme.colors")," in your ",Object(c.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, or customize just your placeholder colors in the ",Object(c.a)("inlineCode",{parentName:"p"},"theme.textColor")," section."),Object(c.a)("pre",{className:"language-diff"},Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"     placeholderColor: theme => theme('colors'),\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     placeholderColor: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'primary': '#3490dc',\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'secondary': '#ffed4a',\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'danger': '#e3342f',\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     }\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(c.a)(i.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(h.a,{plugin:"placeholderColor",mdxType:"Variants"}),Object(c.a)(i.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(g.a,{plugin:"placeholderColor",mdxType:"Disabling"}))}w.isMDXComponent=!0,w.layoutProps=N},"2YpA":function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,e:e,theme:n,variants:p,target:c,corePlugins:l}){const r=(0,s.default)(n("placeholderColor")),i=a=>"ie11"===c("placeholderColor")?{color:a}:l("placeholderOpacity")?(0,o.default)({color:a,property:"color",variable:"--placeholder-opacity"}):{color:a};a(t.default.fromPairs(t.default.map(r,(a,n)=>[`.${e(`placeholder-${n}`)}::placeholder`,i(a)])),p("placeholderColor"))}};var t=p(n("LvDl")),s=p(n("9Jru")),o=p(n("kFV+"));function p(a){return a&&a.__esModule?a:{default:a}}},"k2+i":function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/placeholder-color",function(){return n("1Nmd")}])}},[["k2+i",0,2,5,1,3,4,9]]]);