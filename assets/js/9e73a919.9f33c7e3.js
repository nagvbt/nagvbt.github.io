"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[84976],{60698:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(85893),r=t(11151);const o={tags:["Windows Phone"]},s="Set a variable that can be accessed on all pages of a Windows Phone App",i={permalink:"/blog/2013/03/09/variable-windows-phone-app",source:"@site/blog/2013-03-09-variable-windows-phone-app.md",title:"Set a variable that can be accessed on all pages of a Windows Phone App",description:"App.xaml.cs",date:"2013-03-09T00:00:00.000Z",formattedDate:"March 9, 2013",tags:[{label:"Windows Phone",permalink:"/blog/tags/windows-phone"}],readingTime:.34,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["Windows Phone"]},unlisted:!1,prevItem:{title:"Visual Studio 2013 Update 1 for download",permalink:"/blog/2014/01/22/visual-studio-2013-update-1-ready-to-download"},nextItem:{title:"Can't login to Windows 8 with account live password! ?",permalink:"/blog/2013/01/04/cant-login-to-windows-8-with-account-live-password"}},c={authorsImageUrls:[]},l=[];function p(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"App.xaml.cs"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cs",children:"public partial class App : Application {\r\n public string sName { get; set; }\r\n\r\n public static new App Current\r\n {\r\n     get { return Application.Current as App; }\r\n }\r\n  ...\r\n  ...\r\n\r\n\r\n} \n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Page1.xaml.cs"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cs",children:"public partial class Page1 : PhoneApplicationPage { \r\n public string _sName;\r\n\r\n public Page1()\r\n {\r\n    InitializeComponent();\r\n\r\n    _sName = App.Current.sName;\r\n }\r\n\r\n} \n"})})]})}function d(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>s});var a=t(67294);const r={},o=a.createContext(r);function s(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);