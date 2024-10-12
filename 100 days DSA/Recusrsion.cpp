#include<bits/stdc++.h>
using namespace std;


int fact(int n)
{
   if (n==0)
   {return 1;}

   return n*fact(n-1);
}
 int cnt=0;
void name(int i, int n)
{
    if(i>n) return;
    cout<<"Abhishek"<<endl;

    name(i+1,n);
}
void number(int i, int n)
{
    if(i>n) return;
    cout<<i<<endl;

    number(i+1,n);
}
void revNumber(int i, int n)
{
    if(i<n) return;
    cout<<i<<endl;

    revNumber(i-1,n);
}
void backtrack(int i)
{
    if(i<1) return;
    backtrack(i-1);
    cout<<i<<endl;

   
}
void paraSummation(int i,int sum)
{
    if(i<1)
    {
        cout<<sum;
        return;
    }
    paraSummation(i-1,sum+i);
}
int funcSum(int n)
{
    if(n==0) {return 0;}
    return n+funcSum(n-1);

}
int main()
{
   
    cout<<funcSum(3);
    return 0;
}
//tc=O(n)