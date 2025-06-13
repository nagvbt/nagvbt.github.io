---
sidebar_position: 4
---

# Type Casting

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD056 MD051-->

## **Definition of Type Casting**

**Type casting** is the process of converting a variable from one data type to another. It is often
required when working with variables that store different types of data (e.g., converting a float
to an integer).

---

## **C++**

### Types of Type Casting:

- **Implicit Casting (Widening)**: Automatically converts smaller types to larger types
(e.g., `int` to `double`).
- **Explicit Casting (Narrowing)**: Manually converts larger types to smaller types
(e.g., `double` to `int`).

---

### Syntax

- **Implicit Casting**: Done automatically by the compiler
- **Explicit Casting**: `(TargetType)variable` or `static_cast<TargetType>(variable)`

---

### Example

```cpp
#include <iostream>

int main() {
    // Implicit casting: int to double
    int myInt = 9;
    double myDouble = myInt; // Automatically done by C++

    std::cout << "Implicit Cast: " << myDouble << std::endl; // 9.0

    // Explicit casting: double to int
    double myNewDouble = 9.78;
    int myNewInt = (int)myNewDouble; // C-style casting
    // Alternatively: int myNewInt = static_cast<int>(myNewDouble);

    std::cout << "Explicit Cast: " << myNewInt << std::endl; // 9 (decimal part is lost)

    return 0;
}
```

---

## **C#**

### Types of Type Casting:

* **Implicit Casting (Widening)**: Automatically converts smaller types to larger types
(e.g., `int` to `double`).
* **Explicit Casting (Narrowing)**: Manually converts larger types to smaller types
(e.g., `double` to `int`).

### Syntax

* **Implicit Casting**: Done automatically by the compiler
* **Explicit Casting**: `(TargetType)variable`

### Example

```csharp
using System;

class Program
{
    static void Main()
    {
        // Implicit casting: int to double (automatically done by C#)
        int myInt = 9;
        double myDouble = myInt; // No need for explicit cast

        Console.WriteLine("Implicit Cast: " + myDouble); // 9.0

        // Explicit casting: double to int (requires explicit cast)
        double myNewDouble = 9.78;
        int myNewInt = (int)myNewDouble; // Manually casting from double to int

        Console.WriteLine("Explicit Cast: " + myNewInt); // 9 (decimal part is lost)
    }
}
```

---

## **Java**

### Types of Type Casting:

* **Implicit Casting (Widening)**: Converts a smaller type to a larger type.
* **Explicit Casting (Narrowing)**: Converts a larger type to a smaller type.

### Syntax

* **Implicit Casting**: Done automatically by Java
* **Explicit Casting**: `(TargetType)variable`

### Example

```java
public class Main {
    public static void main(String[] args) {
        // Implicit casting: int to double (automatic)
        int myInt = 9;
        double myDouble = myInt; // Automatically casted to double

        System.out.println("Implicit Cast: " + myDouble); // 9.0

        // Explicit casting: double to int (requires explicit cast)
        double myNewDouble = 9.78;
        int myNewInt = (int) myNewDouble; // Manual cast from double to int

        System.out.println("Explicit Cast: " + myNewInt); // 9 (decimal part lost)
    }
}
```

---

## **Python**

### Types of Type Casting:

* **Implicit Casting**: Python automatically converts smaller types to larger types when required
(e.g., `int` to `float`).
* **Explicit Casting**: Python provides functions like `int()`, `float()`, `str()` to manually
convert types.

### Syntax

* **Implicit Casting**: Python does it automatically in some cases (e.g., int to float).
* **Explicit Casting**: Use functions like `int()`, `float()`, `str()`.

### Example

```python
# Implicit casting: int to float (Python does this automatically)
my_int = 9
my_float = my_int  # Python converts int to float automatically

print("Implicit Cast:", my_float)  # 9.0

# Explicit casting: float to int (requires manual cast)
my_new_float = 9.78
my_new_int = int(my_new_float)  # Manually cast float to int

print("Explicit Cast:", my_new_int)  # 9 (decimal part lost)
```

---

## **JavaScript**

### Types of Type Casting:

* **Implicit Casting**: JavaScript automatically converts between types when required.
* **Explicit Casting**: Developers use functions like `Number()`, `String()`, `Boolean()` to manually
convert types.

### Syntax

* **Implicit Casting**: Automatically done by JavaScript (e.g., `string` to `number`).
* **Explicit Casting**: Use `Number()`, `String()`, `Boolean()`.

### Example

```javascript
// Implicit casting: string to number (JavaScript does this automatically)
let myString = "9";
let myNumber = +myString;  // The '+' operator implicitly converts string to number

console.log("Implicit Cast:", myNumber);  // 9

// Explicit casting: number to string (manual cast)
let myNewNumber = 9.78;
let myNewString = myNewNumber.toString();  // Manually converting number to string

console.log("Explicit Cast:", myNewString);  // "9.78"
```

---

## **TypeScript**

### Types of Type Casting:

* **Type Assertion (Explicit Casting):** TypeScript allows casting between types using
**angle brackets** or **`as` keyword**.
* **Type Inference:** TypeScript infers types automatically, but doesn’t perform implicit type
conversions like JavaScript.

### Syntax

* Type Assertion (Explicit):

```ts
  let someValue: any = "hello";
  let strLength: number = (<string>someValue).length;
  // or using 'as'
  let strLengthAlt: number = (someValue as string).length;
```

### Example

```typescript
// Implicit casting doesn't exist the same way in TypeScript; number is a single type for all numbers

let myInt: number = 9;
let myDouble: number = myInt; // Same type, so no cast needed

console.log("Implicit Cast:", myDouble); // 9

// Explicit casting (type assertions) are for types, not number conversions, so use Math.floor or similar:

let myNewDouble: number = 9.78;
let myNewInt: number = Math.floor(myNewDouble); // Convert double to int by flooring

console.log("Explicit Cast:", myNewInt); // 9

```

---

[Back to Top](#table-of-contents)
