---
tags: ["MFC"]
---

# Center an MFC Dialog

 Use the CWnd::CenterWindow method to center the dialog. Write CenterWindow() method in the OnInitDialog() method.

```cpp
BOOL CMyDialog::OnInitDialog() { 
  CenterWindow();
  return TRUE;
} 
```
