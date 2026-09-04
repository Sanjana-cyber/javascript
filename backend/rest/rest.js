const express=require("express");
const app=express();
const { v4: uuidv4 } = require('uuid');

var methodOverride = require('method-override')
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
app.use(methodOverride('_method'))

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
        id:uuidv4(),
    username:username,
    comment:comment
});
})


app.get("/posts/:id",(req,res)=>{
    let{id}=req.params;
    console.log(id)
    let info =posts.find((p)=>(p.id==id))
     console.log("Found info:", info);

    res.render("see",{info})
});


app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let edit=posts.find((p)=>(p.id==id));
    res.render("edit.ejs",{edit})
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.comment;
    let update=posts.find((p)=>(p.id==id));
    update.comment=newContent;
   res.redirect("/posts");
})

let port=3000;
app.listen(port);



