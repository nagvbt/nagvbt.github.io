---
title: "How to remove MAXIMIZE BOX and MINIMIZE BOX from an MFC Window"
date: "2012-03-16"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "MFC"
  - "vc"
---

In order to remove MAXIMIZE BOX and MINIMIZE BOX from an MFC Window see the below code snippet.

```c
BOOL CMainFrame::PreCreateWindow(CREATESTRUCT&amp; cs)
{
    if( !CFrameWnd::PreCreateWindow(cs) )
        return FALSE;

    cs.dwExStyle &amp;= ~WS\_EX\_CLIENTEDGE;
    cs.lpszClass = AfxRegisterWndClass(0);

    //////////////////////////////////////////////////////////
    //  To remove MAXIMIZE BOX from window                  //
    //////////////////////////////////////////////////////////
    cs.style &amp;= ~WS\_MAXIMIZEBOX;

    //////////////////////////////////////////////////////////
    //  To remove MINIMIZE BOX from window                  //
    //////////////////////////////////////////////////////////
    cs.style &amp;= ~WS\_MINIMIZEBOX;

    return TRUE;
}
```
