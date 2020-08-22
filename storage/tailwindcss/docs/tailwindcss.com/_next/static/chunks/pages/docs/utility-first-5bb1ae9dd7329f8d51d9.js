_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[165],{H4wh:function(n,a,s){"use strict";s.r(a),s.d(a,"Layout",(function(){return g})),s.d(a,"meta",(function(){return b})),s.d(a,"tableOfContents",(function(){return h})),s.d(a,"default",(function(){return v}));var t=s("wx14"),e=s("Ff2n"),p=s("q1tI"),o=s.n(p),l=s("7ljp"),c=s("YFqc"),i=s.n(c),u=s("tc9R"),r=s("pOT7"),k=s("vRWG"),d=s("I6Nb"),m=s("UyA5"),g=(o.a.createElement,k.DocumentationLayout),b={title:"Utility-First",description:"Building complex components from a constrained set of primitive utilities."},h=[{title:"Overview",slug:"overview",children:[]},{title:"Why not just use inline styles?",slug:"why-not-just-use-inline-styles",children:[]},{title:"Maintainability concerns",slug:"maintainability-concerns",children:[]}],f={Layout:g,meta:b,tableOfContents:h},y=d.ContentsLayout;function v(n){var a=n.components,s=Object(e.a)(n,["components"]);return Object(l.a)(y,Object(t.a)({},f,s,{components:a,mdxType:"MDXLayout"}),Object(l.a)(u.a,{level:2,id:"overview",toc:!0,hidden:!0,mdxType:"Heading"},"Overview"),Object(l.a)("p",null,"Traditionally, whenever you need to style something on the web, you write CSS."),Object(l.a)(m.a,{mdxType:"TipBad"},"Using a traditional approach where custom designs require custom CSS"),Object(l.a)(r.a,{preview:'\n  <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">\n    <div class="flex-shrink-0">\n      <svg class="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#2397B3" offset="0%"/><stop stop-color="#13577E" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#73DFF2" offset="0%"/><stop stop-color="#47B1EB" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"/><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"/><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"/></g></svg>\n    </div>\n    <div class="ml-6 pt-1">\n      <div class="text-xl text-gray-900 leading-tight">ChitChat</div>\n      <p class="text-base text-gray-600 leading-normal">You have a new message!</p>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chat-notification<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chat-notification-logo-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chat-notification-logo<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/img/logo.svg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ChitChat Logo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chat-notification-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chat-notification-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>ChitChat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chat-notification-message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>You have a new message!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector"><span class="token class">.chat-notification</span></span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n    <span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token number">24</span><span class="token unit">rem</span><span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">1.5</span><span class="token unit">rem</span><span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token unit">rem</span><span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode color">#fff</span><span class="token punctuation">;</span>\n    <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">20</span><span class="token unit">px</span> <span class="token number">25</span><span class="token unit">px</span> <span class="token number">-5</span><span class="token unit">px</span> <span class="token color"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">-5</span><span class="token unit">px</span> <span class="token color"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.04</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.chat-notification-logo-wrapper</span></span> <span class="token punctuation">{</span>\n    <span class="token property">flex-shrink</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.chat-notification-logo</span></span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token unit">rem</span><span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token unit">rem</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.chat-notification-content</span></span> <span class="token punctuation">{</span>\n    <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">1.5</span><span class="token unit">rem</span><span class="token punctuation">;</span>\n    <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token number">0.25</span><span class="token unit">rem</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.chat-notification-title</span></span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode color">#1a202c</span><span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">1.25</span><span class="token unit">rem</span><span class="token punctuation">;</span>\n    <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">1.25</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.chat-notification-message</span></span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode color">#718096</span><span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token unit">rem</span><span class="token punctuation">;</span>\n    <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">1.5</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>',previewClassName:"bg-gray-200 px-8 py-12"}),Object(l.a)("p",null,"With Tailwind, you style elements by applying pre-existing classes directly in your HTML."),Object(l.a)(m.c,{mdxType:"TipGood"},"Using utility classes to build custom designs without writing CSS"),Object(l.a)(r.a,{preview:'\n  <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">\n    <div class="flex-shrink-0">\n      <svg class="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#2397B3" offset="0%"/><stop stop-color="#13577E" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#73DFF2" offset="0%"/><stop stop-color="#47B1EB" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"/><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"/><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"/></g></svg>\n    </div>\n    <div class="ml-6 pt-1">\n      <div class="text-xl text-gray-900 leading-tight">ChitChat</div>\n      <p class="text-base text-gray-600 leading-normal">You have a new message!</p>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-shrink-0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-12 w-12<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/img/logo.svg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ChitChat Logo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml-6 pt-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-xl text-gray-900 leading-tight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>ChitChat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-base text-gray-600 leading-normal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>You have a new message!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"bg-gray-200 px-8 py-12"}),Object(l.a)("p",null,"In the example above, we've used:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Tailwind's ",Object(l.a)(i.a,{href:"/docs/display#flex",passHref:!0},Object(l.a)("a",null,"flexbox"))," and ",Object(l.a)(i.a,{href:"/docs/padding",passHref:!0},Object(l.a)("a",null,"padding"))," utilities (",Object(l.a)("inlineCode",{parentName:"li"},"flex"),", ",Object(l.a)("inlineCode",{parentName:"li"},"flex-shrink-0"),", and ",Object(l.a)("inlineCode",{parentName:"li"},"p-6"),") to control the overall card layout"),Object(l.a)("li",{parentName:"ul"},"The ",Object(l.a)(i.a,{href:"/docs/max-width",passHref:!0},Object(l.a)("a",null,"max-width"))," and ",Object(l.a)(i.a,{href:"/docs/margin",passHref:!0},Object(l.a)("a",null,"margin"))," utilities (",Object(l.a)("inlineCode",{parentName:"li"},"max-w-sm")," and ",Object(l.a)("inlineCode",{parentName:"li"},"mx-auto"),") to constrain the card width and center it horizontally"),Object(l.a)("li",{parentName:"ul"},"The ",Object(l.a)(i.a,{href:"/docs/background-color",passHref:!0},Object(l.a)("a",null,"background color")),", ",Object(l.a)(i.a,{href:"/docs/border-radius",passHref:!0},Object(l.a)("a",null,"border radius")),", and ",Object(l.a)(i.a,{href:"/docs/box-shadow",passHref:!0},Object(l.a)("a",null,"box-shadow"))," utilities (",Object(l.a)("inlineCode",{parentName:"li"},"bg-white"),", ",Object(l.a)("inlineCode",{parentName:"li"},"rounded-lg"),", and ",Object(l.a)("inlineCode",{parentName:"li"},"shadow-xl"),") to style the card's appearance"),Object(l.a)("li",{parentName:"ul"},"The ",Object(l.a)(i.a,{href:"/docs/width",passHref:!0},Object(l.a)("a",null,"width"))," and ",Object(l.a)(i.a,{href:"/docs/height",passHref:!0},Object(l.a)("a",null,"height"))," utilities (",Object(l.a)("inlineCode",{parentName:"li"},"w-12")," and ",Object(l.a)("inlineCode",{parentName:"li"},"h-12"),") to size the logo image"),Object(l.a)("li",{parentName:"ul"},"The ",Object(l.a)(i.a,{href:"/docs/margin",passHref:!0},Object(l.a)("a",null,"margin"))," and ",Object(l.a)(i.a,{href:"/docs/padding",passHref:!0},Object(l.a)("a",null,"padding"))," utilities (",Object(l.a)("inlineCode",{parentName:"li"},"ml-6")," and ",Object(l.a)("inlineCode",{parentName:"li"},"pt-1"),") to position the card text"),Object(l.a)("li",{parentName:"ul"},"The ",Object(l.a)(i.a,{href:"/docs/font-size",passHref:!0},Object(l.a)("a",null,"font size")),", ",Object(l.a)(i.a,{href:"/docs/text-color",passHref:!0},Object(l.a)("a",null,"text color")),", and ",Object(l.a)(i.a,{href:"/docs/line-height",passHref:!0},Object(l.a)("a",null,"line-height"))," utilities (",Object(l.a)("inlineCode",{parentName:"li"},"text-xl"),", ",Object(l.a)("inlineCode",{parentName:"li"},"text-gray-900"),", ",Object(l.a)("inlineCode",{parentName:"li"},"leading-tight"),", etc.) to style the card text")),Object(l.a)("p",null,"...allowing us to implement a completely custom component design, without writing a single line of custom CSS."),Object(l.a)("p",null,"Now I know what you're thinking, ",Object(l.a)("em",{parentName:"p"},'"this is an atrocity, what a horrible mess!"')," and you're right, it's kind of ugly. In fact it's just about impossible to think this is a good idea the first time you see it \u2014 ",Object(l.a)("strong",{parentName:"p"},"you have to actually try it"),"."),Object(l.a)("p",null,"But once you've actually built something this way, you'll quickly notice some really important benefits:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("strong",{parentName:"li"},"You aren't wasting energy inventing class names"),". No more adding silly class names like ",Object(l.a)("inlineCode",{parentName:"li"},"sidebar-inner-wrapper")," just to be able to style something, and no more agonizing over the perfect abstract name for something that's really just a flex container."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("strong",{parentName:"li"},"Your CSS stops growing"),". Using a traditional approach, your CSS files get bigger every time you add a new feature. With utilities, everything is reusable so you rarely need to write new CSS."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("strong",{parentName:"li"},"Making changes feels safer"),". CSS is global and you never know what you're breaking when you make a change. Classes in your HTML are local, so you can change them without worrying about something else breaking.")),Object(l.a)("p",null,"When you realize how productive you can be working exclusively in HTML with predefined utility classes, working any other way will feel like torture."),Object(l.a)("hr",null),Object(l.a)(u.a,{level:2,id:"why-not-just-use-inline-styles",toc:!0},"Why not just use inline styles?"),Object(l.a)("p",null,"A common reaction to this approach is wondering, \"isn't this just inline styles?\" and in some ways it is \u2014 you're applying styles directly to elements instead of assigning them a class name and then styling that class."),Object(l.a)("p",null,"But using utility classes has a few important advantages over inline styles:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("strong",{parentName:"li"},"Designing with constraints"),". Using inline styles, every value is a magic number. With utilities, you're choosing styles from a predefined ",Object(l.a)(i.a,{href:"/docs/theme",passHref:!0},Object(l.a)("a",null,"design system")),", which makes it much easier to build visually consistent UIs."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("strong",{parentName:"li"},"Responsive design"),". You can't use media queries in inline styles, but you can use Tailwind's ",Object(l.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(l.a)("a",null,"responsive utilities"))," to build fully responsive interfaces easily."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("strong",{parentName:"li"},"Pseudo-classes"),". Inline styles can't target states like hover or focus, but Tailwind's ",Object(l.a)(i.a,{href:"/docs/pseudo-class-variants",passHref:!0},Object(l.a)("a",null,"pseudo-class variants"))," make it easy to style those states with utility classes.")),Object(l.a)("p",null,"This component is fully responsive and includes a button with hover styles, and is built entirely with utility classes:"),Object(l.a)(r.a,{preview:'\n  <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">\n    <div class="sm:flex sm:items-center px-6 py-4">\n      <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src="/img/erin-lindford.jpg" alt="Woman\'s Face">\n      <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">\n        <p class="text-xl leading-tight">Erin Lindford</p>\n        <p class="text-sm leading-tight text-gray-600">Product Engineer</p>\n        <div class="mt-4">\n          <button class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Message</button>\n        </div>\n      </div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sm:flex sm:items-center px-6 py-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/img/erin-lindford.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Woman\'s Face<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-xl leading-tight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Erin Lindford<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-sm leading-tight text-gray-600<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Product Engineer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mt-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-8 bg-gray-200"}),Object(l.a)("hr",null),Object(l.a)(u.a,{level:2,id:"maintainability-concerns",toc:!0},"Maintainability concerns"),Object(l.a)("p",null,"The biggest maintainability concern when using a utility-first approach is managing commonly repeated utility combinations."),Object(l.a)("p",null,"This is easily solved by ",Object(l.a)(i.a,{href:"/docs/extracting-components",passHref:!0},Object(l.a)("a",null,"extracting components")),", either as template partials/JavaScript components, or using Tailwind's ",Object(l.a)("inlineCode",{parentName:"p"},"@apply")," feature to create abstractions around common utility patterns."),Object(l.a)(r.a,{preview:'\n  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">\n    Button\n  </button>\n',snippet:'<span class="token comment">&lt;!-- Using utilities --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Button\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Extracting classes using @apply --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Button\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector"><span class="token class">.btn</span></span> <span class="token punctuation">{</span>\n    <span class="token atrule"><span class="token rule">@apply</span> font-bold py-2 px-4 rounded<span class="token punctuation">;</span></span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.btn-blue</span></span> <span class="token punctuation">{</span>\n    <span class="token atrule"><span class="token rule">@apply</span> bg-<span class="token color">blue</span><span class="token number">-500</span> text-<span class="token color">white</span><span class="token punctuation">;</span></span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.btn-blue</span><span class="token pseudo-class">:hover</span></span> <span class="token punctuation">{</span>\n    <span class="token atrule"><span class="token rule">@apply</span> bg-<span class="token color">blue</span><span class="token number">-700</span><span class="token punctuation">;</span></span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>',previewClassName:"p-4 text-center"}),Object(l.a)("p",null,"Aside from that, maintaining a utility-first CSS project turns out to be a lot easier than maintaining a large CSS codebase, simply because HTML is so much easier to maintain than CSS. Large companies like GitHub, Heroku, Kickstarter, Twitch, Segment, and more are using this approach with great success."),Object(l.a)("p",null,"If you'd like to hear about others' experiences with this approach, check out the following resources:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(t.a)({parentName:"li"},{href:"https://medium.com/@johnpolacek/by-the-numbers-a-year-and-half-with-atomic-css-39d75b1263b4"}),"By The Numbers: A Year and a Half with Atomic CSS")," by John Polacek"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(t.a)({parentName:"li"},{href:"https://blog.algolia.com/redesigning-our-docs-part-4-building-a-scalable-css-architecture/"}),"Building a Scalable CSS Architecture")," by Sarah Dayan of Algolia"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(t.a)({parentName:"li"},{href:"http://www.fullstackradio.com/75"}),"Diana Mounter on using utility classes at GitHub"),", a podcast interview")),Object(l.a)("p",null,"For even more, check out ",Object(l.a)("a",Object(t.a)({parentName:"p"},{href:"https://johnpolacek.github.io/the-case-for-atomic-css/"}),"The Case for Atomic/Utility-First CSS"),", curated by ",Object(l.a)("a",Object(t.a)({parentName:"p"},{href:"https://twitter.com/johnpolacek"}),"John Polacek"),"."))}v.isMDXComponent=!0,v.layoutProps=f},UyA5:function(n,a,s){"use strict";s.d(a,"c",(function(){return p})),s.d(a,"a",(function(){return o})),s.d(a,"b",(function(){return l}));var t=s("q1tI"),e=s.n(t).a.createElement;function p(n){var a=n.children;return e("p",{className:"flex items-start mt-8 mb-0"},e("svg",{className:"h-6 w-6 mr-2 flex-shrink-0",viewBox:"0 0 24 24"},e("circle",{className:"text-green-200 fill-current",cx:"12",cy:"12",r:"10"}),e("path",{className:"text-green-600 fill-current",d:"M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"})),e("strong",{className:"text-base font-semibold text-gray-800"},a))}function o(n){var a=n.children;return e("p",{className:"flex items-start mt-8 mb-0"},e("svg",{className:"h-6 w-6 mr-2 flex-shrink-0",viewBox:"0 0 24 24"},e("circle",{cx:"12",cy:"12",r:"10",fill:"#fed7d7"}),e("path",{fill:"#f56565",d:"M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"})),e("strong",{className:"text-base font-semibold text-gray-800"},a))}function l(n){var a=n.children;return e("div",{className:"text-sm bg-blue-100 text-blue-700 font-semi-bold px-4 py-2 mb-4 rounded"},e("div",{className:"flex items-center"},e("div",{className:"mr-2"},e("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"block text-blue-400 h-5 w-5"},e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.432 15C14.387 9.893 12 8.547 12 6V3h.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H8v3c0 2.547-2.387 3.893-4.432 9-.651 1.625-2.323 4 6.432 4s7.083-2.375 6.432-4zm-1.617 1.751c-.702.21-2.099.449-4.815.449s-4.113-.239-4.815-.449c-.249-.074-.346-.363-.258-.628.22-.67.635-1.828 1.411-3.121 1.896-3.159 3.863.497 5.5.497s1.188-1.561 1.824-.497a15.353 15.353 0 0 1 1.411 3.121c.088.265-.009.553-.258.628z"}))),e("div",null,e("p",{className:"font-semibold"},a))))}},iQvD:function(n,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/utility-first",function(){return s("H4wh")}])},pOT7:function(n,a,s){"use strict";s.d(a,"a",(function(){return l}));var t=s("q1tI"),e=s.n(t),p=s("iuhU"),o=e.a.createElement;function l(n){var a=n.preview,s=n.snippet,t=n.previewClassName;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(p.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",t,{"p-4":!t}),dangerouslySetInnerHTML:{__html:a}}),o("div",{className:"rounded-b-lg bg-gray-800"},o("pre",{className:"scrollbar-none m-0 p-0 language-html"},o("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:s}}))))}}},[["iQvD",0,2,1,3,4]]]);