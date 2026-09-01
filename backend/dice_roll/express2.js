 const express=require("express");
const app=express();
let port=8000;
let data=Math.floor(Math.random()*6)+1
//initializing the ejs 
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("dice2",{name:data});
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
