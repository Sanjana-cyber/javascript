let array=[1,2,3,4];
let n=array.length;
for(let i =0;i<n;i++)
{
    console.log(array[i]);
}
console.log("for fof");
//for(variable of collection)
for(let i of array)
{
    console.log(i);
}

////nested for of 
let array2=[[1,2,3],[4,5,6],[7,8,9]]
for (elements of array2)
{
    console.log(elements);
}

let arr=[[1,2,3],[4,5,6],[7,8,9]]
for (let elements of arr)
{
    for ( let elements2 of elements)
    {
    console.log(elements2);}
}