"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[96983],{61414:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(85893),r=t(11151);const o={tags:["MFC"]},a="Change a Window's title of an SDI/MDI Application",s={permalink:"/blog/2012/03/13/change-a-windows-title-of-an-sdimdi",source:"@site/blog/2012-03-13-change-a-windows-title-of-an-sdimdi.md",title:"Change a Window's title of an SDI/MDI Application",description:"Call **SetWindowText** method by passing required title as a string in the CWinApp::InitInstance() method after\xa0ProcessShellCommand() method. Please see the below code snippet",date:"2012-03-13T00:00:00.000Z",formattedDate:"March 13, 2012",tags:[{label:"MFC",permalink:"/blog/tags/mfc"}],readingTime:.525,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["MFC"]},unlisted:!1,prevItem:{title:"Creating an SDI/MDI application that is initially maximized",permalink:"/blog/2012/03/14/sdimdi-application-that-is-initially-maximized"},nextItem:{title:"Converting from CString",permalink:"/blog/2012/03/13/converting-from-cstring"}},l={authorsImageUrls:[]},d=[];function c(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["Call ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"SetWindowText"})})," method by passing required title as a string in the CWinApp::InitInstance() method after\xa0ProcessShellCommand() method. Please see the below code snippet"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:'m_pMainWnd->SetWindowText("My New Window Title");'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'BOOL CWindowTitleApp::InitInstance()\r\n{\r\n    INITCOMMONCONTROLSEX InitCtrls;\r\n    InitCtrls.dwSize = sizeof(InitCtrls);\r\n    InitCtrls.dwICC = ICC_WIN95_CLASSES;\r\n    InitCommonControlsEx(&amp;InitCtrls);\r\n\r\n    CWinApp::InitInstance();\r\n    SetRegistryKey(_T("Local AppWizard-Generated Applications"));\r\n    LoadStdProfileSettings(4);\r\n\r\n    CSingleDocTemplate\\* pDocTemplate;\r\n    pDocTemplate = new CSingleDocTemplate(\r\n        IDR_MAINFRAME,\r\n        RUNTIME_CLASS(CWindowTitleDoc),\r\n        RUNTIME_CLASS(CMainFrame),       // main SDI frame window\r\n        RUNTIME_CLASS(CWindowTitleView));\r\n    if (!pDocTemplate)\r\n        return FALSE;\r\n    AddDocTemplate(pDocTemplate);\r\n\r\n    EnableShellOpen();\r\n    RegisterShellFileTypes(TRUE);\r\n\r\n    CCommandLineInfo cmdInfo;\r\n    ParseCommandLine(cmdInfo);\r\n\r\n    if (!ProcessShellCommand(cmdInfo))\r\n        return FALSE;\r\n    ////////////////////////////////////////////////////////////////////////////\r\n    //                       To Change Window Title                           //\r\n    ////////////////////////////////////////////////////////////////////////////\r\n    m_pMainWnd-&gt;SetWindowText("My New Window Title");\r\n    ////////////////////////////////////////////////////////////////////////////\r\n\r\n    m_pMainWnd-&gt;ShowWindow(SW_SHOW);\r\n    m_pMainWnd-&gt;UpdateWindow();\r\n    m_pMainWnd-&gt;DragAcceptFiles();\r\n\r\n    return TRUE;\r\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>a});var i=t(67294);const r={},o=i.createContext(r);function a(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);