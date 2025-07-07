const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js");
const methodOverride = require("method-override");

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
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get

app.get("/", (req, res) => {
    res.send("root is working");
});

app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
});

app.post("/chats", (req, res) => {
    let { from, message, to } = req.body;
    let newChat = new Chat({
        from: from,
        message: message,
        to: to,
        created_at: new Date(),
    });
    //console.log(newChat);
    newChat.save()
        .then((res) => {
            console.log(res);
        }).catch(err => console.log(err));
    res.redirect("/chats");
});

//edit
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

// update
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { message: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { message: newMsg }, { runValidators: true, new: true });
    // console.log(updatedChat);
    res.redirect("/chats");
});

//destroy route

app.delete("/chats/:id", async (req, res) => {

    let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");

});

app.get("/chats", async (req, res) => {
    let chat = await Chat.find();
    console.log(chat);
    // res.send("working");
    res.render("index.ejs", { chat });
});


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