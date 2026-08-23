//argument keyword 
function sum()
{
    console.log(arguments);
}
sum (1,2,34);
//rest operator

function  sum4(...args)
{
     return args
}
let sum5=sum4(1,2,3,4,5)
console.log(sum5);

//apply array method
function  sum2(...args)
{
     return args.reduce((res,ele)=> (res+ele))
}
let sum3=sum2(1,2,3,4,5)

console.log(sum3);
