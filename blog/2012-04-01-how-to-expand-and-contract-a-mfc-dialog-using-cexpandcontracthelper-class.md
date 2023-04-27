---
title: "How to Expand and Contract a MFC Dialog ?"
date: "2012-04-01"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "MFC"
  - "vc"
---

This article gives the ability to make MFC dialogs expand or contract. The CExpandContractHelper simplifies the process to  expand or contract MFC Dialog.

[](https://skydrive.live.com/embed?cid=A4632B15B9474D67&resid=A4632B15B9474D67%21454&authkey=AKZzXVcg-7nn7jg)

[](https://skydrive.live.com/embed?cid=A4632B15B9474D67&resid=A4632B15B9474D67%21454&authkey=AKZzXVcg-7nn7jg)

**Steps to use CExpandContractHelper :** 1. Create Dialog Based application 2. Place the controls as shown below 3. Add the CExpandContractHelper.cpp & CExpandContractHelper.h files to the project 4. Create the in the Dialog class CExpandContractHelper\* m\_pECH;

```c
CExpandDialogDlg::CExpandDialogDlg(CWnd\* pParent /\*=NULL\*/)
    : CDialog(CExpandDialogDlg::IDD, pParent)
{
    m\_hIcon = AfxGetApp()-&gt;LoadIcon(IDR\_MAINFRAME);
    //Step - 1 Create CExpandContractHelper
    m\_pECH = new CExpandContractHelper(IDC\_PIC\_START, IDC\_PIC\_END, this);
}
```

5\. Call ExpandContract in the OnInitDialog

```c
BOOL CExpandDialogDlg::OnInitDialog()
{
    CDialog::OnInitDialog();
    SetIcon(m\_hIcon, TRUE);         // Set big icon
    SetIcon(m\_hIcon, FALSE);        // Set small icon
    //Step - 2 Call ExpandContract
    m\_pECH-&gt;ExpandContract((CButton\*)GetDlgItem(IDC\_BN\_EXPAND\_CONTRACT));
    return TRUE;
}
```

6\. Call ExpandContract in the button handler OnBnClickedBnExpandContract

```c
void CExpandDialogDlg::OnBnClickedBnExpandContract()
{
    //Step - 3 Call ExpandContract
    m\_pECH-&gt;ExpandContract((CButton\*)GetDlgItem(IDC\_BN\_EXPAND\_CONTRACT));
}
```

CExpandContractHelper class

```c
//////////////////////////////////////////////////
// Purpose: To exapand or contract a dialog control
// Author : nagvbt.blogspot.com
//////////////////////////////////////////////////
class CExpandContractHelper
{
public:
    CExpandContractHelper(UINT nStart, UINT nEnd, CDialog\* dlg);
    ~CExpandContractHelper(void);
protected:
    // ID of start picture control
    UINT m\_nStart;
    // ID of end picture control
    UINT m\_nEnd;
    CDialog\* m\_dlg;
    CButton\* m\_pButton;
    CString m\_sExpand;
    CString m\_sContract;
public:
    void ExpandContract(CButton\* pButton);
protected:
    BOOL IsExpand();
};
```

CExpandContractHelper.cpp

```c
#include "StdAfx.h"
#include "ExpandContractHelper.h"
CExpandContractHelper::~CExpandContractHelper(void)
{
}
CExpandContractHelper::CExpandContractHelper(
    UINT nStart, // Start Picture control ID
    UINT nEnd,   // End  Picture control ID
    CDialog \*dlg // Dialog pointer
    )
{
    m\_nStart = nStart;
    m\_nEnd   = nEnd;
    m\_dlg    = dlg;
}
BOOL CExpandContractHelper::IsExpand()
{
    // 1 - Load button caption Expand/Contact
    m\_sExpand = "&amp;Expand &gt;&gt;";
    m\_sContract = "&lt;&lt; &amp;Contract";
    // 2 - Find out if we need to expand or collapse the dialog
    CString strCaption;
    m\_pButton-&gt;GetWindowText( strCaption );
    BOOL bExpand = ( strCaption == m\_sExpand ); // Collapse by default
    return bExpand;
}
void CExpandContractHelper::ExpandContract(
    CButton\* pButton  // Expand Contract button pointer
    )
{
    m\_pButton = pButton;
    // 3 - Get current dialog window rectangle
    CRect rcDialog;
    m\_dlg-&gt;GetWindowRect( &amp;rcDialog );
    int nNewHeight = -1;
    if( IsExpand() )
    {
        // 4a - Change Expand/Contract button caption
        pButton-&gt;SetWindowText( m\_sContract );
        // 4b - Calculate new dialog height
        CWnd\* pWndLarge = m\_dlg-&gt;GetDlgItem( m\_nEnd );
        ASSERT\_VALID( pWndLarge );
        CRect rcLarge;
        pWndLarge-&gt;GetWindowRect( &amp;rcLarge );
        nNewHeight = rcLarge.top-rcDialog.top;
    }
    else
    {
        // 5a - Change Expand/Contract button caption
        pButton-&gt;SetWindowText( m\_sExpand );
        // 5b - Calculate new dialog height
        CWnd\* pWndSmall = m\_dlg-&gt;GetDlgItem( m\_nStart );
        ASSERT\_VALID( pWndSmall );
        pWndSmall-&gt;ShowWindow(FALSE);
        CRect rcSmall;
        pWndSmall-&gt;GetWindowRect( &amp;rcSmall );
        nNewHeight = rcSmall.top-rcDialog.top;
    }
    // 6 - Set new dialog height
    ASSERT( nNewHeight &gt; 0 );
    m\_dlg-&gt;SetWindowPos( NULL, 0, 0,
                        rcDialog.Width(), nNewHeight,
                        SWP\_NOMOVE | SWP\_NOZORDER );
    // 7 - Set the enabled state for each control depending on whether
    // the control is currently visible or not
    CWnd\* pWndControl = m\_dlg-&gt;GetWindow( GW\_CHILD );
    while( pWndControl != NULL )
    {
        CRect rcControl;
        pWndControl-&gt;GetWindowRect( &amp;rcControl );
        pWndControl-&gt;EnableWindow( rcControl.top &lt;= rcDialog.top + nNewHeight );
        pWndControl = pWndControl-&gt;GetWindow( GW\_HWNDNEXT );
    }
    // 8 - Check if a control still has the focus
    // (can lose it if the active control becomes disabled)
    CWnd\* pWndActiveControl = CWnd::GetFocus();
    if( pWndActiveControl == NULL )
    {
        // 9 - Set focus to "first" control on dialog
        CWnd\* pWndFirstControl = m\_dlg-&gt;GetNextDlgTabItem( NULL );
        ASSERT\_VALID( pWndFirstControl );
        ASSERT( pWndFirstControl-&gt;IsWindowEnabled() );
        pWndFirstControl-&gt;SetFocus();
    }
}
```
