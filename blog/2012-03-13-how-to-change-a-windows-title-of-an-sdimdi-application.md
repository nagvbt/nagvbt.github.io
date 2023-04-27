---
title: "How to change a Window's title of an SDI/MDI Application"
date: "2012-03-13"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "MFC"
  - "vc"
---

Call _**SetWindowText**_ method by passing required title as a string in the CWinApp::InitInstance() method after ProcessShellCommand() method. Please see the below code snippet

**m\_pMainWnd->SetWindowText("My New Window Title");**

```c
BOOL CWindowTitleApp::InitInstance()
{
    INITCOMMONCONTROLSEX InitCtrls;
    InitCtrls.dwSize = sizeof(InitCtrls);
    InitCtrls.dwICC = ICC\_WIN95\_CLASSES;
    InitCommonControlsEx(&amp;InitCtrls);

    CWinApp::InitInstance();
    SetRegistryKey(\_T("Local AppWizard-Generated Applications"));
    LoadStdProfileSettings(4);

    CSingleDocTemplate\* pDocTemplate;
    pDocTemplate = new CSingleDocTemplate(
        IDR\_MAINFRAME,
        RUNTIME\_CLASS(CWindowTitleDoc),
        RUNTIME\_CLASS(CMainFrame),       // main SDI frame window
        RUNTIME\_CLASS(CWindowTitleView));
    if (!pDocTemplate)
        return FALSE;
    AddDocTemplate(pDocTemplate);

    EnableShellOpen();
    RegisterShellFileTypes(TRUE);

    CCommandLineInfo cmdInfo;
    ParseCommandLine(cmdInfo);

    if (!ProcessShellCommand(cmdInfo))
        return FALSE;
    ////////////////////////////////////////////////////////////////////////////
    //                       To Change Window Title                           //
    ////////////////////////////////////////////////////////////////////////////
    m\_pMainWnd-&gt;SetWindowText("My New Window Title");
    ////////////////////////////////////////////////////////////////////////////

    m\_pMainWnd-&gt;ShowWindow(SW\_SHOW);
    m\_pMainWnd-&gt;UpdateWindow();
    m\_pMainWnd-&gt;DragAcceptFiles();

    return TRUE;
}
```
