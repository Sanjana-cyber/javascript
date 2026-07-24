//new method
let arr=[1,2,34,5];
for (element of arr)
{
    console.log(element);
}
//old method
arr.forEach(function(ele)
{
    console.log(ele);
});
arr.forEach((ele)=>
{
    console.log(ele);
});
//array of ibject
let array=[{ name:"sanjana",rollno:7}
   ,{ name:"sahil",rollno:70},{ name:"sanju",rollno:17}]
   for (element of array)
   {
    console.log(element.rollno);
   }
   array.forEach(function(ele)
{
 console.log(ele.rollno);
})