const mongoose = require("mongoose");
const schema = mongoose.Schema;


const ListingSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    // image : {
    //     type : String,
    //     //default : "https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     //set : (v) => v === ""?"https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
    // },
    image: {
        filename: String,
        url: String
    },

    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;
