_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[126],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var s=t("rePB"),n=t("q1tI"),l=t.n(n),i=t("98BF"),o=t("Zb5r"),c=t("AOjV"),u=l.a.createElement;function r(e){var a=e.plugin,t=e.name,n=i.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var l=["responsive","hover","focus","active","group-hover"].filter((function(e){return!n.includes(e)})).slice(0,2),r="By default, ".concat(n.length?"only ".concat(Object(o.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return u("div",{className:"prose"},u("p",{dangerouslySetInnerHTML:{__html:r}}),u("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",u("code",null,a)," property in the ",u("code",null,"variants")," section of your"," ",u("code",null,"tailwind.config.js")," file."),u("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(o.a)(l)," variants:"),u(c.a,{path:"variants.extend",before:"...",add:Object(s.a)({},a,l)}))}},Zb5r:function(e,a,t){"use strict";function s(e){return e.reduce((function(a,t,s){return 0===s?t:s===e.length-1?"".concat(a," and ").concat(t):"".concat(a,", ").concat(t)}),"")}t.d(a,"a",(function(){return s}))},a6DA:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var s=t("wx14"),n=t("Ff2n"),l=t("q1tI"),i=t.n(l),o=t("7ljp"),c=t("YFqc"),u=t.n(c),r=t("tc9R"),p=t("pOT7"),d=t("vRWG"),m=t("I6Nb"),g=t("vCUu"),v=t.n(g),b=t("8C7G"),f=t("wH44"),h=(i.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:v.a},meta:{title:"Overflow",description:"Utilities for controlling how an element handles content that is too large for the container.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Visible",slug:"visible",children:[]},{title:"Auto",slug:"auto",children:[]},{title:"Hidden",slug:"hidden",children:[]},{title:"Scroll horizontally if needed",slug:"scroll-horizontally-if-needed",children:[]},{title:"Scroll vertically if needed",slug:"scroll-vertically-if-needed",children:[]},{title:"Scroll horizontally always",slug:"scroll-horizontally-always",children:[]},{title:"Scroll vertically always",slug:"scroll-vertically-always",children:[]},{title:"Scroll in all directions",slug:"scroll-in-all-directions",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),w=m.ContentsLayout;function j(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(o.a)(w,Object(s.a)({},h,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"visible",toc:!0},"Visible"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-visible")," to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.")),Object(o.a)(p.a,{preview:'\n  <div class="h-32 overflow-hidden">\n    <div class="overflow-visible h-24 px-6 py-2 rounded-md bg-light-blue-200">\n      <p class="md:w-2/3 lg:w-1/2 font-flow leading-5 text-light-blue-700">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget\n      </p>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-visible</span> h-24 h- ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"auto",toc:!0},"Auto"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-auto")," to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike ",Object(o.a)("inlineCode",{parentName:"p"},".overflow-scroll"),", which always shows scrollbars, this utility will only show them if scrolling is necessary.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-auto h-32 rounded-md bg-rose-200">\n    <p class="font-flow leading-5 text-rose-700 px-6 py-4">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.\n    </p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-auto</span> h-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"hidden",toc:!0},"Hidden"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-hidden")," to clip any content within an element that overflows the bounds of that element.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-hidden h-32 rounded-md bg-purple-200">\n    <p class="font-flow leading-5 text-purple-700 px-6 py-4">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.\n    </p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-hidden</span> h-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"scroll-horizontally-if-needed",toc:!0},"Scroll horizontally if needed"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-x-auto")," to allow horizontal scrolling if needed.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-x-auto rounded-md bg-fuchsia-200">\n    <p class="text-fuchsia-500 font-medium px-6 py-4">\n      QrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6qXHsuL6fOmHo4KKMurZuJZrK3plRPUaI8XVciz8dVq5CEUXjMrTcB76H1w90CnkRER3nYjs3suTa3223xs8aL97m0peQfjlvKbF8HcmQG5mHEitCn1QZnbMZUK3zE9AIjwcVXP7R9V4fw2A93cZD7wj333X6aaiHZdkkTPtst0u05KSob5c0ZuKQi4D3V395NfFKKr8cR27jmpB7dqK2GiWXeOQUFcjmFVwlHWSlH8ZdUoVJpXf1xL6CRUxwZP4EhBbqQZaJm26ijWII6LRxJ5eVU9Y7KKvQsUeX5BawtgeMWRmjeCwQadTLTQG8gLpi2DvGpMtPWCdqHgEglVSB1ZlDrjEEsXYrNx1IOY0053K3pWNaR1ezyz8kahRfNs3byaHcIQu9tWTrcMpBWhZ45DzLjVV1N8Zt96uLnNWK5DvbKW8GgMuwY7fHkZFz85MN4d2gL0j85HmXGx9oPTFRkPWsmMOHUvm5IhB7QqGSAwT1uL7HgBrNX9a1BAWrp9zV1IWAd1q65sKOOCxTZrXJDpxBxYE4rJAGU6pcri9mUf4g49ZiIAwfu9njtZyYimmImCa6TFhk2jQcSmFDHacExxqC2BfYATHFrKSy94dbw6uWT52nM7MSM9JDu4cs9cbfnaf6amt4hTUotCTONg604b8JKPI1sfd4CG36fBNcnErhpllfRlXkY1xFwmwZT7IJV8okPGNQdTKpdPJOBGw3LHMKojPJl1nPiQB5C9bdePFMNLejSXY5DDvO70ehOCJpBtKZY2quoFJJjGfXe8T4DuGYGmM6JYd5DNinWZuUWXGvfIlJRHgf8BQNQvtmEzqGXIeQZitiq9F\n    </p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-x-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>QrLmmW69vMQD...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"scroll-vertically-if-needed",toc:!0},"Scroll vertically if needed"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-y-auto")," to allow vertical scrolling if needed.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-y-auto h-32 rounded-md bg-amber-200">\n    <p class="font-flow leading-5 text-amber-700 px-6 py-4">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.\n    </p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-y-auto</span> h-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"scroll-horizontally-always",toc:!0},"Scroll horizontally always"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-x-scroll")," to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-x-scroll rounded-md bg-emerald-200">\n    <p class="text-emerald-500 font-medium px-6 py-4">\n      QrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6qXHsuL6fOmHo4KKMurZuJZrK3plRPUaI8XVciz8dVq5CEUXjMrTcB76H1w90CnkRER3nYjs3suTa3223xs8aL97m0peQfjlvKbF8HcmQG5mHEitCn1QZnbMZUK3zE9AIjwcVXP7R9V4fw2A93cZD7wj333X6aaiHZdkkTPtst0u05KSob5c0ZuKQi4D3V395NfFKKr8cR27jmpB7dqK2GiWXeOQUFcjmFVwlHWSlH8ZdUoVJpXf1xL6CRUxwZP4EhBbqQZaJm26ijWII6LRxJ5eVU9Y7KKvQsUeX5BawtgeMWRmjeCwQadTLTQG8gLpi2DvGpMtPWCdqHgEglVSB1ZlDrjEEsXYrNx1IOY0053K3pWNaR1ezyz8kahRfNs3byaHcIQu9tWTrcMpBWhZ45DzLjVV1N8Zt96uLnNWK5DvbKW8GgMuwY7fHkZFz85MN4d2gL0j85HmXGx9oPTFRkPWsmMOHUvm5IhB7QqGSAwT1uL7HgBrNX9a1BAWrp9zV1IWAd1q65sKOOCxTZrXJDpxBxYE4rJAGU6pcri9mUf4g49ZiIAwfu9njtZyYimmImCa6TFhk2jQcSmFDHacExxqC2BfYATHFrKSy94dbw6uWT52nM7MSM9JDu4cs9cbfnaf6amt4hTUotCTONg604b8JKPI1sfd4CG36fBNcnErhpllfRlXkY1xFwmwZT7IJV8okPGNQdTKpdPJOBGw3LHMKojPJl1nPiQB5C9bdePFMNLejSXY5DDvO70ehOCJpBtKZY2quoFJJjGfXe8T4DuGYGmM6JYd5DNinWZuUWXGvfIlJRHgf8BQNQvtmEzqGXIeQZitiq9F\n    </p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-x-scroll</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>QrLmmW69vMQD...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"scroll-vertically-always",toc:!0},"Scroll vertically always"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-y-scroll")," to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-y-scroll h-32 rounded-md bg-light-blue-200">\n    <p class="font-flow leading-5 text-light-blue-700 px-6 py-4">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.\n    </p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-y-scroll</span> h-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"scroll-in-all-directions",toc:!0},"Scroll in all directions"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-scroll")," to add scrollbars to an element. Unlike ",Object(o.a)("inlineCode",{parentName:"p"},".overflow-auto"),", which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-scroll h-32 rounded-md bg-fuchsia-200">\n    <p class="font-flow leading-5 text-fuchsia-700 px-6 py-4">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. QrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.\n    </p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-scroll</span> h-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To apply an overflow utility only at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to the existing class name. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:overflow-scroll")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-scroll")," utility at medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(s.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),'"'),"overflow-auto ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:overflow-scroll")," ...",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  Lorem ipsum dolor sit amet...\n",Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(u.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(b.a,{plugin:"overflow",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(f.a,{plugin:"overflow",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=h},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var s=t("q1tI"),n=t.n(s),l=t("iuhU"),i=n.a.createElement,o={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},c={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function u(e){var a=e.preview,t=e.snippet,s=e.previewClassName,n=e.color,u=void 0===n?"gray":n;return i("div",{className:"relative overflow-hidden mb-8"},i("div",{className:Object(l.a)("rounded-t-xl overflow-hidden",c[u],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}),i("div",{className:Object(l.a)("overflow-hidden rounded-b-xl",o[u],{"bg-gray-800":!o[u]})},i("pre",{className:Object(l.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":o[u]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}}))))}},vCUu:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,variants:a}){e({".overflow-auto":{overflow:"auto"},".overflow-hidden":{overflow:"hidden"},".overflow-visible":{overflow:"visible"},".overflow-scroll":{overflow:"scroll"},".overflow-x-auto":{"overflow-x":"auto"},".overflow-y-auto":{"overflow-y":"auto"},".overflow-x-hidden":{"overflow-x":"hidden"},".overflow-y-hidden":{"overflow-y":"hidden"},".overflow-x-visible":{"overflow-x":"visible"},".overflow-y-visible":{"overflow-y":"visible"},".overflow-x-scroll":{"overflow-x":"scroll"},".overflow-y-scroll":{"overflow-y":"scroll"}},a("overflow"))}}},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var s=t("rePB"),n=t("q1tI"),l=t.n(n),i=t("AOjV"),o=t("AI3G"),c=t("Zb5r"),u=l.a.createElement;function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e){var a=e.plugin,t=e.name,n=Object(o.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())})),u("div",{className:"prose"},u("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",u("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(n.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",n.length>1?"properties":"property"," to ",u("code",null,"false")," in the"," ",u("code",null,"corePlugins")," section of your config file:"),u(i.a,{path:"corePlugins",before:"...",add:n.reduce((function(e,a){return p(p({},e),{},Object(s.a)({},a,!1))}),{})}))}},z34y:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/overflow",function(){return t("a6DA")}])}},[["z34y",0,2,1,3,4,5,6]]]);