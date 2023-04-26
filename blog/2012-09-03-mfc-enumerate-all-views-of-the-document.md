---
title: "MFC: Enumerate all views of the document"
date: "2012-09-03"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "mfc"
  - "mfc-docview"
---

To Enumerate all views of the document the CDocument class provides GetFirstViewPosition and GetNextView member functions to enumerate all views associated with the document. We call view’s OnUpdate function to communicate with them.

```c
void EnumerateViews()
{
   //get the position of the first view in the list
   //of views associated with the document.
   POSITION pos = GetFirstViewPosition();

   //terate through all of the document's views.
   while (pos != NULL)
   {
      CView\* pView = GetNextView(pos);

      //update view
      pView-&gt;OnUpdate(pSender, lHint, pHint);
   }
}
```
