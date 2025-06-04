# Exception Handling

```cpp
//Exception Handling
class B {};
class D : public B
{
};
void main()
{
      D derived;
      try {
      throw derived;
      }
      catch (D d)
      {
            cout<<"Derived";
      }
      catch (B b)
      {
          cout<<"Base";
      }
}

```
