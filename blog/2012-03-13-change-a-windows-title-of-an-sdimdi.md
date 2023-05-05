---
tags: ["MFC"]
---

# Change a Window's title of an SDI/MDI Application

Call _**SetWindowText**_ method by passing required title as a string in the CWinApp::InitInstance() method after ProcessShellCommand() method. Please see the below code snippet

`m_pMainWnd->SetWindowText("My New Window Title");`

```cpp
BOOL CWindowTitleApp::InitInstance()
{
    INITCOMMONCONTROLSEX InitCtrls;
    InitCtrls.dwSize = sizeof(InitCtrls);
    InitCtrls.dwICC = ICC_WIN95_CLASSES;
    InitCommonControlsEx(&amp;InitCtrls);

    CWinApp::InitInstance();
    SetRegistryKey(_T("Local AppWizard-Generated Applications"));
    LoadStdProfileSettings(4);

    CSingleDocTemplate\* pDocTemplate;
    pDocTemplate = new CSingleDocTemplate(
        IDR_MAINFRAME,
        RUNTIME_CLASS(CWindowTitleDoc),
        RUNTIME_CLASS(CMainFrame),       // main SDI frame window
        RUNTIME_CLASS(CWindowTitleView));
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
    m_pMainWnd-&gt;SetWindowText("My New Window Title");
    ////////////////////////////////////////////////////////////////////////////

    m_pMainWnd-&gt;ShowWindow(SW_SHOW);
    m_pMainWnd-&gt;UpdateWindow();
    m_pMainWnd-&gt;DragAcceptFiles();

    return TRUE;
}
```
