// // let arr = [1, 2, 3, 4, 5];

// // let print = function(el){
// //     console.log(el);
// // };

// // arr.forEach(print);

// // arr.forEach(function(el){
// //     console.log(el);
// // });
// // //arrow fuction
// // arr.forEach((el)=>{
// //     console.log(el);
// // });

// let arr = [{
//     name: "aman",
//     marks : 94,
// },{
//     name: "aman",
//     marks : 95,
// },{
//     name: "aman",
//     marks : 98 ,
// }];

// // arr.forEach((student)=>console.log(student.marks));

// let gpa = arr.map((ele)=>{
//     return ele.marks/10;
// });
// // console.log(gpa);
// let nums = [1,2,3,4,56,7,8,9,9,10];
// let ans = nums.filter((el)=>{
//     return el%2==0;
// });
// // console.log(ans);

// // console.log(nums.every((el)=>(el%2==0)));
// let sum = nums.reduce((res,el)=>{
//     // console.log(res);
//     return res+el
// });
// // console.log(sum);

// let max = nums.reduce((res,ele)=>{
//     // console.log(res);
//     return res = Math.max(res,ele);
// });
// console.log(max);

// function sum1(a = 1,b){
//     return a +b;
// };
// console.log(sum1(1));
// console.log(...nums);
// console.log(Math.min(...nums));
// console.log(..."apnacollege");

// arr = [1,2,4,5,67,8];
// let newArr = [...arr];

// let char = [..."hello"];

// let data = {
//     email:"ironman@gmail.com",
//     password:"abcd",
// };

// let dataCopy = {...data,id:123,email:2345};
// console.log(dataCopy);

function sum(...args){
    return args.reduce((sum,el)=>sum+el);
}

console.log(sum(1,4,6,7,8));

function min(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min > el){
            return el;
        }
        else{
            return min;
        }
    });
}

console.log(min(-10,6,7,8,9,-1));

const student = {
    name: "Karan",
    age:14,
    class:9,
    subjects:["hindi","english","math"],
    username :"karan@123",
    password: "abcd",
}
let {username : user , password:secret,city:place = "Delhi"} = student;

console.log(user);
console.log(secret);
console.log(place);