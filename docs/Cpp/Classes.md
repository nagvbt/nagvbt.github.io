---
sidebar_position: 5
---


# Classes

**Class:** A blueprint for creating objects that defines properties (data) and behaviors (methods).

```cpp
#include <iostream>
#include <string>

// Class definition
class Person {
private:
    // Private member variables
    std::string name;
    int age;
    
public:
    // Constructor
    Person(std::string personName, int personAge) {
        name = personName;
        age = personAge;
    }
    
    // Member functions
    void introduce() {
        std::cout << "Hi, I'm " << name << " and I'm " << age << " years old." << std::endl;
    }
    
    void celebrateBirthday() {
        age++;
        std::cout << name << " is now " << age << " years old." << std::endl;
    }
};

int main() {
    // Create objects
    Person person1("John", 25);
    Person person2("Sarah", 30);
    
    // Call member functions
    person1.introduce();
    person2.introduce();
    
    person1.celebrateBirthday();
    
    return 0;
}
```

**Class and Object Diagram:**

```cpp
┌───────────────────────────────────────────────────────────┐
│                   Class Structure                         │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                 Class Person                        │  │
│  │                                                     │  │
│  │  ┌─────────────────────────────────────────────┐    │  │
│  │  │ Private:                                    │    │  │
│  │  │   string name;                              │    │  │
│  │  │   int age;                                  │    │  │
│  │  └─────────────────────────────────────────────┘    │  │
│  │                                                     │  │
│  │  ┌─────────────────────────────────────────────┐    │  │
│  │  │ Public:                                     │    │  │
│  │  │   Person(string personName, int personAge); │    │  │
│  │  │   void introduce();                         │    │  │
│  │  │   void celebrateBirthday();                 │    │  │
│  │  └─────────────────────────────────────────────┘    │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─────────────────────┐    ┌─────────────────────┐       │
│  │      Object 1       │    │      Object 2       │       │
│  │                     │    │                     │       │
│  │  Person person1     │    │  Person person2     │       │
│  │  name: "John"       │    │  name: "Sarah"      │       │
│  │  age: 25            │    │  age: 30            │       │
│  └─────────────────────┘    └─────────────────────┘       │
└───────────────────────────────────────────────────────────┘
```

**Output:**

```bash
Hi, I'm John and I'm 25 years old.
Hi, I'm Sarah and I'm 30 years old.
John is now 26 years old.
```

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
## Class Samples

***Simple class***

```cpp
class base
{
    public:
    void print()
    {
    cout<<"1 st class";
    }
};

void main()
{
    base obj1;
    obj1.print();
}
```

***Employee class program***

```cpp
class Employee
{
    private:
        char* m_Name;
        double m_Salary;
    
    public:
    Employee()
    {
        cout<<"in base constructor"<<endl;
    }
    ~Employee()
    {
        cout<<"in base destructor"<<endl;
    }
    void setname(char* name)
    {
        m_Name=name;
    }
    char* getname()
    {
        return m_Name;
    }
    void setsalary(double sal)
    {
        m_Salary=sal;
    }
    double getsal()
    {
        return m_Salary;
    }
};
 
void main()
{
    Employee obj1;
    obj1.setname("SATISH");
    obj1.setsalary(5000);
    cout<<obj1.getname()<<endl;
    cout<<obj1.getsal()<<endl;
}
```

## Classes FAQ

### 1.What is a Class ?

Class is a collection of data members along with member functions.

### 2.What is Object ?

Object is an instance of a class.

### 3.What is a dangling pointer ?

A dangling pointer arises when you use the address of an object after its lifetime is over.

This may occur in situations like returning addresses of the automatic variables from a function or using the address of the memory block after it is freed.

### 4.Define Access Specifiers?

1. Private: A member listed under private is not accessible to any function other than the member functions of the class in which it is used.

2. Protected: Protected makes a member accessible not only to the members of the class but also to the members of the class derived from it.

3. Public: A member declared as public in a class is accesseble publicly. That is any function can access a public member.

### 5.What are the default access specifiers for a structure and a class ?

Default members of class are private.
Default members of structure are public.

### 6.Define Local Class ?

Classes can be defined and used inside a function or block. Such classes are called local classes.
 e.g:

 ```cpp
void test(int a)
{
    class Negative { };
}
```

### 7.Exapalin about Static Data Members (or) Class Variables ?

1. Static Data Members are initialized to zero when the first object of its class is created.  No others initialization is permitted.

