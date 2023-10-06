---
tags: ["MFC"]
---

# Remove MAXIMIZE BOX and MINIMIZE BOX from an MFC Window

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

In order to remove MAXIMIZE BOX and MINIMIZE BOX from an MFC Window see the below code snippet.

```cpp
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
