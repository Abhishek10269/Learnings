#include<bits/stdc++.h>
using namespace std;


int main()
{
    int A[3][3]={1,2,3,4,0,5,3,7,9};

       for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            if( A[i][j]==0)
            for(int j=0;j<3;j++)
    {
         if( A[i][j]!=0)
         {
            A[i][j]=-1;
         }
    }

             for(int i=0;i<3;i++)
    {
         if( A[i][j]!=0)
         {
            A[i][j]=-1;
         }
    }
        }
    }
    
       for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            if(A[i][j]==-1)
            A[i][j]=0;
        }
    }
       for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            cout<<A[i][j];
        }
        cout<<endl;
    }
    return 0;
}

