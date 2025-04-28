---
sidebar_position: 2
---
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD046 MD033 MD040 MD042 MD001 MD051 MD025-->

## Functions FAQ

### 1.What is the advantage of Pass by reference ?

Pass by reference is more efficient since it requires to pass only the address of the object and not the entire object.

### 2.What is the advantage of Inline Functions over Macros ?

Advantages of Inline Functions:

 1. It speeds up the program execution and increase efficiency of the program

 2. It will decrease over head on the computer

 3. The inline functions are applicable to small functions only

### 3.Define Default Function Arguments?

C++ allows a function to assign a parameter a default value when no argument corresponding to that parameter is specified in a call to that function.

We can also use default parameters in a object constructor.

e.g: void myFun(double d, int i = 0)

### 4.What is a Friend Function?

Friend Function is not a member variable.  It has full access to the private members of the class. A function declared as a friend is not in the scope of the class to which it has been declared as a friend.

```cpp
class MyCls {
private:
    int j;
public:
    MyClass() { j = 12; }
    friend void fun1(MyCls m);
};
void fun1(MyCls m) { cout << m.j; }

void main() {
    MyCls obj;
    fun1(obj);
}

Output: 12
```

### 5.Can a Member functions of one class can be friend functions of another class ?

Yes ! In such cases they are defined using the scope resolution operator (::).

```cpp
class C2;
class C1 {
 int No1;
public:
 C1() { No1 = 10; }
 int Add(C2 b);
};
class C2 {
 int No2;
public:
 C2() { No2 = 20; }
 friend int C1::Add(C2 b);
};

int C1::Add(C2 b) {
 return No1 + b.No2;
}

void main() {
 C1 x;
 C2 y;
 cout << x.Add(y);
}

Output: 30
```

### 6.How to access global version instead of local version in a function ?

In order to access global version of ‘i’ instead of local version of I use scope resolution operator (::).

```cpp
int i = 10;
void fun()
{
    int i = 5;
    cout<<::i; //output:10
    cout<<i;   //output:5
}
```

### 7.What is the difference between Static and Constant Member Functions ?

Static Member Functions:

1. If can have access to only other static members (functions of variables) declared in the same class.

2. If can be called using the class name (instead of its objects) as follows.

                class _name::function name

Constant Members Functions:

1. If a member function does not alter any data in the class then we may declare it as a constant member function as follows.

`void (int a, int b)  const { }`

2. The complier will generate an error message if such function try to alter the data value.
