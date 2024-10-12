#include<bits/stdc++.h>
using namespace std;

bool search(int *arr,int size,int key,int low,int high)
{
    
    // base case
    if(low>=high)
    {
        int mid = (high-low)/2;
    

    if(key==arr[mid])
    {
        cout<<"gotcha"<<endl;
        return true ;
        
    }
    if(arr[mid]<key)
    {
       return search(arr,size,key,mid+1,high);
    }
    else{
        return search(arr,size,key,low,mid-1);
    }
    }
    return false;
}

int main()
{
    int arr[5]={1,2,3,4,5};
    bool ans = search(arr,5,9,0,4);
    cout<<"answers is :"<<ans;
    return 0;
}