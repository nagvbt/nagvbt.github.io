---
title: "Programmatically terminate MFC application"

tags: 
  - "MFC"
  - "vc"
---

# Programmatically terminate MFC application

MFC does not provide a public function to exit an application. The following method shutdowns the Application. The method simply sends a WM_CLOSE message to application's mainframe window.

```cpp
void CmfcApp::ExitApplication()
{
    if(AfxGetApp()->m_pMainWnd != NULL))
    {
        AfxGetApp()->m_pMainWnd->SendMessage(WM_CLOSE);
    }
}
```
