//!Q1
const arrayAverage = (arr)=>{
    let sum = 0;
    for(let i = 0;i < arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
};

let arr = [1,2,3,4,5];
console.log(arrayAverage(arr));

//Q2
const isEven = n=>{
    if(n%2==0){
        return true;
    }
    else return false;
};

console.log(isEven(4));

//Q3
//output - 1s Hello world

//Q4
//output - 5