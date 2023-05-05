---
tags: ["Win32"]
---
# How to execute a command in Visual C++

There are basically four methods to run a command in Visual C++. WinExec is provided only for compatibility with 16-bit Windows. Applications should use the CreateProcess function.

· system(), _wsystem()
· ShellExecute() or ShellExecuteEx()
· CreateProcess()
· WinExec()
