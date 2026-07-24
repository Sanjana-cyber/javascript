let num=287152;
let copy=num;
let count=0;
while(copy>0)
{ count++;
    copy=Math.floor(copy/10);

}
console.log(count);
let number=287152;
let sum=0;
while(number>0)
{ let digit=number%10;
    sum=sum+digit;
    number=Math.floor(number/10);
}
console.log(sum);

let array=[1,2,3,4,5];
let n=array.length;
let max=max(array);
console.log(max);