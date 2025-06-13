---
sidebar_position: 8
---

# Arrays

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD013 -->

---

## **Definition of Arrays**

An **array** is a collection of elements (like numbers or strings) stored under one variable name.

* **Single-dimensional arrays** store data in a simple list format.
* **Multi-dimensional arrays** store data in table or grid format (like rows and columns).

---

## **C++**

### **Syntax:**

```cpp
// Single-dimensional
int nums[3];               // Empty array of size 3
int nums2[] = {1, 2, 3};   // Pre-filled

// Multi-dimensional
int grid[2][3];            // 2 rows, 3 columns
int matrix[2][2] = { {1, 2}, {3, 4} };
````

### Example

```cpp
#include <iostream>

int main() {
    // Single-dimensional array
    int scores[] = { 90, 80, 70 };
    std::cout << scores[0] << std::endl; // Output: 90

    // Multi-dimensional array
    int matrix[2][2] = { {1, 2}, {3, 4} };
    std::cout << matrix[1][0] << std::endl; // Output: 3 (2nd row, 1st column)

    return 0;
}
```

---

## **C#**

### **Syntax:**

```csharp
// Single-dimensional
int[] nums = new int[3]; // Empty array of size 3
int[] nums2 = {1, 2, 3}; // Pre-filled

// Multi-dimensional
int[,] grid = new int[2, 3]; // 2 rows, 3 columns
int[,] matrix = { {1, 2}, {3, 4} };
```

### Example

```csharp
// Single-dimensional array
int[] scores = { 90, 80, 70 };
Console.WriteLine(scores[0]); // Output: 90

// Multi-dimensional array
int[,] matrix = { {1, 2}, {3, 4} };
Console.WriteLine(matrix[1, 0]); // Output: 3 (2nd row, 1st column)
```

---

## **Java**

### **Syntax:**

```java
// Single-dimensional
int[] nums = new int[3];
int[] nums2 = {1, 2, 3};

// Multi-dimensional
int[][] matrix = new int[2][3]; // 2 rows, 3 columns
int[][] matrix2 = { {1, 2}, {3, 4} };
```

### Example

```java
// Single-dimensional
int[] scores = { 90, 80, 70 };
System.out.println(scores[0]); // Output: 90

// Multi-dimensional
int[][] matrix = {
    {1, 2},
    {3, 4}
};
System.out.println(matrix[1][0]); // Output: 3
```

---

## **Python**

### **Syntax:**

```python
# Single-dimensional
arr = [1, 2, 3]

# Multi-dimensional (list of lists)
matrix = [
    [1, 2],
    [3, 4]
]
```

### Example

```python
# Single-dimensional array (list)
scores = [90, 80, 70]
print(scores[0])  # Output: 90

# Multi-dimensional array (2D list)
matrix = [[1, 2], [3, 4]]
print(matrix[1][0])  # Output: 3 (2nd row, 1st element)
```

> For real numerical multi-dimensional arrays, use NumPy: `import numpy as np`

---

## **JavaScript**

### Syntax:

```javascript
// Single-dimensional
let nums = [1, 2, 3];

// Multi-dimensional (array of arrays)
let matrix = [
    [1, 2],
    [3, 4]
];
```

### Example

```javascript
// Single-dimensional
let scores = [90, 80, 70];
console.log(scores[0]); // Output: 90

// Multi-dimensional
let matrix = [[1, 2], [3, 4]];
console.log(matrix[1][0]); // Output: 3
```

---

## **TypeScript**

### Syntax

```typescript
// Single-dimensional array
let arr: number[] = [value1, value2, value3];

// Multi-dimensional array (array of arrays)
let arr: number[][] = [
  [row1col1, row1col2],
  [row2col1, row2col2]
];

// Accessing elements
arr[index]              // Single-dimensional
arr[rowIndex][colIndex] // Multi-dimensional
```

---

### Example

```typescript
// Single-dimensional array
let scores: number[] = [90, 80, 70];
console.log(scores[0]); // Output: 90

// Multi-dimensional array
let matrix: number[][] = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][0]); // Output: 3 (2nd row, 1st column)
```

---

## **Array Feature Summary Table**

| Feature                  | **C++**                          | C#                           | Java                          | Python                | JavaScript                | **TypeScript**                        |
| ------------------------ | -------------------------------- | ---------------------------- | ----------------------------- | --------------------- | ------------------------- | ------------------------------------- |
| Single-dimensional array | `int arr[] = {1, 2, 3};`         | `int[] arr = {1,2,3}`        | `int[] arr = {1,2,3}`         | `arr = [1,2,3]`       | `let arr = [1,2,3]`       | `let arr: number[] = [1,2,3]`         |
| Multi-dimensional array  | `int arr[2][2] = {{1,2},{3,4}};` | `int[,] arr = {{1,2},{3,4}}` | `int[][] arr = {{1,2},{3,4}}` | `arr = [[1,2],[3,4]]` | `let arr = [[1,2],[3,4]]` | `let arr: number[][] = [[1,2],[3,4]]` |
| Access element           | `arr[0][1]`                      | `arr[0]`, `arr[1,0]`         | `arr[0]`, `arr[1][0]`         | `arr[0]`, `arr[1][0]` | `arr[0]`, `arr[1][0]`     | `arr[0]`, `arr[1][0]`                 |

---

[Back to Top](#arrays)
