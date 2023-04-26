---
title: "Basics of ATL"
date: "2012-07-08"
categories: 
  - "com-dcom-atl"
tags: 
  - "atl"
---

**What you will Learn Here…**

1. Definition of ATL
2. ATL Features
3. Basic Definitions of ATL
4. ATL's Component Class Hierarchy
5. FAQ

**1\. Definition of ATL** The Active Template Library (ATL) is a set of template-based C++ classes that allows to create small, fast Component Object Model (COM) objects.

**2\. ATL Features** 1.ATL provides two types of wizards a. AppWizard: AppWizard creates the initial ATL project. b. Object Wizard: Object Wizard produces code for basic COM components.

2. Built-in support for basic COM functionality such as IUnknown, class factories, IDispatch (automation), dual interfaces and self-registration.
    
3. Inbuilt Support for Microsoft’s Interface Definition Language (IDL) which provides marshaling support for custom Vtable interfaces as well as component self-description through a type library.
    
4. Aggregation of objects and Automation support
    
5. Support for developing ActiveX controls.
    

**3\. Basic Definitions of ATL** 1. _**Marshaling:**_ Marshaling is the process of transferring function arguments and return values across process and machine boundaries.

2. The **_proxy/stub_** DLL implements standard marshaling for each of the component interfaces.

COM will use the IPC to communicate between client and server.

- LPC is used when both reside on the same machine.
    
- RPC is used in a distributed networked environment
    

**4\. ATL's Component Class Hierarchy**

ATL never Creates the instance of the CoClass Directly. Instead ATL uses CComObject template class with 'CMathComp' object type as a parameter to create our Object.

_CComObject \* pMath = new ComObject_

**_CComObjectRootEx_** - Handles object reference count management. _**CComCoClass**_ - Provides methods for creating instances of a class and obtaining its properties it has createInstance() method which creates the instance of a COM Object through ClassFactory _**CComObject**_ - Implements IUnknown for an COM object.

**5\. FAQ**

1. What is ATL ? check - 1. Definition of ATL
    
2. What is MIDL ? check - 2. ATL Features - 3 point
    
3. What are the featurs of ATL ? check - 2. ATL Feature
    
4. What is Marshiling ? check - 3. Basic Definitions of ATL - 1 point
    
5. Explain about ATL's Class Hierarchy? check - 4.ATL's Component Class Hierarchy
