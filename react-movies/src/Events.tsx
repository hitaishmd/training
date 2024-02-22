import { useState } from "react";

export default function Events(){
    const [canSee,setCanSee]=useState(false);
    const[text,setText]=useState("");

    function handleCheckboxChanged(){
        setCanSee(!canSee);
    }

function handleKeyUp(e:React.KeyboardEvent<HTMLInputElement>){
        console.log(e.currentTarget.value);
        setText(e.currentTarget.value);
}

    return (
        <>
        <h1>Events Example</h1>
        <input type="checkbox" onChange={handleCheckboxChanged}/>
        {canSee ? <div>You are seeing the secret 420</div>:<span>Click to see this secret</span>}
        <div>
            <button onClick={()=>{alert("I was clicked")}}>Click Me</button>
        </div>
        <div>
            <input type="text" onKeyUp={(e)=>handleKeyUp(e)}/>
        </div>
        <div>
            {text}
        </div>
        </>
    )
}