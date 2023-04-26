---
title: "COM Basics"
date: "2011-09-11"
categories: 
  - "com-dcom-atl"
tags: 
  - "com"
---

- [1\. Definition of COM](#1-definition-of-com)
- [2\. Advantages of COM](#2-advantages-of-com)
- [3\. Definitions of the COM Basic Elements](#3-definitions-of-the-com-basic-elements)
    - [COM Component:](#com-component-)
    - [Types of Components](#types-of-components)
    - [COM Interface:](#com-interface-)
    - [The IUnknown Interface](#the-iunknown-interface)
- [4\. Working with COM Objects](#4-working-with-com-objects)
    - [Creating a new object](#creating-a-new-object)
    - [Deleting objects](#deleting-objects)
- [5\. FAQ](#5-faq)

## 1\. Definition of COM

COM is a acronym for Microsoft COMPONENT OBJECT MODEL and it is a specification.  
COM is a platform-independent, distributed, object-oriented system which provides a standard for binary components and clients to interact with each other

**COM is not a** - Launguage

## 2\. Advantages of COM

1. Loose Coupling: In a software, that uses COM objects, we can easily replace an existing COM object with another COM object written in entirely another language as long as the signatures of the methods in both the COM objects remain same. In that case, there will not be any change in the existing software code that uses the COM object.
    
2. Allows dynamic loading and unloading of components: Just visualize them as plug and play devices, just plug it in and it starts working. Pull it out when you don't need it.
    
3. Code Reusability: Once a COM component is created, it can be used any number of times in any number of projects as you like.
    

## 3\. Definitions of the COM Basic Elements

### COM Component:

A component is a _language independent_ which can be shipped in _binary_ form and Expose their functionality through an _interface_ mechanism and can be _upgraded_ with out breaking old clients. COM Component can be developed using programming language like  C++, Visual Basic, Delphi etc.

### Types of Components

**In-process:** In-Process components are (DLLs) Dynamic Link Libraries. They run in the memory space of client application (so they are termed as in-process).

**Out-process:** Out-Process components are (EXEs) Executables. They run in a different memory space as that of client application (so they are termed as out-process).

**Remote:** Remote components are just like any other component but the only difference is that remote components run from a separate remote location via a network. They are implemented using DCOM (Distributed COM).

### COM Interface:

A COM object’s interface provides a memory lay out of functions that Clients access. An _interface_ is a **contract** that consists of a group of function prototypes whose usage is defined but whose implementation is not.  An Interface is equivalent to a structure with pointers to functions.

• The Client calls the Server Functions through interface

In C++ the interface can be represented as a class with pure virtual functions.

```cpp
class CInterface  
{  
virtual void **stdcall Fun1( ) = 0;  
virtual void** stdcall Fun2( ) = 0;  
virtual void __stdcall Fun3( ) = 0;  
};
```

****All COM objects must implement the IUnknown interface****

### The IUnknown Interface

IUnknown, contains three vital methods: QueryInterface, AddRef, and Release

| Method | Description |
| --- | --- |
| **AddRef** | Increments the reference count for an interface on an object. |
| **QueryInterface** | Retrieves pointers to the supported interfaces on an object. |
| **Release** | Decrements the reference count for an interface on an object. |

**Code Snippet**

```cpp
interface IUnknown  
{  
//IUnknown Functions  
virtual ULONG **stdcall AddRef() = 0;  
virtual ULONG** stdcall Release() = 0;  
virtual HRESULT __stdcall QueryInterface( REFIID riid, void** ppv ) = 0;  
}  
```

****stdcall****\*\*: The\*\* stdcall calling convention in which

- The callee is responsible for cleaning up the stack
- The parameters are pushed onto the stack in right-to-left order
- Registers EAX, ECX, and EDX are designated for use within the function.
- Return values are stored in the EAX register.

**HRESULT** : HRESULT 32-bit data type that indicate the status of an operation. For more information on HRESULT See [Developer tools, technical documentation and coding examples | Microsoft Docs](http://msdn.microsoft.com/en-us/library/bb401631.aspx)

## 4\. Working with COM Objects

#### Creating a new object

- In C++, use `operator **new**` or create an object on the stack.
- In COM, call an API in the COM library **CoCreateInstance**

#### Deleting objects

- In C++, use `operator **delete**` or let a stack object go out of scope.
    
- In COM, all objects keep their own reference counts. The caller must tell the object when the caller is done using the object. COM objects free themselves from memory when the reference count reaches 0.
    
- Call **Release**() method to tell the COM object that you no longer need it. Once we call `Release()`, we must not use the interface pointer any more, since the COM object may disappear from memory at any time.
    
- `Using **CoFreeUnusedLibraries**()` API during your idle processing unloads any COM servers that have no outstanding references, so this also reduces your Clients's memory usage.
    

## 5\. FAQ

1. What is COM?  
    check - Definition of COM
    
2. Why COM ?  
    check - 1. Advantages of COM
    
3. What is a COM Component?  
    check - 2. Definitions of the COM Basic Elements
    
4. What are the types of components?  
    check - 2. Definitions of the COM Basic Elements
    
5. What is an Interface ?  
    check - COM Interface
    
6. What is the basic Interface to be implemented in COM?  
    IUnknown
    
7. What are methods of IUnknown?  
    check - The IUnknown Interface
    
8. How to create an COM Object?  
    check - 4. Working with COM Objects
    
9. How to delete a COM Object?  
    check - 4. Working with COM Objects
    
10. When to use CoFreeUnusedLibraries ?  
    check - 4. Working with COM Objects
