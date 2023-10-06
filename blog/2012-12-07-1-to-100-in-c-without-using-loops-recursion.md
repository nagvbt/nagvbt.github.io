---
tags: ["C++"]
---
# Print 1 to 100 in C++ without using loops and recursion

```cpp
class CPrintNum
{ 
  public: static int iNum;

CPrintNum() 
{
   cout << iNum++ << endl; 
} 
   
};

int CPrintNum::iNum = 1;

int main() 
{ 
  CPrintNum obj[100]; 
  return 0; 
} 
```
