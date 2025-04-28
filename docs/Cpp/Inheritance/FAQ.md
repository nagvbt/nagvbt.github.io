---
sidebar_position: 8
title: FAQ
---

# Inheritance FAQ

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
### 1.What is the base and derived classes ?

Base class: The class that is inherited is referred to as a base class.

Derived class: The class that does the inheriting is called the derived class

Base-class access central: when a class inherits another the members of the base class become members of the derived class

### 2.How the access status of the base class members inside the derived class is determined ?

Syntax:

```cpp
class derivedClassName : Access baseClassName
{
    //Member variables
    //Member functions  
};
```cpp

### 3.How to Inheriting multiple base classes ?

To inherit more than one base class, use a comma separated.Be  sure to use an access-specifer for each base inherited
     
Example:
```cpp
class derived : public base1, public base2
{
    // Body
};
```

### 4.Explain about Constructors, Destructors Execution order ?

1. Constructors are executed in their order of derivation

2. Destructors  are executed in reverse order of derivation

### 5.How to Pass parameters to Base-class constructors ?

(:) class separated the derived class constructed declaration from the base class specialization. And the base class specifications are separated from each other by commas in the case of multiple base classes.

Syntax:

```cpp
DerivedCls_Constructor (arg_list): base1(arg_list), base2(arg_list)
{
}
```

### 6.Explain about GRANTING ACCESS ?

When a base class is inherited as a private all the members of the base class became private member of derived class.

If there is a need to grant certain public members of the base class public status in the derived class even through the base class is inherited as a private.

### 7.Write a program to explain GRANTING ACCESS ?

The below program explains about Granting Access

```cpp
class B {
public:
    int i; // public in base
    B() { i = 10; }
};

// Inherit base as private.
class D: private B {
public:
    // here is access declaration
    B::i; // make i public again
};

void main() {
    D obj;        
    cout<<obj.i;
}

OUTPUT
10
```

Note: Access declaration  can’t be used to raise or lower a members access status.

### 8.Explain about Diamond Problem or VIATUAL BASE CLASS ?

An element of an ambiguity can be introduced into a c++ program when multiple base classes are inherited.

So when two or more objects are derived from a common based class we can prevent multiple copies of the base class as virtual when it is inherited.

### 9.Why we use VIRTUAL DESTRUCTOR ?

A virtual destructor ensures a proper calling order for the destructors in the class hierarchy.

Purpose: Demonstrates VIRTUAL DESTRUCTOR

```cpp
class base{
public:
    virtual ~base() {}
};

//-------------------------------
class derived: public base {
char *name;
public:
    derived()
    {
        name = new char[20];
    }

    ~derived()
    {
        delete [] name;
    }
};

void main() {
    base *b = new derived();
    delete b;
} 
```

When a base class destructor is virtual derived class destructor gets called first and then the base class destructor gets called. Hence delete p does gets executed.

### 10.How to call a parent constructor from a derived class?

use : opertor

```cpp
class  A
{
    A() { /* ... */ }
};
class B
{
    B(): A() { /* ... */ } // call to parent's constructor.
}
```
