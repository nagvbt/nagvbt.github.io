# Swapping

## Swapping of Two Strings Without 3rd Variable

```cpp
#include<iostream.h>
#include<conio.h>
void main()
{
  clrscr();
  char* p="Hello";
  char* q="World";
  p=(char*) ((int)p + (int)q);
  q=(char*) ((int)p - (int)q);
  p=(char*) ((int)p - (int)q);
  cout<<p<<" "<<q;
  getch();
}
```

## Swapping of numbers

```cpp
//swapping of two numbers
void main()
{
 int x,y,t,s;
 cout<<"Enter x value";
 cin>>x;
 cout<<"Enter y value";
 cin>>y;
 t=x;
 x=y;
 y=t;
 cout<<"The swapping of 2 no is:";
 cout<<x<<" "<<y;
 cin>>s;
}
 
// swapping no using functions call by value
void swap(int x,int y);//declaration
void main()
{
 int x,y,t,s;
 cout<<"Enter x value";
 cin>>x;
 cout<<"Enter y value";
 cin>>y;
 swap(x,y);
 cout<<"The swapping of 2 no is:";
 cout<<x<<" "<<y;
 cin>>s;
}
void swap(int x,int y)
{
 int t;
           t=x;
 x=y;
 y=t;
}
// swapping no using functions call by Reference(Alias  name )
void swap(int &x,int &y);//declaration
void main()
{
 int x,y,t,s;
 cout<<"Enter x value";
 cin>>x;
 cout<<"Enter y value";
 cin>>y;
 swap(x,y);
 cout<<"The swapping of 2 no is:";
 cout<<x<<" "<<y;
 cin>>s;
}
void swap(int &x,int &y)
{
 int t;
  t=x;
 x=y;
 y=t;
}
// swapping no using functions call by pointer
void swap(int *x,int *y);//declaration
void main()
{
 int x,y,t,s;
 cout<<"Enter x value";
 cin>>x;
 cout<<"Enter y value";
 cin>>y;
 swap(&x,&y);
 cout<<"The swapping of 2 no is:";
 cout<<x<<" "<<y;
 cin>>s;
}
void swap(int *x,int *y)
{
 int t;
  t=*x;
 *x=*y;
 *y=t;
}
```
