---
sidebar_position: 7
---

# Conditional Statements

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 -->

---

### **Definition (in simple words):**

**Conditional statements** let your program choose between different paths based on whether a
condition is true or false. This includes basic `if` statements, multiple condition checks,
and short expressions using shorthand.

---

## **C#**

### **Full `if`, `else if`, `else`:**

```csharp
if (condition) {
    // code if true
} else if (anotherCondition) {
    // code if this is true
} else {
    // code if none are true
}
```

### **Switch:**

```csharp
switch (value) {
    case option1:
        // code
        break;
    default:
        // code
        break;
}
```

### **Shorthand if-else (Ternary Operator):**

```csharp
condition ? valueIfTrue : valueIfFalse;
```

### **Example with comments:**

```csharp
int number = 2;

// Full if-else
if (number == 1) {
    Console.WriteLine("One");
} else if (number == 2) {
    Console.WriteLine("Two");
} else {
    Console.WriteLine("Other number");
}

// Switch case
switch (number) {
    case 1:
        Console.WriteLine("One");
        break;
    case 2:
        Console.WriteLine("Two");
        break;
    default:
        Console.WriteLine("Other number");
        break;
}

// Shorthand if-else
string result = (number == 2) ? "Matched Two" : "Not Two";
Console.WriteLine(result);
```

---

## **Java**

### **Full if-else-if:**

```java
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}
```

### **Switch:**

```java
switch (value) {
    case option1:
        // code
        break;
    default:
        // code
}
```

### **Shorthand if-else (Ternary Operator):**

```java
condition ? valueIfTrue : valueIfFalse;
```

### Example

```java
int number = 2;

// Full if-else-if
if (number == 1) {
    System.out.println("One");
} else if (number == 2) {
    System.out.println("Two");
} else {
    System.out.println("Other number");
}

// Switch
switch (number) {
    case 1:
        System.out.println("One");
        break;
    case 2:
        System.out.println("Two");
        break;
    default:
        System.out.println("Other number");
        break;
}

// Shorthand if-else
String result = (number == 2) ? "Matched Two" : "Not Two";
System.out.println(result);
```

---

## **Python**

### **if, elif, else:**

```python
if condition:
    # code
elif another_condition:
    # code
else:
    # code
```

### Python doesn't have `switch`, but supports `match-case` (Python 3.10+)

### **Shorthand if-else (Ternary Expression):**

```python
valueIfTrue if condition else valueIfFalse
```

### Example

```python
number = 2

# Full if-elif-else
if number == 1:
    print("One")
elif number == 2:
    print("Two")
else:
    print("Other number")

# match-case (Python 3.10+)
match number:
    case 1:
        print("One")
    case 2:
        print("Two")
    case _:
        print("Other number")

# Shorthand if-else
result = "Matched Two" if number == 2 else "Not Two"
print(result)
```

---

## **JavaScript**

### **if, else if, else:**

```javascript
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}
```

### **Switch:**

```javascript
switch (value) {
    case value1:
        // code
        break;
    default:
        // code
}
```

### **Shorthand if-else (Ternary Operator):**

```javascript
condition ? valueIfTrue : valueIfFalse;
```

### Example

```javascript
let number = 2;

// Full if-else-if
if (number === 1) {
    console.log("One");
} else if (number === 2) {
    console.log("Two");
} else {
    console.log("Other number");
}

// Switch
switch (number) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Other number");
        break;
}

// Shorthand if-else
let result = (number === 2) ? "Matched Two" : "Not Two";
console.log(result);
```

---

## **C++**

### **Full `if`, `else if`, `else`:**

```cpp
if (condition) {
    // code if true
} else if (anotherCondition) {
    // code if this is true
} else {
    // code if none are true
}
````

### **Switch:**

```cpp
switch (value) {
    case option1:
        // code
        break;
    default:
        // code
        break;
}
```

### **Shorthand if-else (Ternary Operator):**

```cpp
condition ? valueIfTrue : valueIfFalse;
```

---

### **Example with comments:**

```cpp
#include <iostream>
#include <string>

int main() {
    int number = 2;

    // Full if-else
    if (number == 1) {
        std::cout << "One" << std::endl;
    } else if (number == 2) {
        std::cout << "Two" << std::endl;
    } else {
        std::cout << "Other number" << std::endl;
    }

    // Switch case
    switch (number) {
        case 1:
            std::cout << "One" << std::endl;
            break;
        case 2:
            std::cout << "Two" << std::endl;
            break;
        default:
            std::cout << "Other number" << std::endl;
            break;
    }

    // Shorthand if-else
    std::string result = (number == 2) ? "Matched Two" : "Not Two";
    std::cout << result << std::endl;

    return 0;
}
```

---

## TypeScript

**Syntax:**

```typescript
let number: number = 2;

// Full if-else
if (number == 1) {
    console.log("One");
} else if (number == 2) {
    console.log("Two");
} else {
    console.log("Other number");
}

// Switch case
switch (number) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Other number");
        break;
}

// Shorthand if-else (ternary operator)
let result: string = (number == 2) ? "Matched Two" : "Not Two";
console.log(result);

```

---

### Summary Table (with Shorthand)

| Language       | `if-else` | `switch`  | Shorthand if-else (Ternary)     |
| -------------- | --------- | --------- | ------------------------------- |
| **C#**         | Yes         | Yes         | `(cond) ? trueVal : falseVal`   |
| **Java**       | Yes         | Yes         | `(cond) ? trueVal : falseVal`   |
| **Python**     | Yes         | Yes (but match) | `trueVal if cond else falseVal` |
| **JavaScript** | Yes         | Yes         | `(cond) ? trueVal : falseVal`   |

---

[Back to Top](#table-of-contents)
