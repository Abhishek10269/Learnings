#include<bits/stdc++.h>
using namespace std;

void checkPrime(int n)
{
    int cnt=0;
    for (int i=1;i<=sqrt(n);i++)
    {
        if(n%i==0)
        {
            cnt++;
            if(n/i!=i)
            {
                cnt++;
            }
        }
    }
    if(cnt==2)
    {
        cout<<"WOHOOOO ITS A PRIME NUMBER";
    }
    else{
        cout<<cnt<<" ITS NOT A PRIME";
    }
}
int main()
{
    int n;
    cout<<"enter the number:";
    cin>>n;
    checkPrime(n);
}