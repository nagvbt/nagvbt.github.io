"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[78751],{76903:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=e(85893),a=e(11151);const i={tags:["C++","CSharp","Java"]},s="Part-2: C++, C#, Java Syntax Differences",c={permalink:"/blog/2012/04/12/syntax-2",source:"@site/blog/2012-04-12-syntax-2.md",title:"Part-2: C++, C#, Java Syntax Differences",description:"[Part-2: Basic Input/Output] C++, C#, Java Syntax Differences",date:"2012-04-12T00:00:00.000Z",formattedDate:"April 12, 2012",tags:[{label:"C++",permalink:"/blog/tags/c"},{label:"CSharp",permalink:"/blog/tags/c-sharp"},{label:"Java",permalink:"/blog/tags/java"}],readingTime:1.48,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["C++","CSharp","Java"]},unlisted:!1,prevItem:{title:"Part-1: C++, C#, Java Syntax Differences",permalink:"/blog/2012/04/12/syntax-1"},nextItem:{title:"Part-3: C++, C#, Java Syntax Differences",permalink:"/blog/2012/04/12/syntax-3"}},o={authorsImageUrls:[]},l=[{value:"Basic Input/Output",id:"basic-inputoutput",level:2}];function u(n){const r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"[Part-2: Basic Input/Output] C++, C#, Java Syntax Differences"}),"\n",(0,t.jsx)(r.h2,{id:"basic-inputoutput",children:"Basic Input/Output"}),"\n",(0,t.jsx)(r.p,{children:"Using the standard input and output library, we will be able to interact with the user by printing messages on the screen and getting the user's input from the keyboard."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"1. C++"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Input \xa0 \xa0- ",(0,t.jsx)(r.code,{children:"cin>>"})]}),"\n",(0,t.jsxs)(r.li,{children:["Output   - ",(0,t.jsx)(r.code,{children:"cout<<"})]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:'// Print Greetings Program\r\n// Basic Input/Output\r\nvoid PrintGreeting(char name[])\r\n{\r\n    cout<<"Hello " << name <<endl;\r\n}\r\n\r\nint main(int argc, char* argv[])\r\n{\r\n    char name[100\\];\r\n\r\n    cout<<"Enter Your Name:"; //cout -> Standard Output\r\n    cin>>name;                //cin  -> Standard Input \r\n\r\n    PrintGreeting(name);\r\n\r\n    return 1;\r\n}\r\n\r\n/* OUT PUT\r\nEnter Your Name:nagvbt\r\nHello nagvbt\r\n*/\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"2. C#"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Input \xa0-\xa0Console.WriteLine()"}),"\n",(0,t.jsx)(r.li,{children:"Output -\xa0Console.ReadLine()"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:'// Print Greetings Program\r\n// Basic Input/Output\r\nnamespace CSharpSample\r\n{\r\n    class Program\r\n    {\r\n        static void PrintGreeting(char[] name)\r\n        {\r\n           Console.WriteLine("Hello "+ new string(name));\r\n        }\r\n\r\n        static int Main(string[] args)\r\n        {\r\n            char[] name;\r\n\r\n            Console.WriteLine("Enter Your Name:"); //Console.WriteLine() -> Standard Output\r\n            string sName = Console.ReadLine();     //Console.ReadLine()  -> Standard Input\r\n            name = sName.ToCharArray();\r\n\r\n            PrintGreeting(name);\r\n\r\n            return 1;\r\n        }\r\n    }\r\n}\r\n\r\n/* * OUTPUT * *\r\nEnter Your Name:\r\nNag VBT\r\nHello Nag VBT\r\n* * * * * * * */\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"3. Java"})}),"\n",(0,t.jsx)(r.p,{children:"Input - System.out.println()"}),"\n",(0,t.jsx)(r.p,{children:"Output - System.in.read()"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'import java.io.IOException;\r\n\r\nclass Program\r\n{\r\n    public static void PrintGreeting(char[] name)\r\n    {\r\n         System.out.println("Hello "+ new String(name));\r\n    }\r\n\r\n    public static void main(String[] args)\r\n    {\r\n        char[] name;\r\n\r\n        System.out.print("Enter Your Name:"); //System.out.println -> Standard Output\r\n\r\n        String sName = "";\r\n        int tmp;\r\n        try\r\n        {\r\n            while((tmp = System.in.read ()) != \'n\')  // System.in.read   -> Standard Input\r\n            {\r\n                char c = (char) tmp;\r\n                sName = sName + c;\r\n            }\r\n\r\n        }\r\n        catch (IOException e)\r\n        {\r\n            e.printStackTrace();\r\n        }\r\n\r\n        name = sName.toCharArray();\r\n        PrintGreeting(name);\r\n     }\r\n}\r\n\r\n/* OUTPUT\r\nEnter Your Name:Nag VBT\r\nHello Nag VBT\r\n*/\n'})})]})}function p(n={}){const{wrapper:r}={...(0,a.a)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},11151:(n,r,e)=>{e.d(r,{Z:()=>c,a:()=>s});var t=e(67294);const a={},i=t.createContext(a);function s(n){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function c(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),t.createElement(i.Provider,{value:r},n.children)}}}]);