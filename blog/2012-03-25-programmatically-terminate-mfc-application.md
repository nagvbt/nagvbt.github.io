---
title: "Programmatically terminate MFC application"
date: "2012-03-25"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "mfc"
  - "vc"
---

MFC does not provide a public function to exit an application. The following method shutdowns the Application. The method simply sends a WM\_CLOSE message to application's mainframe window.

```c
void CmfcApp::ExitApplication()
{
    if(AfxGetApp()-&gt;m\_pMainWnd != NULL))
    {
        AfxGetApp()-&gt;m\_pMainWnd-&gt;SendMessage(WM\_CLOSE);
    }
}
```
