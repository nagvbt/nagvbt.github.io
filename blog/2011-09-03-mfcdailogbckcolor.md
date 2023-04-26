---
title: "MFC Tip: To fill the Background color of the Dialog and get the background of the controls to look correct"
date: "2011-09-03"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "mfc"
---

1. Handle the ON\_WM\_ERASEBKGND Message and write the following code
    
    BOOL CTNV\_MFCDialogDemoDlg::OnEraseBkgnd(CDC\* pDC)
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
    The output of the dialog is shown below  
    
2. To  get the background of the controls to look correct Handle the ON\_WM\_CTLCOLOR Message and write the following code - Make sure to return the Brush Handle which was created same as a color of Dialog Background.
    
    HBRUSH CTNV\_MFCDialogDemoDlg::OnCtlColor(CDC\* pDC, CWnd\* pWnd, UINT nCtlColor)
    {
    //HBRUSH hbr = CDialogEx::OnCtlColor(pDC, pWnd, nCtlColor);
     //return hbr;
    

//Make sure to return the Brush color should be same as Dialog Background color CBrush br(RGB(0,255,0)); return (HBRUSH)br; }
