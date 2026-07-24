//1. access all the necessary elements
let input=document.querySelector("input");
let  unorderl=document.querySelector("ul");
let button=document.querySelector("#click")

//after clicking on click button everything is happen
button.addEventListener("click",function()
{
     //2.storing users entered value in a variable
    let user_info=input.value;
    //3.create list  in which user entered input is stored
    let list=document.createElement("li");
    list.innerHTML=user_info
    //create delete button having class delete and name of the button is also delete
    let button2=document.createElement("button")
button2.classList.add("delete")
button2.innerHTML="delete"
//add delete  button inside the list
    list.appendChild(button2)
    //add list inside the unordered list 
    unorderl.appendChild(list);
    //input value again updated as null
  input.value=""
})

//select all the deleted button
let del=document.querySelectorAll(".delete")
//after clicking on delte button everything is get deleted

//with that when we are clicking on even the list our task is get deleted
// for(i of del)
// {
//     this.parentElement.remove()
// }

unorderl.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON")
    event.target.parentElement.remove()
   

})

