"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[83098],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},35654:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:9},i="Structures Unions Enumerations",s={unversionedId:"articles/C/Structures",id:"articles/C/Structures",title:"Structures Unions Enumerations",description:"1. Define structure ?",source:"@site/docs/articles/C/Structures.md",sourceDirName:"articles/C",slug:"/articles/C/Structures",permalink:"/docs/articles/C/Structures",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/docs/articles/C/Arrays"},next:{title:"Pointers",permalink:"/docs/articles/C/Pointers"}},u={},l=[{value:"1. Define structure ?",id:"1-define-structure-",level:3},{value:"2. Write a program to demonstrate structure ?",id:"2-write-a-program-to-demonstrate-structure-",level:3},{value:"3. How to pass a entire Structures to a Function ?",id:"3-how-to-pass-a-entire-structures-to-a-function-",level:3},{value:"4. Explain about Nested Structures ?",id:"4-explain-about-nested-structures-",level:3},{value:"5. Define Union ?",id:"5-define-union-",level:3},{value:"6. What is the difference between structure and union ?",id:"6-what-is-the-difference-between-structure-and-union-",level:3},{value:"7. Explain about Union memory allocation  ?",id:"7-explain-about-union-memory-allocation--",level:3},{value:"8. Define and explain enumeration with an example ?",id:"8-define-and-explain-enumeration-with-an-example-",level:3}],c={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"structures-unions-enumerations"},"Structures Unions Enumerations"),(0,a.kt)("h3",{id:"1-define-structure-"},"1. Define structure ?"),(0,a.kt)("p",null,"Definition:  A structure is a collection of variables of different data type that are referenced by a common name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Syntax:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct stName \n{ \n dataType member1; \n dataType member2; \n \u2026 \n \u2026 \n};\n\nstruct stName j, k;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct book\n{\n char name ;\n float price ;\n int pages ;\n} ;\n\n/* Declaration */\nstruct book b1, b2;\n\n/* Definition for book b1*/\nb1.name = 'A';\nb1.price = 100;\nb1.pages = 600;\n")),(0,a.kt)("p",null,"We can also declare and define the book structure as\nstruct book bk5 = { 'B', 130.00, 550 } ;"),(0,a.kt)("h3",{id:"2-write-a-program-to-demonstrate-structure-"},"2. Write a program to demonstrate structure ?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\nstruct book\n{\n char name ;\n float price ;\n int pages ;\n};\n\nint main( )\n{\n struct book b1;\n\n     b1.name = \'A\';\n b1.price = 100;\n b1.pages = 600;\n\n printf ( "\\nBook name  = %c", b1.name ) ;\n printf ( "\\nBook price = %f", b1.price ) ;\n printf ( "\\nBook pages = %d", b1.pages ) ;\n return 0;\n}\n\nOUTPUT\nBook name  = A\nBook price = 100.000000\nBook pages = 600\n')),(0,a.kt)("h3",{id:"3-how-to-pass-a-entire-structures-to-a-function-"},"3. How to pass a entire Structures to a Function ?"),(0,a.kt)("p",null,"When a structure is used as an argument to a function, the entire structure is passed using the normal call-by-value method."),(0,a.kt)("p",null,"Note: When using a structure as a parameter, remember that the type of the argument must match the type of the parameter. For example, in the following program both the argument b1 and the parameter x are declared as the same type of structure."),(0,a.kt)("p",null,"Example:For demonstrating passing structure to a function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\nvoid printStruct(struct book x);\n\nstruct book\n{\n char name ;\n float price ;\n int pages ;\n};\n\nint main( )\n{\n   struct book b1;\n\n    b1.name = \'A\';\n    b1.price = 100;\n    b1.pages = 600;\n    printStruct(b1);\n\n    return 0;\n}\n\nvoid printStruct(struct book x)\n{\n printf ( "\\nBook name  = %c", x.name ) ;\n printf ( "\\nBook price = %f", x.price ) ;\n printf ( "\\nBook pages = %d", x.pages ) ;\n}\n\nOUTPUT\nBook name  = A\nBook price = 100.000000\nBook pages = 600\n')),(0,a.kt)("h3",{id:"4-explain-about-nested-structures-"},"4. Explain about Nested Structures ?"),(0,a.kt)("p",null,"Definition: When a structure is a member of another structure, it is called a nested structure. For example, the structure address is nested inside emp in this example:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct address \n{\n char name[30];\n char city[20];\n char country[3];\n int zip;\n};\n\nstruct employee\n{\n struct address addr; /* nested structure */\n float salary;\n\n} worker;\n")),(0,a.kt)("p",null,"Here, structure employee has been defined as having two members. The first is a structure of type address, which contains an employee's address. The other is salary, which holds the employee's wage. The following code fragment assigns 52133 to the zip element of address."),(0,a.kt)("p",null,"worker.address.zip = 521333;\nworker.salary = 10000;"),(0,a.kt)("h3",{id:"5-define-union-"},"5. Define Union ?"),(0,a.kt)("p",null,"Definition: A Union is a collection of variables of different data type that are referenced by a common name. A union is a memory location that is shared by two or more different types of variables. Unions are similar to structures. A union is declared and used in the same ways that a structure is. A union differs from a structure in that only one of its members can be used at a time. The reason for this is simple. All the members of a union occupy the same area of memory. They are laid on top of each other."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\nunion info\n{\n char a;\n int x;\n float f;\n} myData;\n\nint main()\n{\n myData.a = 'A';\n     myData.x = 11;\n     myData.f = 101.357;\n\n     printf(\"Here is the Data:\\n a=%c\\n x=%i\\n f=%.3f\\n\", \n           myData.a, myData.x, myData.f );\n \n return 0;\n}\n\n* OUTPUT: *\nHere is the Data:\na = A\nx = 1120581321\nf = 101.357\n")),(0,a.kt)("p",null,"Note: From above output it can be observed that even though if we assign the values to a, x, f. Only f value is displayed correctly since float value occues all the memory assigned for myData."),(0,a.kt)("h3",{id:"6-what-is-the-difference-between-structure-and-union-"},"6. What is the difference between structure and union ?"),(0,a.kt)("p",null,"Structures stores different variables at different location in memory whereas union occupies same memory location for all of its member variable. Structures allocates the memory equal to total memory required by its member variables but Union allocates the memory equal to the size of largest member of the union. Lets take an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"Struct info\n{\n char name;\n int age;\n float weight;\n}\n")),(0,a.kt)("p",null,"Size of the structure info is sum of the size of all its member variables.\nSize of structure info = size of char (1) + size of int (4) + size of float (4) = 9 bytes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"union info\n{\nchar name;\nint age;\nfloat weight;\n}\n")),(0,a.kt)("p",null,"Size of the union info is the memory equal to the size of largest member of the union, i.e., float"),(0,a.kt)("p",null,"Size of union info = Size of float = size of int = 4 bytes."),(0,a.kt)("h3",{id:"7-explain-about-union-memory-allocation--"},"7. Explain about Union memory allocation  ?"),(0,a.kt)("p",null,"At a particular point of time we can access only one member of the union. In union, memory allocated is used by all the members of the union but in case of structures, each member have it\u2019s  own memory space allocated."),(0,a.kt)("h3",{id:"8-define-and-explain-enumeration-with-an-example-"},"8. Define and explain enumeration with an example ?"),(0,a.kt)("p",null,"Definition: An enumeration is a set of named integer constants."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Syntax:")),"\nenum  enumName  { enumeration list } ;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h> \nenum DAY { Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday };\n\nint main()\n{ \n DAY TheDay;\n int j = 0;\n printf("Please enter the day of the week (0 to 6)\\n");\n scanf("%d",&j);\n TheDay = DAY(j);\n\n if(TheDay == Sunday || TheDay == Saturday)\n {\n  printf("Hurray it is the weekend\\n");\n }\n else\n {\n  printf("Still at work\\n");\n }\n return 0;\n}\n\n* OUTPUT: *\nPlease enter the day of the week (0 to 6)\n5\nStill at work\n')))}m.isMDXComponent=!0}}]);