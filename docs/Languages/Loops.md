---
sidebar_position: 7
---
# Loops

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD056 MD013-->

## **Definition of Loops:**

A **loop** lets you repeat a block of code multiple times. It's useful when you want to perform an action again and again, like going through a list or counting numbers. You can also **skip** or **stop** a loop using `continue` and `break`.

---

## **C++**

### Syntax

```cpp
// For loop
for (initialization; condition; update) {
    // body
}

// Range-based For (C++11+)
for (dataType var : container) {
    // body
}

// While loop
while (condition) {
    // body
}

// Do-While loop
do {
    // body
} while (condition);

// Break and Continue inside loops
```

---

### Example

```cpp
#include <iostream>
#include <string>

int main() {
    // For loop
    for (int i = 0; i < 5; i++) {
        std::cout << i << std::endl;
    }

    // Range-based for loop
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
        if (k == 2) continue;
        if (k == 4) break;
        std::cout << k << std::endl;
    }

    return 0;
}
```

---

## **C#**

### Syntax

```csharp
// For loop
for (initialization; condition; update) {
    // body
}

// Foreach loop
foreach (var item in collection) {
    // body
}

// While loop
while (condition) {
    // body
}

// Do-While loop
do {
    // body
} while (condition);

// Break and Continue
```

---

### Example

```csharp
// For loop
for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}

// Foreach loop
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
    if (k == 2) continue;
    if (k == 4) break;
    Console.WriteLine(k);
}
```

---

## **Java**

### Syntax

```java
// For loop
for (initialization; condition; update) {
    // body
}

// Enhanced For loop
for (type item : arrayOrList) {
    // body
}

// While loop
while (condition) {
    // body
}

// Do-While loop
do {
    // body
} while (condition);

// Break and Continue
```

---

### Example

```java
// For loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// For-each loop
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

// Do-While loop
int j = 0;
do {
    System.out.println(j);
    j++;
} while (j < 3);

// Break and Continue
for (int k = 0; k < 5; k++) {
    if (k == 2) continue;
    if (k == 4) break;
    System.out.println(k);
}
```

---

## **Python**

### Syntax

```python
# For loop
for item in iterable:
    # body

# While loop
while condition:
    # body

# Simulated Do-While loop
while True:
    # body
    if condition: break

# Break and Continue
```

---

### Example

```python
# For loop
for i in range(5):
    print(i)

# For-each loop
names = ["Alice", "Bob"]
for name in names:
    print(name)

# While loop
i = 0
while i < 3:
    print(i)
    i += 1

# Simulated Do-While
j = 0
while True:
    print(j)
    j += 1
    if j >= 3:
        break

# Break and Continue
for k in range(5):
    if k == 2:
        continue
    if k == 4:
        break
    print(k)
```

---

## **JavaScript**

### Syntax

```javascript
// For loop
for (let i = 0; i < limit; i++) {
    // body
}

// For-of loop
for (let item of iterable) {
    // body
}

// For-in loop (for objects)
for (let key in object) {
    // body
}

// While loop
while (condition) {
    // body
}

// Do-While loop
do {
    // body
} while (condition);

// Break and Continue
```

---

### Example

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For-of loop
let names = ["Alice", "Bob"];
for (let name of names) {
    console.log(name);
}

// For-in loop
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

// Do-While loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 3);

// Break and Continue
for (let k = 0; k < 5; k++) {
    if (k === 2) continue;
    if (k === 4) break;
    console.log(k);
}
```

---

## **TypeScript**

### Syntax

```typescript
// For loop
for (let i: number = 0; i < 5; i++) {
    // body
}

// For-of loop
for (let item of array) {
    // body
}

// While loop
while (condition) {
    // body
}

// Do-While loop
do {
    // body
} while (condition);

// Break and Continue
```

---

### Example

```typescript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For-of loop
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
    if (k === 2) continue;
    if (k === 4) break;
    console.log(k);
}
```

---
