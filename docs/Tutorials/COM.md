---
sidebar_position: 7
---

<!--markdownlint-disable MD013 MD029 MD036-->

# COM Step by Step Tutorial

If you are new to WPF ( Component Object model ) please refer the below items.

[1. COM Basics](/docs/articles/MFC/COM/COM-Basics)

Creating **comMathServLib** which is a COM In-Process DLL for implementing an Simple Addition (Add) and Subtraction (Sub) functions by writing IMath interface . Finally a console application '**comClient**' will consumes the comMathServLib.

**_Conventions:_**

```cpp
**uuidof(CMathComp) = classID or CLSID
**uuidof(IMath) = InterfaceID or IID
```

1. To get an Interface pointer to IMath call CoCreateInstance(...)

```cpp
IMath* pIMath;
HRESULT hr = CoCreateInstance ( **uuidof(CMathComp), NULL, CLSCTX_INPROC_SERVER,
**uuidof(IMath), (void**) &pIMath );
```

2. CoCreateInstance calls CoGetClassObject(...)

```cpp
CoGetClassObject( **uuidof(CMathComp), CLSCTX_INPROC_SERVER, NULL,** uuidof(IMath),
(void**) &pIMath);
```

CoGetClassObject invokes the COM Service Control Manager, which searches in the Registry using the classID. It finds the associated ComServer DLL, loads it into memory, and calls the DllGetClassObject method of the DLL.

3. The DLL contains an object of CMathCompClassFactory. The DllGetClassObject gets the IClassFactory pointer and COM calls CreateInstance(...)

CreateInstance(...) method creates the CMathComp and returns the Pointer to IMath as requested by CoCreateInstance

Steps for creating  **comMathServLib** Project:

A. Open Visual Studio 2008  
B. Go to File -> New Project : In the new project dialog under 'Visual C++' select Win32 - Right side select the Win32 Project Template and give the project name as 'comMathServLib'  
C. Win32 Application Wizard Dilog pops up  
-> Click Next  
->In Application Setting -> Application type: Select DLL and click Finish

## Steps for adding required files and writing code

File can be added by Right click on the Project in 'Solution Explorer' -> Add -> New Item...

**1. Add a Header File [IMath.h] to declare the Interface for our Math Component class _CMathComp_**

**IMath.h**

```cpp

# include "Unknwn.h"

interface IMath : IUnknown
{
//Simple Math Functions
virtual int **stdcall Add(int i, int j) = 0;
virtual int** stdcall Sub(int i, int j) = 0;
};
```

**2. Add a C++ File [MathComp.cpp] to Implement the IMath Interface and also to implement the IUnkown Interface methods**

**MathComp.cpp**

```cpp

# include "stdafx.h"
# include "IMath.h"
# include "MathCompGuidDef.h"

class CMathComp : public IMath
{
public:
CMathComp()
{
m_uRefCount = 0;
g_uDllLockCount++;
}

virtual ~CMathComp()
{
    g_uDllLockCount--;
}

// IUnknown methods
virtual ULONG __stdcall AddRef()
{
    m_uRefCount = m_uRefCount+1;  // Increment this object's reference count.
    return m_uRefCount;
}

virtual ULONG __stdcall Release()
{
    ULONG uRet = m_uRefCount-1;   // Decrement this object's reference count.

    if ( 0 == m_uRefCount )       // Releasing last reference?
    {
        delete this;
    }

    return uRet;
}

virtual HRESULT __stdcall QueryInterface( REFIID riid, void** ppv )
{
    HRESULT hrRet = S_OK;

    // Check that ppv really points to a void*.
    if ( IsBadWritePtr ( ppv, sizeof(void*) ))
    {
        return E_POINTER;
    }

    // Standard QI initialization - set *ppv to NULL.
    *ppv = NULL;

    // If the client is requesting an interface we support, set *ppv.
    if ( InlineIsEqualGUID ( riid, IID_IUnknown ))
    {
        *ppv = (IUnknown*) this;
    }
    else if ( InlineIsEqualGUID ( riid, __uuidof(IMath) ))
    {
        *ppv = (IMath*) this;
    }
    else
    {
        hrRet = E_NOINTERFACE;
    }

    // If we're returning an interface pointer, AddRef() it.
    if ( S_OK == hrRet )
    {
        ((IUnknown*) *ppv)->AddRef();
    }

    return hrRet;
}

//IMath Implementation
virtual int __stdcall Add(int i, int j)
{
    return i+j;
}

virtual int __stdcall Sub(int i, int j)
{
    return i-j;
}

protected:
UINT m_uRefCount; // object's reference count
};
```

