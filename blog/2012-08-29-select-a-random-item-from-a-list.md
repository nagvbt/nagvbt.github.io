---
tags: ["CSharp"]
---

# C#: How to Select a random item from a List

```cpp
using System; 
using System.Collections.Generic; 
namespace RandomSelect { 
  class Program { 
    static List lst = new List(); 
    static void Main(string[] args) { 
      lst.Add("1"); 
      lst.Add("2"); 
      lst.Add("3"); 
      lst.Add("4"); 
      lst.Add("5"); 
      lst.Add("6"); 
      lst.Add("7"); 
      lst.Add("8"); 
      lst.Add("9"); 
      lst.Add("10"); 
      Random rndElement = new Random(); 
      foreach (string i in lst) { 
        string s = lst[rndElement.Next(lst.Count)];
         Console.WriteLine(s); 
        } 
    }
  }
} 
```
