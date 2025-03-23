// // function greet(){
// //     // abc.abc();
// //     throw "404 page not found";
// //     return "hello!";
// // }

// // greet()
// //     .then((result)=>{
// //         console.log("promise was resolved");
// //         console.log("result was :",result);
// //     })
// //     .catch((err)=>{
// //         console.log("promise was rejected with err :",err);
// //     });
// // function getNum(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             let num = Math.floor(Math.random()*10)+1;
// //             console.log(num)

// //         },1000);

// //     });
// // }
// // async function demo(){
// //     await getNum();
// //     await getNum();
// //     await  getNum();
// // }

// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor()
//             h1.style.color = color;
//             console.log(`color changed ot ${color}!`);
//             resolve("color changed!");
//         },delay);
//     });
// }

// async function demo() {
//     await changeColor("red",1000);
//     await changeColor("orange",1000);
//     await changeColor("green",1000);
//     await changeColor("blue",1000);

//     let a = 5;
//     console.log(a);
//     console.log(a+3);
// }

//API 

// let jsonRes  = '{"fact":"On average, a cat will sleep for 16 hours a day.","length":48}';
// console.log(jsonRes);
// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name :"a",
//     marks : 50,
// };

// let val = JSON.stringify(student);
// console.log(val);

let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("data2=",data2.fact);
//     })
//     .catch((err)=>{
//         console.log("Err-",err);
//     });

async function getFacts() {
    try {
        let res = await fetch(url);
        // console.log(res);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);

    }
    catch (e) {
        console.log(e);
    }
    console.log("hello");

}