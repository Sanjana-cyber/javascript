let arr=[1,2,3,4,5];
arr.map(function(ele){
    console.log(ele);
})

let newarr=arr.map(function(ele){
   return ele;
})

console.log(newarr);

let newarr2=arr.forEach(function(ele){
   return ele;
})
console.log(newarr2);