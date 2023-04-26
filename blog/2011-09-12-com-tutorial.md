---
title: "COM Tutorial Step by Step"
date: "2011-09-12"
categories: 
  - "com-dcom-atl"
tags: 
  - "com"
---

Creating **comMathServLib** which is a COM In-Process DLL for implementing an Simple Addition (Add) and Subtraction (Sub) functions by writing IMath interface . Finally a console application '**comClient**' will consumes the comMathServLib.

**_The below diagram shows how comMathServLib sample organised to work as COM Inproc Server and also tells about internals of CoCreateInstance(...)_**

Conventions:

```c
&lt;strong&gt;uuidof(CMathComp) = classID or CLSID
&lt;/strong&gt;uuidof(IMath) = InterfaceID or IID
```

1. To get an Interface pointer to IMath call CoCreateInstance(...)

```c
IMath\* pIMath;
HRESULT hr = CoCreateInstance ( &lt;strong&gt;uuidof(CMathComp), NULL, CLSCTX\_INPROC\_SERVER,
&lt;/strong&gt;uuidof(IMath), (void\*\*) &amp;amp;pIMath );
```

2. CoCreateInstance calls CoGetClassObject(...)

```c
CoGetClassObject( &lt;strong&gt;uuidof(CMathComp), CLSCTX\_INPROC\_SERVER, NULL, &lt;/strong&gt;uuidof(IMath),
(void\*\*) &amp;amp;pIMath);
```

CoGetClassObject invokes the COM Service Control Manager, which searches in the Registry using the classID. It finds the associated ComServer DLL, loads it into memory, and calls the DllGetClassObject method of the DLL.

3.The DLL contains an object of CMathCompClassFactory. The DllGetClassObject gets the IClassFactory pointer and COM calls CreateInstance(...)

CreateInstance(...) method creates the CMathComp and returns the Pointer to IMath as requested by CoCreateInstance

Steps for creating  **comMathServLib** Project 

A. Open Visual Studio 2008  
B. Go to File -> New Project : In the new project dialog under 'Visual C++' select Win32 - Right side select the Win32 Project Template and give the project name as 'comMathServLib'  
C. Win32 Application Wizard Dilog pops up  
\-> Click Next  
\->In Application Setting -> Application type: Select DLL and click Finish

# Steps for adding required files and writing code 

File can be added by Right click on the Project in 'Solution Explorer' -> Add -> New Item...

1. **Add a Header File \[IMath.h\] to declare the Interface for our Math Component class _CMathComp_**

**IMath.h**

```c
&lt;h1&gt;include "Unknwn.h"&lt;/h1&gt;

interface IMath : IUnknown
{
//Simple Math Functions
virtual int &lt;strong&gt;stdcall Add(int i, int j) = 0;
virtual int &lt;/strong&gt;stdcall Sub(int i, int j) = 0;
};
```

**2. Add a C++ File \[MathComp.cpp\] to Implement the IMath Interface and also to implement the IUnkown Interface methods**

**MathComp.cpp**

```c
&lt;h1&gt;include "stdafx.h"&lt;/h1&gt;
&lt;h1&gt;include "IMath.h"&lt;/h1&gt;
&lt;h1&gt;include "MathCompGuidDef.h"&lt;/h1&gt;

class CMathComp : public IMath
{

public:
CMathComp()
{
m\_uRefCount = 0;
g\_uDllLockCount++;
}
&lt;pre&gt;&lt;code&gt;virtual ~CMathComp()
{
    g\_uDllLockCount--;
}

// IUnknown methods
virtual ULONG \_\_stdcall AddRef()
{
    m\_uRefCount = m\_uRefCount+1;  // Increment this object's reference count.
    return m\_uRefCount;
}

virtual ULONG \_\_stdcall Release()
{
    ULONG uRet = m\_uRefCount-1;   // Decrement this object's reference count.

    if ( 0 == m\_uRefCount )       // Releasing last reference?
    {
        delete this;
    }

    return uRet;
}

virtual HRESULT \_\_stdcall QueryInterface( REFIID riid, void\*\* ppv )
{
    HRESULT hrRet = S\_OK;

    // Check that ppv really points to a void\*.
    if ( IsBadWritePtr ( ppv, sizeof(void\*) ))
    {
        return E\_POINTER;
    }

    // Standard QI initialization - set \*ppv to NULL.
    \*ppv = NULL;

    // If the client is requesting an interface we support, set \*ppv.
    if ( InlineIsEqualGUID ( riid, IID\_IUnknown ))
    {
        \*ppv = (IUnknown\*) this;
    }
    else if ( InlineIsEqualGUID ( riid, \_\_uuidof(IMath) ))
    {
        \*ppv = (IMath\*) this;
    }
    else
    {
        hrRet = E\_NOINTERFACE;
    }

    // If we're returning an interface pointer, AddRef() it.
    if ( S\_OK == hrRet )
    {
        ((IUnknown\*) \*ppv)-&amp;gt;AddRef();
    }

    return hrRet;
}

//IMath Implementation
virtual int \_\_stdcall Add(int i, int j)
{
    return i+j;
}

virtual int \_\_stdcall Sub(int i, int j)
{
    return i-j;
}&lt;/code&gt;&lt;/pre&gt;

protected:
UINT m\_uRefCount; // object's reference count
};
```

