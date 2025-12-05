import { useState } from "react";

function Ab()
{
    const [count,setCount] = useState("banana")
    const ab=(name)=>{
        console.log(name);
        setCount(name);
    }

    return(
    <>
        <h1>{count}</h1>
        <button onClick={()=>ab("apple")}>apple</button>
        <button onClick={()=>ab("banana")}>banana</button>
    </>
    )
}

export default Ab