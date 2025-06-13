---
sidebar_position: 6
---

# Math and Strings

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD056 MD013-->

## Table of Contents

| No. | Topic                                                                        |
|-----|-------------------------------------------                                   |
|1| [Math](#math)                                                                    |
|2| [Strings](#strings)                                                              |

## **Math**

---

### Definition :

In programming, **math** refers to performing mathematical operations like addition, subtraction,
multiplication, division, and using built-in functions to work with numbers (like finding square
roots, powers, etc.). Each language provides a set of math functions to make calculations easier.

---

## **C++**

### Syntax:

- Basic operators: `+`, `-`, `*`, `/`, `%`
- Advanced functions via the `<cmath>` library:
  `sqrt()`, `pow()`, `abs()`, `fmax()`, `fmin()`

> **Note**: For `abs()`, use `<cstdlib>` for integers and `<cmath>` for floating-point numbers.

---

### Example

```cpp
#include <iostream>
#include <cmath>    // For sqrt, pow, fmax
#include <cstdlib>  // For abs

int main() {
    int a = 10;
    int b = 3;

    // Basic operations
    std::cout << "Addition: " << (a + b) << std::endl;
    std::cout << "Division: " << (a / b) << std::endl;

    // Math functions
    std::cout << "Square Root of 25: " << sqrt(25) << std::endl;
    std::cout << "2 to the power of 3: " << pow(2, 3) << std::endl;
    std::cout << "Maximum of a and b: " << fmax(a, b) << std::endl;

    return 0;
}
```

---

## **C#**

### Syntax:

* Basic operators: `+`, `-`, `*`, `/`, `%`
* Advanced functions via `Math` class:
  `Math.Sqrt()`, `Math.Pow()`, `Math.Abs()`, `Math.Max()`, `Math.Min()`

### Example

```csharp
using System;

class Program
{
    static void Main()
    {
        int a = 10;
        int b = 3;

        // Basic operations
        Console.WriteLine("Addition: " + (a + b));
        Console.WriteLine("Division: " + (a / b));

        // Math class functions
        Console.WriteLine("Square Root of 25: " + Math.Sqrt(25));
        Console.WriteLine("2 to the power of 3: " + Math.Pow(2, 3));
        Console.WriteLine("Maximum of a and b: " + Math.Max(a, b));
    }
}
```

---

## **Java**

### Syntax:

* Basic operators: `+`, `-`, `*`, `/`, `%`
* Use `Math` class for advanced operations:
  `Math.sqrt()`, `Math.pow()`, `Math.abs()`, `Math.max()`, `Math.min()`

### Example

```java
public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;

        // Basic operations
        System.out.println("Addition: " + (a + b));
        System.out.println("Division: " + (a / b));

        // Math class functions
        System.out.println("Square Root of 25: " + Math.sqrt(25));
        System.out.println("2 to the power of 3: " + Math.pow(2, 3));
        System.out.println("Maximum of a and b: " + Math.max(a, b));
    }
}
```

---

## **Python**

### Syntax:

* Basic operators: `+`, `-`, `*`, `/`, `%`
* Use `math` module for advanced operations:
  `math.sqrt()`, `math.pow()`, `math.fabs()`, `max()`, `min()`

### Example

```python
import math  # Import math module for advanced functions

a = 10
b = 3

# Basic operations
print("Addition:", a + b)
print("Division:", a / b)

# Math functions
print("Square Root of 25:", math.sqrt(25))
print("2 to the power of 3:", math.pow(2, 3))
print("Maximum of a and b:", max(a, b))
```

---

## **JavaScript**

### Syntax:

* Basic operators: `+`, `-`, `*`, `/`, `%`
* Use `Math` object for advanced operations:
  `Math.sqrt()`, `Math.pow()`, `Math.abs()`, `Math.max()`, `Math.min()`

### Example

```javascript
let a = 10;
let b = 3;

// Basic operations
console.log("Addition:", a + b);
console.log("Division:", a / b);

// Math object functions
console.log("Square Root of 25:", Math.sqrt(25));
console.log("2 to the power of 3:", Math.pow(2, 3));
console.log("Maximum of a and b:", Math.max(a, b));
```

---

## **TypeScript**

### Syntax:

* Basic operators: `+`, `-`, `*`, `/`, `%`
* Use `Math` object for advanced operations:
  `Math.sqrt()`, `Math.pow()`, `Math.abs()`, `Math.max()`, `Math.min()`

### Example

```typescript
let a: number = 10;
let b: number = 3;

// Basic operations
console.log("Addition:", a + b);
console.log("Division:", a / b);

// Math functions
console.log("Square Root of 25:", Math.sqrt(25));
console.log("2 to the power of 3:", Math.pow(2, 3));
console.log("Maximum of a and b:", Math.max(a, b));
```

---

### Summary Table

| Language       | Math Library/Feature | Square Root     | Power            | Max Value        |
| -------------- | -------------------- | --------------- | ---------------- | ---------------- |
| **C++**        | `<cmath>`            | `sqrt(25)`      | `pow(2, 3)`      | `std::max(a, b)` |
| **C#**         | `Math`               | `Math.Sqrt(25)` | `Math.Pow(2, 3)` | `Math.Max(a, b)` |
| **Java**       | `Math`               | `Math.sqrt(25)` | `Math.pow(2, 3)` | `Math.max(a, b)` |
| **Python**     | `math` module        | `math.sqrt(25)` | `math.pow(2, 3)` | `max(a, b)`      |
| **JavaScript** | `Math`               | `Math.sqrt(25)` | `Math.pow(2, 3)` | `Math.max(a, b)` |
| **TypeScript** | `Math`               | `Math.sqrt(25)` | `Math.pow(2, 3)` | `Math.max(a, b)` |

---

[Back to Top](#table-of-contents)

## **Strings**

---

### Definition (in simple words):

A **string** is a sequence of characters enclosed in quotes. It is used to store and work with text
like names, sentences, or any kind of word-based data.

---

## **C++**

### Syntax:

- Declare using `std::string` type (from the `<string>` library)
- Use double quotes `"` to define a string

> **Note**: Always include the `#include <string>` header when using `std::string`.

---

### Example

```cpp
#include <iostream>
#include <string>

int main() {
    // Declaring a string
    std::string name = "Alice";

    // String operations
    std::cout << "Name: " << name << std::endl;                          // Concatenation
    std::cout << "Length: " << name.length() << std::endl;              // Length of string
    std::cout << "Uppercase: "; 
    for (char c : name) std::cout << (char)toupper(c);                  // Convert to uppercase
    std::cout << std::endl;
    std::cout << "First letter: " << name[0] << std::endl;              // Access character by index

    return 0;
}
```

---

## **C#**

### Syntax:

* Declare using `string` type
* Use double quotes `"` to define a string

### Example

```csharp
using System;

class Program
{
    static void Main()
    {
        // Declaring a string
        string name = "Alice";

        // String operations
        Console.WriteLine("Name: " + name);                      // Concatenation
        Console.WriteLine("Length: " + name.Length);            // Length of string
        Console.WriteLine("Uppercase: " + name.ToUpper());      // Convert to uppercase
        Console.WriteLine("First letter: " + name[0]);          // Access character by index
    }
}
```

---

## **Java**

### Syntax:

* Use `String` class
* Strings are enclosed in double quotes `"..."`

### Example

```java
public class Main {
    public static void main(String[] args) {
        // Declaring a string
        String name = "Alice";

        // String operations
        System.out.println("Name: " + name);                       // Concatenation
        System.out.println("Length: " + name.length());            // Length of string
        System.out.println("Uppercase: " + name.toUpperCase());    // Convert to uppercase
        System.out.println("First letter: " + name.charAt(0));     // Access character
    }
}
```

---

## **Python**

### Syntax:

* Strings are defined using either single `' '` or double quotes `" "`
* Strings are objects, so they have built-in methods

### Example

```python
name = "Alice"  # Declaring a string

# String operations
print("Name:", name)                    # Print the string
print("Length:", len(name))             # Length of the string
print("Uppercase:", name.upper())       # Convert to uppercase
print("First letter:", name[0])         # Access character by index
```

---

## **JavaScript**

### Syntax:

* Use `let`, `var`, or `const` to define a string
* Strings can be written with `' '`, `" "`, or backticks `` ` ` ``

### Example

```javascript
let name = "Alice";  // Declaring a string

// String operations
console.log("Name:", name);                 // Output the string
console.log("Length:", name.length);        // Length of the string
console.log("Uppercase:", name.toUpperCase()); // Convert to uppercase
console.log("First letter:", name[0]);      // Access first character
```

---

## **TypeScript**

### Syntax:

* Use `string` type to declare strings.
* Enclose string values in double (`"`) or single (`'`) quotes.
* Built-in methods like `.length`, `.toUpperCase()`, `.charAt()`, etc., are available.

---

### Example

```typescript
// Declaring a string
let name: string = "Alice";

// String operations
console.log("Name:", name);                               // Output the string
console.log("Length:", name.length);                      // Length of string
console.log("Uppercase:", name.toUpperCase());            // Convert to uppercase
console.log("First letter:", name.charAt(0));             // Access character by index
```

---

### Common String Operations Across Languages

| Operation             | C++                              | C#               | Java                 | Python         | JavaScript           | TypeScript           |
| --------------------- | -------------------------------- | ---------------- | -------------------- | -------------- | -------------------- | -------------------- |
| **Length**            | `name.length()` or `name.size()` | `name.Length`    | `name.length()`      | `len(name)`    | `name.length`        | `name.length`        |
| **Uppercase**         | `toupper(c)` (char by char)      | `name.ToUpper()` | `name.toUpperCase()` | `name.upper()` | `name.toUpperCase()` | `name.toUpperCase()` |
| **Access first char** | `name[0]`                        | `name[0]`        | `name.charAt(0)`     | `name[0]`      | `name[0]`            | `name[0]`            |

---

> 💡 In C++, strings don’t have a built-in `.toUpperCase()` — you need to loop through each character and convert with `toupper(char)`.

[Back to Top](#table-of-contents)
