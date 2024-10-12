#include <bits/stdc++.h>
using namespace std;

class node
{
public:
    int data;
    node *next;
    node *prev;

    node(int data)
    {
        this->data = data;
        this->next = NULL;
        this->prev = NULL;
    }
};
// insert at head

void insertAtHead(node *&head, int data)
{
    node *temp = new node(data);
    temp->next = head;
    head->prev = temp;
    head = temp;
}

void insertAtTail(node *&tail, int data)
{
    node *temp = new node(data);
    temp->prev = tail;
    tail->next = temp;
    tail = temp;
}

void insertAtPos(node *&head, node *&tail, int data, int pos)
{
    node *temp = head;
    int cnt = 1;

    while (cnt < pos - 1)
    {
        temp = temp->next;

        cnt++;
    }

    if (pos == 1)
    {
        insertAtHead(head, data);
        return;
    }
    if (temp->next == NULL)
    {
        insertAtTail(tail, data);
        return;
    }

    node *nodeToInsert = new node(data);
    nodeToInsert->next = temp->next;
    temp->next->prev = nodeToInsert;
    temp->next = nodeToInsert;
    nodeToInsert->prev = temp;
}

void print(node *head)
{
    node *temp = head;
    while (temp != NULL)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main()
{
    node *node1 = new node(20);
    node *head = node1;
    node *tail = node1;
    insertAtHead(head, 10);
    insertAtTail(tail, 30);
    insertAtPos(head, tail, 45, 4);
    print(head);
    return 0;
}