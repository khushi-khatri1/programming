import { useState } from "react";

function Calc()
{
    const[n1,setn1] = useState("")
    const[n2,setn2] = useState("")
    const[result,setResult] = useState("")

    return(
        <div>
        <label htmlFor="">Enter First number : </label>
        <input type="number"  onChange={(e)=>setn1(e.target.value)}/>
        <br/><br/>
        <label htmlFor="">Enter Second number : </label>
        <input type="number"  onChange={(e)=>setn2(e.target.value)}/>
        <br/><br/>

        <button onClick={()=>setResult (Number(n1)+Number(n2))}> + </button>
        <button onClick={()=>setResult(n1-n2)}> - </button>
        <button onClick={()=>setResult(n1*n2)}> * </button>
        <button onClick={()=>setResult(n1/n2)}> / </button>

        <h3>Result : {result}</h3>
        </div>
        
    )
    
}
export default Calc;