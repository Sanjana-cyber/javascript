const express =require("express");//function
const app=express()//app is object which is use to create server side app
//port where 
let port=3000
//create webserver and start the webserver  and also listen request sent by incoming api
app.listen(port,()=>{
    console.log("web server is starteds")
} )

// app.use((req,res)=>{
//     console.log("request is get")
//     res.send("hi my name is sanjana")
// })


//routing
// app.get("/",(req,res)=>{
//     res.send("this is root")
// })

// app.get("/apple",(req,res)=>{
//     res.send("this is apple")
// })

// app.get("/orange",(req,res)=>{
//     res.send("this is orange  ")
// })

// //for avoiding error
// app.get("/*xyz",(req,res)=>{
//     res.send("this page is never ever exist")
// })

//path parameter:it is a variable that is passes as a parameter 
//  app.get("/:username",(req,res)=>{
//     res.send(`this is my${req.params.username}`)
//  })


//  //print query string
//   app.get("/:username",(req,res)=>{
//    console.log(req.query)
//  })


//query string:whatever is written after question mark
 app.get("search",(req,res)=>{
   console.log(req.query)
 })
