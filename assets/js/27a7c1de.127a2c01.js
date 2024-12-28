"use strict";(self.webpackChunkuse_docusaurus_github_io=self.webpackChunkuse_docusaurus_github_io||[]).push([[6535],{4119:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var t=o(5906),r=o(4848),i=o(8453);const s={slug:"docker-beginners-guide",title:"Docker for Beginners",description:"A comprehensive guide to getting started with Docker containerization",date:new Date("2024-12-28T00:00:00.000Z"),tags:["docker","containerization","devops","deployment"],authors:["rjvim"]},a=void 0,c={authorsImageUrls:[void 0]},d=[{value:"Basic Docker Concepts",id:"basic-docker-concepts",level:2},{value:"Docker Commands",id:"docker-commands",level:2},{value:"Docker Compose",id:"docker-compose",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Docker has revolutionized how we build, ship, and run applications. Learn the fundamentals of containerization and how to get started with Docker."}),"\n","\n",(0,r.jsx)(n.h2,{id:"basic-docker-concepts",children:"Basic Docker Concepts"}),"\n",(0,r.jsx)(n.p,{children:"Understanding the core components of Docker:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",children:'# Example Dockerfile\nFROM node:16-alpine\n\nWORKDIR /app\n\nCOPY package*.json ./\nRUN npm install\n\nCOPY . .\n\nEXPOSE 3000\nCMD ["npm", "start"]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"docker-commands",children:"Docker Commands"}),"\n",(0,r.jsx)(n.p,{children:"Essential commands for working with Docker:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Build an image\ndocker build -t myapp:latest .\n\n# Run a container\ndocker run -d -p 3000:3000 myapp:latest\n\n# List running containers\ndocker ps\n\n# Stop a container\ndocker stop container_id\n"})}),"\n",(0,r.jsx)(n.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,r.jsx)(n.p,{children:"Managing multi-container applications:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# docker-compose.yml\nversion: "3.8"\nservices:\n  web:\n    build: .\n    ports:\n      - "3000:3000"\n    environment:\n      - NODE_ENV=production\n    depends_on:\n      - db\n\n  db:\n    image: postgres:13\n    volumes:\n      - postgres_data:/var/lib/postgresql/data\n    environment:\n      - POSTGRES_DB=myapp\n      - POSTGRES_USER=user\n      - POSTGRES_PASSWORD=password\n\nvolumes:\n  postgres_data:\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(6540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}},5906:e=>{e.exports=JSON.parse('{"permalink":"/blog/docker-beginners-guide","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-12-28-docker-beginners-guide.mdx","source":"@site/blog/2024-12-28-docker-beginners-guide.mdx","title":"Docker for Beginners","description":"A comprehensive guide to getting started with Docker containerization","date":"2024-12-28T00:00:00.000Z","tags":[{"inline":true,"label":"docker","permalink":"/blog/tags/docker"},{"inline":true,"label":"containerization","permalink":"/blog/tags/containerization"},{"inline":true,"label":"devops","permalink":"/blog/tags/devops"},{"inline":true,"label":"deployment","permalink":"/blog/tags/deployment"}],"readingTime":0.705,"hasTruncateMarker":true,"authors":[{"name":"Rajiv I\'m","title":"Engineer @ UseDocu","url":"https://github.com/rjvim","page":{"permalink":"/blog/authors/rjvim"},"socials":{"x":"https://x.com/rjv_im","github":"https://github.com/rjvim"},"imageURL":"https://github.com/rjvim.png","key":"rjvim"}],"frontMatter":{"slug":"docker-beginners-guide","title":"Docker for Beginners","description":"A comprehensive guide to getting started with Docker containerization","date":"2024-12-28T00:00:00.000Z","tags":["docker","containerization","devops","deployment"],"authors":["rjvim"]},"unlisted":false,"prevItem":{"title":"Building Responsive Layouts with CSS Grid","permalink":"/blog/css-grid-responsive-layouts"},"nextItem":{"title":"5 Design Patterns Every Developer Should Know","permalink":"/blog/essential-design-patterns-for-developers"}}')}}]);