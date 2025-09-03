import { useState } from "react";

export default function LudoBoard(){
    const [moves,setMoves] = useState({blue : 0,green : 0,red : 0,yellow : 0});
    const [arr,setArr] = useState(["initial state"]);
    let updateBlue = () =>{

        // setMoves({...moves,blue : moves.blue += 1});
        // console.log(`Blue moves : ${moves.blue}`);
        // setMoves((prevMoves)=>{
        //     return {...prevMoves,blue : prevMoves.blue + 1};
        // });
        setArr((prevArr)=>{
            return [...prevArr,"blue moves"];
        });
        console.log(arr);
    }
    let updateYellow = () =>{

        // setMoves({...moves,blue : moves.blue += 1});
        // console.log(`Blue moves : ${moves.blue}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow : prevMoves.yellow + 1};
        });
    }
    return (
        <div>
            <p>Game Begins !!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor : "blue"} } onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor : "yellow", color: "black"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor : "green"}}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor : "red"}}>+1</button>
            </div>
        </div>
    );
};