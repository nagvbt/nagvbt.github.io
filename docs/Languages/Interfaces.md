---
sidebar_position: 16
---

# Interface

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 MD013-->

### Definition

An **interface** is a contract that specifies a set of methods (and sometimes properties) that
implementing classes must provide. It defines *what* a class must do, but not *how* it does it.

> Note:
>
> * In **C#** and **Java**, interfaces are explicit language constructs.
> * **Python** uses abstract base classes (ABC) to simulate interfaces, as it has no built-in interface keyword.
> * **JavaScript** doesn’t have interfaces natively but simulates them via base classes and method stubs throwing errors.
> * In **C++**, interfaces are simulated using **pure abstract classes** (classes with all pure virtual functions).

---

## **C++**

> **Note:**
> C++ has no explicit `interface` keyword. Interfaces are simulated by creating **pure abstract classes** — classes with only pure virtual functions (functions declared with `= 0`) and no data members.

### Syntax

```cpp
class className {
public:
    virtual void methodName() = 0;  // pure virtual function (interface method)
};

class DerivedClass : public className {
public:
    void methodName() override {
        // method implementation
    }
};
```

### Example

```cpp
#include <iostream>
using namespace std;

class Drawable {
public:
    virtual void draw() = 0;  // pure virtual function — interface method
};

class Circle : public Drawable {
public:
    void draw() override {
        cout << "Drawing a Circle" << endl;
    }
};

int main() {
    Drawable* drawable = new Circle();
    drawable->draw();  // Output: Drawing a Circle
    delete drawable;
    return 0;
}
```

---

## **C#**

### Syntax

```csharp
interface className {
    void methodName();  // method signature
}

class DerivedClass : className {
    public void methodName() {
        // method implementation
    }
}
```

### Example

```csharp
using System;

interface IDrawable {
    void draw();  // Interface method signature
}

class Circle : IDrawable {
    public void draw() {
        Console.WriteLine("Drawing a Circle");
    }
}

class Program {
    static void Main() {
        IDrawable drawable = new Circle();
        drawable.draw();  // Output: Drawing a Circle
    }
}
```

---

## **Java**

### Syntax

```java
interface className {
    void methodName();  // method signature
}

class DerivedClass implements className {
    public void methodName() {
        // method implementation
    }
}
```

### Example

```java
interface Drawable {
    void draw();  // Interface method signature
}

class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a Circle");
    }

    public static void main(String[] args) {
        Drawable drawable = new Circle();
        drawable.draw();  // Output: Drawing a Circle
    }
}
```

---

## **Python**

### Syntax

```python
from abc import ABC, abstractmethod

class className(ABC):
    @abstractmethod
    def methodName(self):
        pass

class DerivedClass(className):
    def methodName(self):
        # method implementation
        pass
```

### Example

```python
from abc import ABC, abstractmethod

class Drawable(ABC):
    @abstractmethod
    def draw(self):
        pass

class Circle(Drawable):
    def draw(self):
        print("Drawing a Circle")

circle = Circle()
circle.draw()  # Output: Drawing a Circle
```

---

## **JavaScript**

### Syntax

```javascript
class className {
    methodName() {
        throw new Error("Method 'methodName' must be implemented.");
    }
}

class DerivedClass extends className {
    methodName() {
        // method implementation
    }
}
```

### Example

```javascript
class Drawable {
    draw() {
        throw new Error("Method 'draw()' must be implemented.");
    }
}

class Circle extends Drawable {
    draw() {
        console.log("Drawing a Circle");
    }
}

const circle = new Circle();
circle.draw();  // Output: Drawing a Circle
```

---

## **TypeScript**

### Syntax

> **Note:**
> TypeScript has explicit `interface` support, allowing you to define the shape of objects and enforce method implementations.

```typescript
interface className {
    methodName(): void;  // interface method
}

class DerivedClass implements className {
    methodName(): void {
        // method implementation
    }
}
```

### Example

```typescript
interface Drawable {
    draw(): void;  // interface method
}

class Circle implements Drawable {
    draw(): void {
        console.log("Drawing a Circle");
    }
}

const drawable: Drawable = new Circle();
drawable.draw();  // Output: Drawing a Circle
```

---

[Back to top](#interfaces)
