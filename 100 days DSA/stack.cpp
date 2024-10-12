#include<bits/stdc++.h>
using namespace std;

stack<int> copyStack(stack<int> &input)
{
    stack<int> temp;
    while(!input.empty()){
    int curr = input.top();
    input.pop();
    temp.push(curr);
    }
    stack<int> result;
    while(!temp.empty()){
    int curr = temp.top();
    temp.pop();
    result.push(curr);
    }
    return result;
}

void insertAtbottom(stack<int>&st,int x)
{
    if(st.empty())
    {
        st.push(x);
        return;
    }

    int curr=st.top();
    st.pop();
    insertAtbottom(st,x);
    st.push(curr);
}

void reverse(stack<int>&st)
{
    if(st.empty())
    {
     return;
    }

    int curr = st.top();
    st.pop();
    reverse(st);
    insertAtbottom(st,curr);

}




int main()
{
    stack<int> st;
    st.push(1);
    st.push(2);
    st.push(3);
    st.push(4);
    int x=6;

   reverse(st);

   while(!st.empty())
   {
    int curr = st.top();
    st.pop();
    cout<<curr<<endl;
   }
return 0;
}