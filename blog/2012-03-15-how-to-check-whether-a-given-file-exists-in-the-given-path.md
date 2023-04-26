---
title: "How to check whether a given file exists in the given path ?"
date: "2012-03-15"
categories: 
  - "windows-apps"
tags: 
  - "win32"
---

Using Win32 API FindFirstFile we can find whether a given file exists in the given path (szFilePath) or not. BOOL IsFileExists( LPCTSTR szFilePath) method shown below serves our purpose.

```c BOOL IsFileExists( LPCTSTR szFilePath) // szFilePath in | file path { BOOL bFileExists; WIN32\_FIND\_DATA FindFileData;; HANDLE hFind;

hFind = FindFirstFile(szFilePath, &FindFileData); if (hFind == INVALID\_HANDLE\_VALUE) { bFileExists = FALSE; } else { FindClose(hFind); bFileExists = TRUE; }

return bFileExists; } ```
