const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override"); 

app.use(express.urlencoded({extended : true}));

app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        //id : "1a",
        id : uuidv4(),
        username : "apnacollege",
        content : "I love coding"
    },
    {
        // id : "2b",
        id : uuidv4(),
        username : "new post 1",
        content : "random content"
    },
    {
        // id : "3b",
        id : uuidv4(),
        username : "new post 2",
        content : "random content"
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    // console.log(post);
    // // console.log(id);
    // res.send("request working");
    res.render("show.ejs",{id,post});
});



app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=>id === p.id);
    post.content = newContent;
    console.log(post);
//    res.send("patch request working");
    req.redirect("/posts");
});



app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    res.render("edit.ejs",{post});
});



app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    // res.send("post request working!");
    res.redirect("/posts");
});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>id !== p.id);
    //res.send("delete post");
    res.redirect("/posts");
});

app.listen(port, ()=>{
    console.log("listening to port : 8080");
});