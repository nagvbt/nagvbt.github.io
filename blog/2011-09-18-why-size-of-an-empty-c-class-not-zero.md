---
tags: ["C++"]
---

# Why size of an empty C++ class not zero?

To ensure that the addresses of two different objects will be different C++ compiler will allocate one byte of memory. The below sample code explains clearly. Because of this behaviour the addresses of class X objects are not equal even though there is no data present in the class X.

```cpp 
class X {

};

class Y {

};

void main() { 
  X objX1, objX2; Y objY;

cout<<"size of objX1: "<<sizeof(objX1)<<endl; //Output: 1 
cout<<"size of objY: "<<sizeof(objY)<<endl; //Output: 1

//Addresses
 cout<<"Address of objX1: "<<&objX1<<endl; 
 cout<<"Address of objX2: "<<&objX2<<endl;

cout<<"Address of objY: "<<&objY<<endl;

if(&objX1 == &objX2) { 
  cout<<"Never Happens"; 
  }
}
```