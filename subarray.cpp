#include <iostream>
using namespace std;

int main() {
    int arr[]={1,2,3,4,5};

  int n=sizeof (arr)/sizeof (arr[0]);
 
  for(int i=0;i<n;i++)
  {
    for(int j=i;j<n;j++)
    {
      
for(int k=i;k<j;k++)
{
    cout<<arr[k];
}
cout<<" ";

  }
            cout<<endl; }


  

    return 0;
}

//  1 12 123 1234 
//  2 23 234 
//  3 34 
//  4 
 
//maximum subarray sum using brutes force approach
#include <iostream>
#include <climits>
using namespace std;

int main() {
    int arr[]={1,2,3,4,5};

  int n=sizeof (arr)/sizeof (arr[0]);
 int maximum=INT_MIN;
  for(int i=0;i<n;i++)
  {
      int sum=0;
    for(int j=i;j<n;j++)
    {
        sum =sum+arr[j];
maximum=max(maximum,sum);

  }
 }
cout<<"maximum subarray is "<<maximum;

  

    return 0;
}
//maximum subarray sum using kadane's algorithm
#include <iostream>
#include <climits>
using namespace std;

int main() {
    int arr[]={1,2,3,4,5};

  int n=sizeof (arr)/sizeof (arr[0]);
    int sum=0;
 int maximum=INT_MIN;

    for(int j=0;j<n;j++)
    {
        sum =sum+arr[j];
maximum=max(maximum,sum);
if(sum<0)
{
    sum=0;
}

  }

cout<<"maximum subarray is "<<maximum;

  

    return 0;
}