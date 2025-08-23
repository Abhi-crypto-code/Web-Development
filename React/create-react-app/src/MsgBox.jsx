
function MsgBox({userName,textColor}){
    return (
        <div>
            <h2 style={{color : textColor}}>Hello, {userName}</h2>
        </div>
    );
}

export default MsgBox;