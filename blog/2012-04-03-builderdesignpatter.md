---
title: "'Builder' Design Pattern using simple program"
date: "2012-04-03"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "cpp"
  - "design-patterns"
---

**Definition:**

Separate the construction of a complex object from its representation so that the same construction process can create different representations.

**Program:**

```c
#include "iostream"
using namespace std;

// Builder pattern -- Creational example
class Product
{
private:
    char\* \_parts\[10\];
    int i;

public:
    Product()
    {
      i = 0;
    }

    void Add(char\* part)
    {
      \_parts\[i\] = part;
      i++;
    }

    void Show()
    {
        cout&lt;
      for(int j = 0; j    {
         cout&lt;&lt;\_parts\[j\]&lt;BuildPartA();
      builder-&gt;BuildPartB();
    }
};

class ConcreteBuilder1 : public Builder
{
    private:
      Product \_product;

    public:
    virtual void BuildPartA()
    {
      \_product.Add("PartA");
    }

    virtual void BuildPartB()
    {
      \_product.Add("PartB");
    }

    virtual Product GetResult()
    {
      return \_product;
    }
};

class ConcreteBuilder2 : public Builder
{
    private:
      Product \_product;

    public:
    virtual void BuildPartA()
    {
      \_product.Add("PartX");
    }

    virtual void BuildPartB()
    {
      \_product.Add("PartY");
    }

    virtual Product GetResult()
    {
      return \_product;
    }
};

void main()
{
  // Create director and builders
  Director director;

  ConcreteBuilder1 b1;
  ConcreteBuilder2 b2;

  Product p1;
  Product p2;

  // Construct product p1
  director.Construct(&amp;b1);
  p1 = b1.GetResult();
  p1.Show();

  // Construct product p2
  director.Construct(&amp;b2);
  p2 = b2.GetResult();
  p2.Show();

  getchar();
}

/\*
OUT PUT

Product Parts:
PartA
PartB

Product Parts:
PartX
PartY
\*/
```
