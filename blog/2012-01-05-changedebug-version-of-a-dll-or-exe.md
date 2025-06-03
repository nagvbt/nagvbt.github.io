---
tags: ["C++", "MFC"]
---

# Change the name of the Debug Version of a DLL or Exe
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
Its very useful to name the Debug version of the exe or DLL with letter "D" appended in-order to avoid confusion between release and debug version of binaries

**Steps:**

1. Create a console application with name "MyProject"

2. To change the output file name in debug configuration

place **D** as shown in below figure

Project Project Properties -> Linker -> General -> Output File

**Release Version:** MyProject Application Name: c:MyProjectReleaseMyProject.exe **Debug Version:** MyProject Application Name: c:MyProjectDebugMyProjectD.exe
