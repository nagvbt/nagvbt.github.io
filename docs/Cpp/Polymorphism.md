---
sidebar_position: 7
---

# Polymorphism
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
### 1.What are the types of Polymorphism ?

1. COMPILE-TIME Polymorphism: It will be implemened by using Function Overloading and Operator Overloading

2. RUN-TIME Polymorphism: It will be implemened by using Virtual Functions

### 2.What is Binding ?

The term binding refers to the connection between a function call and the actual code executed as a result of the call.

### 3.What is the difference between Static and Dynamic Binding ?

***Static or Early Binding:***

Adavantage of function calls are fast when a function call gets resolved at compile-time it is called as static binding.
e.g: Normal functions, overloaded functions, overloaded operator.

***Dynamic or Late Binding:***

When a function call gets resolved at runtime it is called as dynamic binding. e.g: virtual functions

### 4.What are Virtual Functions ?

The form of the function that can be changed at runtime is called virtual function and the corresponding class is called polymorphic class.

C++ provides a solution to invoke the exact version of the member function which as to be decided at runtime using virtual functions.

They are the means by which functions of the base class can be overridden by the functions of the derived class.

### 5.What is a Pure virtual function ?

A virtual function which is marked with the pure specifier (=0)
e.g: `virtual void __stdcall Add( ) = 0;`

### 6.Pure Abstract base class ?

It is a base class that contains only pure virtual functions.

### 7.What is a Vtable pointer ?

It is a pointer to abstract base class points to the vtbl pointer which points to the virtual function table.

### 8.What is a virtual function table ?

It is an array of pointers that point to the implementations of the virtual functions.

### 9.Can we have virtual constructors ?

Constructor can not be virtual, because when constructor of a class is executed there is no vtable in the memory, means no virtual pointer defined yet. Hence the constructor should always be non-virtual.

### 10.Write a program to Demonstrates Virtual Functions ?

Purpose: Demonstrates Virtual Functions

```cpp
class Base {
public:
 virtual void vfun() {
  cout << "Base's vfun() \n";
 }
};

class Der1 : public Base {
public:
 virtual void vfun() {
  cout << "D1's vfun() \n";
 }
};

class Der2 : public Base {
public:
 virtual void vfun() {
  cout << "D2's vfun() \n";
 }
};

void main() {
 Base b, * bptr;
 Der1 d1;
 Der2 d2;

 bptr = &b;
 bptr->vfun(); // Base's vfun()

 bptr = &d1;
 bptr->vfun(); // D1's vfun()

 bptr = &d2;
 bptr->vfun(); // D2's vfun()
}

OUTPUT
Base's vfun()
D1's vfun()
D2's vfun()
```

### 11.Explain about Function Overloading ?

Function overloading is the process of using the same name for two or more functions.

1. Use different types of parameters.

2. Use different number of parameters.

### 12.What are the senarios that Function Overloading misunderstood ?

A. Two functions differing only in their return types cannot be overloaded:

```cpp
int fun1(int i)
float fun2(int i)       
```

B. Ambiguity due to Default arguments

```cpp
int fun1(int i)
int fun2(int i, int j = 1)      
```

C. Ambiguity due to normal & reference arguments

```cpp
int fun1(int i)
int fun2(int &i)      
```

D. Sometimes two function declarations will appear to be different when in fact they don’t.

```cpp
int fun1(int *p)
int fun2(int p[])
```

### 13.What is NAME MANGLING or NAME DECORATION ?

C++ Compiler changes names of all functions definitions and calls while compiling the program. This is known as NAME MANGLING or NAME DECORATION.

### 14.Explain about Operator overloading ?

Operator overloading means giving capability to the operator to work on different types of operands other than basic types.

The operators +, *  etc. work on operands of type int, float etc. we can overload these operators by giving them the capability to work on user-defined data types.

### 15.What are the Operators that cannot be overloaded ?

Table:

1. sizeof Size of operator
2. ?: Conditional operator
3. :: Scope resolution operator
4. . Membership operator
5. .* Pointer-to-member operator

### 16.Write the Syntax for Operator overloading ?

Syntax:

```cpp
ret_type className::operator op(arg_list)
{

}
```

Where op is operator ( +, -, * …)

### 17.Write a program to demonstrate Operator overloading ?

Purpose: demonstrate Operator overloading

```cpp
struct data {int i; };

//Post Increment
    data operator ++ (data x, int) {
    data t;
    t.i = x.i;
    x.i = x.i + 1;
    return t;
}

//Pre Increment
data operator ++ (data x) {
    data t;
    x.i = x.i + 1;
    t.i = x.i;
    return t;
}

void main() {
    data d;
    d.i = 1;
    //d++;
    ++d;
    cout<<d.i;
}
```
