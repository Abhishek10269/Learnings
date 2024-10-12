#include<bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> ls;
    ls.push_back(10);
    for(int i=1;i<5;i++)
    {
        ls.push_back(i);
    }
    sort(ls.begin(),ls.end());
    for(auto it:ls) cout<<it<<" ";
    return 0;
}