const express=require("express");
const app= express();
const data=require("./data.json")
let port=3000;
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/:username",(req,res)=>{
   let {username}=req.params;
   let information=data[username];
 
    res.render("instagram",{name:information
    })
});
app.listen(port);
 