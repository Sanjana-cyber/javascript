let  a=[1,2,3];
let  ab=[1,2,3];
console.log(a==ab);
console.log(a===ab);
//special case
let b=a;
console.log(a==b);
a.push(10);
b.push(20);
console.log(a);
console.log(b);
//but in normal variable
let a1=10;
let b1=a1;
a1=a1+1;
b1=b1+2;
console.log(a1);
console.log(b1);


const arr=[1,2,3,4];
console.log(arr[0]=2);
console.log(arr);
arr.push(10);
console.log(arr);
//completely rdeclaration is not allowed in the array 
arr=[4,5,6,7];
