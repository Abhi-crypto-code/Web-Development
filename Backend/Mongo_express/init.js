const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main()
    .then(() => {
        console.log("connection successsful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [{
    from: "a",
    to: "b",
    message: "Hi",
    created_at: new Date(),
}, {
    from: "b",
    to: "a",
    message: "Hello",
    created_at: new Date(),
}, {
    from: "a",
    to: "b",
    message: "How are you?",
    created_at: new Date(),
}, {
    from: "b",
    to: "a",
    message: "I am fine, thanks!",
    created_at: new Date(),
}];

Chat.insertMany(allChats);