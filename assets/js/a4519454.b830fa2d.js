"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[76706],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return t?n.createElement(m,o(o({ref:a},p),{},{components:t})):n.createElement(m,o({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},83250:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const i={sidebar_position:2},o="Declarations and Initializations",l={unversionedId:"articles/C/Declarations",id:"articles/C/Declarations",title:"Declarations and Initializations",description:"1. What is a Constant ?",source:"@site/docs/articles/C/Declarations.md",sourceDirName:"articles/C",slug:"/articles/C/Declarations",permalink:"/docs/articles/C/Declarations",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/articles/C/Basics"},next:{title:"Data Types",permalink:"/docs/articles/C/DataTypes"}},s={},c=[{value:"1. What is a Constant ?",id:"1-what-is-a-constant-",level:3},{value:"2. What is a Variable or Identifier ?",id:"2-what-is-a-variable-or-identifier-",level:3},{value:"3. How do you decide which integer type to use?",id:"3-how-do-you-decide-which-integer-type-to-use",level:3},{value:"4. Where Variables are declared?",id:"4-where-variables-are-declared",level:3},{value:"5. What&#39;s the difference between a definition and declaration of a variable?",id:"5-whats-the-difference-between-a-definition-and-declaration-of-a-variable",level:3},{value:"6. What&#39;s the best way to declare and define global variables?",id:"6-whats-the-best-way-to-declare-and-define-global-variables",level:3},{value:"7. What is a Keywoard ?",id:"7-what-is-a-keywoard-",level:3},{value:"8. Explain structure of C program ?",id:"8-explain-structure-of-c-program-",level:3},{value:"9. What is a Expression ?",id:"9-what-is-a-expression-",level:3},{value:"10. Explain about Operators ?",id:"10-explain-about-operators-",level:3}],p={toc:c},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"declarations-and-initializations"},"Declarations and Initializations"),(0,r.kt)("h3",{id:"1-what-is-a-constant-"},"1. What is a Constant ?"),(0,r.kt)("p",null,"A constant is an entity that doesn\u2019t change.\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"constant")," is a number, character, or character string that can be used as a value in a program. Use constants to represent floating-point, integer, enumeration, or character values that cannot be modified."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Syntax:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"floating-point-constant  eg. 1.9, \ninteger-constant , \nenumeration-constant, \ncharacter-constant\n")),(0,r.kt)("h3",{id:"2-what-is-a-variable-or-identifier-"},"2. What is a Variable or Identifier ?"),(0,r.kt)("p",null,"A variable is an entity that may change.\nvariable is a named location in memory that is used to hold a value that can be modified by the program. All variables must be declared before they can be used."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Syntax:")),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"DataType variable_list;")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Example:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int i, j, l;\nshort int si;\nunsigned int ui;\ndouble balance, profit, loss;\n")),(0,r.kt)("h3",{id:"3-how-do-you-decide-which-integer-type-to-use"},"3. How do you decide which integer type to use?"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"short")," when you need to avoid values over 32,767, ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," when you want to store integers, ",(0,r.kt)("inlineCode",{parentName:"p"},"long")," for long numbers (more than 6 digits), and ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," for numbers over 4 billion."),(0,r.kt)("h3",{id:"4-where-variables-are-declared"},"4. Where Variables are declared?"),(0,r.kt)("p",null,"Variables can be declared in three places: see the below figure."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Inside functions \u2013 called as local variables"),(0,r.kt)("li",{parentName:"ol"},"In the definition of function parameters \u2013 called as formal parameters"),(0,r.kt)("li",{parentName:"ol"},"Outside of all functions  \u2013  called as global variables")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Example:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"char sName[10]; --\x3e Global Variables\n\nint main()\n{\n  float salary; --\x3e Local Variables \n}\n")),(0,r.kt)("h3",{id:"5-whats-the-difference-between-a-definition-and-declaration-of-a-variable"},"5. What's the difference between a definition and declaration of a variable?"),(0,r.kt)("p",null,"In the definition of a variable space is reserved for the variable and some initial value is given to it. Whereas a declaration only identifies the type of the variable but no storage is allocated."),(0,r.kt)("h3",{id:"6-whats-the-best-way-to-declare-and-define-global-variables"},"6. What's the best way to declare and define global variables?"),(0,r.kt)("p",null,"In headers; this way, you can get link errors when you include the same header twice. Generally, you will have to define a variable everywhere you want to use it, and then declare it someplace so you know what it is."),(0,r.kt)("h3",{id:"7-what-is-a-keywoard-"},"7. What is a Keywoard ?"),(0,r.kt)("p",null,"The following keywords are reserved in C, each having a specific meaning to the compiler, and must not be used as identifiers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"auto else long switch\nbreak enum register  typedef\ncase extern return union\nchar float short unsigned\nconst for signed void\ncontinue goto sizeof volatile\ndefault if static while\ndo int struct _Packed\ndouble.\n")),(0,r.kt)("h3",{id:"8-explain-structure-of-c-program-"},"8. Explain structure of C program ?"),(0,r.kt)("p",null,"A group of instructions would be combined form a program. Each\nThe building blocks of a C program are functions which can invoke one another.  A \u2018Function\u2019 can be defined as a program which performs a certain task.\nEvery C program must have at least one function of its own, with the special name main( ). Main is the first function invoked when the program starts. It can call other functions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Example:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nint main(void)                \n{\n    /* define a variable called num */\n int num; \n /* assign a value to num        */\n    num = 6; \n\n /* use the printf() function    */\n    printf("MASTER C !! \\n"); \n\n    printf("My favorite No. is %d \\n",num);\n    return 0;\n}\nOutput                    \nLearn MASTER C !!  \nMy favorite No. is 6\n')),(0,r.kt)("h3",{id:"9-what-is-a-expression-"},"9. What is a Expression ?"),(0,r.kt)("p",null,"Expression is anything that evaluates to a numeric value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Example:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int x, y;\ny = 10;\nx = a + 10; //Expression\n")),(0,r.kt)("h3",{id:"10-explain-about-operators-"},"10. Explain about Operators ?"),(0,r.kt)("p",null,"Definition: An operator is a symbol that instructs C to perform some operation, or action, on one or more operands."),(0,r.kt)("p",null,"-",(0,r.kt)("em",{parentName:"p"},"- Category of operators  -"),"-"),(0,r.kt)("p",null,"Unary Operators: A unary operator is an operator, which operates on one operand.  "),(0,r.kt)("p",null,"Binary: A binary operator is an operator, which operates on two operands."),(0,r.kt)("p",null,"Ternary: A ternary operator is an operator, which operates on three operands."),(0,r.kt)("p",null,"There are four types of operators in C"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The assignment operator"),(0,r.kt)("li",{parentName:"ol"},"Mathematical operators"),(0,r.kt)("li",{parentName:"ol"},"Comparative or Relational operators"),(0,r.kt)("li",{parentName:"ol"},"Logical operators")))}u.isMDXComponent=!0}}]);