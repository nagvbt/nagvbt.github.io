---
tags: ["C++", "Design Patterns"]
---

# 'Builder' Design Pattern using simple program
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
**Definition:**

Separate the construction of a complex object from its representation so that the same construction process can create different representations.

**Program:**

```cpp
#include "iostream"
using namespace std;

// Builder pattern -- Creational example
class Product
{
private:
    char* _parts[10];
    int i;

public:
    Product()
    {
      i = 0;
    }

    void Add(char* part)
    {
      _parts[i] = part;
      i++;
    }

    void Show()
    {
        cout<
      for(int j = 0; j    {
         cout<<_parts[j]<BuildPartA();
      builder->BuildPartB();
    }
};

class ConcreteBuilder1 : public Builder
{
    private:
      Product _product;

    public:
    virtual void BuildPartA()
    {
      _product.Add("PartA");
    }

    virtual void BuildPartB()
    {
      _product.Add("PartB");
    }

    virtual Product GetResult()
    {
      return _product;
    }
};

class ConcreteBuilder2 : public Builder
{
    private:
      Product _product;

    public:
    virtual void BuildPartA()
    {
      _product.Add("PartX");
    }

    virtual void BuildPartB()
    {
      _product.Add("PartY");
    }

    virtual Product GetResult()
    {
      return _product;
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

/*
OUT PUT

Product Parts:
PartA
PartB

Product Parts:
PartX
PartY
*/
```
