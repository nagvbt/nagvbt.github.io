---
sidebar_position: 6
---

# Type Casting and others
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033-->
## Type Casting

### 1.What is Type Casting ?

Converting an expression of a given type into another type is known as type-casting.

### 2.What are the different types of Type Casting ?

Two types Implicit Type Casting and Explicit Type Casting

### 3.Explain about Implicit Type Casting ?

Implicit conversions do not require any operator. They are automatically performed when a value is copied to a compatible type. Some of these conversions may imply a loss of precision, which can be avoided by explicit conversion.

e.g: (short to int, int to float, double to int...)

### 4.Explain about Explicit Type Casting ?

Many conversions, especially those that imply a different interpretation of the value, require an explicit conversion.

In order to control these types of conversions between classes, we have four specific casting operators: dynamic_cast, reinterpret_cast, static_cast and const_cast.

### 5.What is dynamic_cast ?

dynamic_cast Used for conversion of polymorphic types.

Syntax:

```cpp
dynamic_cast <new_type> (expression)
```

### 6.What is static_cast ?

static_cast Used for conversion of nonpolymorphic types.

Syntax:

```cpp
static_cast <new_type> (expression)
```

### 7.What is const_cast ?

const_cast Used to remove or set the const, volatile attributes.

Syntax:

```cpp
const_cast <new_type> (expression)
```

### 8.What is reinterpret_cast ?

reinterpret_cast Used for simple reinterpretation of bits.

Syntax:

```cpp
reinterpret_cast <new_type> (expression)
```

### 9.What is up casting and down casting ?

***Downcasting:*** dynamic_cast that performs this conversion. Downcasting is the opposite of the basic object-oriented rule, which states objects of a derived class, can always be assigned to variables of a base class.

***Upcasting:*** An object can be used as its own type or as an object of its base type. In addition it can be manipulated through an address of the base type. Taking the address of an object (either a pointer or a reference) and treating it as the address of the base type is called upcasting because of the way inheritance trees are drawn with the base of the class at the top.

## Other Features

### 1.What is Run Time Type ID (RTTI) ?

Sometimes the types of an object is unknown at compile time, since base class pointers may be used to point to objects of the base class or any object derived from that base.

 It is always not possible to know in advance what type of object will be pointed to by a base pointer at any given moment of time. This determination must be made at runtime, using RTTI.

### 2.What is the syntax for RTTI ?

Syntax:

```cpp
#include <typeinfo>

typeid(i).name() -> Returns the type of value of object
if(typeid(value1) == typeid(value1))
{
    //Do some thing
}
```

### 3.Why size of an empty C++ class not zero?

To ensure that the addresses of two different objects will be different C++ compiler will allocate one byte of memory.

### 4.What is the size of a class with one virtual function ?

4 Bytes to store the virtual table pointer.

### 5.What is the size of a class with more than one virtual function ?

4 Bytes to store the virtual table pointer.

### 6.What is the size of a class with three intiger values ?

As integer takes 4 bytes. Size will be 3 x 4 bytes = 12 bytes.

### 7.What are the differences between malloc and new ?

***malloc:***

1. Allocates memory only
2. Does not Calls objects constructor
3. No Type Safety malloc returns void*, so it requires a cast.
4. Cannot be overloaded

new:

1. Allocates right amount of memory for an object
2. Calls objects constructor
3. Provides Type Safety (avoids to assign the resulting pointer to an incompatible pointer type)
4. New operator can be overloaded by a class thus providing flexibility.

```cpp
int *p1 = (int*)malloc(sizeof(int));
Sample *p2 = (Sample*)malloc(sizeof(Sample));
Sample *p3 = new Sample();
```

### 8.What are the differences between free and delete ?

***free:*** Deallocates memory only
***delete:*** Calls the object destructor and then deallocates memory

### 9.Define namespace ?

Namespace allow to code different entities without bothering about name clashes. A namespace is a logical entity of code. A namespace can be included into another namespace.

```cpp
namespace name1
{
 void fun1() { /* ... */ }
 namespace name2
 {
  void fun2() { /* ... */ }
 }
}
```

### 10.How to call a static member outside a class ?

By using :: operator we can call/access static members

```cpp
class A
{
 static int count;
 static int Getcount() { return count++; }
};

int function()
{
 A::id = 0; // call to a static attribute
 return A::gendId(); // call to a static method         
}
```

### 11.When should I use const function ?

constant function cannot modify any data members or call any member functions that aren't declared as constant

```cpp
class A
{
 int id;
 void setid(int i) const
 {
  id = i // error. setid shouldn't modify
 }
};
```

### 12.Can I modify attributes in a const method ?

Yes.

```cpp
class Employee
{
 int id;
 mutable int sal;
 void f() const
 {
  id = 101; // error
  sal = 600; // ok
 }
};
```

### 13.How do I specify a pointer to a static method ?

Below Program demonstrates how to specify a pointer to a static method

```cpp
class A
{
 static int id;
 static void setid(int i) { id = i; }
};
void function()
{
 void (*psetid)(int) = A::setid; // assignment
 void (*psetid)(int) = &A::setid; // alternative
 (*psetid)(2); // calling the method with parameter value 2.
}
```

### 14.How do I write the code for methods outside classes?

Below Program demonstrates how to write the code for methods outside classes

```cpp
class A 
{
 int id;
 getid();
};
A::getid()
{
 return id;
}
```

### 15.How to initialize a const member variable?

As the value of a const member cannot be assigned with operator =, its value must be initialized as follows:

```cpp
class A
{
 const int id;
 A(int i): id(i) {} //  member variable id is initialized to the value of parameter i
};
```
