"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[6720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=l(n),u=a,d=s["".concat(p,".").concat(u)]||s[u]||f[u]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Programmatically terminate MFC application",date:"2012-03-25",categories:["c-cpp-mfc-vcpp"],tags:["MFC","vc"]},i=void 0,c={permalink:"/blog/2012/03/25/programmatically-terminate-mfc-application",source:"@site/blog/2012-03-25-programmatically-terminate-mfc-application.md",title:"Programmatically terminate MFC application",description:"MFC does not provide a public function to exit an application. The following method shutdowns the Application. The method simply sends a WM\\_CLOSE message to application's mainframe window.",date:"2012-03-25T00:00:00.000Z",formattedDate:"March 25, 2012",tags:[{label:"MFC",permalink:"/blog/tags/mfc"},{label:"vc",permalink:"/blog/tags/vc"}],readingTime:.2,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Programmatically terminate MFC application",date:"2012-03-25",categories:["c-cpp-mfc-vcpp"],tags:["MFC","vc"]},prevItem:{title:"How do I maximize my MDI child ?",permalink:"/blog/2012/03/28/how-do-i-maximize-my-mdi-child"},nextItem:{title:"Reading Books",permalink:"/blog/2012/03/25/reading-books"}},p={authorsImageUrls:[]},l=[],m={toc:l},s="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"MFC does not provide a public function to exit an application. The following method shutdowns the Application. The method simply sends a WM","_","CLOSE message to application's mainframe window."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void CmfcApp::ExitApplication()\n{\n    if(AfxGetApp()-&gt;m\\_pMainWnd != NULL))\n    {\n        AfxGetApp()-&gt;m\\_pMainWnd-&gt;SendMessage(WM\\_CLOSE);\n    }\n}\n")))}f.isMDXComponent=!0}}]);