# Doubly Linked List

```cpp

#include "iostream"
using namespace std;

struct Node
{
    int data;
    struct Node *next;
    struct Node *prev;
}*pHead;
 
/*
 Class Declaration 
 */
class DoublyLinkedList
{
    public:
        void Create_list(int value);
        void Add_atBegin(int value);
        void Add_After(int value, int position);
        void Delete(int value);
        void Search(int value);
        void Print();
        void Count();
        void Reverse();
        DoublyLinkedList()
        {
            pHead = NULL;  
        }
};
 
/*
 * Main: Conatins Menu
 */
int main()
{
    int choice, element, position;
    DoublyLinkedList dl;
    while (1)
    {
        cout<<endl<<"----------------------------"<<endl;
        cout<<endl<<"Operations on Doubly nexted list"<<endl;
        cout<<endl<<"----------------------------"<<endl;         
        cout<<"1.Create Node"<<endl;
        cout<<"2.Add at begining"<<endl;
        cout<<"3.Add after position"<<endl;
        cout<<"4.Delete"<<endl;
        cout<<"5.Display"<<endl;
        cout<<"6.Count"<<endl;
        cout<<"7.Reverse"<<endl;
        cout<<"8.Quit"<<endl;
        cout<<"Enter your choice : ";
        cin>>choice;
        switch ( choice )
        {
        case 1:
            cout<<"Enter the element: ";
            cin>>element;
            dl.Create_list(element);
            cout<<endl;
            break;
        case 2:
            cout<<"Enter the element: ";
            cin>>element;
            dl.Add_atBegin(element);
            cout<<endl;
            break;
        case 3:
            cout<<"Enter the element: ";
            cin>>element;
            cout<<"Insert Element after postion: ";
            cin>>position;
            dl.Add_After(element, position);
            cout<<endl;
            break;
        case 4:
            if (pHead == NULL)
            {                      
                cout<<"List empty,nothing to delete"<<endl;   
                break;
            }
            cout<<"Enter the element for deletion: ";
            cin>>element;
            dl.Delete(element);
            cout<<endl;
            break;
        case 5:
            dl.Print();
            cout<<endl;
            break;
        case 6:
            dl.Count();
            break;    
        case 7:
            if (pHead == NULL)
            {
                cout<<"List empty,nothing to Reverse"<<endl;
                break;
            }
            dl.Reverse();
            cout<<endl;
            break;
        case 8:
            exit(1);
        default:
            cout<<"Wrong choice"<<endl;
        }
    }
    return 0;
}
 
/*
 * Create Double next List
 */
void DoublyLinkedList::Create_list(int value)
{
    Node *s, *temp;
    temp = new Node; 
    temp->data = value;
    temp->next = NULL;

    if (pHead == NULL)
    {
        temp->prev = NULL;
        pHead = temp;
    }
    else
    {
        s = pHead;
        while (s->next != NULL)
  {
            s = s->next;
  }
        s->next = temp;
        temp->prev = s;
    }
}
 
/*
 * Insertion at the beginning
 */
void DoublyLinkedList::Add_atBegin(int value)
{
    if (pHead == NULL)
    {
        cout<<"First Create the list."<<endl;
        return;
    }
    Node *temp = new Node;
 temp->prev = NULL;
    temp->data = value;
    temp->next = pHead;
    pHead->prev = temp;
    pHead = temp;
    cout<<"Element Inserted"<<endl;
}
 
/*
 * Insertion of element at a particular position
 */
void DoublyLinkedList::Add_After(int value, int pos)
{
    if (pHead == NULL)
    {
        cout<<"First Create the list."<<endl;
        return;
    }
    struct Node *tmp, *q;
    int i;
    q = pHead;
    for (i = 0;i < pos - 1;i++)
    {
        q = q->next;
        if (q == NULL)
        {
            cout<<"There are less than ";
            cout<<pos<<" elements."<<endl;
            return;
        }
    }
    tmp = new(struct Node);
    tmp->data = value;
    if (q->next == NULL)
    {
        q->next = tmp;
        tmp->next = NULL;
        tmp->prev = q;      
    }
    else
    {
        tmp->next = q->next;
        tmp->next->prev = tmp;
        q->next = tmp;
        tmp->prev = q;
    }
    cout<<"Element Inserted"<<endl;
}
 
/*
 * Deletion of element from the list
 */
void DoublyLinkedList::Delete(int value)
{
    struct Node *tmp, *q;
     /*first element deletion*/
    if (pHead->data == value)
    {
        tmp = pHead;
        pHead = pHead->next;  
        pHead->prev = NULL;
        cout<<"Element Deleted"<<endl;
        free(tmp);
        return;
    }
    q = pHead;
    while (q->next->next != NULL)
    {   
        /*Element deleted in between*/
        if (q->next->data == value)  
        {
            tmp = q->next;
            q->next = tmp->next;
            tmp->next->prev = q;
            cout<<"Element Deleted"<<endl;
            free(tmp);
            return;
        }
        q = q->next;
    }
     /*last element deleted*/
    if (q->next->data == value)    
    {  
        tmp = q->next;
        free(tmp);
        q->next = NULL;
        cout<<"Element Deleted"<<endl;
        return;
    }
    cout<<"Element "<<value<<" not found"<<endl;
}
 
/*
 * Display elements of Doubly next List
 */
void DoublyLinkedList::Print()
{
    struct Node *q;
    if (pHead == NULL)
    {
        cout<<"List empty,nothing to display"<<endl;
        return;
    }
    q = pHead;
    cout<<"The Doubly next List is :"<<endl;
    while (q != NULL)
    {
        cout<<q->data<<" <-> ";
        q = q->next;
    }
    cout<<"NULL"<<endl;
}
 
/*
 * Number of elements in Doubly next List
 */
void DoublyLinkedList::Count()
{  
    struct Node *q = pHead;
    int cnt = 0;
    while (q != NULL)
    {
        q = q->next;
        cnt++;
    }
    cout<<"Number of elements are: "<<cnt<<endl;
}
 
/*
 * Reverse Doubly next List
 */
void DoublyLinkedList::Reverse()
{
    struct Node *p1, *p2;
    p1 = pHead;
    p2 = p1->next;
    p1->next = NULL;
    p1->prev = p2;
    while (p2 != NULL)arn start
    {
        p2->prev = p2->next;
        p2->next = p1;
        p1 = p2;
        p2 = p2->prev; 
    }
    pHead = p1;
    cout<<"List Reversed"<<endl; 
}
```
