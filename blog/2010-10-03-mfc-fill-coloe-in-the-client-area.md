---
tags:  ["MFC"]
---

# MFC: Fill Client area with a desired color

MFC Tip: To fill the Background of the client area with a desired color keeping
the text in the client area unchanged

```c
BOOL CMySDIView::OnEraseBkgnd(CDC\* pDC)
{
    CRect r;
    //GetClientRect gets the width &amp; height of the client area of
    //the window
    GetClientRect(&amp;r);
    CBrush br(RGB(255,250,100));
    pDC-&gt;SelectObject(br);
    pDC-&gt;FillRect(r,&amp;br);

    return TRUE;
}
```
