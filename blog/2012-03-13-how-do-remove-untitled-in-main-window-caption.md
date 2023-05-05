---
tags: ["MFC"]
---

# How do remove 'Untitled' in main window caption

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

