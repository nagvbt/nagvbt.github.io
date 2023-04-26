---
title: "C FAQ 3: How to write a code to Outputs its own code"
date: "2012-01-19"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "c-faq"
  - "c"
---

\_FILE **:It is a Predefined Macros : The name of the current source file.** FILE\_\_ expands to a string surrounded by double quotation marks.

fgetc: Read a character from a stream. returns an integer putchar: Writes a character to a stream

```c

# include "stdio.h"

# include

//Program that outputs its own code int main () { FILE \*fp; char c;

fp = fopen(**FILE**,"r"); while((c=getc(fp))!= EOF) { printf("%c",c); } fclose(fp); } ```
