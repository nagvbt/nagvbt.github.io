---
tags: ["MFC"]
---

# How to create a minimal MFC Window ?

We need at least two classes derived to construct an window  

1. Window class / Frame class (CMainFrame) which is derived from CFrameWnd  
2. Application class (CMyApp) which is derived from CWinApp

```cpp
#include <afxwin.h>;

class CMainFrame : public CFrameWnd
{
public:
    CMainFrame()
    {
        Create(NULL, "HELLO MFC");
    }
protected:
    afx_msg void OnPaint()
    {
     CPaintDC dc(this);
     dc.TextOut(100, 100, "This is the my MFC window");
    }

    afx_msg void OnLButtonDown(UINT nFlags, CPoint point)
    {
        AfxMessageBox("Mouse OnLButtonDown !!");
        CFrameWnd::OnLButtonDown(nFlags, point);
    }
    // Declare the Message Map
    DECLARE_MESSAGE_MAP()
};

// Define the Message Map out side the class Definition
BEGIN_MESSAGE_MAP(CMainFrame, CFrameWnd)
    ON_WM_PAINT()       // Paint Message
    ON_WM_LBUTTONDOWN() // Mouse LButton down message
END_MESSAGE_MAP()

class CMyApp : public CWinApp
{
public:
    virtual BOOL InitInstance()
    {
        m_pMainWnd = new CMainFrame();
        m_pMainWnd-&gt;ShowWindow(SW_SHOWNORMAL);
        m_pMainWnd-&gt;UpdateWindow();
        return TRUE;
    }
};

// The one and only Application Object
CMyApp theApp;
```
