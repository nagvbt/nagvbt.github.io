# Stack


```cpp
#include "iostream"
using namespace std;

#define MAX 10

class Stack
{
private:
    int arr[MAX];
    int top;

public:
    Stack()
    {
        top = -1;
    }

    void Push(int item)
    {
        if (top == MAX - 1)
        {
            cout << endl << "Stack is full";
            return;
        }

        top++;
        arr[top] = item;
    }

    int Pop()
    {
        if (top == -1)
        {
            cout << endl << "Stack is empty";
            return NULL;
        }

        int data = arr[top];
        top--;

        return data;
    }

};

int main()
{
    Stack s;

    s.Push(1);
    s.Push(2);
    s.Push(3);

    int i = s.Pop();
    cout << endl << "Item popped = " << i << endl;

    i = s.Pop();
    cout << endl << "Item popped = " << i << endl;

    return 0;
}

/*
OUTPUT
----------------
Item popped = 3

Item popped = 2
*/
```