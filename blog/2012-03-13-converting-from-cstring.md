---
title: "Converting from CString"
date: "2012-03-13"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "MFC"
  - "vc"
---

This post demonstrates how to convert from a **CString** to the other string types

**CString to LPTSTR**

```c
CString origCString = "HelloWorld";

// Get the internal buffer pointer of CString.
LPTSTR pString = origCString.GetBuffer(0);

//Release it.
origCString.ReleaseBuffer();
```

**LPTSTR to** CString 

```c
LPTSTR origLPTSTR = "HelloWorld";
CString sCString = CString(origLPTSTR);
```

**CString to char\***

```c
CString origCString = "HelloWorld";

// Get the internal buffer pointer of CString.
char\* pString = origCString.GetBuffer();

//Release it.
origCString.ReleaseBuffer();
```

**char\* to** CString

```c
char\* origchar = "HelloWorld";
CString cstring = CString(origchar);
```

**CString to CComBSTR**

```c
CString origCString = "HelloWorld";
CComBSTR ccombstr = CComBSTR(origCString);
```

**CComBSTR to** CString

```c
CComBSTR origCComBSTR = "HelloWorld";
CString cstring = CString(origCComBSTR);
```

**CString to** \_bstr\_t

```c
CString origCString = "HelloWorld";
\_bstr\_t bstrt = \_bstr\_t(origCString);
```

**\_bstr\_t to** CString

```c
\_bstr\_t origbstrt  = "HelloWorld";
CString cstring = CString((char\*)origbstrt);
```

**CString to** BSTR

```c
CString origCString = "HelloWorld";
BSTR bstr = origCString.AllocSysString();
::SysFreeString(bstr); //Free the string.
```

**BSTR to** CString

```c
BSTR origbstr  = "HelloWorld";
CString cstring = CString(origbstr);
```

**CString to** CComVariant

```c
CString origCString = "HelloWorld";
CComVariant comvariant =  CComVariant(origCString);
```

**CComVariant to** CString

```c
CComVariant origcomvariant  = "HelloWorld";
CString cstring = CString(origcomvariant);
```

**CString to** COleVariant

```c
CString origCString = "HelloWorld";
COleVariant olevariant =  CComVariant(origCString);
```

**COleVariant to** CString

```c
COleVariant origolevariant  = "HelloWorld";
CString cstring = CString(origolevariant);
```
