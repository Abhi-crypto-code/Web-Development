const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("default path");
});

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    //res.send("i am root");
    res.send(`hello!${username}`);
});

app.get("/search",(req,res)=>{
    let {q} = req.query;
    res.send(`Searched Query was ${q}`);
});
app.get("/apple",(req,res)=>{
    res.send("apple path");
});

app.get("/orange",(req,res)=>{
    res.send("orange path");
});



app.post("/",(req,res)=>{
    res.send("you sent a post request");
});

// app.all("(.*)",(req,res)=>{
//     res.send("page not found");
// });


// app.use((req,res)=>{
//     console.log("request recieved");

//     // res.send({
//     //     name :"apple",
//     //     color : "red",
//     // });

//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";

//     res.send(code);
// });