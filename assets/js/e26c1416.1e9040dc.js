"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[2422],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,b=u["".concat(i,".").concat(f)]||u[f]||m[f]||s;return t?n.createElement(b,o(o({ref:r},p),{},{components:t})):n.createElement(b,o({ref:r},p))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8925:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const s={},o="Parameters to Base constructors",c={unversionedId:"articles/Csharp/PassingParameters",id:"articles/Csharp/PassingParameters",title:"Parameters to Base constructors",description:"Passing parameters to Base class constructors",source:"@site/docs/articles/Csharp/PassingParameters.md",sourceDirName:"articles/Csharp",slug:"/articles/Csharp/PassingParameters",permalink:"/docs/articles/Csharp/PassingParameters",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Log4net Integration",permalink:"/docs/articles/Csharp/Log4netIntegration"},next:{title:"Simple Form",permalink:"/docs/articles/Csharp/SimpleForm"}},i={},l=[],p={toc:l},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parameters-to-base-constructors"},"Parameters to Base constructors"),(0,a.kt)("p",null,"Passing parameters to Base class constructors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'//Passing parameters to Base-class constructors\nclass B\n{\npublic:        \n      B(int i)  {   cout<<"constructor B called value of i:"<<i<<endl;   }\n};\n \nclass D: public B\n{\npublic:       \n      D(int i, int j) : B(i)\n      {\n            cout<<"constructor D called values of i & j are:"<<i<<" ,"<<j<<endl; \n      }\n};\n \nvoid main()\n{\n D obj(3,6);\n}\nOUTPUT\nconstructor B called value of i:3\nconstructor D called values of i & j are:3 ,6\n//Granting Access\nclass B\n{\npublic:\n      int i; // public in base\n      B() { i = 10; }\n};\n// Inherit base as private.\nclass D: private B\n{\npublic:\n      // here is access declaration\n      B::i; // make i public again\n};\nvoid main()\n{\n      D obj;       \n      cout<<obj.i;\n}\nOUTPUT\n10\n\n')))}m.isMDXComponent=!0}}]);