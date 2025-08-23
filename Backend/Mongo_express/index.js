const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js");
const methodOverride = require("method-override");

const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


main()
    .then(() => {
        console.log("connection successsful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

app.get

app.get("/", (req, res) => {
    res.send("root is working");
});


//new
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404,"Page not found");
    res.render("new.ejs")
});

app.post("/chats", (req, res) => {
    let { from, message, to } = req.body;
    try{
        let newChat = new Chat({
        from: from,
        message: message,
        to: to,
        created_at: new Date(),
        });
        newChat.save()
            .then((res) => {
                console.log(res);
            }).catch(err => console.log(err));
        res.redirect("/chats");
    }catch(err){
        next(err);

    }
    //console.log(newChat);
    
});

function wrapAsync(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    };
};

//edit
app.get("/chats/:id/edit",wrapAsync( async (req, res,next) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if(!chat){
            next(new ExpressError(500,"Chat not found"));
        }
        res.render("edit.ejs", { chat });
}));
// update

app.put("/chats/:id", async (req, res) => {
    try{
        let { id } = req.params;
    let { message: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { message: newMsg }, { runValidators: true, new: true });
    // console.log(updatedChat);
    res.redirect("/chats");
    }catch(err){
        next(err);
    }
});

//destroy route

app.delete("/chats/:id", async (req, res) => {
    try{
    let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    }
    catch(err){
        next(err);
    }

});

app.get("/chats", async (req, res) => {
    try{
        let chat = await Chat.find();
        console.log(chat);
        // res.send("working");
        res.render("index.ejs", { chat });
    }
    catch(err){
        next(err);
    }
});

const handleValError = (err)=>{
    console.log("This is validation Error");
    console.log(err.message);
    return err;
};


app.use((error,req,res,next)=>{
    console.log(error.name);
    if(error.name === "ValidationError"){
        error = handleValError(error);
    }
    let {status = 500,message = "Some error occured"} = error;
    res.status(status).send(message);
})

app.listen(8080, () => {
    console.log("Server started");
});

// let chat1 = new Chat({
//     from : "a",
//     to : "b",
//     message : "Hi",
//     created_at : new Date(),`
// });
// chat1.save()