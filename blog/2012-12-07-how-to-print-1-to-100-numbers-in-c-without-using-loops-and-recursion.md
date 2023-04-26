---
title: "How to print 1 to 100 numbers in C++ without using loops and recursion?"
date: "2012-12-07"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "cpp"
  - "cpp-faq"
---

```c class CPrintNum { public: static int iNum;

CPrintNum() { cout&lt;&lt;iNum++&lt;&lt;endl; } };

int CPrintNum::iNum = 1;

int main() { CPrintNum obj\[100\]; return 0; } ```
