let array=[1,2,3,4];
let brr=array;
console.log(brr);
brr.push(2);
console.log(array);
//now we are passing /copying the value
let crr=[...array];
console.log(crr);
crr.push(6);
console.log(array);
//use case
let arrray=[2,4,5,6,89];
//wrong way 
console.log(Math.max(arrray));
//correct way of finding maximum
console.log(Math.max(...arrray));