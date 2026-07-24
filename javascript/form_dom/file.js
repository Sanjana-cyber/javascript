let form=document.querySelector('form');



//extracting text from the form
let username=document.querySelector("#text")
let password=document.querySelector("#password")
let text_area=document.querySelector("#text area")
let button=document.querySelector("#submit")


form.addEventListener("submit",function(event)
{
   event.preventDefault();
   
  console.log(username.value)
  console.log(password.value)
  console.log(text.value)
})

//assigment question

let button2 =document.querySelector("#click me");
button2.addEventListener("mouseout",function()
{
  console.log("click mouseout event")
})