3\. Add a Header File \[MathCompGuidDef.h\] for assigning GUIDS for IMath and CMathComp

**MathCompGuidDef.h**

```c
struct &lt;strong&gt;declspec(uuid("{4024093A-F7C4-4ecf-8E60-B79C5AEAE6E0}")) IMath;
class &lt;/strong&gt;declspec(uuid("{3429CFBA-BCEA-4b1d-9441-E1E3C26BD8E9}")) CMathComp;
```

**3\. Add a C++ File \[CMathCompClassFactory.h\] to Implement the IClassFactory Interface for our Math Component**

**CMathCompClassFactory.h**

```c
&lt;h1&gt;include "stdafx.h"&lt;/h1&gt;
&lt;h1&gt;include "MathComp.cpp"&lt;/h1&gt;

class CMathCompClassFactory : public IClassFactory
{
public:
CMathCompClassFactory()
{
m\_uRefCount = 0;
g\_uDllLockCount++;
&lt;pre&gt;&lt;code&gt;}
virtual ~CMathCompClassFactory()
{
    g\_uDllLockCount--;
}

// IUnknown methods
virtual ULONG \_\_stdcall AddRef()
{
    m\_uRefCount = m\_uRefCount+1;  // Increment this object's reference count.
    return m\_uRefCount;
}

virtual ULONG \_\_stdcall Release()
{
    ULONG uRet = m\_uRefCount-1;   // Decrement this object's reference count.

    if ( 0 == m\_uRefCount )       // Releasing last reference?
    {
        delete this;
    }

    return uRet;
}

virtual HRESULT \_\_stdcall QueryInterface( REFIID riid, void\*\* ppv )
{
    HRESULT hrRet = S\_OK;

    // Check that ppv really points to a void\*.
    if ( IsBadWritePtr ( ppv, sizeof(void\*) ))
    {
        return E\_POINTER;
    }

    // Standard QI initialization - set \*ppv to NULL.
    \*ppv = NULL;

    // If the client is requesting an interface we support, set \*ppv.
    if ( InlineIsEqualGUID ( riid, IID\_IUnknown ))
    {
        \*ppv = (IUnknown\*) this;
    }
    else if ( InlineIsEqualGUID ( riid, IID\_IClassFactory ))
    {
        \*ppv = (IClassFactory\*) this;
    }
    else
    {
        hrRet = E\_NOINTERFACE;
    }

    // If we're returning an interface pointer, AddRef() it.
    if ( S\_OK == hrRet )
    {
        ((IUnknown\*) \*ppv)-&amp;gt;AddRef();
    }

    return hrRet;

}

// IClassFactory&lt;/code&gt;&lt;/pre&gt;

virtual HRESULT \_\_stdcall CreateInstance ( IUnknown\* pUnkOuter,
REFIID riid,
void\*\* ppv )
{
HRESULT hrRet;
&lt;pre&gt;&lt;code&gt;    // No support aggregation, so pUnkOuter must be NULL.
    if ( NULL != pUnkOuter )
    {
        return CLASS\_E\_NOAGGREGATION;
    }

    // Check that ppv really points to a void\*.
    if ( IsBadWritePtr ( ppv, sizeof(void\*) ))
    {
        return E\_POINTER;
    }

    \*ppv = NULL;

    // Create a new COM object!
    m\_pMathServ = new CMathComp();

    if ( NULL == m\_pMathServ )
    {
        return E\_OUTOFMEMORY;
    }

    // QueryInterface the object for the interface the client is requesting.
    hrRet = m\_pMathServ-&amp;gt;QueryInterface ( riid, ppv );

    // If the QI failed, delete the COM object since the client isn't able
    // to use it (the client doesn't have any interface pointers on the object)
    if ( FAILED(hrRet) )
    {
        delete m\_pMathServ;
    }

    return hrRet;
}

virtual HRESULT \_\_stdcall LockServer ( BOOL fLock )
{
    // Increase/decrease the DLL ref count, according to the fLock param.
    fLock ? g\_uDllLockCount++ : g\_uDllLockCount--;
    return S\_OK;
}&lt;/code&gt;&lt;/pre&gt;

protected:
ULONG m\_uRefCount;
CMathComp\* m\_pMathServ;
};```

