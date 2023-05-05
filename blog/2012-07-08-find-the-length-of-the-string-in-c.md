---
tags: ["C"]
---

# Find the length of the string in C

```c 
//str_len returns the length of str 
int str_len(char* str) { 
  int len; len = 0;
   for (int i = 0; str[i] != '\\0'; i++) 
   { 
    len ++; 
   } 
   return len;
}

void main() { 
  char* website = "www.blogspot.com"; 
  int len = str_len(website); 
  printf("length = %d n", len); 
}

OUTPUT length = 17 
```
