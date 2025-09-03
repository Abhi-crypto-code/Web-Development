function onClickButton(){
    console.log("hello");
}
function onMouseOverText(){
    console.log("bye");
}
function onDoubleClickButton(){
    console.log("dbl click");
}
export default function Button(){
    return (
        <div>
            <button onClick={onClickButton}>Button</button>
            <p onMouseOver={onMouseOverText}>This is the para</p>
            <button onDoubleClick={onDoubleClickButton}>DBL click</button>
        </div>
    );
}