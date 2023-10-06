---
tags: ["MFC"]
---

# How to Expand and Contract a MFC Dialog ?

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

This article gives the ability to make MFC dialogs expand or contract. The CExpandContractHelper simplifies the process to  expand or contract MFC Dialog.

**Steps to use CExpandContractHelper :**

1. Create Dialog Based application
2. Place the controls as shown below
3. Add the CExpandContractHelper.cpp & CExpandContractHelper.h files to the project
4. Create the in the Dialog class CExpandContractHelper\* m_pECH;

```cpp
CExpandDialogDlg::CExpandDialogDlg(CWnd* pParent =NULL)
    : CDialog(CExpandDialogDlg::IDD, pParent)
{
    m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
    //Step - 1 Create CExpandContractHelper
    m_pECH = new CExpandContractHelper(IDC_PIC_START, IDC_PIC_END, this);
}
```

5. Call ExpandContract in the OnInitDialog

```cpp
BOOL CExpandDialogDlg::OnInitDialog()
{
    CDialog::OnInitDialog();
    SetIcon(m_hIcon, TRUE);         // Set big icon
    SetIcon(m_hIcon, FALSE);        // Set small icon
    //Step - 2 Call ExpandContract
    m_pECH->ExpandContract((CButton*)GetDlgItem(IDC_BN_EXPAND_CONTRACT));
    return TRUE;
}
```

6. Call ExpandContract in the button handler OnBnClickedBnExpandContract

```cpp
void CExpandDialogDlg::OnBnClickedBnExpandContract()
{
    //Step - 3 Call ExpandContract
    m_pECH->ExpandContract((CButton*)GetDlgItem(IDC_BN_EXPAND_CONTRACT));
}
```

CExpandContractHelper class

```cpp
//////////////////////////////////////////////////
// Purpose: To exapand or contract a dialog control
//////////////////////////////////////////////////
class CExpandContractHelper
{
public:
    CExpandContractHelper(UINT nStart, UINT nEnd, CDialog\* dlg);
    ~CExpandContractHelper(void);
protected:
    // ID of start picture control
    UINT m_nStart;
    // ID of end picture control
    UINT m_nEnd;
    CDialog* m_dlg;
    CButton* m_pButton;
    CString m_sExpand;
    CString m_sContract;
public:
    void ExpandContract(CButton* pButton);
protected:
    BOOL IsExpand();
};
```

CExpandContractHelper.cpp

```cpp
#include "StdAfx.h"
#include "ExpandContractHelper.h"
CExpandContractHelper::~CExpandContractHelper(void)
{
}
CExpandContractHelper::CExpandContractHelper(
    UINT nStart, // Start Picture control ID
    UINT nEnd,   // End  Picture control ID
    CDialog *dlg // Dialog pointer
    )
{
    m_nStart = nStart;
    m_nEnd   = nEnd;
    m_dlg    = dlg;
}
BOOL CExpandContractHelper::IsExpand()
{
    // 1 - Load button caption Expand/Contact
    m_sExpand = "&amp;Expand >>";
    m_sContract = "&lt;&lt; &amp;Contract";
    // 2 - Find out if we need to expand or collapse the dialog
    CString strCaption;
    m_pButton->GetWindowText( strCaption );
    BOOL bExpand = ( strCaption == m_sExpand ); // Collapse by default
    return bExpand;
}
void CExpandContractHelper::ExpandContract(
    CButton* pButton  // Expand Contract button pointer
    )
{
    m_pButton = pButton;
    // 3 - Get current dialog window rectangle
    CRect rcDialog;
    m_dlg->GetWindowRect( &amp;rcDialog );
    int nNewHeight = -1;
    if( IsExpand() )
    {
        // 4a - Change Expand/Contract button caption
        pButton->SetWindowText( m_sContract );
        // 4b - Calculate new dialog height
        CWnd* pWndLarge = m_dlg->GetDlgItem( m_nEnd );
        ASSERT_VALID( pWndLarge );
        CRect rcLarge;
        pWndLarge->GetWindowRect( &amp;rcLarge );
        nNewHeight = rcLarge.top-rcDialog.top;
    }
    else
    {
        // 5a - Change Expand/Contract button caption
        pButton->SetWindowText( m_sExpand );
        // 5b - Calculate new dialog height
        CWnd* pWndSmall = m_dlg->GetDlgItem( m_nStart );
        ASSERT_VALID( pWndSmall );
        pWndSmall->ShowWindow(FALSE);
        CRect rcSmall;
        pWndSmall->GetWindowRect( &amp;rcSmall );
        nNewHeight = rcSmall.top-rcDialog.top;
    }
    // 6 - Set new dialog height
    ASSERT( nNewHeight > 0 );
    m_dlg->SetWindowPos( NULL, 0, 0,
                        rcDialog.Width(), nNewHeight,
                        SWP_NOMOVE | SWP_NOZORDER );
    // 7 - Set the enabled state for each control depending on whether
    // the control is currently visible or not
    CWnd* pWndControl = m_dlg->GetWindow( GW_CHILD );
    while( pWndControl != NULL )
    {
        CRect rcControl;
        pWndControl->GetWindowRect( &amp;rcControl );
        pWndControl->EnableWindow( rcControl.top &lt;= rcDialog.top + nNewHeight );
        pWndControl = pWndControl->GetWindow( GW_HWNDNEXT );
    }
    // 8 - Check if a control still has the focus
    // (can lose it if the active control becomes disabled)
    CWnd* pWndActiveControl = CWnd::GetFocus();
    if( pWndActiveControl == NULL )
    {
        // 9 - Set focus to "first" control on dialog
        CWnd* pWndFirstControl = m_dlg->GetNextDlgTabItem( NULL );
        ASSERT_VALID( pWndFirstControl );
        ASSERT( pWndFirstControl->IsWindowEnabled() );
        pWndFirstControl->SetFocus();
    }
}
```
