---
sidebar_position: 4
---

# Storage classes
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
### 1. Define C - storage class ?

A storage class defines the scope (visibility) and life-time of variables and/or functions within a C Program. These specifiers precede the type that they modify. There are the following storage classes, which can be used in a C Program
a. auto
b. register
c. static
d. extern

### 2. Explain about auto or Automatic storage class ?

The keyword used for Automatic storage class is 'auto'.
The variable declared as auto is stored in the memory.
Default value of that variable is garbage value.
Scope of that variable is local to the block in which the variable is defined.
Variable is alive till the control remains within the block in which the variable id defined.

***Example:***

```c
void main()
{
          auto int a;
          printf(“%d”,a)
}

* Output: *
1285
```

As seen above, the output is garbage value.

### 3. Explain about Register storage class?

The keyword used for Register storage class is 'register'.
The variable declared as register is stored in the CPU register.
Default value of that variable is garbage value.
Scope of that variable is local to the block in which the variable is defined.
Variable is alive till the control remains within the block in which the variable id defined.
Main difference between auto and register is that variable declared as auto is stored in memory whereas variable declared as register is stored in CPU register. Since the variable is stored in CPU register, it takes very less time to access that variable. Hence it becomes very time efficient.
It is not necessary that variable declared as register would be stored in CPU registers. The number of CPU registers is limited. If the CPU register is busy doing some other task then variable might act as automatic variable.

***Example:***

```c
#include<stdio.h>
#include<conio.h>
Void main(){
          register int a;
          printf(“%d”,a)
}
* Output: *
4587
```

As seen above, the output is garbage value.

### 4. Explain about Static storage class?

The keyword used for Static storage class is 'static'.
The variable declared as static is stored in the memory.
Default value of that variable is zero.
Scope of that variable is local to the block in which the variable is defined.
Life of variable persists between different function calls.

***Example:***

```c
#include <stdio.h>
 
/* function declaration */
void func(void);
 
static int count = 5; /* global variable */
 
main()
{
   while(count--)
   {
      func();
   }
   return 0;
}
/* function definition */
void func( void )
{
   static int i = 5; /* local static variable */
   i++;

   printf("i is %d and count is %d\n", i, count);
}

* Output: *
i is 6 and count is 4
i is 7 and count is 3
i is 8 and count is 2
i is 9 and count is 1
i is 10 and count is 0
```

### 5. Explain about External storage class ?

The keyword used for External storage class is 'extern'.
The variable declared as extern is stored in the memory.
Default value of that variable is zero.
Scope of that variable is global.
Variable is alive as long as the program’s execution doesn’t come to an end.

External variable can be declared outside all the functions or inside function using 'extern' keyword.

***Example:***

```c
#include<stdio.h>
int a;
Void main(){
          extern int b;
          printf(“%d %d”,a,b)
}
int b=10;

* Output: *
0 10
```
