---
sidebar_position: 13
---

# Access Modifiers

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 MD013-->

## **Definition :**

**Access modifiers** are keywords used in object-oriented programming to define the **visibility**
and **access scope** of **classes**, **methods**, and **variables**. They control whether a member
can be accessed:

* Within the **same class**
* Within the **same package/module**
* From **outside classes**
* From **subclasses (inheritance)**

---

## Access Modifiers in Each Language

| Language       | Public             | Private   | Protected             | Default / Internal                                 |
| -------------- | ------------------ | --------- | --------------------- | -------------------------------------------------- |
| **C#**         | `public`           | `private` | `protected`           | `internal` (same assembly)                         |
| **Java**       | `public`           | `private` | `protected`           | *(no modifier)* (package)                          |
| **Python**     | *(none)*           | `__name`  | `_name`               | Everything is public by default (conventions used) |
| **JavaScript** | *default (public)* | `#name`   | *(no direct support)* | ECMAScript private `#` fields                      |

---

## Syntax (General Format)

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

```python
# Python uses naming conventions, not keywords

class className:
    def __init__(self):
        self.public_var = "public"
        self._protected_var = "protected"
        self.__private_var = "private"
```

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

## C++

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

## Example

### **C# Example**

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

### **Java Example**

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

### **Python Example**

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

### **JavaScript Example**

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

# C++

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
[Back to top](#list-of-topics)

# Access Modifiers

## **Definition :**

**Access Modifiers** are keywords used to define the **scope and visibility** of classes,
methods, and variables in object-oriented programming. They determine whether a member can be accessed from:

* The **same class**
* **Derived classes**
* The **same package/module**
* **Outside the class**

Each language handles these differently, but the concept remains consistent: **restrict or allow access** to data and behavior.

---

## Summary of Access Modifiers Across Languages

| Modifier               | **C#**                     | **Java**             | **Python**              | **JavaScript**                |
| ---------------------- | -------------------------- | -------------------- | ----------------------- | ----------------------------- |
| **public**             |  accessible everywhere    |                     |  (`name`)              |  (no `#`)                    |
| **private**            |  outside class            | -                    |  (`__name` convention) |  (`#name` strict)            |
| **protected**          |  subclass & same assembly |  subclass & package |  (`_name` convention) |  not natively supported      |
| **internal / default** | `internal` (C# only)       | *(package-private)*  | No true equivalent      | All members public unless `#` |

---

## General Syntax Format

### C#

```csharp
class className {
    public string publicField;
    private int privateField;
    protected string protectedField;
    internal string internalField;

    public void methodName() {
        // Access within class
    }
}
```

### Java

```java
class className {
    public String publicField;
    private int privateField;
    protected String protectedField;
    String defaultField;  // package-private
}
```

### Python

```python
class className:
    def __init__(self):
        self.name = "Public"
        self._protected = "Protected"
        self.__private = "Private"
```

### JavaScript

```javascript
class className {
    #privateField;

    constructor() {
        this.publicField = "Public";
        this._protectedField = "Protected (convention)";
        this.#privateField = "Private";
    }

    methodName() {
        console.log(this.#privateField); // allowed
    }
}
```

---

### **C# Example**

```csharp
class Person {
    public string publicName = "Alice";
    private int privateAge = 30;
    protected string protectedInfo = "Protected";
    internal string internalNote = "Internal";

    public void displayInfo() {
        Console.WriteLine(publicName);      //  Allowed
        Console.WriteLine(privateAge);      //  Allowed
        Console.WriteLine(protectedInfo);   //  Allowed
        Console.WriteLine(internalNote);    //  Allowed
    }
}

class Program {
    static void Main() {
        Person p = new Person();
        Console.WriteLine(p.publicName);     //  Allowed
        Console.WriteLine(p.internalNote);   //  Allowed
        // Console.WriteLine(p.privateAge);   Not Allowed
        // Console.WriteLine(p.protectedInfo);  Not Allowed
    }
}
```

---

### **Java Example**

```java
public class Person {
    public String publicName = "Alice";
    private int privateAge = 30;
    protected String protectedInfo = "Protected";
    String defaultNote = "Package";

    public void displayInfo() {
        System.out.println(publicName);       // 
        System.out.println(privateAge);       // 
        System.out.println(protectedInfo);    // 
        System.out.println(defaultNote);      // 
    }
}

class Main {
    public static void main(String[] args) {
        Person p = new Person();
        System.out.println(p.publicName);     // 
        System.out.println(p.defaultNote);    //  (same package)
        // System.out.println(p.privateAge);  
        // System.out.println(p.protectedInfo); (not a subclass)
    }
}
```

---

### **Python Example**

```python
class Person:
    def __init__(self):
        self.name = "Alice"                 # public
        self._protected_info = "Protected"  # convention
        self.__private_age = 30             # name mangling

    def display_info(self):
        print(self.name)                    # 
        print(self._protected_info)         # 
        print(self.__private_age)           # 

p = Person()
print(p.name)                  # 
print(p._protected_info)       #  (discouraged but allowed)
# print(p.__private_age)       AttributeError
print(p._Person__private_age)  #  Technically allowed via name mangling
```

---

### **JavaScript Example (ES2022+)**

```javascript
class Person {
    #privateAge;

    constructor() {
        this.publicName = "Alice";
        this._protectedInfo = "Protected (convention)";
        this.#privateAge = 30;
    }

    displayInfo() {
        console.log(this.publicName);       // 
        console.log(this._protectedInfo);   // 
        console.log(this.#privateAge);      // 
    }
}

const p = new Person();
console.log(p.publicName);         // 
console.log(p._protectedInfo);     //  (by convention)
try {
    console.log(p.#privateAge);    //  SyntaxError: private field not accessible
} catch (e) {
    console.log("Private access not allowed outside class");
}
```

---

### **C++ Example**

```cpp
#include <iostream>
using namespace std;

class Person {
public:
    string publicName = "Alice";

private:
    int privateAge = 30;

protected:
    string protectedInfo = "Protected";

public:
    string internalNote = "Internal";  // No 'internal' in C++, using public

    void displayInfo() {
        cout << publicName << endl;       // Allowed
        cout << privateAge << endl;       // Allowed
        cout << protectedInfo << endl;    // Allowed
        cout << internalNote << endl;     // Allowed
    }
};

int main() {
    Person p;
    cout << p.publicName << endl;        // Allowed
    cout << p.internalNote << endl;      // Allowed
    // cout << p.privateAge << endl;     // Not Allowed
    // cout << p.protectedInfo << endl;  // Not Allowed

    return 0;
}
```

---

### **TypeScript Example**

```typescript
class Person {
    public publicName: string = "Alice";
    private privateAge: number = 30;
    protected protectedInfo: string = "Protected";
    internalNote: string = "Internal";  // By default, public in TypeScript

    public displayInfo(): void {
        console.log(this.publicName);      // Allowed
        console.log(this.privateAge);      // Allowed
        console.log(this.protectedInfo);   // Allowed
        console.log(this.internalNote);    // Allowed
    }
}

class Program {
    static main(): void {
        const p = new Person();
        console.log(p.publicName);         // Allowed
        console.log(p.internalNote);       // Allowed
        // console.log(p.privateAge);      // Not Allowed
        // console.log(p.protectedInfo);   // Not Allowed
    }
}

Program.main();
```

---

[Back to top](#access-modifiers)
