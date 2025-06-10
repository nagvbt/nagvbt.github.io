---
sidebar_position: 8
---

# Methods and Overloading

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 -->

## Table of Contents

| No. | Topic                                                                        |
|-----|-------------------------------------------                                   |
|12| [Methods](#methods)                                                             |
|13| [Method Overloading](#method-overloading)                                       |

## **Methods**

---

### **Definition (in simple words):**

A **method** (or function) is a block of code that performs a specific task. Instead of writing the
same code again and again, you write it once as a method and "call" it when needed.

Methods can:

* Take **inputs (parameters)**
* Return **outputs (values)**
* Or simply perform an action

---

## **C#**

### **Syntax:**

```csharp
returnType MethodName(parameterType parameterName)
{
    // code
    return value; // if not void
}
```

### Example

```csharp
using System;

class Program
{
    // Method that adds two numbers and returns result
    static int Add(int a, int b)
    {
        return a + b;
    }

    static void Main()
    {
        int result = Add(5, 3);
        Console.WriteLine("Sum: " + result);  // Output: Sum: 8
    }
}
```

---

## **Java**

### **Syntax:**

```java
returnType methodName(parameterType parameterName) {
    // code
    return value;
}
```

### Example

```java
public class Main {
    // Method to multiply two numbers
    static int multiply(int x, int y) {
        return x * y;
    }

    public static void main(String[] args) {
        int result = multiply(4, 5);
        System.out.println("Product: " + result);  // Output: Product: 20
    }
}
```

---

## **Python**

### **Syntax:**

```python
def function_name(parameter1, parameter2):
    # code
    return value
```

### Example

```python
# Function to divide two numbers
def divide(a, b):
    return a / b

result = divide(10, 2)
print("Result:", result)  # Output: Result: 5.0
```

---

## **JavaScript**

### **Syntax:**

```javascript
function functionName(parameter1, parameter2) {
    // code
    return value;
}
```

### Example

```javascript
// Function to subtract two numbers
function subtract(x, y) {
    return x - y;
}

let result = subtract(10, 4);
console.log("Difference:", result);  // Output: Difference: 6
```

---

## **C++**

### **Syntax:**

```cpp
returnType MethodName(parameterType parameterName) {
    // code
    return value; // if not void
}
````

### Example

```cpp
#include <iostream>
using namespace std;

// Function that adds two numbers and returns the result
int Add(int a, int b) {
    return a + b;
}

int main() {
    int result = Add(5, 3);
    cout << "Sum: " << result << endl;  // Output: Sum: 8
    return 0;
}
```

---

## TypeScript

**Definition:** Functions defined inside a class.

**Syntax:**

```typescript
class Car {
  startEngine(): void {
    console.log("Engine started");
  }
}

const myCar = new Car();
myCar.startEngine();
```

---

### Summary Table

| Language       | Define Method                | Call Method       | Return Value    |
| -------------- | ---------------------------- | ----------------- | --------------- |
| **C#**         | `int Add(int a, int b)`      | `Add(5, 3)`       | `return a + b;` |
| **Java**       | `int multiply(int x, int y)` | `multiply(4, 5)`  | `return x * y;` |
| **Python**     | `def divide(a, b)`           | `divide(10, 2)`   | `return a / b`  |
| **JavaScript** | `function subtract(x, y)`    | `subtract(10, 4)` | `return x - y;` |

---

[Back to Top](#table-of-contents)

# **Method Overloading**

---

### **Definition (in simple words):**

**Method Overloading** means having **multiple methods with the same name** but **different parameters**
 (number or type) in the **same class**.

It allows methods to perform similar tasks in different ways depending on the arguments passed.

> Note: Not all languages support method overloading natively (e.g., Python and JavaScript simulate
it differently).

---

## **C#**

### **Syntax:**

```csharp
class Example {
    void Show() { ... }
    void Show(string name) { ... }
    void Show(int number, string name) { ... }
}
```

### Example

```csharp
class Program {
    static void Show() {
        Console.WriteLine("No parameters");
    }

    static void Show(string name) {
        Console.WriteLine("Name: " + name);
    }

    static void Show(int age, string name) {
        Console.WriteLine("Name: " + name + ", Age: " + age);
    }

    static void Main() {
        Show();                      // Output: No parameters
        Show("Alice");               // Output: Name: Alice
        Show(25, "Bob");             // Output: Name: Bob, Age: 25
    }
}
```

 **Supported?** Yes

---

## **Java**

### **Syntax:**

```java
class Example {
    void display() { ... }
    void display(String name) { ... }
    void display(int age, String name) { ... }
}
```

### Example

```java
public class Main {
    static void display() {
        System.out.println("No parameters");
    }

    static void display(String name) {
        System.out.println("Name: " + name);
    }

    static void display(int age, String name) {
        System.out.println("Name: " + name + ", Age: " + age);
    }

    public static void main(String[] args) {
        display();                         // Output: No parameters
        display("Alice");                  // Output: Name: Alice
        display(30, "Bob");                // Output: Name: Bob, Age: 30
    }
}
```

 **Supported?** Yes

---

## **Python**

**No native method overloading**, but it can be **simulated** using default arguments or variable
arguments (`*args`).

### **Example using default and variable arguments:**

```python
def greet(name=None, age=None):
    if name and age:
        print(f"Name: {name}, Age: {age}")
    elif name:
        print(f"Name: {name}")
    else:
        print("Hello!")

greet()                     # Output: Hello!
greet("Alice")              # Output: Name: Alice
greet("Bob", 25)            # Output: Name: Bob, Age: 25
```

 **Supported?**  Not directly,  Yes via **workarounds**

---

## **JavaScript**

**No method overloading** like in C#/Java. You simulate it using **default parameters** or
**`arguments` object**.

### Example

```javascript
function show(name, age) {
    if (name && age) {
        console.log(`Name: ${name}, Age: ${age}`);
    } else if (name) {
        console.log(`Name: ${name}`);
    } else {
        console.log("No parameters");
    }
}

show();                     // Output: No parameters
show("Alice");              // Output: Name: Alice
show("Bob", 22);            // Output: Name: Bob, Age: 22
```

 **Supported?**  Not directly,  Yes via **flexible parameters**

---

## **C++**

### **Syntax:**

```cpp
class Example {
public:
    void Show();
    void Show(string name);
    void Show(int number, string name);
};
````

### Example

```cpp
#include <iostream>
#include <string>
using namespace std;

class Program {
public:
    static void Show() {
        cout << "No parameters" << endl;
    }

    static void Show(string name) {
        cout << "Name: " << name << endl;
    }

    static void Show(int age, string name) {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

int main() {
    Program::Show();                  // Output: No parameters
    Program::Show("Alice");           // Output: Name: Alice
    Program::Show(25, "Bob");         // Output: Name: Bob, Age: 25
    return 0;
}
```

---

## TypeScript

TypeScript **does not support true method overloading** like Java or C++.

**Alternative (Function Overloads using signatures):**

```typescript
function greet(person: string): string;
function greet(persons: string[]): string;

function greet(person: any): string {
  if (typeof person === "string") {
    return `Hello, ${person}`;
  } else {
    return `Hello, ${person.join(" and ")}`;
  }
}

console.log(greet("Alice"));
console.log(greet(["Alice", "Bob"]));
```

---

### Summary Table

| Feature                  | C#    | Java  | Python          | JavaScript        |
| ------------------------ | ----- | ----- | --------------- | ----------------- |
| Native Overloading       |  Yes |  Yes |  No (simulate) |  No (simulate)   |
| Method Name Reuse        |  Yes | Yes |  Workarounds   | Workarounds     |
| Technique (if no native) | —     | —     | `*args`, `if`   | `arguments`, `if` |

---

[Back to Top](#table-of-contents)
