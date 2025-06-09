---
sidebar_position: 5
---

# User Input

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD056-->

## Table of Contents

| No. | Topic                                                                        |
|-----|-------------------------------------------                                   |
|6| [User Input](#user-input)                                                        |

---

### **Definition :**

**User input** refers to the data that a user enters into a program, typically through the keyboard.
This data can then be processed and used by the program. Most languages provide functions or methods
to read this input.

---

## **C++**

### **Syntax for User Input:**

In C++, the `std::cin` object is used to read user input from the console.

- Input is stored directly into a variable using the extraction operator `>>`.
- For full-line input, `std::getline()` can be used (especially for strings with spaces).

---

### Example

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;
    int age;

    // Ask the user for their name
    std::cout << "Enter your name: ";
    std::getline(std::cin, name);  // Read user input as a full line

    // Ask the user for their age
    std::cout << "Enter your age: ";
    std::cin >> age;  // Read user input as an integer

    // Display a message using the user's input
    std::cout << "Hello " << name << ", you are " << age << " years old." << std::endl;

    return 0;
}
```

```text
 NOTE : Use std::getline() for reading strings with spaces. If mixing std::cin and std::getline(),
 be careful of leftover newline characters in the input buffer.
```

---

## **C#**

### **Syntax for User Input:**

In C#, the `Console.ReadLine()` method is used to read user input as a string.

* To convert the input to other types, use methods like `int.Parse()`, `Convert.ToInt32()`, etc.

### Example

```csharp
using System;

class Program
{
    static void Main()
    {
        // Ask the user for their name
        Console.Write("Enter your name: ");
        string name = Console.ReadLine();  // Read user input as a string

        // Ask the user for their age
        Console.Write("Enter your age: ");
        int age = int.Parse(Console.ReadLine());  // Convert the input to an integer

        // Display a message using the user's input
        Console.WriteLine($"Hello {name}, you are {age} years old.");
    }
}
```

---

## **Java**

### **Syntax for User Input:**

In Java, you typically use the `Scanner` class to take user input. You must import `java.util.Scanner`.

### Example

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Create a Scanner object to read user input
        Scanner scanner = new Scanner(System.in);

        // Ask the user for their name
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();  // Read the user's name

        // Ask the user for their age
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();  // Read the user's age

        // Display the message using the input
        System.out.println("Hello " + name + ", you are " + age + " years old.");
        
        // Close the scanner to prevent resource leaks
        scanner.close();
    }
}
```

---

## **Python**

### **Syntax for User Input:**

In Python, the `input()` function is used to get user input. By default, the `input()` function
returns the input as a string. You can convert it to other types using `int()`, `float()`, etc.

### Example

```python
# Ask the user for their name
name = input("Enter your name: ")

# Ask the user for their age
age = int(input("Enter your age: "))  # Convert input to integer

# Display the message using the user's input
print(f"Hello {name}, you are {age} years old.")
```

---

## **JavaScript**

### **Syntax for User Input:**

In JavaScript, the `prompt()` method is commonly used in browsers to take user input, returning the
input as a string.

### Example

```javascript
// Ask the user for their name
let name = prompt("Enter your name:");

// Ask the user for their age
let age = parseInt(prompt("Enter your age:"));  // Convert input to integer

// Display the message using the user's input
alert("Hello " + name + ", you are " + age + " years old.");
```

---

## **TypeScript**

### **Syntax for User Input:**

TypeScript **does not directly support user input** like `prompt()` in browser-based JS or `readline`
in Node.js.

**Alternative (in Node.js):**

### Example

```typescript
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  console.log(`Hello, ${name}`);
  rl.close();
});
```

---

[Back to Top](#table-of-contents)
