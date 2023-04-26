# Parameters to Base constructors
Passing parameters to Base class constructors

```cpp
//Passing parameters to Base-class constructors
class B
{
public:        
      B(int i)  {   cout<<"constructor B called value of i:"<<i<<endl;   }
};
 
class D: public B
{
public:       
      D(int i, int j) : B(i)
      {
            cout<<"constructor D called values of i & j are:"<<i<<" ,"<<j<<endl; 
      }
};
 
void main()
{
 D obj(3,6);
}
OUTPUT
constructor B called value of i:3
constructor D called values of i & j are:3 ,6
//Granting Access
class B
{
public:
      int i; // public in base
      B() { i = 10; }
};
// Inherit base as private.
class D: private B
{
public:
      // here is access declaration
      B::i; // make i public again
};
void main()
{
      D obj;       
      cout<<obj.i;
}
OUTPUT
10

```