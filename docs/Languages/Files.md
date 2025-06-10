---
sidebar_position: 17
---

# Files

<!--markdownlint-disable MD036 MD024 MD025 MD001 MD026 MD004 MD051 MD056 MD020 MD013-->

Working with **files** allows a program to read from and write data to disk. This is essential for tasks like saving user input, configuration settings, logging, or handling external data. Each programming language has its own way of handling file input/output (I/O), but the core concepts remain consistent.

---

## C#

### Definition:

In C#, file handling is provided by the `System.IO` namespace, which includes classes such as `File`, `StreamWriter`, and `StreamReader` for reading from and writing to files.

### Syntax:

```csharp
using System.IO;

File.WriteAllText("filename.txt", "Text to write");
string content = File.ReadAllText("filename.txt");
```

### Example:

```csharp
using System;
using System.IO;

class Program {
    static void Main() {
        string filePath = "example.txt";
        
        // Write to file
        File.WriteAllText(filePath, "Hello, World!");
        
        // Read from file
        string content = File.ReadAllText(filePath);
        Console.WriteLine(content);
    }
}
```

---

## Java

### Definition:

Java provides file handling through classes in the `java.io` and `java.nio.file` packages. The `Files` class and `BufferedWriter/BufferedReader` are commonly used for reading and writing.

### Syntax:

```java
Files.write(Paths.get("filename.txt"), "Text to write".getBytes());
String content = new String(Files.readAllBytes(Paths.get("filename.txt")));
```

### Example:

```java
import java.io.IOException;
import java.nio.file.*;

public class Main {
    public static void main(String[] args) throws IOException {
        String filePath = "example.txt";
        
        // Write to file
        Files.write(Paths.get(filePath), "Hello, World!".getBytes());
        
        // Read from file
        String content = new String(Files.readAllBytes(Paths.get(filePath)));
        System.out.println(content);
    }
}
```

---

## Python

### Definition:

Python uses built-in functions like `open()` along with file methods such as `read()` and `write()` to handle file I/O. The `with` statement ensures files are properly closed.

### Syntax:

```python
with open("filename.txt", "w") as file:
    file.write("Text to write")

with open("filename.txt", "r") as file:
    content = file.read()
```

### Example:

```python
# Write to file
with open("example.txt", "w") as file:
    file.write("Hello, World!")

# Read from file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```

---

## JavaScript (Node.js)

### Definition:

In Node.js, file operations are performed using the `fs` module. It supports both synchronous and asynchronous methods for reading and writing files.

### Syntax:

```javascript
const fs = require('fs');

fs.writeFileSync("filename.txt", "Text to write");
let content = fs.readFileSync("filename.txt", "utf8");
```

### Example:

```javascript
const fs = require('fs');

const filePath = "example.txt";

// Write to file
fs.writeFileSync(filePath, "Hello, World!");

// Read from file
const content = fs.readFileSync(filePath, "utf8");
console.log(content);
```

---

## C++

In **C++**, **file handling** is done using the standard library `<fstream>`. It allows reading from and writing to files. File operations are performed using the following classes:

* `ofstream` – for writing (output) to files
* `ifstream` – for reading (input) from files
* `fstream` – for both reading and writing

These classes are part of the **`<fstream>`** header and use file streams (like `cin`/`cout` but for files).

---

## **Syntax**

```cpp
#include <fstream>  // Required for file operations

// Writing to a file
std::ofstream outFile("filename.txt");
outFile << "Some text";
outFile.close();

// Reading from a file
std::ifstream inFile("filename.txt");
std::string data;
inFile >> data;
inFile.close();

// Reading line-by-line
std::string line;
while (std::getline(inFile, line)) {
    // process line
}
```

---

## **Example**

```cpp
#include <iostream>
#include <fstream>
#include <string>

int main() {
    // Writing to file
    std::ofstream outFile("example.txt");
    if (outFile.is_open()) {
        outFile << "Hello, File!\n";
        outFile << "C++ File I/O Example\n";
        outFile.close();
    } else {
        std::cout << "Unable to open file for writing.\n";
    }

    // Reading from file
    std::ifstream inFile("example.txt");
    std::string line;
    if (inFile.is_open()) {
        while (std::getline(inFile, line)) {
            std::cout << line << std::endl;
        }
        inFile.close();
    } else {
        std::cout << "Unable to open file for reading.\n";
    }

    return 0;
}
```

---

## TypeScript (Node.js)

In **TypeScript** (running on Node.js), **file handling** is done using the built-in `fs` module. It allows reading from and writing to files. You can perform file operations either **synchronously** or **asynchronously**.

---

## **Syntax**

```typescript
import * as fs from 'fs';

// Writing to a file (synchronously)
fs.writeFileSync('filename.txt', 'Some text');

// Reading from a file (synchronously)
const data = fs.readFileSync('filename.txt', 'utf-8');
console.log(data);

// Reading line-by-line (asynchronously)
import * as readline from 'readline';
import { createReadStream } from 'fs';

const rl = readline.createInterface({
    input: createReadStream('filename.txt'),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    // process each line
    console.log(line);
});
```

---

## **Example**

```typescript
import * as fs from 'fs';
import * as readline from 'readline';
import { createReadStream } from 'fs';

try {
    // Writing to file
    fs.writeFileSync('example.txt', 'Hello, File!\nTypeScript File I/O Example\n');
    console.log('File written successfully.');
} catch (err) {
    console.error('Unable to write file.', err);
}

// Reading from file line-by-line
const rl = readline.createInterface({
    input: createReadStream('example.txt'),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    console.log(line);
});

rl.on('error', (err) => {
    console.error('Unable to read file.', err);
});
```

---

[Back to top](#files)
