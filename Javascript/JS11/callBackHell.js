// // let a = 25;
// // cconsole.log(a);
// // let b = 10;
// // console.log(b);

h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange)nextColorChange();
//     },delay);
// }

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    });
}
changeColor("red",1000)
    .then(()=>{
        console.log("red was completed");
        return changeColor("orange",1000);
    })
    .then(()=>{
        console.log("orange was completed");
        return changeColor("yellow",1000);
    })
    .then(()=>{
        console.log("yellow was completed");
    });

// changeColor("red",1000, ()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000);
//     });
// });
// //callbacks nesting ->call back hell

//
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor((Math.random() * 10) + 1);
//         if (internetSpeed > 4) {
//             resolve("s");
//         }
//         else {
//             reject("f");
//         }
//     });
// }
// // savetoDb("apna college")
// //     .then(() => {
// //         console.log("promise was resolved");
// //     })
// //     .catch(() => {
// //         console.log("promise was rejected");
// //     });
// // savetoDb("apna college")
// //     .then(()=>{
// //         console.log("data1 saved.");
// //         savetoDb("hello world").then(()=>{
// //             console.log("data2 saved");
// //         });
// //     })
// //     .catch(()=>{
// //         console.log("promise was rejected");
// //     });
// // savetoDb("apna college")
// //     .then(()=>{
// //         console.log("data1 saved.");
// //         return savetoDb("hello world")
// //     })
// //     .then(()=>{
// //         console.log("data 2 saved");
// //     })
// //     .catch(()=>{
// //         console.log("promise was rejected");
// //     });
// savetoDb("apna college")
//     .then((result)=>{
//         console.log("data1 saved");
//         console.log(result);
//         return savetoDb("hello world");
//     })
//     .then((result)=>{
//         console.log("data2 saved");
//         console.log(result);
//         return savetoDb("s");
//     })
//     .then((result)=>{
//         console.log("data3 saved");
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log("promise was rejected");
//         console.log(error);
//     });
// // savetoDbPromise("apnacollege")
