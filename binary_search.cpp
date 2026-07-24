#include <iostream>
#include<vector>
using namespace std;

int binary_search(vector<int>a ,int t)
{ int n=a.size();
    int start=0;
    int end=n-1;
    int mid=(start+end)/2;
    while(start<=end)
    {
         int mid=(start+end)/2;
    if(a[mid]>target)
    {
        end=mid-1;
    }
    else if(a[mid]<target)
    {
        start=mid+1;
    }
    else
    {
        int indx=mid;
    }}
    return indx;
}
int main(){
   vector<int>arr={1,2,3,4,5,6,7,12  };
   
    int target=12;
   vector<int>arr={1,2,3,4,5,6,7,12,120  };

    int target1=120;
    int s=binary_search(arr,target);
    cout<<s;
     int p=binary_search(arr1,target1);
     cout<<p;
     return 0;
}
