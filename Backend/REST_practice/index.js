const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.listen(port,()=>{
    console.log(`app is listening to ${port}`);
});

app.get("/",(req,res)=>{
    res.send("Default path");
});


let tasks = [
    {
        task : "eat"
    },
    {
        task : "sleep"
    },
    {
        task : "study"
    }
];

app.get("/todo",(req,res)=>{
    res.render("index.ejs",{tasks});
});

app.get("/todo/add",(req,res)=>{
    res.render("add.ejs");
});
