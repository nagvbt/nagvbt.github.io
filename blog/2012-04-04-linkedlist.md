---
title: "Simple LinkedList program in C++"
date: "2012-04-04"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "cpp"
  - "data-structures"
---

**Definition:**

A linked list is a data structure that consists of a sequence of data records such that in each record there is a field that contains a reference (i.e., a link) to the next record in the sequence.

```c
#include "stdafx.h"
#include "iostream"
using namespace std;

class LinkList
{
private:
      struct Node
      {
        int data;
        Node\* link;
      }\*p;

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

  Node\* tmp;
  while(p != NULL)
  {
       tmp = p-&gt;link ;
     delete p;
       p = tmp;
  }
}

// Prints the contents of linkedlist
void LinkList::Print()
{
  if (p == NULL)
  {
        cout&lt;&lt; "EMPTY";
        return;
  }

  //Traverse
  Node\* tmp = p;
  while(tmp != NULL)
  {
       cout&lt;data&lt;&lt;endl;
       tmp = tmp-&gt;link ;
  }
}

// Adds a new node at the end of the linkedlist
void LinkList::Append(int num)
{
      Node \*newNode;

      newNode = new Node;
      newNode-&gt;data = num;
      newNode-&gt;link = NULL;

       if(p == NULL)
      {
       //create first node
         p = newNode;
      }
       else
      {
             //Traverse
            Node \*tmp = p;
             while(tmp-&gt;link != NULL)
            {
                  tmp = tmp-&gt;link;
            }

             //add node to the end
        tmp-&gt;link = newNode;
      }
}

// Deletes the specified node from the linkedlist
void LinkList::Delete( int num )
{
   Node \*tmp;

   tmp = p;
   //If node to be delete is first node
   if( tmp-&gt;data == num )
   {
      p = tmp-&gt;link;
      delete tmp;
      return;
   }

   // traverse list till the last but one node is reached
   Node \*tmp2 = tmp;
   while( tmp!=NULL )
   {
      if( tmp-&gt;data == num )
      {
         tmp2-&gt;link = tmp-&gt;link;
         delete tmp;
         return;
      }

      tmp2 = tmp;
      tmp = tmp-&gt;link;
   }
   cout&lt;&lt; "nElement "&lt;&lt;num&lt;&lt;" not Found." ;
}

// Adds a new node at the beginning of the linkedlist
void LinkList::AddatBeg(int num)
{
      Node \*tmp;

       //add new node
      tmp = new Node;
      tmp-&gt;data = num;
      tmp-&gt;link = p;
      p = tmp;
}

//Adds a new node after specified number of nodes
void LinkList::AddAfter(int c, int num)
{
      Node \*tmp;
      Node \*tmp2;
       int i;
       //Skip to the desired portion
       for( i = 0, tmp = p; i
      {
            tmp = tmp-&gt;link;

             //if end of linked list is encountered
             if(tmp == NULL)
            {
                  cout&lt;&lt;endl&lt;&lt; "There are less than "&lt;&lt;c&lt;&lt;" elements" ;
                   return;
            }
      }

       //insert new node
      tmp2 = new Node;
      tmp2-&gt;data = num;
      tmp2-&gt;link = tmp-&gt;link;
      tmp-&gt;link = tmp2;
}

// Counts number of nodes present in the linkedlist
int LinkList::Count()
{
      Node \*tmp;
       int c = 0;

       //Traverse the entire Linked List
       for (tmp = p; tmp != NULL; tmp = tmp-&gt;link)
            c++;

       return (c);
}

void main()
{
      LinkList\* pobj = new LinkList();
      pobj-&gt;Append(11);
      pobj-&gt;Append(22);
      pobj-&gt;Append(33);
      pobj-&gt;Delete(33);
      pobj-&gt;AddatBeg(44);
      pobj-&gt;AddAfter(1, 55);
      pobj-&gt;Print();
      cout&lt;&lt;endl&lt;&lt; "no.="" of="" elements="" in="" linked="" list="&lt;&lt;pobj-&gt;Count()&lt;&lt;&lt;span class=" hiddenspellerror"="" pre=""&gt;endl;

       delete pobj;
}

/\*
OUTPUT
----------------
44
11
55
22

No. of elements in linked list = 4
\*/
```
