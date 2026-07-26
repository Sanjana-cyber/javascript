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

saveDatabase("sanjana",(data)=>{
    console.log("sucess  of data fetching",data),(data)=>{
    console.log("sucess  of data fetching",data)
}
},()=>{
console.log("failure  of data fetching")
}

    
)