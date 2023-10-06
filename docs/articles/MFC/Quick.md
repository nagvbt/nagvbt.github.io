
# Quick Tips
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
## Creating an SDI/MDI application that is initially maximized

 To Creating an SDI/MDI application that is initially maximized Pass `SW_SHOWMAXIMIZED` as paramater to `m_pMainWnd->ShowWindow()` in the  in the `CWinApp::InitInstance()`

 ```cpp
 // SDI/MDI application that is initially maximized
BOOL CWindowTitleApp::InitInstance()
{
  :
  :
  ////////////////////////////////////////////////////////////////////////////
  // To Create an SDI/MDI application that is initially maximized           //
  ////////////////////////////////////////////////////////////////////////////
  m_pMainWnd->ShowWindow(SW_SHOWMAXIMIZED);
  ////////////////////////////////////////////////////////////////////////////
  m_pMainWnd->UpdateWindow();
  m_pMainWnd->DragAcceptFiles();
  return TRUE;
}
 ```

## Creating a CDC from a HDC

 If we get handle to a DC and sometimes we might want to create a CDC from that. One example is owner-drawn lists, combos, and buttons. we will receive a draw item message with a hDC. The below code can be used to convert hdc into CDC.

 ```cpp
// NOTE: This technique for any of the other MFC class/ Windows handle pairs too.
// Creating a CDC from a HDC
void MyList::DrawItem(LPDRAWITEMSTRUCT lpDrawItem)
{
  CDC* pDC;
  pDC = CDC:FromHandle(lpDrawItem->hDC);
}

 ```

## To fill the Background of the client area with a bitmap

 ```cpp
  BOOL CMySDIView::OnEraseBkgnd(CDC* pDC)
 {
  CDC mymem;
  //Create a dc to represent display surface
  mymem.CreateCompatibleDC(pDC);
  
  CBitmap bmp;
  bmp.LoadBitmap(IDB_MYBITMAP);
  mymem.SelectObject(&bmp);
  
     //BitBlt Copyes bitbamp from source (mymem) to destination (pDC)
  pDC->BitBlt(0,0,740, 520, &mymem,0,0, SRCCOPY);
  return 1; // CView::OnEraseBkgnd(pDC);
 }
 ```

## To fill the Background of the client area with a desired color keeping the text in the client area unchanged

 ```cpp
 BOOL CMySDIView::OnEraseBkgnd(CDC* pDC)
 {
     CRect r;
     //GetClientRect gets the width & height of the client area of             
     //the window
  GetClientRect(&r);
  CBrush br(RGB(255,250,100));
  pDC->SelectObject(br);
  pDC->FillRect(r,&br);
   
  return TRUE;
 }
 ```

## MFC Dialog creation

 Use the `CWnd::CenterWindow` method to center the dialog. Write `CenterWindow()` method in the OnInitDialog() method.

```cpp
BOOL CMyDialog::OnInitDialog()
{     
    CenterWindow();
    return TRUE;
} 
```

## Programmatically terminate MFC application

MFC does not provide a public function to exit an application. The following method shutdowns the Application. The method simply sends a `WM_CLOSE` message to application’s mainframe window.

```cpp
void CmfcApp::ExitApplication()
{
     if(AfxGetApp()->m_pMainWnd != NULL))
     {
          AfxGetApp()->m_pMainWnd->SendMessage(WM_CLOSE);
     }
}
```

## Limiting the maximum and minimum sizing of a Frame Window

1. Define Min and Mix size in pixels
2. Handle the `WM_GETMINMAXINFO` message in a `CFrameWnd` derived class.  The MINMAXINFO struct sets limits on the entire window, we need to take into account scroll bars, toolbars,  etc

