# Splitter Window 
Definition: A splitter window resides within the frame window. It is divided into several panes, each pane canhave a different size. Splitter window provides the user with several different views for monitoring
data contained in the document at the same time.

## Static Splitter
 
Steps:
1. Declare CSplitterWnd type variable(s) in the frame window class
2. In frame window’s OnCreateClient(…) member function, call functions
2.1. CSplitterWnd::CreateStatic(…)
```cpp
BOOL CSplitterWnd::CreateStatic
(
  CWnd *pParentWnd, int nRows, int nCols,
  DWORD dwStyle=WS_CHILD | WS_VISIBLE,
  UINT nID=AFX_IDW_PANE_FIRST
);
```

The fifth parameter, nID, identifies which splitter window is being created. This is necessary because
within one frame window, we can create several nested splitter windows.
 
For the root splitter window (The splitter window whose parent window is the frame window), this ID must be AFX_IDW_PANE_FIRST.
 
For other nested splitter windows, this ID need to be obtained from the parent splitter windows by calling
function CSplitterWnd::IdFromRowCol(…), and passing appropriate column and row coordinates to it. The
following is the format of this function:
```cpp
 int CSplitterWnd::IdFromRowCol(int row, int col);
 ```
	 
2.2 CSplitterWnd::CreateView(…).
```cpp
	BOOL CSplitter.CreateView
	(
	int row, int col,
	CRuntimeClass *pViewClass, SIZE sizeInit, CCreateContext *pContext
	);
``` 
 
 
### ExampleCode for MDI :
Step -1
```cpp
class CChildFrame : public CMDIChildWnd
{
	DECLARE_DYNCREATE(CChildFrame)
public:
  //Balaji: s_1 Create Splitter
	CSplitterWnd m_wndSpMain;
:
}
````
Step – 2.1 & 2.2
```cpp 
BOOL CChildFrame::OnCreateClient(LPCREATESTRUCT lpcs, CCreateContext* pContext)
{
  //Balaji: s_2.1 Create Splitter
	m_wndSpMain.CreateStatic(this, 1, 2, WS_CHILD|WS_VISIBLE, AFX_IDW_PANE_FIRST);
	//Balaji: s_2.2 Create View
	m_wndSpMain.CreateView(0, 0, RUNTIME_CLASS(CMDISampleView), CSize(100, 100), pContext);
	m_wndSpMain.CreateView(0, 1, RUNTIME_CLASS(CColorView), CSize(100, 100), pContext);
 
	//return CMDIChildWnd::OnCreateClient(lpcs, pContext);
	return TRUE;
}
 ```
 
## Dynamic Splitter
1. Declare CSplitterWnd type variable(s) in the frame window class
2. In frame window’s OnCreateClient(…) member function, call functions CSplitterWnd::Create(…) to create dynamic splitter window
 ```cpp
BOOL CSplitterWnd::Create
(
  CWnd* pParentWnd,
  int nMaxRows, int nMaxCols,
  SIZE sizeMin,
  CCreateContext* pContext,
  DWORD dwStyle=WS_CHILD | WS_VISIBLE |WS_HSCROLL | WS_VSCROLL | SPLS_DYNAMIC_SPLIT,
  UINT nID=AFX_IDW_PANE_FIRST
);
```
The difference between function CSplitterWnd::CreateStatic(…) and CSplitterWnd::Create(…)
is that when creating dynamic splitter window, we need to specify the maximum number of rows and columns.
 
Example code:
```cpp
m_wndSplitter.Create(this, 2, 2, CSize(10, 10), pContext))
```

#### Creating Different Views

If you want to create a different type of view in the new pane when the user splits the window, you can do so, but you first have to create your own class based on CSplitterWnd. In your new class, you have to provide an override for the CreateView() function
