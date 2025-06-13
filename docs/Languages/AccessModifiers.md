---
sidebar_position: 13
---

# Access Modifiers

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 MD013-->

### Definition :

**Access modifiers** are keywords used in object-oriented programming to define the **visibility**
and **access scope** of **classes**, **methods**, and **variables**. They control whether a member
can be accessed:

* Within the **same class**
* Within the **same package/module**
* From **outside classes**
* From **subclasses (inheritance)**

---

### Access Modifiers in Each Language

| Language       | Public             | Private            | Protected             | Default / Internal                                 |
|---------------|-------------------|-------------------|----------------------|---------------------------------------------------|
| **C++**       | `public:`         | `private:`        | `protected:`         | *(none)* (private by default in classes)          |
| **C#**        | `public`          | `private`         | `protected`          | `internal` (same assembly)                        |
| **Java**      | `public`          | `private`         | `protected`          | *(no modifier)* (package-private)                 |
| **Python**    | *(none)*          | `__name`          | `_name`              | Everything is public by default                   |
| **JavaScript**| *default public*  | `#name` (ES2019+) | *(no direct support)*| ECMAScript private fields (`#`)                   |
| **TypeScript**| `public`          | `private`         | `protected`          | *(none)* (public by default)                      |

### Notes:

- C++ uses access specifiers with colons (`public:`)
- Python uses naming conventions (`_` and `__`) for encapsulation
- JavaScript's `#` private fields are enforced at language level
- TypeScript adds compile-time access modifiers that are removed in transpiled JS
- Java's default (package-private) has no keyword

---

## **C++**

### Syntax

```cpp
class ClassName {
private:
    // Private members: accessible only within the class
    int privateVar;

protected:
    // Protected members: accessible within the class and derived classes
    int protectedVar;

public:
    // Public members: accessible from anywhere
    int publicVar;

    void showAccess() {
        privateVar = 10;
        protectedVar = 20;
        publicVar = 30;
    }
};
```

---

### Example

```cpp
#include <iostream>
using namespace std;

class Employee {
private:
    int salary;  // Private: not accessible directly outside class

public:
    string name;

    // Setter for private member
    void setSalary(int s) {
        salary = s;
    }

    // Getter for private member
    int getSalary() {
        return salary;
    }
};

int main() {
    Employee e1;
    e1.name = "John";

    // Can't access salary directly: e1.salary = 50000; // 

    e1.setSalary(50000);  
    cout << "Name: " << e1.name << endl;
    cout << "Salary: " << e1.getSalary() << endl;

    return 0;
}

```

---

## **C#**

### Syntax

```plaintext
// Applies to C# and Java (similar structure)

class className {
    public string publicField;
    private string privateField;
    protected string protectedField;

    public void methodName() {
        // Access to class members
    }
}
```

### Example

```csharp
using System;

class Person {
    public string publicName;
    private int privateAge;
    protected string protectedInfo;
    internal string internalNote;

    public Person(string name, int age) {
        publicName = name;
        privateAge = age;
        protectedInfo = "Protected Info";
        internalNote = "Internal Note";
    }

    public void displayInfo() {
        Console.WriteLine("Name: " + publicName);
        Console.WriteLine("Age: " + privateAge);
        Console.WriteLine("Info: " + protectedInfo);
        Console.WriteLine("Note: " + internalNote);
    }
}

class Program {
    static void Main() {
        Person p = new Person("Alice", 30);
        p.displayInfo();
    }
}
```

---

## **Java**

### Syntax

```plaintext
// Applies to C# and Java (similar structure)

class className {
    public string publicField;
    private string privateField;
    protected string protectedField;

    public void methodName() {
        // Access to class members
    }
}
```

### Example

```java
public class Person {
    public String publicName;
    private int privateAge;
    protected String protectedInfo;
    String defaultNote;  // default (package-private)

    public Person(String name, int age) {
        publicName = name;
        privateAge = age;
        protectedInfo = "Protected Info";
        defaultNote = "Default Note";
    }

    public void displayInfo() {
        System.out.println("Name: " + publicName);
        System.out.println("Age: " + privateAge);
        System.out.println("Info: " + protectedInfo);
        System.out.println("Note: " + defaultNote);
    }

    public static void main(String[] args) {
        Person p = new Person("Alice", 30);
        p.displayInfo();
    }
}
```

---

## **Python**

### Syntax

```python
# Python uses naming conventions, not keywords

class className:
    def __init__(self):
        self.public_var = "public"
        self._protected_var = "protected"
        self.__private_var = "private"
```

### Example

```python
class Person:
    def __init__(self, name, age):
        self.public_name = name
        self._protected_info = "Protected Info"
        self.__private_age = age
        self.internal_note = "Internal Note"  # All public in reality

    def display_info(self):
        print("Name:", self.public_name)
        print("Age:", self.__private_age)
        print("Info:", self._protected_info)
        print("Note:", self.internal_note)

p = Person("Alice", 30)
p.display_info()
```

---

## **Javascript**

### Syntax

```javascript
// JavaScript uses '#' for private fields

class className {
    #privateField;  // private
    constructor(value) {
        this.publicField = value;  // public
        this._protectedField = "pseudo-protected";  // naming convention
        this.#privateField = "private";
    }

    methodName() {
        console.log(this.publicField);
        console.log(this._protectedField);
        console.log(this.#privateField);
    }
}
```

### Example

```javascript
class Person {
    #privateAge;  // private field

    constructor(name, age) {
        this.publicName = name;  // public
        this._protectedInfo = "Protected Info";  // naming convention
        this.#privateAge = age;
        this.internalNote = "Internal Note";  // public
    }

    displayInfo() {
        console.log("Name:", this.publicName);
        console.log("Age:", this.#privateAge);
        console.log("Info:", this._protectedInfo);
        console.log("Note:", this.internalNote);
    }
}

const p = new Person("Alice", 30);
p.displayInfo();
```

## **TypeScript**

### Syntax

```typescript
// TypeScript has compile-time access modifiers

class ClassName {
    public publicField: type;          // Public (explicit)
    protected protectedField: type;    // Protected
    private privateField: type;        // Private (traditional syntax)
    #privateField: type;               // Private (modern ECMAScript syntax)
    
    constructor(value: type) {
        this.publicField = value;
        this.protectedField = "protected";
        this.privateField = "private-traditional";
        this.#privateField = "private-modern";
    }

    public methodName(): void {
        console.log(this.publicField);
        console.log(this.protectedField);
        console.log(this.privateField);
        console.log(this.#privateField);
    }
}
```

### Example

```typescript
class Person {
    public name: string;               // Public
    protected ssn: string;             // Protected
    private age: number;               // Private (traditional)
    #internalId: string;               // Private (modern)
    
    constructor(name: string, age: number) {
        this.name = name;
        this.ssn = "123-45-6789";
        this.age = age;
        this.#internalId = "PERS-001";
    }

    public displayInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`SSN: ${this.ssn}`);
        console.log(`ID: ${this.#internalId}`);
    }
}

class Employee extends Person {
    private salary: number;
    
    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }

    public showDetails(): void {
        console.log(`Name: ${this.name}`);        // Public - accessible
        console.log(`SSN: ${this.ssn}`);          // Protected - accessible
        // console.log(this.age);                 // Error: Private
        // console.log(this.#internalId);         // Error: Private
        console.log(`Salary: ${this.salary}`);    // Private to Employee
    }
}

// Usage
const emp = new Employee("Alice", 30, 75000);
emp.displayInfo();
emp.showDetails();
```

[Back to top](#access-modifiers)
