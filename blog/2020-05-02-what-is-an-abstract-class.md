---
title: "What is an Abstract Class ?"
date: "2020-05-02"
categories: 
  - "csharp"
  - "c-cpp-mfc-vcpp"
tags: 
  - "c-faq"
  - "c"
authors: nagvbt
---

Abstract classes are used for providing an abstraction to the code to make it reusable and extendable.

**Abstract class in C++:** It is a class that has at least one pure virtual function (i.e., a function that has no definition). The classes inheriting the abstract class must provide a definition for the pure virtual function.

Sample
```cpp
#include "iostream"
using namespace std;
class AbstractCls
{
public:
      virtual int Add(int a, int b) = 0;
      
      int Sub(int a, int b)
      {
            return (a-b);
      }
};

class Math : public AbstractCls
{
public:
      int Add(int a, int b)
      {
        return (a+b);
      }
};
int main()
{
      cout<<"Math Class"<<"\\n";
      Math obj;
      cout<<obj.Add(2, 3)<<"\\n";
      cout<<obj.Sub(5, 3)<<"\\n";
      return 0;
}
//OUTPUT
//Math Class
//5
//2
```

**Abstract class in C#:** The abstract modifier is used before the class or method/indexers/events and properties to declare them as abstract.

Sample
```cpp
using System;

namespace Samples
{

  public abstract class AbstractCls
  {
    public abstract int Add(int a, int b);

    public int Sub(int a, int b)
    {
      return (a - b);
    }
  }

  public class Math : AbstractCls
  {
    public override int Add(int a, int b)
    {
      return (a + b);
    }
  }

  class Program
  {
    static void Main(string\[\] args)
    {
      Console.WriteLine("Math Class");
      Math obj = new Math();
      Console.WriteLine(obj.Add(2, 3));
      Console.WriteLine(obj.Sub(5, 3));
    }
  }
}
//OUTPUT
//Math Class
//5
//2
```