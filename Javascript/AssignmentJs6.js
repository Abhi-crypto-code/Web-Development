//Q1

let nextGreater = function(arr,num){
    let res = [];
    for(let i = 0;i < arr.length;i++){
        if(arr[i] > num){
            res.push(arr[i]);
        }
    }
    return res;
}

let arr = [1,2,3,4,5];
let num = 3;

console.log(nextGreater(arr,num));

//Q2

let uniqueElements = function(str){
    let hsh ={};
    let ans = "";
    for(let i = 0;i < str.length;i++){
        if(!hsh[str[i]])ans+=str[i];

        hsh[str[i]] = 1;
    }
    return ans;
}

let str = "abcdabcdefgggh";
console.log(uniqueElements(str));

//Q3
let findLongest = function(country){
    let output = "";
    let len = 0;
    for(let i = 0;i < country.length;i++){
        if(country[i].length > len){
            output = country[i];
            len = country[i].length;
        }
    }
    return output;
}
let country = ["Australia","Germany","United States of America"];
console.log(findLongest(country));
//Q4
let vowelsCount = function(str){
    let vowels = {'a':1,'e':1,'i':1,'o':1,'u':1};
    let count = 0;
    for(let i = 0;i < str.length;i++){
        if(vowels[str[i]])count++;
    }
    return count;
}
let char = "zaeiou";
console.log(vowelsCount(char));

//Q5
let randomGenerator = function(start,end){
    return Math.floor(Math.random()*(end-start))+start;
}
let start = 5;
let end = 10;
console.log(randomGenerator(start,end));

