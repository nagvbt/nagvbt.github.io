"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[46418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?o.createElement(d,i(i({ref:t},s),{},{components:n})):o.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={tags:["Ionic"]},i="Add FontAwesome Icons in the SideMenu of ionic3+ Apps",p={permalink:"/blog/2018/05/12/ionic-add-fontawesome-icons",source:"@site/blog/2018-05-12-ionic-add-fontawesome-icons.md",title:"Add FontAwesome Icons in the SideMenu of ionic3+ Apps",description:"First go through the below articles",date:"2018-05-12T00:00:00.000Z",formattedDate:"May 12, 2018",tags:[{label:"Ionic",permalink:"/blog/tags/ionic"}],readingTime:.43,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["Ionic"]},prevItem:{title:"How to Add Constants and use across Ionic3+ Apps",permalink:"/blog/2018/05/13/ionic-add-constants"},nextItem:{title:"FontAwesome in ionic3+ apps",permalink:"/blog/2018/04/29/ionic-fontawesomes"}},c={authorsImageUrls:[]},l=[],s={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"First go through the below articles",(0,r.kt)("br",{parentName:"p"}),"\n","1","."," ",(0,r.kt)("a",{parentName:"p",href:"blog/2018/02/03/ionic-basic-mobile-app"},"How to create a basic ionic3 + mobile application"),"  "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://nagvbt.blogspot.com/2018/04/how-to-add-fontawesome-to-ionic3-apps.html"},"2","."," How to add FontAwesome to ionic3+ apps")),(0,r.kt)("p",null,"Steps:"),(0,r.kt)("p",null,"1","."," In app.component.ts add icon property in the pages array and add the icon name\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export class MyApp {\n :\n pages: Array;\n :\n\n this.pages = [\n { title: 'Home', component: HomePage, icon: \"home\" },\n { title: 'List', component: ListPage, icon: \"list\" }\n ];\n\n :\n}\n")),(0,r.kt)("p",null,"2","."," Add ",(0,r.kt)("em",{parentName:"p"},"tag in the app.html")),(0,r.kt)("p",null,"_FILES  "),(0,r.kt)("p",null,"Refer the code files in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nagvbt/IonicTemplate/commit/c5db580b97e1385728490facbe46c7823d422dfa"},"Github")),(0,r.kt)("p",null,"_"))}u.isMDXComponent=!0}}]);