---
sidebar_position: 2
title: Basics
---

## Table of Contents

<!--markdownlint-disable MD036 MD024-->

| No. | Topic                       |
|-----|-----------------------------|
|1| [Definition](#definition)           |
|2| [Comments](#comments)           |

---

## **Definition**

## **C++**

### What is C++?

C++ is a powerful, general-purpose programming language that supports both **procedural** and
**object-oriented** programming. It is widely used for system/software development, game development,
real-time simulations, and performance-critical applications. It is an extension of the C
programming language with added features like classes and objects.

---

### Syntax Rules

- Statements end with a **semicolon (`;`)**
- Code blocks are enclosed using **curly braces `{ }`**
- C++ is a **case-sensitive** language
- Every C++ program starts execution from the `main()` function
- Use `#include` directives to include standard libraries

---

### Example

```cpp
#include <iostream>  // Preprocessor directive to include input-output stream

int main() {
    std::cout << "Hello, C++";  // Output statement
    return 0;  // Return 0 indicates successful execution
}
```

---

## **C#**

### What is C#?

C# (pronounced "C-Sharp") is a modern, object-oriented programming language developed by Microsoft.
It is mainly used for building desktop applications, web apps, and games (especially using Unity).
It runs on the .NET framework.

### Syntax Rules

- Statements end with a semicolon `;`
- Code is grouped using curly braces `{ }`
- Case-sensitive language
- Programs start from the `Main()` method

### Example

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, C#");
    }
}
```

---

## **Java**

### What is Java?

Java is a widely-used, platform-independent, object-oriented programming language developed by Sun
Microsystems (now owned by Oracle). It's used for web, mobile, desktop, and enterprise applications.

### Syntax Rules

- Code must be inside a class
- Main method: `public static void main(String[] args)`
- Uses semicolons `;` and curly braces `{ }`
- Case-sensitive

### Example

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java");
    }
}
```

---

## **Python**

### What is Python?

Python is a high-level, interpreted language known for its simple and readable syntax. It is widely
used for web development, data science, automation, AI, and more.

### Syntax Rules

- No need for semicolons or braces
- Indentation defines code blocks
- Case-sensitive
- Code runs from top to bottom

### Example

```python
def main():
    print("Hello, Python")

main()
```

---

## **JavaScript**

### What is JavaScript?

JavaScript is a lightweight, interpreted scripting language mainly used to add interactive behavior
to websites. It runs in web browsers and is essential for front-end web development.

### Syntax Rules

- Semicolons are optional but recommended
- Code blocks use `{ }`
- Case-sensitive
- Functions can be declared with `function` keyword

### Example

```javascript
function greet() {
    console.log("Hello, JavaScript");
}

greet();
```

---

## **TypeScript**

### What is typeScript?

**TypeScript** is a superset of JavaScript that adds **static typing** and **modern features** to
help catch errors during development and build more robust applications. It compiles to plain
JavaScript to run anywhere.

### Syntax Rules

### Example

```typescript
console.log("Hello, TypeScript");
```

```typescript
let age: number = 25;
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

---

[Back to Top](#table-of-contents)

## **Comments**

### Definition

**Comments** are lines in the code that are not executed. They are used to explain what the code
does, make notes for yourself or other developers, and temporarily disable code during testing.
Comments help make code more understandable.

---

## **C++ Comments**

### Syntax

- **Single-line comment**: `//`
- **Multi-line comment**: `/* comment */`

---

### Example

```cpp
#include <iostream>

int main() {
    // This is a single-line comment
    std::cout << "Hello, C++"; // This prints a message

    /*
     This is a multi-line comment
     It can span multiple lines
    */

    return 0;
}
```

---

## **C#* Comments*

### Syntax

- **Single-line comment:** `//`
- **Multi-line comment:** `/* comment */`

### Example

```csharp
using System;

class Program
{
    static void Main()
    {
        // This is a single-line comment
        Console.WriteLine("Hello, C#"); // This prints a message

        /*
         This is a multi-line comment
         It can span multiple lines
        */
    }
}
```

---

## **Java Comments**

### Syntax

- **Single-line comment:** `//`
- **Multi-line comment:** `/* comment */`

### Example

```java
public class Main {
    public static void main(String[] args) {
        // Print a message to the screen
        System.out.println("Hello, Java");

        /*
         Multi-line comment example
         Can be used for explaining blocks of code
        */
    }
}
```

---

## **Python Comments**

### Syntax

- **Single-line comment:** `#`
- **Multi-line comment (technically):** Triple quotes (`'''` or `"""`), usually used for
docstrings but sometimes used for block comments

### Example

```python
# This is a single-line comment
print("Hello, Python")  # This prints a message

'''
This is a multi-line comment,
though it's technically a string not assigned to anything.
'''
```

---

## **JavaScript Comments**

### Syntax

- **Single-line comment:** `//`
- **Multi-line comment:** `/* comment */`

### Example

```javascript
// This is a single-line comment
console.log("Hello, JavaScript"); // Prints message

/*
This is a multi-line comment.
Useful for larger explanations.
*/
```

---

## **Typescript Comments**

### Syntax

- **Single-line comment:** `//`
- **Multi-line comment:** `/* comment */`

### Example

```typescript
// This is a single-line comment
console.log("Hello, TypeScript"); // This prints a message

/*
 This is a multi-line comment
 It can span multiple lines
*/

```

---

[Back to Top](#table-of-contents)
