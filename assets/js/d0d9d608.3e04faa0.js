"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[69760],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,p=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=l(n),m=i,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||p;return n?r.createElement(d,a(a({ref:e},s),{},{components:n})):r.createElement(d,a({ref:e},s))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var p=n.length,a=new Array(p);a[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[u]="string"==typeof t?t:i,a[1]=o;for(var l=2;l<p;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68412:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const p={title:"C-Pointers What is the output",date:"2012-07-08",categories:["c-cpp-mfc-vcpp"],tags:["c"]},a=void 0,o={permalink:"/blog/2012/07/08/c-pointers-what-is-the-output",source:"@site/blog/2012-07-08-c-pointers-what-is-the-output.md",title:"C-Pointers What is the output",description:"FAQ-1",date:"2012-07-08T00:00:00.000Z",formattedDate:"July 8, 2012",tags:[{label:"c",permalink:"/blog/tags/c"}],readingTime:.825,hasTruncateMarker:!1,authors:[],frontMatter:{title:"C-Pointers What is the output",date:"2012-07-08",categories:["c-cpp-mfc-vcpp"],tags:["c"]},prevItem:{title:"Basics of ATL",permalink:"/blog/2012/07/08/basics-of-atl"},nextItem:{title:"Find the length of the string in C",permalink:"/blog/2012/07/08/find-the-length-of-the-string-in-c"}},c={authorsImageUrls:[]},l=[],s={toc:l},u="wrapper";function f(t){let{components:e,...n}=t;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FAQ-1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void main() { \n  int _p = 91; //compilation error \n  printf(\"%d n\",_ p); \n  printf(\"%d n\", p); } \n  OUTPUT: Does not compile error C2440: 'initializing' : cannot convert from 'int' to 'int \\*' \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FAQ-2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'void main() { int i = 91; int \\*p = &i;\n\nprintf("%d n", \\*p); printf("%d n", p); } \nOUTPUT: 91 1245024 \n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FAQ-3")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c",metastring:"void main() { int i = 91; int *p = &i;",void:!0,"main()":!0,"{":!0,int:!0,i:!0,"":"","91;":!0,"*p":!0,"&i;":!0},'\nprintf(" _p = %d n",_ p); printf(" p = %d n", p); printf(" &p = %d n", &p); printf(" _(&p) = %d n",_ (&p)); printf(" _(_(&p)) = %d n", _(_(&p))); }\n\nOUTPUT: i = 91 &i = 1245024 _p = 91 p = 1245024 &p = 1245012_ (&p) = 1245024 _(_(&p)) = 91 ```\n\n**FAQ-4**\n\n```c void main() { const int _p; int i; i = 10; p = &i; printf("p = %d,_ p = %d, i = %d", p, _p, i); } OUTPUT p = 1245012,_ p = 10, i = 10 ```\n')))}f.isMDXComponent=!0}}]);