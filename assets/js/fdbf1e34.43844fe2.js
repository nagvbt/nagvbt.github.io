"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[23153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"C FAQ 3: How to write a code to Outputs its own code",date:"2012-01-19",categories:["c-cpp-mfc-vcpp"],tags:["C"]},c=void 0,i={permalink:"/blog/2012/01/19/c-faq-how-to-write-a-code-to-outputs-its-own-code",source:"@site/blog/2012-01-19-c-faq-how-to-write-a-code-to-outputs-its-own-code.md",title:"C FAQ 3: How to write a code to Outputs its own code",description:"\\FILE ** The name of the current source file.** FILE\\\\_ expands to a string surrounded by double quotation marks.",date:"2012-01-19T00:00:00.000Z",formattedDate:"January 19, 2012",tags:[{label:"C",permalink:"/blog/tags/c"}],readingTime:.36,hasTruncateMarker:!1,authors:[],frontMatter:{title:"C FAQ 3: How to write a code to Outputs its own code",date:"2012-01-19",categories:["c-cpp-mfc-vcpp"],tags:["C"]},prevItem:{title:"C FAQ 4 to 7: Simple Programms",permalink:"/blog/2012/01/20/c-faq-4-to-7-simple-programms"},nextItem:{title:"All About Design Patterns",permalink:"/blog/2012/01/18/all-about-design-patterns"}},p={authorsImageUrls:[]},l=[],s={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"_","FILE ",(0,o.kt)("strong",{parentName:"p"},":It is a Predefined Macros : The name of the current source file.")," FILE","_","_"," expands to a string surrounded by double quotation marks."),(0,o.kt)("p",null,"fgetc: Read a character from a stream. returns an integer putchar: Writes a character to a stream"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'\n# include "stdio.h"\n\n# include\n\n//Program that outputs its own code int main () { FILE \\*fp; char c;\n\nfp = fopen(**FILE**,"r"); while((c=getc(fp))!= EOF) { printf("%c",c); } fclose(fp); } ```\n')))}f.isMDXComponent=!0}}]);