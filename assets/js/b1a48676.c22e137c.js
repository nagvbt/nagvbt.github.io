"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[83397],{35712:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=s(85893),i=s(11151);const a={sidebar_position:2},o="Functions",r={id:"articles/Cpp/Functions",title:"Functions",description:"1.What is the advantage of Pass by reference ?",source:"@site/docs/articles/Cpp/Functions.md",sourceDirName:"articles/Cpp",slug:"/articles/Cpp/Functions",permalink:"/docs/articles/Cpp/Functions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Classes",permalink:"/docs/articles/Cpp/Classes"},next:{title:"Polymorphism",permalink:"/docs/articles/Cpp/Polymorphism"}},c={},l=[{value:"1.What is the advantage of Pass by reference ?",id:"1what-is-the-advantage-of-pass-by-reference-",level:3},{value:"2.What is the advantage of Inline Functions over Macros ?",id:"2what-is-the-advantage-of-inline-functions-over-macros-",level:3},{value:"3.Define Default Function Arguments?",id:"3define-default-function-arguments",level:3},{value:"4.What is a Friend Function?",id:"4what-is-a-friend-function",level:3},{value:"5.Can a Member functions of one class can be friend functions of another class ?",id:"5can-a-member-functions-of-one-class-can-be-friend-functions-of-another-class-",level:3},{value:"6.How to access global version instead of local version in a function ?",id:"6how-to-access-global-version-instead-of-local-version-in-a-function-",level:3},{value:"7.What is the difference between Static and Constant Member Functions ?",id:"7what-is-the-difference-between-static-and-constant-member-functions-",level:3}];function d(n){const e={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(e.h3,{id:"1what-is-the-advantage-of-pass-by-reference-",children:"1.What is the advantage of Pass by reference ?"}),"\n",(0,t.jsx)(e.p,{children:"Pass by reference is more efficient since it requires to pass only the address of the object and not the entire object."}),"\n",(0,t.jsx)(e.h3,{id:"2what-is-the-advantage-of-inline-functions-over-macros-",children:"2.What is the advantage of Inline Functions over Macros ?"}),"\n",(0,t.jsx)(e.p,{children:"Advantages of Inline Functions:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"It speeds up the program execution and increase efficiency of the program"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"It will decrease over head on the computer"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"The inline functions are applicable to small functions only"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"3define-default-function-arguments",children:"3.Define Default Function Arguments?"}),"\n",(0,t.jsx)(e.p,{children:"C++ allows a function to assign a parameter a default value when no argument corresponding to that parameter is specified in a call to that function."}),"\n",(0,t.jsx)(e.p,{children:"We can also use default parameters in a object constructor."}),"\n",(0,t.jsx)(e.p,{children:"e.g: void myFun(double d, int i = 0)"}),"\n",(0,t.jsx)(e.h3,{id:"4what-is-a-friend-function",children:"4.What is a Friend Function?"}),"\n",(0,t.jsx)(e.p,{children:"Friend Function is not a member variable.  It has full access to the private members of the class. A function declared as a friend is not in the scope of the class to which it has been declared as a friend."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class MyCls {\r\nprivate:\r\n    int j;\r\npublic:\r\n    MyClass() { j = 12; }\r\n    friend void fun1(MyCls m);\r\n};\r\nvoid fun1(MyCls m) { cout << m.j; }\r\n\r\nvoid main() {\r\n    MyCls obj;\r\n    fun1(obj);\r\n}\r\n\r\nOutput: 12\n"})}),"\n",(0,t.jsx)(e.h3,{id:"5can-a-member-functions-of-one-class-can-be-friend-functions-of-another-class-",children:"5.Can a Member functions of one class can be friend functions of another class ?"}),"\n",(0,t.jsx)(e.p,{children:"Yes ! In such cases they are defined using the scope resolution operator (::)."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class C2;\r\nclass C1 {\r\n int No1;\r\npublic:\r\n C1() { No1 = 10; }\r\n int Add(C2 b);\r\n};\r\nclass C2 {\r\n int No2;\r\npublic:\r\n C2() { No2 = 20; }\r\n friend int C1::Add(C2 b);\r\n};\r\n\r\nint C1::Add(C2 b) {\r\n return No1 + b.No2;\r\n}\r\n\r\nvoid main() {\r\n C1 x;\r\n C2 y;\r\n cout << x.Add(y);\r\n}\r\n\r\nOutput: 30\n"})}),"\n",(0,t.jsx)(e.h3,{id:"6how-to-access-global-version-instead-of-local-version-in-a-function-",children:"6.How to access global version instead of local version in a function ?"}),"\n",(0,t.jsx)(e.p,{children:"In order to access global version of \u2018i\u2019 instead of local version of I use scope resolution operator (::)."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"int i = 10;\r\nvoid fun()\r\n{\r\n    int i = 5;\r\n    cout<<::i; //output:10\r\n    cout<<i;   //output:5\r\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"7what-is-the-difference-between-static-and-constant-member-functions-",children:"7.What is the difference between Static and Constant Member Functions ?"}),"\n",(0,t.jsx)(e.p,{children:"Static Member Functions:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"If can have access to only other static members (functions of variables) declared in the same class."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"If can be called using the class name (instead of its objects) as follows."}),"\n",(0,t.jsx)(e.p,{children:"class _name::function name"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Constant Members Functions:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"If a member function does not alter any data in the class then we may declare it as a constant member function as follows."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"void (int a, int b)  const { }"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"The complier will generate an error message if such function try to alter the data value."}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>r,a:()=>o});var t=s(67294);const i={},a=t.createContext(i);function o(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);