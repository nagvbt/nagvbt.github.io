"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[9047],{80751:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(85893),a=t(11151);const s={tags:["CSharp","Design Patterns"]},i="Design Pattern: C# Singleton",o={permalink:"/blog/2012/01/18/design-pattern-c-singleton",source:"@site/blog/2012-01-18-design-pattern-c-singleton.md",title:"Design Pattern: C# Singleton",description:"",date:"2012-01-18T00:00:00.000Z",formattedDate:"January 18, 2012",tags:[{label:"CSharp",permalink:"/blog/tags/c-sharp"},{label:"Design Patterns",permalink:"/blog/tags/design-patterns"}],readingTime:.46,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["CSharp","Design Patterns"]},unlisted:!1,prevItem:{title:"All About Design Patterns",permalink:"/blog/2012/01/18/all-about-design-patterns"},nextItem:{title:"Restore a Database Backup in MS SQL Server 2008",permalink:"/blog/2012/01/18/restore-db-backup-using-bak-file-sql2008"}},l={authorsImageUrls:[]},c=[];function g(n){const e={code:"code",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'using System;\r\n\r\nnamespace CSharp { \r\n  //Singleton: Ensure a class only has one instance, \r\n  //and provide a global point of access to it. \r\n  class Singleton { \r\n    //Member Variable \r\n    private static Singleton instance = null;\r\n    \r\n    //Memeber Functions\r\n    private Singleton()\r\n    {\r\n    }\r\n\r\n    public static Singleton Instance()\r\n    {\r\n        if(instance == null )\r\n        {\r\n          instance = new Singleton ();\r\n        }\r\n\r\n        return instance;\r\n    }\r\n\r\n    public void print()\r\n    {\r\n      Console.WriteLine("Singleton Class" );\r\n    }\r\n\r\n};\r\n\r\nclass Program { \r\n\r\n  static void Main(string[] args) {\r\n     Singleton n = Singleton .Instance(); \r\n     n.print();\r\n     Singleton p = Singleton .Instance();\r\n     p.print();\r\n  }\r\n\r\n } \r\n\r\n}\r\n\n'})})}function p(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(g,{...n})}):g(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>i});var r=t(67294);const a={},s=r.createContext(a);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);