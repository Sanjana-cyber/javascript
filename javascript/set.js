setTimeout(
    ()=>{
        console.log("hell0")
    },4000
)
setInterval(
    ()=>{
        console.log("world")
    },4000
);
clearInterval();
//for different interbval there is a id which we can in a variable
let id=setInterval(
    ()=>{
        console.log("first")
    },4000
);
console.log(id2)
let id=setInterval(
    ()=>{
        console.log("second")
    },4000
);
console.log(id2)
clearInterval(id);
//this in normal and arrow function
const onj={
    get_info1(){
        setTimeout(
            function(){
                console.log(this)

            },1000
        )


    }
    //window object,
    ,
     get_info2(){
        setTimeout(
            ()=>{
                console.log(this)

            },1000
        )

    }//onj
}
onj.get_info1();
onj.get_info1();