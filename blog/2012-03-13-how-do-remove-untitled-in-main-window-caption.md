---
title: "How do remove 'Untitled' in main window caption"
date: "2012-03-13"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "MFC"
  - "vc"
---

To remove 'Untitled' in main window caption

1. Override the PreCreateWindow() function in CMainFrame class
2. Modify the CREATESTRUCT style by adding the below code **cs.style &= ~FWS\_ADDTOTITLE ;**

**Code snippet:**

```c
BOOL CMainFrame::PreCreateWindow(CREATESTRUCT&amp; cs)
{
if( !CFrameWnd::PreCreateWindow(cs) )
return FALSE;

////////////////////////////////////////////////////////////////////////////
// To remove 'Untitled' in main window caption //
////////////////////////////////////////////////////////////////////////////
cs.style &amp;= ~FWS\_ADDTOTITLE ;
////////////////////////////////////////////////////////////////////////////

return TRUE;
}
```

[Download Code](//skydrive.live.com/embed?cid=A4632B15B9474D67&resid=A4632B15B9474D67%21452&authkey=AC2PSOyg7ZABQaM"></iframe>)