**4\. Add a C++ File \[Infrastructure.cpp\] and add the Infrastructure methods to our comMathServLib In-Process COM Component**

```c
&lt;h1&gt;include "stdafx.h"&lt;/h1&gt;
&lt;h1&gt;include "MathCompGuidDef.h"&lt;/h1&gt;
&lt;h1&gt;include "MathCompClassFactory.cpp"&lt;/h1&gt;

HINSTANCE g\_hinstThisDll = NULL; // DLL's module handle
UINT g\_uDllLockCount = 0; // # of COM objects in existence

// DllMain() is our DLL's entry point. Windows calls this when a process or thread
// loads and unloads the DLL.
BOOL APIENTRY DllMain ( HINSTANCE hModule,
DWORD ul\_reason\_for\_call,
LPVOID lpReserved )
{
switch ( ul\_reason\_for\_call )
{
case DLL\_PROCESS\_ATTACH:
{
g\_hinstThisDll = hModule;
&lt;pre&gt;&lt;code&gt;        // Calling DisableThreadLibraryCalls() prevents DllMain() from
        // getting called for every thread that attaches/detaches from DLL
        DisableThreadLibraryCalls ( hModule );
    }
    break;

case DLL\_PROCESS\_DETACH:
    {
    }
    break;
}

return TRUE;&lt;/code&gt;&lt;/pre&gt;

}

// DllGetClassObject() is called when COM needs to get a class factory.
STDAPI DllGetClassObject ( REFCLSID rclsid, REFIID riid, void\*&lt;em&gt; ppv )
{
HRESULT hrRet;
CMathCompClassFactory&lt;/em&gt; pFactory;
&lt;pre&gt;&lt;code&gt;// Check that the client is asking for the CSimpleMsgBoxImpl factory.
if ( !InlineIsEqualGUID ( rclsid, \_\_uuidof(CMathComp) ))
{
    return CLASS\_E\_CLASSNOTAVAILABLE;
}

// Check that ppv really points to a void\*.
if ( IsBadWritePtr ( ppv, sizeof(void\*) ))
{
    return E\_POINTER;
}

\*ppv = NULL;

// Construct a new class factory object.
pFactory = new CMathCompClassFactory;

if ( NULL == pFactory )
{
    return E\_OUTOFMEMORY;
}

// AddRef() the factory since we're using it.
pFactory-&amp;gt;AddRef();

// QueryInterface() the factory for the interface the client wants.
hrRet = pFactory-&amp;gt;QueryInterface ( riid, ppv );

// We're done with the factory, so Release() it.
pFactory-&amp;gt;Release();

return hrRet;&lt;/code&gt;&lt;/pre&gt;

}

// DllCanUnloadNow() is called when COM wants to unload our DLL from memory.
// We check our lock count, which will be nonzero if there are any COM
// objects still in memory.
// Return S\_FALSE to prevent the DLL from being unloaded, or S\_OK to let it
// be unloaded.
STDAPI DllCanUnloadNow()
{
return g\_uDllLockCount &amp;gt; 0 ? S\_FALSE : S\_OK;
}

// DllRegisterServer() creates the registy entries that tells COM where our
// server is located and its threading model.
STDAPI DllRegisterServer()
{
HKEY hCLSIDKey = NULL, hInProcSvrKey = NULL;
LONG lRet;
TCHAR szModulePath \[MAX\_PATH\];
TCHAR szClassDescription\[\] = \_T("MathServ class");
TCHAR szThreadingModel\[\] = \_T("Apartment");
&lt;pre&gt;&lt;code&gt;\_\_try
{
    // Create a key under CLSID for our COM server.
    lRet = RegCreateKeyEx ( HKEY\_CLASSES\_ROOT,
            \_T("CLSID{3429CFBA-BCEA-4b1d-9441-E1E3C26BD8E9}"), 0, NULL,
            REG\_OPTION\_NON\_VOLATILE, KEY\_SET\_VALUE | KEY\_CREATE\_SUB\_KEY,
            NULL, &amp;amp;hCLSIDKey, NULL );

    if ( ERROR\_SUCCESS != lRet )
    {
        return HRESULT\_FROM\_WIN32(lRet);
    }

    // The default value of the key is a human-readable
    // description of the coclass.
    lRet = RegSetValueEx ( hCLSIDKey, NULL, 0, REG\_SZ,
            (const BYTE\*)szClassDescription, sizeof(szClassDescription));

    if ( ERROR\_SUCCESS != lRet )
    {
        return HRESULT\_FROM\_WIN32(lRet);
    }

    // Create the InProcServer32 key, which holds info about our coclass.
    lRet = RegCreateKeyEx ( hCLSIDKey, \_T("InProcServer32"), 0, NULL,
            REG\_OPTION\_NON\_VOLATILE, KEY\_SET\_VALUE,
            NULL, &amp;amp;hInProcSvrKey, NULL );

    if ( ERROR\_SUCCESS != lRet )
    {
        return HRESULT\_FROM\_WIN32(lRet);
    }

    // The default value of the InProcServer32 key holds the
    // full path to our DLL.
    GetModuleFileName ( g\_hinstThisDll, szModulePath, MAX\_PATH );

    lRet = RegSetValueEx(hInProcSvrKey, NULL, 0, REG\_SZ, (const BYTE\*)szModulePath,
            sizeof(TCHAR) \*(lstrlen(szModulePath)+1) );

    if ( ERROR\_SUCCESS != lRet )
    {
        return HRESULT\_FROM\_WIN32(lRet);
    }

    // The ThreadingModel value tells COM how it should handle threads
    // in our DLL. The concept of apartments is beyond the scope of this
    // article, but for simple, single-threaded DLLs, use Apartment.
    lRet = RegSetValueEx ( hInProcSvrKey, \_T("ThreadingModel"), 0, REG\_SZ,
        (const BYTE\*) szThreadingModel,
        sizeof(szThreadingModel) );

    if ( ERROR\_SUCCESS != lRet )
    {
        return HRESULT\_FROM\_WIN32(lRet);
    }
}

\_\_finally
{
    if ( NULL != hCLSIDKey )
    {
        RegCloseKey ( hCLSIDKey );
    }

    if ( NULL != hInProcSvrKey )
    {
        RegCloseKey ( hInProcSvrKey );
    }
}

return S\_OK;&lt;/code&gt;&lt;/pre&gt;

}

// DllUnregisterServer() deleted the registy entries that DllRegisterServer() created.
STDAPI DllUnregisterServer()
{
// Delete our registry entries.
RegDeleteKey ( HKEY\_CLASSES\_ROOT,
\_T("CLSID{3429CFBA-BCEA-4b1d-9441-E1E3C26BD8E9}InProcServer32"));
&lt;pre&gt;&lt;code&gt;RegDeleteKey ( HKEY\_CLASSES\_ROOT,
 \_T("CLSID{3429CFBA-BCEA-4b1d-9441-E1E3C26BD8E9}") );

return S\_OK;&lt;/code&gt;&lt;/pre&gt;

}```

