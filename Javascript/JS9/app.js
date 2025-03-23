// let smallImages = document.getElementsByClassName("oldImg");
// for(let i = 0;i < smallImages.length;i++){
//     // console.dir(smallImages[i].src);
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }
// console.dir(document.querySelector("p"));
// console.dir(document.querySelectorAll("p"));

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red";
document.querySelector('body').append(para1);
para1.classList.add("red");
let h3 = document.createElement("h3");
h3.innerText = "Hey I'm red";
document.querySelector('body').append(h3);
h3.classList.add("blue");
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);