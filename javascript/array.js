let arr=[1,2,3,4,5];;
//map it will not make change in the original array so create  a new array
let newarr=arr.map((n)=>{return n*n});
console.log(newarr);    
//filter it will not make change in the original array so create  a new array
let neearr1=arr.filter((n)=>{return n%2==0});
console.log(neearr1);
//find it will return the first element that satisfies the condition
let findarr=arr.find((n)=>{return n%2==0});
console.log(findarr);

//for each it will not return anything but not in new array it will just iterate over the array
arr.forEach((n)=>{console.log(n)});
let newarr2=arr.forEach((n)=>{return n*n});
console.log(newarr2);
//output will be undefined because for each does not return anything

//slice it will return a new array from the given start index to end index
let slicearr=arr.slice(1,4);
console.log(slicearr);

let slice2=arr.slice(3);
console.log(slice2);
let slice_nega=arr.slice(-5);
console.log( slice_nega);
//splice it will modify the original array and return the removed elements
arr.splice(3);
console.log(arr);
//arr.splice(starting index,deleted count)
arr.splice(1,2);
console.log(arr);
//arr.splice(start,deleted count,item o add,item 1 add)
 arr.splice(1,0,3,4)
 console.log(arr);
 console.log(arr[1]);
 arr.splice(1,0,2);
  console.log(arr);
  arr.splice(1,2,2);
   console.log(arr);