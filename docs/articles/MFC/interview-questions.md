# MFC Interview Questions & Answers
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
### Table of Contents

| No. | Questions                                                                                                                                                                               |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | **General Questions**                                                                                                                                                                   |
| 1   | [What are MFC & VC++ Version Numbers?](#what-are-mfc--vc-version-numbers)                                                                                                               |
| 2   | [What is a message map, and what is the purpose of message map instead of virtual function?](#what-is-a-message-map-and-what-is-the-purpose-of-message-map-instead-of-virtual-function) |
| 3   | [Explain about PostMessage/SendMessage?](#explain-about-postmessagesendmessage)                                                                                                         |
| 4   | [Message Map vs Virtual Functions?](#message-map-vs-virtual-functions)                                                                                                                  |
|     | **Document View Architecture**                                                                                                                                                          |
| 1   | [What is Document View Architecture?](#what-is-document-view-architecture)                                                                                                              |
| 2   | [What is SDI?](#what-is-sdi)                                                                                                                                                            |
| 3   | [What is MDI?](#what-is-mdi)                                                                                                                                                            |

## General Questions

1. ### What are MFC & VC++ Version Numbers?

   | MFC version      | Visual C++ version   |
   | ---------------- | -------------------- |
   | 1.0              | Microsoft C/C++ 7.0  |
   | 2.0              | Visual C++ 1.0       |
   | 2.5              | Visual C++ 1.5       |
   | 3.0              | Visual C++ 2.0       |
   | 3.1              | Visual C++ 2.1       |
   | 3.2              | Visual C++ 2.2       |
   | 4.0              | Visual C++ 4.0       |
   | 4.1              | Visual C++ 4.1       |
   | 4.2              | Visual C++ 4.2       |
   | 4.21 (mfc42.dll) | Visual C++ 5.0       |
   | 6.0 (mfc42.dll)  | Visual C++ 6.0       |
   | 7.0 (mfc70.dll)  | Visual C++ .NET 2002 |
   | 7.1 (mfc71.dll)  | Visual C++ .NET 2003 |
   | 8.0 (mfc80.dll)  | Visual C++ 2005      |

   **[⬆ Back to Top](#table-of-contents)**

2. ### What is a message map, and what is the purpose of message map instead of virtual function?

   Message Map is a logical table that maps the windows messages to the member functions of the class.
   Message map is to avoid following drawbacks:

   1. Most windows only process a small number of messages, yet each window require to giant virtual function table with the entries of each message.

   2. more efficient and use less space then virtual functions

   3. Virtual functions don't handle user defined messages and other custom cases.

   **[⬆ Back to Top](#table-of-contents)**

3. ### Explain about PostMessage/SendMessage?

   **PostMessage**

   Places (posts) a message in the message queue associated with the thread that created the specified window and returns without waiting for the thread to process the message.
   To post a message in the message queue associated with a thread, use the PostThreadMessage function.
   Syntax

   ```cpp
   BOOL WINAPI PostMessage(
   __in_opt  HWND hWnd,
   __in      UINT Msg,
   __in      WPARAM wParam,
   __in      LPARAM lParam
   );
   ```

   **SendMessage**

   Sends the specified message to a window or windows. The SendMessage function calls the window procedure for the specified window and does not return until the window procedure has processed the message.
   To send a message and return immediately, use the SendMessageCallback or SendNotifyMessage function. To post a message to a thread's message queue and return immediately, use the PostMessage or PostThreadMessage function.
   Syntax

   ```cpp
   LRESULT WINAPI SendMessage(
   __in  HWND hWnd,
   __in  UINT Msg,
   __in  WPARAM wParam,
   __in  LPARAM lParam
   );
   ```

   **[⬆ Back to Top](#table-of-contents)**

4. ### Message Map vs Virtual Functions?

   Message Map is a logical table that maps the windows messages to the member functions of the class. Message map is to avoid following drawbacks:

   1. Most windows only process a small number of messages, yet each window require to giant virtual function table with the entries of each message.

   2. more efficient and use less space then virtual functions.

   3. Virtual functions don't handle user defined messages and other custom cases.

   **[⬆ Back to Top](#table-of-contents)**

5. What are the classes created involved when a Dialog based application is created?

   **[⬆ Back to Top](#table-of-contents)**

## Document View Architecture

1. ### What is Document View Architecture?

   **[⬆ Back to Top](#table-of-contents)**

2. ### What is SDI?

   **[⬆ Back to Top](#table-of-contents)**

3. ### What is MDI?

   **[⬆ Back to Top](#table-of-contents)**

4. ### How to convert SDI Application to MDI Application?

   **[⬆ Back to Top](#table-of-contents)**

5. ### Can you explaining the relationship between document, frame and view ?

   The frame window is the application's top-level window. It's normally a WS_OVERLAPPEDWINDOW-style window with a resizing border, a title bar, a system menu, and minimize, maximize, and close buttons.
   The view is a child window sized to fit the frame window so that it becomes the frame window's client area. The application's data is stored in the document object, a visible representation of which appears in the view. For an SDI application, the frame window class is derived from CFrameWnd, the document class is derived from CDocument, and the view class is derived from CView or a related class such as CScrollView.

   **[⬆ Back to Top](#table-of-contents)**

6. ### What is CSingleDocTemplate and CMultiDocTemplate?

   **[⬆ Back to Top](#table-of-contents)**

7. ### How to access document object from view ?

   Using GetDocument() function within a CView class. ###

   **[⬆ Back to Top](#table-of-contents)**

8. ### What are the advantages of using Doc/View or SDI over DialogBox ?

   **[⬆ Back to Top](#table-of-contents)**

9. ### If I modified data in 1 view how does the other view knows ?

   **[⬆ Back to Top](#table-of-contents)**

10. ### Explain about Command Routing in SDI/MDI?

    **[⬆ Back to Top](#table-of-contents)**

11. ### How to Add a View to Document?

    **[⬆ Back to Top](#table-of-contents)**

12. ### How can you update all the views present?

    **[⬆ Back to Top](#table-of-contents)**

13. ### In UpdateAllViews what for the 2nd and 3rd parameters used?

    **[⬆ Back to Top](#table-of-contents)**

    CDocument::UpdateAllViews
    Call this function after the document has been modified.
    void UpdateAllViews(CView*pSender, LPARAM lHint = 0L, CObject* pHint = NULL);

    **Parameters**

    pSender - Points to the view that modified the document, or NULL if all views are to be updated.
    lHint - Contains information about the modification.
    pHint - Points to an object storing information about the modification.

    You should call this function after you call the SetModifiedFlag member function. This function informs each view attached to the document, except for the view specified by pSender, that the document has been modified. You typically call this function from your view class after the user has changed the document through a view.
    This function calls the CView::OnUpdate member function for each of the document's views except the sending view, passing pHint and lHint.

    **[⬆ Back to Top](#table-of-contents)**

14. ### How to update all the views whenever document got updated ?

    Call UpdateAllViews()- which updates all views associated with the document by calling OnUpdate() function of all the views.

    **[⬆ Back to Top](#table-of-contents)**

15. ### What is Serialization and Deserialization?

    Searialization is the process of streaming the object data to or from a persistent storage medium. It's useful in Doc-View Architecture. CObject :: Serialize() function is used to do serialization.

    **[⬆ Back to Top](#table-of-contents)**

16. ### Explain the process of Serialization?

    **[⬆ Back to Top](#table-of-contents)**

17. ### What is OnInitialUpdate and where is it called and what happens?

    CView::OnInitialUpdate
    Called by the framework after the view is first attached to the document, but before the view is initially displayed. ###

    virtual void OnInitialUpdate( );
    The default implementation of this function calls the OnUpdate member function with no hint information (that is, using the default values of 0 for the lHint parameter and NULL for the pHint parameter).

    CView::OnUpdate
    Called by the framework after the view's document has been modified; this function is called by CDocument::UpdateAllViews and allows the view to update its display to reflect those modifications. ###
    virtual void OnUpdate(CView*pSender, LPARAM lHint, CObject* pHint );

    **[⬆ Back to Top](#table-of-contents)**
