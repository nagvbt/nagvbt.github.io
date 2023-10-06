---
tags: ["C++", "Design Patterns"]
---

# ‘AbstractFactory’ Design Pattern using simple program

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->

**Definition:** Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

**Program:**

```cpp

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
 virtual AbstractProductA* CreateProductA() = 0;
 virtual AbstractProductB* CreateProductB() = 0;
};

class ProductA1 : public AbstractProductA
{
public:
  virtual void Show()
  {
    cout<<"ProductA1 Show"<<endl;>
  }
};

class ProductB1 : public AbstractProductB
{
public:
  virtual void Show()
  {
    cout<<"ProductB1 Show"<<endl;>
  }
};

class ProductA2 : public AbstractProductA
{
public:
  virtual void Show()
  {
    cout<<"ProductA2 Show"<<endl;
  }
};

class ProductB2 : public AbstractProductB
{
public:
  virtual void Show()
  {
    cout<<"ProductB2 Show"<<endl;
  }
};

class ConcreteFactory1 : public AbstractFactory
{
public:
    virtual AbstractProductA* CreateProductA()
    {
      return new ProductA1();
    }

    virtual AbstractProductB* CreateProductB()
    {
      return new ProductB1();
    }
};

class ConcreteFactory2 : public AbstractFactory
{
public:
    virtual AbstractProductA* CreateProductA()
    {
      return new ProductA2();
    }

    virtual AbstractProductB* CreateProductB()
    {
      return new ProductB2();
    }
};

class Client
{
private:
  AbstractProductA* _abstractProductA;
  AbstractProductB* _abstractProductB;

public:
    Client(AbstractFactory\* factory)
    {
      _abstractProductB = factory->CreateProductB();
      _abstractProductA = factory->CreateProductA();
    }

    void Run()
    {
      _abstractProductA->Show();
      _abstractProductB->Show();

      delete _abstractProductA;
      delete _abstractProductB;
    }
};

void main()
{
  // Abstract factory #1
  AbstractFactory* factory1 = new ConcreteFactory1();
  Client* client1 = new Client(factory1);
  client1->Run();

  delete factory1;
  delete client1;

  // Abstract factory #2
  AbstractFactory* factory2 = new ConcreteFactory2();
  Client* client2 = new Client(factory2);
  client2->Run();

  delete factory2;
  delete client2;

  getchar();
}

/*
OUT PUT
-------
\[ProductA1\] Show
\[ProductB1\] Show
\[ProductA2\] Show
\[ProductB2\] Show
\*/

```
