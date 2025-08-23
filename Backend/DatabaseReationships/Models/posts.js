const mongoose = require("mongoose");
const {Schema} = mongoose;
main()
  .then(()=>console.log("connection successful"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username : String,
    email : String,
});

const postSchema = new Schema({
    content : String,
    likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
});

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

// const addData = async()=>{
//     let user1 = new User({
//         username : "rahulkumar",
//         email : "rahul@gmail.com",
//     });

//     let post1 = new Post({
//         content : "HI",
//         likes : 400,
//     });
//     post1.user = user1;
//     await user1.save();
//     await post1.save();
// };

// const del = async() =>{
//     await User.findByIdAndDelete("687b96e6e4a19b1c8d85770a");
//     await Post.findByIdAndDelete("687b96e6e4a19b1c8d85770b");
// }; 
// del();
const addData = async()=>{
    // let user = await User.findOne({username : "rahulkumar"});

    // let post2 = new Post({
    //     content : "Bye Bye :)",
    //     likes : 50,
    // });
    // post2.user = user;
    // await post2.save();
    let res = await Post.findOne({}).populate("user","username");
    console.log(res);
}

addData();