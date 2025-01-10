"use strict";(self.webpackChunkuse_docusaurus_github_io=self.webpackChunkuse_docusaurus_github_io||[]).push([[7532],{7972:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"permalink":"/blog/css-grid-responsive-layouts","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-12-28-css-grid-responsive-layouts.mdx","source":"@site/blog/2024-12-28-css-grid-responsive-layouts.mdx","title":"Building Responsive Layouts with CSS Grid","description":"Master CSS Grid to create modern, responsive web layouts with less code","date":"2024-12-28T00:00:00.000Z","tags":[{"inline":true,"label":"css","permalink":"/blog/tags/css"},{"inline":true,"label":"web-design","permalink":"/blog/tags/web-design"},{"inline":true,"label":"responsive-design","permalink":"/blog/tags/responsive-design"},{"inline":true,"label":"frontend","permalink":"/blog/tags/frontend"}],"readingTime":0.795,"hasTruncateMarker":true,"authors":[{"name":"Rajiv I\'m","title":"Engineer @ UseDocu","url":"https://github.com/rjvim","page":{"permalink":"/blog/authors/rjvim"},"socials":{"x":"https://x.com/rjv_im","github":"https://github.com/rjvim"},"imageURL":"https://github.com/rjvim.png","key":"rjvim"}],"frontMatter":{"slug":"css-grid-responsive-layouts","title":"Building Responsive Layouts with CSS Grid","description":"Master CSS Grid to create modern, responsive web layouts with less code","date":"2024-12-28T00:00:00.000Z","tags":["css","web-design","responsive-design","frontend"],"authors":["rjvim"]},"unlisted":false,"prevItem":{"title":"API Security Best Practices","permalink":"/blog/api-security-best-practices"},"nextItem":{"title":"Docker for Beginners","permalink":"/blog/docker-beginners-guide"}}');var i=r(4848),t=r(8453);const a={slug:"css-grid-responsive-layouts",title:"Building Responsive Layouts with CSS Grid",description:"Master CSS Grid to create modern, responsive web layouts with less code",date:new Date("2024-12-28T00:00:00.000Z"),tags:["css","web-design","responsive-design","frontend"],authors:["rjvim"]},d=void 0,o={authorsImageUrls:[void 0]},l=[{value:"Grid Fundamentals",id:"grid-fundamentals",level:2},{value:"Key Grid Properties",id:"key-grid-properties",level:3},{value:"Advanced Grid Techniques",id:"advanced-grid-techniques",level:2},{value:"Grid Areas",id:"grid-areas",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"CSS Grid has revolutionized how we build layouts for the web. Learn how to create complex, responsive designs with this powerful layout system."}),"\n","\n",(0,i.jsx)(n.h2,{id:"grid-fundamentals",children:"Grid Fundamentals"}),"\n",(0,i.jsx)(n.p,{children:"Create a basic grid layout with minimal code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"key-grid-properties",children:"Key Grid Properties"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"grid-template-columns"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"grid-template-rows"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"grid-gap"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"grid-template-areas"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"advanced-grid-techniques",children:"Advanced Grid Techniques"}),"\n",(0,i.jsx)(n.p,{children:"Create responsive layouts without media queries:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".dashboard {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-auto-rows: minmax(150px, auto);\n  gap: 2rem;\n}\n\n.card {\n  grid-column: span 1;\n  /* Span 2 columns for featured items */\n  &.featured {\n    grid-column: span 2;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"grid-areas",children:"Grid Areas"}),"\n",(0,i.jsx)(n.p,{children:"Define complex layouts using named grid areas:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:'.layout {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "sidebar main main"\n    "footer footer footer";\n  grid-template-columns: 200px 1fr 1fr;\n}\n\n.header {\n  grid-area: header;\n}\n.sidebar {\n  grid-area: sidebar;\n}\n.main {\n  grid-area: main;\n}\n.footer {\n  grid-area: footer;\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var s=r(6540);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);