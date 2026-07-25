let level=0;
let start=false;
let heading=document.querySelector("H2")
let array=["red","green","yellow","purple"]

document.addEventListener("keypress",function()
{
    if (start==false)
    {
    heading.innerHTML="Game start! you are at level 0"
  start=true;
level_up()}


})
function button_flash(btn){
  btn.classList.add("flash");
  setTimeout(
    function(){
      btn.classList.remove("flash")
    },500
  )
 
}
 function level_up()
 {
  level++;
  heading.innerHTML=`${level}`;
  let random_idx=Math.floor(Math.random()*3)
 let random_class=array[random_idx]
 let random_btn=document.querySelector(`.${random_class}`)

  button_flash(random_btn);
 }
 