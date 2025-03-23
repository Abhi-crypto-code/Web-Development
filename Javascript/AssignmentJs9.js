let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = "Click Me!";



document.querySelector("body").append(input);
document.querySelector("body").append(button);

input.setAttribute("placeholder","username");
button.setAttribute('id','btn');

button = document.querySelector('#btn');
button.style.backgroundColor = "blue";
button.style.color = "white";

let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM practice</u>";

document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);