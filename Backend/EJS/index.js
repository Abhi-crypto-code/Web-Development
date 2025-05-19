const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get("/random",(req,res)=>{
    res.send("random path");
});

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs",{diceVal});
});

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    let data =  instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("notFound.ejs");
    }

    // let followers = [
    //     "a","b","c"
    // ];
    // res.render("instagram",{username,followers});
});

app.listen(port,()=>{
    console.log(`listening on ${port}`);
});
