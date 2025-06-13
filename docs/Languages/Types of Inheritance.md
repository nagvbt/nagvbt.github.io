---
sidebar_position: 16
---
## Inheritance – Definition (Common to All)

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD01 MD013 -->
**Inheritance** is an object-oriented programming feature where one class (child/derived) acquires
properties and behaviors (methods) from another class (parent/base).
This promotes code reuse and establishes a parent-child relationship.

---

## Types of Inheritance

| Type             | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| **Single**       | One child class inherits from one parent class                                   |
| **Multilevel**   | A class is derived from another derived class                                    |
| **Hierarchical** | Multiple classes inherit from one parent class                                   |
| **Multiple**     | A class inherits from more than one parent class (supported only in Python, C++) |
| **Hybrid**       | A combination of multiple types of inheritance                                   |

> Note: **Java** and **C#** do **not support multiple inheritance** using classes, but support it via **interfaces**.

---

## **C++**

#### Supported Types: Single, Multilevel, Hierarchical, Multiple, Hybrid

### Syntax

```cpp
class Base {
    // base members
};

class Derived : access_specifier Base {
    // derived members
};
```

### Example

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
    }
};

int main() {
    Dog d;
    d.eat();
    d.bark();
    return 0;
}
```

---

## **C#**

#### Supported Types: Single, Multilevel, Hierarchical

> Multiple inheritance via interfaces only.

### Syntax

```csharp
class Parent {
    // base class
}

class Child : Parent {
    // derived class
}
```

### Example

```csharp
using System;

class Animal {
    public void Eat() {
        Console.WriteLine("Eating...");
    }
}

class Dog : Animal {
    public void Bark() {
        Console.WriteLine("Barking...");
    }
}

class Program {
    static void Main() {
        Dog d = new Dog();
        d.Eat();
        d.Bark();
    }
}
```

---

## **Java**

#### Supported Types: Single, Multilevel, Hierarchical

> Multiple inheritance via interfaces only.

### Syntax

```java
class Parent {
    // base class
}

class Child extends Parent {
    // derived class
}
```

### Example

```java
class Animal {
    void eat() {
        System.out.println("Eating...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking...");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.bark();
    }
}
```

---

## **Python**

#### Supported Types: All – Single, Multilevel, Hierarchical, Multiple, Hybrid

### Syntax

```python
class Parent:
    pass

class Child(Parent):
    pass
```

### Example

```python
class Animal:
    def eat(self):
        print("Eating...")

class Dog(Animal):
    def bark(self):
        print("Barking...")

d = Dog()
d.eat()
d.bark()
```

---

## **JavaScript**

#### Supported Types: Single, Multilevel

> JavaScript uses **prototypes** or **class-based (ES6)** inheritance.

### Syntax

```js
class Parent {
    // base class
}

class Child extends Parent {
    // derived class
}
```

### Example

```javascript
class Animal {
    eat() {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking...");
    }
}

const d = new Dog();
d.eat();
d.bark();
```

---

## **TypeScript**

#### Supported Types: Same as JavaScript – Single, Multilevel

> Supports **interfaces** for multiple inheritance-like behavior.

### Syntax

```ts
class Parent {
    // base class
}

class Child extends Parent {
    // derived class
}
```

### Example

```typescript
class Animal {
    eat(): void {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Barking...");
    }
}

let d = new Dog();
d.eat();
d.bark();
```

---

## Summary Table

| Language       | Single | Multilevel | Hierarchical | Multiple | Hybrid | Multiple via Interface |
| -------------- | ------ | ---------- | ------------ | -------- | ------ | ---------------------- |
| **C++**        | ✅      | ✅          | ✅            | ✅        | ✅      | ❌                      |
| **C#**         | ✅      | ✅          | ✅            | ❌        | ❌      | ✅                      |
| **Java**       | ✅      | ✅          | ✅            | ❌        | ❌      | ✅                      |
| **Python**     | ✅      | ✅          | ✅            | ✅        | ✅      | ❌                      |
| **JavaScript** | ✅      | ✅          | ❌            | ❌        | ❌      | ❌                      |
| **TypeScript** | ✅      | ✅          | ❌            | ❌        | ❌      | ✅ (with interfaces)    |

---
