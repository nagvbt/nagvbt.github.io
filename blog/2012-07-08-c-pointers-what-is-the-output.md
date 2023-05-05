---
tags: ["C"]
---

# C-Pointers What is the output

**FAQ-1**

```c 
void main() { 
  int _p = 91; //compilation error 
  printf("%d n",_ p); 
  printf("%d n", p);
 } 

  OUTPUT: Does not compile error C2440: 'initializing' : cannot convert from 'int' to 'int *' 
```

**FAQ-2**

```c 
void main() { 
  int i = 91; int *p = &i;
  printf("%d n", *p); printf("%d n", p);
} 

OUTPUT: 91 1245024 
```

**FAQ-3**

```c 
void main() { 
  int i = 91; 
  int *p = &i;

  printf(" p = %d n",p); 
  printf(" p = %d n", p); 
  printf(" &p = %d n", &p); 
  printf(" (&p) = %d n", (&p)); 
  printf(" ((&p)) = %d n", ((&p))); 
}

OUTPUT: i = 91 &i = 1245024 p = 91 p = 1245024 &p = 1245012 (&p) = 1245024 ((&p)) = 91
```

**FAQ-4**

```c 
void main() { 
  const int p; 
  int i; 
  i = 10; 
  p = &i;
  printf("p = %d, p = %d, i = %d", p, p, i);
}
  
  OUTPUT p = 1245012, p = 10, i = 10 
  ```
