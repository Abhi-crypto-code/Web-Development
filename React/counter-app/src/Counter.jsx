import { useState } from "react";
function init(){
    console.log("init executed");
    return Math.random();
}

export default function Counter(){
    const [count,setCount] = useState(init); //initialization
    console.log("rendereding");

    let incCount = ()=>{
        setCount((currCount)=>{
            return currCount+1;
        });
        setCount((currCount)=>{
            return currCount+1;
        });
        // setCount(count+1);
    };
    return(
        <div>
            <h3>Counter = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );

}