**5\. Add a .def \[MathServ.def\] to export functions**  
**MathServ.def**

```c
EXPORTS
DllRegisterServer PRIVATE
DllUnregisterServer PRIVATE
DllGetClassObject PRIVATE
DllCanUnloadNow PRIVATE
```

**6\. In stdafx.h add module lock count and instance for DLL**

```c
&lt;h1&gt;pragma once&lt;/h1&gt;
&lt;h1&gt;define WIN32\_LEAN\_AND\_MEAN // Exclude rarely-used stuff from Windows headers&lt;/h1&gt;
&lt;h1&gt;include &amp;lt;windows.h&amp;gt;&lt;/h1&gt;
&lt;h1&gt;include &amp;lt;tchar.h&amp;gt;&lt;/h1&gt;
&lt;h1&gt;include &amp;lt;comdef.h&amp;gt;&lt;/h1&gt;

extern HINSTANCE g\_hinstThisDll; // Our DLL's HINSTANCE
extern UINT g\_uDllLockCount; // The module lock count
```

**Develop a Console Client** **named 'comClient'**  **for consuming the 'comMathServLib'** 

**comClient.cpp**

```c
// comClient.cpp : Defines the entry point for the console application.
&lt;h1&gt;include &amp;lt;comdef.h&amp;gt;&lt;/h1&gt;
&lt;h1&gt;include "../comMathServLib/MathCompGuidDef.h"&lt;/h1&gt;
&lt;h1&gt;include "../comMathServLib/IMath.h"&lt;/h1&gt;

int main()
{
IMath\* pIMath;
HRESULT hr;
&lt;pre&gt;&lt;code&gt;// 1. Initialize COM Library
CoInitialize(NULL);

// 2. Call CoCreateInstance to get the IMath interface pointer
hr = CoCreateInstance ( \_\_uuidof(CMathComp), NULL, CLSCTX\_INPROC\_SERVER,
                        \_\_uuidof(IMath), (void\*\*) &amp;amp;pIMath );

if ( FAILED(hr) )
{
    return 0;
}

// 3. Call the interface functions
int sum = pIMath-&amp;gt;Add(1, 3);
printf("Sum = %d n", sum);

int sub = pIMath-&amp;gt;Sub(4, 3);
printf("Sub = %d n", sub);

// 4. Release the interface pointer if you are done
pIMath-&amp;gt;Release();

// 5. Un-Initialize COM Library
CoUninitialize();

return 0;&lt;/code&gt;&lt;/pre&gt;

}
```
