import { useState } from "react";

function Hook_example()
{
    const[count,Setcount] = useState(1);
    
    return(
        <>
            <h2>{count}</h2>
            <button onClick={()=>Setcount(count+1)}>Increase</button>
            <button onClick={()=>Setcount(count-1)}>Decrease</button>
        </>
    )
}

function Color()
{
    const[color,Setcolor] = useState("red");

    return(
        <div 
        style={{backgroundColor:color, height:"300px" ,width:"500px" ,margin:"100px auto"}}>
            <button onClick={()=>Setcolor("blue")}>blue</button>
            <button onClick={()=>Setcolor("yellow")}>yellow</button>
            <button onClick={()=>Setcolor("pink")}>pink</button>
            
        </div>
    )
}

export default Hook_example;
export {Color};