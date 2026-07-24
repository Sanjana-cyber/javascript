//reverse an array

#include <iostream>
using namespace std;
void reverse_array(int brr[],int n)
{
    int i;
    int start=0;
    int end =n-1;
   while(start<end)
    {
       swap(brr[start],brr[end]);
        start++;
        end--;
    }
}

int main() {
  int arr[]={1,2,3,4,5};
  int i;
  int n=sizeof (arr)/sizeof (arr[0]);
  reverse_array(arr,n);
  for(i=0;i<n;i++)
  {
    cout<<arr[i]<<"\t";
      
  }

    return 0;
}