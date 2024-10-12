#include<bits/stdc++.h>
using namespace std;

int cnt=10;

void print()
{
    if(cnt==0) return;
    cout<<cnt<<endl;
    cnt--;
    print();

}

int main()
{
    print();
    return 0;
}
