#include<bits/stdc++.h>
using namespace std;

class node {
    public:
    int data;
    node* next;

    node(int data)
    {
        this->data=data;
        this->next=NULL;
    }
};

void insertathead(node* &head,int data)
{
    node* temp= new node(data);
    temp->next=head;
    head=temp;

}


void insertAtTail(node* &tail,int data)
{
    node* temp = new node(data);
    tail->next = temp;
    tail = temp;
}

void insertAtPosition(node* &tail,node* &head ,int pos , int data)
{
    node* temp = head;

    int cnt = 1;

    while(cnt<pos-1)
    {
        temp=temp->next;
        cnt++;
    }

    if(pos==1)
    {
        insertathead(head,data);
        return;
    }

    if(temp->next= NULL)
    {
        insertAtTail(tail,data);
        return;
    }
    node* nodeToInsert = new node (data);
    
    nodeToInsert->next=temp->next;
    temp->next=nodeToInsert;
}

void deleteNode(node* &head,int pos)
{
    node* prev = NULL;
    node* curr = head;
    int cnt = 1;
    while(cnt<pos)
    {
      prev = curr;
      curr = curr->next;
      cnt++;
    }
    if(prev == NULL)
    {
        head = curr->next;
    }
    else{
    prev->next = curr->next;
    }
    curr->next=NULL;
    delete curr;
}

void reversedList(node* &head)
{
    node* curr = head;
    node* prev = NULL;
    node* forward = NULL;
    while(curr!=NULL)
    {
       
        forward=curr->next;
        curr->next=prev;
        prev=curr;
        curr=forward;
        
    }
    head=prev;
}

int middleElement(node* &head)
{
    node* temp = head;
    node*tempslow= head;
    {
        while(temp->next!=NULL)
        {
            temp=temp->next;
            tempslow=tempslow->next;
        }
    }
    return tempslow->data;
    
}
int length(node* &head)
{
    node* temp=head;
        int n=0;
        while(temp)
        {
            n++;
            temp=temp->next;
        }
        return n;

}

void print(node* &head)
{
    node* temp = head;
    while(temp != NULL)
    {
        cout<<temp->data<<" ";
        temp = temp->next;
    }

}


int main()
{
    node* node1 = new node(15);
    node* head = node1;
    node* tail = node1;

    insertAtTail(tail,16);
    insertAtTail(tail,17);
    length(head);
    return 0;
}