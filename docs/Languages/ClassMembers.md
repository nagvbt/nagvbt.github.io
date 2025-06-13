---
sidebar_position: 11
---

# Class Members

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 -->

### Definition :

**Class members** are the components defined within a class. These include:

* **Fields/Attributes/Properties**: Variables that store data related to the object.
* **Methods**: Functions that define the behavior of the class.
* **Constructors** (in most languages): Special methods used to initialize objects.

---

## **C++**

### Syntax

```cpp
class ClassName {
public:
    // Data members (variables)
    int data;

    // Member functions (methods)
    void display();
};
```

---

### Example

```cpp
#include <iostream>
using namespace std;

class Car {
public:
    // Data members
    string brand;
    int year;

    // Member function
    void showDetails() {
        cout << "Brand: " << brand << endl;
        cout << "Year: " << year << endl;
    }
};

int main() {
    Car myCar;

    // Accessing data members
    myCar.brand = "Toyota";
    myCar.year = 2022;

    // Calling member function
    myCar.showDetails();

    return 0;
}
```

---

## **C#**

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
```

### Example

```csharp
using System;

class Person {
    private string name;  // Field

    public Person(string personName) {  // Constructor
        name = personName;
    }

    public void displayName() {  // Method
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

## **Java**

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
```

### Example

```java
public class Person {
    private String name;  // Field

    public Person(String personName) {  // Constructor
        name = personName;
    }

    public void displayName() {  // Method
        System.out.println("Name: " + name);
    }

    public static void main(String[] args) {
        Person p = new Person("Alice");
        p.displayName();
    }
}
```

---

## **Python**

### Syntax

```python
class className:
    def __init__(self, value):
        self.name = value  # Attribute

    def methodName(self):
        print(self.name)
```

### Example

```python
class Person:
    def __init__(self, name):  # Constructor
        self.name = name       # Attribute

    def display_name(self):   # Method
        print(f"Name: {self.name}")

p = Person("Alice")
p.display_name()
```

---

## **JavaScript**

### Syntax

```javascript
class className {
    constructor(value) {
        this.name = value;  // Property
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
        this.name = name;  // Property
    }

    displayName() {  // Method
        console.log("Name: " + this.name);
    }
}

const p = new Person("Alice");
p.displayName();
```

---

## **TypeScript**

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
```

### Example

```typescript
class Person {
    private name: string;  // Field

    constructor(personName: string) {  // Constructor
        this.name = personName;
    }

    public displayName(): void {  // Method
        console.log("Name: " + this.name);
    }
}

const p = new Person("Alice");
p.displayName();
```

---

[Back to top](#class-members)
