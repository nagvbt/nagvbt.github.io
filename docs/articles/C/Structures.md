---
sidebar_position: 9
---

# Structures Unions Enumerations

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->

### 1. Define structure ?

Definition:  A structure is a collection of variables of different data type that are referenced by a common name.

***Syntax:***

```c
struct stName 
{ 
 dataType member1; 
 dataType member2; 
 … 
 … 
};

struct stName j, k;
````

***Example:***

```c
struct book
{
 char name ;
 float price ;
 int pages ;
} ;

/* Declaration */
struct book b1, b2;

/* Definition for book b1*/
b1.name = 'A';
b1.price = 100;
b1.pages = 600;
```

We can also declare and define the book structure as
struct book bk5 = { 'B', 130.00, 550 } ;

### 2. Write a program to demonstrate structure ?

```c
#include <stdio.h>
struct book
{
 char name ;
 float price ;
 int pages ;
};

int main( )
{
 struct book b1;

     b1.name = 'A';
 b1.price = 100;
 b1.pages = 600;

 printf ( "\nBook name  = %c", b1.name ) ;
 printf ( "\nBook price = %f", b1.price ) ;
 printf ( "\nBook pages = %d", b1.pages ) ;
 return 0;
}

OUTPUT
Book name  = A
Book price = 100.000000
Book pages = 600
```

### 3. How to pass a entire Structures to a Function ?

When a structure is used as an argument to a function, the entire structure is passed using the normal call-by-value method.

Note: When using a structure as a parameter, remember that the type of the argument must match the type of the parameter. For example, in the following program both the argument b1 and the parameter x are declared as the same type of structure.

Example:For demonstrating passing structure to a function

```c
#include <stdio.h>
void printStruct(struct book x);

struct book
{
 char name ;
 float price ;
 int pages ;
};

int main( )
{
   struct book b1;

    b1.name = 'A';
    b1.price = 100;
    b1.pages = 600;
    printStruct(b1);

    return 0;
}

void printStruct(struct book x)
{
 printf ( "\nBook name  = %c", x.name ) ;
 printf ( "\nBook price = %f", x.price ) ;
 printf ( "\nBook pages = %d", x.pages ) ;
}

OUTPUT
Book name  = A
Book price = 100.000000
Book pages = 600
```

### 4. Explain about Nested Structures ?

Definition: When a structure is a member of another structure, it is called a nested structure. For example, the structure address is nested inside emp in this example:

***Example:***

```cpp
struct address 
{
 char name[30];
 char city[20];
 char country[3];
 int zip;
};

struct employee
{
 struct address addr; /* nested structure */
 float salary;

} worker;
```

Here, structure employee has been defined as having two members. The first is a structure of type address, which contains an employee's address. The other is salary, which holds the employee's wage. The following code fragment assigns 52133 to the zip element of address.

worker.address.zip = 521333;
worker.salary = 10000;

### 5. Define Union ?

Definition: A Union is a collection of variables of different data type that are referenced by a common name. A union is a memory location that is shared by two or more different types of variables. Unions are similar to structures. A union is declared and used in the same ways that a structure is. A union differs from a structure in that only one of its members can be used at a time. The reason for this is simple. All the members of a union occupy the same area of memory. They are laid on top of each other.

***Example:***

```c
#include <stdio.h>
union info
{
 char a;
 int x;
 float f;
} myData;

int main()
{
 myData.a = 'A';
     myData.x = 11;
     myData.f = 101.357;

     printf("Here is the Data:\n a=%c\n x=%i\n f=%.3f\n", 
           myData.a, myData.x, myData.f );
 
 return 0;
}

* OUTPUT: *
Here is the Data:
a = A
x = 1120581321
f = 101.357
```

Note: From above output it can be observed that even though if we assign the values to a, x, f. Only f value is displayed correctly since float value occues all the memory assigned for myData.

### 6. What is the difference between structure and union ?

Structures stores different variables at different location in memory whereas union occupies same memory location for all of its member variable. Structures allocates the memory equal to total memory required by its member variables but Union allocates the memory equal to the size of largest member of the union. Lets take an example.

```cpp
Struct info
{
 char name;
 int age;
 float weight;
}
```

Size of the structure info is sum of the size of all its member variables.
Size of structure info = size of char (1) + size of int (4) + size of float (4) = 9 bytes.

 ```cpp
union info
{
 char name;
 int age;
 float weight;
}
```

Size of the union info is the memory equal to the size of largest member of the union, i.e., float

Size of union info = Size of float = size of int = 4 bytes.

### 7. Explain about Union memory allocation  ?

At a particular point of time we can access only one member of the union. In union, memory allocated is used by all the members of the union but in case of structures, each member have it’s  own memory space allocated.

### 8. Define and explain enumeration with an example ?

Definition: An enumeration is a set of named integer constants.

***Syntax:***

```c
enum  enumName  { enumeration list } ;
```

***Example:***

```c
#include <stdio.h> 
enum DAY { Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday };

int main()
{ 
 DAY TheDay;
 int j = 0;
 printf("Please enter the day of the week (0 to 6)\n");
 scanf("%d",&j);
 TheDay = DAY(j);

 if(TheDay == Sunday || TheDay == Saturday)
 {
  printf("Hurray it is the weekend\n");
 }
 else
 {
  printf("Still at work\n");
 }
 return 0;
}

* OUTPUT: *
Please enter the day of the week (0 to 6)
5
Still at work
```
