"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[11601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),f=a,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||c;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[l]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const c={},o="Stack",p={unversionedId:"articles/Cpp/DataStructures/Stack",id:"articles/Cpp/DataStructures/Stack",title:"Stack",description:"",source:"@site/docs/articles/Cpp/DataStructures/Stack.md",sourceDirName:"articles/Cpp/DataStructures",slug:"/articles/Cpp/DataStructures/Stack",permalink:"/docs/articles/Cpp/DataStructures/Stack",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Queue",permalink:"/docs/articles/Cpp/DataStructures/Queue"},next:{title:"Templates and Exception Handling",permalink:"/docs/articles/Cpp/Templates"}},i={},u=[],s={toc:u},l="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stack"},"Stack"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "iostream"\nusing namespace std;\n\n#define MAX 10\n\nclass Stack\n{\nprivate:\n    int arr[MAX];\n    int top;\n\npublic:\n    Stack()\n    {\n        top = -1;\n    }\n\n    void Push(int item)\n    {\n        if (top == MAX - 1)\n        {\n            cout << endl << "Stack is full";\n            return;\n        }\n\n        top++;\n        arr[top] = item;\n    }\n\n    int Pop()\n    {\n        if (top == -1)\n        {\n            cout << endl << "Stack is empty";\n            return NULL;\n        }\n\n        int data = arr[top];\n        top--;\n\n        return data;\n    }\n\n};\n\nint main()\n{\n    Stack s;\n\n    s.Push(1);\n    s.Push(2);\n    s.Push(3);\n\n    int i = s.Pop();\n    cout << endl << "Item popped = " << i << endl;\n\n    i = s.Pop();\n    cout << endl << "Item popped = " << i << endl;\n\n    return 0;\n}\n\n/*\nOUTPUT\n----------------\nItem popped = 3\n\nItem popped = 2\n*/\n')))}d.isMDXComponent=!0}}]);