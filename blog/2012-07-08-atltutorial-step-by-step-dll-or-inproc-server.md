---
title: "ATLTutorial Step by Step (DLL or Inproc Server)"
date: "2012-07-08"
categories: 
  - "com-dcom-atl"
tags: 
  - "atl"
---

In this tutorial we will be creating

1. MathComp which is a DLL or Inproc server and exposes the Add and Sub functions.
2. An MFC Dialog Based Application which acts like a Client for MathComp
    
    **Steps for creating MathComp**
    
3. Open VS 2008
4. File->NewProject Click OK -> Click Next **Select Server type:** as DLL **Select Addition options:** as 'Allow merging of proxy/stub code' and click Finish
    
    **3\. Add Component Class**
    
    Select 'ATL simple Object'
    

Enter Short name: "CMath" to add the component class -> Click 'Finish'

**4\. Add a Method to ICMath Interface**

The classes created are shown below in the class diagram.

**CCMath**

```c
// CCMath
class ATL\_NO\_VTABLE CCMath :
       public CComObjectRootEx&lt;CComSingleThreadModel&gt;,
       public CComCoClass&lt;CCMath, &amp;CLSID\_CMath&gt;,
       public IDispatchImpl&lt;ICMath, &amp;IID\_ICMath, &amp;LIBID\_MathCompLib, /\*wMajor =\*/ 1, /\*wMinor =\*/ 0&gt;
{
public :
      CCMath()
      {
      }

DECLARE\_REGISTRY\_RESOURCEID(IDR\_CMATH)

BEGIN\_COM\_MAP(CCMath)
      COM\_INTERFACE\_ENTRY(ICMath)
      COM\_INTERFACE\_ENTRY(IDispatch)
END\_COM\_MAP()

DECLARE\_PROTECT\_FINAL\_CONSTRUCT()

      HRESULT FinalConstruct()
      {
             return S\_OK;
      }

       void FinalRelease()
      {
      }

public :

      STDMETHOD(Add)(DOUBLE i, DOUBLE j, DOUBLE\* result);
      STDMETHOD(Sub)(DOUBLE i, DOUBLE j, DOUBLE\* result);
};

OBJECT\_ENTRY\_AUTO( \_\_uuidof(CMath), CCMath)

CMath.h
// CCMath
STDMETHODIMP CCMath::Add(DOUBLE i, DOUBLE j, DOUBLE\* result)
{
      \*result = i + j;
       return S\_OK;
}

STDMETHODIMP CCMath::Sub(DOUBLE i, DOUBLE j, DOUBLE\* result)
{
      \*result = i - j;
       return S\_OK;
}
```

**MathComp.idl**

```c
// MathComp.idl : IDL source for MathComp
// This file will be processed by the MIDL tool to
// produce the type library (MathComp.tlb) and marshalling code.

import "oaidl.idl" ;
import "ocidl.idl" ;

\[
       object ,
       uuid (F3BDE3CF-884A-461A-A377-1F96A72239B0),
       dual ,
       nonextensible ,
       helpstring ("ICMath Interface" ),
       pointer\_default (unique )
\]
interface ICMath : IDispatch{
      \[ id (1), helpstring ( "method Add")\] HRESULT Add(\[ in \] DOUBLE i, \[in \] DOUBLE j, \[out \] DOUBLE\* result);
      \[ id (2), helpstring ( "method Sub")\] HRESULT Sub(\[ in \] DOUBLE i, \[in \] DOUBLE j, \[out \] DOUBLE\* result);
};
\[
       uuid (44FF4D78-6AAD-4D2B-9150-DEBCCE79D8E0),
       version (1.0),
       helpstring ("MathComp 1.0 Type Library" )
\]
library MathCompLib
{
       importlib ("stdole2.tlb" );
      \[
             uuid (4A8C8314-6C03-4AF7-96A1-9D6052A89363),
             helpstring ("CMath Class" )
      \]
       coclass CMath
      {
            \[ default \] interface ICMath;
      };
};
```

NOTE: Other classes are not shown here please Download the source for complete code.

**Steps for creating MFC Client**

1\. Create an MFC Dialog based application

2\. Design the Dialog as shown below

3\. Add a Add button Handler (OnBnClickedButtonAdd) 4. Inside Add button handler add the below code

```c
//Step1: import include .tlb file
#import "..MathCompMathComp.tlb" no\_namespace

void CCMathClientDlg::OnBnClickedButtonAdd()
{
      //Step2/////////////// Initialize the COM libraries ///////////////////////////////
     CoInitialize(NULL);

      //Step3/////////////////////////Retriving CLSID from ProgID///////////////////////
      CLSID clsid;
      CLSIDFromProgID(OLESTR("MathComp.CMath.1"),&amp;clsid); // will be in CMath.rgs file

      //Step4/////////////////////////////Creating instance of server///////////////////
      ICMath \*pICMath;

      HRESULT hr = CoCreateInstance(
                     clsid,             //The CLSID associated with the data and code that will be used to create the object.
                     NULL,              //If NULL, indicates that the object is not being created as part of an aggregate
                     CLSCTX\_LOCAL\_SERVER|CLSCTX\_INPROC\_SERVER, //ontext in which the code that manages the newly created object will run
                     \_\_uuidof(ICMath),  //riid: A reference to the identifier of the interface to be used to communicate with the object.
                     (LPVOID\*)&amp;pICMath); //\*ppv: Address of pointer variable that receives the interface pointer requested in riid.
                                       //Upon successful return, \*ppv contains the requested interface pointer. Upon failure, \*ppv contains NULL.

      if (FAILED(hr))
      {
            AfxMessageBox(\_T("ICMath Failed"));
      }

      //Step5/////////////////////////////Using COM Component//////////////////////////
      UpdateData(TRUE);

      double res =0;
      pICMath-&gt;Add(m\_i, m\_j, &amp;res);
      m\_Result = res;

      pICMath-&gt;Release(); // To avoid memory leak
      pICMath = NULL;

      //Step6////////////////////////////Uninit'ializing the COM libraries//////////////
      CoUninitialize();

      UpdateData(FALSE);
}
```
