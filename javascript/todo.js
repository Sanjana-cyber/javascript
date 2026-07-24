let list=[];
let request=prompt("enter what u want to perform in the list");
while(true)
{
    if(request=="quit")
    {
        break;
    }
    else if(request=="add")
    {
        let task=prompt("what u want to add in the todo list")
        list.push(task);
    }
  
    else if (request =="view")
    {
for(let i=0;i<n;i++)
{
    console.log(i,list[i]);
}
    }
    else if( reuest=="deleted")
    {
        let idx=prompt("enter the element number  u want to delete");
let s=list.splice(idx,1);
console.log( `${s} is deleted`);

    }
    else
    {
        console.log("wrong prompt");
    }
 
   request=prompt("enter what u want to perform in the list");
}