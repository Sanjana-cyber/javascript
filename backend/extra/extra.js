const express=require("express");
const app=express();
let port=3000;
app.listen(port);

//by get everything is visible at the query string that is why it is use to get the data
// app.get("/register",(req,res)=>{
//     console.log("your form is submitted");
//     let {username}=req.query;
  
//       res.send(`your username is ${username} `)
// })
app.use (express.urlencoded({extended:true}))
app.post("/register",(req,res)=>{
    console.log("your form is submitted");
    let {password}=req.body;
  
      res.send(`your  password is ${password2}`)
})2