3. Add a Header File [MathCompGuidDef.h] for assigning GUIDS for IMath and CMathComp

**MathCompGuidDef.h**

```cpp
struct **declspec(uuid("{4024093A-F7C4-4ecf-8E60-B79C5AEAE6E0}")) IMath;
class** declspec(uuid("{3429CFBA-BCEA-4b1d-9441-E1E3C26BD8E9}")) CMathComp;
```

**3. Add a C++ File [CMathCompClassFactory.h] to Implement the IClassFactory Interface for our Math Component**

**CMathCompClassFactory.h**

```cpp

# include "stdafx.h"
# include "MathComp.cpp"
class CMathCompClassFactory : public IClassFactory
{
public:
CMathCompClassFactory()
{
m_uRefCount = 0;
g_uDllLockCount++;
}
virtual ~CMathCompClassFactory()
{
    g_uDllLockCount--;
}

// IUnknown methods
virtual ULONG __stdcall AddRef()
{
    m_uRefCount = m_uRefCount+1;  // Increment this object's reference count.
    return m_uRefCount;
}

virtual ULONG __stdcall Release()
{
    ULONG uRet = m_uRefCount-1;   // Decrement this object's reference count.

    if ( 0 == m_uRefCount )       // Releasing last reference?
    {
        delete this;
    }

    return uRet;
}

virtual HRESULT __stdcall QueryInterface( REFIID riid, void** ppv )
{
    HRESULT hrRet = S_OK;

    // Check that ppv really points to a void*.
    if ( IsBadWritePtr ( ppv, sizeof(void*) ))
    {
        return E_POINTER;
    }

    // Standard QI initialization - set *ppv to NULL.
    *ppv = NULL;

    // If the client is requesting an interface we support, set *ppv.
    if ( InlineIsEqualGUID ( riid, IID_IUnknown ))
    {
        *ppv = (IUnknown*) this;
    }
    else if ( InlineIsEqualGUID ( riid, IID_IClassFactory ))
    {
        *ppv = (IClassFactory*) this;
    }
    else
    {
        hrRet = E_NOINTERFACE;
    }

    // If we're returning an interface pointer, AddRef() it.
    if ( S_OK == hrRet )
    {
        ((IUnknown*) *ppv)->AddRef();
    }

    return hrRet;

}

// IClassFactory
virtual HRESULT __stdcall CreateInstance ( IUnknown* pUnkOuter,
REFIID riid,
void** ppv )
{
HRESULT hrRet;


    // No support aggregation, so pUnkOuter must be NULL.
    if ( NULL != pUnkOuter )
    {
        return CLASS_E_NOAGGREGATION;
    }

    // Check that ppv really points to a void*.
    if ( IsBadWritePtr ( ppv, sizeof(void*) ))
    {
        return E_POINTER;
    }

    *ppv = NULL;

    // Create a new COM object!
    m_pMathServ = new CMathComp();

    if ( NULL == m_pMathServ )
    {
        return E_OUTOFMEMORY;
    }

    // QueryInterface the object for the interface the client is requesting.
    hrRet = m_pMathServ->QueryInterface ( riid, ppv );

    // If the QI failed, delete the COM object since the client isn't able
    // to use it (the client doesn't have any interface pointers on the object)
    if ( FAILED(hrRet) )
    {
        delete m_pMathServ;
    }

    return hrRet;
}

virtual HRESULT __stdcall LockServer ( BOOL fLock )
{
    // Increase/decrease the DLL ref count, according to the fLock param.
    fLock ? g_uDllLockCount++ : g_uDllLockCount--;
    return S_OK;
}


protected:
ULONG m_uRefCount;
CMathComp* m_pMathServ;
};
```

