"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[87748],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(o),f=r,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return o?n.createElement(d,i(i({ref:t},p),{},{components:o})):n.createElement(d,i({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},60517:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={title:"Basics of ActiveX Controls",date:"2012-07-08",categories:["com-dcom-atl"],tags:["atl"]},i=void 0,s={permalink:"/blog/2012/07/08/basics-of-activex-controls",source:"@site/blog/2012-07-08-basics-of-activex-controls.md",title:"Basics of ActiveX Controls",description:"Definition:\xa0ActiveX controls are COM components which are self-registering and Implements standard interfaces that deal specifically with GUI-based tasks such as rendering, sizing, activation, and property persistence.",date:"2012-07-08T00:00:00.000Z",formattedDate:"July 8, 2012",tags:[{label:"atl",permalink:"/blog/tags/atl"}],readingTime:1.61,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Basics of ActiveX Controls",date:"2012-07-08",categories:["com-dcom-atl"],tags:["atl"]},prevItem:{title:"ATLTutorial Step by Step (DLL or Inproc Server)",permalink:"/blog/2012/07/08/atltutorial-step-by-step-dll-or-inproc-server"},nextItem:{title:"Basics of ATL",permalink:"/blog/2012/07/08/basics-of-atl"}},c={authorsImageUrls:[]},l=[],p={toc:l},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definition:"),"\xa0ActiveX controls are COM components which are self-registering and Implements standard interfaces that deal specifically with GUI-based tasks such as rendering, sizing, activation, and property persistence."),(0,r.kt)("p",null,"An ActiveX control is anything you might see in the Toolbox of Visual studio (i.e. EditBox, combobox e.t.c) we can even use the Activex controls in web pages using"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connectable Object")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Connectable Object:")," is a COM Component or object that defines and uses an outgoing interface."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sink"),": A client that implements the outgoing interface of a component is called sink."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Control Container:")," An application (Dialog or View ) that houses ActiveX control is called the control container. The control container communicates with a ActiveX control via methods and properties of a control."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ActiveX Control Properties:")," There are two types of properties 1.Stock Properties 2.Custom properties"),(0,r.kt)("p",null,"1.Stock Properties Stack properties are common properties (Caption, foreground and background colors) that most controls expose. The COleControl data members provides stock properties implementation and also provides notification functions for the stock properties."),(0,r.kt)("p",null,"2.Custom properties Custom properties are the properties which are specific to the control. There are four different ways to implement Custom properties. a. Member variable: b. Member variable with notification function: c. Get/Set methods d. Parameterized (property array)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ActiveX Control Methods")," There are two types of methods 1.Stock methods 2.Custom methods"),(0,r.kt)("p",null,"1.Stock methods The COleControl provides the stock methods implementation. there are only two stock properties DoClick() - fires an event from the control Refresh() - updates the control appearence"),(0,r.kt)("p",null,"2.Custom methods Custom methods are the methods which are specific to the control."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ActiveX Control Events")," A member function of an outgoing interface is called an event. An activeX controlcan notify the containerof a state change using events. There are two types of Events 1.Stock Events 2.Custom Events"),(0,r.kt)("p",null,"1.Stock Events The COleControl provides the common stock Events implementation like mouse button clicks and keyboard input."),(0,r.kt)("p",null,"2.Custom Events Custom Events are the events which are specific to the control."))}u.isMDXComponent=!0}}]);