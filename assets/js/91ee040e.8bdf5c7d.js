"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[94917],{73225:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(85893),n=t(11151);const i={sidebar_position:4},s="Storage classes",o={id:"articles/C/StorageClasses",title:"Storage classes",description:"1. Define C - storage class ?",source:"@site/docs/articles/C/StorageClasses.md",sourceDirName:"articles/C",slug:"/articles/C/StorageClasses",permalink:"/docs/articles/C/StorageClasses",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data Types",permalink:"/docs/articles/C/DataTypes"},next:{title:"Control Statements",permalink:"/docs/articles/C/ControlStatements"}},l={},c=[{value:"1. Define C - storage class ?",id:"1-define-c---storage-class-",level:3},{value:"2. Explain about auto or Automatic storage class ?",id:"2-explain-about-auto-or-automatic-storage-class-",level:3},{value:"3. Explain about Register storage class?",id:"3-explain-about-register-storage-class",level:3},{value:"4. Explain about Static storage class?",id:"4-explain-about-static-storage-class",level:3},{value:"5. Explain about External storage class ?",id:"5-explain-about-external-storage-class-",level:3}];function d(e){const a={code:"code",em:"em",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"storage-classes",children:"Storage classes"}),"\n",(0,r.jsx)(a.h3,{id:"1-define-c---storage-class-",children:"1. Define C - storage class ?"}),"\n",(0,r.jsx)(a.p,{children:"A storage class defines the scope (visibility) and life-time of variables and/or functions within a C Program. These specifiers precede the type that they modify. There are the following storage classes, which can be used in a C Program\r\na. auto\r\nb. register\r\nc. static\r\nd. extern"}),"\n",(0,r.jsx)(a.h3,{id:"2-explain-about-auto-or-automatic-storage-class-",children:"2. Explain about auto or Automatic storage class ?"}),"\n",(0,r.jsx)(a.p,{children:"The keyword used for Automatic storage class is 'auto'.\r\nThe variable declared as auto is stored in the memory.\r\nDefault value of that variable is garbage value.\r\nScope of that variable is local to the block in which the variable is defined.\r\nVariable is alive till the control remains within the block in which the variable id defined."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.em,{children:(0,r.jsx)(a.strong,{children:"Example:"})})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-c",children:"void main()\r\n{\r\n          auto int a;\r\n          printf(\u201c%d\u201d,a)\r\n}\r\n\r\n* Output: *\r\n1285\n"})}),"\n",(0,r.jsx)(a.p,{children:"As seen above, the output is garbage value."}),"\n",(0,r.jsx)(a.h3,{id:"3-explain-about-register-storage-class",children:"3. Explain about Register storage class?"}),"\n",(0,r.jsx)(a.p,{children:"The keyword used for Register storage class is 'register'.\r\nThe variable declared as register is stored in the CPU register.\r\nDefault value of that variable is garbage value.\r\nScope of that variable is local to the block in which the variable is defined.\r\nVariable is alive till the control remains within the block in which the variable id defined.\r\nMain difference between auto and register is that variable declared as auto is stored in memory whereas variable declared as register is stored in CPU register. Since the variable is stored in CPU register, it takes very less time to access that variable. Hence it becomes very time efficient.\r\nIt is not necessary that variable declared as register would be stored in CPU registers. The number of CPU registers is limited. If the CPU register is busy doing some other task then variable might act as automatic variable."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.em,{children:(0,r.jsx)(a.strong,{children:"Example:"})})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-c",children:"#include<stdio.h>\r\n#include<conio.h>\r\nVoid main(){\r\n          register int a;\r\n          printf(\u201c%d\u201d,a)\r\n}\r\n* Output: *\r\n4587\n"})}),"\n",(0,r.jsx)(a.p,{children:"As seen above, the output is garbage value."}),"\n",(0,r.jsx)(a.h3,{id:"4-explain-about-static-storage-class",children:"4. Explain about Static storage class?"}),"\n",(0,r.jsx)(a.p,{children:"The keyword used for Static storage class is 'static'.\r\nThe variable declared as static is stored in the memory.\r\nDefault value of that variable is zero.\r\nScope of that variable is local to the block in which the variable is defined.\r\nLife of variable persists between different function calls."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.em,{children:(0,r.jsx)(a.strong,{children:"Example:"})})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-c",children:'#include <stdio.h>\r\n \r\n/* function declaration */\r\nvoid func(void);\r\n \r\nstatic int count = 5; /* global variable */\r\n \r\nmain()\r\n{\r\n   while(count--)\r\n   {\r\n      func();\r\n   }\r\n   return 0;\r\n}\r\n/* function definition */\r\nvoid func( void )\r\n{\r\n   static int i = 5; /* local static variable */\r\n   i++;\r\n\r\n   printf("i is %d and count is %d\\n", i, count);\r\n}\r\n\r\n* Output: *\r\ni is 6 and count is 4\r\ni is 7 and count is 3\r\ni is 8 and count is 2\r\ni is 9 and count is 1\r\ni is 10 and count is 0\n'})}),"\n",(0,r.jsx)(a.h3,{id:"5-explain-about-external-storage-class-",children:"5. Explain about External storage class ?"}),"\n",(0,r.jsx)(a.p,{children:"The keyword used for External storage class is 'extern'.\r\nThe variable declared as extern is stored in the memory.\r\nDefault value of that variable is zero.\r\nScope of that variable is global.\r\nVariable is alive as long as the program\u2019s execution doesn\u2019t come to an end."}),"\n",(0,r.jsx)(a.p,{children:"External variable can be declared outside all the functions or inside function using 'extern' keyword."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.em,{children:(0,r.jsx)(a.strong,{children:"Example:"})})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-c",children:"#include<stdio.h>\r\nint a;\r\nVoid main(){\r\n          extern int b;\r\n          printf(\u201c%d %d\u201d,a,b)\r\n}\r\nint b=10;\r\n\r\n* Output: *\r\n0 10\n"})})]})}function u(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>s});var r=t(67294);const n={},i=r.createContext(n);function s(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);