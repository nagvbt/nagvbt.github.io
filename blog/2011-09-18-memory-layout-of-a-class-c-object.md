---
tags: ["C++"]
---

# Memory Layout of a class (C++) Object

Let us know how the members of a class are stored in the C++ class object.

1. All Static Members Functions, Static member variables and Non static Members Functions are hoisted outside the class object.
2. All non static member variables are stored in the class object.
3. All virtual functions are part of Virtual Table. And a pointer (vptr) to the created Virtual Table is inserted with in each class object.

**Sample Program:**

```cpp
class Sample
{
public:
     Sample() {};

     virtual ~Sample() {}
     virtual void virtualFun1() {}
     virtual void virtualFun2() {}

     void normalFun() {}

     static int getCount() //static function
     {
       return nCount;
     }

private:
     int i;
     static int nCount;
};

void main()
{
    Sample obj;
    cout<<obj;
}

```
