---
title: "'Factory Method' Design Pattern using simple program"
date: "2012-04-06"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "cpp"
  - "design-patterns"
---

**Definition:**

Creates an instance of several derived classes. or Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

**Program:**

```c
#include "iostream"
using namespace std;

class Product
{
public:
    virtual void Show() = 0;
};

class ConcreteProductA : public Product
{
public:
    virtual void Show()
    {
      cout&lt;&lt;"ConcreteProductA"&lt;
    }
};

class ConcreteProductB : public Product
{
public:
    virtual void Show()
    {
      cout&lt;&lt;"ConcreteProductB"&lt;
    }
};

class Creator
{
public:
    virtual Product\* FactoryMethod() = 0;
};

class ConcreteCreatorA : public Creator
{
public:
    ConcreteCreatorA() {}
    virtual Product\* FactoryMethod()
    {
      return new ConcreteProductA();
    }
};

class ConcreteCreatorB : public Creator
{
public:
    virtual Product\* FactoryMethod()
    {
      return new ConcreteProductB();
    }
};

void main()
{
  Creator\* creators\[2\];

  creators\[0\] =  new ConcreteCreatorA();
  creators\[1\] =  new ConcreteCreatorB();

  for (int i=0; i &lt; 2; i++)    {     Product\* product = creators\[i\]-&gt;FactoryMethod();
    cout&lt;&lt;"Created "&lt;Show();
  }

  getchar();
}

/\*
OUT PUT
-------
Created
ConcreteProductA
Created
ConcreteProductB
\*/
```
