const mongoose = require("mongoose");
const {Schema} = mongoose;
main()
  .then(()=>console.log("connection successful"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}
// const userSchema = new Schema({
//   username : String,
//   addresses : [
//     {
//       location : String,
//       city : String,
//     },
//   ],
// });

// const User = mongoose.model("User",userSchema);

// const addUsers = async()=>{
//   let user1 = new User({
//     username : "sherlockhomes",
//     addresses : [
//       {
//         // _id : false,
//         location : "221B Baker Street",
//         city : "London"
//       },
//     ],
//   });
//   user1.addresses.push({location : "P32 WallStreet", city : "London"});
//   await user1.save();
// };


// addUsers();


const orderSchema = new Schema({
  item : String,
  price : Number,
});

const Order = mongoose.model("Order",orderSchema);

// const addOrders = async()=>{
//   let res = await Order.insertMany([
//     {item : "Samosa" , price : 12},
//     {item : "Chips" , price : 20},
//     {item : "Choco" , price : 30},
//   ]);
//   console.log(res);
// };

// addOrders();

const customerSchema = new Schema({
  name : String,
  orders : [
    {
      type : Schema.Types.ObjectId,
      ref : "Order",
    },
  ],
});

//function
customerSchema.post("findOneAndDelete",async(customer)=>{
  if(customer.orders.length){
    let res = await Order.deleteMany({_id : {$in : customer.orders}});
    console.log(res);
  }
});

const Customer = mongoose.model("Customer",customerSchema);

// const addCustomer = async()=>{
//   let cust1 = new Customer({
//     name : "Rahul",
//   });
//   let order1 = await Order.findOne({item : "Chips"});
//   let order2 = await Order.findOne({item : "Choco"});
//   cust1.orders.push(order1);
//   cust1.orders.push(order2);
//   let result = await cust1.save();
//   console.log(result);
// };




const findCustomer = async() => {
  let result = await Customer.find({}).populate("orders");
  console.log(result);
}

// addCustomer();

const addCust = async()=>{
  let newCust = new Customer({
    name : "Rahul kumar",
  });
  let newOrder = new Order({
    item : "Samosa",
    price : 100 ,
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("added new customer");
}


//delete customer

const delCust = async()=>{
  let data = await Customer.findByIdAndDelete('6885292afcf546482d3d215a');
  console.log(data);
};

// addCust();
delCust();

