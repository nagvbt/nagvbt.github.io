---
sidebar_position: 15
---

# Inheritance

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 MD013-->

## **Definition :**

**Inheritance** is an object-oriented programming concept where a **child class (subclass)** acquires the properties and behaviors (fields and methods) of a **parent class (superclass)**.
It promotes **code reusability**, **hierarchical classification**, and enables **polymorphism**.

---

## Syntax

---

## Definition:

Inheritance is an OOP concept where a child class (subclass) acquires properties and methods from a parent class (superclass), promoting code reuse and polymorphism.

---

## C#

### Syntax

```csharp
class className {
    public void methodName() {
        // base class method
    }
}

class DerivedClass : className {
    // inherits methodName from className
}
```

### Example

```csharp
using System;

class Person {
    public string Name = "Alice";

    public void displayName() {
        Console.WriteLine("Name: " + Name);
    }
}

class Student : Person {
    public void showStudent() {
        displayName();  // inherited method
    }
}

class Program {
    static void Main() {
        Student s = new Student();
        s.showStudent();
    }
}
```

---

## Java

### Syntax

```java
class className {
    public void methodName() {
        // base class method
    }
}

class DerivedClass extends className {
    // inherits methodName from className
}
```

### Example

```java
class Person {
    public String name = "Alice";

    public void displayName() {
        System.out.println("Name: " + name);
    }
}

class Student extends Person {
    public void showStudent() {
        displayName();  // inherited method
    }

    public static void main(String[] args) {
        Student s = new Student();
        s.showStudent();
    }
}
```

---

## Python

### Syntax

```python
class className:
    def methodName(self):
        # base class method
        pass

class DerivedClass(className):
    # inherits methodName from className
    pass
```

### Example

```python
class Person:
    def __init__(self):
        self.name = "Alice"

    def display_name(self):
        print("Name:", self.name)

class Student(Person):
    def show_student(self):
        self.display_name()  # inherited method

s = Student()
s.show_student()
```

---

## JavaScript (ES6+)

### Syntax

```javascript
class className {
    methodName() {
        // base class method
    }
}

class DerivedClass extends className {
    // inherits methodName from className
}
```

### Example

```javascript
class Person {
    constructor() {
        this.name = "Alice";
    }

    displayName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    showStudent() {
        this.displayName();  // inherited method
    }
}

const s = new Student();
s.showStudent();
```

---

## C++

### Syntax

```cpp
class BaseClass {
public:
    void baseFunction() {
        // code
    }
};

class DerivedClass : access_specifier BaseClass {
    // access_specifier can be public, protected, or private
};
```

### Example

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    void sound() {
        cout << "Animal makes a sound" << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Dog myDog;

    myDog.sound();  // Inherited from Animal
    myDog.bark();   // Own method

    return 0;
}
```

## TypeScript

### Syntax

```typescript
class BaseClass {
    baseFunction(): void {
        // code
    }
}

class DerivedClass extends BaseClass {
    // Derived class can access baseFunction based on its visibility
}
```

### Example

```typescript
class Animal {
    sound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Dog barks");
    }
}

const myDog = new Dog();

myDog.sound();  // Inherited from Animal
myDog.bark();   // Own method
```

---

[Back to top](#inheritance)
