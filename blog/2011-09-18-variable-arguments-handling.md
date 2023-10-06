---
tags: ["C++"]
---

# Variable arguments handling in C/C++
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
Use va_list to accept a VARYING NUMBER OF ARGUMENTS for any function in C/C++. printf(const char\*_Format, ...) is a real time function which uses va_list.

For using va_list we need to know about the following macros

va_start Initialize a variable argument list (macro) va_arg Retrieve next argument (macro) va_end End using variable argument list (macro)

The sample explains how to use VARYING NUMBER OF ARGUMENTS

```cpp

# include <stdarg.h>

int Add(int args, ...) 
{ 
  int sum = 0; 
  int temp = 0;

  va_list va; //1. Declare a va_list

  va_start(va, args); //2. Initialise

  for(int i = 0; i<=args; i++) { 
    temp = va_arg(va, int); //3. Retrieve 
    sum = temp+sum; 
  }

va_end(va); //4. END

return sum; 
}

void main() { 
  printf("sum=%d n ", Add(2, 1, 2, 5)); 
  //OutPut: 8 
  }
```
