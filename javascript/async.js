//basic of async keyword
async function demo(){

    console.log("hello world");
}
console.log( demo());

//methods of async function 
async function demo2(){
    throw("404 not found")

    console.log("hello world");
}

demo2()
.then((result)=>
{
    console.log("promise is fulfilled and result is:",result)
})

.catch((error)=>{
    console.log("promise is fulfilled and result is:",error)
})

//await keyword
 
let number =Math.floor(Math.random())*10+1;
function get_number(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           console.log(number);
            resolve()
        },1000);
        ;
    }
)
}


 async function retutning_number(){
    await get_number();
    console.log("sanjana")

}
retutning_number()


//change color
 let heading=document.querySelector("h1");
 function change_color( color ,delay){
    return new Promise(( resolve,reject)=>
    {
        setTimeout(()=>{
heading.style.color=color;
resolve()
    },delay)
    })
    
 }
  async function handle(){
    await change_color("red",1000);
    await change_color("green ",1000)
    change_color("yellow ",1000)
  }
  handle();

  //save data in database

  let internet_speed=Math.floor(Math.random()*10)+1;
  function save_data(data){
     return new Promise((resolve)=>{
        if (internet_speed>4){
        resolve(data)
     }
     else{
        throw "not saved"
     }

     })
     
  }
async function give(){
      let result1=await save_data("sanjana");
      console.log(result1)
  let result2=await save_data("khushi");
      console.log(result2)
        let result3=await save_data("simran");
      console.log(result3)}
give();

//handle error also

  let internet_speed1=Math.floor(Math.random()*10)+1;
  function save_data(data){
     return new Promise((resolve)=>{
        if (internet_speed1>4){
        resolve(data)
     }
     else{
        throw "not saved"
     }

     })
     
  }
async function give(){

    try{
      let result1=await save_data("sanjana");
      console.log(result1)
  let result2=await save_data("khushi");
      console.log(result2)
        let result3=await save_data("simran");
      console.log(result3)}
    catch(error)
{
console.log(error)
}}
give();