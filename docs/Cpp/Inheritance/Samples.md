---
sidebar_position: 8
title: Samples
---

# Inheritance Samples

## 1. Virtual Base Classes / Diamond Problem

Virtual Inheritance: Solves the diamond problem by ensuring a single instance of the base class.

```cpp
class B {
public:
    int i;
    B() { i = 10; }
};

class D1: virtual public B { };
class D2: virtual public B { };
class C: public D1, public D2 { };

void main() {
    C obj;
    cout << obj.i; // Without virtual, this would be ambiguous
}
```

**Diamond Problem Diagram:**

```mermaid
graph TD
    B[B]
    D1[D1]
    D2[D2]
    C[C]
    B -->|virtual| D1
    B -->|virtual| D2
    D1 --> C
    D2 --> C
```

**Explanation:**

- Without virtual inheritance, class C would inherit two copies of B (one through D1 and one through D2)
- This would make obj.i ambiguous - which copy of B's i should it refer to?
- Using virtual inheritance ensures only one copy of B exists in C
- This resolves the ambiguity, allowing direct access to i through C objects

**Output:**
10

## 2. Virtual Destructors

Virtual Destructors: Ensures proper calling order for destructors in class hierarchies.  Essential when deleting derived objects through base class pointers to ensure proper cleanup.

```cpp
class B {
public:
    virtual ~B() { cout << "destructor B" << endl; }
};

class D: public B {
public:
    int *p;
    D() {
        p = new int;
        *p = 10;
    }
    ~D() {
        cout << "destructor D" << endl;
        delete p;
    }
};

void main() {
    int z;
    B *pobjB;
    D *pobjD = new D();
    pobjB = pobjD;
    delete pobjB;
    cin >> z;
}
```
**Virtual Destructor Diagram:**

```mermaid
sequenceDiagram
    participant Main
    participant B_ptr as B*
    participant D_obj as D object
    Main->>D_obj: Create D object
    D_obj-->>Main: Allocate memory for p
    Main->>B_ptr: pobjB = pobjD (upcast)
    Main->>B_ptr: delete pobjB
    B_ptr->>D_obj: Call D::~D() (virtual)
    D_obj->>D_obj: Free memory for p
    D_obj->>B_ptr: Call B::~B()
```

**Explanation:**

- When a derived class object is deleted through a base class pointer, the base class destructor must be virtual
- Without virtual, only the base class destructor would be called, causing a memory leak (p would not be deleted)
- With virtual, the correct derived class destructor is called first, then the base class destructor
- This ensures proper cleanup of resources allocated by the derived class

**Output:**
```
destructor D
destructor B
```


## 3. Base-class Access Control

Access Control: Public, private, and protected members have different visibility in derived classes.


```cpp
class Base {
public:
    int m_i;
    Base() {
        m_i = 0;
        m_j = 1;
        m_k = 2;
    }
private:
    int m_j;
protected:
    int m_k;
};

class D1: public Base { };

void main() {
    D1 obj;
    cout << obj.m_i;  // Accessible
    //cout << obj.m_j; // Not accessible - private in Base
    //cout << obj.m_k; // Not accessible - protected in Base
}
```

**Access Control Diagram:**

```mermaid
classDiagram
    Base <|-- D1
    class Base {
        +int m_i
        -int m_j
        #int m_k
        +Base()
    }
    class D1 {
    }   
    note for D1 "Can access:- m_i (public), Cannot access:- m_j (private) and  m_k (protected)"
```

**Explanation:**

- public members (m_i) are accessible from anywhere
- private members (m_j) are only accessible within the Base class
- protected members (m_k) are accessible within Base and derived classes, but not from outside

**Output:**
0

## 4. Constructors and Destructors Execution Order

- Constructors execute from base to derived
- Destructors execute from derived to base

```cpp
class B {
public:
    B() { cout << "constructor B" << endl; }
    ~B() { cout << "Destructor B" << endl; }
};

class D1: public B {
public:
    D1() { cout << "constructor D1" << endl; }
    ~D1() { cout << "Destructor D1" << endl; }
};

class D2: public D1 {
public:
    D2() { cout << "constructor D2" << endl; }
    ~D2() { cout << "Destructor D2" << endl; }
};

void main() {
    D2 obj;
}
```

**Constructor/Destructor Order Diagram:**

```mermaid
sequenceDiagram
    participant Main
    participant D2
    participant D1
    participant B
    Main->>D2: Create D2 object
    D2->>D1: Call D1 constructor
    D1->>B: Call B constructor
    B-->>D1: B constructor completes
    D1-->>D2: D1 constructor completes
    D2-->>Main: D2 constructor completes
    Main->>D2: Destroy D2 object
    D2->>D2: Call D2 destructor
    D2->>D1: Call D1 destructor
    D1->>B: Call B destructor
```

**Explanation:**

Constructors are called from base to derived (B → D1 → D2)
Destructors are called in reverse order, from derived to base (D2 → D1 → B)

**Output:**
```
constructor B
constructor D1
constructor D2
Destructor D2
Destructor D1
Destructor B
```

## 5. Granting Access

We can change the access level of inherited members.

```cpp
class B {
public:
    int i; // public in base
    B() { i = 10; }
};

// Inherit base as private
class D: private B {
public:
    // here is access declaration
    B::i; // make i public again
};

void main() {
    D obj;
    cout << obj.i;
    int z;
    cin >> z;
}

```

**Access Declaration Diagram:**

```mermaid
classDiagram
    B <|-- D
    class B {
        +int i
        +B()
    }
    class D {
        +B::i
    }
    note for D "Inherits B privately, but makes i public again through access declaration"
```

**Explanation:**

- When inheriting privately, all public members of the base class become private in the derived class
- The access declaration B::i; in the public section of D makes i public again
- This allows direct access to i through D objects

**Output:**
10

## 6. Passing Parameters to Base-class Constructors

Use initializer lists to pass parameters to base class constructors.

```cpp
class B {
    int m;
protected:
    int i;
public:
    B(int x) {
        i = x;
        cout << "Constructing base : B\n";
    }
    ~B() {
        cout << "Destructing base : B\n";
    }
};

class D: public B {
    int j;
public:
    // derived uses x; y is passed along to base
    D(int x, int y): B(y) {
        j = x;
        cout << "Constructing derived : D\n";
    }
    ~D() {
        cout << "Destructing derived : D\n";
    }
    void show() {
        cout << i << " " << j << "\n";
    }
};

int main() {
    D obj(1, 2);
    obj.show(); // displays 2 1
    return 0;
}
```

**Constructor Parameter Passing Diagram:**

```mermaid
sequenceDiagram
    participant Main
    participant D
    participant B
    Main->>D: Create D(1, 2)
    D->>B: Initialize B with y=2
    B-->>D: B constructor completes
    D-->>Main: D constructor completes
    Main->>D: Call show()
    D-->>Main: Display i=2, j=1
```

**Explanation:**

The derived class constructor uses an initializer list (D(int x, int y): B(y)) to pass parameters to the base class constructor
The parameter y is passed to the base class constructor, while x is used in the derived class
In the show() method, i (from base) is 2 and j (from derived) is 1

**Output:**
```
Constructing base : B
Constructing derived : D
2 1
Destructing derived : D
Destructing base : B
```



