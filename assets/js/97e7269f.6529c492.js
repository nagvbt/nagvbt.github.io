"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[94371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=f(n),u=i,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var f=2;f<o;f++)a[f]=n[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>f});var r=n(87462),i=(n(67294),n(3905));const o={title:"Win32: How do I get the name of files in a folder ?",date:"2012-09-26",categories:["windows-apps"],tags:["c","win32"]},a=void 0,l={permalink:"/blog/2012/09/26/win32-how-do-i-get-the-name-of-files-in-a-folder",source:"@site/blog/2012-09-26-win32-how-do-i-get-the-name-of-files-in-a-folder.md",title:"Win32: How do I get the name of files in a folder ?",description:"To get the name of files in a folder,",date:"2012-09-26T00:00:00.000Z",formattedDate:"September 26, 2012",tags:[{label:"c",permalink:"/blog/tags/c"},{label:"win32",permalink:"/blog/tags/win-32"}],readingTime:.47,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Win32: How do I get the name of files in a folder ?",date:"2012-09-26",categories:["windows-apps"],tags:["c","win32"]},prevItem:{title:"LEAP Hands-free motion control Technology",permalink:"/blog/2012/09/27/leap-hands-free-motion-control-technology"},nextItem:{title:"Vedic Technology - Greatness Of The Vedic Vedas: vedic cosmology",permalink:"/blog/2012/09/16/vedic-technology-greatness-of-the-vedic-vedas-vedic-cosmology"}},c={authorsImageUrls:[]},f=[],s={toc:f},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To get the name of files in a folder,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"call the\xa0",(0,i.kt)("strong",{parentName:"li"},"FindFirstFile")," function to open a search handle and get information about the first file that the file system find in the folder."),(0,i.kt)("li",{parentName:"ol"},"call the\xa0",(0,i.kt)("strong",{parentName:"li"},"FindNextFile")," function to continue listing files from a previous call to FindFirstFile.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c",metastring:'WIN32_FIND_DATA FindFileData; HANDLE hFind; TCHAR *FilePathBuff = L"C:RequiredFolder"; hFind = FindFirstFile(FilePathBuff, &FindFileData);',WIN32_FIND_DATA:!0,"FindFileData;":!0,HANDLE:!0,"hFind;":!0,TCHAR:!0,"*FilePathBuff":!0,"":"",'L"C:RequiredFolder";':!0,hFind:!0,"FindFirstFile(FilePathBuff,":!0,"&FindFileData);":!0},'\nif (hFind == INVALID\\_HANDLE\\_VALUE) { printf(TEXT("FindFirstFile failed (%d)n"), GetLastError()); } else { printf(TEXT("The first file is %sn"), FindFileData.cFileName); while (FindNextFile(hFind, &FindFileData) != 0) { printf(TEXT("The next file is %sn"), FindFileData.cFileName); } FindClose(hFind); } ```\n')))}p.isMDXComponent=!0}}]);