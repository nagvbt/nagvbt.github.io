---
tags: ["MFC"]
---

# Making first MDI child window start out maximized

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

To make first MDI child window start out maximized

1. Add a ActivateFrame() which is a CChildFrame virtual function
2. Modify the function with the below code snnipet

```cpp
void CChildFrame::ActivateFrame(int nCmdShow) { 
  //////////////////////////////////////////////////////////////////////////// 
  // To make first MDI child window start out maximized 
  // //////////////////////////////////////////////////////////////////////////// 
  m_pMainWnd->ShowWindow(SW_SHOWMAXIMIZED);

// if another window is open, use default 
if(GetMDIFrame()->MDIGetActive()) {
   CMDIChildWnd::ActivateFrame(nCmdShow); 
} else // else open the child window maximized.
{ 
  CMDIChildWnd::ActivateFrame(SW_SHOWMAXIMIZED); 
}

//////////////////////////////////////////////////////////////////////////// } 
```
