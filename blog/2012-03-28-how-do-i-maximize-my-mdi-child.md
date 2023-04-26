---
title: "How do I maximize my MDI child ?"
date: "2012-03-28"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "mfc"
  - "vc"
---

In CMainFrame class ad the following code.

```c
void CMainFrame::ActivateFrame(int nCmdShow)
{
    if (!m\_bActivated)
    {
        m\_bActivated = TRUE;
        nCmdShow = SW\_SHOWMAXIMIZED;
    }

    CFrameWnd::ActivateFrame(nCmdShow);
}
```

where m\_bActivated is a member variable of your frame object.
