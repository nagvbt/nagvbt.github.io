---
sidebar_position: 15
---

# Abstraction

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 MD013-->

## **Definition :**

**Abstraction** is an object-oriented programming principle that hides the implementation details and exposes only the essential functionality of an object.
It helps in reducing complexity and increases efficiency by focusing on high-level functionalities rather than specific implementations.
In C++, abstraction is achieved using **pure virtual functions**.

* **Abstract classes**: Define abstract methods that must be implemented by subclasses.
* **Interfaces**: Provide a contract that concrete classes must follow.

---

## Syntax

---

### C\#

```csharp
abstract class className {
    public abstract void methodName();  // abstract method without implementation
}

class DerivedClass : className {
    public override void methodName() {
        // implementation of abstract method
    }
}
```

### Example

```csharp
using System;

abstract class Shape {
    public abstract void draw();  // Abstract method
}

class Circle : Shape {
    public override void draw() {
        Console.WriteLine("Drawing a Circle");
    }
}

class Program {
    static void Main() {
        Shape shape = new Circle();
        shape.draw();  // Output: Drawing a Circle
    }
}
```

---

### Java

```java
abstract class className {
    public abstract void methodName();  // abstract method without implementation
}

class DerivedClass extends className {
    @Override
    public void methodName() {
        // implementation of abstract method
    }
}
```

### Example

```java
abstract class Shape {
    public abstract void draw();  // Abstract method
}

class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a Circle");
    }

    public static void main(String[] args) {
        Shape shape = new Circle();
        shape.draw();  // Output: Drawing a Circle
    }
}
```

---

### Python

```python
from abc import ABC, abstractmethod

class className(ABC):
    @abstractmethod
    def methodName(self):
        pass

class DerivedClass(className):
    def methodName(self):
        # implementation of abstract method
        pass
```

### Example

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def draw(self):
        pass

class Circle(Shape):
    def draw(self):
        print("Drawing a Circle")

s = Circle()
s.draw()  # Output: Drawing a Circle
```

---

### JavaScript (ES6+)

```javascript
class className {
    methodName() {
        throw new Error("Method 'methodName' must be implemented.");
    }
}

class DerivedClass extends className {
    methodName() {
        // implementation of abstract method
    }
}
```

### Example

```javascript
class Shape {
    draw() {
        throw new Error("Method 'draw()' must be implemented.");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a Circle");
    }
}

const shape = new Circle();
shape.draw();  // Output: Drawing a Circle
```

---

### C++

```cpp
#include <iostream>
using namespace std;

class className {
public:
    virtual void methodName() = 0;  // pure virtual function (abstract method)
};

class DerivedClass : public className {
public:
    void methodName() override {
        // implementation of abstract method
    }
};
```

### Example

```cpp
#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() = 0;  // pure virtual function making this an abstract class
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing a Circle" << endl;
    }
};

int main() {
    Shape* shape = new Circle();
    shape->draw();  // Output: Drawing a Circle
    delete shape;
    return 0;
}
```

---

### TypeScript

```typescript
abstract class className {
    abstract methodName(): void;  // abstract method
}

class DerivedClass extends className {
    methodName(): void {
        // implementation of abstract method
    }
}
```

### Example

```typescript
abstract class Shape {
    abstract draw(): void;  // abstract method making this an abstract class
}

class Circle extends Shape {
    draw(): void {
        console.log("Drawing a Circle");
    }
}

const shape: Shape = new Circle();
shape.draw();  // Output: Drawing a Circle
```

---

[Back to top](#abstraction)

---
