---
tags: ["Win32"]
---

# Check whether a given file exists in the given path
Using Win32 API FindFirstFile we can find whether a given file exists in the given path (szFilePath) or not. BOOL IsFileExists( LPCTSTR szFilePath) method shown below serves our purpose.

```cpp 
BOOL IsFileExists( LPCTSTR szFilePath) // szFilePath in | file path 
{ 
  BOOL bFileExists; 
  WIN32_FIND_DATA FindFileData; 
  HANDLE hFind;
  hFind = FindFirstFile(szFilePath, &FindFileData); 
  if (hFind == INVALID_HANDLE_VALUE) 
  { 
    bFileExists = FALSE; 
  } else { 
    FindClose(hFind);
    bFileExists = TRUE; 
  }

return bFileExists; 
} 
```
