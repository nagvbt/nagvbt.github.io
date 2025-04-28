---
sidebar_position: 1
---
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD046 MD033 MD040 MD042 MD001 MD051 MD025-->


# Functions

Function: A reusable block of code that performs a specific task.

```cpp
#include <iostream>

// Function declaration
int add(int a, int b);
void greet(std::string name);
double calculateAverage(int scores[], int size);

int main() {
    // Call functions
    int sum = add(5, 3);
    std::cout << "Sum: " << sum << std::endl;
    
    greet("Alice");
    
    int testScores[] = {85, 90, 78, 92, 88};
    double average = calculateAverage(testScores, 5);
    std::cout << "Average score: " << average << std::endl;
    
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}

void greet(std::string name) {
    std::cout << "Hello, " << name << "!" << std::endl;
}

double calculateAverage(int scores[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += scores[i];
    }
    return static_cast<double>(sum) / size;
}
```

**Function Diagram:**
```cpp
┌───────────────────────────────────────────────────────────┐
│                   Function Structure                      │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                 Function Declaration                │  │
│  │                                                     │  │
│  │  return_type function_name(parameter_list);         │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                 Function Definition                 │  │
│  │                                                     │  │
│  │  return_type function_name(parameter_list) {        │  │
│  │      // function body                               │  │
│  │      return value;  // for non-void functions       │  │
│  │  }                                                  │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                 Function Call                       │  │
│  │                                                     │  │
│  │  result = function_name(arguments);                 │  │
│  └─────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────┘
```

**Function Call Flow:**

```cpp
┌───────────┐        ┌───────────┐       ┌───────────┐
│           │        │           │       │           │
│   main()  │──────▶│  add(5,3) │──────▶│ return 8  │
│           │        │           │       │           │
└───────────┘        └───────────┘       └───────────┘
```

**Output:**

```bash
Sum: 8
Hello, Alice!
Average score: 86.6
```