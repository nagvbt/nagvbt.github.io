---
title: "How to avoid Memory Leaks in C++, VC++"
date: "2014-10-17"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "c"
  - "vc"
---

**Contents**

1. Introduction
2. How to find memory leak
3. Memory Leak and how to avoid it

Updated on : _**17-Oct-2014**_

**1\. Introduction**

The failure to properly deallocate memory that was previously allocated is known as Memory Leak. The consequences of memory leaks is that the programs that leak large amounts of memory, or leak progressively, may display symptoms ranging from poor (and gradually decreasing) performance to running out of memory completely. Worse, a leaking program may use up so much memory that it causes another program to fail, leaving the user with no clue to where the problem truly lies. In addition, even harmless memory leaks may be symptomatic of other problems.

**2\. How to Find Memory Leak**

Use third-party tools like DevPartner or use the following steps to find the memory leaks

- Compile the project in "Debug" Mode.
- Declare the objects **CMemoryState msOld, msNew, msDif;**
- Check the memory state at one point. **msOld.Checkpoint();** ://code ://code
- Check the memory state at onother point. **msNew.Checkpoint();**
- See for Difference **msDif.Difference( msOld, msNew );**
- Display the Leaked blocks in Debug window  **msDif.DumpStatistics();**

**3\. Memory Leak and How to avoid it**

**a. Wrong usage of new/delete.**

```c int\* intArr; intArr = new int\[500\]; delete intArr; ```

Use  delete\[\]intArr; instead of delete intArr as delete intArr is equal to deleting intArr \[0\];

 **b. Improper deletion of Array of Pointers**

```c 
introwNo = 3; 
intcolsNo = 3; 
int\*_array = newint_\[rowNo\];

for(inti=0; i < rowNo; i++) { array\[i\] = new int\[i+1\]; }

delete\[\] array; 
```

The cause of memory leak is that the 'array' is an array of pointers, with each of it's elements pointing to a separate memory block, so it is necessary free these blocks before freeing the array that holds the pointers.

```c 
for(int i=0; i < rowNo; i++) 
{
   delete\[\] array\[i\];
} 
    
delete \[\] array; 
```

**c. Resource Handles: GDI Objects- CBrush, CPen, CFont, CBitmap, CPallete, CRgn and respective handles**

```c CBrush myBr, \*pOldBr; myBr .CreateSolidBrush(RGB(0, 255, 0)); pOldBr = pDC->SelectObject(&myBr); pDC->SelectObject(& myBr ); : : pDC->SelectObject(pOldBrush); ```

For more details Check:[](http://msdn.microsoft.com/en-us/library/windows/desktop/ms724291(v=vs.85).aspx)[http://msdn.microsoft.com/en-us/library/windows/desktop/ms724291(v=vs.85).aspx](http://msdn.microsoft.com/en-us/library/windows/desktop/ms724291(v=vs.85).aspx)

The DeleteObject method deletes the GDI object by freeing all system storage associated with it. The storage associated with the CGdiObject object is not affected by this call. An application should not call DeleteObject on a CGdiObject object that is currently selected into a device context. Use myBr.DeleteObject(); after finishing using myBr (Cbrush) object For handles pass handle of the DeleteObject function DeleteObject(hPen);

**d. String conversions CString to LPTSTR**

```c CString sName; sName= \_T("Hello"); int lenName = sName.GetLength();LPTSTR lpstrg = sName.GetBuffer(lenName); :: sName.ReleaseBuffer(); Cstring to BSTR CString csStr = "Hello"; BSTR bStr = csStr.AllocSysString(); : : ::SysFreeString(bStr); //finished using the BSTR ```

Use ReleaseBuffer() when ever we create a buffer. Use ::SysFreeString() when ever we use AllocSysString() which allocates a new string of the type BSTR.

**e. Improper deletion of pointer objects in a CList**

```c CList<CMyData_, CMyData_\> ptList; CList<CMyData_, CMyData_\> ptList; : : ptList.RomoveAll(); //Improper deletion of pointer objects in a CArray CArray<CMyData_, CMyData_\> ptArr; : : ptArr.RemoveAll(); ```

Proper deletion of pointer objects in a CList

```c CList<CMyData_, CMyData_\> ptList; : : POSITION pos = ptList.GetHeadPosition();

while(pos!=NULL) { delete ptList.GetNext(pos); }

PtList.RomoveAll();

// Proper deletion of pointer objects in a CArray CArray<CMyData_, CMyData_\> ptArr; : : int i = 0;

while(i<ptArr.GetSize()) { delete ptArr.GetAt(i++); }

ptArr.RemoveAll(); ```

**f. Opening and proper closing of file and databases**

| ```c CFile file; file.Open(szFilePath, CFile::modeCreate | CFile::modeWrite, 0); |
| --- | --- |

: file.Write(chFile, chFileSize); file.Close(); ```

**e. Usage of Static Arrays**

```c int Sample\[500\]; ```

Never use static arrays if the array is dynamically growing. Instead of using static arrays use CArray or OCArray Example:

```c CArray<int, int> Sample; ```
