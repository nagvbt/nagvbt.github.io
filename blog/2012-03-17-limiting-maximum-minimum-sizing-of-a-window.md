---
tags: ["MFC"]
---

# Limiting the maximum and minimum sizing  of a Frame Window

To limit the maximum and minimum size of a Frame Window.

1. Define Min and Mix size in pixels
    
2. Handle the **WM_GETMINMAXINFO** message in a CFrameWnd derived class.  The MINMAXINFO struct sets limits on the entire window, we need to take into account scroll bars, toolbars,  etc
    

```cpp
 // Min and Mix size in pixels
# define MINX 500
# define MINY 300
# define MAXX 600
# define MAXY 400

void CMainFrame::OnGetMinMaxInfo(MINMAXINFO* lpMMI) { 
  CRect rectWnd; CRect rectClient;
  GetWindowRect(&rectWnd); 
  GetClientRect(&rectClient);

  // get offset of toolbars, scrollbars, etc. 
  int nWidthOffset = rectWnd.Width() - rectClient.Width(); 
  int nHeightOffset = rectWnd.Height() - rectClient.Height();

  lpMMI->ptMinTrackSize.x = MINX + nWidthOffset; 
  lpMMI->ptMinTrackSize.y = MINY + nHeightOffset;
  lpMMI->ptMaxTrackSize.x = MAXX + nWidthOffset;
  lpMMI->ptMaxTrackSize.y = MAXY + nHeightOffset;

  CFrameWnd::OnGetMinMaxInfo(lpMMI);

}
 ```
