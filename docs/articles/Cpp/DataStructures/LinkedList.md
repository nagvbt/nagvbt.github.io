
# Linked List

```cpp
#include "iostream"
using namespace std;


class nextList
{
private:
	struct Node
	{
		int data;
		Node* next;
	}*pHead;

public:
	nextList() { pHead = NULL; }
	~nextList();

	void Print();         // Prints the contents of nextedlist
	void Append(int num); // Adds a new Node at the end of the nextedlist
	void Delete(int num); // Deletes the specified Node from the nextedlist

	void AddatBeg(int num);// Adds a new Node at the beginning of the nextedlist
	void AddAfter(int c, int num); // Adds a new Node after specified number of Nodes
	int Count();          // Counts number of Nodes present in the nextedlist


};

void main()
{
	nextList* pobj = new nextList();
	pobj->Append(11);
	pobj->Append(22);
	pobj->Append(33);
	pobj->Delete(33);
	pobj->AddatBeg(44);
	pobj->AddAfter(1, 55);
	pobj->Print();
	cout << endl << "No. of elements in nexted list = " << pobj->Count() << endl;

	delete pobj;
}

/*
OUTPUT
----------------
44
11
55
22

No. of elements in nexted list = 4
*/

nextList::~nextList()
{
	if (pHead == NULL)
		return;

	Node* tmp;
	while (pHead != NULL)
	{
		tmp = pHead->next;
		delete pHead;
		pHead = tmp;
	}
}

// Prints the contents of nextedlist
void nextList::Print()
{
	if (pHead == NULL)
	{
		cout << "EMPTY";
		return;
	}

	//Traverse
	Node* tmp = pHead;
	while (tmp != NULL)
	{
		cout << tmp->data << endl;
		tmp = tmp->next;
	}
}

// Adds a new Node at the end of the nextedlist
void nextList::Append(int num)
{
	Node* newNode;

	newNode = new Node;
	newNode->data = num;
	newNode->next = NULL;

	if (pHead == NULL)
	{
		//create first Node
		pHead = newNode;
	}
	else
	{
		//Traverse
		Node* tmp = pHead;
		while (tmp->next != NULL)
		{
			tmp = tmp->next;
		}

		//add Node to the end  
		tmp->next = newNode;
	}
}

// Deletes the specified Node from the nextedlist
void nextList::Delete(int num)
{
	Node* tmp;

	tmp = pHead;
	//If Node to be delete is first Node
	if (tmp->data == num)
	{
		pHead = tmp->next;
		delete tmp;
		return;
	}

	// traverse list till the last but one Node is reached
	Node* tmp2 = tmp;
	while (tmp != NULL)
	{
		if (tmp->data == num)
		{
			tmp2->next = tmp->next;
			delete tmp;
			return;
		}

		tmp2 = tmp;
		tmp = tmp->next;
	}
	cout << "\nElement " << num << " not Found.";
}

// Adds a new Node at the beginning of the nextedlist
void nextList::AddatBeg(int num)
{
	Node* tmp;

	//add new Node
	tmp = new Node;
	tmp->data = num;
	tmp->next = pHead;
	pHead = tmp;
}

//Adds a new Node after specified number of Nodes
void nextList::AddAfter(int c, int num)
{
	Node* tmp;
	Node* tmp2;
	int i;
	//Skip to the desired portion
	for (i = 0, tmp = pHead; i < c; i++)
	{
		tmp = tmp->next;

		//if end of nexted list is enCountered
		if (tmp == NULL)
		{
			cout << endl << "There are less than " << c << " elements";
			return;
		}
	}

	//insert new Node
	tmp2 = new Node;
	tmp2->data = num;
	tmp2->next = tmp->next;
	tmp->next = tmp2;
}

// Counts number of Nodes present in the nextedlist
int nextList::Count()
{
	Node* tmp;
	int c = 0;

	//Traverse the entire nexted List
	for (tmp = pHead; tmp != NULL; tmp = tmp->next)
		c++;

	return (c);
}

```