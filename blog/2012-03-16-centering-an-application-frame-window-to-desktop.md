---
title: "Centering an Application Frame Window to desktop"
date: "2012-03-16"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "mfc"
  - "vc"
---

To center Application's Frame Window call CenterWindow() in MainFrame's OnCreate() fucntion.

See the code snippet below

```c
int CMainFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
{
    if (CFrameWnd::OnCreate(lpCreateStruct) == -1)
        return -1;

   //////////////////////////////////////////////////////////
   //  Center Application Frame Window                     //
    /////////////////////////////////////////////////////////
   CWnd\* pWnd = GetDesktopWindow();
   CenterWindow(pWnd);
   //////////////////////////////////////////////////////////

    return 0;
}
```
