---
sidebar_position: 12
---

# Constructors

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 -->

## **Definition :**

A **constructor** is a special method used to **initialize objects** when they are created.
It typically sets the initial values of the object’s fields or properties.

Constructors often share the same name as the class (except in Python), and they are automatically
called when an object is instantiated.

---

## C++

### Syntax

```cpp
class ClassName {
public:
    // Default constructor
    ClassName();

    // Parameterized constructor
    ClassName(int param);

    // Copy constructor
    ClassName(const ClassName &other);

    // Destructor (for completeness, though not a constructor)
    ~ClassName();
};
```

---

### Example

```cpp
#include <iostream>
using namespace std;

class Book {
public:
    string title;
    string author;
    int pages;

    // Default constructor
    Book() {
        title = "Unknown";
        author = "Unknown";
        pages = 0;
    }

    // Parameterized constructor
    Book(string t, string a, int p) {
        title = t;
        author = a;
        pages = p;
    }

    // Copy constructor
    Book(const Book &other) {
        title = other.title;
        author = other.author;
        pages = other.pages;
    }

    void showInfo() {
        cout << "Title: " << title << endl;
        cout << "Author: " << author << endl;
        cout << "Pages: " << pages << endl;
    }
};

int main() {
    // Using default constructor
    Book b1;
    b1.showInfo();

    // Using parameterized constructor
    Book b2("1984", "George Orwell", 328);
    b2.showInfo();

    // Using copy constructor
    Book b3 = b2;
    b3.showInfo();

    return 0;
}
```

## *C#*

### Syntax

```csharp
class className {
    string name;  // Field

    // Constructor
    public className(string value) {
        name = value;
    }

    // Method
    public void methodName() {
        Console.WriteLine(name);
    }
}
```

### Example

```csharp
using System;

class Person {
    private string name;

    public Person(string personName) {  // Constructor
        name = personName;
    }

    public void displayName() {
        Console.WriteLine("Name: " + name);
    }
}

class Program {
    static void Main() {
        Person p = new Person("Alice");
        p.displayName();
    }
}
```

---

## Java

### Syntax

```java
class className {
    String name;

    // Constructor
    className(String value) {
        name = value;
    }

    // Method
    void methodName() {
        System.out.println(name);
    }
}
```

### Example

```java
public class Person {
    private String name;

    public Person(String personName) {  // Constructor
        name = personName;
    }

    public void displayName() {
        System.out.println("Name: " + name);
    }

    public static void main(String[] args) {
        Person p = new Person("Alice");
        p.displayName();
    }
}
```

---

## Python

### Syntax

```python
class className:
    def __init__(self, value):  # Constructor
        self.name = value

    def methodName(self):
        print(self.name)
```

### Example

```python
class Person:
    def __init__(self, name):  # Constructor
        self.name = name

    def display_name(self):
        print(f"Name: {self.name}")

p = Person("Alice")
p.display_name()
```

---

## JavaScript

### Syntax

```javascript
class className {
    constructor(value) {
        this.name = value;  // Constructor
    }

    methodName() {
        console.log(this.name);
    }
}
```

### Example

```javascript
class Person {
    constructor(name) {  // Constructor
        this.name = name;
    }

    displayName() {
        console.log("Name: " + this.name);
    }
}

const p = new Person("Alice");
p.displayName();
```

## TypeScript

### Syntax

```typescript
class className {
    name: string;  // Field

    // Constructor
    constructor(value: string) {
        this.name = value;
    }

    // Method
    methodName(): void {
        console.log(this.name);
    }
}
```

### Example

```typescript
class Person {
    private name: string;

    constructor(personName: string) {  // Constructor
        this.name = personName;
    }

    public displayName(): void {
        console.log("Name: " + this.name);
    }
}

const p = new Person("Alice");
p.displayName();
```

---

[Back to top](#constructors)
