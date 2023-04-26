---
title: "[Part-3: Comments, Methods, Class, objects] C++, C#, Java Syntax Differences"
date: "2012-04-12"
categories: 
  - "csharp"
  - "c-cpp-mfc-vcpp"
  - "java"
tags: 
  - "cpp"
  - "csharp"
---

**Comments** Same for C++, C#, Java

1. Single line comments  - //
    
2. Multi line comments
    

/ _This is a a multiline comment_ /

**Method/Function declarations**

Same, except that in C# and in Java, function must always be part of a class, and must prefix with access specifier - public/private/protected

check main function for [reference](http://nagvbt.blogspot.com/2012/04/13/syntaxpart/) 

## Class declarations

Same but c# and Java does not require a semicolon after closing bracket '}'

C++

```c class myMath { //Methods public: int Add(int i, int j) { return i + j; } }; ```

C#/Java

```c class myMath { //Methods public int Add(int i, int j) { return i + j; } } ```

**Object declaration/creation** **C++**

Object creation on Stack

```c myMath obj; //on stack int result = obj.Add(1,2); ```

Object creation on Heap

```c myMath \*pobj = new myMath(); //on heap int result = obj->Add(1,2); delete pobj; ```

**Java/C#**

```c myMath obj = new myMath(); int result = obj.Add(1,2); ```