```cpp
// Min and Mix size in pixels
#define MINX  500
#define MINY  300
#define MAXX  600
#define MAXY  400
void CMainFrame::OnGetMinMaxInfo(MINMAXINFO* lpMMI)
{
  CRect rectWnd;
  CRect rectClient;
  GetWindowRect(&rectWnd);
  GetClientRect(&rectClient);
  // get offset of toolbars, scrollbars, etc.
  int nWidthOffset = rectWnd.Width() - rectClient.Width();
  int nHeightOffset = rectWnd.Height() - rectClient.Height();
  lpMMI->ptMinTrackSize.x = MINX + nWidthOffset;
  lpMMI->ptMinTrackSize.y = MINY + nHeightOffset;
  lpMMI->ptMaxTrackSize.x = MAXX + nWidthOffset;
  lpMMI->ptMaxTrackSize.y = MAXY + nHeightOffset;
  CFrameWnd::OnGetMinMaxInfo(lpMMI);
}

```

## Centering an Application Frame Window to desktop

To center Application’s Frame Window call `CenterWindow()` in MainFrame’s `OnCreate()` fucntion.  See the code snippet below

```cpp
int CMainFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
{
  if (CFrameWnd::OnCreate(lpCreateStruct) == -1)
   return -1;
  //////////////////////////////////////////////////////////
  //  Center Application Frame Window                     //
  /////////////////////////////////////////////////////////
  CWnd* pWnd = GetDesktopWindow();
  CenterWindow(pWnd);
  //////////////////////////////////////////////////////////
  return 0;
}

```

## Minimal MFC Window

  We need at least two clases derived to construct an window

1. Window class / Frame class `CMainFrame` which is derived from `CFrameWnd`
2. Application class `CMyApp` which is derived from `CWinApp`

```cpp
#include <afxwin.h>
class CMainFrame : public CFrameWnd
{
public:
      CMainFrame()
      {
            Create(NULL, "HELLO MFC");
      }
protected:
      afx_msg void OnPaint()
      {
       CPaintDC dc( this);
       dc.TextOut(100, 100, "This is the my MFC window" );
      }
      afx_msg void OnLButtonDown(UINT nFlags, CPoint point)
      {
            AfxMessageBox( "Mouse OnLButtonDown !!");
            CFrameWnd::OnLButtonDown(nFlags, point);
      }
       // Declare the Message Map
      DECLARE_MESSAGE_MAP()
};
// Define the Message Map out side the class Definition
BEGIN_MESSAGE_MAP(CMainFrame, CFrameWnd)
      ON_WM_PAINT()       // Paint Message
      ON_WM_LBUTTONDOWN() // Mouse LButton down message
END_MESSAGE_MAP()


class CMyApp : public CWinApp
{
public:
       virtual BOOL InitInstance()
      {
            m_pMainWnd = new CMainFrame();
            m_pMainWnd->ShowWindow(SW_SHOWNORMAL);
            m_pMainWnd->UpdateWindow();
             return TRUE;
      }
};
// The one and only Application Object
CMyApp theApp;
```

## Making first MDI child window start out maximized

 To make first MDI child window start out maximized

1. Add a `ActivateFrame()` which is a `CChildFrame` virtual function
2. Modify the function with the below code snnipet

```cpp
void CChildFrame::ActivateFrame(int nCmdShow)
{
       ////////////////////////////////////////////////////////////////////////////
       // To make first MDI child window start out maximized                     //
       ////////////////////////////////////////////////////////////////////////////
      m_pMainWnd->ShowWindow(SW_SHOWMAXIMIZED);
      
    // if another window is open, use default
    if(GetMDIFrame()->MDIGetActive())
      {
        CMDIChildWnd::ActivateFrame(nCmdShow);
      }
    else // else open the child window maximized.
      {
        CMDIChildWnd::ActivateFrame(SW_SHOWMAXIMIZED);
      }
       ////////////////////////////////////////////////////////////////////////////
}

```

## Remove ‘Untitled’ window caption

1. Override the `PreCreateWindow()` function in `CMainFrame` class
2. Modify the `CREATESTRUCT` style by adding the below code

```cpp
BOOL CMainFrame::PreCreateWindow(CREATESTRUCT&amp; cs)
{
  if( !CFrameWnd::PreCreateWindow(cs) ){
   return FALSE;
  }

  ////////////////////////////////////////////////////////////////////////////
  // To remove 'Untitled' in main window caption //
  ////////////////////////////////////////////////////////////////////////////
  cs.style &= ~FWS_ADDTOTITLE ;

  return TRUE;
}
```
