# Inheritance Program

```cpp
//Base-class access control
class Base
{
public:
	int m_i;
	Base()
	{
	   m_i = 0;
		 m_j = 1;
		 m_k = 2;
	}
 
private:
	int m_j;
protected:
	int m_k;
};
 
class D1:public Base
{
 
};
 
void main()
{
  D1 obj;
	 
	cout<<obj.m_i;
  //cout<<obj.m_j;
	//cout<<obj.m_k;
}
 
// Constructors, Destructors Execution order
class B
{
public:        
	B()
	{
	  cout<<"constructor B"<<endl;
	}
 
	~B()
	{
	  cout<<"Destructor B"<<endl;
	}
};
 
class D1: public B
{
public:        
	D1()
	{
	  cout<<"constructor D1"<<endl;
	}
 
	~D1()
	{
	  cout<<"Destructor D1"<<endl;
	}
};
 
class D2: public D1
{
public:        
	D2()
	{
	  cout<<"constructor D2"<<endl;
	}
 
	~D2()
	{
	  cout<<"Destructor D2"<<endl;
	}
};
 
 
void main()
{
  D2 obj;        
}
 
//Granting Access
class B
{
	public:
	int i; // public in base
	B()
	{
	 i = 10;
	}
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
  int z;        cin>>z;
}
 
 //Passing parameters to base-class Constructors
class B
{
	int m;
	protected:
	int i;
	public:
	B(int x)
	{
		i=x;
		cout << "Constructing base : B\n";
	}
	~B()
	{
		cout << "Destructing base : B\n";
		 
	 }
  };
class D: public B
{
	int j;
	public:
	// derived uses x; y is passed along to base.
	D(int x, int y): B(y)
	{
		j=x;
		cout << "Constructing derived : D\n";
	}
	~D()
	{
		cout << "Destructing derived : D\n";
	}
	void show()
	{
		cout << i << " " << j<<"\n";
	}
};
int main()
{
	D obj(1, 2);        
	obj.show(); // displays 2 1
	return 0;
}
Virtual Base Classes / Diamond problem
class B
{
public:
	int i;
	B()
	{
	i = 10;
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
cout<<obj.i;//error: ambiguous access of 'i'   
}
 
//Virtual Destructor
class B
{
public:
	virtual ~B()
	{
	 cout<<"destructor B"<<endl;
	}
};
 
class D: public B
{
public:
	int *p;
	D()
	{
		p = new int;
		*p = 10;                 
	}
	 
	~D()
	{
		cout<<"destructor D"<<endl;
		delete p;
	}
 
};
 
void main()
{
	int z;
	B *pobjB;
	 
	D *pobjD = new D();
 
	pobjB = pobjD;
	//cout<<*((D*)objB)->p;
	delete pobjB;
 
	cin>>z;
}
```