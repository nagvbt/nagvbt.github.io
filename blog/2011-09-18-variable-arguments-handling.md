---
title: "Variable arguments handling in C/C++"
date: "2011-09-18"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "cpp"
---

Use va\_list to accept a VARYING NUMBER OF ARGUMENTS for any function in C/C++. printf(const char\* \_Format, ...) is a real time function which uses va\_list.

For using va\_list we need to know about the following macros

va\_start Initialize a variable argument list (macro) va\_arg Retrieve next argument (macro) va\_end End using variable argument list (macro)

The sample explains how to use VARYING NUMBER OF ARGUMENTS

```cpp

# include <stdarg.h>

int Add(int args, ...) { int sum = 0; int temp = 0;

va\_list va; //1. Declare a va\_list

va\_start(va, args); //2. Initialise

for(int i = 0; i<=args; i++) { temp = va\_arg(va, int); //3. Retrieve sum = temp+sum; }

va\_end(va); //4. END

return sum; }

void main() { printf("sum=%d n ", Add(2, 1, 2, 5)); //OutPut: 8 }

\[/source\]
