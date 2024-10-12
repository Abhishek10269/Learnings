
#include<iostream>
using namespace std;

int main()
{
    int n,count=0;
    int num=0;
    cout<<"enter the no.";
    cin>>n;
    while(n>0)
    {
            int last=n%10;
            n=n/10;
            num=num*10+last;
             }
    cout<<num;
    return 0;
}