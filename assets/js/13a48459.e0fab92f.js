"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[11043],{24191:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(85893),s=t(11151);const i={},o="Singleton [C#]",a={id:"articles/DesignPatterns/Singleton",title:"Singleton [C#]",description:"]",source:"@site/docs/articles/DesignPatterns/Singleton.md",sourceDirName:"articles/DesignPatterns",slug:"/articles/DesignPatterns/Singleton",permalink:"/docs/articles/DesignPatterns/Singleton",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Design Patterns",permalink:"/docs/category/design-patterns"},next:{title:"Python",permalink:"/docs/category/python"}},c={},l=[];function g(n){const e={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"singleton-c",children:"Singleton [C#]"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'using System;\r\nnamespace CSharp\r\n{\r\n  //Singleton: Ensure a class only has one instance,\r\n  //and provide a global point of access to it.\r\n  class Singleton\r\n  {\r\n    //Member Variable\r\n    private static Singleton instance = null;\r\n    //Memeber Functions\r\n    private Singleton()\r\n    {\r\n    }\r\n    public static Singleton Instance()\r\n      {\r\n       if(instance == null )\r\n            {\r\n              instance = new Singleton ();\r\n            }\r\n         \r\n            return instance;            \r\n      }\r\n      public void print()\r\n      {\r\n        Console.WriteLine("Singleton Class" );\r\n      }  \r\n  };\r\n  class Program\r\n  {\r\n    static void Main(string[] args)\r\n    {\r\n      Singleton n = Singleton .Instance();\r\n      n.print();\r\n      Singleton p = Singleton .Instance();\r\n      p.print();\r\n    }\r\n  }\r\n}\r\n\n'})})]})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(g,{...n})}):g(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);