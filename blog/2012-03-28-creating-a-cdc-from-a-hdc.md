---
title: "Creating a CDC from a HDC"
date: "2012-03-28"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "MFC"
  - "vc"
---

If we get handle to a DC and sometimes we might want to create a CDC from that. One example is owner-drawn lists, combos, and buttons.  we will receive a draw item message with a hDC. The below code can be used to convert hdc into CDC.

```c void MyList::DrawItem(LPDRAWITEMSTRUCT lpDrawItem) { CDC\* pDC; pDC = CDC:FromHandle(lpDrawItem->hDC); } ```

NOTE: This technique for any of the other MFC class/ Windows handle pairs too.
