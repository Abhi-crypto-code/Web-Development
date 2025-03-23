

// let url = "https://catfact.ninja/fact";

// // async function getFacts() {
// //     try {
// //         let res = await axios.get(url);
// //         console.log(res.fact);
// //     }
// //     catch (e) {
// //         console.log(e);
// //     }
// //     console.log("hello");

// // }
// // let btn = document.querySelector("button");
// // btn.addEventListener("click", async () => {
// //     // console.log("btn was clicked");
// //     let fact = await getFacts();
// //     // console.log(fact);
// //     let p = document.querySelector("#result");
// //     p.innerText = fact;
// // });
// // async function getFacts() {
// //     try {
// //         let res = await axios.get(url);
// //         return res.data.fact;
// //     }
// //     catch (e) {
// //         console.log(e);
// //         return "No fact found";
// //     }

// // }

// let url2 = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let link = await getImg();
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
//     console.log(link);

// });

// async function getImg() {
//     try {
//         let res = await axios.get(url2);
//         // console.log(res);
//         return res.data.message;
//     }
//     catch (e) {
//         console.log(e);
//         return "/";
//     }

// }
// let url = "https://icanhazdadjoke.com/";
// async function getJokes() {
//     try{
//         const config = {headers:{Accept:"application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     }catch(err){
//         console.log(err);
//     }
// }

let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;
    // console.log(country);
    let collArr = await getColleges(country);
    console.log(collArr);
    show(collArr);
});
function show(collArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of collArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
let url = "http://universities.hipolabs.com/search?name=";

// let country = "nepal";


async function  getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("error:",e);
        return [];
    }
}