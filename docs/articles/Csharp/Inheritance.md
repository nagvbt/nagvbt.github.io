# Inheritance

```cpp
//Syntax
class derivedClassName : Access baseClassName
{
   //Member variables
   //Member functions 
};
//Inheriting multiple base classes
class derived : public base1, public base2
{
   // Body
};
// Constructors, Destructors Execution order
class B
{
public:        
      B()  {   cout<<"constructor B"<<endl;   }
      ~B() {   cout<<"Destructor B"<<endl;    }
};
 
class D1: public B
{
public:       
      D1() {   cout<<"constructor D1"<<endl;  }
      ~D1(){   cout<<"Destructor D1"<<endl;   }
};
 
class D2: public D1
{
public:       
      D2() {   cout<<"constructor D2"<<endl; }
    ~D2(){   cout<<"Destructor D2"<<endl;  }
};
 
 
void main()
{
  cout<<"---Construct D2---"<<endl;
  D2 *pObj = new D2();
  cout<<"---Destruct D2---"<<endl;
  delete pObj; 
}
/*
OUTPUT
---Construct D2---
constructor B
constructor D1
constructor D2
---Destruct D2---
Destructor D2
Destructor D1
Destructor B
*/
```
