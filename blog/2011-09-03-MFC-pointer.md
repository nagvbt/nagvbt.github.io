---
title: "How to obtain a pointer to various objects in MFC"
date: "2011-09-03"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "MFC"  
---

The Table is very Handy when writing MFC SDI or MDI Applications

**Note:** To access only the current view, the document class For SDI can call `AfxGetMainWnd()->GetActiveView()` For MDI can call `AfxGetMainWnd()->MDIGetActive()->GetActiveView()`