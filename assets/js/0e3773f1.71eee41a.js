"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[74863],{83559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>m});var o=t(85893),l=t(11151),r=(t(67294),t(93743));const i={tableOfContentsInline:"tableOfContentsInline_prmo"};function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,o.jsx)("div",{className:i.tableOfContentsInline,children:(0,o.jsx)(r.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null})})}const a={},c="Table of contents",d={id:"Others/BlogTips/table-of-contents",title:"Table of contents",description:"In order to include the TOC with in the markdown file just use below code",source:"@site/docs/Others/BlogTips/table-of-contents.md",sourceDirName:"Others/BlogTips",slug:"/Others/BlogTips/table-of-contents",permalink:"/docs/Others/BlogTips/table-of-contents",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Admonitions",permalink:"/docs/Others/BlogTips/info-warning-boxes"},next:{title:"M.Tech - ML & DL",permalink:"/docs/Others/Education/mtech-mdl"}},u={},m=[{value:"my header 2",id:"my-header-2",level:2},{value:"new header 2",id:"new-header-2",level:2},{value:"header 3",id:"header-3",level:3}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,o.jsx)(n.p,{children:"In order to include the TOC with in the markdown file just use below code"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import TOCInline from "@theme/TOCInline";\r\n\r\n<TOCInline toc={toc} />;\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"Table of contents"})})}),"\n","\n","\n",(0,o.jsx)(s,{toc:m}),"\n",(0,o.jsx)(n.p,{children:"some text here"}),"\n",(0,o.jsx)(n.h2,{id:"my-header-2",children:"my header 2"}),"\n",(0,o.jsx)(n.p,{children:"hello text content"}),"\n",(0,o.jsx)(n.h2,{id:"new-header-2",children:"new header 2"}),"\n",(0,o.jsx)(n.p,{children:"Again new text"}),"\n",(0,o.jsx)(n.h3,{id:"header-3",children:"header 3"})]})}function f(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},93743:(e,n,t)=>{t.d(n,{Z:()=>v});var o=t(67294),l=t(86668);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const o=t.slice(2,e.level);e.parentIndex=Math.max(...o),t[e.level]=n}));const o=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):o.push(l)})),o}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:o});return function(e){return e.level>=t&&e.level<=o}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function a(e,n){let{anchorTopOffset:t}=n;const o=e.find((e=>s(e).top>=t));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function c(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,o.useRef)(void 0),t=c();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),s=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const o=[];for(let l=n;l<=t;l+=1)o.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=a(s,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}var u=t(39960),m=t(85893);function h(e){let{toc:n,className:t,linkClassName:o,isChild:l}=e;return n.length?(0,m.jsx)("ul",{className:l?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:o})]},e.id)))}):null}const f=o.memo(h);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const v=(0,l.L)(),g=c??v.tableOfContents.minHeadingLevel,p=u??v.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,o.useMemo)((()=>i({toc:r(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:g,maxHeadingLevel:p});return d((0,o.useMemo)((()=>{if(s&&a)return{linkClassName:s,linkActiveClassName:a,minHeadingLevel:g,maxHeadingLevel:p}}),[s,a,g,p])),(0,m.jsx)(f,{toc:x,className:t,linkClassName:s,...h})}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var o=t(67294);const l={},r=o.createContext(l);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);