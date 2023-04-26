---
title: "Find the length of the string in C"
date: "2012-07-08"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "c-faq"
  - "c"
---

```c //str\_len returns the length of str int str\_len(char\* str) { int len; len = 0; for (int i = 0; str\[i\] != '\\0'; i++) { len ++; } return len; }

void main() { char\* website = "www.nagvbt.blogspot.com"; int len = str\_len(website); printf("length = %d n", len); }

OUTPUT length = 17 ```
