let button=document.querySelector("button");
let heading=document.querySelector("h1");
let div=document.querySelector("div");

button.onclick=function()
{
    let red=Math.floor(Math.random()*255)
     let blue=Math.floor(Math.random()*255)
      let green=Math.floor(Math.random()*255)
      let color=  `rgb(${red}, ${green}, ${blue})`; 
      div.style.backgroundColor=color

     
      heading.innerText=color;
       return color;
} 