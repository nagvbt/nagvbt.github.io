---
tags: [CSharp]
---

# Simple Windows Form in C #

Minimal code to write a c# windows form:

```cpp
using System.Windows.Forms;

namespace ConsoleFormApp { 
  class MyWindow : Form { 
    public MyWindow() { 
      this.Text = "First Form"; 
      } 
    }

class Program { 
  static void Main(string\[\] args) { 
    Application.Run(new MyWindow());
    }
  }
} 
```
