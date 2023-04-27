---
title: "Making first MDI child window start out maximized"
date: "2012-03-15"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "MFC"
  - "vc"
---

 To make first MDI child window start out maximized

1. Add a ActivateFrame() which is a CChildFrame virtual function
2. Modify the function with the below code snnipet

```c void CChildFrame::ActivateFrame(int nCmdShow) { //////////////////////////////////////////////////////////////////////////// // To make first MDI child window start out maximized // //////////////////////////////////////////////////////////////////////////// m\_pMainWnd->ShowWindow(SW\_SHOWMAXIMIZED);

// if another window is open, use default if(GetMDIFrame()->MDIGetActive()) { CMDIChildWnd::ActivateFrame(nCmdShow); } else // else open the child window maximized. { CMDIChildWnd::ActivateFrame(SW\_SHOWMAXIMIZED); }

//////////////////////////////////////////////////////////////////////////// } ```
