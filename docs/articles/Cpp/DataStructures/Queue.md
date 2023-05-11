# Queue

```cpp

#include "iostream"
using namespace std;

#define MAX 10

class Queue
{
private:
	int arr[MAX];
	int front, rear;

public:
	Queue()
	{
		front = -1;
		rear = -1;

	}

	void Add(int item)
	{
		if (rear == MAX - 1)
		{
			cout << endl << "Queue is full";
			return;
		}

		rear++;
		arr[rear] = item;

		if (front == -1)
			front = 0;
	}

	int Delete()
	{
		if (front == -1)
		{
			cout << endl << "Queue is empty";
			return NULL;
		}

		int data = arr[front];

		if (front == rear)
			front = rear = -1;
		else
			front++;

		return data;
	}
};

int main()
{
	Queue q;

	q.Add(1);
	q.Add(2);
	q.Add(3);

	int i = q.Delete();
	cout << endl << "Item deleted = " << i << endl;

	i = q.Delete();
	cout << endl << "Item deleted = " << i << endl;

	return 0;
}

/*
OUTPUT
----------------
Item deleted = 1

Item deleted = 2
*/

```