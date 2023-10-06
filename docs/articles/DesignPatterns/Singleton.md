# Singleton [C#]
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
```cpp
using System;
namespace CSharp
{
  //Singleton: Ensure a class only has one instance,
  //and provide a global point of access to it.
  class Singleton
  {
    //Member Variable
    private static Singleton instance = null;
    //Memeber Functions
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
  class Program
  {
    static void Main(string[] args)
    {
      Singleton n = Singleton .Instance();
      n.print();
      Singleton p = Singleton .Instance();
      p.print();
    }
  }
}

```
