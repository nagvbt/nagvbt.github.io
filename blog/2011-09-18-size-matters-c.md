---
title: "Size Matters (C++)"
date: "2011-09-18"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "cpp"
---

C++ class have A. Data Members B. Members Functions

**A. Data Members**

1. Static Data Member The size of a class object with only Static data members irrespective of Data Type (say float, long e.tc.) is equal to [one Byte (~ size of Empty class)](http://nagvbt.blogspot.com/2011/09/18/why-size-of-an-empty-c-class-not-zero/) 
    
    ```cpp
    class CStaticDataMemberCls
    {
    public:
    static int i;
    static float f;
    };
    

void main() { CStaticDataMemberCls objSDMC; cout&lt;} \[/source\]

2. Non Static Data Member The size of a class with non static data members is equal to sum of the data type size i.e. size of int = 4 size of float = 4 so total = 8
    
    ```cpp
    class CNonStaticDataMemberCls
    {
    public:
    int i;
    float f;
    };
    

void main() { CNonStaticDataMemberCls objNSDMC; cout&lt;} \[/source\] **B. Members Functions**

1. Static Members Functions
2. Non Static Members Functions

As Static Members Functions and Non static Members Functions are hoisted outside the class object. The size of the class will also be equal to [one Byte (~ size of Empty class)](http://nagvbt.blogspot.com/2011/09/18/why-size-of-an-empty-c-class-not-zero/) 

```cpp
class CMemberFunctionsCls
{
public:
    int fun1() { return 1; }
    static int staticFun() { return 1; }

};

void main()
{
        CMemberFunctionsCls objMFC;
    cout&lt;}
\[/source\]

3. Virtual Members Functions If a class consists of virtual functions a table of pointers(i.e. Virtual Table) to virtual functions is generated for each class. And a pointer (vptr) to the created Virtual Table is inserted with in each class object. So the size of CVirtualFunctionCls object will be 4 Bytes which is nothing but a size of vptr.
    
    ```cpp
    class CVirtualFunctionCls
    {
    public:
    virtual ~CVirtualFunctionCls() {}
        virtual void virtualFun1() {}
    virtual void virtualFun2() {}
    };
    

void main() { CVirtualFunctionCls objVFC; cout&lt;} \[/source\] Let us see the class with all the above members

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
    cout&lt;}

\[/source\]
