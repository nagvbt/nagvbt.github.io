---
title: "‘AbstractFactory’ Design Pattern using simple program"
date: "2012-04-04"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "cpp"
  - "Design Patterns"
---

**Definition:** Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

**Program:**

```c

#include "iostream"
using namespace std;

// Abstract Factory pattern
class AbstractProductA
{
public:
  virtual void Show() = 0;
};

class AbstractProductB
{
public:
  virtual void Show() = 0;
};

class AbstractFactory
{
public:
 virtual AbstractProductA\* CreateProductA() = 0;
 virtual AbstractProductB\* CreateProductB() = 0;
};

class ProductA1 : public AbstractProductA
{
public:
  virtual void Show()
  {
    cout&amp;lt;&amp;lt;"\[ProductA1\] Show"&amp;lt;
  }
};

class ProductB1 : public AbstractProductB
{
public:
  virtual void Show()
  {
    cout&amp;lt;&amp;lt;"\[ProductB1\] Show"&amp;lt;
  }
};

class ProductA2 : public AbstractProductA
{
public:
  virtual void Show()
  {
    cout&amp;lt;&amp;lt;"\[ProductA2\] Show"&amp;lt;
  }
};

class ProductB2 : public AbstractProductB
{
public:
  virtual void Show()
  {
    cout&amp;lt;&amp;lt;"\[ProductB2\] Show"&amp;lt;
  }
};

class ConcreteFactory1 : public AbstractFactory
{
public:
    virtual AbstractProductA\* CreateProductA()
    {
      return new ProductA1();
    }

    virtual AbstractProductB\* CreateProductB()
    {
      return new ProductB1();
    }
};

class ConcreteFactory2 : public AbstractFactory
{
public:
    virtual AbstractProductA\* CreateProductA()
    {
      return new ProductA2();
    }

    virtual AbstractProductB\* CreateProductB()
    {
      return new ProductB2();
    }
};

class Client
{
private:
  AbstractProductA\* \_abstractProductA;
  AbstractProductB\* \_abstractProductB;

public:
    Client(AbstractFactory\* factory)
    {
      \_abstractProductB = factory-&amp;gt;CreateProductB();
      \_abstractProductA = factory-&amp;gt;CreateProductA();
    }

    void Run()
    {
      \_abstractProductA-&amp;gt;Show();
      \_abstractProductB-&amp;gt;Show();

      delete \_abstractProductA;
      delete \_abstractProductB;
    }
};

void main()
{
  // Abstract factory #1
  AbstractFactory\* factory1 = new ConcreteFactory1();
  Client\* client1 = new Client(factory1);
  client1-&amp;gt;Run();

  delete factory1;
  delete client1;

  // Abstract factory #2
  AbstractFactory\* factory2 = new ConcreteFactory2();
  Client\* client2 = new Client(factory2);
  client2-&amp;gt;Run();

  delete factory2;
  delete client2;

  getchar();
}

/\*
OUT PUT
-------
\[ProductA1\] Show
\[ProductB1\] Show
\[ProductA2\] Show
\[ProductB2\] Show
\*/

```
