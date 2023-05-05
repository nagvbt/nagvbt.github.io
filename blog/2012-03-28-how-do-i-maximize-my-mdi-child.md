---
tags: ["MFC"]
---

# How do I maximize my MDI child ?
In CMainFrame class ad the following code.

```cpp
void CMainFrame::ActivateFrame(int nCmdShow)
{
    if (!m_bActivated)
    {
        m_bActivated = TRUE;
        nCmdShow = SW_SHOWMAXIMIZED;
    }

    CFrameWnd::ActivateFrame(nCmdShow);
}
```

where m_bActivated is a member variable of your frame object.
