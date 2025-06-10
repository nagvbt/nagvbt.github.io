---
tags: ["C"]
---

# C FAQ 4 to 7: Simple Programs

## 4. Swap of two numbers  with out temp

```c
#include "stdio.h";

int main()
{
  int a,b;
  a=10;
  b=20;
  printf("Before swapingn");
  printf("%dt%dn",a,b);

  /* normal temp
  int temp;
  temp=a;
  a=b;
  b=temp;

  //sol:-1
  a=a+b;
  b=a-b;
  a=a-b;

  //sol:-2
  a=ab;
  b=a/b;
  a=a/b;/

  //sol:-3
  //a^=b^=a^=b;

  a= a^b;
  b= a^b;
  a= a^b;
  printf("%dt",a);
  printf("After swapingn");
  printf("%dt%dn",a,b);
  return 0;
}
 ```

[Read More](/docs/C/CFaq)
