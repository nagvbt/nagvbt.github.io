---
title: "C-Pointers What is the output"
date: "2012-07-08"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "c-faq"
  - "c"
---

**FAQ-1**

```c void main() { int _p = 91; //compilation error printf("%d n",_ p); printf("%d n", p); } OUTPUT: Does not compile error C2440: 'initializing' : cannot convert from 'int' to 'int \*' ```

**FAQ-2**

```c void main() { int i = 91; int \*p = &i;

printf("%d n", \*p); printf("%d n", p); } OUTPUT: 91 1245024 ```

**FAQ-3**

```c void main() { int i = 91; int \*p = &i;

printf(" _p = %d n",_ p); printf(" p = %d n", p); printf(" &p = %d n", &p); printf(" _(&p) = %d n",_ (&p)); printf(" _(_(&p)) = %d n", _(_(&p))); }

OUTPUT: i = 91 &i = 1245024 _p = 91 p = 1245024 &p = 1245012_ (&p) = 1245024 _(_(&p)) = 91 ```

**FAQ-4**

```c void main() { const int _p; int i; i = 10; p = &i; printf("p = %d,_ p = %d, i = %d", p, _p, i); } OUTPUT p = 1245012,_ p = 10, i = 10 ```
