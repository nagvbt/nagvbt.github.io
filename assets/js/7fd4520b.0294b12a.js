"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[67145],{26493:(r,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var t=n(85893),e=n(11151);const l={},s="Calculate Salary",c={id:"articles/Cpp/CalculateSalary",title:"Calculate Salary",description:"",source:"@site/docs/articles/Cpp/CalculateSalary.md",sourceDirName:"articles/Cpp",slug:"/articles/Cpp/CalculateSalary",permalink:"/docs/articles/Cpp/CalculateSalary",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Type Casting and others",permalink:"/docs/articles/Cpp/TypeCastingOthers"},next:{title:"Inheritance Program",permalink:"/docs/articles/Cpp/InheritanceProgram"}},o={},i=[];function u(r){const a={code:"code",h1:"h1",pre:"pre",...(0,e.a)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"calculate-salary",children:"Calculate Salary"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:'#include<iostream>\r\n//Caluclation of salary\r\n \r\nclass CSalary\r\n{\r\nprivate:\r\n float mfltbasic;\r\n \r\npublic:\r\n void Display();\r\n void SetBasic( );\r\n float CalGSal(float *da, float *hra, float *con);\r\n  \r\n};\r\n \r\nfloat CSalary::CalGSal(float *da, float *hra, float *con)\r\n{\r\n float Gross;\r\n if(mfltbasic>=5000)\r\n {\r\n  *da=mfltbasic*1.1; //110%\r\n  *hra=mfltbasic*.2;\r\n  *con=500;\r\n }\r\n Gross=(mfltbasic+*da+*hra+*con);\r\n \r\n return Gross;\r\n}\r\n \r\nvoid CSalary::Display()\r\n{\r\n float da, hra, con, Gross;\r\n cout<<"    Basic salary :"<<mfltbasic<<endl;\r\n \r\n Gross =CalGSal(&da, &hra, &con);\r\n \r\n cout<<"    Hra :"<<hra<<endl;\r\n cout<<"    Da :"<<da<<endl;\r\n cout<<"    Conveyance :"<<hra<<endl;\r\n cout<<"    --------------------"<<endl;\r\n cout<<"    Gross Salary :"<<Gross<<endl;\r\n}\r\n \r\nvoid CSalary::SetBasic()\r\n{\r\n cout << "Enter Basic Salary :";\r\n cin>>mfltbasic;\r\n}\r\n \r\nvoid main()\r\n{\r\n CSalary sal;\r\n sal.SetBasic();\r\n sal.Display();\r\n}\r\n\r\n/*\r\nOutput\r\n       Enter Basic Salary :100000\r\n        Basic salary :100000\r\n        Hra                 :20000\r\n        Da                 :110000\r\n        Conveyance  :20000\r\n        --------------------\r\n        Gross Salary :230500\r\n*/\n'})})]})}function d(r={}){const{wrapper:a}={...(0,e.a)(),...r.components};return a?(0,t.jsx)(a,{...r,children:(0,t.jsx)(u,{...r})}):u(r)}},11151:(r,a,n)=>{n.d(a,{Z:()=>c,a:()=>s});var t=n(67294);const e={},l=t.createContext(e);function s(r){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof r?r(a):{...a,...r}}),[a,r])}function c(r){let a;return a=r.disableParentContext?"function"==typeof r.components?r.components(e):r.components||e:s(r.components),t.createElement(l.Provider,{value:a},r.children)}}}]);