2. Only one copy of the member is created for the entire class and is shared by all the objects of that class, no matter how many objects are created.

3. It is visible only with in the class, but its life time is the entire program.

4. Static data is all ways defined outside the class but its declaration is done inside the class.

### 8.When we use Static variables ?

Static variables are normally used to maintain values comment to the entire class

e.g: A static data member can be used as a counted that records the occurrence of all the objects.

### 9.What is a constructor ?

A constructor is a special member function which is called when the object is created. The name of the constructor is same as that of class name

Syntax:

```cpp
className() 
{ 

}
```

### 10.What are the reasons to overload a constructor ?

Reasons:

1. To gain Flexibility

2. To allow both initialized and uninitialized object to be created

3. Define Copy constructor

### 11.What is a Copy Constructor ?

Copy constructor prevent problems that might occur when one object is used to initialize another

### 12.Write the syntax of a Copy Constructor ?

Syntax:

```cpp
className(const className &obj)
{
}
```

Here obj is a reference of the object on the right side of initialization.

### 13.Write a program to demonstrate Copy Constructor ?

Purpose: Demonstrates copy constructor

```cpp
class Sample
{
 int id;
public:
 Sample() { }
 Sample(int a) {
  id = a;
 }
 Sample(const Sample& obj) {
  id = obj.id;
 }
 void display() {
  cout << id;
 }
};

void main() {
 // Object A is created & initialized
 Sample A(100);
 // Copy constructor called
 Sample B(A);
 // Copy constructor called
 Sample C = A;

 // Object D is created but not initialized
 Sample D;
 // Copy constructor NOT called    
 D = A;
 cout << "id of A:";
 A.display();
}
// OUTPUT:
// id of A:100
```

### 14.Why we need a Reference in the copy constructor ?

If we use value then the copy can falls in a recursive loop. When the statement Sample B(A) is executed the copy constructor gets called. A is passed to obj i.e like Sample obj = A . Here obj is getting created initialized.

Hence copy constructor would get called this would result into recursive calls..

```cpp
class Sample
{
 int id;
public:
 Sample() {}
 Sample(Sample obj)
 {
  id = obj.id;
 }
};

void main()
{
 // Object A is created 
 Sample A();
 // Copy constructor called
 Sample B(A);
}
```

### 15.How many times Constructors is called ?

1. When an object is returned by value

2. When an object is passed (to a function) by value as an argument

3. When an object is thrown

4. When an object is caught

5. When an object is placed in a brace-enclosed initializer list or When an object is created from another object of the same type

### 16.Explain about Shallow or Bitwise copy ?

Shallow copy/Bitwise copy:

Refer below diagram : In this process B is attached to the same memory block as A. This is otherwise known as address copy

This results in a situation in which some data is shared between A and B, thus modifying the one will alter the other. The original memory block of B is now no longer referred to from anywhere. If the language does not have automatic garbage collection the original memory block of B has probably been leaked.

The advantage of shallow copies is that their execution speed is fast and does not depend on the size of the data.

### 17.Explain about Deep Copy or Memberwise copy ?

Here the data is actually copied over refer below diagram. The advantage is that A and B do not depend on each other but at the cost of a slower more expensive copy.

***Senario:***

1. when a object is used to initialize c++ performs Bit wise copy  

2. if when an object allocates memory when it is created

```cpp
CSample A;
CSample B = A;
```

### 18.When we need to use a copy constructor ?

If a copy constructor is not defined in a class, the compiler itself defines one. This will ensure a shallow copy. If the class does not have pointer variables with dynamically allocated memory, then one need not worry about defining a copy constructor. It can be left to the compiler's discretion.

But if the class has pointer variables and has some dynamic memory allocations, then it is a must to have a copy constructor.

### 19.What is a Dynamic Constructor ?

The constructor can also be used to allocate memory while creating objects. This will enable the system to allocate the  right amount of memory for each object when objects are not of the the same size . Thus resulting in the saving of memory.

Allocation of memory of the objects at the time of their construction is know as the dynamic construction of objects. The memory is allocated with the help of  new operators.

### 20.What is a Destructor ?

A Destructor is a special member function which is called when the object is destroyed. The name of the Destructor is same as that of class name with title (~) operator preceding the classname.

Syntax:
`~className() {  }`

### 21.What is a Enumeration ?

An enumeration is a set of named integer constants that specify all the legal values a variable of that type may have

Syntax:

```cpp
enum enum_type_name
{
 enumlist
}variableList
```
