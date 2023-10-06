---
tags: ["MFC"]
---

# MFC:Fill Background color of the Dialog
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
MFC Tip: To fill the Background color of the Dialog and get the background of the controls to look correct

1. Handle the ON_WM_ERASEBKGND Message and write the following code

   ```cpp
    BOOL CTNV_MFCDialogDemoDlg::OnEraseBkgnd(CDC\* pDC)
    {
    CRect r;
    //GetClientRect gets the width & height of the client area of the Dialog
    GetClientRect(&r);
    CBrush br(RGB(0,255,0));
    pDC->SelectObject(br);
    pDC->FillRect(r,&br);
    
    //Make sure to return TRUE;
     //return CDialogEx::OnEraseBkgnd(pDC);
    return TRUE;
    }
    ```

2. To  get the background of the controls to look correct Handle the ON_WM_CTLCOLOR Message and write the following code - Make sure to return the Brush Handle which was created same as a color of Dialog Background.

     ```cpp
    HBRUSH CTNV_MFCDialogDemoDlg::OnCtlColor(CDC\* pDC, CWnd* pWnd, UINT nCtlColor)
    {
     //HBRUSH hbr = CDialogEx::OnCtlColor(pDC, pWnd, nCtlColor);
     //return hbr;
    

     //Make sure to return the Brush color should be same as Dialog Background color 
     CBrush br(RGB(0,255,0));
     return (HBRUSH)br; 
    }

```
