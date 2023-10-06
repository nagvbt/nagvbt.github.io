---
tags: ["MFC"]
---
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
# Creating a CDC from a HDC

If we get handle to a DC and sometimes we might want to create a CDC from that. One example is owner-drawn lists, combos, and buttons.  we will receive a draw item message with a hDC. The below code can be used to convert hdc into CDC.

```cpp
 void MyList::DrawItem(LPDRAWITEMSTRUCT lpDrawItem) { 
  CDC* pDC;
  pDC = CDC:FromHandle(lpDrawItem->hDC); 
} 
```

***NOTE:***
This technique for any of the other MFC class/ Windows handle pairs too.
