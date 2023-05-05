---
tags: ["Data Structures", "C++"]
---

# Simple LinkedList program in C++

**Definition:**

A linked list is a data structure that consists of a sequence of data records such that in each record there is a field that contains a reference (i.e., a link) to the next record in the sequence.

```cpp
#include "stdafx.h"
#include "iostream"
using namespace std;

class LinkList
{
private:
      struct Node
      {
        int data;
        Node* link;
      }*p;

public:
      LinkList();
      ~LinkList();

       void Print();         // Prints the contents of linkedlist
       void Append(int num); // Adds a new node at the end of the linkedlist
       void Delete(int num); // Deletes the specified node from the linkedlist

       void AddatBeg(int num);// Adds a new node at the beginning of the linkedlist
       void AddAfter(int c, int num); // Adds a new node after specified number of nodes
       int Count();          // Counts number of nodes present in the linkedlist

};

LinkList::LinkList()
{
  p = NULL;
}

LinkList::~LinkList()
{
  if (p == NULL)
        return;

  Node* tmp;
  while(p != NULL)
  {
       tmp = p->link ;
       delete p;
       p = tmp;
  }
}

// Prints the contents of linkedlist
void LinkList::Print()
{
  if (p == NULL)
  {
        cout<< "EMPTY";
        return;
  }

  //Traverse
  Node* tmp = p;
  while(tmp != NULL)
  {
       cout<data<<endl;
       tmp = tmp->link ;
  }
}

// Adds a new node at the end of the linkedlist
void LinkList::Append(int num)
{
      Node *newNode;

      newNode = new Node;
      newNode->data = num;
      newNode->link = NULL;

       if(p == NULL)
      {
       //create first node
         p = newNode;
      }
       else
      {
             //Traverse
            Node *tmp = p;
             while(tmp->link != NULL)
            {
                  tmp = tmp->link;
            }

             //add node to the end
        tmp->link = newNode;
      }
}

// Deletes the specified node from the linkedlist
void LinkList::Delete( int num )
{
   Node *tmp;

   tmp = p;
   //If node to be delete is first node
   if( tmp->data == num )
   {
      p = tmp->link;
      delete tmp;
      return;
   }

   // traverse list till the last but one node is reached
   Node *tmp2 = tmp;
   while( tmp!=NULL )
   {
      if( tmp->data == num )
      {
         tmp2->link = tmp->link;
         delete tmp;
         return;
      }

      tmp2 = tmp;
      tmp = tmp->link;
   }
   cout<< "nElement "<<num<<" not Found." ;
}

// Adds a new node at the beginning of the linkedlist
void LinkList::AddatBeg(int num)
{
      Node *tmp;

       //add new node
      tmp = new Node;
      tmp->data = num;
      tmp->link = p;
      p = tmp;
}

//Adds a new node after specified number of nodes
void LinkList::AddAfter(int c, int num)
{
      Node *tmp;
      Node *tmp2;
       int i;
       //Skip to the desired portion
       for( i = 0, tmp = p; i
       {
            tmp = tmp->link;

             //if end of linked list is encountered
             if(tmp == NULL)
            {
                  cout<<endl<< "There are less than "<<c<<" elements" ;
                   return;
            }
      }

       //insert new node
      tmp2 = new Node;
      tmp2->data = num;
      tmp2->link = tmp->link;
      tmp->link = tmp2;
}

// Counts number of nodes present in the linkedlist
int LinkList::Count()
{
      Node *tmp;
       int c = 0;

       //Traverse the entire Linked List
       for (tmp = p; tmp != NULL; tmp = tmp->link)
            c++;

       return (c);
}

void main()
{
      LinkList* pobj = new LinkList();
      pobj->Append(11);
      pobj->Append(22);
      pobj->Append(33);
      pobj->Delete(33);
      pobj->AddatBeg(44);
      pobj->AddAfter(1, 55);
      pobj->Print();
      cout<<endl<< "no. of elements in linked list="<<pobj->Count()<<endl;

       delete pobj;
}

/*
OUTPUT
----------------
44
11
55
22

No. of elements in linked list = 4
*/
```
