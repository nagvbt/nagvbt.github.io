"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[84973],{39402:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=n(85893),s=n(11151);const a={tags:["CSharp"]},o="C#: How to Select a random item from a List",d={permalink:"/blog/2012/08/29/select-a-random-item-from-a-list",source:"@site/blog/2012-08-29-select-a-random-item-from-a-list.md",title:"C#: How to Select a random item from a List",description:"",date:"2012-08-29T00:00:00.000Z",formattedDate:"August 29, 2012",tags:[{label:"CSharp",permalink:"/blog/tags/c-sharp"}],readingTime:.265,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["CSharp"]},unlisted:!1,prevItem:{title:"C#: Generate xsd and class for an XML document",permalink:"/blog/2012/09/02/c-how-to-generate-xsd-and-class-for-an-xml-document"},nextItem:{title:"iPad head Robot with videoconferencing",permalink:"/blog/2012/08/22/ipad-head-robot-with-videoconferencing"}},i={authorsImageUrls:[]},l=[];function c(t){const e={code:"code",pre:"pre",...(0,s.a)(),...t.components};return(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'using System; \r\nusing System.Collections.Generic; \r\nnamespace RandomSelect { \r\n  class Program { \r\n    static List lst = new List(); \r\n    static void Main(string[] args) { \r\n      lst.Add("1"); \r\n      lst.Add("2"); \r\n      lst.Add("3"); \r\n      lst.Add("4"); \r\n      lst.Add("5"); \r\n      lst.Add("6"); \r\n      lst.Add("7"); \r\n      lst.Add("8"); \r\n      lst.Add("9"); \r\n      lst.Add("10"); \r\n      Random rndElement = new Random(); \r\n      foreach (string i in lst) { \r\n        string s = lst[rndElement.Next(lst.Count)];\r\n         Console.WriteLine(s); \r\n        } \r\n    }\r\n  }\r\n} \n'})})}function m(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>d,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);