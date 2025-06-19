const mongoose = require('mongoose');

main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=> console.log(err));


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User",userSchema);

// const user1 = new User({name : "Adam",age : 34});

// user1
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>console.log(err));
// User.insertMany([
//     {name : "tony",age :32},
//     {name : "bony",age :12},
//     {name : "lony",age :45},
// ]).then((res)=>console.log(res));

// User.find({}).then((data)=>console.log(data));

// User.find({age : {$gte : 30}}).then((data)=>console.log(data));
// User.findOne({age : {$gte : 30}}).then((data)=>console.log(data));
// User.findOne({_id : '68514fb62eade73a7adc53fd'}).then((data)=>console.log(data));
// User.findById('68514fb62eade73a7adc53fd').then((data)=>{
//     console.log(data);
// });

// User.updateMany({age : {$gt : 30}} , {age : 29}).then((data)=>{
//     console.log(data);
// }).catch((err)=>console.log(err));

// User.findOneAndUpdate({name : "Adam"},{age : 23},{new : true}).then((data)=>{
//     console.log(data);
// });

// User.findByIdAndUpdate('68514fb62eade73a7adc53fd',{age : 45},{new : true}).then((data)=>{
//     console.log(data);
// });

// User.deleteMany({name : "Adam"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>console.log(err));

User.findByIdAndDelete('685152e53c597c070f808626').then((res)=>{
    console.log(res);
}).catch((err)=>console.log(err));


