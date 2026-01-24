import { use } from "react";
import { useState,useRef,useEffect } from "react";

export default function Reference()
{
    const[inputValue,setinputValue] = useState("");
    const count = useRef(0)

    useEffect(()=>{
        count.current = count.current+1;
    })

    return(
        <>
            <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)}/>
            <h1>Render count : {count.current}</h1>
            <hr/>
        </>
    )
}