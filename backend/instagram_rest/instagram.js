const express=require("express");
const app=express();

let instagram=[
    {
        username:"sanjana",
        passsword:"sanjana12",
        bio :"be ur own sunshine"
    },
     {
        username:"sahil",
        passsword:"sahil12",
        bio :"my life my rule"
    },
];

app.use("view engine","ejs");
 
let port= 3000;
app.listen(port)