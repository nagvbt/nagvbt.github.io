---
sidebar_position: 5
---

# Calculator Program

## Program.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Calculator obj1 = new Calculator();
            int result = obj1.Mul(2, 3);
            
            Console.WriteLine(result);
            Console.ReadLine();
        }
    }
}
```

## Calculator.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    internal class Calculator
    {
        public int Add(int i, int j)
        {
            int result = i + j;
            return result;
        }

        public int Add(int i, int j, int k)
        {
            int result = i + j + k;
            return result;
        }

        public int Sub(int i, int j)
        {
            int result = i - j;
            return result;
        }
    }
    internal class AdvancedCalculator : Calculator
    {
        public int Mul(int i, int j)
        {
            int result = i * j;
            return result;
        }
    }

}
```
