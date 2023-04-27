---
title: "'Singleton' Design Pattern using simple program"
date: "2012-04-06"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "cpp"
  - "Design Patterns"
---

**Definition:** Ensure a class only has one instance and provide a global point of access to it.



**Program:**

```c
#include "iostream"
using namespace std;

class Singleton
{
private:
    static Singleton\* instance;
    Singleton() {}

public:
    static Singleton\* Instance()
    {
        if(instance == NULL)
        {
            instance = new Singleton();
        }
        return instance;
    }

    void Show()
    {
        cout&lt;&lt;"Singleton Class"&lt;&lt;endl;
    }
};

Singleton\* Singleton::instance = NULL;

int main()
{
    Singleton\* obj1 = Singleton::Instance();
    obj1-&gt;Show();

    Singleton\* obj2 = Singleton::Instance();
    obj2-&gt;Show();

    getchar();

    return 0;
}

/\*
OUT PUT
-------
Singleton Class
Singleton Class
\*/
```