**4. Add a C++ File [Infrastructure.cpp] and add the Infrastructure methods to our comMathServLib In-Process COM Component**

```cpp
# include "stdafx.h"
# include "MathCompGuidDef.h"
# include "MathCompClassFactory.cpp"

HINSTANCE g_hinstThisDll = NULL; // DLL's module handle
UINT g_uDllLockCount = 0; // # of COM objects in existence

// DllMain() is our DLL's entry point. Windows calls this when a process or thread
// loads and unloads the DLL.
BOOL APIENTRY DllMain ( HINSTANCE hModule,
DWORD ul_reason_for_call,
LPVOID lpReserved )
{
switch ( ul_reason_for_call )
{
    case DLL_PROCESS_ATTACH:
    {
      g_hinstThisDll = hModule;
      // Calling DisableThreadLibraryCalls() prevents DllMain() from
      // getting called for every thread that attaches/detaches from DLL
      DisableThreadLibraryCalls ( hModule );
    }
    break;

    case DLL_PROCESS_DETACH:
    {
    }
    break;
}

return TRUE;
}

// DllGetClassObject() is called when COM needs to get a class factory.
STDAPI DllGetClassObject ( REFCLSID rclsid, REFIID riid, void* *ppv )
{
HRESULT hrRet;
CMathCompClassFactory* pFactory;

// Check that the client is asking for the CSimpleMsgBoxImpl factory.
if ( !InlineIsEqualGUID ( rclsid, __uuidof(CMathComp) ))
{
    return CLASS_E_CLASSNOTAVAILABLE;
}

// Check that ppv really points to a void*.
if ( IsBadWritePtr ( ppv, sizeof(void*) ))
{
    return E_POINTER;
}

*ppv = NULL;

// Construct a new class factory object.
pFactory = new CMathCompClassFactory;

if ( NULL == pFactory )
{
    return E_OUTOFMEMORY;
}

// AddRef() the factory since we're using it.
pFactory->AddRef();

// QueryInterface() the factory for the interface the client wants.
hrRet = pFactory->QueryInterface ( riid, ppv );

// We're done with the factory, so Release() it.
pFactory->Release();

return hrRet;

}

// DllCanUnloadNow() is called when COM wants to unload our DLL from memory.
// We check our lock count, which will be nonzero if there are any COM
// objects still in memory.
// Return S_FALSE to prevent the DLL from being unloaded, or S_OK to let it
// be unloaded.
STDAPI DllCanUnloadNow()
{
return g_uDllLockCount > 0 ? S_FALSE : S_OK;
}

// DllRegisterServer() creates the registy entries that tells COM where our
// server is located and its threading model.
STDAPI DllRegisterServer()
{
HKEY hCLSIDKey = NULL, hInProcSvrKey = NULL;
LONG lRet;
TCHAR szModulePath [MAX_PATH];
TCHAR szClassDescription[] = _T("MathServ class");
TCHAR szThreadingModel[] = _T("Apartment");

__try
{
    // Create a key under CLSID for our COM server.
    lRet = RegCreateKeyEx ( HKEY_CLASSES_ROOT,
            _T("CLSID{3429CFBA-BCEA-4b1d-9441-E1E3C26BD8E9}"), 0, NULL,
            REG_OPTION_NON_VOLATILE, KEY_SET_VALUE | KEY_CREATE_SUB_KEY,
            NULL, &hCLSIDKey, NULL );

    if ( ERROR_SUCCESS != lRet )
    {
        return HRESULT_FROM_WIN32(lRet);
    }

    // The default value of the key is a human-readable
    // description of the coclass.
    lRet = RegSetValueEx ( hCLSIDKey, NULL, 0, REG_SZ,
            (const BYTE*)szClassDescription, sizeof(szClassDescription));

    if ( ERROR_SUCCESS != lRet )
    {
        return HRESULT_FROM_WIN32(lRet);
    }

    // Create the InProcServer32 key, which holds info about our coclass.
    lRet = RegCreateKeyEx ( hCLSIDKey, _T("InProcServer32"), 0, NULL,
            REG_OPTION_NON_VOLATILE, KEY_SET_VALUE,
            NULL, &hInProcSvrKey, NULL );

    if ( ERROR_SUCCESS != lRet )
    {
        return HRESULT_FROM_WIN32(lRet);
    }

    // The default value of the InProcServer32 key holds the
    // full path to our DLL.
    GetModuleFileName ( g_hinstThisDll, szModulePath, MAX_PATH );

    lRet = RegSetValueEx(hInProcSvrKey, NULL, 0, REG_SZ, (const BYTE*)szModulePath,
            sizeof(TCHAR) *(lstrlen(szModulePath)+1) );

    if ( ERROR_SUCCESS != lRet )
    {
        return HRESULT_FROM_WIN32(lRet);
    }

    // The ThreadingModel value tells COM how it should handle threads
    // in our DLL. The concept of apartments is beyond the scope of this
    // article, but for simple, single-threaded DLLs, use Apartment.
    lRet = RegSetValueEx ( hInProcSvrKey, _T("ThreadingModel"), 0, REG_SZ,
        (const BYTE*) szThreadingModel,
        sizeof(szThreadingModel) );

    if ( ERROR_SUCCESS != lRet )
    {
        return HRESULT_FROM_WIN32(lRet);
    }
}

__finally
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

return S_OK;

}

// DllUnregisterServer() deleted the registy entries that DllRegisterServer() created.
STDAPI DllUnregisterServer()
{
// Delete our registry entries.
RegDeleteKey ( HKEY_CLASSES_ROOT,
_T("CLSID{3429CFBA-BCEA-4b1d-9441-E1E3C26BD8E9}InProcServer32"));

RegDeleteKey ( HKEY_CLASSES_ROOT,
 _T("CLSID{3429CFBA-BCEA-4b1d-9441-E1E3C26BD8E9}") );

return S_OK;

}
```

