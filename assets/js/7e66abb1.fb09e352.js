"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[96983],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,u=m["".concat(p,".").concat(f)]||m[f]||d[f]||i;return t?r.createElement(u,o(o({ref:n},s),{},{components:t})):r.createElement(u,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},40073:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={tags:["MFC"]},o="Change a Window's title of an SDI/MDI Application",l={permalink:"/blog/2012/03/13/change-a-windows-title-of-an-sdimdi",source:"@site/blog/2012-03-13-change-a-windows-title-of-an-sdimdi.md",title:"Change a Window's title of an SDI/MDI Application",description:"Call **SetWindowText** method by passing required title as a string in the CWinApp::InitInstance() method after\xa0ProcessShellCommand() method. Please see the below code snippet",date:"2012-03-13T00:00:00.000Z",formattedDate:"March 13, 2012",tags:[{label:"MFC",permalink:"/blog/tags/mfc"}],readingTime:.525,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["MFC"]},prevItem:{title:"Creating an SDI/MDI application that is initially maximized",permalink:"/blog/2012/03/14/sdimdi-application-that-is-initially-maximized"},nextItem:{title:"Converting from CString",permalink:"/blog/2012/03/13/converting-from-cstring"}},p={authorsImageUrls:[]},c=[],s={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Call ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"SetWindowText"))," method by passing required title as a string in the CWinApp::InitInstance() method after\xa0ProcessShellCommand() method. Please see the below code snippet"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'m_pMainWnd->SetWindowText("My New Window Title");')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'BOOL CWindowTitleApp::InitInstance()\n{\n    INITCOMMONCONTROLSEX InitCtrls;\n    InitCtrls.dwSize = sizeof(InitCtrls);\n    InitCtrls.dwICC = ICC_WIN95_CLASSES;\n    InitCommonControlsEx(&amp;InitCtrls);\n\n    CWinApp::InitInstance();\n    SetRegistryKey(_T("Local AppWizard-Generated Applications"));\n    LoadStdProfileSettings(4);\n\n    CSingleDocTemplate\\* pDocTemplate;\n    pDocTemplate = new CSingleDocTemplate(\n        IDR_MAINFRAME,\n        RUNTIME_CLASS(CWindowTitleDoc),\n        RUNTIME_CLASS(CMainFrame),       // main SDI frame window\n        RUNTIME_CLASS(CWindowTitleView));\n    if (!pDocTemplate)\n        return FALSE;\n    AddDocTemplate(pDocTemplate);\n\n    EnableShellOpen();\n    RegisterShellFileTypes(TRUE);\n\n    CCommandLineInfo cmdInfo;\n    ParseCommandLine(cmdInfo);\n\n    if (!ProcessShellCommand(cmdInfo))\n        return FALSE;\n    ////////////////////////////////////////////////////////////////////////////\n    //                       To Change Window Title                           //\n    ////////////////////////////////////////////////////////////////////////////\n    m_pMainWnd-&gt;SetWindowText("My New Window Title");\n    ////////////////////////////////////////////////////////////////////////////\n\n    m_pMainWnd-&gt;ShowWindow(SW_SHOW);\n    m_pMainWnd-&gt;UpdateWindow();\n    m_pMainWnd-&gt;DragAcceptFiles();\n\n    return TRUE;\n}\n')))}d.isMDXComponent=!0}}]);