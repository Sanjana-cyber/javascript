let internet_speed=Math.floor(Math.random()*10)+1;

function saveDatabase(data,success,failure)
{
    if(internet_speed>4)
    {
        success(data)
    }
    else
    {
        failure()
    }

}
//callback hell 
saveDatabase("sanjana",(data)=>{
    console.log("sucess  of data saving",data)
    //fetching the second
    saveDatabase("khushi",(data)=>{
      console.log("sucess  of data saving",data)
      saveDatabase("simran",(data)=>{
         console.log("sucess  of data saving",data)

      },
      //failure of third
      ()=>{
             console.log("failure  of data saving")  

      })
    }
    ,
    //failure of second

    ()=>{
     console.log("failure  of data saving")   
    })
},
//failure of first
()=>{
console.log("failure  of data saving")
}

    
)


//promise
 function promise(){
    return new Promise((success,failure)=>{
        if(internet_speed>4)
    {
        success("sucess in saving data")
    }
    else
    {
        failure("failure in saving data")
    }


    })


 }
  console.log(promise());
  


  //methods of promise
   function promise2(){
    return new Promise((success,failure)=>{
        if(internet_speed>4)
    {
        success()
    }
    else
    {
        failure()
    }


    })


 }
  console.log(promise());
  
  promise2("")
  .then(()=>{
    console.log("sucess in saving data")
  })
  .catch(()=>{
    console.log("failure in saving data")
  })

  //promise chaining :multiple then 

  function pchaining(result){
     return new Promise(( resolve,reject)=>{
        if(internet_speed>4)
        { 
            resolve(result)
        }
        else{
            reject(error)

        }
     })
  }
  pchaining("sanjana")
  //first data
  .then((result)=>{
    console.log("data1 is saved",result)
    return pchaining("khushi")

  })
//second data
.then((result)=>{
    console.log("data2 is saved",result)
     return pchaining("simran")

  })
  //third
  .then((result)=>{
    console.log("data3 is saved",result)

  })


  .catch(()=>{
   console.log("data is not saved") 
  })