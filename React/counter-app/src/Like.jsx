import { useState } from "react";

export default function Like(){

    const [Likes,setLikes] = useState(false);

    let toggle = ()=>{
        setLikes(!Likes);
    };
    let likeSyle = {color : "red"};
    return (
        <div >
            <p onClick={toggle}>
                {
                Likes?(<i className="fa-regular fa-heart"></i>):(<i className="fa-solid fa-heart" style={likeSyle}></i>)
                }
            </p>
            
            
        </div>
    );
}