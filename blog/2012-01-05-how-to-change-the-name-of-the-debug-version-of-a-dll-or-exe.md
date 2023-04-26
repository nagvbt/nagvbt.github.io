---
title: "How to change the name of the Debug Version of a DLL or Exe"
date: "2012-01-05"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "cpp"
  - "mfc"
  - "vc"
---

Its very useful to name the Debug version of the exe or DLL with letter "D" appended inoder to avoid confisuion between release and debug version of binaries

**Steps:**

1\. Create a console application with name "MyProject"

2\. To change the output file name in debug configuration

place **D** as shown in below figure

Project Project Properties -> Linker -> General -> Output File

**Release Version:** MyProject Application Name: c:MyProjectReleaseMyProject.exe **Debug Version:** MyProject Application Name: c:MyProjectDebugMyProjectD.exe
