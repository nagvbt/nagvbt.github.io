---
title: "MFC: Fill the Client area with a bitmap"
date: "2010-10-03"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "MFC"
authors: nagvbt
---

In MFC to fill the client area with a bitmap use the following code.

```cpp
BOOL CMySDIView::OnEraseBkgnd(CDC\* pDC)
{
    CDC mymem;
    //Create a dc to represent display surface
    mymem.CreateCompatibleDC(pDC);

    CBitmap bmp;
    bmp.LoadBitmap(IDB\_MYBITMAP);
    mymem.SelectObject(&amp;bmp);

    //BitBlt Copyes bitbamp from source (mymem) to destination (pDC)
    pDC-&gt;BitBlt(0,0,740, 520, &amp;mymem,0,0, SRCCOPY);

    return TRUE; // CView::OnEraseBkgnd(pDC);
}
```
