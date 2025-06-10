---
tags: ["Win32"]
---
# How to execute a command in Visual C++
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
There are basically four methods to run a command in Visual C++. WinExec is provided only for compatibility with 16-bit Windows. Applications should use the CreateProcess function.

· system(), _wsystem()
· ShellExecute() or ShellExecuteEx()
· CreateProcess()
· WinExec()
