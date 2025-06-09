---
sidebar_position: 3
---

# Variables and Data Types

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD056-->

## Table of Contents

| No. | Topic                                                                        |
|-----|-------------------------------------------                                   |
|3| [Variables](#variables)                                                          |
|4|[Data Types](#data-types)                                                         |

---

## **Variables**

---

### **Definition :**

A **variable** is like a container used to store data such as numbers, text, or other values in a
program. It allows you to use and change that data later by referring to the variable’s name.

---

## **C++**

### Syntax

```cpp
<datatype> <variableName> = <value>;
````

### **Common data types:** `int`, `string` (from `<string>`), `double`, `bool`, `char`

> Note: To use `string`, include the `<string>` header and use the `std` namespace.

---

### Example

```cpp
#include <iostream>
#include <string>  // Required for using std::string

int main() {
    int age = 25;
    std::string name = "Alice";
    bool isStudent = true;

    std::cout << name << " is " << age << " years old." << std::endl;
    return 0;
}
```

---

## **C#**

### Syntax

```csharp
<datatype> <variableName> = <value>;
```

### **Common data types:** `int`, `string`, `double`, `bool`

### Example

```csharp
int age = 25;
string name = "Alice";
bool isStudent = true;

Console.WriteLine(name + " is " + age + " years old.");
```

---

## **Java**

### Syntax

```java
<datatype> <variableName> = <value>;
```

### **Common data types:** `int`, `String`, `double`, `boolean`

### Example

```java
int age = 25;
String name = "Alice";
boolean isStudent = true;

System.out.println(name + " is " + age + " years old.");
```

---

## **Python**

### Syntax

```python
variable_name = value
```

* No need to declare type — Python figures it out automatically

### Example

```python
age = 25
name = "Alice"
is_student = True

print(name + " is " + str(age) + " years old.")
```

---

## **JavaScript**

### Syntax

```javascript
let variableName = value;
const variableName = value; // for constants
var variableName = value;   // older way
```

### Example

```javascript
let age = 25;
let name = "Alice";
let isStudent = true;

console.log(name + " is " + age + " years old.");
```

---

## **TypeScript**

## Syntax

In TypeScript, variables can be declared using `let`, `const`, or `var` with **type annotations**.

```ts
let variableName: type = value;
const constantName: type = value;
var oldStyleVariable: type = value;
```

### Example

```typescript
let age: number = 25;
let name: string = "Alice";
let isStudent: boolean = true;

console.log(`${name} is ${age} years old.`);

```

---

[Back to Top](#table-of-contents)

## **Data Types**

---

### **Definition :**

**Data types** define what kind of value a variable can store, such as numbers, text, true/false,
etc. Each programming language has built-in data types used to store specific kinds of data.

---

## **C++**

### **Common Data Types:**

- `int` – whole numbers (e.g., `10`)
- `double` – decimal numbers (e.g., `10.5`)
- `std::string` – text (e.g., `"Hello"`) *(requires `<string>` header)*
- `bool` – true/false values
- `char` – single character (e.g., `'A'`)

---

### Example

```cpp
#include <iostream>
#include <string>  // Required for std::string

int main() {
    int age = 30;
    double height = 5.9;
    std::string name = "Alice";
    bool isStudent = true;
    char grade = 'A';

    std::cout << name << " is " << age << " years old, height is " << height << " feet." << std::endl;
    std::cout << "Student status: " << (isStudent ? "Yes" : "No") << ", Grade: " << grade << std::endl;

    return 0;
}
```

---

## **C#**

### **Common Data Types:**

* `int` – whole numbers (e.g., 10)
* `double` – decimal numbers (e.g., 10.5)
* `string` – text (e.g., "Hello")
* `bool` – true/false values
* `char` – single character (e.g., 'A')

### Example

```csharp
int age = 30;
double height = 5.9;
string name = "Alice";
bool isStudent = true;
char grade = 'A';
```

---

## **Java**

### **Common Data Types:**

* `int` – whole numbers
* `double` – decimal numbers
* `String` – text
* `boolean` – true/false
* `char` – single character

### Example

```java
int age = 30;
double height = 5.9;
String name = "Alice";
boolean isStudent = true;
char grade = 'A';
```

---

## **Python**

### **Common Data Types:**

* `int` – whole numbers
* `float` – decimal numbers
* `str` – text
* `bool` – true/false (`True` or `False`)
* `list`, `dict`, `tuple` – for collections

*Python is dynamically typed — no need to declare type.*

### Example

```python
age = 30
height = 5.9
name = "Alice"
is_student = True
grade = 'A'
```

---

## **JavaScript**

### **Common Data Types:**

* `Number` – for all numbers (both integer and decimal)
* `String` – text
* `Boolean` – true/false
* `Object` – for key-value pairs
* `Array` – list of items
* `null` – empty value
* `undefined` – not assigned

### Example

```javascript
let age = 30;
let height = 5.9;
let name = "Alice";
let isStudent = true;
let grade = 'A';
```

---

## **TypeScript**

### **Common Data Types:**

TypeScript builds on JavaScript by adding static type definitions. Below are the most commonly used
data types in TypeScript:

| Type         | Example                          | Description                                 |
|--------------|----------------------------------|---------------------------------------------|
| `string`     | `"Hello, World!"`                | Textual data                                |
| `number`     | `42`, `3.14`                     | Both integers and floating-point numbers    |
| `boolean`    | `true`, `false`                  | Logical values                              |
| `null`       | `null`                           | Absence of any value                        |
| `undefined`  | `undefined`                      | A variable not assigned a value             |
| `any`        | `any`                            | Disables type checking                      |
| `void`       | `function greet(): void {}`      | Function that does not return a value       |
| `never`      | `function error(): never {}`     | Represents unreachable code or errors       |
| `object`     | `{ name: "Alice", age: 30 }`     | Non-primitive values                        |
| `array`      | `string[]`, `Array<number>`      | Ordered collections                         |
| `tuple`      | `[string, number]`               | Fixed-length array with known types         |
| `enum`       | `enum Color {Red, Green, Blue}`  | Named constants                             |
| `union`      | `string | number`                | Accepts multiple defined types              |
| `literal`    | `"yes"`, `42`                    | Specific value as type                      |
| `type` / `interface` | `type User = {name: string}` | Custom structured types                 |

> ✅ Tip: Use `type` and `interface` to define reusable and complex data structures.

---

🧠 **Type Safety** is the key feature of TypeScript—leverage these data types to write robust code.

### Example

```typescript
let age: number = 30;
let height: number = 5.9;
let name: string = "Alice";
let isStudent: boolean = true;
let grade: string = 'A'; // TypeScript does not have a 'char' type, use string with 1 character

```

---
[Back to Top](#table-of-contents)
