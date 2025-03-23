//Q1
let array = [7,9,0,-2];
let n = 3;
console.log(array.slice(0,n));
//Q2
console.log(array.slice(array.length-n));
//Q3
let s = 'r';
if(s.length== 0){
    console.log(true);
}
else{
    console.log(false);
}
//Q4
let str = "AbCd";
let i = 1;
console.log((str[i]===str[i].toLowerCase()));
//Q5
let trimm = "      space        ";
console.log(trimm.trim());
//Q6
if(array.indexOf(4)!=-1){
    console.log(true);
}
else{
    console.log(false);
}

