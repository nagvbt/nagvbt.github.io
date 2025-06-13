---
sidebar_position: 15
---

# Polymorphism

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 MD013-->

### Definition :

**Polymorphism** is an object-oriented programming concept that means **"many forms."** It allows
the same method name to behave **differently based on the object** that is calling it.
There are two main types:

* **Compile-time polymorphism (Method Overloading)** – supported in C# and Java.
* **Run-time polymorphism (Method Overriding)** – supported in C#, Java, Python, and JavaScript.

This concept improves flexibility and code reusability.

---

## **C++**

### Syntax

```cpp
class BaseClass {
public:
    virtual void methodName() {
        // base class behavior
    }
};

class DerivedClass : public BaseClass {
public:
    void methodName() override {
        // overridden behavior
    }
};
```

### Example

```cpp
#include <iostream>
using namespace std;

class Person {
public:
    virtual void displayInfo() {
        cout << "Person: General Info" << endl;
    }
};

class Student : public Person {
public:
    void displayInfo() override {
        cout << "Student: Specific Info" << endl;
    }
};

int main() {
    Person* p = new Student();
    p->displayInfo();  // Output: Student: Specific Info
    delete p;
    return 0;
}
```

---

## **C#**

### Syntax

```csharp
class className {
    public virtual void methodName() {
        // base class behavior
    }
}

class DerivedClass : className {
    public override void methodName() {
        // overridden behavior
    }
}
```

### Example

```csharp
using System;

class Person {
    public virtual void displayInfo() {
        Console.WriteLine("Person: General Info");
    }
}

class Student : Person {
    public override void displayInfo() {
        Console.WriteLine("Student: Specific Info");
    }
}

class Program {
    static void Main() {
        Person p = new Student();
        p.displayInfo();  // Output: Student: Specific Info
    }
}
```

---

## **Java**

### Syntax

```java
class className {
    public void methodName() {
        // base class behavior
    }
}

class DerivedClass extends className {
    @Override
    public void methodName() {
        // overridden behavior
    }
}
```

### Example

```java
class Person {
    public void displayInfo() {
        System.out.println("Person: General Info");
    }
}

class Student extends Person {
    @Override
    public void displayInfo() {
        System.out.println("Student: Specific Info");
    }

    public static void main(String[] args) {
        Person p = new Student();
        p.displayInfo();  // Output: Student: Specific Info
    }
}
```

---

## **Python**

### Syntax

```python
class className:
    def methodName(self):
        # base class behavior
        pass

class DerivedClass(className):
    def methodName(self):
        # overridden behavior
        pass
```

### Example

```python
class Person:
    def display_info(self):
        print("Person: General Info")

class Student(Person):
    def display_info(self):
        print("Student: Specific Info")

p = Student()
p.display_info()  # Output: Student: Specific Info
```

---

## **JavaScript**

### Syntax

```javascript
class className {
    methodName() {
        // base class behavior
    }
}

class DerivedClass extends className {
    methodName() {
        // overridden behavior
    }
}
```

### Example

```javascript
class Person {
    displayInfo() {
        console.log("Person: General Info");
    }
}

class Student extends Person {
    displayInfo() {
        console.log("Student: Specific Info");
    }
}

const p = new Student();
p.displayInfo();  // Output: Student: Specific Info
```

---

## **TypeScript**

### Syntax

```typescript
class BaseClass {
    methodName(): void {
        // base class behavior
    }
}

class DerivedClass extends BaseClass {
    override methodName(): void {
        // overridden behavior
    }
}
```

### Example

```typescript
class Person {
    displayInfo(): void {
        console.log("Person: General Info");
    }
}

class Student extends Person {
    override displayInfo(): void {
        console.log("Student: Specific Info");
    }
}

const p: Person = new Student();
p.displayInfo();  // Output: Student: Specific Info
```

---

[Back to top](#polymorphism)
