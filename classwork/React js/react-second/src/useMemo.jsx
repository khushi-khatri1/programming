import React,{useState,useMemo} from "react";

function Example()
{
    const[num,setNum] = useState(0)

    const isEven = useMemo(()=>{
        return num % 2 === 0
        },[num])

    return(
        <>
        <input type="number" onChange={(e)=>setNum(e.target.value)} />
        <h3>{isEven? "Even":"Odd"}</h3>
        </>
    )
}

export default Example;