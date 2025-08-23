const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");
// app.use((req,res)=>{
//     console.log("I am a middleware");
//     res.redirect("/random");
// });

// app.use((req,res,next)=>{
//     console.log("I am first middleware");
//     next();
//     console.log("buffer one");
// });

// app.use((req,res,next)=>{
//     console.log("I am second middleware");
//     return next();
//     console.log("buffer two");
// });

//use middle ware at start
app.use((req,res,next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.time);
    next();

});



// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     else{
//         res.send("ACCESS DENIED!");
//     }
// });

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    else{
        // res.send("ACCESS DENIED!");
        // throw new Error("ACCESS DENIED");
        throw new ExpressError(401,"ACCESS DENIED");
    }
};

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})

app.get("/",(req,res)=>{
    res.send("I am root");
});

app.get("/random",(req,res)=>{
    console.log("random path");
    res.send("random");
});

app.get("/admin",(req,res)=>{

    throw new ExpressError(404,"ACCESS to ADMIN is denied");
});


app.use((err,req,res,next)=>{
    console.log("----Error----");
    // next(err);
    // res.send(err);
    let {status , message} = err;
    res.status(status).send(message);
});



app.use((req,res)=>{
    res.status(404).send("Page not found");
});

app.listen(8080,()=>{
    console.log("listening to port 8080");
});
