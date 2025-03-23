// const student = {
//     name : "",
//     age : 25,
//     eng:95,
//     math:89,
//     phy : 98,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(avg);
//     }

// }
// // student.getAvg();
// //console.log("hello");
// try{
//     console.log(a);
// }catch(err){
//     console.log(err)
// }
// //arrow function
// const sum = (a,b)=>{
//     console.log(a+b);
// };

// const cube = n =>{
//     return n*n*n;
// };
// const pow = (a,b)=>{
//     console.log(a**b);
// };
// const mul = (a,b)=>a*b;

// console.log("Hi");
// setTimeout(()=>{console.log("Apna College");},4000);
// console.log("Welcome to");

// setInterval(()=>{console.log("Apna College");},1000);

const student={
    name: "aman",
    marks: 95,
    prop:this,//global scope

    getName:function(){
        return this.name;//student object
    },
    getMarks: ()=>{
        console.log(this);
        return this.marks;//parent's scope->window
    },
    getInfo1 : function(){
        setTimeout(()=>{
            console.log("Apna College");//student
        },2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this);//window
        },2000);
    }
};
const a = 5;//global scope