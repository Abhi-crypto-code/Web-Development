
//Practice Q 1
// 1
let age = 23;
age + 2;
//console.log(age)
let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math) / 3;
//console.log(avg)

//2
let num = 5;
let newNum = num++;
newNum = ++num;
// console.log(num);
// console.log(newNum);

//3

let name = "Abhishek";
console.log("Abhishek".length);
console.log(name[name.length - 1]);
console.log("apnacollege" + 123);
console.log(''.length)
console.log(' '.length)


//Practice Q 2

let color = "red";


if (color === "red") {
    console.log("stop");
}
else if (color === "yellow") {
    console.log("slow down");
}
else if (color === "green") {
    console.log("go");
}

//Practice Q 3
let size = "XL";

if (size === "XL") {
    console.log("Rs.250");
}
else if (size === "L") {
    console.log("Rs.200");
}
else if (size === "M") {
    console.log("Rs.100");
}
else {
    console.log("Rs.50");
}

//Practice Q4

let string = 'abhi';
if (string[0] === 'a' && string.length > 3) {
    console.log("good string");
}
else {
    console.log("not good string")
}

//Practice Q5
let value = 1;

switch (value) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("invalid value");
}
//Practice Q6
let msg = "help! ";
let newMsg = msg.trim().toUpperCase();

let Name = "ApnaCollege";

console.log(Name.slice(4,9));
console.log(Name.indexOf("na"));
console.log(Name.replace("Apna","Our"));

console.log(Name.slice(4,11).replace('l','t'));

//Practice Q7
let months = ["january","july","march","august"];
//final - 'july' 'june' 'march' 'august'
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months);

//Practice Q8

let months_2 = ['january','july','march','august'];
months_2.splice(0,1);
months_2.splice(1,0,'june');
//console.log(months_2);
let lang = ["c","c++","html","javascript","python","java","c#","sql"];
console.log(lang.reverse().indexOf("javascript"));

//Practice Q9
let ticTacToe = [['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(ticTacToe);
ticTacToe[0][1] = 'O';
console.log(ticTacToe);

//Print Odd no.
for(let i = 1;i <=15;i+=2){
    console.log(i);
}
//Print even no.
for(let i = 2;i <=10;i=i+2){
    console.log(i);
}
//multiplication table of 5
for(let i = 5;i <= 50;i = i+5){
    console.log(i);
}

//Q10
let random = Math.floor(Math.random()*100)+1;
console.log(random);
let random2 = Math.floor(Math.random()*5)+20;
console.log(random2);

//Practice Q11
//Q1
const square = (n)=>n*n;
console.log(square(4));

let id = setInterval(()=>{
    console.log("Hello World");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);


//Practice Q12

let nums = [1,2,3,4,99,5,6,78,100];
//Q1
let multiTen = nums.every((ele)=>ele%10==0);
console.log(multiTen);
//Q2
let min = nums.reduce((res,ele)=>{
    if(res < ele){
        return res;
    }
    else{
        return ele;
    }
});
console.log(min);
function getMin(){
    let min = nums.reduce((res,ele)=>{
        if(res < ele){
            return res;
        }
        else{
            return ele;
        }
    });
    return min; 
}
console.log(getMin(nums));
