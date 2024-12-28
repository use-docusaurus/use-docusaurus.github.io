"use strict";(self.webpackChunkuse_docusaurus_github_io=self.webpackChunkuse_docusaurus_github_io||[]).push([[9846],{1171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var s=n(1420),r=n(4848),a=n(8453);const i={slug:"essential-design-patterns-for-developers",title:"5 Design Patterns Every Developer Should Know",description:"A deep dive into essential software design patterns that improve code quality",date:new Date("2024-12-28T00:00:00.000Z"),tags:["design-patterns","software-architecture","programming"],authors:["rjvim"]},o=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Singleton Pattern",id:"singleton-pattern",level:2},{value:"Observer Pattern",id:"observer-pattern",level:2},{value:"Factory Pattern",id:"factory-pattern",level:2}];function p(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Design patterns are proven solutions to common programming challenges. Understanding these patterns can significantly improve your code quality and maintainability."}),"\n","\n",(0,r.jsx)(t.h2,{id:"singleton-pattern",children:"Singleton Pattern"}),"\n",(0,r.jsx)(t.p,{children:"The Singleton pattern ensures a class has only one instance while providing global access to this instance."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"class Database {\n    private static instance: Database;\n\n    private constructor() {}\n\n    public static getInstance(): Database {\n        if (!Database.instance) {\n            Database.instance = new Database();\n        }\n        return Database.instance;\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"observer-pattern",children:"Observer Pattern"}),"\n",(0,r.jsx)(t.p,{children:"Keep objects informed of changes without tightly coupling them together."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"class EventEmitter {\n    private listeners = {};\n\n    subscribe(event, callback) {\n        if (!this.listeners[event]) {\n            this.listeners[event] = [];\n        }\n        this.listeners[event].push(callback);\n    }\n\n    emit(event, data) {\n        if (this.listeners[event]) {\n            this.listeners[event].forEach(callback => callback(data));\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"factory-pattern",children:"Factory Pattern"}),"\n",(0,r.jsx)(t.p,{children:"Create objects without explicitly specifying their exact classes:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'class UserFactory {\n  createUser(type) {\n    switch (type) {\n      case "admin":\n        return new AdminUser();\n      case "regular":\n        return new RegularUser();\n      default:\n        throw new Error("Invalid user type");\n    }\n  }\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}},1420:e=>{e.exports=JSON.parse('{"permalink":"/blog/essential-design-patterns-for-developers","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-12-28-essential-design-patterns-for-developers.mdx","source":"@site/blog/2024-12-28-essential-design-patterns-for-developers.mdx","title":"5 Design Patterns Every Developer Should Know","description":"A deep dive into essential software design patterns that improve code quality","date":"2024-12-28T00:00:00.000Z","tags":[{"inline":true,"label":"design-patterns","permalink":"/blog/tags/design-patterns"},{"inline":true,"label":"software-architecture","permalink":"/blog/tags/software-architecture"},{"inline":true,"label":"programming","permalink":"/blog/tags/programming"}],"readingTime":0.79,"hasTruncateMarker":true,"authors":[{"name":"Rajiv I\'m","title":"Engineer @ UseDocu","url":"https://github.com/rjvim","page":{"permalink":"/blog/authors/rjvim"},"socials":{"x":"https://x.com/rjv_im","github":"https://github.com/rjvim"},"imageURL":"https://github.com/rjvim.png","key":"rjvim"}],"frontMatter":{"slug":"essential-design-patterns-for-developers","title":"5 Design Patterns Every Developer Should Know","description":"A deep dive into essential software design patterns that improve code quality","date":"2024-12-28T00:00:00.000Z","tags":["design-patterns","software-architecture","programming"],"authors":["rjvim"]},"unlisted":false,"prevItem":{"title":"Docker for Beginners","permalink":"/blog/docker-beginners-guide"},"nextItem":{"title":"Getting Started with React Hooks","permalink":"/blog/getting-started-with-react-hooks"}}')}}]);