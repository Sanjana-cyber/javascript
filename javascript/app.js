//selecting the element in the dom
let s=document.getElementById("description");
console.dir(s);
document.getElementById("description").innerText="bafukhaothqbvrquiqkB TKLgjv";
let p=document.getElementById("bytgiuk,n");
console.dir(p);
let s1=document.getElementsByClassName("boxLink");
console.dir(s1);
document.getElementsByClassName("boxLink")[0]="JGEGABUKJBLKAGHNO";
let p1=document.getElementsByClassName("bytgiuk,n");
console.dir(p1);
let s2=document.getElementsByTagName("p");
console.dir(s2);
let p2=document.getElementsByTagName("bytgiuk,n");
console.dir(p2);


//manupulation in existing elemnt
s2.innerText="skhfsksn";



 //creating new element 
let paragraph1=document.createElement('p');
paragraph1.innerText="my name is sanjana";
let paragraph2=document.createElement('p');
paragraph2.innerText="byee";
let heading=document.querySelector('h1');




//added the created element in the existing element
heading.prepend(paragraph1);//added at first
heading.append(paragraph2);//added at last





//removing the element
let image=document.querySelector("img")
image.remove();//remove the element







//*...........dom event.........*
//1.mouse events
heading.onmouseenter=function(){
    alert("you have pressed heading")

}

heading.onclick=function()//first message is ignored by onclick 
{
    alert("first time")
}
heading.onclick=function()//second message is executed by on click
{
    alert("second time")
}

//event listener 
//first and second  both function execute
let button=document.querySelector("#description")
button.addEventListener("click",function(){
    alert("first time")
})
button.addEventListener("click",function()
{
    alert("second time")
})


//this in event listener
let submit=document.querySelector("#submit");
submit.addEventListener('click',function()
{
   console.log (this);
   console.dir (this);
   this.innerText="click me"
})
//use of this
//redundant code
paragraph1.addEventListener("click",function()
{
    paragraph1.style.color="red";
})
paragraph2.addEventListener("click",function()
{
    paragraph2.style.color="red";
})
heading.addEventListener("click",function()
{
   heading.style.color="red";
})
//function process
function color()
{
   this.style.color="red";
}
paragraph1.addEventListener("click",color);
paragraph2.addEventListener("click",color);
heading.addEventListener("click",color);


//event argument
// let text=document.querySelector('#text');
// text.addEventListener("click",function(event)
// {
//     console.log(event);
// })


//2.keyboard events
let text=document.querySelector('#text');
text.addEventListener("keyup",function(event)
{
    console.log(event);
    console.log(event.code);
     console.log(event.key);
    
    
})

