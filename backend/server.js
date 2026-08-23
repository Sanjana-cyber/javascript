const express =require("express");

const path = require("path");
const app=express();
let port=3000;
app.listen(port);
app.set("views",path.join(__dirname,"ejs_dir","/views"));
app.set("view engine", "ejs");
app.get("/",(req,res)=>{
   res.render("home");
})