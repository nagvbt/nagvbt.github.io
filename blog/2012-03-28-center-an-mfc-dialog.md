---
title: "Center an MFC Dialog"
date: "2012-03-28"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "mfc"
  - "vc"
---

 Use the CWnd::CenterWindow method to center the dialog. Write CenterWindow() method in the OnInitDialog() method.

```c BOOL CMyDialog::OnInitDialog() { CenterWindow();

return TRUE; } ```
