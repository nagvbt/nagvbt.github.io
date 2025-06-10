---
sidebar_position: 16
---

# Enum

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 MD013-->

## Definition

An **enum** (short for enumeration) is a special data type that allows a variable to be one of
a set of predefined named constants. It improves code readability and enforces variable constraints
to a limited set of values.

> Notes:
>
> * In **C#**, **Java**, and **C++**, enums are native language constructs.
> * **Python** uses the `enum` module to create enums.
> * **JavaScript** has no native enums, but you can simulate them using frozen objects.

---

## Syntax

---

### C#

```csharp
enum className {
    VALUE1,
    VALUE2,
    VALUE3
}
```

### Example

```csharp
using System;

enum Color {
    RED,
    GREEN,
    BLUE
}

class Program {
    static void printColor(Color color) {
        Console.WriteLine("Selected color: " + color);
    }

    static void Main() {
        printColor(Color.GREEN);  // Output: Selected color: GREEN
    }
}
```

---

### Java

```java
enum className {
    VALUE1,
    VALUE2,
    VALUE3
}
```

### Example

```java
enum Color {
    RED,
    GREEN,
    BLUE
}

public class Program {
    static void printColor(Color color) {
        System.out.println("Selected color: " + color);
    }

    public static void main(String[] args) {
        printColor(Color.GREEN);  // Output: Selected color: GREEN
    }
}
```

---

### Python

```python
from enum import Enum

class className(Enum):
    VALUE1 = 1
    VALUE2 = 2
    VALUE3 = 3
```

### Example

```python
from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

def print_color(color):
    print("Selected color:", color.name)

print_color(Color.GREEN)  # Output: Selected color: GREEN
```

---

### JavaScript

```javascript
const className = Object.freeze({
    VALUE1: "VALUE1",
    VALUE2: "VALUE2",
    VALUE3: "VALUE3"
});
```

### Example

```javascript
const Color = Object.freeze({
    RED: "RED",
    GREEN: "GREEN",
    BLUE: "BLUE"
});

function printColor(color) {
    console.log("Selected color:", color);
}

printColor(Color.GREEN);  // Output: Selected color: GREEN
```

---

### C++

```cpp
enum class className {
    VALUE1,
    VALUE2,
    VALUE3
};
```

### Example

```cpp
#include <iostream>
using namespace std;

enum class Color {
    RED,
    GREEN,
    BLUE
};

void printColor(Color color) {
    switch(color) {
        case Color::RED:
            cout << "Selected color: RED" << endl;
            break;
        case Color::GREEN:
            cout << "Selected color: GREEN" << endl;
            break;
        case Color::BLUE:
            cout << "Selected color: BLUE" << endl;
            break;
    }
}

int main() {
    printColor(Color::GREEN);  // Output: Selected color: GREEN
    return 0;
}
```

---

### TypeScript

```typescript
enum className {
    VALUE1,
    VALUE2,
    VALUE3
}
```

### Example

```typescript
enum Color {
    RED,
    GREEN,
    BLUE
}

function printColor(color: Color): void {
    console.log("Selected color: " + Color[color]);
}

printColor(Color.GREEN);  // Output: Selected color: GREEN
```

---

[Back to top](#enum)
