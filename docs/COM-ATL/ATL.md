---
sidebar_position: 3
---

# ATL Tutorial

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

## Basics of ATL

**What you will Learn Here…**

1. Definition of ATL
2. ATL Features
3. Basic Definitions of ATL
4. ATL's Component Class Hierarchy
5. FAQ

**1. Definition of ATL** The Active Template Library (ATL) is a set of template-based C++ classes that allows to create small, fast Component Object Model (COM) objects.

**2. ATL Features**

1. ATL provides two types of wizards

a. AppWizard: AppWizard creates the initial ATL project.
b. Object Wizard: Object Wizard produces code for basic COM components.

2. Built-in support for basic COM functionality such as IUnknown, class factories, IDispatch (automation), dual interfaces and self-registration.

3. Inbuilt Support for Microsoft’s Interface Definition Language (IDL) which provides marshaling support for custom Vtable interfaces as well as component self-description through a type library.

4. Aggregation of objects and Automation support

5. Support for developing ActiveX controls.

**3. Basic Definitions of ATL**

1. _**Marshaling:**_ Marshaling is the process of transferring function arguments and return values across process and machine boundaries.

2. The **_proxy/stub_** DLL implements standard marshaling for each of the component interfaces.

COM will use the IPC to communicate between client and server.

- LPC is used when both reside on the same machine.

- RPC is used in a distributed networked environment

**4. ATL's Component Class Hierarchy**

ATL never Creates the instance of the CoClass Directly. Instead ATL uses CComObject template class with 'CMathComp' object type as a parameter to create our Object.

_CComObject \* pMath = new ComObject_

**_CComObjectRootEx_** - Handles object reference count management. _**CComCoClass**_ - Provides methods for creating instances of a class and obtaining its properties it has createInstance() method which creates the instance of a COM Object through ClassFactory _**CComObject**_ - Implements IUnknown for an COM object.

In this tutorial we will be creating

1. MathComp which is a DLL or Inproc server and exposes the Add and Sub functions.

2. An MFC Dialog Based Application which acts like a Client for MathComp

**Steps for creating MathComp**

1. Open VS 2008
2. File->NewProject Click OK -> Click Next **Select Server type:** as DLL **Select Addition options:** as 'Allow merging of proxy/stub code' and click Finish
3. Add Component Class

Select `ATL simple Object`

Enter Short name: "CMath" to add the component class -> Click 'Finish'

**Add a Method to ICMath Interface**

The classes created are shown below in the class diagram.

**CCMath**

```cpp
// CCMath
class ATL_NO_VTABLE CCMath :
       public CComObjectRootEx<CComSingleThreadModel>,
       public CComCoClass<CCMath, &CLSID_CMath>,
       public IDispatchImpl<ICMath, &IID_ICMath, &LIBID_MathCompLib, /*wMajor =*/ 1, /*wMinor =*/ 0>
{
public :
      CCMath()
      {
      }

DECLARE_REGISTRY_RESOURCEID(IDR_CMATH)

BEGIN_COM_MAP(CCMath)
      COM_INTERFACE_ENTRY(ICMath)
      COM_INTERFACE_ENTRY(IDispatch)
END_COM_MAP()

DECLARE_PROTECT_FINAL_CONSTRUCT()

      HRESULT FinalConstruct()
      {
             return S_OK;
      }

       void FinalRelease()
      {
      }

public :

      STDMETHOD(Add)(DOUBLE i, DOUBLE j, DOUBLE* result);
      STDMETHOD(Sub)(DOUBLE i, DOUBLE j, DOUBLE* result);
};

OBJECT_ENTRY_AUTO( __uuidof(CMath), CCMath)

CMath.h
// CCMath
STDMETHODIMP CCMath::Add(DOUBLE i, DOUBLE j, DOUBLE* result)
{
      *result = i + j;
       return S_OK;
}

STDMETHODIMP CCMath::Sub(DOUBLE i, DOUBLE j, DOUBLE* result)
{
      *result = i - j;
       return S_OK;
}
```

