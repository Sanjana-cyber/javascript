let array=[1,2,3,45,6,89];
let reduce=array.reduce(function(res,ele)
{
return res+ele
});
console.log(reduce)


let reduce2=array.reduce(function(res,ele)
{
if(ele>res)
{
    res=ele;
}
return res;
});
console.log(reduce2)