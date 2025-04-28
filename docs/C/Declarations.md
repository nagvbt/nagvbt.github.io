---
sidebar_position: 2
---

# Declarations and Initializations
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
### 1. What is a Constant ?

A constant is an entity that doesn’t change.
A `constant` is a number, character, or character string that can be used as a value in a program. Use constants to represent floating-point, integer, enumeration, or character values that cannot be modified.

***Syntax:***

```c
floating-point-constant  eg. 1.9, 
integer-constant , 
enumeration-constant, 
character-constant
```

### 2. What is a Variable or Identifier ?

A variable is an entity that may change.
variable is a named location in memory that is used to hold a value that can be modified by the program. All variables must be declared before they can be used.

***Syntax:***
`DataType variable_list;`

***Example:***

```c
int i, j, l;
short int si;
unsigned int ui;
double balance, profit, loss;
```

### 3. How do you decide which integer type to use?

Use `short` when you need to avoid values over 32,767, `int` when you want to store integers, `long` for long numbers (more than 6 digits), and `float` for numbers over 4 billion.

### 4. Where Variables are declared?

Variables can be declared in three places: see the below figure.

1. Inside functions – called as local variables
2. In the definition of function parameters – called as formal parameters
3. Outside of all functions  –  called as global variables

***Example:***

```c
char sName[10]; --> Global Variables

int main()
{
  float salary; --> Local Variables 
}
```

### 5. What's the difference between a definition and declaration of a variable?

In the definition of a variable space is reserved for the variable and some initial value is given to it. Whereas a declaration only identifies the type of the variable but no storage is allocated.

### 6. What's the best way to declare and define global variables?

In headers; this way, you can get link errors when you include the same header twice. Generally, you will have to define a variable everywhere you want to use it, and then declare it someplace so you know what it is.

### 7. What is a Keywoard ?

The following keywords are reserved in C, each having a specific meaning to the compiler, and must not be used as identifiers.

```c
auto else long switch
break enum register  typedef
case extern return union
char float short unsigned
const for signed void
continue goto sizeof volatile
default if static while
do int struct _Packed
double.
```

### 8. Explain structure of C program ?

A group of instructions would be combined form a program. Each
The building blocks of a C program are functions which can invoke one another.  A ‘Function’ can be defined as a program which performs a certain task.
Every C program must have at least one function of its own, with the special name main( ). Main is the first function invoked when the program starts. It can call other functions.

***Example:***

```c
#include <stdio.h>

int main(void)                
{
    /* define a variable called num */
 int num; 
 /* assign a value to num        */
    num = 6; 

 /* use the printf() function    */
    printf("MASTER C !! \n"); 

    printf("My favorite No. is %d \n",num);
    return 0;
}
Output                    
Learn MASTER C !!  
My favorite No. is 6
```

### 9. What is a Expression ?

Expression is anything that evaluates to a numeric value.

***Example:***

```c
int x, y;
y = 10;
x = a + 10; //Expression
```

### 10. Explain about Operators ?

Definition: An operator is a symbol that instructs C to perform some operation, or action, on one or more operands.

-*- Category of operators  -*-

Unary Operators: A unary operator is an operator, which operates on one operand.  

Binary: A binary operator is an operator, which operates on two operands.

Ternary: A ternary operator is an operator, which operates on three operands.

There are four types of operators in C

1. The assignment operator
2. Mathematical operators
3. Comparative or Relational operators
4. Logical operators
