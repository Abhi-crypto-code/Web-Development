
// // let btn = document.querySelector("button");
// // btn.onclick = function(){
// //     alert("button was clicked");
// // };

// // let btns = document.querySelectorAll("button");

// // for(btn of btns){
// //     // btn.onclick = sayHello;
// //     // // btn.onmouseenter = function(){
// //     // //     console.log("you hit a button");
// //     // // }
// //     // // console.dir(btn);
// //     // btn.onclick = sayName;
// //     btn.addEventListener("click",sayHello);
// //     btn.addEventListener("click",sayName); 
// // }
// // function sayHello(){
// //     alert("Hello!");
// // }
// // function sayName(){
// //     alert("Apna College");
// // }

// // let p = document.querySelector("p");

// // p.addEventListener("click",function(){
// //     console.log("para was clicked");
// // });

// // let box = document.querySelector(".box");
// // box.addEventListener("mouseenter",function(){
// //     console.log("mouse inside box");
// // });
// let btn = document.querySelector("button");
// // let p = document.querySelector("p");
// // let h1 = document.querySelector("h1");
// // let h3 = document.querySelector("h3");

// // btn.addEventListener("click",function(){
// //     console.dir(this.innerText);
// //     this.style.backgroundColor = "blue";
// // });
// // function changeColor(){
// //     console.dir(this.innerText);
// //     this.style.backgroundColor = "blue";
// // }
// // btn.addEventListener("click",changeColor);
// // p.addEventListener("click",changeColor);

// let input = document.querySelector("input");
// // input.addEventListener("keydown",function(event){
// //     console.log("key = ",event.key);
// //     console.log("code = ",event.code);
// //     console.log("key was pressed");
// // });
// input.addEventListener("keydown",function(event){
//     console.log("code =",event.code);
//     if(event.code == "ArrowUp"){
//         console.log("up");
//     }else if(event.code == "ArrowDown"){
//         console.log("down");
//     }else if(event.code == "ArrowLeft"){
//         console.log("left");
//     }else if(event.code == "ArrowRight"){
//         console.log("right");
//     }
// });

// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#password");
//     // console.log(user.value);
//     // console.log(pass.value);
//     // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
//     // let user = this.elements[0];
//     // let pass = this.elements[1];
//     // console.log(user.value);
//     // console.log(pass.value);
//     // console.dir(form);
//     // let user = document.querySelector("#user");

//     // user.addEventListener("change",function(event){
//     //     event.preventDefault();
//     //     console.log("input changed");
//     //     console.log("final value =",this.value);
//     // });
//     // user.addEventListener("input",function(event){
//     //     event.preventDefault();
//     //     console.log("input event");
//     //     console.log("final value =",this.value);
//     // });
   

// });

let inp = document.querySelector("input");
let p = document.querySelector("p");

inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText = inp.value;
});
