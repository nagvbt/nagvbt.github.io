---
tags: ["C"]
---

# Write a code to Outputs its own code"

__FILE__ macro  is a Predefined Macros : The name of the current source file.
FILE expands to a string surrounded by double quotation marks.

fgetc: Read a character from a stream. returns an integer putchar: Writes a character to a stream

```c
# include "stdio.h"
//Program that outputs its own code 

int main () { 
  FILE *fp; char c;
  fp = fopen(__FILE__,"r");

 while((c=getc(fp))!= EOF) { 
  printf("%c",c); 
  } 
  fclose(fp);
} 
```
