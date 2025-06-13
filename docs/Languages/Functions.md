---
sidebar_position: 9
---
# Functions

A **function** is a reusable block of code that performs a specific task. Breaking code into
functions improves readability, reusability, and modularity.

## **C++ Functions**

### Syntax

```cpp
returnType functionName(dataType param1, dataType param2) {
    // function body
    return value;
}
```

### Example

```cpp
int add(int i, int j, int k) {
    return i + j + k;
}
```

### Anonymous Function (Lambda)

```cpp
auto add = [](int x, int y) {
    return x + y;
};
```

---

## **C# Functions**

### Syntax

```csharp
accessModifier returnType FunctionName(dataType param1, dataType param2) {
    // function body
    return value;
}
```

### Example

```csharp
public int Add(int i, int j, int k) {
    return i + j + k;
}
```

### Anonymous Function (Lambda)

```csharp
Func<int, int, int> add = (x, y) => x + y;
```

---

## **Java Functions**

### Syntax

```java
// Inside a class
returnType functionName(dataType param1, dataType param2) {
    // function body
    return value;
}
```

### Example

```java
public int add(int i, int j, int k) {
    return i + j + k;
}
```

### Anonymous Function (Lambda – Java 8+)

```java
interface Add {
    int operation(int a, int b);
}

Add add = (a, b) -> a + b;
```

---

## **Python Functions**

### Definition

A **function** in Python is created using the `def` keyword. Functions can be nested, support
multiple argument types, and allow anonymous (lambda) expressions.

### Syntax

```python
def function_name(parameters):
    # function body
    return value
```

### Example

```python
def add_numbers(i, j, k):
    return i + j + k
```

---

### Default Arguments – Syntax

```python
def func_name(param=defaultValue):
    # body
```

### Example

```python
def greet(name="User"):
    print("Hello", name)
```

---

### Keyword Arguments – Syntax

```python
def func_name(param1, param2):
    # body
```

### Example

```python
def profile(name, age):
    print(name, age)

profile(age=30, name="Alice")
```

---

### Positional Arguments – Syntax

```python
def func_name(param1, param2):
    # body
```

### Example

```python
def person(name, age):
    print(name, age)

person("Alice", 30)
```

---

### Arbitrary Arguments – Syntax

```python
def func_name(*args):   # Non-keyword
def func_name(**kwargs):  # Keyword
```

### Example

```python
def many_args(*args):
    for arg in args:
        print(arg)

def many_kwargs(**kwargs):
    for k, v in kwargs.items():
        print(f"{k} = {v}")
```

---

### Nested Functions – Syntax

```python
def outer():
    def inner():
        # body
    inner()
```

### Example

```python
def outer():
    msg = "Nested"
    def inner():
        print(msg)
    inner()
```

---

### Anonymous Function (Lambda) – Syntax

```python
lambda arguments: expression
```

### Example

```python
add = lambda x, y: x + y
print(add(2, 3))  # Output: 5
```

---

## **JavaScript Functions**

### Syntax

```js
function functionName(param1, param2) {
    // body
}
```

### Example

```js
function add(i, j, k) {
    return i + j + k;
}
```

### Anonymous Function (Arrow Function)

```js
const add = (x, y) => x + y;
```

---

## **TypeScript Functions**

### Definition

TypeScript functions are like JavaScript functions but with **type annotations** for parameters and
return values.

### Syntax

```ts
function functionName(param1: type, param2: type): returnType {
    // body
}
```

### Example

```ts
function add(i: number, j: number, k: number): number {
    return i + j + k;
}
```

### Anonymous Function (Typed Arrow Function)

```ts
const add = (x: number, y: number): number => x + y;
```

---
