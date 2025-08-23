const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main()
    .then(() => {
        console.log("connection successsful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats = [
  {
    from: "Alice",
    to: "Bob",
    message: "Hey Bob! Long time no see 😊",
    created_at: new Date("2025-06-25T10:12:00"),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "Hey Alice! Yeah, it's been a while. How have you been?",
    created_at: new Date("2025-06-25T10:13:45"),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "I’ve been good! Just busy with work. What about you?",
    created_at: new Date("2025-06-25T10:14:30"),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "Same here. Work's been crazy lately 😅",
    created_at: new Date("2025-06-25T10:15:10"),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "We should definitely catch up sometime soon!",
    created_at: new Date("2025-06-25T10:15:45"),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "Absolutely! Coffee this weekend?",
    created_at: new Date("2025-06-25T10:16:10"),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "Perfect. Saturday afternoon?",
    created_at: new Date("2025-06-25T10:17:00"),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "Sounds good. See you then! ☕",
    created_at: new Date("2025-06-25T10:17:30"),
  },
];
Chat.insertMany(allChats);