"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[87838],{10587:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(85893),i=t(11151);const a={sidebar_position:5},s="Control Statements",o={id:"articles/C/ControlStatements",title:"Control Statements",description:"1. What are control statements?",source:"@site/docs/articles/C/ControlStatements.md",sourceDirName:"articles/C",slug:"/articles/C/ControlStatements",permalink:"/docs/articles/C/ControlStatements",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Storage classes",permalink:"/docs/articles/C/StorageClasses"},next:{title:"Iterative Statements",permalink:"/docs/articles/C/Iterative"}},l={},c=[{value:"1. What are control statements?",id:"1-what-are-control-statements",level:3},{value:"2. What are Selection Statements ?",id:"2-what-are-selection-statements-",level:3},{value:"3. Explain about if &amp; if-else Selection Statements ?",id:"3-explain-about-if--if-else-selection-statements-",level:3},{value:"4. Write a program  To find given number is even or odd use &#39;if &amp; if-else&#39; Selection Statements?",id:"4-write-a-program--to-find-given-number-is-even-or-odd-use-if--if-else-selection-statements",level:3},{value:"5. Explain about Switch Selection Statement ?",id:"5-explain-about-switch-selection-statement-",level:3},{value:"6. Write a program to test for gender by accepting a character. Make use of switch statement ?",id:"6-write-a-program-to-test-for-gender-by-accepting-a-character-make-use-of-switch-statement-",level:3},{value:"7. Explain about Logical Operators?",id:"7-explain-about-logical-operators",level:3},{value:"8. Write a program to calculate the division obtained by the student. Make use of Logical Operators ?",id:"8-write-a-program-to-calculate-the-division-obtained-by-the-student-make-use-of-logical-operators-",level:3},{value:"9. Explain about Conditional Operators?",id:"9-explain-about-conditional-operators",level:3},{value:"10. Give an example for Conditional Operators?",id:"10-give-an-example-for-conditional-operators",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"control-statements",children:"Control Statements"}),"\n",(0,r.jsx)(n.h3,{id:"1-what-are-control-statements",children:"1. What are control statements?"}),"\n",(0,r.jsx)(n.p,{children:"Control statements controls the flow of the program execution. There are three types of controls statements\r\na. Selection\r\nb. Iteration\r\nc. Jump statements"}),"\n",(0,r.jsx)(n.h3,{id:"2-what-are-selection-statements-",children:"2. What are Selection Statements ?"}),"\n",(0,r.jsx)(n.p,{children:"A selection statement can direct the flow of program execution along different paths depending on a given condition."}),"\n",(0,r.jsx)(n.p,{children:"Five Kinds of selection statements:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"if"}),"\n",(0,r.jsx)(n.li,{children:"if-else"}),"\n",(0,r.jsx)(n.li,{children:"Switch     e"}),"\n",(0,r.jsx)(n.li,{children:"Logical operators"}),"\n",(0,r.jsx)(n.li,{children:"Conditional operators"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-explain-about-if--if-else-selection-statements-",children:"3. Explain about if & if-else Selection Statements ?"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The if statement\r\nIf the condition, whatever it is, is true, then the statements in the "," executed."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"if(condition)\r\n{\r\n  //statements 1\r\n  //statements n\r\n}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"The if-else Statement\r\nIf we want to execute one group of statements if the expression evaluates to true and another group of statements if the expression evaluates to false the use the if-else statement:"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"if(conditional) {\r\n  //statements 1\r\n}\r\nelse{\r\n  // statements 2\r\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"4-write-a-program--to-find-given-number-is-even-or-odd-use-if--if-else-selection-statements",children:"4. Write a program  To find given number is even or odd use 'if & if-else' Selection Statements?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>  \r\nint main(void)                \r\n{\r\n int num = 0;\r\n \r\n puts("Enter a number");\r\n scanf("%d", &num);\r\n \r\n if ( num % 2 == 0 )\r\n {\r\n  puts( "Given number is even" );\r\n }\r\n else          \r\n {\r\n    puts( "Given number is odd" );  \r\n }\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"5-explain-about-switch-selection-statement-",children:"5. Explain about Switch Selection Statement ?"}),"\n",(0,r.jsx)(n.p,{children:"C has a built-in multiple-branch selection statement, called switch, which successively tests the value of an expression against a list of integer or character constants. When a match is found, the statements associated with that constant are executed."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"switch (expression) \r\n{\r\n case constant1:\r\n statement sequence\r\n break;\r\n\r\n case constant2:\r\n statement sequence\r\n break;\r\n .\r\n .\r\n default\r\n statement sequence\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note: The expression must evaluate to an integer type. Thus, you can use character or integer values, but floating-point expressions, are not allowed. The default statement is executed if no matches are found."}),"\n",(0,r.jsx)(n.p,{children:'When break is encountered in a switch, program execution "jumps" to the line of code following the switch statement.'}),"\n",(0,r.jsx)(n.h3,{id:"6-write-a-program-to-test-for-gender-by-accepting-a-character-make-use-of-switch-statement-",children:"6. Write a program to test for gender by accepting a character. Make use of switch statement ?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>  \r\nint main(void)                \r\n{\r\n char ch;\r\n \r\n printf("Enter your sex (m/f):");\r\n scanf("%c", &ch);\r\n \r\n switch(ch)\r\n {\r\n  case \'m\':\r\n   printf( "You are a male." );\r\n  break;\r\n    \r\n  case \'f\':\r\n   printf( "You are a female." );\r\n  break;\r\n\r\n  default:\r\n   printf( "Error: Invalid sex code:" );\r\n }\r\n\r\n return 0;\r\n}\r\n\r\n* OUTPUT: *                   \r\nEnter your sex (m/f):m \r\nYou are a male.\n'})}),"\n",(0,r.jsx)(n.h3,{id:"7-explain-about-logical-operators",children:"7. Explain about Logical Operators?"}),"\n",(0,r.jsx)(n.p,{children:"C allows usage of three logical operators, namely, &&, || and !. These are to be read as \u2018AND\u2019 \u2018OR\u2019 and \u2018NOT\u2019 respectively.\r\nThe following figure summarizes the working of all the three logical operators."}),"\n",(0,r.jsx)(n.h3,{id:"8-write-a-program-to-calculate-the-division-obtained-by-the-student-make-use-of-logical-operators-",children:"8. Write a program to calculate the division obtained by the student. Make use of Logical Operators ?"}),"\n",(0,r.jsx)(n.p,{children:"The marks obtained by a student in 5 different subjects are input through the keyboard. The student gets a division as per the following rules:\r\n\u2022 Percentage above or equal to 60 - First division\r\n\u2022 Percentage between 50 and 59 - Second division\r\n\u2022 Percentage between 40 and 49 - Third division\r\n\u2022 Percentage less than 40 - Fail"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>  \r\nmain( )\r\n{\r\n int m1, m2, m3, m4, m5, per ;\r\n printf ( "Enter marks in five subjects " ) ;\r\n scanf ( "%d %d %d %d %d", &m1, &m2, &m3, &m4, &m5 ) ;\r\n per = ( m1 + m2 + m3 + m4 + m5 ) / 5 ;\r\n\r\n if ( per >= 60 )\r\n {\r\n  printf ( "First division" ) ;\r\n }\r\n\r\n if ( ( per >= 50 ) && ( per < 60 ) )\r\n {\r\n  printf ( "Second division" ) ;\r\n }\r\n\r\n if ( ( per >= 40 ) && ( per < 50 ) )\r\n {\r\n  printf ( "Third division" ) ;\r\n }\r\n\r\n if ( per < 40 )\r\n {\r\n  printf ( "Fail" ) ;\r\n }\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"9-explain-about-conditional-operators",children:"9. Explain about Conditional Operators?"}),"\n",(0,r.jsx)(n.p,{children:"The conditional operators ? and : are sometimes called ternary operators since they take three arguments. In fact, they form a kind of foreshortened if-then-else. Their general form is,"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Syntax: *\r\nexpression 1 ? expression 2",":expression"," 3\r\nWhat this expression says is: \u201cif expression 1 is true (that is, if its value is non-zero), then the value returned will be expression 2, otherwise the value returned will be expression 3\u201d. Let us understand this with the help of a few examples:"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"10-give-an-example-for-conditional-operators",children:"10. Give an example for Conditional Operators?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'int x, y ; \r\nscanf ( "%d", &x ) ; \r\ny = ( x > 5 ? 3 : 4 ) ; \n'})}),"\n",(0,r.jsx)(n.p,{children:"This statement will store 3 in y if x is greater than 5, otherwise it will store 4 in y. The equivalent if statement will be,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"if ( x > 5 ) \r\n{\r\n      y = 3 ; \r\n}\r\nelse \r\n{\r\n     y = 4 ; \r\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);