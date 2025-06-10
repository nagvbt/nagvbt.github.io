---
sidebar_position: 17
---

# Exceptions

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 MD013-->

Handling **exceptions** is essential for building robust programs. Exceptions represent unexpected
situations or errors that occur during the execution of a program. Instead of crashing, programs
can catch these exceptions and respond gracefully.

## Common Example:

**Attempt to divide a number by zero and handle the exception.**

---

## C#

### Definition:

In C#, exceptions are managed using the `try`, `catch`, and optionally `finally` blocks. When an
error occurs inside the `try` block, control jumps to the matching `catch` block.

### Syntax:

```csharp
try {
    // Code that may throw an exception
} catch (ExceptionType e) {
    // Handle exception
} finally {
    // Code that always executes (optional)
}
```

### Example:

```csharp
using System;

class Program {
    static void Main() {
        try {
            int result = 10 / 0;
            Console.WriteLine(result);
        } catch (DivideByZeroException e) {
            Console.WriteLine("Error: Division by zero is not allowed.");
        }
    }
}
```

---

## Java

### Definition:

Java uses `try`, `catch`, and `finally` blocks for exception handling. Exceptions can be checked or unchecked, and developers must handle checked exceptions explicitly.

### Syntax:

```java
try {
    // Risky code
} catch (ExceptionType e) {
    // Handle the exception
} finally {
    // Optional cleanup code
}
```

### Example:

```java
public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero is not allowed.");
        }
    }
}
```

---

## Python

### Definition:

Python uses `try`, `except`, and optionally `finally` blocks to catch and handle exceptions. Python exceptions are dynamically typed and easy to use.

### Syntax:

```python
try:
    # Code that may cause an error
except ExceptionType as e:
    # Handle the error
finally:
    # Optional cleanup
```

### Example:

```python
try:
    result = 10 / 0
    print(result)
except ZeroDivisionError as e:
    print("Error: Division by zero is not allowed.")
```

---

## JavaScript

### Definition:

JavaScript handles exceptions using `try`, `catch`, and `finally` blocks. Exceptions can be any value, but typically they are `Error` objects.

### Syntax:

```javascript
try {
    // Code that may throw an error
} catch (e) {
    // Handle the error
} finally {
    // Optional cleanup code
}
```

### Example:

```javascript
try {
    let result = 10 / 0;
    if (!isFinite(result)) throw new Error("Division by zero");
    console.log(result);
} catch (e) {
    console.log("Error: Division by zero is not allowed.");
}
```

---

## C++

## **Definition**

**Exception handling** in C++ is a mechanism to handle **runtime errors** or **unexpected events** that may disrupt program execution. It allows separating **error handling** code from **regular code** using three keywords:

* `try` – defines a block of code to monitor for exceptions
* `throw` – signals the occurrence of an exception
* `catch` – defines a block of code to handle the exception

This helps write robust, maintainable, and safe applications.

---

## **Syntax**

```cpp
try {
    // Code that might throw an exception
    if (someErrorCondition) {
        throw exceptionType;
    }
}
catch (exceptionType variableName) {
    // Code to handle the exception
}
```

**You can also use the standard exception class:**

```cpp
#include <stdexcept>

try {
    throw std::runtime_error("Something went wrong");
}
catch (std::exception& e) {
    std::cout << e.what();
}
```

---

## **Example**

```cpp
#include <iostream>
using namespace std;

int divide(int a, int b) {
    if (b == 0) {
        throw "Division by zero error!";
    }
    return a / b;
}

int main() {
    int x = 10, y = 0;

    try {
        int result = divide(x, y);
        cout << "Result: " << result << endl;
    } catch (const char* msg) {
        cout << "Exception caught: " << msg << endl;
    }

    return 0;
}
```

---

## TypeScript

### Definition:

TypeScript handles exceptions similarly to JavaScript using `try`, `catch`, and `finally` blocks. Since TypeScript is a superset of JavaScript, it uses the same syntax and behavior for exceptions, but you can also specify error types if needed.

### Syntax:

```typescript
try {
    // Code that may throw an error
} catch (e: unknown) {
    // Handle the error with proper type checking
} finally {
    // Optional cleanup code
}
```

```typescript
try {
    let result = 10 / 0;
    if (!isFinite(result)) throw new Error("Division by zero");
    console.log(result);
} catch (e: unknown) {
    if (e instanceof Error) {
        console.log("Error:", e.message);
    } else {
        console.log("Unknown error");
    }
}

```

---
[Back to top](#list-of-topics)
