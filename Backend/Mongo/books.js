const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema = new mongoose.Schema({
    title:
    {
        type: String,
        required : true,
        maxLength: 20
    },
    author: {
        type: String
    },

    price: {
        type: Number,
        min : [1,"Price is too low for selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);


// const book1 = new Book({
//     title: "Mathematics",
//     author: "R D Sharma",
//     price: -1,
//     discount : 50,
//     category : "non-fiction",
//     genre : "education",
    
// });
// book1
//     .save().then((res) => console.log(res))
//     .catch((err) => console.log(err));


Book.findByIdAndUpdate('685427f68ffb60609fb3cec0',{price : -500},{runValidators : true})
.then((res)=>console.log(res))
.catch((err)=> console.log(err.errors.price.properties.message));