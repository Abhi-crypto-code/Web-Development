//Q1
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i = 0;i < arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);
//Q2,Q3
let number = 287152;
let count = 0;
let sumDigits = 0;
let temp = number;

while(temp > 0){
    count+=1;
    sumDigits+= (temp%10);
    temp = Math.floor(temp/10);
}
console.log(count,sumDigits);

//Q4
let n = 40;
let fact = 1;
for(let i = 2;i<=n;i++){
    fact*=i;
}
console.log(fact);
//Q5
let maxEle = 0;
for(element of arr){
    if(element > maxEle){
        maxEle = element;
    }
}
console.log(maxEle);