**5. Add a .def [MathServ.def] to export functions**  
**MathServ.def**

```cpp
EXPORTS
DllRegisterServer PRIVATE
DllUnregisterServer PRIVATE
DllGetClassObject PRIVATE
DllCanUnloadNow PRIVATE
```

**6. In stdafx.h add module lock count and instance for DLL**

```cpp

# pragma once
# define WIN32_LEAN_AND_MEAN // Exclude rarely-used stuff from Windows headers
# include <windows.h>
# include <tchar.h>
# include <comdef.h>

extern HINSTANCE g_hinstThisDll; // Our DLL's HINSTANCE
extern UINT g_uDllLockCount; // The module lock count
```

**Develop a Console Client** **named 'comClient'** **for consuming the 'comMathServLib'**

**comClient.cpp**

```cpp
// comClient.cpp : Defines the entry point for the console application.
# include <comdef.h>
# include "../comMathServLib/MathCompGuidDef.h"
# include "../comMathServLib/IMath.h"
int main()
{
IMath* pIMath;
HRESULT hr;

// 1. Initialize COM Library
CoInitialize(NULL);

// 2. Call CoCreateInstance to get the IMath interface pointer
hr = CoCreateInstance ( __uuidof(CMathComp), NULL, CLSCTX_INPROC_SERVER,
                        __uuidof(IMath), (void**) &pIMath );

if ( FAILED(hr) )
{
    return 0;
}

// 3. Call the interface functions
int sum = pIMath->Add(1, 3);
printf("Sum = %d n", sum);

int sub = pIMath->Sub(4, 3);
printf("Sub = %d n", sub);

// 4. Release the interface pointer if you are done
pIMath->Release();

// 5. Un-Initialize COM Library
CoUninitialize();
return 0;

}
```