**MathComp.idl**

```cpp
// MathComp.idl : IDL source for MathComp
// This file will be processed by the MIDL tool to
// produce the type library (MathComp.tlb) and marshalling code.

import "oaidl.idl" ;
import "ocidl.idl" ;

[
       object ,
       uuid (F3BDE3CF-884A-461A-A377-1F96A72239B0),
       dual ,
       nonextensible ,
       helpstring ("ICMath Interface" ),
       pointer_default (unique )
]
interface ICMath : IDispatch{
      [ id (1), helpstring ( "method Add")] HRESULT Add([ in ] DOUBLE i, [in ] DOUBLE j, [out ] DOUBLE* result);
      [ id (2), helpstring ( "method Sub")] HRESULT Sub([ in ] DOUBLE i, [in ] DOUBLE j, [out ] DOUBLE* result);
};
[
       uuid (44FF4D78-6AAD-4D2B-9150-DEBCCE79D8E0),
       version (1.0),
       helpstring ("MathComp 1.0 Type Library" )
]
library MathCompLib
{
       importlib ("stdole2.tlb" );
      [
             uuid (4A8C8314-6C03-4AF7-96A1-9D6052A89363),
             helpstring ("CMath Class" )
      ]
       coclass CMath
      {
            [ default ] interface ICMath;
      };
};
```

NOTE: Other classes are not shown here please Download the source for complete code.

**Steps for creating MFC Client**

1. Create an MFC Dialog based application

2. Design the Dialog as shown below

3. Add a Add button Handler (OnBnClickedButtonAdd) 4. Inside Add button handler add the below code

```cpp
//Step1: import include .tlb file
#import "..MathCompMathComp.tlb" no_namespace

void CCMathClientDlg::OnBnClickedButtonAdd()
{
      //Step2/////////////// Initialize the COM libraries ///////////////////////////////
     CoInitialize(NULL);

      //Step3/////////////////////////Retriving CLSID from ProgID///////////////////////
      CLSID clsid;
      CLSIDFromProgID(OLESTR("MathComp.CMath.1"),&clsid); // will be in CMath.rgs file

      //Step4/////////////////////////////Creating instance of server///////////////////
      ICMath *pICMath;

      HRESULT hr = CoCreateInstance(
                     clsid,             //The CLSID associated with the data and code that will be used to create the object.
                     NULL,              //If NULL, indicates that the object is not being created as part of an aggregate
                     CLSCTX_LOCAL_SERVER|CLSCTX_INPROC_SERVER, //ontext in which the code that manages the newly created object will run
                     __uuidof(ICMath),  //riid: A reference to the identifier of the interface to be used to communicate with the object.
                     (LPVOID*)&pICMath); //*ppv: Address of pointer variable that receives the interface pointer requested in riid.
                                       //Upon successful return, *ppv contains the requested interface pointer. Upon failure, *ppv contains NULL.

      if (FAILED(hr))
      {
            AfxMessageBox(_T("ICMath Failed"));
      }

      //Step5/////////////////////////////Using COM Component//////////////////////////
      UpdateData(TRUE);

      double res =0;
      pICMath->Add(m_i, m_j, &res);
      m_Result = res;

      pICMath->Release(); // To avoid memory leak
      pICMath = NULL;

      //Step6////////////////////////////Uninit'ializing the COM libraries//////////////
      CoUninitialize();

      UpdateData(FALSE);
}
```

### **FAQ**

1. What is ATL ? check - 1. Definition of ATL

2. What is MIDL ? check - 2. ATL Features - 3 point

3. What are the featurs of ATL ? check - 2. ATL Feature

4. What is Marshiling ? check - 3. Basic Definitions of ATL - 1 point

5. Explain about ATL's Class Hierarchy? check - 4.ATL's Component Class Hierarchy
