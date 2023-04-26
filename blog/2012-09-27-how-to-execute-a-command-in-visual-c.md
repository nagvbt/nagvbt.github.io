---
title: "How to execute a command in Visual C++"
date: "2012-09-27"
categories: 
  - "windows-apps"
tags: 
  - "mfc"
  - "vc"
  - "win32"
---

There are basically four methods to run a command in Visual C++. WinExec is provided only for compatibility with 16-bit Windows. Applications should use the CreateProcess function.

· system(), \_wsystem()
· ShellExecute() or ShellExecuteEx()
· CreateProcess()
· WinExec()
