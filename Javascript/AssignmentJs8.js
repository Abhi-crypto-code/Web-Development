//Q1
function squareAndSum(...arg){
    return arg.reduce((sum,el)=>sum+el*el);
};
console.log(squareAndSum(1,2,4,5));

//Q2
let arr = [1,24,5,7,57];
let newArr = arr.map((el)=>{
    return el+5;
});
console.log(newArr);

//Q3
let words = ["a","bce","edfj"];

let newWords = words.map((el)=>{
    return el.toUpperCase();
});

let newWords2 = words.forEach((el)=>{
    console.log(el.toUpperCase());
});

console.log(newWords);
// console.log(newWords2);

//Q4
const doubleAndReturnArgs = (arr,...args)=>[
    ...arr,...args.map((v)=>v*2),
];
console.log(doubleAndReturnArgs(arr,1,2,4,6,7,8));

//Q5
const mergeObjects = (obj1,obj2)=>({...obj1,obj2});
console.log(mergeObjects({a:1,b:2},{c:3,d:4}));



