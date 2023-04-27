---
title: "Creating an SDI/MDI application that is initially maximized"
date: "2012-03-14"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "MFC"
  - "vc"
---

 To Creating an SDI/MDI application that is initially maximized Pass **SW\_SHOWMAXIMIZED** as paramater to m\_pMainWnd->ShowWindow() in the  in the CWinApp::InitInstance()

Code Snippet:

```c BOOL CWindowTitleApp::InitInstance() { : : //////////////////////////////////////////////////////////////////////////// // To Create an SDI/MDI application that is initially maximized // //////////////////////////////////////////////////////////////////////////// m\_pMainWnd->ShowWindow(SW\_SHOWMAXIMIZED); ////////////////////////////////////////////////////////////////////////////

m\_pMainWnd->UpdateWindow(); m\_pMainWnd->DragAcceptFiles();

return TRUE; } ```
