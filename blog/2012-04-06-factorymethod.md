---
tags: ["C++", "Design Patterns"]
---
# 'Factory Method' Design Pattern using simple program

**Definition:**

Creates an instance of several derived classes. or Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

**Program:**

```cpp
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
      cout<<"ConcreteProductA"<<endl;
    }
};

class ConcreteProductB : public Product
{
public:
    virtual void Show()
    {
      cout<<"ConcreteProductB"<<endl;
    }
};

class Creator
{
public:
    virtual Product* FactoryMethod() = 0;
};

class ConcreteCreatorA : public Creator
{
public:
    ConcreteCreatorA() {}
    virtual Product* FactoryMethod()
    {
      return new ConcreteProductA();
    }
};

class ConcreteCreatorB : public Creator
{
public:
    virtual Product* FactoryMethod()
    {
      return new ConcreteProductB();
    }
};

void main()
{
  Creator* creators[2];

  creators[0] =  new ConcreteCreatorA();
  creators[1] =  new ConcreteCreatorB();

  for (int i=0; i < 2; i++)    {     Product* product = creators[i]->FactoryMethod();
    cout<<"Created "<<Show();
  }

  getchar();
}

/*
OUT PUT
-------
Created
ConcreteProductA
Created
ConcreteProductB
*/
```
