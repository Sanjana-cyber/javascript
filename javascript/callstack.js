function one() {
    return 1;
}

function two() {
    return 2;
}

function three() {
   
    let ans = two() + one();
    console.log(ans);
}

three();


//call back hell---nesting call back functions 
let heading=document.querySelector("h2")
let heading2=document.querySelector("h1")

function changeColor( color,delay){ 
    setTimeout(()=>{
    heading.style.color=color

},delay)
    


}
changeColor("red",1000)
changeColor("orange",2000)
changeColor("blue",3000)
//but in this case previous function will also run even if one is missing like if something
//problem in red still orange is run not one by one

//this is called callback hell

function changeColor2( color,delay,newChange){ 
    setTimeout(()=>{
    heading2.style.color=color

},delay)
    


}
changeColor2("red",1000,changeColor2("orange",2000,changeColor2("green",3000)))