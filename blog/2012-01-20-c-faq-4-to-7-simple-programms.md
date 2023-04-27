---
title: "C FAQ 4 to 7: Simple Programms"
date: "2012-01-20"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "C"
---

## 4. Swap of two numbers  with out temp

```c

# include "stdio.h"

# include

int main() { int a,b; a=10; b=20; printf("Before swapingn"); printf("%dt%dn",a,b);

/\* normal temp int temp; temp=a; a=b; b=temp;

//sol:-1 a=a+b; b=a-b; a=a-b;

//sol:-2 a=a_b; b=a/b; a=a/b;_/

//sol:-3 //a^=b^=a^=b;

a= a^b; b= a^b; a= a^b; printf("%dt",a); printf("After swapingn"); printf("%dt%dn",a,b); return 0; } ```

## 5\. Write a program to print "Hello World" with out using semicolon(;) ?

```c

# include "stdio.h"

# include

int main() { if(printf("Hello World ")) { //do nothing } } ```

**6\. Write a program to display the output as** ****\* **\*\***** **\***** **\***

```c void main() { for(int i=1; i=i; j--) { printf("\*"); }

printf("n"); } } ```

**7\. Write a program to display Fibonacci Series Using Recursion**

```c

# include

unsigned int fibonacci (unsigned int n) { if (n { return 1; } else { return fibonacci(n-1) + fibonacci(n-2); } }

int main() { unsigned int i, j=0;

printf("n Enter the fibonnaci number : "); scanf("%d", &i);

for(j=1; j printf("%d ",fibonacci(j)); } ```
