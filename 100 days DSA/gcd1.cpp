#include<bits/stdc++.h>
using namespace std;

void gcd(int a,int b){
    while(a>0 && b>0)
    {
      if(a>b)
      a=a%b; 
       else
    {
       b=b%a; 
    } 
    }
    if(a==0)
{
    cout<<b;
}
else{
    cout<<a;
}
}


int main()
{
    int num1,num2;
    cout<<"Enter the first number";
    cin>>num1;
    cout<<"Enter the second number";
    cin>>num2;
    gcd(num1,num2);
    return 0;

}