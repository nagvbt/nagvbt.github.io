"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[56290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={tags:["React Native"]},i="React Native App using Expo",p={permalink:"/blog/2021/06/06/react-native-app-using-expo",source:"@site/blog/2021-06-06-react-native-app-using-expo.md",title:"React Native App using Expo",description:"React Native",date:"2021-06-06T00:00:00.000Z",formattedDate:"June 6, 2021",tags:[{label:"React Native",permalink:"/blog/tags/react-native"}],readingTime:1.39,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["React Native"]},prevItem:{title:"Books For Personal Growth & Wealth",permalink:"/blog/2021/07/06/books-for-personal-growth-wealth"},nextItem:{title:"Component Library With Ionic+Angular",permalink:"/blog/2021/06/02/ionic-lib"}},l={authorsImageUrls:[]},c=[{value:"React Native",id:"react-native",level:2},{value:"Expo:",id:"expo",level:2},{value:"Install Expo",id:"install-expo",level:3},{value:"Create new project",id:"create-new-project",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"react-native"},"React Native"),(0,r.kt)("p",null,"Create native apps for Android and iOS using React"),(0,r.kt)("p",null,"React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/"},"Refer")),(0,r.kt)("h2",{id:"expo"},"Expo:"),(0,r.kt)("p",null,"Expo is a platform built around React Native and native platforms which enable you to develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.io/"},"Refer")),(0,r.kt)("h3",{id:"install-expo"},"Install Expo"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install --global expo-cli")),(0,r.kt)("h3",{id:"create-new-project"},"Create new project"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"expo init nag-rn")),(0,r.kt)("p",null,"Selection of Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">expo init nag-rn\n? Choose a template: \xbb - Use arrow-keys. Return to submit.\n    ----- Managed workflow -----\n>   blank                 a minimal app as clean as an empty canvas\n    blank (TypeScript)    same as blank but with TypeScript configuration\n    tabs (TypeScript)     several example screens and tabs using react-navigation and TypeScript\n    ----- Bare workflow -----\n    minimal               bare and minimal, just the essentials to get you started\n    minimal (TypeScript)  same as minimal but with TypeScript configuration\n")),(0,r.kt)("p",null,"Selected the Tabs Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u221a Choose a template: \xbb tabs (TypeScript)     several example screens and tabs using react-navigation and TypeScript\n\u221a Downloaded and extracted project files.\n\ufffd Using Yarn to install packages. Pass --npm to use npm instead.\n\u221a Installed JavaScript dependencies.\n\n&#x2705; Your project is ready!\n\nTo run your project, navigate to the directory and run one of the following yarn commands.\n\n- cd nag-rn\n- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.\n- yarn android\n- yarn ios # requires an iOS device or macOS for access to an iOS s\n- yarn web\n")),(0,r.kt)("p",null,"Change the directory and Start the app."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cd nag-rn")," "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")))}d.isMDXComponent=!0}}]);