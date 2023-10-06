---
tags: ["MFC"]
---
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
# Converting from CString

This post demonstrates how to convert from a **CString** to the other string types

**CString to LPTSTR**

```cpp
CString origCString = "HelloWorld";

// Get the internal buffer pointer of CString.
LPTSTR pString = origCString.GetBuffer(0);

//Release it.
origCString.ReleaseBuffer();
```

**LPTSTR to** CString

```cpp
LPTSTR origLPTSTR = "HelloWorld";
CString sCString = CString(origLPTSTR);
```

**CString to char\***

```cpp
CString origCString = "HelloWorld";

// Get the internal buffer pointer of CString.
char* pString = origCString.GetBuffer();

//Release it.
origCString.ReleaseBuffer();
```

**char* to** CString

```cpp
char* origchar = "HelloWorld";
CString cstring = CString(origchar);
```

**CString to CComBSTR**

```cpp
CString origCString = "HelloWorld";
CComBSTR ccombstr = CComBSTR(origCString);
```

**CComBSTR to** CString

```cpp
CComBSTR origCComBSTR = "HelloWorld";
CString cstring = CString(origCComBSTR);
```

**CString to** _bstr_t

```cpp
CString origCString = "HelloWorld";
_bstr_t bstrt = _bstr_t(origCString);
```

**_bstr_t to** CString

```cpp
_bstr_t origbstrt  = "HelloWorld";
CString cstring = CString((char\*)origbstrt);
```

**CString to** BSTR

```cpp
CString origCString = "HelloWorld";
BSTR bstr = origCString.AllocSysString();
::SysFreeString(bstr); //Free the string.
```

**BSTR to** CString

```cpp
BSTR origbstr  = "HelloWorld";
CString cstring = CString(origbstr);
```

**CString to** CComVariant

```cpp
CString origCString = "HelloWorld";
CComVariant comvariant =  CComVariant(origCString);
```

**CComVariant to** CString

```cpp
CComVariant origcomvariant  = "HelloWorld";
CString cstring = CString(origcomvariant);
```

**CString to** COleVariant

```cpp
CString origCString = "HelloWorld";
COleVariant olevariant =  CComVariant(origCString);
```

**COleVariant to** CString

```cpp
COleVariant origolevariant  = "HelloWorld";
CString cstring = CString(origolevariant);
```
