---
tags: ["MFC"]
---

# MFC: Enumerate all views of the document
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
To Enumerate all views of the document the CDocument class provides GetFirstViewPosition and GetNextView member functions to enumerate all views associated with the document. We call view’s OnUpdate function to communicate with them.

```cpp
void EnumerateViews()
{
   //get the position of the first view in the list
   //of views associated with the document.
   POSITION pos = GetFirstViewPosition();

   //terate through all of the document's views.
   while (pos != NULL)
   {
      CView* pView = GetNextView(pos);

      //update view
      pView-&gt;OnUpdate(pSender, lHint, pHint);
   }
}
```
