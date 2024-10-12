#include<bits/stdc++.h>
using namespace std;

void doubleArr( int *arr,int size)
{
    if(size==0)
    {
        return;
    }
    cout<<3*arr[0];

    return doubleArr(arr+1,size-1);
}

int main()
{
    int arr[4]={1,2,3,4};
    doubleArr(arr,4);
}