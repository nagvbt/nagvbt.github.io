---
sidebar_position: 5
---

# Templates and Exception Handling
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033-->

## Templates

### 1.What is a Function Template ?

Using templates we can create generic functions. We can use one function with several different types of data without having to explicitly recode specific versions for each data type.

Syntax:

```cpp
template <class Type1, class Type2>
return_type funName(param_list)
{
    // Function Body
}
```

### 2.What is a class Template  ?

Using templates we can create generic classes. We can use one class with several different types of data without having to explicitly recode specific versions for each data type.

Syntax:

```cpp
template <class Type1, class Type2>
class className
{
    //Code
}
className <Type1, Type2>obj;
```

### 3.What is Explicitly over loading /explicit specialization ?

Even through a generic function/class overloads itself needed we can explicitly over loaded one too. This is formally called as explicit specialization.

`template<>` construct to indicate specialization.

## Exception Handling

### 1.What is Exception handling?

Exception handling allows to manage runtime errors in an orderly fashion.
Exception handling build upon 3 keywords: Try, Throw, Catch.

### 2.Define Try, Throw, Catch ?

Try: Program statements that we want to monitor for exceptions are contained in try block.

Throw: If an exception i.e. error occurs within the try block, it is thrown using throw.

Catch: The exception is caught using catch and processed.

### 3.What is the order of placing base and derived class Expections in try catch blocks ?

To catch base class exception put always derived class object first in the catch blocks.
