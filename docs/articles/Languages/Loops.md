---
sidebar_position: 7
---

# Loops

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 -->

---

### **Definition :**

A **loop** lets you repeat a block of code multiple times. It's useful when you want to perform an
action again and again, like going through a list or counting numbers. You can also **skip** or **stop**
a loop using `continue` and `break`.

---

## **C#**

### **Syntax & Examples:**

```csharp
// For loop
for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}

// Foreach loop (used for collections)
string[] names = { "Alice", "Bob" };
foreach (string name in names) {
    Console.WriteLine(name);
}

// While loop
int i = 0;
while (i < 3) {
    Console.WriteLine(i);
    i++;
}

// Do-While loop
int j = 0;
do {
    Console.WriteLine(j);
    j++;
} while (j < 3);

// Break and Continue
for (int k = 0; k < 5; k++) {
    if (k == 2) continue;  // Skips 2
    if (k == 4) break;     // Stops before 4
    Console.WriteLine(k);
}
```

---

## **Java**

### **Syntax & Examples:**

```java
// For loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// For-each loop (for arrays/lists)
String[] names = {"Alice", "Bob"};
for (String name : names) {
    System.out.println(name);
}

// While loop
int i = 0;
while (i < 3) {
    System.out.println(i);
    i++;
}

// Do-while loop
int j = 0;
do {
    System.out.println(j);
    j++;
} while (j < 3);

// Break and Continue
for (int k = 0; k < 5; k++) {
    if (k == 2) continue;  // Skip number 2
    if (k == 4) break;     // Stop loop when k == 4
    System.out.println(k);
}
```

---

## **Python**

### **Syntax & Examples:**

```python
# For loop (range-based)
for i in range(5):
    print(i)

# For-each loop (in Python, regular `for` acts like foreach)
names = ["Alice", "Bob"]
for name in names:
    print(name)

# While loop
i = 0
while i < 3:
    print(i)
    i += 1

# Python has no do-while, but you can simulate it
j = 0
while True:
    print(j)
    j += 1
    if j >= 3:
        break

# Break and Continue
for k in range(5):
    if k == 2:
        continue  # Skip 2
    if k == 4:
        break     # Exit before 4
    print(k)
```

---

## **JavaScript**

### **Syntax & Examples:**

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For-of (used for arrays)
let names = ["Alice", "Bob"];
for (let name of names) {
    console.log(name);
}

// For-in (used for object keys)
let person = {name: "Alice", age: 25};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// While loop
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// Do-while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 3);

// Break and Continue
for (let k = 0; k < 5; k++) {
    if (k === 2) continue;  // Skip 2
    if (k === 4) break;     // Stop at 4
    console.log(k);
}
```

---

## **C++**

### **Syntax & Examples:**

```cpp
#include <iostream>
#include <string>

int main() {
    // For loop
    for (int i = 0; i < 5; i++) {
        std::cout << i << std::endl;
    }

    // Foreach-style loop using range-based for (C++11 and later)
    std::string names[] = { "Alice", "Bob" };
    for (const std::string& name : names) {
        std::cout << name << std::endl;
    }

    // While loop
    int i = 0;
    while (i < 3) {
        std::cout << i << std::endl;
        i++;
    }

    // Do-While loop
    int j = 0;
    do {
        std::cout << j << std::endl;
        j++;
    } while (j < 3);

    // Break and Continue
    for (int k = 0; k < 5; k++) {
        if (k == 2) continue;  // Skips 2
        if (k == 4) break;     // Stops before 4
        std::cout << k << std::endl;
    }

    return 0;
}
```

## TypeScript

**Types:**

```typescript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For-of loop (equivalent to foreach)
let names: string[] = ["Alice", "Bob"];
for (let name of names) {
    console.log(name);
}

// While loop
let i: number = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// Do-While loop
let j: number = 0;
do {
    console.log(j);
    j++;
} while (j < 3);

// Break and Continue
for (let k = 0; k < 5; k++) {
    if (k === 2) continue;  // Skips 2
    if (k === 4) break;     // Stops before 4
    console.log(k);
}

```

---

### **Summary Table**

| Loop Type  | C#    | Java  | Python             | JavaScript          |
| ---------- | ----- | ----- | ------------------ | ------------------- |
| `for`      |  Yes |  Yes |  Yes (range/iter) |  Yes               |
| `foreach`  |  Yes |  Yes | ➖ (uses `for`)     | (`for...of`)      |
| `for-in`   | ➖     | ➖     | ➖                  |  Yes (for objects) |
| `for-of`   | ➖     | ➖     | ➖                  |  Yes (for arrays)  |
| `while`    |  Yes |  Yes |  Yes              |  Yes               |
| `do-while` |  Yes |  Yes | (manual only)    |  Yes               |
| `break`    |  Yes |  Yes |  Yes              |  Yes               |
| `continue` |  Yes |  Yes |  Yes              |  Yes               |

---
[Back to Top](#loops)
