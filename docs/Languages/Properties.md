---
sidebar_position: 14
---

# Properties

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 MD013-->

### Definition :

A **property** is a class member that provides a flexible mechanism to **read**, **write**, or
**compute** the value of a private field. Properties encapsulate private data while exposing
controlled access through **getters and setters**.

> Properties help implement **encapsulation** by allowing controlled access to internal data.

---

## **C++**

**Note:**
C++ **does not have built-in properties** like C# or some other languages. Instead,
**getter and setter methods** are used to control access to private data members, simulating properties.

---

### Syntax (Using Getter and Setter methods)**

```cpp
class ClassName {
private:
    int data;

public:
    // Setter
    void setData(int value) {
        data = value;
    }

    // Getter
    int getData() {
        return data;
    }
};
```

### Example

```cpp
#include <iostream>
using namespace std;

class Account {
private:
    double balance;

public:
    // Setter method (simulating a property)
    void setBalance(double amount) {
        if (amount >= 0)
            balance = amount;
        else
            cout << "Invalid balance amount." << endl;
    }

    // Getter method
    double getBalance() {
        return balance;
    }
};

int main() {
    Account acc;
    acc.setBalance(1000.50);
    cout << "Balance: " << acc.getBalance() << endl;

    acc.setBalance(-500);  // Invalid

    return 0;
}
```

## **C#**

### Syntax(Uses built-in `get`/`set` keywords)

```csharp
class className {
    private string name;

    public string Name {
        get { return name; }
        set { name = value; }
    }
}
```

### Example

```csharp
class Person {
    private string name;

    public string Name {
        get { return name; }
        set { name = value; }
    }

    public void displayName() {
        Console.WriteLine("Name: " + Name);
    }
}

class Program {
    static void Main() {
        Person p = new Person();
        p.Name = "Alice";            // using property setter
        p.displayName();             // using property getter inside method
    }
}
```

---
---

## **Java**

### Syntax(Uses explicit getter/setter methods)

```java
class className {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String value) {
        name = value;
    }
}
```

### Example

```java
public class Person {
    private String name;

    public String getName() {       // getter
        return name;
    }

    public void setName(String name) { // setter
        this.name = name;
    }

    public void displayName() {
        System.out.println("Name: " + getName());
    }

    public static void main(String[] args) {
        Person p = new Person();
        p.setName("Alice");         // using setter
        p.displayName();            // using getter inside method
    }
}
```

---

## **Python**

### Syntax(Uses `@property` decorator)

```python
class className:
    def __init__(self):
        self._name = ""

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        self._name = value
```

### Example

```python
class Person:
    def __init__(self):
        self._name = ""

    @property
    def name(self):                # getter
        return self._name

    @name.setter
    def name(self, value):        # setter
        self._name = value

    def display_name(self):
        print("Name:", self.name)

p = Person()
p.name = "Alice"                   # using setter
p.display_name()                  # using getter
```

---

## **JavaScript**

### Syntax(Uses `get`/`set` in class definition)

```javascript
class className {
    constructor() {
        this._name = "";
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}
```

### Example

```javascript
class Person {
    constructor() {
        this._name = "";
    }

    get name() {                  // getter
        return this._name;
    }

    set name(value) {             // setter
        this._name = value;
    }

    displayName() {
        console.log("Name:", this.name); // using getter
    }
}

const p = new Person();
p.name = "Alice";                 // using setter
p.displayName();                  // using getter
```

---

## **TypeScript**

**Note:**
TypeScript **supports getter and setter methods** using the `get` and `set` keywords, which
allow safe and controlled access to class properties—similar to C# and more elegant than C++.

---

### Syntax (Using Getter and Setter methods)

```typescript
class ClassName {
    private _data: number;

    // Setter
    set data(value: number) {
        this._data = value;
    }

    // Getter
    get data(): number {
        return this._data;
    }
}
```

---

### Example

```typescript
class Account {
    private _balance: number = 0;

    // Setter method (simulating a property)
    set balance(amount: number) {
        if (amount >= 0) {
            this._balance = amount;
        } else {
            console.log("Invalid balance amount.");
        }
    }

    // Getter method
    get balance(): number {
        return this._balance;
    }
}

const acc = new Account();
acc.balance = 1000.50;  // Setter called
console.log("Balance: " + acc.balance);  // Getter called

acc.balance = -500;  // Invalid
```

[Back to top](#properties)
