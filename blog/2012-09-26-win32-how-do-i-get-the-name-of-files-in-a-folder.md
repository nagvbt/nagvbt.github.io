---
tags: ["Win32"]
---

# Win32: How do I get the name of files in a folder ?

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

To get the name of files in a folder,

1. call the **FindFirstFile** function to open a search handle and get information about the first file that the file system find in the folder.

2. call the **FindNextFile** function to continue listing files from a previous call to FindFirstFile.

```c
WIN32_FIND_DATA FindFileData; 
HANDLE hFind; 
TCHAR *FilePathBuff = L"C:RequiredFolder"; 
hFind = FindFirstFile(FilePathBuff, &FindFileData);

if (hFind == INVALID_HANDLE_VALUE) { 
    printf(TEXT("FindFirstFile failed (%d)n"), GetLastError()); 
  } 
  else
  { 
    printf(TEXT("The first file is %sn"), FindFileData.cFileName); 
    while (FindNextFile(hFind, &FindFileData) != 0) 
    { 
      printf(TEXT("The next file is %sn"), FindFileData.cFileName);
    } FindClose(hFind);
  } 
```
