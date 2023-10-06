---
tags: ["MFC"]
---
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
# Centering an Application Frame Window to desktop

To center Application's Frame Window call CenterWindow() in MainFrame's OnCreate() fucntion.

See the code snippet below

```cpp
int CMainFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
{
    if (CFrameWnd::OnCreate(lpCreateStruct) == -1)
        return -1;

   //////////////////////////////////////////////////////////
   //  Center Application Frame Window                     //
    /////////////////////////////////////////////////////////
   CWnd* pWnd = GetDesktopWindow();
   CenterWindow(pWnd);
   //////////////////////////////////////////////////////////

    return 0;
}
```
