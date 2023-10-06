---
sidebar_position: 3
---

# Data Types
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
### 1. What is a Data Type?

Data type  (or just type) determines the possible values that an identifier can have and the valid operations that can be applied on it.

### 2. How many Data Types present in C?

In C language, data types are broadly classified in to three types:

a. Basic data types (primitive data types)
b. Derived data types
c. User-defined data types

### 3. What are the Basic Data Types in C?

The C programming language provides the user with four basic data types.

- int     -> An integer.
- float -> A floating point(real) number.
- char -> A single byte of memory, enough to hold a character.
- double  -> double precision floating point number.

### 4. Explain about data type Qualifiers?

The C programming language provides the user with three basic data type qualifiers.

- short  ->  An integer possibly of reduced range.
- long  -> An integer possibly of increased range.
- unsigned ->  An integer with no negative range, the spare capacity being used to increase the positive range.

***Example:***

```c
#include <stdio.h>  
void main()
{
 char c ;
 unsigned char d ;
 int i ;
 unsigned int j ;
 short int k ;
 unsigned short int l ;
 long int m ;
 unsigned long int n ;
 float x ;
 double y ;
 long double z ;
 /* char */
 scanf ( "%c %c", &c, &d ) ;
 printf ( "%c %c", c, d ) ;
 /* int */
 scanf ( "%d %u", &i, &j ) ;
 printf ( "%d %u", i, j ) ;
 /* short int */
 scanf ( "%d %u", &k, &l ) ;
 printf ( "%d %u", k, l ) ;
 /* long int */
 scanf ( "%ld %lu", &m, &n ) ;
 printf ( "%ld %lu", m, n ) ;
 /* float, double, long double */
 scanf ( "%f %lf %Lf", &x, &y, &z ) ;
 printf ( "%f %lf %Lf", x, y, z ) ;
}
```

### 5. What are the Derived Data Types ?

These data types are derived from the basic data types. Derived data types availabe in C are:

a. Array type e.g. char[ ],int[ ], etc.
b. Pointer type e.g. char*, int*, etc.
c. Function type e.g.int(int,int), float(int), etc.
NOTE : Derived Data Types will be explained in next chapters

### 6. What are the User-defined Data Types ?

The C language provides flexibility to the user to create new data types. These newly created data types are called user-defined data types. The user-defined data types in C can be created by using:
a. Structure
b. Union
c. Enumeration
NOTE : Derived Data Types will be explained in next chapters
