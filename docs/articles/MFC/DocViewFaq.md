## 1. Explain about doc/view architecture SDI/MDI ? – ABB

## 2. How to convert SDI Application to MDI Application? – Invensys

## 3. Can you explaing the relashionship between document, frame and view ?
  The frame window is the application's top-level window. It's normally a WS_OVERLAPPEDWINDOW-style window with a resizing border, a title bar, a system menu, and minimize, maximize, and close buttons.
  The view is a child window sized to fit the frame window so that it becomes the frame window's client area. The application's data is stored in the document object, a visible representation of which appears in the view.
  For an SDI application, the frame window class is derived from CFrameWnd, the document class is derived from CDocument, and the view class is derived from CView or a related class such as CScrollView.
## 4. What is CSingleDocTemplate and CMultiDocTemplate?

## 5. How to access document object from view ?
Using GetDocument() function within a CView class.

## 6. What are the advantages of using Doc/View or SDI over DialogBox ?

## 7. If I modified data in 1 view how does the other view knows ?

## 8. Explain about Command Routing in SDI/MDI? – ABB, HCL

## 9. How to Add a View to Document? – ABB

## 10. How can you update all the views present?

## 11. In UpdateAllViews what for the 2nd and 3rd parameters used?
  CDocument::UpdateAllViews
  Call this function after the document has been modified.
  void UpdateAllViews(CView* pSender, LPARAM lHint = 0L, CObject* pHint = NULL);

  **Parameters**
  
  pSender - Points to the view that modified the document, or NULL if all views are to be updated.
  lHint - Contains information about the modification.
  pHint - Points to an object storing information about the modification.

  You should call this function after you call the SetModifiedFlag member function. This function informs each view attached to the document, except for the view specified by pSender, that the document has been modified. You typically call this function from your view class after the user has changed the document through a view.
  This function calls the CView::OnUpdate member function for each of the document's views except the sending view, passing pHint and lHint.
  
## 12. How to update all the views whenever document got updated ?
Call UpdateAllViews()- which updates all views associated with the document by calling OnUpdate() function of all the views.
    
## 13. What is Serialization and Deserialization? – Satyam, ABB
Searialization is the process of streaming the object data to or from a persistent storage medium. It's useful in Doc-View Architecture. CObject :: Serialize() function is used to do serialization.
    
## 14. Explain the process of Serialization? – Invensys
  
## 15. What is OnInitialUpdate and where is it called and what happens?
  CView::OnInitialUpdate
  Called by the framework after the view is first attached to the document, but before the view is initially displayed.

  virtual void OnInitialUpdate( );
  The default implementation of this function calls the OnUpdate member function with no hint information (that is, using the default values of 0 for the lHint parameter and NULL for the pHint parameter).

  CView::OnUpdate
  Called by the framework after the view's document has been modified; this function is called by CDocument::UpdateAllViews and allows the view to update its display to reflect those modifications.
  virtual void OnUpdate(CView* pSender, LPARAM lHint, CObject* pHint );
 
