# Diamond problem - Base class

```cpp
//Virtual Base Classes / Diamond problem
//Ambiguity Exists
class B
{
public:
      int i;
      B()
      {
            i = 20;
      }
};
class D1:  public B
{
};
class D2:  public B
{
};
class C: public D1, public D2
{
};
void main()
{
      C obj;
      cout<<obj.i;//error: ambiguous access of 'i'  
}
//Ambiguity Resolved
class B
{
public:
      int i;
      B()
      {
            i = 20;
      }
};
class D1: virtual public B
{
};
class D2: virtual public B
{
};
class C: public D1, public D2
{
};
void main()
{
      C obj;
      cout<<obj.i;
}
OUTPUT
20

```
