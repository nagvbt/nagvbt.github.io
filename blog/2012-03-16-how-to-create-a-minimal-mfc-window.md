---
title: "How to create a minimal MFC Window ?"
date: "2012-03-16"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "MFC"
  - "vc"
---

We need at least two classes derived to construct an window  
1\. Window class / Frame class (CMainFrame) which is derived from CFrameWnd  
2\. Application class (CMyApp) which is derived from CWinApp

```c
#include &lt;afxwin.h&gt;

class CMainFrame : public CFrameWnd
{
public:
    CMainFrame()
    {
        Create(NULL, "HELLO MFC");
    }
protected:
    afx\_msg void OnPaint()
    {
     CPaintDC dc(this);
     dc.TextOut(100, 100, "This is the my MFC window");
    }

    afx\_msg void OnLButtonDown(UINT nFlags, CPoint point)
    {
        AfxMessageBox("Mouse OnLButtonDown !!");
        CFrameWnd::OnLButtonDown(nFlags, point);
    }
    // Declare the Message Map
    DECLARE\_MESSAGE\_MAP()
};

// Define the Message Map out side the class Definition
BEGIN\_MESSAGE\_MAP(CMainFrame, CFrameWnd)
    ON\_WM\_PAINT()       // Paint Message
    ON\_WM\_LBUTTONDOWN() // Mouse LButton down message
END\_MESSAGE\_MAP()

class CMyApp : public CWinApp
{
public:
    virtual BOOL InitInstance()
    {
        m\_pMainWnd = new CMainFrame();
        m\_pMainWnd-&gt;ShowWindow(SW\_SHOWNORMAL);
        m\_pMainWnd-&gt;UpdateWindow();
        return TRUE;
    }
};

// The one and only Application Object
CMyApp theApp;
```
