// let arr1 = [1,2,3];
// let arr2 = [2,3,4];

// arr1.sayHello = () =>{
//     console.log("i am an array");
// }

// arr2.sayHello = () =>{
//     console.log("i am an array");
// }
// function personMaker(name,age){
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`Hello ${name}`);
//         }
//     };
//     return person;
    
// }

// let p1 = personMaker("eve",34);//copy
// let p2 = personMaker("ada",45);//copy


//constructor doesn't return anything and start with Captial..

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.talk = function(){
//     console.log(`hi,${this.name}`);
// }

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age  = age;
//     }
//     talk(){
//         console.log(`Hi,${this.name}`);
//     }
// }

// let p1 = new Person("eve",34);
// let p2 = new Person("e",35);


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi,${this.name}`);
    }
}
class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
}