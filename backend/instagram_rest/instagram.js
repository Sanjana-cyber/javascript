const express=require("express");
const app=express();
var methodOverride = require('method-override')
 
app.use(methodOverride('_method'))
let instagram=[
    {
        username:"sanjana",
        password:"sanjana12",
        bio :"be ur own sunshine"
    },
     {
        username:"sahil",
        password:"sahil12",
        bio :"my life my rule"
    },
];

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

//root route
app.get("/instagram",(req,res)=>{
 res.render("root.ejs",{instagram})
});
 
//create form
app.get("/instagram/new",(req,res)=>{
    res.render("create")
})


// part of create route
app.post("/instagram",(req,res)=>{
    let {username,password,bio}=req.body;
    instagram.push({
        username:username,
        password:password,
        bio:bio
    });
    res.redirect("/instagram")
})

//show detail
app.get("/instagram/:username",(req,res)=>{
    let{username}=req.params;
   let show= instagram.find((p)=>(p.username==username));
        
   console.log(show.password)
    res.render("show",{show})
})

//edit the existing route
app.get("/instagram/:username/edit",(req,res)=>
{
     let{username}=req.params;
   let show= instagram.find((p)=>(p.username==username));
    res.render("edit",{show})
})



//update
app.put("/instagram/:username",(req,res)=>{
    let{username}=req.params;
    let {password,bio}=req.body;
    let show= instagram.find((p)=>(p.username==username));
    show.password=password;
    show.bio=bio;
    res.redirect("/instagram")
    
    
})

//delete
app.delete("/instagram/:username",(res,req)=>{
    let {username}=req.params;
  let instagram=  instagram.filter((p)=>(username!=p.username));
  res.redirect("/instagram");
})
let port= 3000;
app.listen(port)