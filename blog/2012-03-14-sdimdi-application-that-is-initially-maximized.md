---
tags: ["MFC"]  
---
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
# Creating an SDI/MDI application that is initially maximized

To Creating an SDI/MDI application that is initially maximized Pass **SW_SHOWMAXIMIZED** as paramater to m_pMainWnd->ShowWindow() in the  in the CWinApp::InitInstance()

Code Snippet:

```cpp
BOOL CWindowTitleApp::InitInstance() { 
  //////////////////////////////////////////////////////////////////////////// 
  // To Create an SDI/MDI application that is initially maximized 
  // /////////////////////////////////////////////////////////////////////////
 
  m_pMainWnd->ShowWindow(SW_SHOWMAXIMIZED); 
  m_pMainWnd->UpdateWindow(); 
  m_pMainWnd->DragAcceptFiles();

return TRUE; 
} 

```
