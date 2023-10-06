---
tags: ["MFC"]
---

# Center an MFC Dialog

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

 Use the CWnd::CenterWindow method to center the dialog. Write CenterWindow() method in the OnInitDialog() method.

```cpp
BOOL CMyDialog::OnInitDialog() { 
  CenterWindow();
  return TRUE;
} 
```
