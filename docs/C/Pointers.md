---
sidebar_position: 10
---

# Pointers
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD052 MD051 MD025-->
### 1. Define Pointer ?

Definition: A pointer is a variable which stores the address of another variable.

### 2. Explain about pointer Notation ?

Consider the declaration,

int i = 3 ;

This declaration tells the C compiler to:
(a) Reserve space in memory to hold the integer value.
(b) Associate the name i with this memory location.
(c) Store the value 3 at this location.

***Example:***

```c
#include <stdio.h>
int main( )
{
 int i = 3 ;
 
 printf ( "\nAddress of i = %u", &i ) ;
 printf ( "\nValue of i = %d", i ) ;
 printf ( "\nValue of i = %d", *(&i) ) ;

 return 0;
}

* OUTPUT: *
Address of i = 4652484
Value of i = 3
Value of i = 3
```

We may represent i’s location in memory by the following memory map.

### 3. What is the difference between  Address of (&) and Value at address (*) operators in pointers?

* Address of  (&) operator : *
Address of -> &
The &variable  which is  &i in the above program returns the address of variable i. so the output shows
Address of i = 4652484

* Value at address (*) operator*
Value at address -> *
The ‘value at address’ operator is also called as ‘indirection’ operator.*(&variable) which is *(&i) in the above program returns the value stored at a particular address.
Value of i = 3

### 3. Write a program to return more than one value from a function ?

```c
void Calc(int a,int b,int *add, int*sub);

void main()
{
  int add, sub;
  Calc(4,3, &add, &sub);
  cout<<"4+3="<<add<<endl;
  cout<<"4-3="<<sub;
  getchar();
}

void Calc(int a,int b,int *add, int*sub)
{
 *add = a+b;
 *sub = a-b;
}

* OUTPUT: *
4+3=7
4-3=1
```

### 4. What is the difference between *p++ and ++*p expressions ?

Both expressional are not one and the same.
*p++ increments the pointer and not the value pointed by it. Where as ++*p increments the value being pointed to by p.

### 5. What would be the equivalent pointer expression for referring the same element arr[i][j][k][l] ?

*(*(*(*(arr+i)+j)+k)+l)

### 6. Where we can use pointers ?

a. Accessing array or string elements ?
b. Call by refertence
c. Dynamic memory allocation
d. Implementing linked lists, trees, graphs and many other data structures

### 7. Declare an array of three function pointers where each function receives two ints and returns a float ?

float (*arr[3])(int, int);

### 8. Explain about Dynamic Memory allocation ?

If we need a variable amount of memory that can only be determined during runtime in that case  we need some user input to determine the necessary amount of memory space.

### 9. What are dynamic memory  management  functions in C?

malloc, calloc, free, realloc

### 10. Explain about malloc ?

malloc allocates a block of size of memory, returning a pointer to the beginning of the block.
***Example:***
char *arr;
int i;
arr = (char*) malloc(i+1);

Since malloc() returns a void pointer it is necessary to explicitly typecast it into an appropriate type of pointer.

***Example:***
int *p1 = (int*)malloc(sizeof(int));

### 11. Explain about calloc ?

Allocate space for array in memory. calloc allocates a block of memory for an array of num elements each of them size bytes long and initializes all its bits to zero. The effective result of an zero-initialized memory block of (num * size) bytes.

void* calloc(size_t num, size_t size);

num - No. of elements to be allocated
size - size of elements

NOTE: In calloc and malloc if the function failed to allocate the requested block of memory a NULL pointer is returned.

### 12. Explain about realloc?

void*realloc(void* ptr, size_t size);
ptr - pointer to a memory block previously allocated with malloc, calloc or realloc to be reallocated. If this is NULL a new block is allocated and a pointer to it is returned by the function.

### 13. Explain about free?

free deallocate space in memory.
void free(void* ptr);
ptr – pointer to a memory block previously allocated with malloc,calloc or realloc to be deal located.
