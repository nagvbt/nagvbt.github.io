"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[22048],{26625:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=n(85893),a=n(11151);const o={},s="Debugging & Tracing",c={id:"articles/Csharp/DebuggingTracing",title:"Debugging & Tracing",description:"",source:"@site/docs/articles/Csharp/DebuggingTracing.md",sourceDirName:"articles/Csharp",slug:"/articles/Csharp/DebuggingTracing",permalink:"/docs/articles/Csharp/DebuggingTracing",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C#",permalink:"/docs/category/c"},next:{title:"Diamond problem - Base class",permalink:"/docs/articles/Csharp/DiamondProblem"}},i={},u=[];function g(e){const r={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"debugging--tracing",children:"Debugging & Tracing"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:'Tracing\r\n //Trace-1\r\n Trace.Write( "Custom Category", "Page_Load called" );\r\n\x3c!--Trace 2- pageOutput="true" see in the page--\x3e\r\n      < trace enabled ="true " requestLimit ="100 " pageOutput ="true " traceMode=" SortByTime" localOnly=" false" mostRecent=" true">\r\n      </ trace>\r\n\r\nPage wise\r\n<asp: Content ID ="Content1" ContentPlaceHolderID ="HeadContent" runat ="server" trace="true">\r\n\r\nDebugging\r\n---------\r\n\x3c!--Author: debug-for entire website--\x3e\r\n    < compilation debug ="true " targetFramework ="4.0 ">\r\n      < assemblies>\r\n....\r\n</compilation>\r\n\r\nPage wise\r\n<asp: Content ID ="Content3" ContentPlaceHolderID ="HeadContent"  Debug ="true" runat="server">\r\n\r\n\r\nCustom Error Page\r\n\r\n\x3c!-- o: Custom error page--\x3e\r\n      < customErrors defaultRedirect = "SiteErrorPage.aspx " mode = "On " >\r\n        < error statusCode = "404 " redirect = "FileNotFound.aspx " />\n'})})]})}function l(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>s});var t=n(67294);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);