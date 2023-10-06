---
tags: ["MFC"]
---

# Programmatically terminate MFC application

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

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
