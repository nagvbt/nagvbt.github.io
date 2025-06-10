---
sidebar_position: 10
---

# Classes and Objects

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 -->

## Definition :

A **class** is a user-defined blueprint or prototype from which objects are created. It defines
properties (attributes/fields) and behaviors (methods). An **object** is a specific instance of a
class that holds actual values and can call the methods defined in the class.

---

## C++

### Syntax

```cpp
class ClassName {
  // Access specifier (public, private, protected)
public:
    // Data members
    int data;

    // Member function
    void display();
};

// Defining member function outside the class
void ClassName::display() {
    // Code to display something
}
```

### Example

```cpp
#include <iostream>
using namespace std;

// Class definition
class Student {
public:
    // Data members
    string name;
    int age;

    // Member function to display details
    void displayInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

int main() {
    // Creating an object of Student
    Student s1;

    // Assigning values
    s1.name = "Alice";
    s1.age = 20;

    // Calling member function
    s1.displayInfo();

    return 0;
}
```

---

## C#

### Syntax

```csharp
class className {
    // Field
    string name;

    // Constructor
    public className(string value) {
        name = value;
    }

    // Method
    public void methodName() {
        Console.WriteLine(name);
    }
}

// Creating object
className obj = new className("value");
obj.methodName();
```

### Example

```csharp
using System;

class Person {
    private string name;

    public Person(string personName) {
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

    className(String value) {
        name = value;
    }

    void methodName() {
        System.out.println(name);
    }
}

// Creating object
className obj = new className("value");
obj.methodName();
```

### Example

```java
public class Person {
    private String name;

    public Person(String personName) {
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
    def __init__(self, value):
        self.name = value

    def methodName(self):
        print(self.name)

# Creating object
obj = className("value")
obj.methodName()
```

### Example

```python
class Person:
    def __init__(self, name):
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
        this.name = value;
    }

    methodName() {
        console.log(this.name);
    }
}

// Creating object
const obj = new className("value");
obj.methodName();
```

### Example

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        console.log("Name: " + this.name);
    }
}

const p = new Person("Alice");
p.displayName();
```

---

## TypeScript

### Syntax

```typescript
class className {
    // Field
    name: string;

    // Constructor
    constructor(value: string) {
        this.name = value;
    }

    // Method
    methodName(): void {
        console.log(this.name);
    }
}

// Creating object
const obj = new className("value");
obj.methodName();
```

### Example

```typescript
class Person {
    private name: string;

    constructor(personName: string) {
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

[Back to top](#classes-and-objects)

---
