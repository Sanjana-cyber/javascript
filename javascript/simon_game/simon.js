let level=0;
let start=false;
let heading=document.querySelector("H2")
document.addEventListener("keypress",function()
{
    if (start==false)
    {
    heading.innerHTML="Game start! you are at level 0"
  start=true;}

})