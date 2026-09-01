const express=require("express");
const app=express();
const { v4: uuidv4 } = require('uuid');


let posts=[
    {
        id:uuidv4(),

        username:"sanjana",
        comment:"i am a good girl"
    },
     {
           id:uuidv4(),
        username:"sahil",
        comment:"i am a bad  boy"
    }
];
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get("/posts",(req,res)=>{
    res.render("rest",{posts})
})

app.get("/posts/new",(req,res)=>{
    res.render("form.ejs")
})

app.post("/posts",(req,res)=>{
    let {username,comment}=req.body;
   
    res.redirect("/posts")
    posts.push({
    username:username,
    comment:comment
});
})


app.get("/posts/:id",(req,res)=>{
    res.render("see.ejs",{posts})
});

let port=3000;
app.listen(port);



