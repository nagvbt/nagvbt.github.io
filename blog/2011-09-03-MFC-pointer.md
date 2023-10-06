---
tags: ["MFC"]
---

# Obtain a pointer to various objects in MFC

The Table is very Handy when writing MFC SDI or MDI Applications

**Note:** To access only the current view, the document class

- For SDI can call `AfxGetMainWnd()->GetActiveView()`

- For MDI can call `AfxGetMainWnd()->MDIGetActive()->GetActiveView()`
