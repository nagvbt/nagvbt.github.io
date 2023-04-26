---
title: "Win32: How do I get the name of files in a folder ?"
date: "2012-09-26"
categories: 
  - "windows-apps"
tags: 
  - "c"
  - "win32"
---

To get the name of files in a folder,

1. call the **FindFirstFile** function to open a search handle and get information about the first file that the file system find in the folder.
    
2. call the **FindNextFile** function to continue listing files from a previous call to FindFirstFile.
    

```c WIN32\_FIND\_DATA FindFileData; HANDLE hFind; TCHAR \*FilePathBuff = L"C:RequiredFolder"; hFind = FindFirstFile(FilePathBuff, &FindFileData);

if (hFind == INVALID\_HANDLE\_VALUE) { printf(TEXT("FindFirstFile failed (%d)n"), GetLastError()); } else { printf(TEXT("The first file is %sn"), FindFileData.cFileName); while (FindNextFile(hFind, &FindFileData) != 0) { printf(TEXT("The next file is %sn"), FindFileData.cFileName); } FindClose(hFind); } ```
