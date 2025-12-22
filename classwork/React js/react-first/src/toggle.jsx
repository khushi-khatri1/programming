import { useState } from "react";

function Toggle()
{
    const [toggle,settoggle]=useState(true);

    return(
        <>
        {
            toggle?<h1>yes toggle...</h1>:null
        }

        <button onClick={()=>settoggle(!toggle)} id="b1">{toggle?"hide":"show"}</button>
        </>
    )
}
export default Toggle;