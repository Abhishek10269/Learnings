#include<bits/stdc++.h>
using namespace std;

bool search(int *arr,int target,int size)
{
    if(size==0)
    {
        return false;
    }
    if(arr[0]==target)
    {
        return true;
    }
    else{
        return search(arr+1,target,size-1);
    }

}
int main()
{
    int arr[4]={3,4,2,3};
    bool ans = search(arr,2,4);
    cout<<"the ans is"<<ans;
}