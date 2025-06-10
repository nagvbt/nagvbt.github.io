---
tags: ["CSharp", "Design Patterns"]
---

# Design Pattern: C# Singleton

```cpp
using System;

namespace CSharp { 
  //Singleton: Ensure a class only has one instance, 
  //and provide a global point of access to it. 
  class Singleton { 
    //Member Variable 
    private static Singleton instance = null;
    
    //Member Functions
    private Singleton()
    {
    }

    public static Singleton Instance()
    {
        if(instance == null )
        {
          instance = new Singleton ();
        }

        return instance;
    }

    public void print()
    {
      Console.WriteLine("Singleton Class" );
    }

};

class Program { 

  static void Main(string[] args) {
     Singleton n = Singleton .Instance(); 
     n.print();
     Singleton p = Singleton .Instance();
     p.print();
  }

 } 

}

```
